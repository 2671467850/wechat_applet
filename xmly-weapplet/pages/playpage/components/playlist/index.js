
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../../../store/store'

const myaudio = wx.createInnerAudioContext({});
Component({

  properties: {
    searchId: {
      type: Number
    }
  },

  data: {
    id: 0,
    list: [],
    listCount: 0,
    page: 1,
    pageSize: 10,
    tabList: [
      {
        id: 0,
        title: "节目列表"
      },
      {
        id: 1,
        title: "简介"
      },
      {
        id: 2,
        title: "找相似"
      },
    ],
    activeIndex: 0,
    currentPageId: 0
    // playAll: false,
    // playIndex: -1,
  },

  lifetimes: {
    attached(){
      this.storeBindings = createStoreBindings(this, {
        store,
        fields: ['playAll', 'playIndex'/* , 'currentPageId' */],
        actions: ['updatePlayAll', 'updatePlayIndex'/* , 'updateCurrentPageId' */],
      })
    },
    detached(){
      this.storeBindings.destroyStoreBindings()
    }
  },

  observers: {
    'searchId, page, pageSize': function(searchId, page, pageSize) {
      this.setData({
        id: searchId
      })
      if(searchId){
        wx.request({
          url: `https://m.ximalaya.com/m-revision/common/album/queryAlbumTrackRecordsByPage?albumId=${searchId}&page=${page}&pageSize=${pageSize}`,
          success:(res)=>{
            if(res.data.ret === 0){
              // console.log(res.data.data.trackDetailInfos)
              this.setData({
                list: res.data.data.trackDetailInfos,
                listCount: res.data.data.totalCount,
              })
              // console.log(this.data.list)
              // console.log(res.data.data)
            }
          }
        })
      }
    },
  },

  methods: {
    changeTab(e){
      this.setData({
        activeIndex: e.currentTarget.dataset.index
      })
    },
    handlerPlayAllClick(){
      if(this.data.list[0].trackInfo.playPath == ""){
        console.log('没有音频地址')
      }else{
        this.updatePlayAll(true)
        this.updatePlayIndex(this.data.list[0].id)
        // this.updateCurrentPageId(this.data.list[0].id)
        myaudio.stop();
        myaudio.src = this.data.list[0].trackInfo.playPath
        myaudio.play()
      }
    },
    handlerPauseAllClick(){
      this.updatePlayAll(false)
      this.updatePlayIndex(-1)
      // this.updateCurrentPageId(0)
      myaudio.pause();
    },
    handlerPlayItemClick(e){
      // console.log(e.currentTarget.dataset.playurl)
      if(e.currentTarget.dataset.playurl == ""){
        console.log('没有音频地址')
      }else{
        myaudio.src = e.currentTarget.dataset.playurl
        this.updatePlayIndex(e.currentTarget.dataset.playid)
        this.updatePlayAll(true)
        // this.updateCurrentPageId(this.data.list[0].id)
        myaudio.play();
      }
    },
    handlerPauseItemClick(){
      this.updatePlayIndex(-1)
      this.updatePlayAll(false)
      // this.updateCurrentPageId(0)
      myaudio.pause();
    },
    handlerDataListReverse(){
      this.setData({
        list: this.data.list.reverse()
      })
    }
  }
})