const store = require("../../utils/store");

Page({
  data: {
    members: [],
    currentMember: {},
    busy: false
  },

  onShow() {
    this.refresh();
  },

  async refresh() {
    this.setData({
      members: await store.getMembers(),
      currentMember: store.getCurrentMember()
    });
  },

  async chooseMember(event) {
    await store.setCurrentMember(event.currentTarget.dataset.id);
    await this.refresh();
    wx.showToast({ title: "已切换成员", icon: "success" });
  },

  async resetDefaults() {
    if (this.data.busy) return;
    this.setData({ busy: true });
    try {
      await store.resetDefaultSettings();
      await this.refresh();
      wx.showToast({ title: "菜品已刷新", icon: "success" });
    } catch (error) {
      console.error("Reset defaults failed.", error);
      wx.showToast({ title: "刷新失败，请检查权限", icon: "none" });
    } finally {
      this.setData({ busy: false });
    }
  }
});
