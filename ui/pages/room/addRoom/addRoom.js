// pages/room/addRoom/addRoom.js


Page({

  /**
   * 页面的初始数据
   */
  data: {

    roomNames: [], //数组
    rname: '', //获取输入名称
    operating: "hidden",
    hiddenmodalput: true,
    rename_index: 0,
    num: 0

  },
  //菜单取消
  cancel: function (e) {
    this.setData({
      operating: 'hidden'
    })

  },
  //弹窗取消
  cancels: function () {
    this.setData({
      hiddenmodalput: true
    });

  },

  bindName: function (e) {
    let name = e.detail.value;
    this.setData({
      chongname: name
    })
  },
  /**
   * 拿到设备名称
   * 
   */
  showTitle: function (res) {
    console.log("进入 ")
    console.log(res + "  热身赛  ");
    this.setData({
      device_name: res.currentTarget.dataset.title,
      rename_index: res.currentTarget.id
    })
    console.log(this.data.rename_index + " rename_index  下标 ")
    console.log(this.data.device_name + " device_name  名称   ")
  },
  /**
   * 重命名
   */
  rename: function (ew) {
    this.setData({
      hiddenmodalput: false,
    })

  },
  //显示下拉框
  bindLongTapRoom: function () {
    this.setData({
      operating: 'show',
    })
  },
  //弹窗确认
  confirm: function (rss) {
    var that = this
    //给当前的数组选中当前的房间名称修改
    this.data.roomNames[this.data.rename_index].name = this.data.chongname;
    this.setData({
      roomNames: this.data.roomNames, //所有的智能设备
      hiddenmodalput: true,
    })
    wx.setStorageSync("roomDatas", that.data.roomNames)
  },
  //移除设备
  showDialogBtn: function (e) {
    //获取选中当前的下标
    let indexo = this.data.rename_index;
    let that = this;
    wx.showModal({
      title: '提示',
      content: '是否从常用中移除该设备？',
      showCancel: true,
      success: function (res) {
        if (res.confirm) { //这里是点击了确定以后
          if (that.data.roomNames[indexo].noopsyche.length > 0) {
            wx.showToast({
              title: '不能删除',
              icon: 'none',
              duration: 2000
            })
            return;
          } else if (that.data.roomNames[indexo].noopsyche.length == 0) {
            that.data.roomNames.splice(indexo, 1);
            that.setData({
              roomNames: that.data.roomNames, //所有的智能设备
              hiddenmodalput: true,
              operating: 'hidden',

            })
            wx.setStorageSync("roomDatas", that.data.roomNames)
          }
        } else { //这里是点击了取消以后
          console.log('用户点击取消')
        }
      },
    })
  },

  roomnameInput: function (e) {
    //获取输入的值
    this.setData({
      rname: e.detail.value,
    })
    console.log(e)
    return;
  },
  //添加房间模式
  sumbitRoom: function (e) {
    let roomValue = this.data.rname //获取当前输入的值
    if (roomValue != 0 || roomValue != 0) {
      if (this.data.roomNames.length > 0) {
        for (var i in this.data.roomNames) {
          if (this.data.roomNames[i].name == roomValue) {
            wx.showToast({
              title: '名称不能重复',
              icon: 'none',
              duration: 2000
            })
            return;
          }
        }
      }
      wx.showToast({
        title: '添加房间成功',
        icon: 'success',
        duration: 2000
      })
      //获取本地缓存
      let roDatas = wx.getStorageSync("roomDatas");
      //存入数组对象 键值对
      roDatas.push({
        name: roomValue,
        flag: false,
        num: this.data.num,
        noopsyche: []
      })
      //设置本地缓存
      wx.setStorageSync("roomDatas", roDatas)

      //设置当前数组的值
      this.setData({
        roomNames: roDatas,
        id: this.data.roomNames.length + 1,
        name: this.data.rname,
        num: 0
      })


    } else {
      wx.showToast({
        title: '房间名称不能为空',
        icon: 'success',
        duration: 2000
      })
      return;
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //获取本地缓存房间
    let nameroom = wx.getStorageSync("roomDatas")
  
    this.setData({
      roomNames: nameroom
    })



    //获取本地智能设备信息
    let noopsycheDataList = wx.getStorageSync("noopsycheData");
    this.setData({
      noopsycheData: noopsycheDataList
    })

    // //循环所有智能设备信息
    // for (var i in this.data.roomNames) {
    //   //判断是否为相等
    //   if (this.data.roomNames[i].num == this.data.num) {
    //     //当前的哪个设备中+ 当前的智能设备的长度 -1 
    //     this.data.roomNames[i].num = this.data.roomNames[i].num + this.data.noopsycheData.length;
    //     console.log(this.data.roomNames[i].num + "   this.data.roomNames[i].num   ")
    //   }
    // }
    // this.setData({
    //   roomNames: nameroom
    // })

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
    // var roomDatas  = wx.getStorageSync("roomDatas");

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

  }
})