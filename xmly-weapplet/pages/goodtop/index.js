import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
Page({

  data: {
    iconData: [],
    topData: [],
    peopleData: []
  },

  onLoad(){
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['likeData', 'newLikeData'],
      actions: ['updateLike'],
    }),
    wx.request({
      url: 'https://m.ximalaya.com/m-revision/page/wechat/paid/pageInfo',
      success: (res)=>{
        if(res.data.ret === 0){
          // console.log(res.data.data[1].moduleInfo)
          res.data.data[1].moduleInfo.map(item=>{
            item.albumInfo.cover = "https://imagev2.xmcdn.com/" + item.albumInfo.cover
            return item
          })
          this.setData({
            iconData: res.data.data[0].moduleInfo,
            topData: res.data.data[1].moduleInfo,
            peopleData: res.data.data[2].moduleInfo
          })
          // console.log(this.data.iconData)
          // console.log(this.data.topData)
          // console.log(this.data.peopleData)
        }
      }
    })
  },
})