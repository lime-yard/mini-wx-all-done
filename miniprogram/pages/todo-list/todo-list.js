const db = wx.cloud.database();
const globalData = getApp().globalData;

Page({
    data: {
        allTodoList: []
    },
    onLoad() {},

    onShow() {
        this.getTodoList()
    },

    getTodoList() {
        wx.cloud.callFunction({
            name: 'getTodoList'
        }).then((result) => {
            console.log(result, 333)
            this.setData({
                allTodoList: result.result.data
            })
        })
    },

    handleAdd() {
        wx.navigateTo({
            url: '/pages/add-todo/add-todo',
        })
    }
});