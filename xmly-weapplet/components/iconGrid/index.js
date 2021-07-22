// components/iconGrid/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    iconList:[
      {
        img:"https://imagev2.xmcdn.com/storages/b5ce-audiofreehighqps/1C/CA/CMCoOSED3qgKAABCmQB-CGOX.png",
        title:"排行榜",
        url: "/pages/search/index"
      },
      {
        img:"https://imagev2.xmcdn.com/storages/db6b-audiofreehighqps/62/2B/CMCoOSYD3qgKAABHIgB-CGOW.png",
        title:"签到零积分",
        url: "/pages/my/index"
      },
      {
        img:"https://imagev2.xmcdn.com/storages/8a6d-audiofreehighqps/13/12/CMCoOSMD3qgKAABFHQB-CGOh.png",
        title:"助眠解压",
        url: "/pages/goodtop/index"
      },
      {
        img:"https://imagev2.xmcdn.com/storages/9155-audiofreehighqps/0D/73/CKwRIJEExWuxAAAxiADIO_8P.png",
        title:"今日热点",
        url: "/pages/search/index"
      },
      {
        img:"https://imagev2.xmcdn.com/storages/e9e3-audiofreehighqps/CC/98/CMCoOScEVbiBAAB1BQChPvM-.png",
        title:"频道",
        url: "/pages/category/index"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goToPage: function(e){
      // console.log(e.currentTarget.dataset.url)
      if(e.currentTarget.dataset.url !== "/pages/search/index"){
        wx.switchTab({
          url: e.currentTarget.dataset.url,
        })
      }else{
        wx.navigateTo({
          url: e.currentTarget.dataset.url,
        })
      }
    }
  }
})
