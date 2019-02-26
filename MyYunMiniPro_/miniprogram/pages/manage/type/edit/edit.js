Page({
     data: {
     },
     selectChange:function(e){
          var val = e.detail.value;
          this.setData({
               type: val
          });
     },
     setName: function (e) {
          var val = e.detail.value;
          this.data.getName = e.detail.value;
          this.setData({
               name: val
          });
     },

     update(e){
          const db = wx.cloud.database()
          const types = db.collection('types')
          types.doc(this.data.id).update({
               data: {
                    name: this.data.getName,
               },
               success(res) {
                    wx.showToast({
                         title: '更新成功',
                         duration: 500
                    })
                    setTimeout(function () {
                         wx.navigateBack();
                    }, 500)
               }
          })
     },
     delete(e){
          const db = wx.cloud.database()
          const types = db.collection('types')
          types.doc(this.data.id).update({
               data: {
                    del: 1
               },
               success(res) {
                    wx.showToast({
                         title: '删除成功',
                         duration: 500
                    })
                    setTimeout(function () {
                         wx.navigateBack();
                    }, 500)
               }
          })
     },
     onLoad: function (options) {
          var that = this;
          that.setData({
               id: options.id
          })
          const db = wx.cloud.database()
          const types = db.collection('types')
          types.where({
               _id: options.id // 填入当前用户 openid
               ,del: 0
          }).get({
               success(res) {
                    console.log(res.data);
                    that.setData({
                         //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
                  
                         name: res.data[0].name,
                    });
               }
          })
     }
})


