// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext();

  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      textStyle: {
        fontSize: 12
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'value'
    }],
    legend: {
      data: [],
      textStyle: {
        fontSize: 14
      }
    },
    yAxis: [{
      type: 'category',
      axisTick: {
        show: false
      },
      data: ['所有']
    }],
    series: []
  };

  const tallys = db.collection('tallys');
  const variety = db.collection('types'); //品种

  return variety.where({
    del: 0,
    _openid: wxContext.OPENID
  }).get().then(vRes => {
    var vaNameMap = {}; //id 品种名称对象
    for (const i in vRes.data) {
      vaNameMap[vRes.data[i]._id] = vRes.data[i].name;
    }
    // 查账
    return tallys.where({
      del: 0,
      _openid: wxContext.OPENID
    }).orderBy('date', 'asc').get().then(tallyRes => {
      var tallyData = tallyRes.data;
      var vIdList_t1 = new Array();
      var vIdList_t2 = new Array();
      var itemList_t1 = new Array();
      var itemList_t2 = new Array();
      var preSubDesc_t1 = new Array(); // 分类
      var preSubDesc_t2 = new Array();

      var dateList = new Array();

      //月份 区分就ok
      for (const x in tallyData) {
        var month = (tallyData[x].date + '').substring(0, 7);
        var monthIndex = dateList.indexOf(month);
        if (monthIndex < 0) { //月份不存在
          var monthNextIndex = dateList.length;
          dateList[monthNextIndex] = month;
          monthIndex = monthNextIndex;
        } else { //月份存在
        }

        if (tallyData[x].type == 1) { // type = 1 类记账
          var itemVId = tallyData[x].varietyId;
          var vIdIndex = vIdList_t1.indexOf(itemVId); // 当前品种所在下标
          if (vIdIndex < 0) { // 不存在
            var nextIdex = vIdList_t1.length;
            vIdList_t1[nextIdex] = itemVId;
            var rvName = vaNameMap[itemVId] == undefined ? '其他' : vaNameMap[itemVId]
            preSubDesc_t1[nextIdex] = '购买' + rvName;
            vIdIndex = nextIdex;
            var item = {
              name: '购买' + rvName,
              type: 'bar',
              stack: itemVId,
              label: {
                normal: {
                  show: true,
                  position: 'left',
                  distance: 3
                }
              },
              data: []
            }
            item.data[monthIndex] = -Number(tallyData[x].ledger);
            itemList_t1[vIdIndex] = item;
          } else { // 存在
            var beforeData = itemList_t1[vIdIndex].data[monthIndex];
            beforeData = beforeData == undefined ? 0 : beforeData;
            itemList_t1[vIdIndex].data[monthIndex] = Number(beforeData) - Number(tallyData[x].ledger);
          }
        } else { // type = 2
          var itemVId = tallyData[x].varietyId;
          var vIdIndex = vIdList_t2.indexOf(itemVId); // 当前品种所在下标
          if (vIdIndex < 0) { // 不存在
            var nextIdex = vIdList_t2.length;
            vIdList_t2[nextIdex] = itemVId;
            var rvName = vaNameMap[itemVId] == undefined ? '其他' : vaNameMap[itemVId]
            preSubDesc_t2[nextIdex] = '卖出' + rvName;
            vIdIndex = nextIdex;
            var item = {
              name: '卖出' + rvName,
              type: 'bar',
              stack: itemVId,
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  distance:3
                }
              },
              data: []
            }
            item.data[monthIndex] = tallyData[x].ledger;
            itemList_t2[vIdIndex] = item;
          } else { // 存在
            var beforeData = itemList_t2[vIdIndex].data[monthIndex];
            beforeData = beforeData == undefined ? 0 : beforeData;
            itemList_t2[vIdIndex].data[monthIndex] = Number(beforeData) + Number(tallyData[x].ledger);
          }
        }
      }
      var nItemList = itemList_t1.concat(itemList_t2);
      var nPreSubDesc = preSubDesc_t1.concat(preSubDesc_t2);
      var vIdList = vIdList_t1.concat(vIdList_t2);
     

      for(const x in nItemList){
        var citemData = nItemList[x].data;
        for (var q = 0; q < vIdList.length; q++){
          nItemList[x].data[q] = citemData[q] == undefined ? 0 : citemData[q];  
        }
      }

      option.yAxis[0].data = dateList;
      option.series = nItemList;
      option.legend.data = nPreSubDesc;

      return option;
    })
  })
}