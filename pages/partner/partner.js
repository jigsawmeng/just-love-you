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
        iconClass: "suzhou-icon",
        // description: "金鸡湖边，落日尤其温柔，人间皆是浪漫...",
        description:
          "<label class='text-long-1'>那天落日晚霞洒在我们身上，洒在你的眼睛里，洒进我的心里～</label>",
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
        iconClass: "nanjing-icon",
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
      {
        time: "2023/05/26",
        picture: "230528",
        address: "dalian",
        iconClass: "dalian-icon",
        description: "每次说再见，都是为了更好的再见...",
      },
      {
        time: "2023/06/09",
        picture: "230611",
        address: "dalian",
        iconClass: "dalian-icon",
        description: "被爱才是成年人回到童年的唯一方式...",
      },
      {
        time: "2023/06/20",
        picture: "230623",
        // type: "mp4",
        address: "xiamen",
        iconClass: "jlu-icon",
        description:
          "<label class='text-long'>冰镇汽水的甜，椰汁海风带的咸。一个自然而然的假期，我们一起去海边，向着热气球竭力奔跑，余晖消逝之前都不算终点。被我们丢在身后的时间，关于以后的一切所有的幻想都藏在厦门白城沙滩的海岸线...</label>",
      },
      {
        time: "2023/06/30",
        picture: "230701",
        address: "dalian",
        iconClass: "dalian-icon",
        description: "想和你一起吹海风~",
      },
      {
        time: "2023/07/07",
        picture: "230709",
        address: "shanghai",
        iconClass: "shanghai-icon",
        description: "那天边的晚霞，她是在贩卖浪漫~",
      },
      {
        time: "2023/07/14",
        picture: "230715",
        address: "shenyang",
        iconClass: "dalian-icon",
        description: "后来烟雨落盛京，一人撑伞两人行...",
      },
      {
        time: "2023/07/21",
        picture: "230723",
        address: "dalian",
        iconClass: "dalian-icon",
        description: "时光的一小步，我们的一大步...",
      },
      {
        time: "2023/08/04",
        picture: "230806",
        address: "dalian",
        iconClass: "dalian-icon",
        description:
          "<label class='text-long-1'>和你见面，跟你拥抱，跟你腻歪，是我疲惫生活里的唯一解药...</label>",
      },
      {
        time: "2023/08/18",
        picture: "230818",
        address: "dalian",
        iconClass: "dalian-icon",
        description:
          "Y：<br><label class='ml-32'>看到彩虹的人前路皆是坦途~</label>",
      },
      {
        time: "2023/09/01",
        picture: "230902",
        address: "disneyland",
        iconClass: "dalian-icon",
        description: "让我们慢慢拥抱，阳光、微风铸就了我们的城堡",
      },
      {
        time: "2023/09/08",
        picture: "230910",
        address: "dalian",
        iconClass: "dalian-icon",
        description: "擦鼻涕的纸，擦鼻涕的纸💕",
      },
      {
        time: "2023/09/22",
        picture: "230924",
        address: "shanghai",
        iconClass: "shanghai-icon",
        description: "阴天的快乐并不会打折...",
      },
      {
        time: "2023/09/28 见家长啦！",
        picture: "230929",
        address: "home-icon",
        iconClass: "jlu-icon",
        description: "我吹过你吹过的晚风~",
      },
      {
        time: "2023/10/10",
        picture: "231011",
        address: "shanghai",
        iconClass: "shanghai-icon",
        description: "我们终将战胜它...",
      },
      {
        time: "2023/10/13",
        picture: "231015",
        address: "dalian",
        iconClass: "dalian-icon",
        description: "带着你这份一起跑...",
      },
    ],
  },
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ["shareAppMessage", "shareTimeline"],
    });
  },
  onShow() {
    this.setData({
      checked: app.globalData.musicChecked,
    });
  },
  checkMusic() {
    app.checkMusic();
    // app.globalData.musicChecked = !app.globalData.musicChecked;
    this.setData({
      checked: !this.data.checked,
    });
  },
});
