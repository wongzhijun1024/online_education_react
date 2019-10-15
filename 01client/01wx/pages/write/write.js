//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    height: '500',
    coursesIndex: 0,
    courses: []
  },
  onLoad: function () {
    let that = this;
    //获得后台服务的数据
    wx.request({
      url: 'http://localhost:8888/index',
      success: function (res) {
        if (res.statusCode == 200) {
          let courses = res.data;

          for (let i = 0; i < courses.length;i++){
            for (let j = 0; j < courses[i].chapters.length;j++){
              courses[i].chapters[j].isSwitch=false;
              }
          }
          that.setData({
            courses: courses
          });

          //把当前的课程保存为全局变量
          app.globalData.courses = courses;

        }
      }
    })
    //获得屏幕的高度
    let height = app.globalData.windowHeight;
    this.setData({
      height: height - 90
    });

  },
  clickTopItem: function (res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.yjs;
    //把index换成id
    this.setData({
      coursesIndex: id
    });
  },
  toExaminationInfor: function () {
    wx.navigateTo({
      url: '../examinationInfor/examinationInfor',
    })
  }
  , showChapterList: function (event) {
    //课程的下标
    let coursesIndex = this.data.coursesIndex;
    //第几个章节 
    let chapterIndex = event.currentTarget.dataset.chapterindex;
    //获得课程数据
    let courses = this.data.courses;
    //获得当前课程选择的题库列表
    let isSwitch = courses[coursesIndex].chapters[chapterIndex].isSwitch;
    //如果当前被打开，那么就关闭
    if (isSwitch){
      isSwitch=false;
    }else{
      isSwitch=true;
    }
    //把改变的值重新给课程数据设置
    courses[coursesIndex].chapters[chapterIndex].isSwitch = isSwitch;
    this.setData({
      courses: courses
    })
  }
})