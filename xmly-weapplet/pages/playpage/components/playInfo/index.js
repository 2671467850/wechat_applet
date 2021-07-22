Component({

  properties: {
    searchId: {
      type: Number
    }
  },

  data: {
    id: 0,
    info: {}
  },

  observers: {
    'searchId': function(searchId) {
      this.setData({
        id: searchId
      })
      // console.log(this.data.id)
      wx.request({
        url: `https://m.ximalaya.com/mobile/v1/album/share/content?albumId=${this.data.id}&tpName=weixin`,
        success:(res)=>{
          if(res.data.ret === 0){
            this.setData({
              info: res.data
            })
            // console.log(this.data.info)
          }
        }
      })
    }
  },

  lifetimes: {
    attached: function(){

    }
  },

  methods: {

  }
})
