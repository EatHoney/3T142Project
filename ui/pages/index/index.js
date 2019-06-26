//index.js
//获取应用实例


Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,

  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   
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
  }
  //跳转页面回调函数
  , default: function (data) {
    wx.navigateTo({
      url: '../page/main'
    })
  }
  
  , setFirstTab() {
    wx.setTabBarBadge({
      index: 0,
      text: '23',
    })
  }

  , setSecondTab() {
    wx.showTabBarRedDot({
      index: 1,
    })
  }

})
