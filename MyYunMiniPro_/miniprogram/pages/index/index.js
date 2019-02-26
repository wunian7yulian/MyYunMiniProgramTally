Page({
     data: {

     },
     sell() {
          wx.navigateTo({
               url: '../record/record?type=2'
          })
     },
     purchase() {
          wx.navigateTo({
               url: '../record/record?type=1'
          })
     },
})


wx.cloud.callFunction({
          // 云函数名称
          name: 'add',
          // 传给云函数的参数
          data: {
               a: 1,
               b: 2,
          },
     }).then(res => {
          console.log("....................................") // 3
          console.log(res.result);
     })
     .catch(console.error)