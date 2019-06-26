Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageName: 'kaideng.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.setData({
      title: wx.getStorageSync('title')
    })
    

  },changeImage(){
    //图片文件名
    var imageName = '';
    if (this.data.imageName == 'kaideng.png'){
      imageName = 'guandeng.png';
    }else{
      imageName = 'kaideng.png';
    }

    this.setData({
      imageName
    })

  },
  /**
   * 点击跳转页面并传递参数
   */
  device_info: function(e) {

    var src = e.detail.value;

    wx.navigateTo({
      url: "../../light/index2/index2?title = " + src
    });


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
  go_setTimes: function () {
    wx.navigateTo({
      url: '/communal/light/index1/setTimes/setTimes',
    })
  }
})