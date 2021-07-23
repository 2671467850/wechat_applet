// pages/index/index.js
const myaudio = wx.createInnerAudioContext({});
Page({
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

   review:function(){
    myaudio.stop();
    myaudio.play()
    this.setData({ isplay: true });
   },
    onShow: function () {
        myaudio.src = "https://aod.cos.tx.xmcdn.com/group31/M0A/21/AD/wKgJSVmBku_ANXULAOBNF_Mwy-o627.m4a"
    }
})