import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
Page({
  data: {

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