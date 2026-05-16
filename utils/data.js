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

const dishes = [
  {
    id: "hakka-stuffed-tofu",
    name: "客家酿豆腐",
    category: "客家三宝",
    time: 35,
    tags: ["不辣", "经典", "下饭"],
    ingredients: [
      { name: "老豆腐", category: "豆制品", amount: "4块" },
      { name: "猪肉末", category: "肉类", amount: "300g" },
      { name: "香菇", category: "蔬菜", amount: "6朵" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "蚝油", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "hakka-salt-baked-chicken",
    name: "客家盐焗鸡",
    category: "客家三宝",
    time: 55,
    tags: ["经典", "硬菜", "不辣"],
    ingredients: [
      { name: "三黄鸡", category: "肉类", amount: "1只" },
      { name: "盐焗鸡粉", category: "调料", amount: "1包" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "粗盐", category: "调料", amount: "适量" }
    ]
  },
  {
    id: "hakka-meicai-pork",
    name: "梅菜扣肉",
    category: "客家三宝",
    time: 90,
    tags: ["经典", "硬菜", "下饭"],
    ingredients: [
      { name: "五花肉", category: "肉类", amount: "700g" },
      { name: "梅干菜", category: "干货", amount: "150g" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "蒜", category: "调料", amount: "5瓣" },
      { name: "老抽", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "hakka-stir-fry",
    name: "客家小炒",
    category: "小炒",
    time: 28,
    tags: ["下饭", "咸香", "快手"],
    ingredients: [
      { name: "五花肉", category: "肉类", amount: "250g" },
      { name: "鱿鱼干", category: "干货", amount: "1只" },
      { name: "豆干", category: "豆制品", amount: "4块" },
      { name: "芹菜", category: "蔬菜", amount: "1把" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  },
  {
    id: "stuffed-three-treasures",
    name: "客家酿三宝",
    category: "酿菜",
    time: 45,
    tags: ["经典", "下饭"],
    ingredients: [
      { name: "苦瓜", category: "蔬菜", amount: "1根" },
      { name: "茄子", category: "蔬菜", amount: "1根" },
      { name: "青椒", category: "蔬菜", amount: "4个" },
      { name: "猪肉末", category: "肉类", amount: "350g" },
      { name: "香菇", category: "蔬菜", amount: "6朵" }
    ]
  },
  {
    id: "stuffed-bitter-melon",
    name: "酿苦瓜",
    category: "酿菜",
    time: 40,
    tags: ["清爽", "下饭"],
    ingredients: [
      { name: "苦瓜", category: "蔬菜", amount: "2根" },
      { name: "猪肉末", category: "肉类", amount: "300g" },
      { name: "香菇", category: "蔬菜", amount: "4朵" },
      { name: "蒜", category: "调料", amount: "4瓣" },
      { name: "蚝油", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "stuffed-eggplant",
    name: "酿茄子",
    category: "酿菜",
    time: 35,
    tags: ["下饭", "家常"],
    ingredients: [
      { name: "茄子", category: "蔬菜", amount: "2根" },
      { name: "猪肉末", category: "肉类", amount: "300g" },
      { name: "马蹄", category: "蔬菜", amount: "5个" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "生抽", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "wuzhimaotao-pork-soup",
    name: "五指毛桃猪骨汤",
    category: "汤",
    time: 90,
    tags: ["清润", "不辣", "汤"],
    ingredients: [
      { name: "猪骨", category: "肉类", amount: "600g" },
      { name: "五指毛桃", category: "干货", amount: "1把" },
      { name: "红枣", category: "干货", amount: "6颗" },
      { name: "玉米", category: "蔬菜", amount: "1根" },
      { name: "姜", category: "调料", amount: "1块" }
    ]
  },
  {
    id: "hakka-rice-wine-chicken",
    name: "客家娘酒鸡",
    category: "荤菜",
    time: 45,
    tags: ["酒香", "滋补", "不辣"],
    ingredients: [
      { name: "鸡肉", category: "肉类", amount: "半只" },
      { name: "客家娘酒", category: "酒水", amount: "500ml" },
      { name: "姜", category: "调料", amount: "1大块" },
      { name: "红枣", category: "干货", amount: "6颗" },
      { name: "枸杞", category: "干货", amount: "少许" }
    ]
  },
  {
    id: "hakka-salty-chicken",
    name: "客家咸鸡",
    category: "荤菜",
    time: 50,
    tags: ["咸香", "不辣", "冷吃"],
    ingredients: [
      { name: "鸡", category: "肉类", amount: "1只" },
      { name: "粗盐", category: "调料", amount: "适量" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "沙姜粉", category: "调料", amount: "少许" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  },
  {
    id: "pork-belly-chicken-soup",
    name: "猪肚包鸡",
    category: "汤",
    time: 110,
    tags: ["硬菜", "汤", "不辣"],
    ingredients: [
      { name: "猪肚", category: "肉类", amount: "1个" },
      { name: "鸡", category: "肉类", amount: "1只" },
      { name: "白胡椒粒", category: "调料", amount: "1小把" },
      { name: "红枣", category: "干货", amount: "8颗" },
      { name: "姜", category: "调料", amount: "1块" }
    ]
  },
  {
    id: "pickled-mustard-pork-intestine",
    name: "酸菜炒大肠",
    category: "小炒",
    time: 35,
    tags: ["酸香", "下饭"],
    ingredients: [
      { name: "猪大肠", category: "肉类", amount: "500g" },
      { name: "酸菜", category: "腌菜", amount: "250g" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "蒜", category: "调料", amount: "5瓣" },
      { name: "青椒", category: "蔬菜", amount: "2个" }
    ]
  },
  {
    id: "bamboo-shoot-pork-belly",
    name: "笋干焖五花肉",
    category: "焖菜",
    time: 75,
    tags: ["下饭", "咸香"],
    ingredients: [
      { name: "五花肉", category: "肉类", amount: "600g" },
      { name: "笋干", category: "干货", amount: "150g" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "蒜", category: "调料", amount: "5瓣" },
      { name: "八角", category: "调料", amount: "2个" }
    ]
  },
  {
    id: "taro-pork-belly",
    name: "芋头扣肉",
    category: "焖菜",
    time: 85,
    tags: ["硬菜", "香糯"],
    ingredients: [
      { name: "五花肉", category: "肉类", amount: "700g" },
      { name: "荔浦芋头", category: "蔬菜", amount: "1个" },
      { name: "南乳", category: "调料", amount: "2块" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "蒜", category: "调料", amount: "5瓣" }
    ]
  },
  {
    id: "meicai-steamed-pork-patty",
    name: "梅菜蒸肉饼",
    category: "蒸菜",
    time: 28,
    tags: ["快手", "下饭", "家常"],
    ingredients: [
      { name: "猪肉末", category: "肉类", amount: "350g" },
      { name: "梅干菜", category: "干货", amount: "80g" },
      { name: "马蹄", category: "蔬菜", amount: "5个" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "生抽", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "dried-vegetable-pork-bone-soup",
    name: "菜干猪骨汤",
    category: "汤",
    time: 90,
    tags: ["清润", "不辣", "汤"],
    ingredients: [
      { name: "猪骨", category: "肉类", amount: "600g" },
      { name: "白菜干", category: "干货", amount: "1把" },
      { name: "蜜枣", category: "干货", amount: "2颗" },
      { name: "胡萝卜", category: "蔬菜", amount: "1根" },
      { name: "姜", category: "调料", amount: "1块" }
    ]
  },
  {
    id: "mustard-pork-belly-soup",
    name: "咸菜猪肚汤",
    category: "汤",
    time: 80,
    tags: ["酸香", "汤", "不辣"],
    ingredients: [
      { name: "猪肚", category: "肉类", amount: "1个" },
      { name: "咸酸菜", category: "腌菜", amount: "250g" },
      { name: "白胡椒粒", category: "调料", amount: "1小把" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  },
  {
    id: "bitter-melon-rib-soup",
    name: "苦瓜排骨汤",
    category: "汤",
    time: 65,
    tags: ["清爽", "不辣", "汤"],
    ingredients: [
      { name: "排骨", category: "肉类", amount: "500g" },
      { name: "苦瓜", category: "蔬菜", amount: "2根" },
      { name: "黄豆", category: "干货", amount: "1小碗" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "蜜枣", category: "干货", amount: "1颗" }
    ]
  },
  {
    id: "hakka-radish-balls",
    name: "客家萝卜丸",
    category: "小吃",
    time: 45,
    tags: ["家常", "蒸菜"],
    ingredients: [
      { name: "白萝卜", category: "蔬菜", amount: "1根" },
      { name: "粘米粉", category: "粮油", amount: "200g" },
      { name: "腊肠", category: "肉类", amount: "1根" },
      { name: "虾米", category: "干货", amount: "1小把" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  },
  {
    id: "hakka-abacus-seeds",
    name: "客家算盘子",
    category: "小吃",
    time: 60,
    tags: ["芋香", "家常"],
    ingredients: [
      { name: "芋头", category: "蔬菜", amount: "600g" },
      { name: "木薯粉", category: "粮油", amount: "200g" },
      { name: "猪肉末", category: "肉类", amount: "150g" },
      { name: "香菇", category: "蔬菜", amount: "6朵" },
      { name: "虾米", category: "干货", amount: "1小把" }
    ]
  },
  {
    id: "hakka-braised-duck",
    name: "客家焖鸭",
    category: "焖菜",
    time: 70,
    tags: ["硬菜", "不辣"],
    ingredients: [
      { name: "鸭肉", category: "肉类", amount: "半只" },
      { name: "姜", category: "调料", amount: "1大块" },
      { name: "蒜", category: "调料", amount: "5瓣" },
      { name: "米酒", category: "酒水", amount: "少许" },
      { name: "生抽", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "fried-river-shrimp-chives",
    name: "韭菜炒河虾",
    category: "小炒",
    time: 18,
    tags: ["快手", "鲜香"],
    ingredients: [
      { name: "河虾", category: "水产", amount: "350g" },
      { name: "韭菜", category: "蔬菜", amount: "1把" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "蒜", category: "调料", amount: "3瓣" },
      { name: "米酒", category: "酒水", amount: "少许" }
    ]
  },
  {
    id: "hakka-pickled-mustard-pork",
    name: "咸菜焖猪肉",
    category: "焖菜",
    time: 55,
    tags: ["下饭", "酸香"],
    ingredients: [
      { name: "五花肉", category: "肉类", amount: "500g" },
      { name: "咸酸菜", category: "腌菜", amount: "250g" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "蒜", category: "调料", amount: "5瓣" },
      { name: "冰糖", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "cantonese-poached-chicken",
    name: "白切鸡",
    category: "广东家常",
    time: 50,
    tags: ["经典", "不辣", "清爽"],
    ingredients: [
      { name: "三黄鸡", category: "肉类", amount: "1只" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "沙姜", category: "调料", amount: "少许" },
      { name: "花生油", category: "粮油", amount: "少许" }
    ]
  },
  {
    id: "steamed-sea-bass",
    name: "清蒸鲈鱼",
    category: "广东家常",
    time: 25,
    tags: ["清淡", "不辣", "鲜"],
    ingredients: [
      { name: "鲈鱼", category: "水产", amount: "1条" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "蒸鱼豉油", category: "调料", amount: "少许" },
      { name: "花生油", category: "粮油", amount: "少许" }
    ]
  },
  {
    id: "black-bean-steamed-ribs",
    name: "豉汁蒸排骨",
    category: "蒸菜",
    time: 35,
    tags: ["下饭", "不辣", "家常"],
    ingredients: [
      { name: "排骨", category: "肉类", amount: "500g" },
      { name: "豆豉", category: "调料", amount: "1勺" },
      { name: "蒜", category: "调料", amount: "5瓣" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "淀粉", category: "粮油", amount: "少许" }
    ]
  },
  {
    id: "steamed-minced-pork-egg",
    name: "肉末蒸水蛋",
    category: "蒸菜",
    time: 18,
    tags: ["快手", "不辣", "小孩爱吃"],
    ingredients: [
      { name: "鸡蛋", category: "蛋奶", amount: "4个" },
      { name: "猪肉末", category: "肉类", amount: "150g" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "生抽", category: "调料", amount: "少许" },
      { name: "香油", category: "粮油", amount: "少许" }
    ]
  },
  {
    id: "steamed-garlic-shrimp",
    name: "蒜蓉粉丝蒸虾",
    category: "蒸菜",
    time: 28,
    tags: ["鲜香", "不辣"],
    ingredients: [
      { name: "鲜虾", category: "水产", amount: "500g" },
      { name: "粉丝", category: "粮油", amount: "1把" },
      { name: "蒜", category: "调料", amount: "1头" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "蒸鱼豉油", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "claypot-chicken",
    name: "啫啫鸡煲",
    category: "煲仔菜",
    time: 40,
    tags: ["香口", "下饭"],
    ingredients: [
      { name: "鸡腿肉", category: "肉类", amount: "600g" },
      { name: "洋葱", category: "蔬菜", amount: "1个" },
      { name: "姜", category: "调料", amount: "1大块" },
      { name: "蒜", category: "调料", amount: "1头" },
      { name: "柱侯酱", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "beef-brisket-radish",
    name: "萝卜焖牛腩",
    category: "焖菜",
    time: 90,
    tags: ["硬菜", "下饭", "不辣"],
    ingredients: [
      { name: "牛腩", category: "肉类", amount: "700g" },
      { name: "白萝卜", category: "蔬菜", amount: "1根" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "柱侯酱", category: "调料", amount: "少许" },
      { name: "八角", category: "调料", amount: "2个" }
    ]
  },
  {
    id: "cantonese-sweet-sour-pork",
    name: "菠萝咕噜肉",
    category: "广东家常",
    time: 45,
    tags: ["酸甜", "小孩爱吃"],
    ingredients: [
      { name: "里脊肉", category: "肉类", amount: "400g" },
      { name: "菠萝", category: "水果", amount: "半个" },
      { name: "彩椒", category: "蔬菜", amount: "2个" },
      { name: "番茄酱", category: "调料", amount: "适量" },
      { name: "淀粉", category: "粮油", amount: "适量" }
    ]
  },
  {
    id: "tomato-beef",
    name: "番茄牛肉",
    category: "广东家常",
    time: 35,
    tags: ["下饭", "不辣"],
    ingredients: [
      { name: "牛肉", category: "肉类", amount: "350g" },
      { name: "番茄", category: "蔬菜", amount: "3个" },
      { name: "洋葱", category: "蔬菜", amount: "半个" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "生抽", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "scrambled-egg-tomato",
    name: "番茄炒蛋",
    category: "快手菜",
    time: 12,
    tags: ["快手", "不辣", "小孩爱吃"],
    ingredients: [
      { name: "番茄", category: "蔬菜", amount: "3个" },
      { name: "鸡蛋", category: "蛋奶", amount: "4个" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "白糖", category: "调料", amount: "少许" },
      { name: "花生油", category: "粮油", amount: "少许" }
    ]
  },
  {
    id: "garlic-choy-sum",
    name: "蒜蓉菜心",
    category: "青菜",
    time: 12,
    tags: ["快手", "清淡", "不辣"],
    ingredients: [
      { name: "菜心", category: "蔬菜", amount: "1斤" },
      { name: "蒜", category: "调料", amount: "6瓣" },
      { name: "蚝油", category: "调料", amount: "少许" },
      { name: "花生油", category: "粮油", amount: "少许" }
    ]
  },
  {
    id: "lettuce-oyster-sauce",
    name: "蚝油生菜",
    category: "青菜",
    time: 10,
    tags: ["快手", "清淡", "不辣"],
    ingredients: [
      { name: "生菜", category: "蔬菜", amount: "2颗" },
      { name: "蒜", category: "调料", amount: "5瓣" },
      { name: "蚝油", category: "调料", amount: "少许" },
      { name: "生抽", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "superior-soup-vegetables",
    name: "上汤时蔬",
    category: "青菜",
    time: 20,
    tags: ["清淡", "不辣"],
    ingredients: [
      { name: "时蔬", category: "蔬菜", amount: "1斤" },
      { name: "皮蛋", category: "蛋奶", amount: "1个" },
      { name: "咸蛋", category: "蛋奶", amount: "1个" },
      { name: "蒜", category: "调料", amount: "5瓣" },
      { name: "高汤", category: "调料", amount: "1碗" }
    ]
  },
  {
    id: "winter-melon-duck-soup",
    name: "冬瓜老鸭汤",
    category: "汤",
    time: 90,
    tags: ["清润", "不辣", "汤"],
    ingredients: [
      { name: "老鸭", category: "肉类", amount: "半只" },
      { name: "冬瓜", category: "蔬菜", amount: "1块" },
      { name: "薏米", category: "干货", amount: "1小把" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "陈皮", category: "干货", amount: "1片" }
    ]
  },
  {
    id: "lotus-root-pork-rib-soup",
    name: "莲藕排骨汤",
    category: "汤",
    time: 80,
    tags: ["家常", "不辣", "汤"],
    ingredients: [
      { name: "排骨", category: "肉类", amount: "600g" },
      { name: "莲藕", category: "蔬菜", amount: "2节" },
      { name: "花生", category: "干货", amount: "1小把" },
      { name: "红枣", category: "干货", amount: "6颗" },
      { name: "姜", category: "调料", amount: "1块" }
    ]
  },
  {
    id: "carrot-corn-rib-soup",
    name: "玉米胡萝卜排骨汤",
    category: "汤",
    time: 70,
    tags: ["清甜", "不辣", "汤"],
    ingredients: [
      { name: "排骨", category: "肉类", amount: "600g" },
      { name: "玉米", category: "蔬菜", amount: "1根" },
      { name: "胡萝卜", category: "蔬菜", amount: "1根" },
      { name: "马蹄", category: "蔬菜", amount: "6个" },
      { name: "姜", category: "调料", amount: "1块" }
    ]
  },
  {
    id: "braised-pork-belly-taro",
    name: "芋头焖五花肉",
    category: "焖菜",
    time: 60,
    tags: ["香糯", "下饭"],
    ingredients: [
      { name: "五花肉", category: "肉类", amount: "500g" },
      { name: "芋头", category: "蔬菜", amount: "600g" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "蒜", category: "调料", amount: "5瓣" },
      { name: "南乳", category: "调料", amount: "2块" }
    ]
  },
  {
    id: "bitter-melon-beef",
    name: "苦瓜炒牛肉",
    category: "小炒",
    time: 25,
    tags: ["快手", "下饭"],
    ingredients: [
      { name: "牛肉", category: "肉类", amount: "300g" },
      { name: "苦瓜", category: "蔬菜", amount: "1根" },
      { name: "蒜", category: "调料", amount: "4瓣" },
      { name: "豆豉", category: "调料", amount: "少许" },
      { name: "淀粉", category: "粮油", amount: "少许" }
    ]
  },
  {
    id: "ginger-scallion-beef",
    name: "姜葱炒牛肉",
    category: "小炒",
    time: 18,
    tags: ["快手", "下饭"],
    ingredients: [
      { name: "牛肉", category: "肉类", amount: "350g" },
      { name: "姜", category: "调料", amount: "1大块" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "洋葱", category: "蔬菜", amount: "半个" },
      { name: "生抽", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "steamed-chicken-mushroom",
    name: "香菇蒸鸡",
    category: "蒸菜",
    time: 35,
    tags: ["家常", "不辣", "下饭"],
    ingredients: [
      { name: "鸡肉", category: "肉类", amount: "半只" },
      { name: "香菇", category: "蔬菜", amount: "8朵" },
      { name: "红枣", category: "干货", amount: "6颗" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "生抽", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "soy-sauce-chicken-wings",
    name: "豉油鸡翅",
    category: "广东家常",
    time: 30,
    tags: ["小孩爱吃", "不辣"],
    ingredients: [
      { name: "鸡翅", category: "肉类", amount: "10只" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "生抽", category: "调料", amount: "适量" },
      { name: "冰糖", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "steamed-pork-patty-salted-fish",
    name: "咸鱼蒸肉饼",
    category: "蒸菜",
    time: 28,
    tags: ["下饭", "咸香"],
    ingredients: [
      { name: "猪肉末", category: "肉类", amount: "350g" },
      { name: "咸鱼", category: "水产", amount: "1小块" },
      { name: "马蹄", category: "蔬菜", amount: "5个" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "生抽", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "preserved-egg-lean-pork-congee",
    name: "皮蛋瘦肉粥",
    category: "主食",
    time: 50,
    tags: ["清淡", "早餐", "不辣"],
    ingredients: [
      { name: "大米", category: "粮油", amount: "1杯" },
      { name: "瘦肉", category: "肉类", amount: "200g" },
      { name: "皮蛋", category: "蛋奶", amount: "2个" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  },
  {
    id: "claypot-rice-sausage",
    name: "腊味煲仔饭",
    category: "主食",
    time: 45,
    tags: ["主食", "香口"],
    ingredients: [
      { name: "大米", category: "粮油", amount: "2杯" },
      { name: "腊肠", category: "肉类", amount: "2根" },
      { name: "腊肉", category: "肉类", amount: "1块" },
      { name: "菜心", category: "蔬菜", amount: "半斤" },
      { name: "煲仔饭酱油", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "roast-goose",
    name: "烧鹅",
    category: "烧味",
    time: 20,
    tags: ["经典", "硬菜"],
    ingredients: [
      { name: "烧鹅", category: "熟食", amount: "半只" },
      { name: "酸梅酱", category: "调料", amount: "少许" },
      { name: "青瓜", category: "蔬菜", amount: "1根" }
    ]
  },
  {
    id: "char-siu",
    name: "叉烧",
    category: "烧味",
    time: 20,
    tags: ["经典", "下饭"],
    ingredients: [
      { name: "叉烧", category: "熟食", amount: "1斤" },
      { name: "生菜", category: "蔬菜", amount: "1颗" },
      { name: "叉烧汁", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "soy-sauce-chicken",
    name: "豉油鸡",
    category: "广东家常",
    time: 45,
    tags: ["不辣", "经典"],
    ingredients: [
      { name: "鸡", category: "肉类", amount: "1只" },
      { name: "生抽", category: "调料", amount: "适量" },
      { name: "老抽", category: "调料", amount: "少许" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  },
  {
    id: "crispy-roast-pork",
    name: "脆皮烧肉",
    category: "烧味",
    time: 20,
    tags: ["香口", "下饭"],
    ingredients: [
      { name: "烧肉", category: "熟食", amount: "1斤" },
      { name: "芥辣", category: "调料", amount: "少许" },
      { name: "生菜", category: "蔬菜", amount: "1颗" }
    ]
  },
  {
    id: "steamed-scallop-vermicelli",
    name: "蒜蓉粉丝蒸扇贝",
    category: "海鲜",
    time: 25,
    tags: ["鲜香", "不辣"],
    ingredients: [
      { name: "扇贝", category: "水产", amount: "8只" },
      { name: "粉丝", category: "粮油", amount: "1把" },
      { name: "蒜", category: "调料", amount: "1头" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  },
  {
    id: "black-bean-steamed-eel",
    name: "豉汁蒸鳗鱼",
    category: "海鲜",
    time: 30,
    tags: ["鲜香", "下饭"],
    ingredients: [
      { name: "鳗鱼", category: "水产", amount: "1条" },
      { name: "豆豉", category: "调料", amount: "1勺" },
      { name: "蒜", category: "调料", amount: "5瓣" },
      { name: "姜", category: "调料", amount: "1块" }
    ]
  },
  {
    id: "stir-fried-clams",
    name: "豉椒炒花甲",
    category: "海鲜",
    time: 20,
    tags: ["快手", "鲜香"],
    ingredients: [
      { name: "花甲", category: "水产", amount: "1斤" },
      { name: "青椒", category: "蔬菜", amount: "2个" },
      { name: "豆豉", category: "调料", amount: "1勺" },
      { name: "蒜", category: "调料", amount: "5瓣" }
    ]
  },
  {
    id: "ginger-scallion-crab",
    name: "姜葱炒蟹",
    category: "海鲜",
    time: 35,
    tags: ["硬菜", "鲜香"],
    ingredients: [
      { name: "螃蟹", category: "水产", amount: "2只" },
      { name: "姜", category: "调料", amount: "1大块" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "淀粉", category: "粮油", amount: "少许" }
    ]
  },
  {
    id: "salt-pepper-shrimp",
    name: "椒盐虾",
    category: "海鲜",
    time: 25,
    tags: ["香口", "下饭"],
    ingredients: [
      { name: "鲜虾", category: "水产", amount: "1斤" },
      { name: "椒盐", category: "调料", amount: "少许" },
      { name: "蒜", category: "调料", amount: "1头" },
      { name: "青椒", category: "蔬菜", amount: "1个" }
    ]
  },
  {
    id: "salt-pepper-squid",
    name: "椒盐鱿鱼",
    category: "海鲜",
    time: 25,
    tags: ["香口", "下饭"],
    ingredients: [
      { name: "鱿鱼", category: "水产", amount: "1斤" },
      { name: "椒盐", category: "调料", amount: "少许" },
      { name: "蒜", category: "调料", amount: "1头" },
      { name: "淀粉", category: "粮油", amount: "适量" }
    ]
  },
  {
    id: "fish-head-tofu-pot",
    name: "鱼头豆腐煲",
    category: "煲仔菜",
    time: 45,
    tags: ["热乎", "下饭"],
    ingredients: [
      { name: "鱼头", category: "水产", amount: "1个" },
      { name: "豆腐", category: "豆制品", amount: "2块" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  },
  {
    id: "eggplant-minced-pork",
    name: "肉末茄子",
    category: "小炒",
    time: 25,
    tags: ["下饭", "家常"],
    ingredients: [
      { name: "茄子", category: "蔬菜", amount: "2根" },
      { name: "猪肉末", category: "肉类", amount: "200g" },
      { name: "蒜", category: "调料", amount: "5瓣" },
      { name: "生抽", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "salted-fish-eggplant-pot",
    name: "咸鱼茄子煲",
    category: "煲仔菜",
    time: 35,
    tags: ["咸香", "下饭"],
    ingredients: [
      { name: "茄子", category: "蔬菜", amount: "2根" },
      { name: "咸鱼", category: "水产", amount: "1小块" },
      { name: "猪肉末", category: "肉类", amount: "150g" },
      { name: "蒜", category: "调料", amount: "5瓣" }
    ]
  },
  {
    id: "taro-duck-pot",
    name: "芋头鸭煲",
    category: "煲仔菜",
    time: 70,
    tags: ["香糯", "硬菜"],
    ingredients: [
      { name: "鸭肉", category: "肉类", amount: "半只" },
      { name: "芋头", category: "蔬菜", amount: "600g" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "柱侯酱", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "lotus-root-pork-patty",
    name: "莲藕蒸肉饼",
    category: "蒸菜",
    time: 30,
    tags: ["家常", "不辣"],
    ingredients: [
      { name: "猪肉末", category: "肉类", amount: "350g" },
      { name: "莲藕", category: "蔬菜", amount: "1节" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "生抽", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "dried-squid-pork-patty",
    name: "鱿鱼干蒸肉饼",
    category: "蒸菜",
    time: 30,
    tags: ["咸香", "下饭"],
    ingredients: [
      { name: "猪肉末", category: "肉类", amount: "350g" },
      { name: "鱿鱼干", category: "干货", amount: "半只" },
      { name: "马蹄", category: "蔬菜", amount: "5个" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  },
  {
    id: "salted-egg-pork-patty",
    name: "咸蛋蒸肉饼",
    category: "蒸菜",
    time: 28,
    tags: ["家常", "下饭"],
    ingredients: [
      { name: "猪肉末", category: "肉类", amount: "350g" },
      { name: "咸蛋", category: "蛋奶", amount: "2个" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "生抽", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "dried-scallop-winter-melon-soup",
    name: "瑶柱冬瓜汤",
    category: "汤",
    time: 60,
    tags: ["清淡", "汤"],
    ingredients: [
      { name: "冬瓜", category: "蔬菜", amount: "1块" },
      { name: "瑶柱", category: "干货", amount: "1小把" },
      { name: "猪骨", category: "肉类", amount: "400g" },
      { name: "姜", category: "调料", amount: "1块" }
    ]
  },
  {
    id: "papaya-fish-soup",
    name: "木瓜鲫鱼汤",
    category: "汤",
    time: 60,
    tags: ["清甜", "汤"],
    ingredients: [
      { name: "鲫鱼", category: "水产", amount: "1条" },
      { name: "木瓜", category: "水果", amount: "半个" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "瘦肉", category: "肉类", amount: "150g" }
    ]
  },
  {
    id: "watercress-pork-bone-soup",
    name: "西洋菜猪骨汤",
    category: "汤",
    time: 80,
    tags: ["清润", "汤"],
    ingredients: [
      { name: "西洋菜", category: "蔬菜", amount: "1把" },
      { name: "猪骨", category: "肉类", amount: "600g" },
      { name: "蜜枣", category: "干货", amount: "2颗" },
      { name: "姜", category: "调料", amount: "1块" }
    ]
  },
  {
    id: "kudzu-pork-bone-soup",
    name: "粉葛猪骨汤",
    category: "汤",
    time: 90,
    tags: ["清润", "汤"],
    ingredients: [
      { name: "粉葛", category: "蔬菜", amount: "1个" },
      { name: "猪骨", category: "肉类", amount: "600g" },
      { name: "赤小豆", category: "干货", amount: "1小把" },
      { name: "陈皮", category: "干货", amount: "1片" }
    ]
  },
  {
    id: "chayote-pork-bone-soup",
    name: "合掌瓜猪骨汤",
    category: "汤",
    time: 75,
    tags: ["清甜", "汤"],
    ingredients: [
      { name: "合掌瓜", category: "蔬菜", amount: "2个" },
      { name: "猪骨", category: "肉类", amount: "600g" },
      { name: "胡萝卜", category: "蔬菜", amount: "1根" },
      { name: "姜", category: "调料", amount: "1块" }
    ]
  },
  {
    id: "seaweed-egg-soup",
    name: "紫菜蛋花汤",
    category: "汤",
    time: 12,
    tags: ["快手", "汤"],
    ingredients: [
      { name: "紫菜", category: "干货", amount: "1片" },
      { name: "鸡蛋", category: "蛋奶", amount: "2个" },
      { name: "虾皮", category: "干货", amount: "少许" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  },
  {
    id: "tomato-potato-beef-soup",
    name: "番茄土豆牛肉汤",
    category: "汤",
    time: 70,
    tags: ["家常", "汤"],
    ingredients: [
      { name: "牛肉", category: "肉类", amount: "400g" },
      { name: "番茄", category: "蔬菜", amount: "3个" },
      { name: "土豆", category: "蔬菜", amount: "2个" },
      { name: "姜", category: "调料", amount: "1块" }
    ]
  },
  {
    id: "dace-lettuce",
    name: "豆豉鲮鱼油麦菜",
    category: "青菜",
    time: 15,
    tags: ["快手", "下饭"],
    ingredients: [
      { name: "油麦菜", category: "蔬菜", amount: "1斤" },
      { name: "豆豉鲮鱼罐头", category: "罐头", amount: "1罐" },
      { name: "蒜", category: "调料", amount: "5瓣" }
    ]
  },
  {
    id: "choy-sum-beef",
    name: "菜心炒牛肉",
    category: "小炒",
    time: 20,
    tags: ["快手", "家常"],
    ingredients: [
      { name: "菜心", category: "蔬菜", amount: "1斤" },
      { name: "牛肉", category: "肉类", amount: "300g" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "淀粉", category: "粮油", amount: "少许" }
    ]
  },
  {
    id: "oyster-broccoli",
    name: "蚝油西兰花",
    category: "青菜",
    time: 15,
    tags: ["清淡", "快手"],
    ingredients: [
      { name: "西兰花", category: "蔬菜", amount: "1颗" },
      { name: "蒜", category: "调料", amount: "5瓣" },
      { name: "蚝油", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "garlic-spinach",
    name: "蒜蓉菠菜",
    category: "青菜",
    time: 10,
    tags: ["快手", "清淡"],
    ingredients: [
      { name: "菠菜", category: "蔬菜", amount: "1斤" },
      { name: "蒜", category: "调料", amount: "5瓣" },
      { name: "花生油", category: "粮油", amount: "少许" }
    ]
  },
  {
    id: "preserved-egg-amaranth",
    name: "皮蛋苋菜",
    category: "青菜",
    time: 18,
    tags: ["家常", "清淡"],
    ingredients: [
      { name: "苋菜", category: "蔬菜", amount: "1斤" },
      { name: "皮蛋", category: "蛋奶", amount: "1个" },
      { name: "蒜", category: "调料", amount: "5瓣" }
    ]
  },
  {
    id: "garlic-cabbage",
    name: "蒜蓉炒包菜",
    category: "青菜",
    time: 12,
    tags: ["快手", "家常"],
    ingredients: [
      { name: "包菜", category: "蔬菜", amount: "1颗" },
      { name: "蒜", category: "调料", amount: "5瓣" },
      { name: "蚝油", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "fried-tofu-pork",
    name: "豆腐泡焖猪肉",
    category: "豆腐",
    time: 35,
    tags: ["下饭", "家常"],
    ingredients: [
      { name: "豆腐泡", category: "豆制品", amount: "300g" },
      { name: "五花肉", category: "肉类", amount: "300g" },
      { name: "蒜", category: "调料", amount: "5瓣" },
      { name: "生抽", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "braised-tofu-fish",
    name: "鱼香豆腐煲",
    category: "豆腐",
    time: 35,
    tags: ["下饭", "热乎"],
    ingredients: [
      { name: "豆腐", category: "豆制品", amount: "2块" },
      { name: "鱼肉", category: "水产", amount: "300g" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  },
  {
    id: "minced-pork-tofu",
    name: "肉末豆腐",
    category: "豆腐",
    time: 18,
    tags: ["快手", "下饭"],
    ingredients: [
      { name: "嫩豆腐", category: "豆制品", amount: "2盒" },
      { name: "猪肉末", category: "肉类", amount: "200g" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  },
  {
    id: "steamed-tofu-shrimp",
    name: "虾仁蒸豆腐",
    category: "豆腐",
    time: 20,
    tags: ["清淡", "不辣"],
    ingredients: [
      { name: "嫩豆腐", category: "豆制品", amount: "2盒" },
      { name: "虾仁", category: "水产", amount: "250g" },
      { name: "鸡蛋", category: "蛋奶", amount: "1个" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  },
  {
    id: "shrimp-scrambled-egg",
    name: "虾仁炒蛋",
    category: "快手菜",
    time: 15,
    tags: ["快手", "小孩爱吃"],
    ingredients: [
      { name: "虾仁", category: "水产", amount: "250g" },
      { name: "鸡蛋", category: "蛋奶", amount: "4个" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  },
  {
    id: "clam-steamed-egg",
    name: "花甲蒸水蛋",
    category: "蒸菜",
    time: 22,
    tags: ["鲜", "小孩爱吃"],
    ingredients: [
      { name: "花甲", category: "水产", amount: "300g" },
      { name: "鸡蛋", category: "蛋奶", amount: "3个" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  },
  {
    id: "chive-scrambled-egg",
    name: "韭菜炒蛋",
    category: "快手菜",
    time: 12,
    tags: ["快手", "家常"],
    ingredients: [
      { name: "韭菜", category: "蔬菜", amount: "1把" },
      { name: "鸡蛋", category: "蛋奶", amount: "4个" },
      { name: "花生油", category: "粮油", amount: "少许" }
    ]
  },
  {
    id: "black-pepper-beef",
    name: "黑椒牛肉",
    category: "小炒",
    time: 25,
    tags: ["下饭", "香口"],
    ingredients: [
      { name: "牛肉", category: "肉类", amount: "350g" },
      { name: "洋葱", category: "蔬菜", amount: "1个" },
      { name: "黑椒汁", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "satay-beef-vermicelli-pot",
    name: "沙茶牛肉粉丝煲",
    category: "煲仔菜",
    time: 30,
    tags: ["热乎", "下饭"],
    ingredients: [
      { name: "牛肉", category: "肉类", amount: "350g" },
      { name: "粉丝", category: "粮油", amount: "1把" },
      { name: "沙茶酱", category: "调料", amount: "少许" },
      { name: "洋葱", category: "蔬菜", amount: "半个" }
    ]
  },
  {
    id: "bitter-melon-egg",
    name: "苦瓜炒蛋",
    category: "快手菜",
    time: 15,
    tags: ["快手", "清爽"],
    ingredients: [
      { name: "苦瓜", category: "蔬菜", amount: "1根" },
      { name: "鸡蛋", category: "蛋奶", amount: "4个" },
      { name: "蒜", category: "调料", amount: "3瓣" }
    ]
  },
  {
    id: "loofah-scrambled-egg",
    name: "丝瓜炒蛋",
    category: "快手菜",
    time: 15,
    tags: ["清淡", "快手"],
    ingredients: [
      { name: "丝瓜", category: "蔬菜", amount: "2根" },
      { name: "鸡蛋", category: "蛋奶", amount: "4个" },
      { name: "蒜", category: "调料", amount: "3瓣" }
    ]
  },
  {
    id: "loofah-clam-soup",
    name: "丝瓜花甲汤",
    category: "汤",
    time: 20,
    tags: ["快手", "清甜"],
    ingredients: [
      { name: "丝瓜", category: "蔬菜", amount: "2根" },
      { name: "花甲", category: "水产", amount: "400g" },
      { name: "姜", category: "调料", amount: "1块" }
    ]
  },
  {
    id: "lotus-root-snow-peas",
    name: "荷兰豆炒莲藕",
    category: "青菜",
    time: 18,
    tags: ["清爽", "快手"],
    ingredients: [
      { name: "荷兰豆", category: "蔬菜", amount: "300g" },
      { name: "莲藕", category: "蔬菜", amount: "1节" },
      { name: "蒜", category: "调料", amount: "5瓣" }
    ]
  },
  {
    id: "braised-pomfret",
    name: "红烧鲳鱼",
    category: "海鲜",
    time: 30,
    tags: ["家常", "下饭"],
    ingredients: [
      { name: "鲳鱼", category: "水产", amount: "1条" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "生抽", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "pan-fried-mackerel",
    name: "香煎马鲛鱼",
    category: "海鲜",
    time: 20,
    tags: ["香口", "快手"],
    ingredients: [
      { name: "马鲛鱼", category: "水产", amount: "4块" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "花生油", category: "粮油", amount: "少许" }
    ]
  },
  {
    id: "steamed-grouper",
    name: "清蒸石斑鱼",
    category: "海鲜",
    time: 25,
    tags: ["清淡", "鲜"],
    ingredients: [
      { name: "石斑鱼", category: "水产", amount: "1条" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "小葱", category: "调料", amount: "1把" },
      { name: "蒸鱼豉油", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "seafood-tofu-pot",
    name: "海鲜豆腐煲",
    category: "煲仔菜",
    time: 35,
    tags: ["热乎", "鲜"],
    ingredients: [
      { name: "豆腐", category: "豆制品", amount: "2块" },
      { name: "虾仁", category: "水产", amount: "200g" },
      { name: "鱿鱼", category: "水产", amount: "200g" },
      { name: "香菇", category: "蔬菜", amount: "6朵" }
    ]
  },
  {
    id: "pork-liver-congee",
    name: "猪肝粥",
    category: "主食",
    time: 45,
    tags: ["早餐", "清淡"],
    ingredients: [
      { name: "大米", category: "粮油", amount: "1杯" },
      { name: "猪肝", category: "肉类", amount: "250g" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  },
  {
    id: "yangzhou-fried-rice",
    name: "扬州炒饭",
    category: "主食",
    time: 20,
    tags: ["快手", "主食"],
    ingredients: [
      { name: "米饭", category: "粮油", amount: "3碗" },
      { name: "鸡蛋", category: "蛋奶", amount: "3个" },
      { name: "虾仁", category: "水产", amount: "150g" },
      { name: "火腿", category: "肉类", amount: "100g" }
    ]
  },
  {
    id: "dry-fried-beef-hor-fun",
    name: "干炒牛河",
    category: "粉面",
    time: 25,
    tags: ["主食", "香口"],
    ingredients: [
      { name: "河粉", category: "粮油", amount: "1斤" },
      { name: "牛肉", category: "肉类", amount: "300g" },
      { name: "豆芽", category: "蔬菜", amount: "200g" },
      { name: "韭黄", category: "蔬菜", amount: "1把" }
    ]
  },
  {
    id: "wonton-noodles",
    name: "云吞面",
    category: "粉面",
    time: 25,
    tags: ["主食", "汤面"],
    ingredients: [
      { name: "云吞", category: "速食", amount: "20个" },
      { name: "竹升面", category: "粮油", amount: "4份" },
      { name: "青菜", category: "蔬菜", amount: "半斤" },
      { name: "高汤", category: "调料", amount: "适量" }
    ]
  },
  {
    id: "soy-sauce-chow-mein",
    name: "豉油皇炒面",
    category: "粉面",
    time: 20,
    tags: ["主食", "快手"],
    ingredients: [
      { name: "鸡蛋面", category: "粮油", amount: "1斤" },
      { name: "豆芽", category: "蔬菜", amount: "200g" },
      { name: "韭黄", category: "蔬菜", amount: "1把" },
      { name: "生抽", category: "调料", amount: "少许" }
    ]
  },
  {
    id: "oyster-congee",
    name: "蚝仔粥",
    category: "主食",
    time: 45,
    tags: ["鲜", "主食"],
    ingredients: [
      { name: "大米", category: "粮油", amount: "1杯" },
      { name: "蚝仔", category: "水产", amount: "300g" },
      { name: "姜", category: "调料", amount: "1块" },
      { name: "小葱", category: "调料", amount: "1把" }
    ]
  }
];

module.exports = {
  familyMembers,
  dishes
};
