
Component({

  properties: {
    infoList: {
      type: Array
    }
  },

  data: {
    topThreeList: [],
    otherList: []
  },

  observers:{
    'infoList': function(infoList){
      if(infoList.length > 0){
        // console.log(infoList)
        this.setData({
          topThreeList: infoList.slice(0,3),
          otherList: infoList.slice(3,6)
        })
        // console.log(this.data.topThreeList)
        // console.log(this.data.otherList)
      }
    }
  },

  methods: {
    handlerTopBoxClick(e){
      // console.log(e.currentTarget.dataset.index)
      wx.navigateTo({
        url: '/pages/playpage/index',
        success: function(res) {
          res.eventChannel.emit('acceptDataFromOpenerPage', { id: e.currentTarget.dataset.index })
        }
      })
    }
  }
})
