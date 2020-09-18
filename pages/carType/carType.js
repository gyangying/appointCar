const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    i: 0, // 选种车型索引
    s: [],
    carNum: [
      {
        "id": 0,
        "name": "经济型",
        "img": "../../image/1-1.png",
        "price": "￥80"
      },
      {
        "id": 0,
        "name": "舒适型",
        "img": "../../image/1-1.png",
        "price": "￥80"
      },
    ], // 车的大小

    type: [
      {
        "id": 0,
        "name": "经济型"     
      },
      {
        "id": 1,
        "name": "舒适型"
      },
      {
        "id": 2,
        "name": "商务型"
      },
      {
        "id": 3,
        "name": "豪华型"
      },
      {
        "id": 4,
        "name": "巴士"
      }
    ], // 车型
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api._post("",{
      "": this.data.i
    }).then(res => {

    })
  },
  // 切换右边栏
  turnRight (e) {
    let i = e.currentTarget.dataset.idx
    this.setData({
      i: i
    })
    
  },
  explain () {
    wx.navigateTo({
      url: '/pages/carSpace/carSpace',
    })
  }
  
})