
Component({

  properties: {
    infoList: {
      type: Array
    }
  },

  data: {
    topThreeList: [],
    otherList: []
  },

  observers:{
    'infoList': function(infoList){
      if(infoList.length > 0){
        // console.log(infoList)
        this.setData({
          topThreeList: infoList.slice(0,3),
          otherList: infoList.slice(3,6)
        })
        // console.log(this.data.topThreeList)
        // console.log(this.data.otherList)
      }
    }
  },

  methods: {

  }
})
