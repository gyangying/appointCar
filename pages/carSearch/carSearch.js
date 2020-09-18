const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carVal: '', //车牌号
    yanVal: '', //验证码
    currentId: '', //当前按钮id
    pic: '', //验证码
    btn: [
      {
        id: 0,
        name: '红'
      },
      {
        id: 1,
        name: '黄'
      },
      {
        id: 2,
        name: '绿'
      },
      {
        id: 3,
        name: '蓝'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 车牌号
  inputCar (e) {
    // console.log(e)
    this.setData({
      carVal: e.detail.value
    })
    // console.log('车牌号',this.data.carVal)
  },
  inputYan (e) {
    // console.log(e)
    this.setData({
      yanVal: e.detail.value
    })
    // console.log('验证码',this.data.yanVal)
  },
  btnClick (e) {
    var i = e.currentTarget.dataset.id
    // console.log(i)
    this.setData({
      currentId: i
    })
  },
  
})