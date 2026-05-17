const seed = require("./data");
const cloudConfig = require("./cloud-config");

const keys = {
  seedVersion: "fm_seed_version",
  dishes: "fm_dishes",
  members: "fm_members",
  currentMember: "fm_current_member",
  votes: "fm_votes",
  menus: "fm_menus",
  shopping: "fm_shopping",
  history: "fm_history"
};

const seedVersion = "2026-05-17-guangdong-hakka-100-v5";
const settingsCacheTtl = 5 * 60 * 1000;
let settingsCache = null;
let settingsCacheAt = 0;

function todayKey() {
  const now = new Date();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const date = `${now.getDate()}`.padStart(2, "0");
  return `${now.getFullYear()}-${month}-${date}`;
}

function read(key, fallback) {
  const value = wx.getStorageSync(key);
  return value || fallback;
}

function write(key, value) {
  wx.setStorageSync(key, value);
  return value;
}

function isCloudReady() {
  return Boolean(cloudConfig.cloudEnvId && wx.cloud);
}

function getDb() {
  return wx.cloud.database();
}

function safeDocId(value) {
  return `${value}`.replace(/[^a-zA-Z0-9_-]/g, "_");
}

function menuDocId(date = todayKey()) {
  return safeDocId(`${cloudConfig.familyId}_${date}`);
}

function voteDocId(date, memberId, dishId) {
  return safeDocId(`${cloudConfig.familyId}_${date}_${memberId}_${dishId}`);
}

function historyDocId(date = todayKey()) {
  return safeDocId(`${cloudConfig.familyId}_${date}`);
}

function seedSettings() {
  return {
    _id: cloudConfig.familyId,
    familyId: cloudConfig.familyId,
    seedVersion,
    members: seed.familyMembers,
    dishes: seed.dishes,
    schedule: {
      voteReminder: "07:30",
      menuDeadline: "08:30",
      shoppingWindow: "08:00-09:00"
    },
    updatedAt: Date.now()
  };
}

function isSameMemberList(members = []) {
  const names = members.map((member) => member.name).join("|");
  const seedNames = seed.familyMembers.map((member) => member.name).join("|");
  return names === seedNames;
}

function isFreshSettings(settings) {
  return Boolean(
    settings &&
      settings.seedVersion === seedVersion &&
      Array.isArray(settings.dishes) &&
      settings.dishes.length === seed.dishes.length &&
      Array.isArray(settings.members) &&
      isSameMemberList(settings.members)
  );
}

function ensureLocalSeedData() {
  const shouldResetSeed = wx.getStorageSync(keys.seedVersion) !== seedVersion;
  if (shouldResetSeed || !wx.getStorageSync(keys.dishes)) {
    write(keys.dishes, seed.dishes);
  }
  if (shouldResetSeed || !wx.getStorageSync(keys.members)) {
    write(keys.members, seed.familyMembers);
  }
  if (shouldResetSeed || !wx.getStorageSync(keys.currentMember)) {
    write(keys.currentMember, seed.familyMembers[0]);
  }
  if (shouldResetSeed) {
    write(keys.seedVersion, seedVersion);
  }
}

async function setCloudDoc(collection, id, data) {
  const { _id, ...safeData } = data;
  await getDb().collection(collection).doc(id).set({ data: safeData });
}

async function removeCloudDoc(collection, id) {
  try {
    await getDb().collection(collection).doc(id).remove();
  } catch (error) {
    // Removing a missing doc is fine for toggle/clear flows.
  }
}

async function removeCloudVotes(where) {
  const collection = getDb().collection(cloudConfig.collections.votes);
  try {
    await collection.where(where).remove();
    return;
  } catch (error) {
    const result = await collection.where(where).limit(100).get();
    await Promise.all((result.data || []).map((vote) => vote._id && collection.doc(vote._id).remove()));
  }
}

async function getCloudSettings(options = {}) {
  if (!isCloudReady()) return null;
  if (!options.force && settingsCache && Date.now() - settingsCacheAt < settingsCacheTtl) {
    return settingsCache;
  }
  const collection = cloudConfig.collections.settings;
  try {
    const result = await getDb().collection(collection).doc(cloudConfig.familyId).get();
    const settings = result.data;
    if (isFreshSettings(settings)) {
      settingsCache = settings;
      settingsCacheAt = Date.now();
      return settings;
    }
  } catch (error) {
    // The first experience build may not have the settings document yet.
  }

  try {
    const settings = seedSettings();
    await setCloudDoc(collection, cloudConfig.familyId, settings);
    settingsCache = settings;
    settingsCacheAt = Date.now();
    return settings;
  } catch (error) {
    console.warn("Cloud settings unavailable, using local data.", error);
    return null;
  }
}

