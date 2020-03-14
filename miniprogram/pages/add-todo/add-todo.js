const db = wx.cloud.database();
const _ = db.command;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        title: '',
        desc: '',
        priority: 0,
    },

    handleTitleChange(e){
        this.setData({title: e.detail})
    },

    handleDescChange(e){
        this.setData({ desc: e.detail })
    },

    handlePriorityChange(e) {
        this.setData({ priority: e.detail })
    },

    handleSave(){
        const {title, desc, priority} = this.data;
        const _data = { title, desc, priority, handleDescChange(e){
        this.setData({ desc: e.detail })
    },status: 0 };
        wx.cloud.callFunction({
            name: 'addTodo',
            data: _data,
        }).then((result)=>{
            console.log(result,999)
            wx.navigateBack()
        })
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

    }
})