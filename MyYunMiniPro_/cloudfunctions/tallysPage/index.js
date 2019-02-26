// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();

// 云函数入口函数
exports.main = async(event, context) => {
     const wxContext = cloud.getWXContext()
     var tableName = 'tallys';
     var filter = event.filter ? event.filter : [{
          del: 0
     }];
     var pageIndex = event.pageIndex ? event.pageIndex : 1;
     var pageSize = event.pageSize ? event.pageSize : 15;
     var searchKeyword = '.*' + event.searchKeyword + '.*';
     const countResult = await db.collection(tableName).where({
          del: 0,
          _openid: wxContext.OPENID,
          digest: {
               $regex: searchKeyword
          }
     }).count();
     const total = countResult.total;
     const totalPage = Math.ceil(total / pageSize);

     var hasMore;
     if (pageIndex > totalPage || pageIndex == totalPage) {
          hasMore = false;
     } else {
          hasMore = true;
     }
     const result = db.collection(tableName).where({
          del: 0,
          _openid: wxContext.OPENID,
          digest: {
               $regex: searchKeyword
          }
     }).orderBy('date', 'desc').orderBy('time', 'desc').skip((pageIndex - 1) * pageSize).limit(pageSize).get().then(res => {
          res.hasMore = hasMore;
          return res;
     });
     return result;
}