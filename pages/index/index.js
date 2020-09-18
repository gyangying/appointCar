//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    pageNum: 1,
    banner:[
      {
        "img": "../../image/1-2.png"
      },
      {
        "img": "../../image/2-2.png"
      },
      {
        "img": "../../image/3-2.png"
      }
    ], //轮播图
    guideList: [
      {
        "img": "../../image/1-2.png"
      },
      {
        "img": "../../image/2-2.png"
      },
      {
        "img": "../../image/3-2.png"
      },
      {
        "img": "../../image/1-2.png"
      },
      {
        "img": "../../image/2-2.png"
      },
      {
        "img": "../../image/3-2.png"
      },
      {
        "img": "../../image/1-2.png"
      },
      {
        "img": "../../image/2-2.png"
      },
      {
        "img": "../../image/3-2.png"
      }
    ], //导游列表
  },
  
  onLoad: function () {
    
  },

  onReachBottom () {
    this.setData({
      pageNum: this.data.pageNum + 1
    })
  }
  
})
