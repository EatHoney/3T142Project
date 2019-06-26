Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        list_tool: [
          {
            color:"#fff",
            img: "../../img/设置页面/saomiao1.png",
            name: "配置设备",
            url:"../setup/allocation/allocation"
          }
        ]
      },
      {
        list_tool: [
          {
            img: "../../img/设置页面/beifen.png",
            name: "备份SN码",
            url:"../setup/backups/backups"
          }
        ]
      },
      {
        list_tool: [
          {
            img: "../../img/设置页面/xinfeng.png",
            name: "修改信息",
            url: "../setup/information/information"
          },
          {
            img: "../../img/设置页面/denglu-icon.png",
            name:"设备管理密码",
            url: "../setup/authentication/authentication"
          }
        ]
      },
      {
        list_tool: [
          {
            img:"../../img/设置页面/8636f874.png",
            name: "常见问题",
            url: "../setup/problem/problem"
          },
          {
            img:"../../img/设置页面/i.png",
            name: "关于我们",
            url: "../setup/about/about"
          },
          {
            img:"../../img/设置页面/v.png",
            name:"版本号"
          }
        ]
      },
      {
        list_tool:[
          
        ]
      },
    ]
  },
  goPage: function (event) {
    console.log(event.currentTarget.dataset.log);
    wx.navigateTo({
      url: event.currentTarget.dataset.url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   // wx.showNavigationBarLoading();
  //   var that = this
  //   //调用应用实例的方法获取全局数据
  //   this.setData({
  //     userInfo: app.globalData.userInfo
  //   })
  // },

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
})