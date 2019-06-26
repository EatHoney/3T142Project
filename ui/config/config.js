var light = [{
    1: "玄关灯",
    "state": {
      "1": "开",
      "2": "关"
    },
    "timing": {
      "1": "开启时间",
      "2": "关闭时间"
    },
    "repetition": {
      "1": "一",
      "2": "二",
      "3": "三",
      "4": "四",
      "5": "五",
      "6": "六",
      "7": "日"
    }
  },
  {
    2: "客厅灯",
    "state": {
      "1": "开",
      "2": "关"
    },
    "timing": {
      "1": "开启时间",
      "2": "关闭时间"
    },
    "repetition": {
      "1": "一",
      "2": "二",
      "3": "三",
      "4": "四",
      "5": "五",
      "6": "六",
      "7": "日"
    }
  },
  {
    3: "厨房灯",
    "state": {
      "1": "开",
      "2": "关"
    },
    "timing": {
      "1": "开启时间",
      "2": "关闭时间"
    },
    "repetition": {
      "1": "一",
      "2": "二",
      "3": "三",
      "4": "四",
      "5": "五",
      "6": "六",
      "7": "日"
    }
  },
  {
    4: "厕所灯",
    "state": {
      "1": "开",
      "2": "关"
    },
    "timing": {
      "1": "开启时间",
      "2": "关闭时间"
    },
    "repetition": {
      "1": "一",
      "2": "二",
      "3": "三",
      "4": "四",
      "5": "五",
      "6": "六",
      "7": "日"
    }
  },
  {
    5: "排气扇",
    "state": {
      "1": "开",
      "2": "关"
    }
  },
]

//安防网关
var gateway = [{
    1: "外出布防"
  },
  {
    2: "留守布防"
  },
  {
    3: "撤防"
  },
  {
    4: "添加警号"
  },
  {
    5: "设置"
  },
  {
    6: {
      state: ["在线", "离线", "故障", "维修"]
    }
  }
]

//客厅插座
var outlet = [{
    1: {
      wendu: "35℃",
      state: ["正常", "过热", "过低", "故障"]
    }
  }, //插座温度：  温度 ，状态： 正常 、过低、 过热
  {
    2: {
      outEnd: ["开", "关"]
    }
  }, //插座开关 ：开 、关
  {
    3: {
      electricity: ["开", "关", "记忆"]
    }
  }, //默认上电 ：开 、关 、记忆
  {
    4: {
      upper: [25, 120]
    }
  } //温度上限  最小值：25 最大值：120
  ,
  {
    5: {
      luminance: [0, 100]
    }
  } //indicator  指示灯亮度 
]


/** 
 * 智尊物联有相关信息 
 */

var roomDatas = [{
  name: "体验馆",
  flag: false,
  num: 0,
  noopsyche: [{
      id: 1,
      name: "安防网关-530",
      on_offs: true,
      src: "/img/房间与常用/anquan.png ",
      status: ["在线", "开", "关", "故障", "离线", "维修"],
      on_off: false,
      urlname: "/pages/room/gateway/gateway"
    },
    {
      name: "客厅插座",
      on_offs: true,
      src: "/img/房间与常用/chazuo.png",
      status: ["在线", "开", "关", "故障", "离线", "维修"],
      on_off: false,
      urlname: "/pages/room/roomSocket/roomSocket"
    },
    {
      name: "水浸报警器",
      on_offs: false,
      src: "/img/房间与常用/drop-copy.png",
      status: ["在线", "开", "关", "故障", "离线", "维修"],
      on_off: false,
      urlname: "/pages/room/water_out/water_out"
    }, {
      name: "门磁报警器",
      on_offs: false,
      src: "/img/房间与常用/mencibaojingqi.png ",
      status: ["在线", "开", "关", "故障", "离线", "维修"],
      on_off: false,
      urlname: ""
    },
    {
      name: "智能球泡",
      src: "/img/房间与常用/xingzhuang(RBG).png",
      status: ["在线", "开", "关", "故障", "离线", "维修"],
      on_off: false,
      urlname: "InfraredAlarm/smartBulb/smartBulb"
    }
  ]
}]

var setingTimes = [{
  time: "14:00",
  onoff: "开",
  week: "三"
}]
var weeks = [{
    week: "一",
    flag: false
  },
  {
    week: "二",
    flag: false
  },
  {
    week: "三",
    flag: true
  },
  {
    week: "四",
    flag: false
  },
  {
    week: "五",
    flag: false
  },
  {
    week: "六",
    flag: false
  },
  {
    week: "日",
    flag: false
  }
]
module.exports = {
  light: light,
  gateway: gateway,
  outlet: outlet,
  roomDatas: roomDatas,
  setingTimes: setingTimes,
  weeks: weeks
}
