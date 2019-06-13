const api = require('../../utils/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    result: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  bindKeyInput:function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  search() {
    var params = {
      resource_name: 'guishudi',
      query: this.data.inputValue
    }
    api.get('https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php', params).then(res => {
      console.log(res)
      if (res.data.length != 0) {
        this.setData({
          result: res.data[0]
        })
      } else {
        wx.showModal({
          title: '查询失败',
          content: '请检查手机号是否输入正确',
        })
      }
    
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})