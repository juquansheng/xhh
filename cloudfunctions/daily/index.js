// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = wx.cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  try {
    return await db.collection('daily').doc(wxContext.OPENID).update({
      // data 传入需要局部更新的数据
      data: {
        content: event.content,
        updateTime: db.serverDate()
      }
    })
  } catch (e) {
    console.error(e)
  }

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}