Component({

  properties: {
    searchlist: {
      type: Array
    }
  },

  data: {

  },

  methods: {
    handlerClick(e){
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
