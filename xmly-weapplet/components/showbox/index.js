Component({
 
  properties: {
    showNext: {
      type: Boolean
    },
    showName: {
      type: Boolean
    },
    showData: {
      type: Array
    }
  },

  data: {
    showNext: false,
    showName: false,
    showData: [],
    newShowData: [],
    start: 1,
  },
  observers: {
    'showData, start': function(showData, start) {
      if(showData.length){
        // console.log(showData)
        // console.log(start)
        this.setData({
          newShowData: showData.slice(start, start+6)
        })
      }
    }
  },

  lifetimes:{
    attached(){
      this.setData({
        start: 0,
      })
    }
  },

  methods: {
    nextData(){
      if(this.data.start === 42){
        this.setData({
          start: 0,
        })
      }else{
        this.setData({
          start: this.data.start + 6
        })
      }
    },
  }
})
