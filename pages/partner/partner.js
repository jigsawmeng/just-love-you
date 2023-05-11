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
      },
      {
        time: "2023/02/10",
        picture: "230211",
        address: "dalian",
        iconClass: "dalian-icon",
      },
      {
        time: "2023/02/24",
        picture: "230225",
        address: "shanghai",
        iconClass: "shanghai-icon",
      },
      {
        time: "2023/03/03",
        picture: "230304",
        address: "dalian",
        iconClass: "dalian-icon",
      },
      {
        time: "2023/03/10",
        picture: "230311",
        address: "dalian",
        iconClass: "dalian-icon",
      },
      {
        time: "2023/03/24",
        picture: "230325",
        address: "dalian",
        iconClass: "dalian-icon",
      },
      {
        time: "2023/04/07",
        picture: "230408",
        address: "suzhou",
        iconClass: "dalian-icon",
      },
      {
        time: "2023/04/14",
        picture: "230416",
        address: "dalian",
        iconClass: "dalian-icon",
      },
      {
        time: "2023/04/29",
        picture: "230501",
        address: "nanjing",
        iconClass: "shanghai-icon",
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
