const store = require("../../utils/store");

Page({
  data: {
    activeCategory: "全部",
    keyword: "",
    categories: [],
    visibleDishes: [],
    busy: false
  },

  onShow() {
    this.refresh();
  },

  async refresh() {
    const dishes = await store.getDishes();
    const votes = await store.getVotes();
    const currentMember = store.getCurrentMember();
    const selected = votes.filter((vote) => vote.memberId === currentMember.id).map((vote) => vote.dishId);
    const categories = ["全部", ...Array.from(new Set(dishes.map((dish) => dish.category)))];
    const keyword = this.data.keyword.trim();
    const visibleDishes = dishes
      .filter((dish) => this.data.activeCategory === "全部" || dish.category === this.data.activeCategory)
      .filter((dish) => {
        if (!keyword) return true;
        const ingredients = dish.ingredients.map((ingredient) => ingredient.name).join("");
        return `${dish.name}${dish.category}${dish.tags.join("")}${ingredients}`.includes(keyword);
      })
      .map((dish) => ({
        ...dish,
        selected: selected.includes(dish.id),
        ingredientsText: dish.ingredients.map((ingredient) => ingredient.name).join("、")
      }));

    this.setData({ categories, visibleDishes });
  },

  setCategory(event) {
    this.setData({ activeCategory: event.currentTarget.dataset.category }, () => this.refresh());
  },

  searchDishes(event) {
    this.setData({ keyword: event.detail.value }, () => this.refresh());
  },

  clearSearch() {
    this.setData({ keyword: "" }, () => this.refresh());
  },

  async toggleVote(event) {
    if (this.data.busy) return;
    this.setData({ busy: true });
    try {
      await store.toggleVote(event.currentTarget.dataset.id);
      await this.refresh();
    } catch (error) {
      console.error("Toggle vote failed.", error);
      wx.showToast({ title: "操作失败，请检查权限", icon: "none" });
    } finally {
      this.setData({ busy: false });
    }
  },

  async clearMyVotes() {
    if (this.data.busy) return;
    this.setData({ busy: true });
    try {
      await store.clearMemberVotes();
      wx.showToast({ title: "已清空点菜", icon: "success" });
      await this.refresh();
    } catch (error) {
      console.error("Clear votes failed.", error);
      wx.showToast({ title: "清空失败，请检查权限", icon: "none" });
    } finally {
      this.setData({ busy: false });
    }
  },

  async manualRefresh() {
    await this.refresh();
    wx.showToast({ title: "已刷新", icon: "success" });
  },

  async onPullDownRefresh() {
    try {
      await this.refresh();
    } finally {
      wx.stopPullDownRefresh();
    }
  }
});
