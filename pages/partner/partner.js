const app = getApp();
Page({
  data: {
    checked: app.globalData.musicChecked,
    memoryList: [
      {
        time: "2023/02/04",
        picture: "230204",
        address: "shanghai",
        iconClass: "shanghai-icon",
        // description: "扭扭捏捏的南京路，是我们故事的开始...",
        description: "阳：喜欢一个人又没什么丢人的<br>嘉：那我们在一起吧",
      },
      {
        time: "2023/02/10",
        picture: "230211",
        address: "dalian",
        iconClass: "dalian-icon",
        description: "星海，灯光，烟花，牵手...",
      },
      {
        time: "2023/02/24",
        picture: "230225",
        address: "shanghai",
        iconClass: "shanghai-icon",
        description: "陆家嘴的风，瑟瑟发抖的你，跳动不止的心...",
      },
      {
        time: "2023/03/03",
        picture: "230304",
        address: "dalian",
        iconClass: "dalian-icon",
        description: "灯塔下害羞的你，在我心中也是一番风景...",
      },
      {
        time: "2023/03/10",
        picture: "230311",
        address: "jlu",
        iconClass: "jlu-icon",
        description: "JLU，Just Love You...",
      },
      {
        time: "2023/03/24",
        picture: "230325",
        address: "dalian",
        iconClass: "dalian-icon",
        description: "浪漫的不是威尼斯，而是眼前的心上人...",
      },
      {
        time: "2023/04/07",
        picture: "230408",
        address: "suzhou",
        iconClass: "dalian-icon",
        // description: "金鸡湖边，落日尤其温柔，人间皆是浪漫...",
        description: "那天落日晚霞洒在我们身上，洒在你的眼睛里，洒进我的心里～",
      },
      {
        time: "2023/04/14",
        picture: "230416",
        address: "dalian",
        iconClass: "dalian-icon",
        description: "海天一色，这一刻，你在左，我在右...",
      },
      {
        time: "2023/04/29",
        picture: "230501",
        address: "nanjing",
        iconClass: "shanghai-icon",
        description: "金陵的人海满是疲倦，我身旁的你便是一生...",
      },
      {
        time: "2023/05/12",
        picture: "230514",
        address: "dalian",
        iconClass: "dalian-icon",
        description: "凑满期待，凑出所有的爱...",
      },
      {
        time: "2023/05/20",
        picture: "230520",
        address: "dalian",
        iconClass: "dalian-icon",
        description: "承蒙照顾，520~",
      },
    ],
  },
  onShow() {
    this.setData({
      checked: app.globalData.musicChecked,
    });
  },
  checkMusic() {
    app.checkMusic();
    app.globalData.musicChecked = !app.globalData.musicChecked;
    this.setData({
      checked: !this.data.checked,
    });
  },
});
