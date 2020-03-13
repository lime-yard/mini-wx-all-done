const ENV_ID = false ? 'prod-1ectr' : 'daily-g8h4o';
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
          env: ENV_ID,
        traceUser: true,
      })
    }
  }
})