async function resetDefaultSettings() {
  ensureLocalSeedData();
  const settings = seedSettings();
  write(keys.dishes, seed.dishes);
  write(keys.members, seed.familyMembers);
  write(keys.currentMember, seed.familyMembers[0]);
  write(keys.seedVersion, seedVersion);

  if (isCloudReady()) {
    await setCloudDoc(cloudConfig.collections.settings, cloudConfig.familyId, settings);
    settingsCache = settings;
    settingsCacheAt = Date.now();
  }
  return settings;
}

async function ensureSeedData() {
  ensureLocalSeedData();
  const settings = await getCloudSettings();
  if (!settings) return;
  write(keys.dishes, settings.dishes || seed.dishes);
  write(keys.members, settings.members || seed.familyMembers);
}

async function getDishes() {
  ensureLocalSeedData();
  const settings = await getCloudSettings();
  if (settings && settings.dishes) {
    return write(keys.dishes, settings.dishes);
  }
  return read(keys.dishes, []);
}

async function getMembers() {
  ensureLocalSeedData();
  const settings = await getCloudSettings();
  if (settings && settings.members) {
    return write(keys.members, settings.members);
  }
  return read(keys.members, []);
}

function getCurrentMember() {
  ensureLocalSeedData();
  return read(keys.currentMember, seed.familyMembers[0]);
}

async function setCurrentMember(memberId) {
  const members = await getMembers();
  const member = members.find((item) => item.id === memberId);
  if (!member) return getCurrentMember();
  return write(keys.currentMember, member);
}

async function getVotes(date = todayKey()) {
  ensureLocalSeedData();
  if (isCloudReady()) {
    try {
      const result = await getDb()
        .collection(cloudConfig.collections.votes)
        .where({ familyId: cloudConfig.familyId, date })
        .limit(100)
        .get();
      return result.data || [];
    } catch (error) {
      console.warn("Cloud votes unavailable, using local data.", error);
    }
  }

  const votes = read(keys.votes, {});
  return votes[date] || [];
}

function saveLocalVotes(date, list) {
  const votes = read(keys.votes, {});
  votes[date] = list;
  write(keys.votes, votes);
  return list;
}

function toggleLocalVote(date, member, dishId, id, note = "") {
  const votes = read(keys.votes, {});
  const list = votes[date] || [];
  const existedIndex = list.findIndex((vote) => vote.memberId === member.id && vote.dishId === dishId);
  if (existedIndex >= 0) {
    list.splice(existedIndex, 1);
  } else {
    list.push({
      id,
      dishId,
      memberId: member.id,
      memberName: member.name,
      note,
      createdAt: Date.now()
    });
  }
  return saveLocalVotes(date, list);
}

function clearLocalMemberVotes(date, memberId) {
  const votes = read(keys.votes, {});
  return saveLocalVotes(
    date,
    (votes[date] || []).filter((vote) => vote.memberId !== memberId)
  );
}

async function toggleVote(dishId, note = "") {
  const date = todayKey();
  const member = getCurrentMember();
  const id = voteDocId(date, member.id, dishId);

  if (isCloudReady()) {
    try {
      const existed = await getDb()
        .collection(cloudConfig.collections.votes)
        .where({
          familyId: cloudConfig.familyId,
          date,
          memberId: member.id,
          dishId
        })
        .limit(100)
        .get();

      if (existed.data && existed.data.length > 0) {
        await removeCloudDoc(cloudConfig.collections.votes, id);
        await removeCloudVotes({
          familyId: cloudConfig.familyId,
          date,
          memberId: member.id,
          dishId
        });
      } else {
        await setCloudDoc(cloudConfig.collections.votes, id, {
          _id: id,
          familyId: cloudConfig.familyId,
          date,
          dishId,
          memberId: member.id,
          memberName: member.name,
          note,
          createdAt: Date.now()
        });
      }
      return getVotes(date);
    } catch (error) {
      console.warn("Cloud vote update failed, using local data.", error);
      return toggleLocalVote(date, member, dishId, id, note);
    }
  }

  return toggleLocalVote(date, member, dishId, id, note);
}

