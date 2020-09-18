
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    email: '',
    qq: '',
    wx: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api._post("", {}).then(res => {
      this.setData({
        email: res.data,
        phone: res.data,
        qq: res.data,
        wx: res.data,
      })
    })
  },

  
})