const _ = require('underscore')
Component({
  properties: {
    placeholder: {
      type: String
    }
  },

  data: {
    placeholder:"请输入搜索内容"
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
