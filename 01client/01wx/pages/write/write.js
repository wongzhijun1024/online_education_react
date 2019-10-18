//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    height: '500',
    coursesIndex: 0,
    courses: [{
      id: 0,
      title: '逻辑'
    }, {
      id: 1,
      title: '数学'
    }, {
      id: 2,
      title: '英语'
    }, {
      id: 3,
      title: '写作'
    }]
  },
  onLoad: function() {}
})