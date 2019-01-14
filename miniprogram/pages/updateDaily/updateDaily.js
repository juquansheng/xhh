// miniprogram/pages/updateDaily/updateDaily.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'初始值'
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

  getContent: function (e) {
    this.setData({
      content: e.detail.value
    })
  },

  update: function () {
  
    wx.cloud.callFunction({
      // 云函数名称
      name: 'daily',
      // 传给云函数的参数
      data: {
        content: this.data.content
      },
      success: res => {
        console.log('callFunction test result: ', res)
        this.setData({
          content: res.result.event.content
        })
      }

    })
  },


})