require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{62:function(t,s,a){"use strict";var e=n(a(2)),i=n(a(63));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},63:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(65),i=a.n(e),n=a(66);var o=function(t){a(64)},c=a(0)(i.a,n.a,o,"data-v-6d2f0cf0",null);s.default=c.exports},64:function(t,s){},65:function(t,s,a){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0});var e,i=a(3),n=a(4),o=a(8),c=(e=o)&&e.__esModule?e:{default:e};s.default={data:function(){return{userInfo:{},isbn:"",info:{},comment:"",location:"",phoneMode:""}},mounted:function(){this.isbn=this.$root.$mp.query.isbn,this.userInfo=t.getStorageSync("userInfo"),this.getDetail(),this.getPhone()},components:{MyRate:c.default},methods:{getDetail:function(){var s=this;(0,i.post)(n.bookDetailUrl,{isbn:s.isbn}).then(function(a){if(console.log(a),a){var e=a;e.tags=e.tags.split(","),e.summary=e.summary.trim().split("\n"),s.info=e,t.setNavigationBarTitle({title:e.bookname.slice(0,15)})}else(0,i.showToast)("书籍不存在")},!0)},getGeo:function(s){if(this.location)this.location="";else{var a=this;t.getLocation({success:function(s){var e=s.latitude,i=s.longitude;if(e&&i){t.request({url:"https://api.map.baidu.com/geocoder/v2/",data:{location:e+","+i,ak:"Y7W2Yg6SNMF3HYF6GWGcoH4tLzC2gCZP",output:"json"},method:"GET",success:function(t){if(200===t.statusCode){var s=t.data.result.addressComponent.city;a.location=s}else a.location="未知地点"}})}}})}},getPhone:function(){var t=wx.getSystemInfoSync();this.phoneMode=t.model},addComment:function(){var s=this.comment.trim();if(s){s=s.replace(/[\<\>]/g,"");var a={uid:this.userInfo.uid,uploadPersonName:this.userInfo.nickName,isbn:this.isbn,phoneMode:this.phoneMode,location:this.location||"",comment:s,bookname:this.info.bookname};(0,i.post)(n.bookAddComment,a).then(function(s){"OK"==s.data?t.showToast({title:"评论成功"}):"Exists"==s.data&&t.showModal({title:"已经评论过了",content:"",showCancel:!1})},!0)}}},onShareAppMessage:function(){return{title:this.info.bookname,desc:"分享给您一本好书:"+this.info.bookname,path:"/pages/detail/main?isbn="+this.info.ISBN}}}}).call(s,a(1).default)},66:function(t,s,a){"use strict";var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"detail-div"},[a("div",{staticClass:"thumb"},[a("img",{staticClass:"back",attrs:{src:t.info.imgUrl,alt:"",mode:"aspectFill"}}),a("div",{staticClass:"front-div"},[a("img",{staticClass:"small-img",attrs:{src:t.info.imgUrl,alt:"",mode:"aspectFit"}}),a("p",{staticClass:"bookname"},[t._v(t._s(t.info.bookname))]),a("p",{staticClass:"author"},[t._v(t._s(t.info.author))])],1)]),a("div",{staticClass:"owner"},[a("div",{staticClass:"left person-div"},[a("img",{attrs:{src:t.info.avatar,mode:"aspectFit"}}),a("span",{staticClass:"nickname"},[t._v(t._s(t.info.uploadPersonName))])]),a("span",{staticClass:"right"},[t._v("\n            "+t._s(t.info.rate)+"分 "),a("MyRate",{attrs:{value:t.info.rate,mpcomid:"RF5-0"}})],1),a("div",{staticClass:"publish-info clear"},[a("span",[t._v(t._s(t.info.publisher))]),a("span",{staticClass:"right"},[t._v(t._s(t.info.price)+"元")])]),a("div",{staticClass:"tags-info clear"},t._l(t.info.tags,function(s,e){return a("span",{key:e,staticClass:"badge"},[t._v("\n                "+t._s(s)+"\n            ")])})),a("div",{staticClass:"summary clear"},t._l(t.info.summary,function(s,e){return a("p",{key:e},[t._v("\n                "+t._s(s)+"\n            ")])}))]),a("div",{staticClass:"comment"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"textarea",attrs:{maxlength:"100",placeholder:"sorry个人开发者，不允许评论模块。",disabled:"true",eventid:"rLt-0"},domProps:{value:t.comment},on:{input:function(s){s.target.composing||(t.comment=s.target.value)}}}),a("div",{staticClass:"phone"},[t._v("\n            手机型号：\n            "),a("span",{staticClass:"text-primary"},[t._v(t._s(t.phoneMode))])]),a("div",{staticClass:"location"},[t._v("\n            地理位置：\n            "),a("switch",{staticClass:"right",attrs:{color:"#EA5A49",eventid:"XgW-1"},on:{click:t.getGeo}}),a("span",{staticClass:"text-primary"},[t._v(t._s(t.location))])])]),a("button",{staticClass:"btn",attrs:{"open-type":"share"}},[t._v("转发给好友")])],1)},staticRenderFns:[]};s.a=e}},[62]);