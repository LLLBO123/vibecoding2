const store = require("../../utils/store");

Page({
  data: {
    list: [],
    groups: [],
    hideChecked: false,
    syncStatusText: ""
  },

  onShow() {
    this.refresh();
  },

  async refresh() {
    const list = (await store.getShoppingList()).map((item) => ({
      ...item,
      amountsText: item.amountText || Array.from(new Set(item.amounts)).join(" / "),
      dishesText: item.dishes.join("、")
    }));
    this.setData({ list, groups: this.groupList(list) });
  },

  groupList(list) {
    const order = ["肉类", "水产", "蔬菜", "豆制品", "蛋奶", "干货", "粮油", "调料", "腌菜", "酒水", "水果", "熟食", "罐头", "速食"];
    const groups = {};
    list.filter((item) => !this.data.hideChecked || !item.checked).forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = { category: item.category, items: [] };
      }
      groups[item.category].items.push(item);
    });
    return Object.values(groups)
      .map((group) => ({
        ...group,
        items: group.items.sort((a, b) => Number(a.checked) - Number(b.checked) || a.name.localeCompare(b.name, "zh-Hans-CN"))
      }))
      .sort((a, b) => {
        const ai = order.includes(a.category) ? order.indexOf(a.category) : 999;
        const bi = order.includes(b.category) ? order.indexOf(b.category) : 999;
        return ai - bi || a.category.localeCompare(b.category, "zh-Hans-CN");
      });
  },

  async toggleItem(event) {
    const id = event.currentTarget.dataset.id;
    const list = this.data.list.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    try {
      const result = await store.saveShoppingList(list);
      this.setData({ list, groups: this.groupList(list), syncStatusText: result.synced ? "已同步" : "仅本机保存" });
    } catch (error) {
      console.error("Save shopping list failed.", error);
      wx.showToast({ title: "同步失败，请重试", icon: "none" });
    }
  },

  async refreshFromMenu() {
    const menu = await store.getTodayMenu();
    try {
      const result = await store.saveTodayMenu(menu.dishIds);
      await this.refresh();
      this.setData({ syncStatusText: result.synced ? "已同步" : "仅本机保存" });
    } catch (error) {
      console.error("Refresh shopping list failed.", error);
      wx.showToast({ title: "重算失败，请重试", icon: "none" });
    }
  },

  toggleHideChecked() {
    this.setData({ hideChecked: !this.data.hideChecked }, () => {
      this.setData({ groups: this.groupList(this.data.list) });
    });
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
  },

  onShareAppMessage() {
    const pending = this.data.list.filter((item) => !item.checked).map((item) => item.name);
    return {
      title: pending.length > 0 ? `今日采购：${pending.slice(0, 8).join("、")}` : "今日采购清单已完成",
      path: "/pages/shopping/shopping"
    };
  }
});
