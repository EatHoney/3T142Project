// pages/common/common.js
const api = require("../../../../config/config.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      setingTimes:api.setingTimes,//导入config的js
      weeks: api.weeks,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

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
  onPullDownRefresh: function() {},

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
  mytouchstart: function(e) {
    var bgColor = this.data.pageBackgroundColor == 'red' ? '#5cb85c' : 'red';
    // 设置背景颜色数据
    this.setData({
      pageBackgroundColor: bgColor
    }); /**点击事件 */
  },
  mytouchend: function(e) {
    console.log(e.timeStamp + '点击事件触发')
  },
  mytap: function(e) {
    //点击添加跳转进入定时页面
    wx.navigateTo({
      url: "/communal/light/index1/setTimes/dingshi/dingshi"//页面点击跳转
    })

  },
  /**判断开关是否是ture 还是flase */
  change: function(e) {
    console.log(e.detail.value)
    this.setData({
      "weeks[0].week": e.detail.value
    })
  },
  uptiem:function(e){
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url:"/communal/light/index1/setTimes/dingshi/dingshi?index="+index
    })
  }
})