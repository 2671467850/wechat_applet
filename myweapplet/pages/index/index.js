// pages/index/index.js
const myaudio = wx.createInnerAudioContext({});
Page({

     /**
      * 页面的初始数据
      */
     data: {

     },

     
  //播放
  play: function () {
      
     myaudio.play();
     console.log(myaudio.duration);
     this.setData({ isplay: true });
   },
   // 停止
   stop: function () {
     myaudio.pause();
     this.setData({ isplay: false });
   },
   /**
    * 重播
    */
   review:function(){
    myaudio.stop();
  
     myaudio.play()
     this.setData({ isplay: true });
   },

     /**
      * 生命周期函数--监听页面加载
      */
     onLoad: function (options) {
          
     },

     /**
      * 生命周期函数--监听页面初次渲染完成
      */
     onReady: function () {

     },

     /**
      * 生命周期函数--监听页面显示
      */
     onShow: function () {
          myaudio.src = "https://aod.cos.tx.xmcdn.com/group31/M0A/21/AD/wKgJSVmBku_ANXULAOBNF_Mwy-o627.m4a"
     },

     /**
      * 生命周期函数--监听页面隐藏
      */
     onHide: function () {

     },

     /**
      * 生命周期函数--监听页面卸载
      */
     onUnload: function () {

     },

     /**
      * 页面相关事件处理函数--监听用户下拉动作
      */
     onPullDownRefresh: function () {

     },

     /**
      * 页面上拉触底事件的处理函数
      */
     onReachBottom: function () {

     },

     /**
      * 用户点击右上角分享
      */
     onShareAppMessage: function () {

     }
})