Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        list_tool: [
          {
            color: "#fff",
            img: "../../../img/情景模式/-/d.png",
            name: "回家模式"
          }
        ]
      },
      {
        list_tool: [
          {
            color: "#fff",
            img: "../../../img/情景模式/-/d.png",
            name: "离家模式"
          }
        ]
      },
      {
        list_tool: [
          {
            color: "#fff",
            img: "../../../img/情景模式/-/dianying.png",
            name: "电影模式"
          }
        ]
      },
      {
        list_tool: [
          {
            color: "#fff",
            img: "../../../img/情景模式/-/yuedu.png",
            name: "阅读模式"
          }
        ]
      },
      {
        list_tool: [
          {
            color: "#fff",
            img: "../../../img/情景模式/-/paidui.png",
            name: "派对模式"
          }
        ]
      },
      {
        list_tool: [
          {
            color: "#fff",
            img: "../../../img/情景模式/-/yinle.png",
            name: "音乐模式"
          }
        ]
      },
      {
        list_tool: [
          {
            color: "#fff",
            img: "../../../img/情景模式/-/qingjie.png",
            name: "打扫模式"
          }
        ]
      },
      {
        list_tool: [
          {
            color: "#fff",
            img: "../../../img/情景模式/-/jiaoliu.png",
            name: "交流模式"
          }
        ]
      },
      {
        list_tool: [
          {
            color: "#fff",
            img: "../../../img/情景模式/-/icon-test.png",
            name: "聚餐模式"
          }
        ]
      },
      {
        list_tool: [
          {
            color: "#fff",
            img: "../../../img/情景模式/-/huazhuangpin.png",
            name: "女生模式"
          }
        ]
      },
      {
        list_tool: [
          {
            color: "#fff",
            img: "../../../img/情景模式/-/d.png",
            name: "离家模式-静"
          }
        ]
      },
      {
        list_tool: [
          {
            color: "#fff",
            img: "../../../img/情景模式/-/yundong.png",
            name: "运动模式"
          }
        ]
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },
  onPullDownRefresh: function () {

    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载

    setTimeout(function () {

      // complete

      wx.hideNavigationBarLoading() //完成停止加载

      wx.stopPullDownRefresh() //停止下拉刷新

    }, 1500);

  },
})