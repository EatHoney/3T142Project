
const api = require("../../config/config.js")
var interval = ""; //周期执行函数的对象
var time = 0; //滑动时间
var touchDot = 0; //触摸时的原点
var flag_hd = true; //判定是否可以滑动

let animationShowHeight = 300; //动画偏移高度

Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    title: options.title;

    this.setData({
      noopsycheData: api.roomDatas[0].noopsyche //所有的智能设备 
    })


  },

  //长按显示菜单
  longTap: function (e) {
    //创建一个动画实例animation。调用实例的方法来描述动画。
    var animation = wx.createAnimation({
      duration: 500, //动画持续时间500ms
      timingFunction: "ease", //动画以低速开始，然后加快，在结束前变慢
      delay: 0 //动画延迟时间0ms
    })
    this.animation = animation
    //调用动画操作方法后要调用 step() 来表示一组动画完成
    animation.translateY(animationShowHeight).step() //     在Y轴向上偏移300
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
      rename_index: e.currentTarget.id
    })
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
      noopsycheData: api.roomDatas[0].noopsyche, //所有的智能设备
      hiddenmodalput: true,
      operating: 'hidden'
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
  commBtn: function (e) {
    // const number = event.target.id;//1或者2得到点击了按钮1或者按钮2
    console.log(e);
    wx.navigateTo({
      url: '/pages/room/InfraredAlarm/InfraredAlarm', //得到url 传递页面
    })
  },
})