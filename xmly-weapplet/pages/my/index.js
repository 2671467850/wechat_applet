import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
Page({

  data: {

  },

  onLoad: function (options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['subscribeData'],
      actions: ['updateSubscribeData'],
    })
  },

  onReady(){
    // console.log(this.data.subscribeData)
  },

  onUnload: function () {
    this.storeBindings.destroyStoreBindings()
  }
})