Page({
     data: {
         type:"1"
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
     setPhone: function (e) {
          var val = e.detail.value;
          this.data.getPhone = e.detail.value;
          this.setData({
               phone: val
          });
     },
     update(e){
          const db = wx.cloud.database()
          const customer = db.collection('customer')
          customer.doc(this.data.id).update({
               data: {
                    type: this.data.type,
                    name: this.data.getName,
                    phone: this.data.getPhone,
                    del: 0
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
          const customer = db.collection('customer')
          customer.doc(this.data.id).update({
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
          const customer = db.collection('customer')
          customer.where({
               _id: options.id // 填入当前用户 openid
               ,del: 0
          }).get({
               success(res) {
                    console.log(res.data);
                    that.setData({
                         //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
                         type: res.data[0].type,
                         name: res.data[0].name,
                         phone: res.data[0].phone,
                    });
               }
          })
     }
})


