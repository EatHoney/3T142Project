Page({

  /**
   * 页面的初始数据
   */
  data: {
    equipmentObj: [{}],
    currentData: 0,
    disabled: true,
    caiSeDisabled: true,
    src:'/img/灯泡按钮/off.png',
    r: 0,
    g: 0,
    b: 0
  },
  changeing(e) {
    console.log(e.currentTarget.dataset)//标签设置的属性在这获取
    let color = e.currentTarget.dataset.color
    let value = e.detail.value;
    this.setData({
      [color]: value
    })

    console.log(this.data.r, this.data.g, this.data.b)
  }
,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      equipmentObj: wx.getStorageSync("equipmentObj")
    })

    //修改标题
    wx.setNavigationBarTitle({
      title: this.data.equipmentObj.name
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
  ,
  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  }
  ,
  /**
   * 触摸设备信息
   */
  deviceInformation: function () {

    if (this.data.equipmentObj.name == "智能球泡") {
      wx.navigateTo({
        url: 'deviceInformation/deviceInformation'
      })
    }

  }
,
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  }
,
  /**
   * 触摸白色
   */
  btnSwitch2:function(){
   
    if (this.data.disabled == false) {
      this.setData({
        disabled: true,
        src: '/img/灯泡按钮/off.png'
        
      })
      console.log(this.data.disabled + '白色关闭')

    } else {
      this.setData({
        disabled: false,
        src: '/img/灯泡按钮/on.png'
      })
      console.log(this.data.disabled + '白色打开')
    }
  }
  ,
  /**
   * 彩色
   */
  btnSwitch1:function(){
  
    if (this.data.caiSeDisabled == false) {
      this.setData({
        caiSeDisabled: true,
        src: '/img/灯泡按钮/off.png'
      })
      console.log(this.data.caiSeDisabled + '彩色关闭')

    } else {
      this.setData({
        caiSeDisabled: false,
        src: '/img/灯泡按钮/on.png'
      })
      console.log(this.data.caiSeDisabled + '彩色打开')
    }
  }
  

})