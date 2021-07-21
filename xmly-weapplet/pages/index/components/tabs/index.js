Component({

  properties: {
    tabData: {
      type: Array
    }
  },

  data: {
    tabs: [],
    activeTab: 0,
    tabSwiperHeight: 0
  },

  observers: {
    'tabData': function(tabData) {
      if(tabData.length){
        let newData = [{...tabData[3]},{...tabData[6]},{...tabData[8]},{...tabData[11]},{...tabData[13]}/* ,{...tabData[1]},{...tabData[5]},{...tabData[10]},{...tabData[15]} */]
        newData.map(item=>{
          item.moduleInfo.map(i=>{
            i.albumInfo.cover = "https://imagev2.xmcdn.com/" + i.albumInfo.cover
            // console.log(i.albumInfo.cover)
            return i
          })
          return item
        })
        // console.log(newData)
        this.setData({
          tabs: newData
        })
      }
    }
  },

  lifetimes: {
    attached() {
    },
  },

  methods: {
    onTabClick: (e)=>{
      const index = e.detail.index
      // this.setData({ 
      //   activeTab: index 
      // })
    },

    onChange: (e)=>{
      const index = e.detail.index
      // this.setData({ 
      //   activeTab: index 
      // })
    },

    handleClick: (e)=>{
      // wx.navigateTo({
      //   url: './webview',
      // })
    }
  }
})
