const commonFun = {
  /**
   * 校验手机号
   */
  chenkPhone(val) {
    var reg = /^((13[0-9])|(14[5-9])|(15([0-3]|[5-9]))|(16[6-7])|(17[1-8])|(18[0-9])|(19[1|3])|(19[5|6])|(19[8|9]))\d{8}$/;
    return reg.test(val);
  },
  /**
   * 校验邮箱
   */
  chenkEmail(val) {
    var reg = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/;
    return reg.test(val);
  },
  /**
   * 校验身份证（大陆，港，澳，台）
   */
  chenkIDcard(val) {
    var patternMainLand = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/, // 大陆
      patternHongkong = /^((\s?[A-Za-z])|([A-Za-z]{2}))\d{6}(\([0−9aA]\)|[0-9aA])$/, // 香港
      patternTaiwan = /^[a-zA-Z][0-9]{9}$/, // 台湾
      patternMacao = /^[1|5|7][0-9]{6}\([0-9Aa]\)/, // 澳门
      patternMainLandtest = patternMainLand.test(val),
      patternHongkongtest = patternHongkong.test(val),
      patternTaiwantest = patternTaiwan.test(val),
      patternMacaotest = patternMacao.test(val);
    return patternMainLandtest ||
      patternHongkongtest ||
      patternTaiwantest ||
      patternMacaotest
      ? true
      : false;
  },
};

export default commonFun;
