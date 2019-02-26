var util = require('../../utils/util.js');

Page({
     data: {
          date: util.formatDate(new Date),
          time: util.formatTime(new Date),

          index: 0,

          multiIndex32: [0, 0, 0, 0, 0, 0],
          singleton: '0',

          multiIndex31: [0, 0, 0, 0, 0],
          count: '0',

          multiIndex62: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          totalWeight: '0',
          complex: '零',

          multiIndex42: [0, 0, 0, 0, 0, 0, 0],
          price: '0',

          multiIndex102: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ledger: '0',
          complex_weight: '零',

          status: 1,
          statusVar: ' ● 无条',
          statusColor: 'red',
          switchChecked: true,

          noticeDate: util.formatDate(new Date),

          multiArray62: [
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    '.'
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ]
          ],
          multiArray32: [
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    '.'
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ]
          ],
          multiArray31: [
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    '.'
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ]
          ],
          multiArray42: [
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    '.'
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ]
          ],
          multiArray102: [
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    '.'
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ],
               [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
               ]
          ],

     },
     bindDateChange(e) {
          this.setData({
               date: e.detail.value
          })
     },
     bindTimeChange(e) {
          this.setData({
               time: e.detail.value
          })
     },
     bindVarietyChange(e) { //品种选择
          var cval = e.detail.value;
          var arrs = this.data.varietyItems;
          var that = this;
          for (const x in arrs) {
               if (arrs[x]._id == cval) {
                    that.setData({
                         variety: arrs[x].name,
                         varietyId: cval
                    })
               }
          }
     },
     bindTypeChange(e) { // 类型选择

          var cval = e.detail.value;
          var arrs = this.data.typeItems;
          var that = this;
          for (const x in arrs) {
               if (arrs[x]._id == cval) {
                    that.setData({
                         typeName: arrs[x].name,
                         typeId: cval
                    })
               }
          }
     },

     bindMultiPickerChange32: function(e) { // 重量
          var val = e.detail.value;
          val[3] = '.';
          this.setData({
               multiIndex32: e.detail.value,
               singleton: parseFloat(val.join(''))
          });
          this.count_singleton_linkagechange();
     },
     bindMultiPickerChange31: function(e) { //件数
          var val = e.detail.value;
          val[3] = '.';
          this.setData({
               multiIndex31: e.detail.value,
               count: parseFloat(val.join(''))
          });
          this.count_singleton_linkagechange();
     },
     // 单重x数量  基础联动
     count_singleton_linkagechange: function() {

          var count = this.data.count; //数量
          var singleton = this.data.singleton; // 单件重量
          var totalWeight = count * singleton;
          var totalWeightStr = totalWeight.toFixed(2) + "";
          var numArray = totalWeightStr.split(".");

          var indexArray = new Array;
          for (var i = 0; i < 9; i++) {
               if (i < 6) {
                    var integ = numArray[0].split('');
                    indexArray[i] = (numArray[0].length + i + 1) > 6 ? parseInt(integ[(numArray[0].length + i) - 6]) : 0;
               } else if (i == 6) {
                    indexArray[i] = 0;
               } else {
                    var decimal = numArray[1].split('');
                    indexArray[i] = parseInt(decimal[i - 7]);
               }
          }
          this.setData({
               multiIndex62: indexArray,
               totalWeight: parseFloat(totalWeight.toFixed(2)),
               complex_weight: TransformToChinese(parseFloat(totalWeight.toFixed(2)))
          });
          this.price_totalWeight_linkagechange();
     },
     bindMultiPickerChange62: function(e) { //总重
          var val = e.detail.value;
          val[6] = '.';
          this.setData({
               multiIndex62: e.detail.value,
               totalWeight: parseFloat(val.join('')),
               complex_weight: TransformToChinese(parseFloat(val.join('')))
          })
          this.price_totalWeight_linkagechange();
     },
     bindMultiPickerChange42: function(e) { //单价
          var val = e.detail.value;
          val[4] = '.';
          this.setData({
               multiIndex42: e.detail.value,
               price: parseFloat(val.join(''))
          })
          this.price_totalWeight_linkagechange();
     },
     bindMultiPickerChange102: function(e) { //总价
          var val = e.detail.value;
          val[10] = '.';
          this.setData({
               multiIndex102: e.detail.value,
               ledger: parseFloat(val.join('')),
               complex: swapper(parseFloat(val.join('')))
          })
     },
     // 总重x单价  基础联动 ledger
     price_totalWeight_linkagechange: function() {

          var price = this.data.price; //单价
          var totalWeight = this.data.totalWeight; // 总重
          var ledger = price * totalWeight;
          var ledgerStr = ledger.toFixed(2) + "";
          var numArray = ledgerStr.split(".");

          var indexArray = new Array;
          for (var i = 0; i < 13; i++) {
               if (i < 10) {
                    var integ = numArray[0].split('');
                    indexArray[i] = (numArray[0].length + i + 1) > 10 ? parseInt(integ[(numArray[0].length + i) - 10]) : 0;
               } else if (i == 10) {
                    indexArray[i] = 0;
               } else {
                    var decimal = numArray[1].split('');
                    indexArray[i] = parseInt(decimal[i - 11]);
               }
          }
          this.setData({
               multiIndex102: indexArray,
               ledger: parseFloat(ledger.toFixed(2)),
               complex: swapper(parseFloat(ledger.toFixed(2))),
          });
     },
     bindPickerChange: function(e) { //客户选择
          this.setData({
               index: e.detail.value,
               customerId: this.data.customers[e.detail.value]._id
          })
     },
     switchChange: function(e) { //  提醒选择
          this.setData({
               switchChecked: e.detail.value
          })
     },
     sliderChange: function(e) { // 滑动条选择
          var statusVar;
          var statusColor;
          var switchDisable = false; // 提醒按钮 是否禁用
          var switchChecked = true; // 提醒按钮
          switch (e.detail.value) {
               case 1:
                    statusVar = ' ● 无条';
                    statusColor = 'red';
                    break;
               case 2:
                    statusVar = ' ● 有票';
                    statusColor = 'orange';
                    break;
               case 3:
                    statusVar = ' ● 交票';
                    statusColor = '#81b1e1';
                    break;
               case 4:
                    statusVar = ' ● 已结';
                    statusColor = 'green';
                    switchDisable = true;
                    switchChecked = false;
                    break;
          }
          this.setData({
               statusVar: statusVar,
               statusColor: statusColor,
               switchDisable: switchDisable,
               switchChecked: switchChecked,
               status: e.detail.value
          })
     },
     bindNoticeDateChange(e) { // 提醒日期
          this.setData({
               noticeDate: e.detail.value
          })
     },

     record(e) {
          wx.showToast({
               title: '保存中...',
               icon: 'loading',
               duration: 30000
          })
          var data = {
               date: this.data.date,
               time: this.data.time,
               customerId: this.data.customerId,
               varietyId: this.data.varietyId,
               typeId: this.data.typeId,
               singleton: this.data.singleton,
               multiIndex32: this.data.multiIndex32,

               count: this.data.count,
               multiIndex31: this.data.multiIndex31,

               totalWeight: this.data.totalWeight,
               multiIndex62: this.data.multiIndex62,

               price: this.data.price,
               multiIndex42: this.data.multiIndex42,

               ledger: this.data.ledger,
               multiIndex102: this.data.multiIndex102,

               switchChecked: this.data.switchChecked,
               noticeDate: this.data.noticeDate,
               status: this.data.status,

               del: 0,
               type: this.data.type,
               digest: e.currentTarget.dataset.digest
          }

          var _this = this
          const db = wx.cloud.database()
          const tallys = db.collection('tallys')
          if (_this.data._id == null) {
               tallys.add({
                    // data 字段表示需新增的 JSON 数据
                    data: data,
                    success(res) {
                         wx.hideToast()
                         wx.showToast({
                              title: '添加成功',
                              duration: 500
                         })
                         setTimeout(function() {
                              wx.navigateBack();
                         }, 500)
                    }
               })
          } else {
               tallys.doc(_this.data._id).update({
                    data: data,
                    success(res) {
                         wx.hideToast()
                         wx.showToast({
                              title: '更新成功',
                              duration: 500
                         })
                         setTimeout(function() {
                              wx.navigateBack();
                         }, 500)
                    }
               })
          }
     },

     deleteRecord() {
          wx.showToast({
               title: '删除中...',
               icon: 'loading',
               duration: 30000
          })
          var _this = this
          const db = wx.cloud.database()
          const tallys = db.collection('tallys');
          tallys.doc(_this.data._id).update({
               data: {
                    del: 1
               },
               success(res) {
                    wx.showToast({
                         title: '删除成功',
                         duration: 500
                    })
                    setTimeout(function() {
                         wx.navigateBack();
                    }, 500)
               }
          })
     },

     // 页面显示设置
     onLoad(options) {
          wx.showToast({
               title: '加载中...',
               icon: 'loading',
               duration: 30000
          })

          // 回显完成条数占位数
          var reViewCount = 0;


          var _this = this
          const db = wx.cloud.database();
          const tallys = db.collection('tallys');
          const variety = db.collection('types'); //品种
          const types = db.collection('variety'); // 类型
          const customer = db.collection('customer');

          if (options.id) { // 数据回显
               tallys.where({
                    del: 0,
                    _id: options.id
               }).get({
                    // 根据id 查出账本单条内容
                    success(tallyRes) {
                         if (tallyRes.data.length == 0) { //提示错误
                              wx.hideToast();
                              wx.showToast({
                                   title: '该记录已删除',
                                   duration: 1000,
                                   icon: "none"
                              })
                              setTimeout(
                                   function() {
                                        wx.navigateBack();
                                   }, 1000
                              )
                         }
                         //----------------------------------------------------------------------------------------------------------- 正常回显 

                         _this.setData(tallyRes.data[0]); // 回显设置页面数据

                         if (tallyRes.data[0].ledger != "0") {
                              _this.setData({
                                   complex: swapper(parseFloat(tallyRes.data[0].ledger.toFixed(2))), //总额描述
                              });
                         }
                         if (tallyRes.data[0].totalWeight != "0") {
                              _this.setData({
                                   complex_weight: TransformToChinese(parseFloat(tallyRes.data[0].totalWeight.toFixed(2))), // 重量 描述
                              });
                         }

                         // 进度条
                         var statusVar;
                         var statusColor;
                         var switchDisable = false; // 提醒按钮 是否禁用
                         switch (tallyRes.data[0].status) {
                              case 1:
                                   statusVar = ' ● 无条';
                                   statusColor = 'red';
                                   break;
                              case 2:
                                   statusVar = ' ● 有票';
                                   statusColor = 'orange';
                                   break;
                              case 3:
                                   statusVar = ' ● 交票';
                                   statusColor = '#81b1e1';
                                   break;
                              case 4:
                                   statusVar = ' ● 已结';
                                   statusColor = 'green';
                                   switchDisable = true;
                                   break;
                         }
                         _this.setData({
                              statusVar: statusVar,
                              statusColor: statusColor,
                              switchDisable: switchDisable,
                              switchChecked: tallyRes.data[0].switchChecked,
                              status: tallyRes.data[0].status
                         })

                         //


                         // 客户数据回显
                         customer.where({
                              del: 0,
                              type: tallyRes.data[0].type // 账务类型而选择客户类型
                         }).get({
                              success(resc) {
                                   var customerId = tallyRes.data[0].customerId;
                                   var customers = resc.data;
                                   var index = 0;
                                   var isCustomerNormal = false;
                                   for (const x in customers) {
                                        if (customers[x]._id == customerId) {
                                             index = x;
                                             isCustomerNormal = true;
                                        }
                                   }
                                   if (!isCustomerNormal && customerId) { //客户被删除
                                        customer.where({
                                             // del: 1,
                                             _id: customerId
                                        }).get({
                                             success(resco) {
                                                  if (resco.data[0].del == 1) {
                                                       resco.data[0].name = resco.data[0].name + '(已删除)';
                                                  } else {
                                                       resco.data[0].name = resco.data[0].name + '(已改为' + (resco.data[0].type == 1 ? "出货客户" : "收货客户") + ")";
                                                  }
                                                  var nextIndex = customers.length;
                                                  customers[nextIndex] = resco.data[0];
                                                  _this.setData({
                                                       customers: customers,
                                                       index: nextIndex,
                                                  }, () => {
                                                       reViewCount = reViewCount + 1;
                                                  })
                                             }
                                        })
                                   } else {
                                        _this.setData({
                                             customers: customers,
                                             index: index,
                                        }, () => {
                                             reViewCount = reViewCount + 1;
                                        })
                                   }
                              }
                         })

                         // 品种数据回显
                         variety.where({
                              del: 0
                         }).get({
                              success(resv) {
                                   var varietyId = tallyRes.data[0].varietyId;
                                   var varietyItems = resv.data;
                                   var isVarietyNormal = false;
                                   for (const x in varietyItems) {
                                        if (varietyItems[x]._id == varietyId) {
                                             varietyItems[x].checked = true;
                                             isVarietyNormal = true
                                             _this.setData({
                                                  variety: varietyItems[x].name
                                             })
                                        }
                                   }
                                   if (!isVarietyNormal && varietyId) { //品种被删除
                                        variety.where({
                                             del: 1,
                                             _id: varietyId
                                        }).get({
                                             success(resvo) {
                                                  resvo.data[0].name = resvo.data[0].name + '(已删除)';
                                                  var nextIndex = varietyItems.length;
                                                  varietyItems[nextIndex] = resvo.data[0];
                                                  varietyItems[nextIndex].checked = true;
                                                  _this.setData({
                                                       varietyItems: varietyItems,
                                                       variety: resvo.data[0].name
                                                  }, () => {
                                                       reViewCount = reViewCount + 1;
                                                  })
                                             }
                                        })
                                   } else {
                                        _this.setData({
                                             varietyItems: varietyItems,
                                        }, () => {
                                             reViewCount = reViewCount + 1;
                                        })
                                   }
                              }
                         })

                         // 类型数据回显
                         types.where({
                              del: 0
                         }).get({
                              success(rest) {
                                   var typeId = tallyRes.data[0].typeId;
                                   var typeItems = rest.data;
                                   var isTypeNormal = false;
                                   for (const x in typeItems) {
                                        if (typeItems[x]._id == typeId) {
                                             typeItems[x].checked = true;
                                             isTypeNormal = true;
                                             _this.setData({
                                                  typeName: typeItems[x].name
                                             })
                                        }
                                   }
                                   if (!isTypeNormal && typeId) { //种类被删除
                                        types.where({
                                             del: 1,
                                             _id: typeId
                                        }).get({
                                             success(resto) {
                                                  resto.data[0].name = resto.data[0].name + '(已删除)';
                                                  var nextIndex = typeItems.length;
                                                  typeItems[nextIndex] = resto.data[0];
                                                  typeItems[nextIndex].checked = true;
                                                  _this.setData({
                                                       typeItems: typeItems,
                                                       typeName: resto.data[0].name
                                                  }, () => {
                                                       reViewCount = reViewCount + 1;
                                                  })
                                             }
                                        })
                                   } else {
                                        _this.setData({
                                             typeItems: typeItems,
                                        }, () => {
                                             reViewCount = reViewCount + 1;
                                        })
                                   }
                              }
                         })
                    }
               })
          } else { // 添加记录  条目基本回显
               _this.setData({
                    type: options.type
               });
               variety.where({
                    del: 0
               }).get({
                    success(res) {
                         _this.setData({
                              varietyItems: res.data
                         }, () => {
                              reViewCount = reViewCount + 1;
                         });
                    }
               })

               types.where({
                    del: 0
               }).get({
                    success(res) {
                         _this.setData({
                              typeItems: res.data
                         }, () => {
                              reViewCount = reViewCount + 1;
                         });
                    }
               })

               customer.where({
                    del: 0,
                    type: options.type
               }).get({
                    success(res) {
                         _this.setData({
                              customers: res.data
                         }, () => {
                              reViewCount = reViewCount + 1;
                         });
                    }
               })
          }
          var checkLoading = setInterval(function() {
               console.log(reViewCount);
               if(reViewCount>2){
                    clearInterval(checkLoading);
                    wx.hideToast();
               }
          }, 500)
     },
     onReady() {

     }
})











