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
          this.data.getName = e.detail.value
          this.setData({
               name: val
          });
     },
     setPhone: function (e) {
          var val = e.detail.value;
          this.data.getPhone = e.detail.value
          this.setData({
               phone: val
          });
     },
     add(e){
          wx.showToast({
               title: 'loading',
               icon: 'loading',
               duration: 30000
          })
          // console.log(this.data)
          const db = wx.cloud.database()
          const customer = db.collection('customer')
          console.log( this.data.getName );
          customer.add({
               // data 字段表示需新增的 JSON 数据
               data: {
                    type: this.data.type,
                    name: this.data.getName,
                    phone: this.data.getPhone,
                    del:0
               },
               success(res) {
                    wx.hideToast()
                    wx.showToast({
                         title: '添加成功',
                         duration: 500
                    })   
                    setTimeout(function(){
                         wx.navigateBack();
                    },500)
               }
          })
     }
})


