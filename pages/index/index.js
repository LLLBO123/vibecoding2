const store = require("../../utils/store");
const schedule = require("../../utils/schedule");

Page({
  data: {
    dateText: "",
    currentMember: {},
    ranked: [],
    quickDishes: [],
    dailyStatus: {},
    participation: {},
    busy: false
  },

  onShow() {
    this.refresh();
  },

  async refresh() {
    const currentMember = store.getCurrentMember();
    const votes = await store.getVotes();
    const members = await store.getMembers();
    const votedMemberIds = Array.from(new Set(votes.map((vote) => vote.memberId)));
    const doneMembers = members.filter((member) => votedMemberIds.includes(member.id));
    const pendingMembers = members.filter((member) => !votedMemberIds.includes(member.id));
    const selected = votes.filter((vote) => vote.memberId === currentMember.id).map((vote) => vote.dishId);
    const ranked = (await store.summarizeVotes()).map((item) => ({
      ...item,
      canRemove: item.voterIds.includes(currentMember.id),
      decisionText: `${item.voteCount} 人想吃 · ${item.category} · ${item.time} 分钟`,
      votersText: item.voters.join("、"),
      notesText: item.notes.join("；")
    }));
    const quickDishes = (await store.getDishes())
      .filter((dish) => dish.time <= 20)
      .slice(0, 4)
      .map((dish) => ({ ...dish, selected: selected.includes(dish.id) }));

    this.setData({
      dateText: store.todayKey(),
      currentMember,
      ranked,
      quickDishes,
      dailyStatus: schedule.getDailyStatus(),
      participation: {
        total: members.length,
        done: doneMembers.length,
        pending: pendingMembers.length,
        percent: members.length ? Math.round((doneMembers.length / members.length) * 100) : 0,
        doneText: doneMembers.map((member) => member.name).join("、") || "暂无",
        pendingText: pendingMembers.map((member) => member.name).join("、") || "都已参与"
      }
    });
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

  async removeMyVote(event) {
    if (this.data.busy) return;
    this.setData({ busy: true });
    try {
      await store.toggleVote(event.currentTarget.dataset.id);
      wx.showToast({ title: "已取消", icon: "success" });
      await this.refresh();
    } catch (error) {
      console.error("Remove vote failed.", error);
      wx.showToast({ title: "取消失败，请检查权限", icon: "none" });
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

  goDishes() {
    wx.navigateTo({ url: "/pages/dishes/dishes" });
  },

  goProfile() {
    wx.switchTab({ url: "/pages/profile/profile" });
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