//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function swapper(n) {
     if (n == 0) return "零";
     if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n))
          return "数据非法";
     var unit = "千百拾亿千百拾万千百拾元角分",
          str = "";
     n += "00";
     var p = n.indexOf('.');
     if (p >= 0)
          n = n.substring(0, p) + n.substr(p + 1, 2);
     unit = unit.substr(unit.length - n.length);
     for (var i = 0; i < n.length; i++)
          str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i);
     return str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
}

var chnNumChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
var chnUnitSection = ["", "吨", "万吨"];
var chnUnitChar = ["", "十", "百"];

var numToChn = function(num) {
     var index = num.toString().indexOf(".");
     if (index != -1) {
          var str = num.toString().slice(index);
          var a = "点";
          for (var i = 1; i < str.length; i++) {
               a += chnNumChar[parseInt(str[i])];
          }
          return a;
     } else {
          return '';
     }
}

//定义在每个小节的内部进行转化的方法，其他部分则与小节内部转化方法相同
function sectionToChinese(section) {
     var str = '',
          chnstr = '',
          zero = false,
          count = 0; //zero为是否进行补零， 第一次进行取余由于为个位数，默认不补零
     while (section > 0) {
          var v = section % 10; //对数字取余10，得到的数即为个位数
          if (v == 0) { //如果数字为零，则对字符串进行补零
               if (zero) {
                    zero = false; //如果遇到连续多次取余都是0，那么只需补一个零即可
                    chnstr = chnNumChar[v] + chnstr;
               }
          } else {
               zero = true; //第一次取余之后，如果再次取余为零，则需要补零
               str = chnNumChar[v];
               str += chnUnitChar[count];
               chnstr = str + chnstr;
          }
          count++;
          section = Math.floor(section / 10);
     }
     return chnstr;
}

//定义整个数字全部转换的方法，需要依次对数字进行10000为单位的取余，然后分成小节，按小节计算，当每个小节的数不足1000时，则需要进行补零

function TransformToChinese(num) {
     var a = numToChn(num);
     num = Math.floor(num);
     var unitPos = 0;
     var strIns = '',
          chnStr = '';
     var needZero = false;

     if (num === 0) {
          return chnNumChar[0];
     }
     while (num > 0) {
          var section = num % 1000;
          if (needZero) {
               chnStr = chnNumChar[0] + chnStr;
          }
          strIns = sectionToChinese(section);
          strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];
          chnStr = strIns + chnStr;
          needZero = (section < 1000) && (section > 0);
          num = Math.floor(num / 1000);
          unitPos++;
     }
     if (!(chnStr + a).endsWith('吨')) {
          a = a + '公斤';
     }
     return chnStr + a;
}