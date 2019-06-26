// pages/addscene/addscene.js 
Page({
  /** 
   * 页面的初始数据 
   */
  data: {
    onOff: true,
    array: [{
      src: "/img/情景模式/-/yundong.png",
      mode: "运动模式",

    },
    {
      src: "/img/情景模式/-/d.png",
      mode: "开门模式",

    },
    {
      src: "/img/情景模式/-/lijiamoshi.png",
      mode: "关门模式",

    },
    {
      src: "/img/情景模式/-/dianying.png",
      mode: "电影模式",

    },
    {
      src: "/img/情景模式/-/shuimian.png",
      mode: "睡眠模式",

    },
    {
      src: "/img/情景模式/-/yinle.png",
      mode: "音乐模式",

    },
    {
      src: "/img/情景模式/-/huazhuangpin.png",
      mode: "化妆模式",

    },
    {
      src: "/img/情景模式/-/icon-test.png",
      mode: "聚餐模式",

    },
    {
      src: "/img/情景模式/-/jiaoliu.png",
      mode: "交流模式",

    },
    {
      src: "/img/情景模式/-/paidui.png",
      mode: "派对模式",

    },
    {
      src: "/img/情景模式/-/qingjie.png",
      mode: "打扫模式",

    },
    {
      src: "/img/情景模式/-/yuedu.png",
      mode: "阅读模式",

    }
    ]

  },

  addScene: function (e) {
    
    //拿到情景页面所有情景
    var array = wx.getStorageSync('array');
    let that = this
    //当前触摸的情景对象
    var obj = ''
    if (that.data.mode == '' || that.data.mode == undefined || that.data.flag == undefined || !that.data.flag) {
      obj = that.data.array[parseInt(e.currentTarget.dataset.index)];
      that.setData({
        imgaeObj: obj,
        mode: obj.mode
      })
    }

    //显示模态框
    wx.showModal({
      title: '提示',
      content: '您将添加' + that.data.mode,
      success: function (res) {
        //点击确定
        if (res.confirm) {
          //循环数组
          for (var i = 0; i < array.length; i++) {
            //如果有相同的，提示并return
            if (array[i].mode == obj.mode) {
              wx.showToast({
                title: '该情景模式已存在',
                icon: 'loading',
                duration: 900,
                mask: true
              })
              return
            }
          }
          //拿到标识是修改
          var isUpdate = wx.getStorageSync('isUpdate')
          //拿到模式名称
          var name = wx.getStorageSync('updateBeforeName')
          if (isUpdate) {
            for (var i = 0; i < array.length; i++) {
              if (array[i].mode == name) {
                array.splice(i, 1);
                //重置缓存状态
                wx.clearStorageSync('isUpdate')
                //把数据传回上一个页面
                wx.setStorageSync('scene', obj)
                break;
              }
            }
          }

          //不相同就往数组里面添加
          array.push(obj)
          //设置本地缓存
          wx.setStorageSync('array', array);

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
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (options) {
    //设置标题
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('title'),
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

})