const _ = require('underscore')
Component({
  properties: {

  },

  data: {
    placeholder:"搜索爆款产品"
  },

  methods: {
    handleSearchInput: _.debounce((e) => {
      // console.log(e.detail.value)
      // const currentPages = getCurrentPages()
      // const self = currentPages[currentPages.length-1]
      // self.setData({
      //   keywords: e.detail.value
      // })
    }, 300),
  }
})
