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

     add(e){
          wx.showToast({
               title: 'loading',
               icon: 'loading',
               duration: 30000
          })
          // console.log(this.data)
          const db = wx.cloud.database()
          const variety = db.collection('variety')
          variety.add({
               // data 字段表示需新增的 JSON 数据
               data: {
                    name: this.data.getName,
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


