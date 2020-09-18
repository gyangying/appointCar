const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[
      {
        "img": "../../image/1-2.png"
      },
      {
        "img": "../../image/2-2.png"
      },
      {
        "img": "../../image/3-2.png"
      }
    ], //轮播图
    head: '../../image/login.png', //头像
    name: '11',
    sex: '1',
    year: 2,
    work: '555',
    num: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  phone () {
    wx.makePhoneCall({
      phoneNumber: 'phoneNumber',
    })
  },
})