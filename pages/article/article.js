const api = require('../../utils/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    share_url: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const story = JSON.parse(decodeURIComponent(options.story))
    console.log(story)
    var params = {}
    const url = `https://zhihu-daily.leanapp.cn/api/v1/contents/${story.id}`
    api.get(url, params).then(res => {
      console.log(res)
     this.setData({
       share_url: res.CONTENTS.share_url
     })
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