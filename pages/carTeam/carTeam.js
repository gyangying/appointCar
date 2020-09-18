const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: '', 
    inputShowed: false, //输入框聚焦
    carInfo: [], //车队信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api._post("",{}).then(res => {
      
    })
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
    // getList(this);
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
    // getList(this);
  },
  inputTyping: function (e) {
    //搜索数据
    // getList(this, e.detail.value);
    this.setData({
      inputVal: e.detail.value
    });
  }
})