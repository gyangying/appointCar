const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0, //选中标签
    integral: '', //积分
    intergralList: [], //积分列表
    rest: '', //预留余额
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onShow: function () {

  },

  exchangeRecord () {
    wx.navigateTo({
      url: '/pages/exchange/exchange',
    })
  },
  exchange () {

  },
  onChange (e) {
    // console.log(e)
    var i = e.detail.name
  },
  buyRecord () {

  }

})