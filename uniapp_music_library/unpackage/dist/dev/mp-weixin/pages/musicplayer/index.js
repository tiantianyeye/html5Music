require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{36:function(t,i,n){"use strict";var e=o(n(2)),s=o(n(37));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(s.default))},37:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n(39),s=n.n(e),o=n(40),a=!1;var r=function(t){a||n(38)},c=n(0)(s.a,o.a,r,"data-v-1739ef05",null);c.options.__file="E:\\我的资料\\mytest\\uniapp\\我的音乐 - 副本\\pages\\musicplayer\\index.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),i.default=c.exports},38:function(t,i){},39:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0});var e=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},s=n(6),o=n(3),a=n(4);i.default={data:function(){return{songDetail:"",chooseIndex:0,currentTime:0,tempCurrentTime:0,dealTotalTime:0,bgAudioMannager:"",topDistance:0}},onShow:function(){this.chooseIndex=this.$root.$mp.query.index;t.setNavigationBarTitle({title:this.musicDetailInfo.audio_name}),this.bgAudioMannager=this.globalData.bgAudioMannager,this.dealTotalTime=(0,o.secondToMinute)(this.musicDetailInfo.timelength),this.setBgMusic(),this.setMusicMonitor()},computed:e({},(0,s.mapGetters)(["songList","musicDetailInfo","isPlaying"]),{dealCurrentTime:function(){return(0,o.secondToMinute)(this.currentTime)},currentPrecent:function(){return this.dealCurrentTime?Math.round(100*this.currentTime/this.musicDetailInfo.timelength):0},lyricsArr:function(){var t=[],i=[];return this.musicDetailInfo.lyrics.split("[").slice(1).map(function(n,e){var s=(n=n.trim().split("]"))[0].split(":"),o=60*Number(s[0])*1e3+1e3*Number(s[1].split(".")[0])+Number(s[1].split(".")[1]);t.push(o),i.push(n[1])}),{timeArrs:t,lyricsList:i}}}),methods:{setBgMusic:function(){var t=this.musicDetailInfo;this.bgAudioMannager.title=t.song_name,this.bgAudioMannager.singer=t.author_name,this.bgAudioMannager.coverImgUrl=t.img,this.bgAudioMannager.src=t.play_url},getSongDetailInfo:function(t){var i=this;i.chooseIndex=t;var n=i.songList[t].FileHash;(0,o.get)(a.playUrl,{r:"play/getdata",hash:n}).then(function(t){i.$store.dispatch("setSongDetailInfo",t),i.playMusic()})},playMusic:function(){this.$store.dispatch("setMusicPlay");var t=this.musicDetailInfo;this.bgAudioMannager.stop(),this.bgAudioMannager.title=t.song_name,this.bgAudioMannager.singer=t.author_name,this.bgAudioMannager.coverImgUrl=t.img,this.bgAudioMannager.src=t.play_url,this.bgAudioMannager.play()},prevSong:function(){var t=this.chooseIndex-1;t=t<0?0:t,this.getSongDetailInfo(t)},nextSong:function(){var t=this.chooseIndex+1;t=t>=this.songList.length?0:t,this.getSongDetailInfo(t)},isRewind:function(t){if(this.isPlaying){var i,n=this.bgAudioMannager.currentTime;t?(n=(n-=5)<0?0:n,i="快退5s"):(n=(n+=5)>this.bgAudioMannager.duration?this.bgAudioMannager.duration:n,i="快进5s"),this.bgAudioMannager.seek(n),(0,o.showToast)(i)}},onMusicTap:function(){this.isPlaying?(this.bgAudioMannager.pause(),this.$store.dispatch("setMusicPause")):(this.bgAudioMannager.play(),this.$store.dispatch("setMusicPlay"))},setMusicMonitor:function(){var t=this,i=this;this.bgAudioMannager.onPlay(function(){i.$store.dispatch("setMusicPlay")}),this.bgAudioMannager.onPause(function(){i.$store.dispatch("setMusicPause")}),this.bgAudioMannager.onPrev(function(){i.prevSong()}),this.bgAudioMannager.onNext(function(){i.nextSong()}),this.bgAudioMannager.onTimeUpdate(function(){i.currentTime=1e3*i.bgAudioMannager.currentTime,i.currentTime>4e3&&t.tempCurrentTime!=t.currentTime&&(i.tempCurrentTime=i.currentTime,i.lyricsArr.timeArrs.forEach(function(t,n){parseInt(t/1e3)!=parseInt(i.currentTime/1e3)||(i.topDistance=-25*(n-4))}))}),this.bgAudioMannager.onEnded(function(){i.$store.dispatch("setMusicPause");var t=i.chooseIndex+1;t=t>=i.songList.length?0:t,i.chooseIndex=t,i.getSongDetailInfo(t)})},downloadSong:function(){var i=this.musicDetailInfo.play_url;t.showModal({title:"音乐下载地址",content:i,showCancel:!0,confirmText:"复制",success:function(n){n.confirm&&t.setClipboardData({data:i,success:function(){(0,o.showToast)("复制成功","success")},fail:function(){(0,o.showToast)("复制失败，请重新复制")}})}})}}}}).call(i,n(1).default)},40:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"musicplayer-div"},[n("image",{staticClass:"bgImg",attrs:{src:t.musicDetailInfo.img}}),n("div",{staticClass:"music-div"},[n("div",{staticClass:"geci-div"},[n("div",{staticClass:"pos-div",style:{top:t.topDistance+"px"}},t._l(t.lyricsArr.lyricsList,function(i,e,s){return n("p",{key:s,class:{active:e<t.lyricsArr.lyricsList.length-1?t.currentTime>3e3&&t.currentTime>=t.lyricsArr.timeArrs[e]&&t.currentTime<=t.lyricsArr.timeArrs[e+1]:t.currentTime>t.lyricsArr.timeArrs[e]}},[t._v("\n\t\t\t\t\t"+t._s(i)+"\n\t\t\t\t")])}))])]),n("div",{staticClass:"controls-group-div"},[n("div",{staticClass:"progress-div"},[n("span",[t._v(t._s(t.dealCurrentTime))]),n("progress",{attrs:{percent:t.currentPrecent,"stroke-width":"5",backgroundColor:"#dcdcdc",activeColor:"#3195fd"}}),n("span",[t._v(t._s(t.dealTotalTime))])],1),n("div",{staticClass:"control-div"},[n("div",{staticClass:"space"}),n("div",{staticClass:"control-btn"},[n("i",{staticClass:"iconfont icon-kuaijin-copy",attrs:{eventid:"wCs-0"},on:{click:function(i){i.stopPropagation(),t.prevSong(i)}}}),n("i",{staticClass:"iconfont icon-shangyishou",attrs:{eventid:"K6p-1"},on:{click:function(i){i.stopPropagation(),t.isRewind(!0)}}}),n("i",{staticClass:"iconfont icon-Icon-pause",class:[t.isPlaying?"icon-Icon-pause":"icon-zanting"],attrs:{eventid:"yyk-2"},on:{click:function(i){i.stopPropagation(),t.onMusicTap(i)}}}),n("i",{staticClass:"iconfont icon-kuaijin1",attrs:{eventid:"kys-3"},on:{click:function(i){i.stopPropagation(),t.isRewind(!1)}}}),n("i",{staticClass:"iconfont icon-kuaijin",attrs:{eventid:"pko-4"},on:{click:function(i){i.stopPropagation(),t.nextSong(i)}}})],1),n("i",{staticClass:"iconfont icon-xiazai download",attrs:{eventid:"Qqd-5"},on:{click:function(i){i.stopPropagation(),t.downloadSong(i)}}})],1)])])};e._withStripped=!0;var s={render:e,staticRenderFns:[]};i.a=s}},[36]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/musicplayer/index.js.map