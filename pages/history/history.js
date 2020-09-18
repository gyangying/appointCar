const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [], // 发票历史清单
    date: '', //发票日期
    money: '',
    status: '1', // 发票状态
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api._post("",{}).then(res => {
      this.setData({

      })
    })
  },
  // 重发发票
  again (e) {
    api._post("",{

    }).then(res => {
      // if() {
      //   wx.showToast({
      //     title: '成功',
      //     duration: 2000
      //   })
      // }
    })
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