//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    page: '用户管理',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
     // url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onHide(){
       this.setData({
            dataList: []
       });
  },
  onShow(){
       var _this = this
       const db = wx.cloud.database()
       const tallys = db.collection('tallys')
       tallys.where({
            del: 0,// 填入当前用户 openid
            noticeDate: util.formatDate(new Date()),//日期
            switchChecked:true
       }).get({
            success(res) {
                 _this.setData({
                      dataList: res.data
                 });
            }
       })
  },
     jump2Detail: function (e) {
          wx.navigateTo({
               url: '../record/record?id=' + e.currentTarget.dataset.id,
          })
     }
})
