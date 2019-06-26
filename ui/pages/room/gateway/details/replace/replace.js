// pages/room/gateway/details/replace/replace.js
var api = require('../../../../../config/config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomDatas: "",
    mNumber: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({

      onOffCD: wx.getStorageSync("onOffCD"),
      roomDatas: wx.getStorageSync("roomDatas"),
      mIndex: wx.getStorageSync("renameIndexCD"), //获取当前选中的下标
      renameNameCD: wx.getStorageSync("renameNameCD"), //获取当前选中的名称
      itemsrcCD: wx.getStorageSync("itemsrcCD"), //获取当前选中的图片路径
      currentTab: wx.getStorageSync("currentTab"), //获取菜单栏的下标
      roomValue: wx.getStorageSync("roomValue"), //获取新添加房间名称
      operatingCD: wx.getStorageSync("operatingCD"), //获取新添加房间名称
      // idNum: options.currentTarget.mNums  operatingCD
    })
    console.log(this.data.roomDatas)
    console.log(this.data.operatingCD)

    console.log(this.data.mIndex + " 选中下标 ")
    console.log(this.data.currentTab + " 获取菜单栏的下标 ")
    console.log(this.data.rname + " 获取菜单栏名称 ")
    console.log(this.data.roomValue + " 获取菜单栏名称  roomValue")

    //判断当前的菜单栏的坐标是否为选中
    if (this.data.roomDatas[this.data.currentTab].flag == false) {
      this.data.roomDatas[this.data.currentTab].flag = true
    } else {
      this.data.roomDatas[this.data.currentTab].flag = false
    }
    console.log(this.data.roomDatas[this.data.currentTab].flag + "  this.data.mNumber")
    //赋值
    this.setData({
      roomDatas: this.data.roomDatas
    })
  },
  //确定事件
  confirmBase: function (e) {
    console.log(this.data.mNumber + "  this.data.mNumber")
    console.log(this.data.currentTab + "  this.data.currentTab  ")
    let that = this
    var rooms = this.data.roomDatas;
    //判断是否有选中
    if (rooms[this.data.mNumber].flag == false) {
      console.log("进入当前的状态")
      wx.showToast({
        title: '请选择房间设备',
        icon: 'none',
        duration: 2000
      })
      return;
    } else {
      console.log(this.data.mNumber + "  this.data.mNumber  1111  11")
      console.log(rooms[this.data.mNumber].name + "  this.data.mNumber  2222  11")
      //获取当前的数组并添加noopsyche
      rooms[this.data.mNumber].noopsyche.push({
        name: this.data.renameNameCD,
        src: this.data.itemsrcCD,
        status: this.data.onOffCD,
        on_off: false,
        urlname: "InfraredAlarm/smartBulb/smartBulb"
      })
      this.setData({
        roomDatas: rooms
      })
    }
    //移除当前的设备
    rooms[that.data.currentTab].noopsyche.splice(this.data.mIndex, 1);

    if (this.data.operatingCD == 'show') {
      this.data.operatingCD = 'hidden'
    }
    //重新赋值
    this.setData({
      roomDatas: rooms,
      operatingCD: this.data.operatingCD
    })

    console.log(this.data.operatingCD)
    wx.setStorageSync("roomDatas", rooms)
    wx.setStorageSync("operating", this.data.operatingCD)
    wx.navigateBack({
      delta: 1
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

    // this.setData({
    //   roomDatas: wx.getStorageSync("roomDatas")
    // })


    //console.log("先执行")
    //console.log(roomDatas)
    // this.setData({
    //   noopsycheData: api.roomDatas[0].noopsyche //所有的智能设备 
    // })

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
  option: function (e) {
    var i = e.target.id;
    console.log(i)
    if (this.data.roomDatas[i].flag == true) {
      this.data.roomDatas[i].flag = false
    } else if (this.data.roomDatas[i].flag == false) {
      for (var j in this.data.roomDatas) {
        if (i != j) {
          this.data.roomDatas[j].flag = false;
        }
        console.log(this.data.roomDatas[j].flag)
      }
      this.data.roomDatas[i].flag = true

      console.log(this.data.roomDatas[i].flag + "   this.data.roomDatas[i].flag  ")
    }
    this.setData({
      roomDatas: this.data.roomDatas,
      mNumber: i
    })
  }
})