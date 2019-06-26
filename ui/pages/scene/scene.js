// pages/scene/scene.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      src: "/img/情景模式/-/yundong.png",
      mode: "运动模式",

    },
    {
      src: "/img/情景模式/-/d.png",
      mode: "开门模式",

    }],

    //显示初始头部
    topShow1: true,

    //隐藏排序头部
    topShow2: false

  },

  /**
   * 情景排序
   */
  sceneSort: function () {
    this.setData({
      //隐藏初始头部
      topShow1: false,
      //显示排序头部
      topShow2: true
    })
  },
  /**
   * 排序取消事件
   */
  sceneSortCancel: function () {
    this.setData({
      topShow1: true,
      topShow2: false
    })
  },
  /**
   * 长按点击事件
   */
  longtapSort: function () {
    this.setData({
      //隐藏初始头部
      topShow1: false,
      //显示排序头部
      topShow2: true
    })

  }
  ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('array', this.data.array)
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
    this.setData({
      array: wx.getStorageSync('array')
    })
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
    wx.showNavigationBarLoading() //在标题栏中显示加载

    setTimeout(function () {

      wx.hideNavigationBarLoading() //完成停止加载

      wx.stopPullDownRefresh() //停止下拉刷新

    }, 1500);
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

  /**
   * 点击设置按钮跳转页面同时传入模式对象 
   */
  gotopage: function (e) {
    //拿到当前对象
    var array = this.data.array[parseInt(e.currentTarget.dataset.index)];
    //设置同步缓存
    wx.setStorageSync("scene", array)
    //跳转到情景模式详情页面
    wx.navigateTo({ url: '../scene/sceneSetting/Setting?array=' + array, })
  },

  /**
   * 跳转到添加模式页面
   */
  addScene: function () {
    wx.setStorageSync('title', "添加情景模式")
    wx.navigateTo({
      url: '../scene/addscene/addscene',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})