import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../../../store/store'
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

  lifetimes: {
    attached(){
      this.storeBindings = createStoreBindings(this, {
        store,
        fields: ['subscribeData'],
        actions: ['updateSubscribeData'],
      })
    },
    detached(){
      this.storeBindings.destroyStoreBindings()
    }
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
            res.data.id = this.data.id
            this.setData({
              info: res.data
            })
            // console.log(this.data.info)
          }
        }
      })
    }
  },

  methods: {
    handlerButtonClick(){
      // console.log(this.data.info)
      this.updateSubscribeData(this.data.info)
      // console.log(this.data.subscribeData)
    }
  }
})
