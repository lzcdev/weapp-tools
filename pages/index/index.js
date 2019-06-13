Page({
  data: {
    motto: 'Hello World',
    toolList: [{
      id: 0,
      title: '手机归属地',
      imgUrl: '../../images/phone.png'
    }, {
      id: 1,
      title: 'IP地址',
      imgUrl: '../../images/ip.png'
    }]
  },
  onLoad: function() {

  },
  goDetail(e) {
    const id = e.currentTarget.dataset.id
    switch (id) {
      case 0:
        wx.navigateTo({
          url: '../phoneaddress/phoneaddress',
        })
        break;
      case 1:
        wx.navigateTo({
          url: '../ipsearch/ipsearch',
        })
        break;
      case 2:
        break;
      default:
        break
    }
  }
})