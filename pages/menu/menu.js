const store = require("../../utils/store");
const schedule = require("../../utils/schedule");

Page({
  data: {
    selectedIds: [],
    selectedDishes: [],
    ranked: [],
    dailyStatus: {},
    peopleCount: 4,
    busy: false,
    syncStatusText: ""
  },

  async onShow() {
    const menu = await store.getTodayMenu();
    await this.setSelectedIdsAndRefresh(menu.dishIds);
  },

  setSelectedIdsAndRefresh(selectedIds) {
    return new Promise((resolve, reject) => {
      this.setData({ selectedIds }, () => {
        this.refresh().then(resolve).catch(reject);
      });
    });
  },

  async refresh() {
    const dishes = await store.getDishes();
    const selectedDishes = this.data.selectedIds.map((id) => dishes.find((dish) => dish.id === id)).filter(Boolean);
    const ranked = (await store.summarizeVotes()).map((item) => ({
      ...item,
      decisionText: `${item.voteCount} 人想吃 · ${item.category} · ${item.time} 分钟`,
      votersText: item.voters.join("、"),
      inMenu: this.data.selectedIds.includes(item.id)
    }));
    this.setData({
      selectedDishes,
      ranked,
      dailyStatus: schedule.getDailyStatus()
    });
  },

  toggleDish(event) {
    const id = event.currentTarget.dataset.id;
    const selectedIds = this.data.selectedIds.includes(id)
      ? this.data.selectedIds.filter((item) => item !== id)
      : [...this.data.selectedIds, id];
    this.setData({ selectedIds }, () => this.refresh());
  },

  removeSelectedDish(event) {
    const id = event.currentTarget.dataset.id;
    const selectedIds = this.data.selectedIds.filter((item) => item !== id);
    this.setData({ selectedIds }, () => this.refresh());
  },

  async clearMenu() {
    if (this.data.busy) return;
    const previousIds = this.data.selectedIds;
    this.setData({ busy: true, selectedIds: [] }, () => this.refresh());
    try {
      const result = await store.clearTodayMenu();
      this.setData({ syncStatusText: result.synced ? "已同步" : "仅本机保存" });
      wx.showToast({ title: "菜单已清空", icon: "success" });
    } catch (error) {
      console.error("Clear menu failed.", error);
      this.setData({ selectedIds: previousIds }, () => this.refresh());
      wx.showToast({ title: "清空失败，请重试", icon: "none" });
    } finally {
      this.setData({ busy: false });
    }
  },

  changePeopleCount(event) {
    const value = Number(event.detail.value) || 1;
    this.setData({
      peopleCount: Math.max(1, Math.min(12, value))
    });
  },

  stepPeople(event) {
    const delta = Number(event.currentTarget.dataset.delta);
    const peopleCount = Math.max(1, Math.min(12, this.data.peopleCount + delta));
    this.setData({ peopleCount });
  },

  pickOne(pool, selectedIds, voteScores = {}) {
    const candidates = pool.filter((dish) => !selectedIds.includes(dish.id));
    if (candidates.length === 0) return null;
    const weighted = candidates.flatMap((dish) => {
      const score = voteScores[dish.id] || 0;
      const timePenalty = dish.time > 80 ? -1 : 0;
      const weight = Math.max(1, 1 + score * 2 + timePenalty);
      return Array.from({ length: weight }, () => dish);
    });
    return weighted[Math.floor(Math.random() * weighted.length)];
  },

  targetDishCount(peopleCount) {
    if (peopleCount <= 2) return 3;
    if (peopleCount <= 4) return 4;
    if (peopleCount <= 6) return 5;
    if (peopleCount <= 8) return 6;
    return 7;
  },

  async randomMenu() {
    const dishes = await store.getDishes();
    const ranked = await store.summarizeVotes();
    const voteScores = ranked.reduce((map, dish) => {
      map[dish.id] = dish.voteCount;
      return map;
    }, {});
    const selectedIds = [];
    const peopleCount = this.data.peopleCount;
    const target = this.targetDishCount(peopleCount);
    const plans = [
      (dish) => ["汤"].includes(dish.category),
      (dish) => ["青菜"].includes(dish.category),
      (dish) => ["广东家常", "荤菜", "客家三宝"].includes(dish.category),
      (dish) => ["蒸菜", "小炒"].includes(dish.category),
      (dish) => ["焖菜", "煲仔菜", "酿菜"].includes(dish.category)
    ];

    plans.forEach((match) => {
      if (selectedIds.length >= target) return;
      const dish = this.pickOne(dishes.filter(match), selectedIds, voteScores);
      if (dish) selectedIds.push(dish.id);
    });

    while (selectedIds.length < target) {
      const dish = this.pickOne(dishes, selectedIds, voteScores);
      if (!dish) break;
      selectedIds.push(dish.id);
    }

    this.setData({ selectedIds }, () => this.refresh());
    wx.showToast({ title: "已随机搭配", icon: "success" });
  },

  async saveMenu() {
    if (this.data.selectedIds.length === 0) {
      wx.showToast({ title: "先选几道菜", icon: "none" });
      return;
    }
    if (this.data.busy) return;
    this.setData({ busy: true });
    try {
      const result = await store.saveTodayMenu(this.data.selectedIds);
      this.setData({ syncStatusText: result.synced ? "已同步" : "仅本机保存" });
      wx.showToast({ title: "买菜清单已生成", icon: "success" });
      wx.switchTab({ url: "/pages/shopping/shopping" });
    } catch (error) {
      console.error("Save menu failed.", error);
      this.setData({ syncStatusText: "同步失败，请重试" });
      wx.showToast({ title: "同步失败，请重试", icon: "none" });
    } finally {
      this.setData({ busy: false });
    }
  },

  async manualRefresh() {
    await this.onShow();
    wx.showToast({ title: "已刷新", icon: "success" });
  },

  async onPullDownRefresh() {
    try {
      await this.onShow();
    } finally {
      wx.stopPullDownRefresh();
    }
  },

  onShareAppMessage() {
    const names = this.data.selectedDishes.map((dish) => dish.name);
    return {
      title: names.length > 0 ? `今日菜单：${names.join("、")}` : "今天吃什么？来一起点菜",
      path: "/pages/menu/menu"
    };
  }
});
