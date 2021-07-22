Component({

  data: {
    tabList: [],
    activeTab: 7,
    contList: []
  },

  observers: {
    'activeTab': function(activeTab){
      // console.log(activeTab)
      this.getContData(activeTab)
    }
  },

  lifetimes: {
    attached(){
      wx.request({
        url: 'https://m.ximalaya.com/revision/metadata/v2/group/all',
        success: (res) =>{
          // console.log(res)
          if(res.data.ret === 200){
            // console.log(res.data.data.groups)
            this.setData({
              tabList: res.data.data.groups
            })
            // console.log(this.data.tabList)
          }
        }
      }),
      this.getContData(this.data.activeTab)
    }
  },

  methods:{
    handlerTabClick: function(e) {
      // console.log(e.currentTarget.dataset.id)
      this.setData({
        activeTab: e.currentTarget.dataset.id
      })
      // console.log(this.data.activeTab)
    },
    getContData: function(id) {
      wx.request({
        url: 'https://m.ximalaya.com/revision/metadata/v2/group/channels?groupId=' + id,
        success: (res) =>{
          if(res.data.ret === 200){
            res.data.data.channels.map(item=>{
              if(item.trackCount > 10000){
                item.trackCount =  (item.trackCount/10000).toFixed(1) + "万"
              }
              if(item.newCount > 10000){
                item.newCount =  (item.newCount/10000).toFixed(1) + "万"
              }
              return item
            })
            this.setData({
              contList: res.data.data.channels
            })
            // console.log(this.data.contList)
          }
        }
      })
    }
  }
})