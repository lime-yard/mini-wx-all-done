const db = wx.cloud.database();
Page({
    data: {
        allTodoList: []
    },
    onLoad(){
        this.getTodoList()
    },

    onShow(){
        this.getTodoList()
    },

    getTodoList(){
        db.collection('todos')
            .get()
            .then((result) => {
                this.setData({ allTodoList: result.data })
            })
    },

    handleAdd(){
        wx.navigateTo({
            url: '/pages/add-todo/add-todo',
        })
    }
});