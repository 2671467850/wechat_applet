Component({

  properties: {

  },

  data: {
    baseImgPath: "https://imagev2.xmcdn.com/",
    swiperList:[]
  },

  methods: {

  },

  lifetimes:{
    attached(){
      wx.request({
        url: 'https://m.ximalaya.com/revision/ad/slideshow',
        header: {
          'content-type': 'application/json'
        },
        success: (res) => {
          if(res.data.ret === 200){
            // console.log(res.data.data.slideshow)
            this.setData({
              swiperList:res.data.data.slideshow.map(item=>{
                item.coverPath = this.data.baseImgPath + item.coverPath
                return item
              })
            })
          }
        }
      })
    }
  }
})
