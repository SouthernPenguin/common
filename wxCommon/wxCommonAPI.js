/**
 * 微信常见AIP集合
 */
const wxCommonAPI = {
	/**
   * 分享朋友圈
  */
  showShareMenu() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  /**
   * 设置标题
  */
  setNavigationBarTitle(title) {
    wx.setNavigationBarTitle({
      title
    })
  },
  /**
   * 弹窗
  */
  showToast(title, icon = 'none', image = '', mask = false) {
    wx.showToast({
      title,
      icon,
      image,
      mask,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  }
}

export default wxCommonAPI