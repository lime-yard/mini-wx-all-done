// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();
const logger = cloud.logger();


// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext();
    try {
        const result = await db.collection('todos').where({
            _openid: wxContext.OPENID
        }).limit(100).get();
        return result;
    } catch(e){
    }
}