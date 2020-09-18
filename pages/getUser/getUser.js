// pages/getuser/getuser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  authorization (e) {
    console.log('授权信息', e)
    var userInfo = e.detail.userInfo
    wx.getUserInfo({
      success: (res) => {
        
      },
      complete: (res) => {
        wx.switchTab({
          url: '/pages/index/index',
        })
      }
    })
  },
})