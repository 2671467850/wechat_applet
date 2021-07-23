Component({

  properties: {
    listData: {
      type: Array
    }
  },

  data: {
    
  },

  lifetimes: {
    attached(){
      
    }
  },

  methods: {
    handlerClick: function(e){
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
