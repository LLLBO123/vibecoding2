const familyMembers = [
  { id: "dad", name: "爸爸", role: "manager" },
  { id: "mom", name: "妈妈", role: "manager" },
  { id: "grandma", name: "奶奶", role: "manager" },
  { id: "me", name: "廖宇鹏", role: "manager" },
  { id: "elder-sister", name: "大姐", role: "manager" },
  { id: "second-sister", name: "二姐", role: "manager" },
  { id: "younger-brother", name: "老弟", role: "manager" },
  { id: "wife", name: "陈茵", role: "manager" },
  { id: "other", name: "其他人", role: "manager" }
];

function ingredient(name, category, amount) {
  return { name, category, amount };
}

function dish(id, name, origin, category, time, tags, ingredients) {
  return {
    id,
    name,
    origin,
    category,
    time,
    tags: [origin, ...tags],
    ingredients
  };
}

const gd = "广东家常";
const hakka = "客家菜";

const dishes = [
  dish("scrambled-egg-tomato", "番茄炒蛋", gd, "粤式快手小炒", 12, ["快手", "不辣", "小孩爱吃"], [
    ingredient("番茄", "蔬菜", "3个"),
    ingredient("鸡蛋", "蛋奶", "4个"),
    ingredient("小葱", "调料", "1把"),
    ingredient("白糖", "调料", "少许"),
    ingredient("花生油", "粮油", "少许")
  ]),
  dish("bitter-melon-egg", "苦瓜炒蛋", gd, "粤式快手小炒", 15, ["快手", "清爽", "不辣"], [
    ingredient("苦瓜", "蔬菜", "1根"),
    ingredient("鸡蛋", "蛋奶", "4个"),
    ingredient("蒜", "调料", "3瓣"),
    ingredient("花生油", "粮油", "少许")
  ]),
  dish("loofah-scrambled-egg", "丝瓜炒蛋", gd, "粤式快手小炒", 15, ["清淡", "快手", "不辣"], [
    ingredient("丝瓜", "蔬菜", "2根"),
    ingredient("鸡蛋", "蛋奶", "4个"),
    ingredient("蒜", "调料", "3瓣"),
    ingredient("花生油", "粮油", "少许")
  ]),
  dish("shrimp-scrambled-egg", "虾仁炒蛋", gd, "粤式快手小炒", 15, ["快手", "鲜香", "小孩爱吃"], [
    ingredient("虾仁", "水产", "250g"),
    ingredient("鸡蛋", "蛋奶", "4个"),
    ingredient("小葱", "调料", "1把"),
    ingredient("白胡椒粉", "调料", "少许")
  ]),
  dish("chive-scrambled-egg", "韭菜炒蛋", gd, "粤式快手小炒", 12, ["快手", "家常", "不辣"], [
    ingredient("韭菜", "蔬菜", "1把"),
    ingredient("鸡蛋", "蛋奶", "4个"),
    ingredient("花生油", "粮油", "少许")
  ]),
  dish("choy-sum-beef", "菜心炒牛肉", gd, "粤式快手小炒", 20, ["快手", "家常", "下饭"], [
    ingredient("菜心", "蔬菜", "1斤"),
    ingredient("牛肉", "肉类", "300g"),
    ingredient("姜", "调料", "1块"),
    ingredient("淀粉", "粮油", "少许")
  ]),
  dish("ginger-scallion-beef", "姜葱炒牛肉", gd, "粤式快手小炒", 18, ["快手", "下饭", "香口"], [
    ingredient("牛肉", "肉类", "350g"),
    ingredient("姜", "调料", "1大块"),
    ingredient("小葱", "调料", "1把"),
    ingredient("洋葱", "蔬菜", "半个"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("bitter-melon-beef", "苦瓜炒牛肉", gd, "粤式快手小炒", 25, ["快手", "下饭", "家常"], [
    ingredient("牛肉", "肉类", "300g"),
    ingredient("苦瓜", "蔬菜", "1根"),
    ingredient("蒜", "调料", "4瓣"),
    ingredient("豆豉", "调料", "少许"),
    ingredient("淀粉", "粮油", "少许")
  ]),
  dish("tomato-beef", "番茄牛肉", gd, "粤式快手小炒", 35, ["下饭", "不辣", "家常"], [
    ingredient("牛肉", "肉类", "350g"),
    ingredient("番茄", "蔬菜", "3个"),
    ingredient("洋葱", "蔬菜", "半个"),
    ingredient("姜", "调料", "1块"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("eggplant-minced-pork", "肉末茄子", gd, "粤式快手小炒", 25, ["下饭", "家常"], [
    ingredient("茄子", "蔬菜", "2根"),
    ingredient("猪肉末", "肉类", "200g"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("生抽", "调料", "少许")
  ]),

  dish("steamed-sea-bass", "清蒸鲈鱼", gd, "粤式蒸菜", 25, ["清淡", "不辣", "鲜"], [
    ingredient("鲈鱼", "水产", "1条"),
    ingredient("姜", "调料", "1块"),
    ingredient("小葱", "调料", "1把"),
    ingredient("蒸鱼豉油", "调料", "少许"),
    ingredient("花生油", "粮油", "少许")
  ]),
  dish("black-bean-steamed-ribs", "豉汁蒸排骨", gd, "粤式蒸菜", 35, ["下饭", "不辣", "家常"], [
    ingredient("排骨", "肉类", "500g"),
    ingredient("豆豉", "调料", "1勺"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("姜", "调料", "1块"),
    ingredient("淀粉", "粮油", "少许")
  ]),
  dish("steamed-minced-pork-egg", "肉末蒸水蛋", gd, "粤式蒸菜", 18, ["快手", "不辣", "小孩爱吃"], [
    ingredient("鸡蛋", "蛋奶", "4个"),
    ingredient("猪肉末", "肉类", "150g"),
    ingredient("小葱", "调料", "1把"),
    ingredient("生抽", "调料", "少许"),
    ingredient("香油", "粮油", "少许")
  ]),
  dish("steamed-chicken-mushroom", "香菇蒸鸡", gd, "粤式蒸菜", 35, ["家常", "不辣", "下饭"], [
    ingredient("鸡肉", "肉类", "半只"),
    ingredient("香菇", "蔬菜", "8朵"),
    ingredient("红枣", "干货", "6颗"),
    ingredient("姜", "调料", "1块"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("salted-egg-pork-patty", "咸蛋蒸肉饼", gd, "粤式蒸菜", 28, ["家常", "下饭", "不辣"], [
    ingredient("猪肉末", "肉类", "350g"),
    ingredient("咸蛋", "蛋奶", "2个"),
    ingredient("小葱", "调料", "1把"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("lotus-root-pork-patty", "莲藕蒸肉饼", gd, "粤式蒸菜", 30, ["家常", "不辣"], [
    ingredient("猪肉末", "肉类", "350g"),
    ingredient("莲藕", "蔬菜", "1节"),
    ingredient("小葱", "调料", "1把"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("steamed-pork-patty-salted-fish", "咸鱼蒸肉饼", gd, "粤式蒸菜", 28, ["下饭", "咸香"], [
    ingredient("猪肉末", "肉类", "350g"),
    ingredient("咸鱼", "水产", "1小块"),
    ingredient("马蹄", "蔬菜", "5个"),
    ingredient("小葱", "调料", "1把"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("steamed-garlic-shrimp", "蒜蓉粉丝蒸虾", gd, "粤式蒸菜", 28, ["鲜香", "不辣"], [
    ingredient("鲜虾", "水产", "500g"),
    ingredient("粉丝", "粮油", "1把"),
    ingredient("蒜", "调料", "1头"),
    ingredient("小葱", "调料", "1把"),
    ingredient("蒸鱼豉油", "调料", "少许")
  ]),
  dish("clam-steamed-egg", "花甲蒸水蛋", gd, "粤式蒸菜", 22, ["鲜", "小孩爱吃", "不辣"], [
    ingredient("花甲", "水产", "300g"),
    ingredient("鸡蛋", "蛋奶", "3个"),
    ingredient("小葱", "调料", "1把"),
    ingredient("姜", "调料", "1块")
  ]),
  dish("dried-scallop-steamed-egg", "瑶柱蒸水蛋", gd, "粤式蒸菜", 20, ["清淡", "鲜", "不辣"], [
    ingredient("鸡蛋", "蛋奶", "4个"),
    ingredient("瑶柱", "干货", "1小把"),
    ingredient("小葱", "调料", "1把"),
    ingredient("生抽", "调料", "少许")
  ]),

  dish("cantonese-poached-chicken", "白切鸡", gd, "粤式肉禽", 50, ["经典", "不辣", "清爽"], [
    ingredient("三黄鸡", "肉类", "1只"),
    ingredient("姜", "调料", "1块"),
    ingredient("小葱", "调料", "1把"),
    ingredient("沙姜", "调料", "少许"),
    ingredient("花生油", "粮油", "少许")
  ]),
  dish("soy-sauce-chicken", "豉油鸡", gd, "粤式肉禽", 45, ["不辣", "经典"], [
    ingredient("鸡", "肉类", "1只"),
    ingredient("生抽", "调料", "适量"),
    ingredient("老抽", "调料", "少许"),
    ingredient("姜", "调料", "1块"),
    ingredient("小葱", "调料", "1把")
  ]),
  dish("soy-sauce-chicken-wings", "豉油鸡翅", gd, "粤式肉禽", 30, ["小孩爱吃", "不辣"], [
    ingredient("鸡翅", "肉类", "10只"),
    ingredient("姜", "调料", "1块"),
    ingredient("小葱", "调料", "1把"),
    ingredient("生抽", "调料", "适量"),
    ingredient("冰糖", "调料", "少许")
  ]),
  dish("claypot-chicken", "啫啫鸡煲", gd, "粤式肉禽", 40, ["香口", "下饭"], [
    ingredient("鸡腿肉", "肉类", "600g"),
    ingredient("洋葱", "蔬菜", "1个"),
    ingredient("姜", "调料", "1大块"),
    ingredient("蒜", "调料", "1头"),
    ingredient("柱侯酱", "调料", "少许")
  ]),
  dish("potato-braised-chicken", "土豆焖鸡", gd, "粤式肉禽", 35, ["家常", "下饭", "不辣"], [
    ingredient("鸡肉", "肉类", "半只"),
    ingredient("土豆", "蔬菜", "2个"),
    ingredient("姜", "调料", "1块"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("beef-brisket-radish", "萝卜焖牛腩", gd, "粤式肉禽", 90, ["硬菜", "下饭", "不辣"], [
    ingredient("牛腩", "肉类", "700g"),
    ingredient("白萝卜", "蔬菜", "1根"),
    ingredient("姜", "调料", "1块"),
    ingredient("柱侯酱", "调料", "少许"),
    ingredient("八角", "调料", "2个")
  ]),
  dish("sweet-sour-ribs", "酸甜排骨", gd, "粤式肉禽", 45, ["酸甜", "下饭", "小孩爱吃"], [
    ingredient("排骨", "肉类", "600g"),
    ingredient("番茄酱", "调料", "适量"),
    ingredient("冰糖", "调料", "少许"),
    ingredient("姜", "调料", "1块"),
    ingredient("白醋", "调料", "少许")
  ]),
  dish("pork-ribs-potato", "土豆焖排骨", gd, "粤式肉禽", 45, ["家常", "下饭"], [
    ingredient("排骨", "肉类", "600g"),
    ingredient("土豆", "蔬菜", "2个"),
    ingredient("姜", "调料", "1块"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("nam-yu-pork-trotter", "南乳焖猪手", gd, "粤式肉禽", 80, ["硬菜", "下饭", "香口"], [
    ingredient("猪手", "肉类", "1只"),
    ingredient("南乳", "调料", "2块"),
    ingredient("姜", "调料", "1块"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("冰糖", "调料", "少许")
  ]),
  dish("oyster-sauce-beef", "蚝油牛肉", gd, "粤式肉禽", 25, ["快手", "下饭", "家常"], [
    ingredient("牛肉", "肉类", "350g"),
    ingredient("蚝油", "调料", "少许"),
    ingredient("洋葱", "蔬菜", "半个"),
    ingredient("姜", "调料", "1块"),
    ingredient("淀粉", "粮油", "少许")
  ]),

  dish("poached-shrimp", "白灼虾", gd, "粤式鱼虾海鲜", 15, ["快手", "鲜", "不辣"], [
    ingredient("鲜虾", "水产", "1斤"),
    ingredient("姜", "调料", "1块"),
    ingredient("小葱", "调料", "1把"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("stir-fried-clams", "豉椒炒花甲", gd, "粤式鱼虾海鲜", 20, ["快手", "鲜香"], [
    ingredient("花甲", "水产", "1斤"),
    ingredient("青椒", "蔬菜", "2个"),
    ingredient("豆豉", "调料", "1勺"),
    ingredient("蒜", "调料", "5瓣")
  ]),
  dish("braised-pomfret", "红烧鲳鱼", gd, "粤式鱼虾海鲜", 30, ["家常", "下饭"], [
    ingredient("鲳鱼", "水产", "1条"),
    ingredient("姜", "调料", "1块"),
    ingredient("小葱", "调料", "1把"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("pan-fried-mackerel", "香煎马鲛鱼", gd, "粤式鱼虾海鲜", 20, ["香口", "快手"], [
    ingredient("马鲛鱼", "水产", "4块"),
    ingredient("姜", "调料", "1块"),
    ingredient("花生油", "粮油", "少许")
  ]),
  dish("black-bean-steamed-fish", "豉汁蒸鱼块", gd, "粤式鱼虾海鲜", 25, ["家常", "下饭", "鲜"], [
    ingredient("鱼块", "水产", "500g"),
    ingredient("豆豉", "调料", "1勺"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("姜", "调料", "1块"),
    ingredient("小葱", "调料", "1把")
  ]),
  dish("ginger-scallion-fish-fillet", "姜葱鱼片", gd, "粤式鱼虾海鲜", 20, ["快手", "鲜", "下饭"], [
    ingredient("鱼片", "水产", "400g"),
    ingredient("姜", "调料", "1大块"),
    ingredient("小葱", "调料", "1把"),
    ingredient("淀粉", "粮油", "少许")
  ]),
  dish("fish-head-tofu-pot", "鱼头豆腐煲", gd, "粤式鱼虾海鲜", 45, ["热乎", "下饭"], [
    ingredient("鱼头", "水产", "1个"),
    ingredient("豆腐", "豆制品", "2块"),
    ingredient("姜", "调料", "1块"),
    ingredient("小葱", "调料", "1把")
  ]),
  dish("shrimp-tofu-pot", "虾仁豆腐煲", gd, "粤式鱼虾海鲜", 25, ["清淡", "鲜", "不辣"], [
    ingredient("虾仁", "水产", "250g"),
    ingredient("嫩豆腐", "豆制品", "2盒"),
    ingredient("鸡蛋", "蛋奶", "1个"),
    ingredient("小葱", "调料", "1把")
  ]),
  dish("tomato-fish-soup", "番茄鱼片汤", gd, "粤式鱼虾海鲜", 25, ["清爽", "鲜", "家常"], [
    ingredient("鱼片", "水产", "400g"),
    ingredient("番茄", "蔬菜", "3个"),
    ingredient("姜", "调料", "1块"),
    ingredient("小葱", "调料", "1把")
  ]),
  dish("loofah-clam-soup", "丝瓜花甲汤", gd, "粤式鱼虾海鲜", 20, ["快手", "清甜", "鲜"], [
    ingredient("丝瓜", "蔬菜", "2根"),
    ingredient("花甲", "水产", "400g"),
    ingredient("姜", "调料", "1块"),
    ingredient("小葱", "调料", "1把")
  ]),

  dish("garlic-choy-sum", "蒜蓉菜心", gd, "粤式青菜豆腐", 12, ["快手", "清淡", "不辣"], [
    ingredient("菜心", "蔬菜", "1斤"),
    ingredient("蒜", "调料", "6瓣"),
    ingredient("蚝油", "调料", "少许"),
    ingredient("花生油", "粮油", "少许")
  ]),
  dish("lettuce-oyster-sauce", "蚝油生菜", gd, "粤式青菜豆腐", 10, ["快手", "清淡", "不辣"], [
    ingredient("生菜", "蔬菜", "2颗"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("蚝油", "调料", "少许"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("superior-soup-baby-cabbage", "上汤娃娃菜", gd, "粤式青菜豆腐", 20, ["清淡", "不辣"], [
    ingredient("娃娃菜", "蔬菜", "2颗"),
    ingredient("皮蛋", "蛋奶", "1个"),
    ingredient("咸蛋", "蛋奶", "1个"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("高汤", "调料", "1碗")
  ]),
  dish("garlic-spinach", "蒜蓉菠菜", gd, "粤式青菜豆腐", 10, ["快手", "清淡"], [
    ingredient("菠菜", "蔬菜", "1斤"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("花生油", "粮油", "少许")
  ]),
  dish("garlic-cabbage", "蒜蓉炒包菜", gd, "粤式青菜豆腐", 12, ["快手", "家常"], [
    ingredient("包菜", "蔬菜", "1颗"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("蚝油", "调料", "少许")
  ]),
  dish("dace-lettuce", "豆豉鲮鱼油麦菜", gd, "粤式青菜豆腐", 15, ["快手", "下饭"], [
    ingredient("油麦菜", "蔬菜", "1斤"),
    ingredient("豆豉鲮鱼罐头", "罐头", "1罐"),
    ingredient("蒜", "调料", "5瓣")
  ]),
  dish("oyster-broccoli", "蚝油西兰花", gd, "粤式青菜豆腐", 15, ["清淡", "快手"], [
    ingredient("西兰花", "蔬菜", "1颗"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("蚝油", "调料", "少许")
  ]),
  dish("preserved-egg-amaranth", "皮蛋苋菜", gd, "粤式青菜豆腐", 18, ["家常", "清淡"], [
    ingredient("苋菜", "蔬菜", "1斤"),
    ingredient("皮蛋", "蛋奶", "1个"),
    ingredient("蒜", "调料", "5瓣")
  ]),
  dish("minced-pork-tofu", "肉末豆腐", gd, "粤式青菜豆腐", 18, ["快手", "下饭"], [
    ingredient("嫩豆腐", "豆制品", "2盒"),
    ingredient("猪肉末", "肉类", "200g"),
    ingredient("小葱", "调料", "1把"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("steamed-tofu-shrimp", "虾仁蒸豆腐", gd, "粤式青菜豆腐", 20, ["清淡", "不辣"], [
    ingredient("嫩豆腐", "豆制品", "2盒"),
    ingredient("虾仁", "水产", "250g"),
    ingredient("鸡蛋", "蛋奶", "1个"),
    ingredient("小葱", "调料", "1把")
  ]),

  dish("lotus-root-pork-rib-soup", "莲藕排骨汤", gd, "粤式汤羹主食", 80, ["家常", "不辣", "汤"], [
    ingredient("排骨", "肉类", "600g"),
    ingredient("莲藕", "蔬菜", "2节"),
    ingredient("花生", "干货", "1小把"),
    ingredient("红枣", "干货", "6颗"),
    ingredient("姜", "调料", "1块")
  ]),
  dish("carrot-corn-rib-soup", "玉米胡萝卜排骨汤", gd, "粤式汤羹主食", 70, ["清甜", "不辣", "汤"], [
    ingredient("排骨", "肉类", "600g"),
    ingredient("玉米", "蔬菜", "1根"),
    ingredient("胡萝卜", "蔬菜", "1根"),
    ingredient("马蹄", "蔬菜", "6个"),
    ingredient("姜", "调料", "1块")
  ]),
  dish("dried-vegetable-pork-bone-soup", "菜干猪骨汤", gd, "粤式汤羹主食", 90, ["清润", "不辣", "汤"], [
    ingredient("猪骨", "肉类", "600g"),
    ingredient("白菜干", "干货", "1把"),
    ingredient("蜜枣", "干货", "2颗"),
    ingredient("胡萝卜", "蔬菜", "1根"),
    ingredient("姜", "调料", "1块")
  ]),
  dish("winter-melon-duck-soup", "冬瓜老鸭汤", gd, "粤式汤羹主食", 90, ["清润", "不辣", "汤"], [
    ingredient("老鸭", "肉类", "半只"),
    ingredient("冬瓜", "蔬菜", "1块"),
    ingredient("薏米", "干货", "1小把"),
    ingredient("姜", "调料", "1块"),
    ingredient("陈皮", "干货", "1片")
  ]),
  dish("watercress-pork-bone-soup", "西洋菜猪骨汤", gd, "粤式汤羹主食", 80, ["清润", "汤"], [
    ingredient("西洋菜", "蔬菜", "1把"),
    ingredient("猪骨", "肉类", "600g"),
    ingredient("蜜枣", "干货", "2颗"),
    ingredient("姜", "调料", "1块")
  ]),
  dish("seaweed-egg-soup", "紫菜蛋花汤", gd, "粤式汤羹主食", 12, ["快手", "汤"], [
    ingredient("紫菜", "干货", "1片"),
    ingredient("鸡蛋", "蛋奶", "2个"),
    ingredient("虾皮", "干货", "少许"),
    ingredient("小葱", "调料", "1把")
  ]),
  dish("tomato-potato-beef-soup", "番茄土豆牛肉汤", gd, "粤式汤羹主食", 70, ["家常", "汤"], [
    ingredient("牛肉", "肉类", "400g"),
    ingredient("番茄", "蔬菜", "3个"),
    ingredient("土豆", "蔬菜", "2个"),
    ingredient("姜", "调料", "1块")
  ]),
  dish("preserved-egg-lean-pork-congee", "皮蛋瘦肉粥", gd, "粤式汤羹主食", 50, ["清淡", "早餐", "不辣"], [
    ingredient("大米", "粮油", "1杯"),
    ingredient("瘦肉", "肉类", "200g"),
    ingredient("皮蛋", "蛋奶", "2个"),
    ingredient("姜", "调料", "1块"),
    ingredient("小葱", "调料", "1把")
  ]),
  dish("claypot-rice-sausage", "腊味煲仔饭", gd, "粤式汤羹主食", 45, ["主食", "香口"], [
    ingredient("大米", "粮油", "2杯"),
    ingredient("腊肠", "肉类", "2根"),
    ingredient("腊肉", "肉类", "1块"),
    ingredient("菜心", "蔬菜", "半斤"),
    ingredient("煲仔饭酱油", "调料", "少许")
  ]),
  dish("wonton-noodles", "云吞面", gd, "粤式汤羹主食", 25, ["主食", "汤面"], [
    ingredient("云吞", "速食", "20个"),
    ingredient("竹升面", "粮油", "4份"),
    ingredient("青菜", "蔬菜", "半斤"),
    ingredient("高汤", "调料", "适量")
  ]),

  dish("hakka-stuffed-tofu", "客家酿豆腐", hakka, "客家经典硬菜", 35, ["不辣", "经典", "下饭"], [
    ingredient("老豆腐", "豆制品", "4块"),
    ingredient("猪肉末", "肉类", "300g"),
    ingredient("香菇", "蔬菜", "6朵"),
    ingredient("小葱", "调料", "1把"),
    ingredient("蚝油", "调料", "少许")
  ]),
  dish("hakka-salt-baked-chicken", "客家盐焗鸡", hakka, "客家经典硬菜", 55, ["经典", "硬菜", "不辣"], [
    ingredient("三黄鸡", "肉类", "1只"),
    ingredient("盐焗鸡粉", "调料", "1包"),
    ingredient("姜", "调料", "1块"),
    ingredient("小葱", "调料", "1把"),
    ingredient("粗盐", "调料", "适量")
  ]),
  dish("hakka-meicai-pork", "梅菜扣肉", hakka, "客家经典硬菜", 90, ["经典", "硬菜", "下饭"], [
    ingredient("五花肉", "肉类", "700g"),
    ingredient("梅干菜", "干货", "150g"),
    ingredient("姜", "调料", "1块"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("老抽", "调料", "少许")
  ]),
  dish("hakka-salty-chicken", "客家咸鸡", hakka, "客家经典硬菜", 50, ["咸香", "不辣", "冷吃"], [
    ingredient("鸡", "肉类", "1只"),
    ingredient("粗盐", "调料", "适量"),
    ingredient("姜", "调料", "1块"),
    ingredient("沙姜粉", "调料", "少许"),
    ingredient("小葱", "调料", "1把")
  ]),
  dish("pork-belly-chicken-soup", "猪肚包鸡", hakka, "客家经典硬菜", 110, ["硬菜", "汤", "不辣"], [
    ingredient("猪肚", "肉类", "1个"),
    ingredient("鸡", "肉类", "1只"),
    ingredient("白胡椒粒", "调料", "1小把"),
    ingredient("红枣", "干货", "8颗"),
    ingredient("姜", "调料", "1块")
  ]),
  dish("hakka-rice-wine-chicken", "客家娘酒鸡", hakka, "客家经典硬菜", 45, ["酒香", "滋补", "不辣"], [
    ingredient("鸡肉", "肉类", "半只"),
    ingredient("客家娘酒", "酒水", "500ml"),
    ingredient("姜", "调料", "1大块"),
    ingredient("红枣", "干货", "6颗"),
    ingredient("枸杞", "干货", "少许")
  ]),
  dish("hakka-braised-duck", "客家焖鸭", hakka, "客家经典硬菜", 70, ["硬菜", "不辣"], [
    ingredient("鸭肉", "肉类", "半只"),
    ingredient("姜", "调料", "1大块"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("米酒", "酒水", "少许"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("hakka-red-braised-pork", "客家红焖肉", hakka, "客家经典硬菜", 75, ["下饭", "硬菜"], [
    ingredient("五花肉", "肉类", "700g"),
    ingredient("红曲米", "调料", "少许"),
    ingredient("姜", "调料", "1块"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("冰糖", "调料", "少许")
  ]),
  dish("hakka-three-cup-duck", "客家三杯鸭", hakka, "客家经典硬菜", 65, ["咸香", "下饭"], [
    ingredient("鸭肉", "肉类", "半只"),
    ingredient("米酒", "酒水", "1杯"),
    ingredient("生抽", "调料", "1杯"),
    ingredient("花生油", "粮油", "少许"),
    ingredient("姜", "调料", "1块")
  ]),
  dish("taro-pork-belly", "芋头扣肉", hakka, "客家经典硬菜", 85, ["硬菜", "香糯"], [
    ingredient("五花肉", "肉类", "700g"),
    ingredient("荔浦芋头", "蔬菜", "1个"),
    ingredient("南乳", "调料", "2块"),
    ingredient("姜", "调料", "1块"),
    ingredient("蒜", "调料", "5瓣")
  ]),

  dish("stuffed-three-treasures", "客家酿三宝", hakka, "客家酿焖家常", 45, ["经典", "下饭"], [
    ingredient("苦瓜", "蔬菜", "1根"),
    ingredient("茄子", "蔬菜", "1根"),
    ingredient("青椒", "蔬菜", "4个"),
    ingredient("猪肉末", "肉类", "350g"),
    ingredient("香菇", "蔬菜", "6朵")
  ]),
  dish("stuffed-bitter-melon", "酿苦瓜", hakka, "客家酿焖家常", 40, ["清爽", "下饭"], [
    ingredient("苦瓜", "蔬菜", "2根"),
    ingredient("猪肉末", "肉类", "300g"),
    ingredient("香菇", "蔬菜", "4朵"),
    ingredient("蒜", "调料", "4瓣"),
    ingredient("蚝油", "调料", "少许")
  ]),
  dish("stuffed-eggplant", "酿茄子", hakka, "客家酿焖家常", 35, ["下饭", "家常"], [
    ingredient("茄子", "蔬菜", "2根"),
    ingredient("猪肉末", "肉类", "300g"),
    ingredient("马蹄", "蔬菜", "5个"),
    ingredient("小葱", "调料", "1把"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("stuffed-green-pepper", "酿青椒", hakka, "客家酿焖家常", 35, ["下饭", "家常"], [
    ingredient("青椒", "蔬菜", "6个"),
    ingredient("猪肉末", "肉类", "300g"),
    ingredient("香菇", "蔬菜", "4朵"),
    ingredient("蒜", "调料", "4瓣"),
    ingredient("蚝油", "调料", "少许")
  ]),
  dish("stuffed-mushroom", "酿冬菇", hakka, "客家酿焖家常", 35, ["鲜香", "家常"], [
    ingredient("冬菇", "干货", "12朵"),
    ingredient("猪肉末", "肉类", "300g"),
    ingredient("马蹄", "蔬菜", "5个"),
    ingredient("小葱", "调料", "1把")
  ]),
  dish("stuffed-tofu-puff", "酿豆卜", hakka, "客家酿焖家常", 30, ["下饭", "家常"], [
    ingredient("豆腐泡", "豆制品", "300g"),
    ingredient("猪肉末", "肉类", "300g"),
    ingredient("香菇", "蔬菜", "4朵"),
    ingredient("蚝油", "调料", "少许")
  ]),
  dish("bamboo-shoot-pork-belly", "笋干焖五花肉", hakka, "客家酿焖家常", 75, ["下饭", "咸香"], [
    ingredient("五花肉", "肉类", "600g"),
    ingredient("笋干", "干货", "150g"),
    ingredient("姜", "调料", "1块"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("八角", "调料", "2个")
  ]),
  dish("hakka-pickled-mustard-pork", "咸菜焖猪肉", hakka, "客家酿焖家常", 55, ["下饭", "酸香"], [
    ingredient("五花肉", "肉类", "500g"),
    ingredient("咸酸菜", "腌菜", "250g"),
    ingredient("姜", "调料", "1块"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("冰糖", "调料", "少许")
  ]),
  dish("braised-pork-belly-taro", "芋头焖五花肉", hakka, "客家酿焖家常", 60, ["香糯", "下饭"], [
    ingredient("五花肉", "肉类", "500g"),
    ingredient("芋头", "蔬菜", "600g"),
    ingredient("姜", "调料", "1块"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("南乳", "调料", "2块")
  ]),
  dish("fried-tofu-pork", "豆腐泡焖猪肉", hakka, "客家酿焖家常", 35, ["下饭", "家常"], [
    ingredient("豆腐泡", "豆制品", "300g"),
    ingredient("五花肉", "肉类", "300g"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("生抽", "调料", "少许")
  ]),

  dish("hakka-stir-fry", "客家小炒", hakka, "客家快手小炒", 28, ["下饭", "咸香", "快手"], [
    ingredient("五花肉", "肉类", "250g"),
    ingredient("鱿鱼干", "干货", "1只"),
    ingredient("豆干", "豆制品", "4块"),
    ingredient("芹菜", "蔬菜", "1把"),
    ingredient("小葱", "调料", "1把")
  ]),
  dish("pickled-mustard-pork-intestine", "酸菜炒大肠", hakka, "客家快手小炒", 35, ["酸香", "下饭"], [
    ingredient("猪大肠", "肉类", "500g"),
    ingredient("酸菜", "腌菜", "250g"),
    ingredient("姜", "调料", "1块"),
    ingredient("蒜", "调料", "5瓣"),
    ingredient("青椒", "蔬菜", "2个")
  ]),
  dish("fried-river-shrimp-chives", "韭菜炒河虾", hakka, "客家快手小炒", 18, ["快手", "鲜香"], [
    ingredient("河虾", "水产", "350g"),
    ingredient("韭菜", "蔬菜", "1把"),
    ingredient("姜", "调料", "1块"),
    ingredient("蒜", "调料", "3瓣"),
    ingredient("米酒", "酒水", "少许")
  ]),
  dish("meicai-steamed-pork-patty", "梅菜蒸肉饼", hakka, "客家快手小炒", 28, ["快手", "下饭", "家常"], [
    ingredient("猪肉末", "肉类", "350g"),
    ingredient("梅干菜", "干货", "80g"),
    ingredient("马蹄", "蔬菜", "5个"),
    ingredient("小葱", "调料", "1把"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("dried-squid-pork-patty", "鱿鱼干蒸肉饼", hakka, "客家快手小炒", 30, ["咸香", "下饭"], [
    ingredient("猪肉末", "肉类", "350g"),
    ingredient("鱿鱼干", "干货", "半只"),
    ingredient("马蹄", "蔬菜", "5个"),
    ingredient("小葱", "调料", "1把")
  ]),
  dish("preserved-radish-omelet", "萝卜干煎蛋", hakka, "客家快手小炒", 15, ["快手", "咸香"], [
    ingredient("萝卜干", "腌菜", "1小把"),
    ingredient("鸡蛋", "蛋奶", "4个"),
    ingredient("小葱", "调料", "1把"),
    ingredient("花生油", "粮油", "少许")
  ]),
  dish("hakka-tofu-pork-stir-fry", "豆干炒五花肉", hakka, "客家快手小炒", 25, ["下饭", "家常"], [
    ingredient("豆干", "豆制品", "4块"),
    ingredient("五花肉", "肉类", "300g"),
    ingredient("青蒜", "蔬菜", "1把"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("pickled-mustard-lean-pork", "酸菜炒瘦肉", hakka, "客家快手小炒", 20, ["酸香", "下饭", "快手"], [
    ingredient("瘦肉", "肉类", "300g"),
    ingredient("酸菜", "腌菜", "250g"),
    ingredient("姜", "调料", "1块"),
    ingredient("蒜", "调料", "4瓣")
  ]),
  dish("hakka-egg-dumpling", "客家煎蛋角", hakka, "客家快手小炒", 30, ["家常", "小孩爱吃"], [
    ingredient("鸡蛋", "蛋奶", "5个"),
    ingredient("猪肉末", "肉类", "250g"),
    ingredient("马蹄", "蔬菜", "4个"),
    ingredient("小葱", "调料", "1把")
  ]),
  dish("garlic-chives-pork-blood", "韭菜炒猪红", hakka, "客家快手小炒", 18, ["快手", "家常"], [
    ingredient("猪红", "肉类", "500g"),
    ingredient("韭菜", "蔬菜", "1把"),
    ingredient("姜", "调料", "1块"),
    ingredient("蒜", "调料", "4瓣")
  ]),

  dish("wuzhimaotao-pork-soup", "五指毛桃猪骨汤", hakka, "客家汤羹主食", 90, ["清润", "不辣", "汤"], [
    ingredient("猪骨", "肉类", "600g"),
    ingredient("五指毛桃", "干货", "1把"),
    ingredient("红枣", "干货", "6颗"),
    ingredient("玉米", "蔬菜", "1根"),
    ingredient("姜", "调料", "1块")
  ]),
  dish("bitter-melon-rib-soup", "苦瓜黄豆排骨汤", hakka, "客家汤羹主食", 65, ["清爽", "不辣", "汤"], [
    ingredient("排骨", "肉类", "500g"),
    ingredient("苦瓜", "蔬菜", "2根"),
    ingredient("黄豆", "干货", "1小碗"),
    ingredient("姜", "调料", "1块"),
    ingredient("蜜枣", "干货", "1颗")
  ]),
  dish("mustard-pork-belly-soup", "咸菜猪肚汤", hakka, "客家汤羹主食", 80, ["酸香", "汤", "不辣"], [
    ingredient("猪肚", "肉类", "1个"),
    ingredient("咸酸菜", "腌菜", "250g"),
    ingredient("白胡椒粒", "调料", "1小把"),
    ingredient("姜", "调料", "1块"),
    ingredient("小葱", "调料", "1把")
  ]),
  dish("hakka-sanjidi-soup", "三及第汤", hakka, "客家汤羹主食", 30, ["快手", "汤", "家常"], [
    ingredient("瘦肉", "肉类", "200g"),
    ingredient("猪肝", "肉类", "150g"),
    ingredient("猪粉肠", "肉类", "150g"),
    ingredient("枸杞叶", "蔬菜", "1把"),
    ingredient("姜", "调料", "1块")
  ]),
  dish("hakka-radish-balls", "客家萝卜丸", hakka, "客家汤羹主食", 45, ["家常", "蒸菜"], [
    ingredient("白萝卜", "蔬菜", "1根"),
    ingredient("粘米粉", "粮油", "200g"),
    ingredient("腊肠", "肉类", "1根"),
    ingredient("虾米", "干货", "1小把"),
    ingredient("小葱", "调料", "1把")
  ]),
  dish("hakka-abacus-seeds", "客家算盘子", hakka, "客家汤羹主食", 60, ["芋香", "家常"], [
    ingredient("芋头", "蔬菜", "600g"),
    ingredient("木薯粉", "粮油", "200g"),
    ingredient("猪肉末", "肉类", "150g"),
    ingredient("香菇", "蔬菜", "6朵"),
    ingredient("虾米", "干货", "1小把")
  ]),
  dish("meizhou-marinated-noodles", "梅州腌面", hakka, "客家汤羹主食", 20, ["主食", "快手"], [
    ingredient("碱水面", "粮油", "4份"),
    ingredient("蒜蓉油", "调料", "适量"),
    ingredient("葱花", "调料", "1把"),
    ingredient("生抽", "调料", "少许")
  ]),
  dish("hakka-soup-rice-noodles", "客家汤粉", hakka, "客家汤羹主食", 25, ["主食", "汤粉"], [
    ingredient("河粉", "粮油", "1斤"),
    ingredient("瘦肉", "肉类", "250g"),
    ingredient("青菜", "蔬菜", "半斤"),
    ingredient("高汤", "调料", "适量")
  ]),
  dish("dried-vegetable-pork-lung-soup", "菜干猪肺汤", hakka, "客家汤羹主食", 90, ["清润", "汤"], [
    ingredient("猪肺", "肉类", "1副"),
    ingredient("白菜干", "干货", "1把"),
    ingredient("蜜枣", "干货", "2颗"),
    ingredient("姜", "调料", "1块")
  ]),
  dish("hakka-yellow-rice-cake", "客家黄粄", hakka, "客家汤羹主食", 45, ["主食", "家常"], [
    ingredient("黄粄", "粮油", "1斤"),
    ingredient("腊肉", "肉类", "1块"),
    ingredient("青蒜", "蔬菜", "1把"),
    ingredient("香菇", "蔬菜", "6朵")
  ])
];

module.exports = {
  familyMembers,
  dishes
};
