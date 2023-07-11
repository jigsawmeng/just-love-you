// app.js
const myaudio = wx.createInnerAudioContext();
App({
  onLaunch: function () {
    console.log("========= App onLoad =========");
    wx.setKeepScreenOn({
      keepScreenOn: true,
    });
    // const tokenPromise = new Promise((resolve, reject) => {
    //   wx.request({
    //     url: "https://api.weixin.qq.com/cgi-bin/token",
    //     data: {
    //       grant_type: "client_credential",
    //       appid: this.globalData.AppID,
    //       secret: this.globalData.AppSecret,
    //     },
    //     success: (res) => {
    //       let access_token = res.data.access_token;
    //       resolve(access_token);
    //       this.globalData.access_token = access_token;
    //       console.log("access_token ====>", access_token);
    //     },
    //     fail: function (res) {
    //       console.log("获取access_token失败", res);
    //       reject(res);
    //     },
    //   });
    // });
    // const openidPromise = new Promise((resolve, reject) => {
    //   wx.login({
    //     success: (res) => {
    //       if (res.code) {
    //         wx.request({
    //           url: "https://api.weixin.qq.com/sns/jscode2session",
    //           data: {
    //             appid: this.globalData.AppID,
    //             secret: this.globalData.AppSecret,
    //             js_code: res.code,
    //             grant_type: "authorization_code",
    //           },
    //           success: (res) => {
    //             let openid = res.data.openid;
    //             resolve(openid);
    //             this.globalData.openid = openid;
    //             console.log("openid ====>", openid);
    //           },
    //           fail: function (res) {
    //             console.log(res);
    //           },
    //         });
    //       } else {
    //         console.log("登录失败！" + res.errMsg);
    //         reject(res);
    //       }
    //     },
    //   });
    // });
    // Promise.all([tokenPromise, openidPromise]).then((res) => {
    //   console.log("Promise.all", res);
    //   this.globalData.access_token = res[0];
    //   this.globalData.openid = res[1];
    //   获取用户授权;
    //   wx.getSetting({
    //     success: (res) => {
    //       if (res.authSetting["scope.userInfo"]) {
    //         // 已经授权，调用接口发送消息
    //         wx.request({
    //           url:
    //             "https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=" +
    //             this.globalData.access_token,
    //           data: {
    //             touser: this.globalData.openid,
    //             msgtype: "text",
    //             text: {
    //               content: "又来看我了吗，爱你呦",
    //             },
    //           },
    //           method: "POST",
    //           success: function (res) {
    //             console.log("发送消息成功", res);
    //           },
    //           fail: function (res) {
    //             console.log("发送消息失败", res);
    //           },
    //         });
    //       } else {
    //         // 未授权，引导用户授权
    //         wx.authorize({
    //           scope: "scope.userInfo",
    //           success() {
    //             // 授权成功，调用接口发送消息
    //           },
    //           fail() {
    //             // 授权失败，提示用户授权
    //           },
    //         });
    //       }
    //     },
    //   });
    // });
  },
  onShow: function () {
    console.log("========= APP onShow =========");
    // this.player(wx.getBackgroundAudioManager());
    myaudio.title = "just love you";
    myaudio.src = "http://music.163.com/song/media/outer/url?id=740530.mp3";
    myaudio.play();
    myaudio.onEnded(() => {
      myaudio.play();
    });
  },
  player(e) {
    e.title = "just love you";
    e.src = "http://music.163.com/song/media/outer/url?id=740530.mp3";
    //音乐播放结束后继续播放此音乐，循环不停的播放
    e.onEnded(() => {
      this.player(wx.getBackgroundAudioManager());
    });
  },
  checkMusic() {
    this.musicChecked = !this.musicChecked;
    if (this.musicChecked) {
      // wx.getBackgroundAudioManager().pause();
      myaudio.pause();
    } else {
      // this.player(wx.getBackgroundAudioManager());
      myaudio.play();
    }
  },
  onHide() {
    // wx.getBackgroundAudioManager().stop();
    myaudio.stop();
  },
  globalData: {
    musicChecked: false,
    userInfo: null,
    // AppSecret: "15c64cf479b10f5c2e59ec17141b85e3",
    // AppID: "wx0f300f9225e216f7",
    openid: null,
    access_token: null,
  },
});
