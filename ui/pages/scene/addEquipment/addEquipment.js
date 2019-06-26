const app = getApp()
const api = require("../../../config/config.js")

Page({

  /** 
   * 页面的初始数据 
   */
  data: {
    hasUserInfo: false,
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
  
  },

  /** 
   * 生命周期函数--监听页面加载 
   */
  onLoad: function(options) {
    var that = this;
    //设置数据 只接收json数据类型 
    that.setData({
      lightData: api.light
    })
    this.setData({
      noopsycheData: api.roomDatas[0].noopsyche //所有的智能设备 
    })

    //网关 数据 
    that.setData({
      gatewayData: api.gateway
    })

    that.setData({
      roomDatas: api.roomDatas
    })
    //设置本地缓存智能设备 
    wx.setStorageSync("noopsycheData", this.data.noopsycheData)
    //设置本地缓存智能设备属于哪个类型 
    wx.setStorageSync("roomDatas", this.data.roomDatas)
    wx.getStorageSync("roomDatas")

  },

  /**  
   * 滑动切换tab  
   */
  bindChange: function(e) {
    var roomDatas = wx.getStorageSync("roomDatas")

    console.log(e.detail.current);

    this.setData({
      currentTab: e.detail.current,
      noopsycheData: roomDatas[e.detail.current].noopsyche //所有的智能设备 
    })

  },
  /**  
   * 点击tab切换  
   */
  swichNav: function(e) {

    var that = this;
    console.log(e.target.dataset.current + "  tab  ")
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      var roomDatas = wx.getStorageSync("roomDatas");

      console.log(roomDatas[e.target.dataset.current].noopsyche)

      this.setData({
        currentTab: e.target.dataset.current,
        noopsycheData: roomDatas[e.target.dataset.current].noopsyche //所有的智能设备 
      })
    }
    console.log(this.data.currentTab + "   currentTab   ")

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


    this.setData({
      roomDatas: wx.getStorageSync("roomDatas")
    })

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
  /**
   * 添加设备
   */
  commBtn: function(e) {
    //拿到当前设备
    var obj = api.roomDatas[0].noopsyche[parseInt(e.currentTarget.dataset.index)];
    //拿到情景模式详情页面的设备数组
    var array = wx.getStorageSync('equipmentObj')
    if (obj != null && obj != undefined) {
      //显示模态框
      wx.showModal({
        title: '提示',
        content: '您将添加' + obj.name,
        success: function(res) {
          //循环数组
          for (var i = 0; i < array.length; i++) {
            //如果有相同的，提示并return
            if (array[i].name == obj.name) {
              wx.showToast({
                title: '该情设备已存在',
                icon: 'loading',
                duration: 900,
                mask: true
              })
              return
            }
          }
          //不相同就往数组后追加
          array.push(obj)
          //点击确定
          wx.setStorageSync('equipmentObj', array)
          console.log(array)

          if (res.confirm) {
            //返回上一页
            wx.navigateBack({
              delta: 1
            })
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')

          }
        }
      })

    }

  }
})