async function clearMemberVotes(date = todayKey()) {
  const member = getCurrentMember();

  if (isCloudReady()) {
    try {
      const existed = await getDb()
        .collection(cloudConfig.collections.votes)
        .where({
          familyId: cloudConfig.familyId,
          date,
          memberId: member.id
        })
        .limit(100)
        .get();
      await Promise.all(
        (existed.data || []).map((vote) => vote._id && getDb().collection(cloudConfig.collections.votes).doc(vote._id).remove())
      );
      await removeCloudVotes({
        familyId: cloudConfig.familyId,
        date,
        memberId: member.id
      });
      return saveLocalVotes(date, await getVotes(date));
    } catch (error) {
      console.warn("Cloud vote clear failed, using local data.", error);
      return clearLocalMemberVotes(date, member.id);
    }
  }

  return clearLocalMemberVotes(date, member.id);
}

async function summarizeVotes(date = todayKey()) {
  const dishes = await getDishes();
  const votes = await getVotes(date);
  return dishes
    .map((dish) => {
      const dishVotes = votes.filter((vote) => vote.dishId === dish.id);
      return {
        ...dish,
        voteCount: dishVotes.length,
        voterIds: dishVotes.map((vote) => vote.memberId),
        voters: dishVotes.map((vote) => vote.memberName),
        notes: dishVotes.map((vote) => vote.note).filter(Boolean)
      };
    })
    .filter((dish) => dish.voteCount > 0)
    .sort((a, b) => b.voteCount - a.voteCount);
}

async function getTodayMenu(date = todayKey()) {
  ensureLocalSeedData();
  const dishes = await getDishes();
  const validDishIds = dishes.map((dish) => dish.id);
  if (isCloudReady()) {
    try {
      const result = await getDb().collection(cloudConfig.collections.menus).doc(menuDocId(date)).get();
      if (result.data) {
        return {
          ...result.data,
          dishIds: (result.data.dishIds || []).filter((id) => validDishIds.includes(id))
        };
      }
    } catch (error) {
      console.warn("Cloud menu unavailable, using local data.", error);
    }
  }

  const menus = read(keys.menus, {});
  const menu = menus[date] || { date, dishIds: [], updatedAt: null };
  return {
    ...menu,
    dishIds: (menu.dishIds || []).filter((id) => validDishIds.includes(id))
  };
}

function amountToken(amount) {
  const text = `${amount}`.trim();
  const match = text.match(/^(\d+(?:\.\d+)?)(g|kg|斤|个|根|只|把|包|块|盒|颗|杯|勺|罐|份|条|片|头|碗|瓶|斤)$/);
  if (!match) return null;
  return { value: Number(match[1]), unit: match[2] };
}

function formatMergedAmounts(amounts) {
  const unique = Array.from(new Set(amounts));
  const tokens = amounts.map(amountToken);
  if (tokens.every(Boolean)) {
    const units = Array.from(new Set(tokens.map((token) => token.unit)));
    if (units.length === 1) {
      const unit = units[0];
      const total = tokens.reduce((sum, token) => sum + token.value, 0);
      return `${Number.isInteger(total) ? total : total.toFixed(1)}${unit}`;
    }
    if (units.every((unit) => ["g", "kg"].includes(unit))) {
      const totalG = tokens.reduce((sum, token) => sum + (token.unit === "kg" ? token.value * 1000 : token.value), 0);
      return totalG >= 1000 ? `${Number((totalG / 1000).toFixed(1))}kg` : `${totalG}g`;
    }
  }
  return unique.join(" / ");
}

function buildShoppingListFromDishes(dishes, dishIds) {
  const selectedDishes = dishes.filter((dish) => dishIds.includes(dish.id));
  const map = {};
  selectedDishes.forEach((dish) => {
    dish.ingredients.forEach((ingredient) => {
      const key = `${ingredient.category}-${ingredient.name}`;
      if (!map[key]) {
        map[key] = {
          id: key,
          name: ingredient.name,
          category: ingredient.category,
          amounts: [],
          dishes: [],
          checked: false
        };
      }
      map[key].amounts.push(ingredient.amount);
      map[key].dishes.push(dish.name);
    });
  });
  return Object.values(map)
    .map((item) => ({
      ...item,
      amountText: formatMergedAmounts(item.amounts)
    }))
    .sort((a, b) => a.category.localeCompare(b.category, "zh-Hans-CN"));
}

