// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext();
    const {title, desc, status } = event;
    console.log(event, context,444)
    try{
        const result = await db.collection('todos').add({
            data: {
                _openid: wxContext.OPENID,
                title, 
                desc,
                status
            }
        });
        return result;
    }catch(e){

    }
}