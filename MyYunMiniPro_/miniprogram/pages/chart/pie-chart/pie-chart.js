import * as echarts from '../../../ec-canvas/echarts';

let chart = null;

function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  showData();
  return chart;
}

function showData() {
  wx.cloud.callFunction({
    name: 'getData',
    data: {
    }
  }).then(res => {
    chart.setOption(res.result,true);
    wx.hideToast()
  })
}

Page({
  data: {
    ec: {
      onInit: initChart
    }
  },
  onReady() {
    setTimeout(function() {
      // 获取 chart 实例的方式
      // console.log(chart)
    }, 2000);
  },
  onShow() {
    wx.showToast({
      title: '加载数据中...',
      icon: 'loading',
      duration: 30000
    })
    // wx.startPullDownRefresh()
    showData();
  }
});