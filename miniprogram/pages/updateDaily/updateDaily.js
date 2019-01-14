// miniprogram/pages/updateDaily/updateDaily.js
const app = getApp()  

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
    console.log('callFunction test result: '+this.data.content)
    const db = wx.cloud.database()
    console.log('callFunction test result: ' + db.collection('daily').doc('XDxX74nnuWjcivR9').get({
      success(res) {
        // res.data 包含该记录的数据
        console.log(res.data)
      }
    }))
    db.collection('daily').doc('XDxX74nnuWjcivR9').update({
      // data 传入需要局部更新的数据
      data: {
        content: 'this.data.content',
        updateTime: db.serverDate()
      }
    })
  },


})