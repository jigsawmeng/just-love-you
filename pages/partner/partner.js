const app = getApp();
Page({
  data: {
    checked: app.globalData.musicChecked,
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
