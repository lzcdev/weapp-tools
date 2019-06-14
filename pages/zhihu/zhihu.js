const api = require('../../utils/api.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    stories: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var params = {}
    api.get('https://zhihu-daily.leanapp.cn/api/v1/last-stories', params).then(res => {
      console.log(res)
      this.setData({
        stories: res.STORIES.stories.concat(res.STORIES.top_stories)
      })
    })

  },
  goDetail(e) {

    const story = encodeURIComponent(JSON.stringify(e.currentTarget.dataset.story))
    wx.navigateTo({
      url: `../article/article?story=${story}`,
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