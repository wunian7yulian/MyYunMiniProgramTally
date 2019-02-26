Page({
     data: {
          dataList: []
     },
     add() {
          wx.navigateTo({
               url: '../add/add'
          })
     },
     onShow() {
          wx.showToast({
               title: '删除中...',
               icon: 'loading',
               duration: 30000
          })
          var _this = this
          const db = wx.cloud.database()
          const variety = db.collection('variety')
          variety.where({
               del: 0 // 填入当前用户 openid
          }).get({
               success(res) {
                    wx.hideToast();
                    _this.setData({
                         //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
                         dataList: res.data
                    });
               }
          })
     }
})