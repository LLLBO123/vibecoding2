const settings = {
  voteReminder: "07:30",
  menuDeadline: "08:30",
  shoppingWindow: "08:00-09:00"
};

function minutesOf(timeText) {
  const [hour, minute] = timeText.split(":").map(Number);
  return hour * 60 + minute;
}

function currentMinutes(now = new Date()) {
  return now.getHours() * 60 + now.getMinutes();
}

function getDailyStatus(now = new Date()) {
  const current = currentMinutes(now);
  const reminder = minutesOf(settings.voteReminder);
  const deadline = minutesOf(settings.menuDeadline);

  if (current < reminder) {
    return {
      phase: "waiting",
      title: "还没到点菜提醒",
      message: `${settings.voteReminder} 提醒大家点菜，${settings.shoppingWindow} 买菜。`
    };
  }

  if (current < deadline) {
    return {
      phase: "voting",
      title: "正在点菜",
      message: `${settings.menuDeadline} 前尽量点完，方便整理买菜清单。`
    };
  }

  return {
    phase: "deadline",
    title: "可以确认菜单了",
    message: `建议现在确认今日菜单，买菜时间是 ${settings.shoppingWindow}。`
  };
}

module.exports = {
  settings,
  getDailyStatus
};
