// store.js
import { observable, action } from 'mobx-miniprogram'

export const store = observable({

  // 数据字段
  baseImgPath: "https://imagev2.xmcdn.com/",
  likeData: [],
  allData: [],

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
  })

})