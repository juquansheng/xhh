// miniprogram/pages/test/test.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sum: 0,
    one:0,
    two:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getOne:function(e){
    this.setData({
      one: e.detail.value
    })
  },
  getTwo: function (e) {
    this.setData({
      two: e.detail.value
    })
  },
  

  test: function () {
    console.log(this.data.one)
    console.log(this.data.two)
    wx.cloud.callFunction({
      // 云函数名称
      name: 'test',
      // 传给云函数的参数
      data: {
        a: this.data.one,
        b: this.data.two,
      },
      success: res => {
        console.log('callFunction test result: ', res)
        this.setData({
          sum: res.result.sum
        })
      }
    
    })
  },
  
  

})
