let app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectIndex:0,
    selectBoxList: [{ name: '目录' }, { name: '评论' }],
    course:[],
    conments:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let coursesIndex = options.coursesIndex;
    let chapterIndex = options.chapterIndex;
    //从全局变量中获得所有课程
    let courses= app.globalData.courses;
    //获得某给课程
    let course = courses[coursesIndex];
    this.setData({
      course: course
    });
    let that = this;
    //根据课程的coursesIndex去获得后台服务器的数据
    wx.request({
      url: 'http://localhost:8888/comment?courseId=' + coursesIndex,
      success:function(res){
        that.setData({
          conments: res.data
        });
      }
    })
  },
  selectAction: function (res) {

    // //获得传递过来的数据
    let id = res.currentTarget.dataset.index;
    //把index换成id
    this.setData({
      selectIndex: id
    });
  },
})