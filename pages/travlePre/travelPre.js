const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: '', // 认证状态：0-未认证，1-成功，2-失败
    company: '',
    legal: '',
    social: '',
    IDC: '',
    phoneC: '',
    name: '',
    ID: '',
    phone: '',
    img: '../../image/login.png',
    iconS: '', //审核成功图标
    iconF: '', //审核失败图标
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  img() {
    var that = this
    wx.chooseImage({
      count: 1,
      complete: (res) => {
        console.log(res)
        this.setData({
          img: res.tempFilePaths[0]
        })
        wx.uploadFile({
          filePath: res.tempFilePaths[0],
          name: 'file',
          url: 'https://www.ydingh.com/erHuoApplet/upload/singleUpload',
          success(res) {
            console.log('成功',res)
            var data = JSON.parse(res.data)
            that.setData({
              img: data.data.visitPrefixUrlFull
            })
            wx.showToast({
              title: '上传成功',
              duration: 2000
            })
          },
          fail(err) {
            console.log('失败',err)           
          },
          complate(e) {
            console.log('完成',e)
          }
        })
      },
    })

  },
  submit() {
    api._post("", {

    }).then(res => {

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