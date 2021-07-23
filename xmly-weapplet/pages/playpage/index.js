Page({
  data: {
    // id: 0,
    // id: 16411402,
  },

  onLoad: function(options){
      let searchId;
      const eventChannel = this.getOpenerEventChannel()
      eventChannel.on('acceptDataFromOpenerPage', function(data) {
        // console.log(data)
        searchId = data.id
      })
      this.setData({
        id: searchId
      })
      // console.log(this.data.id)
  },

})