// pages/success/success.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: '/image/login.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  goIndex () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  seeDetails () {
    wx.switchTab({
      url: '/pages/order/order',
    })
  }
})