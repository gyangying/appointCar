// components/111.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    openType: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGetInfo (e) {
      // console.log('1111',e)
      this.triggerEvent('getuserinfo', e.detail,{})
    }
  }
})
