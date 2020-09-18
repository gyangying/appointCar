const api = require('../../utils/util')
import wxParse from '../../wxParse/wxParse'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    content: '',
    date: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // api._post("",{}).then(res => {
    //   this.setData({
    //     title: res.data.title,
    //     date: res.data.date
    //   })
    //   var cc = res.data.content
    //   wxParse.wxParse("content","html",cc,that)
    // })
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

  }
})