async function buildShoppingList(dishIds) {
  const dishes = await getDishes();
  return buildShoppingListFromDishes(dishes, dishIds);
}

async function saveTodayMenu(dishIds, date = todayKey()) {
  const uniqueDishIds = Array.from(new Set(dishIds));
  const menu = {
    _id: menuDocId(date),
    familyId: cloudConfig.familyId,
    date,
    dishIds: uniqueDishIds,
    updatedAt: Date.now()
  };
  const shoppingList = await buildShoppingList(uniqueDishIds);
  const dishes = await getDishes();
  const selectedDishes = uniqueDishIds.map((id) => dishes.find((dish) => dish.id === id)).filter(Boolean);
  const history = {
    _id: historyDocId(date),
    familyId: cloudConfig.familyId,
    date,
    dishIds: uniqueDishIds,
    dishes: selectedDishes.map((dish) => ({
      id: dish.id,
      name: dish.name,
      category: dish.category,
      time: dish.time,
      tags: dish.tags
    })),
    feedback: {},
    updatedAt: Date.now()
  };

  let synced = !isCloudReady();
  if (isCloudReady()) {
    try {
      await setCloudDoc(cloudConfig.collections.menus, menu._id, menu);
      await setCloudDoc(cloudConfig.collections.shopping, menu._id, {
        _id: menu._id,
        familyId: cloudConfig.familyId,
        date,
        list: shoppingList,
        updatedAt: Date.now()
      });
      await setCloudDoc(cloudConfig.collections.history, history._id, history);
      synced = true;
    } catch (error) {
      console.warn("Cloud menu update failed, using local data.", error);
      synced = false;
    }
  }

  const menus = read(keys.menus, {});
  menus[date] = menu;
  write(keys.menus, menus);
  write(keys.shopping, {
    ...read(keys.shopping, {}),
    [date]: shoppingList
  });
  write(keys.history, {
    ...read(keys.history, {}),
    [date]: history
  });
  return { ...menu, synced };
}

async function getRecentHistory(limit = 7) {
  ensureLocalSeedData();
  if (isCloudReady()) {
    try {
      const result = await getDb()
        .collection(cloudConfig.collections.history)
        .where({ familyId: cloudConfig.familyId })
        .orderBy("date", "desc")
        .limit(limit)
        .get();
      return result.data || [];
    } catch (error) {
      console.warn("Cloud history unavailable, using local data.", error);
    }
  }

  const history = read(keys.history, {});
  return Object.values(history)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

async function clearTodayMenu(date = todayKey()) {
  return saveTodayMenu([], date);
}

async function getMenuDishes(date = todayKey()) {
  const dishes = await getDishes();
  const menu = await getTodayMenu(date);
  return menu.dishIds.map((id) => dishes.find((dish) => dish.id === id)).filter(Boolean);
}

async function getShoppingList(date = todayKey()) {
  ensureLocalSeedData();
  if (isCloudReady()) {
    try {
      const result = await getDb().collection(cloudConfig.collections.shopping).doc(menuDocId(date)).get();
      if (result.data && result.data.list) return result.data.list;
    } catch (error) {
      console.warn("Cloud shopping list unavailable, using local data.", error);
    }
  }

  const shopping = read(keys.shopping, {});
  if (shopping[date]) return shopping[date];
  const menu = await getTodayMenu(date);
  return buildShoppingList(menu.dishIds);
}

async function saveShoppingList(list, date = todayKey()) {
  let synced = !isCloudReady();
  if (isCloudReady()) {
    try {
      await setCloudDoc(cloudConfig.collections.shopping, menuDocId(date), {
        _id: menuDocId(date),
        familyId: cloudConfig.familyId,
        date,
        list,
        updatedAt: Date.now()
      });
      synced = true;
    } catch (error) {
      console.warn("Cloud shopping list update failed, using local data.", error);
      synced = false;
    }
  }

  const shopping = read(keys.shopping, {});
  shopping[date] = list;
  write(keys.shopping, shopping);
  return { list, synced };
}

module.exports = {
  todayKey,
  ensureSeedData,
  getDishes,
  getMembers,
  getCurrentMember,
  setCurrentMember,
  getVotes,
  toggleVote,
  clearMemberVotes,
  summarizeVotes,
  getTodayMenu,
  saveTodayMenu,
  clearTodayMenu,
  getMenuDishes,
  getShoppingList,
  saveShoppingList,
  buildShoppingList,
  resetDefaultSettings,
  getRecentHistory
};
