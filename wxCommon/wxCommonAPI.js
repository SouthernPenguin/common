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
      menus: ['shareAppMessage', 'shareTimeline'],
    });
  },
  /**
   * 设置标题
   */
  setNavigationBarTitle(title) {
    wx.setNavigationBarTitle({
      title,
    });
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
    });
  },
  /**
   * 弹窗隐藏
  */
  hideToast() {
    wx.hideToast();
  },
  /**
   * 微信支付
  */
  requestPayment(timeStamp, nonceStr, packageSub, signType, paySign) {
    return new Promise((resolve, reject) => {
      wx.requestPayment({
        timeStamp,
        nonceStr,
        package: packageSub,
        signType,
        paySign,
        success: (res) => {
          resolve(res);
        },
        fail(err) {
          reject(err);
        },
      });
    });
  },
};

export default wxCommonAPI;
