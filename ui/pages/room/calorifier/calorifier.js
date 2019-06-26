// pages/room/calorifier/calorifier.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flags: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  go_details: function() {
    wx: wx.navigateTo({
      url: '/pages/room/gateway/details/details'
    })
  },
  showtip: function() {
    wx: wx.showModal({
      title: '配置当前按钮',
      content: '请按遥控器上的电源键',
      confirmText: '匹配',
      cancelText: '取消',
    })
  },
  go_setTimes: function() {
    wx: wx.navigateTo({
      url: '/communal/light/index1/setTimes/setTimes'
    })
  },
  set_up: function() {
    wx: wx.navigateTo({
      url: '/pages/room/calorifier/seting_up/seting_up'
    })
  },
  voltameter: function() {
    wx: wx.navigateTo({
      url: '/pages/room/calorifier/voltameter/voltameter'
    })
  },
  cut_command: function(e) {
    var that = this;
    wx: wx.showModal({
      title: '切换设备类型',
      content: '热水其是否带遥控器',
      cancelText: '无遥控器',
      cancelColor: '#39a1e8',
      confirmText: '有遥控器',
      confirmColor: '#39a1e8',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击有遥控器')
          that.setData({
            flags: true
          })
        } else if (res.cancel) {
          console.log('用户点击无遥控器')
          that.setData({
            flags: false
          })
        }
        console.log(that.data.flags)
      }
    })
  }
})