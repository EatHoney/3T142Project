Page({

  /**
   * 页面的初始数据
   */
  data: {
    week: [
      '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'
    ],
  },
  systemlinkage: function(options) {
    wx.navigateTo({
      url: 'Systemlinkage/Systemlinkage',
    })
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
  systemlinkage: function(options) {
    wx.navigateTo({
      url: '../Systemlinkage/Systemlinkage',
    })
  },
  alarmSystem: function (options) {
    wx.navigateTo({
      url: '../AlarmSystem/AlarmSystem',
    })
  },
})