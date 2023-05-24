// index.js
const app = getApp();
const APIKEY = "46505f92e9d448919a40e7289afa994f"; // 和风天气的key
let QQMapWX = require("../../lib/qqmap-wx-jssdk.min");
// 实例化API核心类
let qqmapsdk = new QQMapWX({
  key: "S7ABZ-WUKEB-FXZUN-JSJ26-IXNF7-PPBAS",
});
Page({
  data: {
    nowDay: "",
    loveDay: "2023/02/05",
    loveDayDistance: "",
    nextDay: "2023/06/09",
    nextDayDistance: "",
    checked: false, // 背景音乐开始暂停
    latitude: "", // 纬度
    longitude: "", // 经度
    address: "", // 所在地区
    weatherIcon: "", // 天气图标
    weatherTemp: "", // 温度,默认单位:摄氏度
    weatherText: "", // 实况天气状况的文字描述
    weatherWindDir: "", // 风向
    weatherWindScale: "", // 风力
    weatherHumidity: "", // 相对湿度
  },
  onLoad: function () {
    wx.getLocation({
      type: "wgs84",
      success: (res) => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        });
        this.weather(`${res.longitude},${res.latitude}`);
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude,
          },
          success: (res1) => {
            let add = "你在哪了，我不知道啊";
            if (res1.result.ad_info) {
              const { city, district } = res1.result.ad_info;
              add = `${city}${district}`;
            }
            this.setData({
              address: add,
            });
          },
        });
      },
    });
  },
  onShow() {
    const loveDay = this.data.loveDay;
    const nextDay = this.data.nextDay;

    const day1 = this.getDiffDay(new Date(), new Date(loveDay));
    const day2 = this.getDiffDay(new Date(), new Date(nextDay));
    this.setData({
      checked: app.globalData.musicChecked,
      loveDayDistance: day1,
      nextDayDistance: day2,
    });
  },
  // 向上取整
  getDiffDay(date_1, date_2) {
    let totalDays, diffDate;
    diffDate = Math.abs(date_1 - date_2);

    totalDays = Math.ceil(diffDate / (1000 * 3600 * 24));
    return totalDays; // 相差的天数
  },
  // 向下取整
  getDiffDay1(date_1, date_2) {
    let totalDays, diffDate;
    diffDate = Math.abs(date_1 - date_2);

    totalDays = Math.floor(diffDate / (1000 * 3600 * 24));
    return totalDays; // 相差的天数
  },
  checkMusic() {
    app.globalData.musicChecked = !app.globalData.musicChecked;
    app.checkMusic();
    this.setData({
      checked: !this.data.checked,
    });
  },
  weather(location) {
    let that = this;
    wx.showLoading({
      title: "加载中",
    });
    wx.request({
      url: `https://devapi.qweather.com/v7/weather/now?key=${APIKEY}&location=${location}`,
      success(result) {
        const res = result.data;
        that.setData({
          weatherIcon: res.now.icon,
          weatherTemp: res.now.temp,
          weatherText: res.now.text,
          weatherWindDir: res.now.windDir,
          weatherWindScale: res.now.windScale,
          weatherHumidity: res.now.humidity,
        });
      },
    });
    wx.hideLoading();
  },
});
