const app = getApp()
const api = require("../../../../../config/config.js")
Page({
  data: {
    opentimes: "00:00",
    mHidden: true,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    flag: false,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(api.weeks)
    this.setData({
      setingTimes: api.setingTimes,
      weeks: api.weeks,
      index2: options.index
    })
  },
  //事件处理函数
  bindViewTap: function () { },
  /**判断开关是否是ture 还是flase */
  changeTap: function (e) {
    console.log(e.detail.value)
    if (e.detail.value) {
      this.setData({
        "setingTimes[0].onoff": "开",
      })
    } else {
      this.setData({
        "setingTimes[0].onoff": "关",
      })
    }
  },




  /** 
   * 滑动切换tab 
   */
  bindChange: function (e) {

    var that = this;
    that.setData({
      currentTab: e.detail.current
    });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

  },
  getUserInfo: function (e) {

  },
  setNavigationBarTitle: function () {

  },
  setNavigationBarColor: function () { },
  setFirstTab() { },
  /**点击时间 */
  bindopenTimeChange: function (e) {
    console.log("用户点击开启时事件")
    this.setData({
      'setingTimes[0].time': e.detail.value,//给时间赋值

    })
    console.log("时间为" + e.detail.value);
  },
  bababa: function () {
    wx.navigateTo({
      url: "/communal/light/index1/setTimes/setTimes"
    }) //跳转
  },
  as: function (e) {
    if (weeks[0].flag) {
      this.setData({
        
        "weeks[0].flag": false,
      })
    } else {
      this.setData({
        "weeks[0].flag": true,
        "setingTimes[0].week": weeks[0].week,//添加到setingTimes数组里面
      })
    }

  }

})