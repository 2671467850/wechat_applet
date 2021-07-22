import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
Page({
  onReachBottom(){
    console.log("上拉加载更多")
  },
  data: {
    forYouData: []
  },
  onLoad() {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['likeData', 'newLikeData', 'allData', 'newAllData'],
      actions: ['updateLike', 'updateAll'],
    })
  },

  onReady() {
    wx.request({
      url: 'https://m.ximalaya.com/m-revision/page/applet/index/queryIndexTabModule?categoryPinyin=recommend',
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        if(res.data.ret === 0){
          // console.log(res.data.data.modules)
          // console.log(res.data.data.modules[0].moduleInfo)
          this.myUpdataAllData(res.data.data.modules)
          let likeData = res.data.data.modules[0].moduleInfo
          this.myMethod(likeData)
        }
      }
    })
    // 为你推荐的数据请求
    wx.request({
      url: 'https://m.ximalaya.com/m-revision/page/wechat/homepage/feedInfo?size=10',
      success: (res)=>{
        if(res.data.ret === 0){
          res.data.data.map(item=>{
            item.data.albumInfo.cover = "https://imagev2.xmcdn.com/" + item.data.albumInfo.cover
            return item
          })
          // console.log(res.data.data)
          this.setData({
            forYouData: res.data.data
          })
        }
      }
    })
  },

  onUnload() {
    this.storeBindings.destroyStoreBindings()
  },
  myMethod(data){
    this.updateLike(data)
  },
  myUpdataAllData(data) {
    this.updateAll(data)
  },

  goToSearch: ()=>{
    wx.navigateTo({
      url: '/pages/search/index',
    })
  }
})