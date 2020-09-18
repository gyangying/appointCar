const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: '',
    nickName: '',
    bindName: '',
    star: 0, //星级数量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  
  onShow: function () {

  },

  goInvite () {
    wx.navigateTo({
      url: '/pages/invite/invite',
    })
  },
  goWallet () {
    wx.navigateTo({
      url: '/pages/wallet/wallet',
    })
  },
  goCuoupon () {
    wx.navigateTo({
      url: '/pages/couponList/couponList',
    })
  },
  goCredit () {
    wx.navigateTo({
      url: '/pages/credit/credit',
    })
  },
  goBank () {
    wx.navigateTo({
      url: '/pages/bankCard/bankCard',
    })
  },
  goExchange () {
    wx.navigateTo({
      url: '/pages/drawBill/drawBill',
    })
  },
  goAuth () {
    wx.navigateTo({
      url: '/pages/myResult/myResult',
    })
  },
  goStar () {
    wx.navigateTo({
      url: '/pages/star/star',
    })
  },
  goSuggestion () {
    wx.navigateTo({
      url: '/pages/suggestion/suggestion',
    })
  },
  goService () {
    wx.navigateTo({
      url: '/pages/service/service',
    })
  },
  
})