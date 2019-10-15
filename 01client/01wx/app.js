//app.js
App({
  onLaunch: function () {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        //计算屏幕的高度
        let height = (750 / res.windowWidth) * res.windowHeight;
        that.globalData.windowHeight = height;
      },
    })
  },
  globalData: {
    windowHeight: ''
  }
})