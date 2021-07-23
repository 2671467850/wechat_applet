Page({
  data: {
    topList: [],
    searchHistory: [],
    searchData: []
  },
  onLoad(){
    this.getStorage()
    wx.request({
      url: 'https://search.ximalaya.com/hotWordBillboard/list/2.0?categoryId=-1&size=24',
      success:(res)=>{
        this.setData({
          topList: res.data.hotWordResultList
        })
      }
    })
  },
  handlerTopClick(e){
    this.setStorage(e.currentTarget.dataset.kw)
    this.getStorage()
    wx.request({
      url: `https://m.ximalaya.com/m-revision/page/search?kw=${e.currentTarget.dataset.kw}&core=all&page=1&rows=5`,
      success: (res)=>{
        console.log(res.data.data.albumViews.albums)
        this.setData({
          searchData: res.data.data.albumViews.albums
        })
      }
    })
  },
  setStorage(data){
    this.data.searchHistory.unshift(data)
    wx.setStorage({
      key:"search_history",
      data:this.data.searchHistory
    })
  },
  getStorage(){
    wx.getStorage({
      key: 'search_history',
      success:(res)=>{
        this.setData({
          searchHistory: res.data
        })
      }
    })
  }
})