Page({
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
  },
  onLoad() {
    wx.setNavigationBarColor({
      backgroundColor: '#eeeeee',
      frontColor: '#000000',
    })
}
})