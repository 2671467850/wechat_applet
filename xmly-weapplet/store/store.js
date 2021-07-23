// store.js
import { observable, action } from 'mobx-miniprogram'

export const store = observable({

  // 数据字段
  baseImgPath: "https://imagev2.xmcdn.com/",
  likeData: [],
  allData: [],
  subscribeData: [],
  playAll: false,
  playIndex: -1,
  // currentPageId: 0,

  // 计算属性
  get newLikeData() {
    this.likeData.map(item=>{
      item.albumInfo.cover = this.baseImgPath + item.albumInfo.cover
      // console.log(item.albumInfo.cover)
      return item
    })
    return this.likeData
  },

  get newAllData() {
    // console.log(this.allData)
    this.allData.map((item,index)=>{
      // if(index!==0 && index!==2){
      //   // console.log(item)
      //   item.moduleInfo.map(i=>{
      //     i.albumInfo.cover = this.baseImgPath + i.albumInfo.cover
      //     // console.log(i.albumInfo.cover)
      //     return i
      //   })
      // }
      return item
    })
    // console.log(this.allData)
    return this.allData
  },

  // actions
  updateLike: action(function (data) {
    let likeData = data
    this.likeData = likeData
  }),
  updateAll: action(function (data) {
    let allData = data
    this.allData = allData
  }),
  updateSubscribeData: action(function (data) {
    let subscribeData = data
    this.subscribeData.unshift(subscribeData)
  }),
  updatePlayAll: action(function (data) {
    let playAll = data
    this.playAll = playAll
  }),
  updatePlayIndex: action(function (data) {
    let playIndex = data
    this.playIndex = playIndex
  }),
  // updateCurrentPageId: action(function (data){
  //   let currentPageId = data
  //   this.currentPageId = currentPageId
  // })

})