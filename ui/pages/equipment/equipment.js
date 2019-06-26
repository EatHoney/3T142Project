// pages/room/room.js

const app = getApp()
const api = require("../../config/config.js")

// pages/equipment/equipment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    winWidth: 0,
    winHeight: 0,
    currentTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;

    //设置数据 只接收json数据类型
    that.setData({
      lightData: api.light

    })

    this.setData({
      noopsycheData: api.noopsyche      //所有的智能设备
    })

    //网关 数据
    that.setData({
      gatewayData: api.gateway
    })

    // wx.showModal({
    //   title: '授权用户信息',
    //   content: '您需要先授权用户信息',
    //   success(res) {
    //     if (res.confirm) {
    //       // getUserInfo: e.detail.getUserInfo
    //       console.log('用户点击确定')
    //       /** 
    //  * 获取系统信息 
    //  */
    //       wx.getSystemInfo({
    //         success: function (res) {
    //           that.setData({
    //             winWidth: res.windowWidth,
    //             winHeight: res.windowHeight
    //           });
    //         }
    //       })
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  commBtn: function (param) {
    // const number = event.target.id;  //1或者2得到点击了按钮1或者按钮2
    wx.navigateTo({
      // url: '/pages/room/mainCoom/mainCoom',    //得到url 传递页面
    })
  }
})