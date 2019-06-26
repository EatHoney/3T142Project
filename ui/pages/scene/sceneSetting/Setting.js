// pages/sceneSetting/Setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //情景模式
    array: [{}],
    //设备
    equipmentObj: [{
      name: "安防网关-530",
      on_offs: true,
      src: "/img/房间与常用/anquan.png ",
      status: ["在线", "开", "关", "故障", "离线", "维修"],
      on_off: false
    }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setStorageSync('equipmentObj', this.data.equipmentObj)
   
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
      array: wx.getStorageSync("scene"),
      equipmentObj: wx.getStorageSync("equipmentObj")
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
   * 下拉菜单
   */
  addEquipment: function() {
    this.setData({
      select: !this.data.select
    })
  },

  /**
   * 删除模式提示
   */
  deleteScene: function(e) {
    wx.showModal({
      title: '提示',
      content: '确定要删除此情景模式吗？',
      success(res) {
        if (res.confirm) {
          //拿到当前的模式
          var scene = wx.getStorageSync("scene")
          //拿到所有情景模式
          var array = wx.getStorageSync('array')
          //从所有情景模式中删除当前模式
          array.splice(scene, 1)
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 900,
            mask: true
          })
          //删除后的同步缓存
          wx.setStorageSync("array", array)
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
  },

  /**
   * 修改情景模式
   */
  updateSceneName: function(e) {
    //标识修改
    wx.setStorageSync('isUpdate', true)
    //修改前的情景模式名
    wx.setStorageSync('updateBeforeName', e.currentTarget.dataset.mode)
    //设置标题
   wx.setStorageSync('title', "重命名")
    //跳转到添加页面修改
    wx.navigateTo({
      url: '../addscene/addscene'
    })
  },

  /**
   * 为当前模式添加设备
   */
  addroom: function() {
    wx.navigateTo({
      url: '../addEquipment/addEquipment'
    })
  },
  /**
   * 删除设备
   */
  delEquipment: function(e) {
    let that = this
    //拿到当前设备
    var equipment = that.data.equipmentObj[parseInt(e.currentTarget.dataset.index)];
   //拿到当前设备下标
    var arrayIndex = e.currentTarget.dataset.index;
    //全部设备
    var equipmentAll = wx.getStorageSync('equipmentObj')
    //显示模态框
    wx.showModal({
      title: '提示',
      content: '您将删除' + equipment.name,
      success: function(res) {
        //点击确定
        if (res.confirm) {
          console.log(arrayIndex)
          //根据下标把当前设备从该模式中删除
          equipmentAll.splice(arrayIndex, 1)
            wx.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 900,
              mask: true
            })
           that.setData({
             equipmentObj: equipmentAll
           })
          //重新加载
          that.onLoad()
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})