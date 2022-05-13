import Mock from 'mockjs';

Mock.mock('/api/setting','get',{
    code: 0,
    msg: "",
    data: {
      avatar: "https://img1.baidu.com/it/u=843934137,285845274&fm=253&fmt=auto&app=138&f=JPEG?w=435&h=290",
      siteTitle: "中野子豪",
      github: "https://github.com/DuYi-Edu",
      qq: "2384636535",
      qqQrCode:
        "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
      weixin: "QY085858",
      weixinQrCode:
        "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
      mail: "lqy085858@gmail.com",
      icp: "皖ICP备17001719号",
      githubName: "Zhang-Yang",
      favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    },

})