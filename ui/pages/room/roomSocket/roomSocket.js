var pageData = {}
for (var i = 1; i < 5; ++i) {
  (function(index) {
    pageData['slider' + index + 'change'] = function(e) {
      console.log('slider' + 'index' + '发生 change 事件，携带值为', e.detail.value)
    }
  })(i);
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    use: [{
        "use_name": "遥控匹配"
      },
      {
        "use_name": "时钟校准"
      },
      {
        "use_name": "定时"
      },
    ],
    state: '',
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

  }
})