const _ = require('underscore')
Page({
  data: {
    placeholder: "搜索",
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

  // 搜索栏搜索
  handleSearchInput: _.debounce((e) => {
    console.log(e.detail.value)
    const currentPages = getCurrentPages()
    const self = currentPages[currentPages.length-1]
    self.serachData(e.detail.value)
    self.setStorage(e.detail.value)
    self.getStorage()
  }, 1000),


  handlerTopClick(e){
    this.setData({
      placeholder: e.currentTarget.dataset.kw
    })
    this.serachData(e.currentTarget.dataset.kw)
    this.setStorage(e.currentTarget.dataset.kw)
    this.getStorage()
  },
  serachData(data){
    wx.request({
      url: `https://m.ximalaya.com/m-revision/page/search?kw=${data}&core=all&page=1&rows=5`,
      success: (res)=>{
        // console.log(res.data.data.albumViews.albums)
        this.setData({
          searchData: res.data.data.albumViews.albums
        })
      }
    })
  },
  setStorage(data){
    let result = this.data.searchHistory.find((item)=>item == data)
    if(!result && data !== ""){
      this.data.searchHistory.unshift(data)
      wx.setStorage({
        key:"search_history",
        data:this.data.searchHistory
      })
    }
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