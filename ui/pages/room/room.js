const app = getApp()
const api = require("../../config/config.js")

var interval = "";  //周期执行函数的对象
var time = 0;   //滑动时间
var touchDot = 0; //触摸时的原点
var flag_hd = true; //判定是否可以滑动

let animationShowHeight = 200; //动画偏移高度

Page({

  /** 
   * 页面的初始数据 
   */
  data: {
    onoff: 1,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    equipmentObj: [{}],

    // 遮罩层变量
    animationData: "",
    showModalStatus: false,
    imageHeight: 0,
    imageWidth: 0,
    operating: 'hidden',
    hiddenmodalput: true,
    chongname: "",
    // 触摸开始时间
    touchStartTime: 0,
    // 触摸结束时间
    touchEndTime: 0,
    // 最后一次单击事件点击发生时间
    lastTapTime: 0,
    // 单击事件点击后要触发的函数
    lastTapTimeoutFunc: null,



    equipmentObj: [{}]

  },

  addRoom: function (param) {
    wx.showActionSheet({
      itemList: ['添加房间'],
      success(res) {
        wx.navigateTo({
          url: "/pages/room/addRoom/addRoom"
        })
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  /** 
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (options) {
    wx.request({
      url: "http://www.fangzhizun.com/device/Interface/AccountNumberAllDevice?co="+"hz&details="+"0",
      header: {
        'content-type': 'application/json' // 默认值
      },
      method:"POST",
      success:function(data) {
          console.log(data);
      }
    })
    //当前的设备下标
    wx.setStorageSync("currentTab", this.data.currentTab)

    console.log(this.data.currentTab + "   下摆你")

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
    wx.showModal({
      title: '授权用户信息',
      content: '您需要先授权用户信息',
      success(res) {
        if (res.confirm) {
          // getUserInfo: e.detail.getUserInfo 
          console.log('用户点击确定')
          /**  
           * 获取系统信息  
           */
          wx.getSystemInfo({
            success: function (res) {
              that.setData({
                winWidth: res.windowWidth,
                winHeight: res.windowHeight
              });
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回 
      // 所以此处加入 callback 以防止这种情况 
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理 
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**  
   * 滑动切换tab  
   */
  bindChange: function (e) {
    var roomDatas = wx.getStorageSync("roomDatas")
    console.log(e);
    console.log(e.detail.current);
    this.setData({
      currentTab: e.detail.current,
      noopsycheData: roomDatas[e.detail.current].noopsyche //所有的智能设备 
    })
    wx.setStorageSync("currentTab", this.data.currentTab)
  },
  /**  
   * 点击tab切换  
   */
  swichNav: function (e) {
    var that = this;
    console.log(e.target.dataset.current + "  tab  ")
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      var roomDatas = wx.getStorageSync("roomDatas");
      console.log(roomDatas[e.target.dataset.current].noopsyche)
      this.setData({
        currentTab: e.target.dataset.current,  //下标
        noopsycheData: roomDatas[e.target.dataset.current].noopsyche //所有的智能设备 
      })
    }
    wx.setStorageSync("currentTab", this.data.currentTab)
    console.log(this.data.currentTab + "   currentTab   ")
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  longtapRoom: function (e) {
    //创建一个动画实例animation。调用实例的方法来描述动画。
    var animation = wx.createAnimation({
      duration: 500, //动画持续时间500ms
      timingFunction: "ease", //动画以低速开始，然后加快，在结束前变慢
      delay: 0 //动画延迟时间0ms
    })
    this.animation = animation
    //调用动画操作方法后要调用 step() 来表示一组动画完成
    animation.translateY(animationShowHeight).step()    //在Y轴向上偏移300
    this.setData({
      //通过动画实例的export方法导出动画数据传递给组件的animation属性。
      animationData: animation.export(),
      showModalStatus: true //显示遮罩层
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1)
    console.log(e);
    this.setData({
      operating: 'show',
      device_name: e.currentTarget.dataset.title,
      rename_index: e.currentTarget.id,
      itemsrc: e.currentTarget.dataset.img,
      btnOff: e.currentTarget.dataset.btnOff,
      onOff: this.data.noopsycheData[e.target.id].on_off,
    })
    //设置本地的缓存区  名称和下标
    wx.setStorageSync("renameNameCD", this.data.device_name)
    wx.setStorageSync("renameIndexCD", this.data.rename_index)
    wx.setStorageSync("itemsrcCD", this.data.itemsrc)
    wx.setStorageSync("operatingCD", this.data.operating)
    console.log(this.data.currentTab);
    wx.setStorageSync("currentTab", this.data.currentTab)
    //wx.setStorageSync("HideMoedlCD", this.hideModal())
    wx.setStorageSync("btnOffCD", this.data.btnOff)
    wx.setStorageSync("onOffCD", this.data.onOff)
    console.log(e.currentTarget.dataset.btnOff + "  e.currentTarget.id b")
    console.log(this.data.noopsycheData[e.target.id].on_off + "  e.currentTarget.id b")
  },

  // 隐藏遮罩层  
  hideModal: function () {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease",
      delay: 0
    })
    this.animation = animation;
    animation.translateY(animationShowHeight).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 100)

  },

  //菜单取消
  cancel: function (e) {
    let that = this;
    that.hideModal();
    // this.setData({
    //   operating: 'hidden'
    // })
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
  /// 按钮触摸开始触发的事件
  touchStart: function (e) {
    this.touchStartTime = e.timeStamp
  },

  /// 按钮触摸结束触发的事件
  touchEnd: function (e) {
    this.touchEndTime = e.timeStamp
  },
  /**
   * 判断事件的发生
   * 
   */
  multipleTap: function (e) {
    var that = this
    // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
    if (that.touchEndTime - that.touchStartTime < 350) {
      // 当前点击的时间
      var currentTime = e.timeStamp
      var lastTapTime = that.lastTapTime
      // 更新最后一次点击时间
      that.lastTapTime = currentTime
      console.log('执行单击');
      //保留本页面，跳转到另一个页面
      console.log(e.currentTarget.dataset.title)
      wx.clearStorageSync('title')
      wx.setStorageSync("title", e.currentTarget.dataset.title)
      wx.navigateTo({
        //传    url+值
        url: '../../communal/light/index1/index1'
      })
    }

  },
  /**
   * 重命名
   */
  rename: function (ew) {
    this.setData({
      hiddenmodalput: false,
    })
  },
  //弹窗确认
  confirm: function (rss) {
    api.roomDatas[0].noopsyche[this.data.rename_index].name = this.data.chongname;
    this.setData({
      noopsycheData: api.roomDatas[0].noopsyche,   //所有的智能设备
      hiddenmodalput: true,
      operating: 'hidden',
    })
    this.hideModal();
  },
  //移动位置
  moveRoom: function (data) {

    wx.navigateTo({
      url: "gateway/details/replace/replace"
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  //移除设备
  showDialogBtn: function (e) {
    var t = this;
    wx.showModal({
      title: '提示',
      content: '是否从常用中移除该设备？',
      showCancel: true,
      success: function (res) {
        if (res.confirm) { //这里是点击了确定以后
          api.roomDatas[0].noopsyche.splice(t.data.rename_index, 1);
          t.setData({
            noopsycheData: api.roomDatas[0].noopsyche, //所有的智能设备
            hiddenmodalput: true,
            operating: 'hidden'
          })
          console.log(t.data.noopsycheData)
        } else { //这里是点击了取消以后
          console.log('用户点击取消')
        }
      },
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
    //当前的设备下标
    wx.setStorageSync("currentTab", this.data.currentTab)
    console.log(this.data.currentTab + "   下摆你")
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
    this.setData({
      roomDatas: wx.getStorageSync("roomDatas")
    })
    this.setData({
      noopsycheData: api.roomDatas[0].noopsyche //所有的智能设备 
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



  commBtn: function (e) {
    console.log(e.target.dataset.index);
    var index = e.target.dataset.index;
    var name = this.data.noopsycheData[index].urlname;
    console.log(name);
    wx.navigateTo({
      url: name, //得到url 传递页面
    })
  },

  onoff: function (a) {
    var thisId = a.target.id; //当前的id 
    console.log(a)
    if (this.data.noopsycheData[thisId].on_off) {
      this.data.noopsycheData[thisId].on_off = false;
    } else {
      this.data.noopsycheData[thisId].on_off = true;
    }
    this.setData({
      noopsycheData: this.data.noopsycheData
    })
  }
})