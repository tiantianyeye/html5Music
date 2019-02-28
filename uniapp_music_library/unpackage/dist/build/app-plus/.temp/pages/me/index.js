require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{27:function(t,e,n){"use strict";var a=s(n(2)),r=s(n(28));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(r.default))},28:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(30),r=n.n(a),s=n(35);var o=function(t){n(29)},i=n(0)(r.a,s.a,o,null,null);e.default=i.exports},29:function(t,e){},30:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a,r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},s=n(4),o=n(3),i=n(31),c=(a=i)&&a.__esModule?a:{default:a};e.default={data:function(){return{userInfo:{avatarUrl:"/static/img/unlogin.png",nickName:""},rewardImg:"https://www.burtyang.top:8080/static/img/reward.jpg"}},created:function(){this.userInfo=t.getStorageSync("userInfo")||this.userInfo},components:{YearProgress:c.default},methods:{addBook:function(e){(0,o.post)(s.addBookUrl,{isbn:e,uid:this.userInfo.uid,nickname:this.userInfo.nickName},!0).then(function(n){t.hideLoading(),"OK"==n.data?(0,o.showToast)(n.title+"添加成功"):"Not exists"==n.data?t.showModal({title:"未找到",content:e+":编号图书未找到",showCancel:!1}):"Exists"==n.data?t.showModal({title:"重复添加",content:n.title+"被添加过了",showCancel:!1}):t.showModal({title:"其它错误",showCancel:!1})})},scanBook:function(){var e=this;t.showLoading({title:"加载中..."}),t.scanCode({success:function(t){var n=t.result;n&&e.addBook(n)},fail:function(){(0,o.showToast)("扫描失败")}})},onGotUserInfo:function(e){var n=this,a=e.target;t.getStorageSync("userInfo")||new Promise(function(e,n){t.login({success:function(t){var n=t.code;e(n)}})}).then(function(e){t.showLoading({title:"登陆中..."});var i={code:e,userInfo:{avatarUrl:a.userInfo.avatarUrl,city:a.userInfo.city,country:a.userInfo.country,gender:a.userInfo.gender,language:a.userInfo.language,nickName:a.userInfo.nickName,province:a.userInfo.province}};(0,o.get)(s.loginUrl,i,!0).then(function(e){console.log(e,11);var a=e.uid,s=r({uid:a},i.userInfo);t.setStorageSync("userInfo",s),n.userInfo=s,t.hideLoading()}).catch(function(t){(0,o.showToast)("登陆失败")})})},previewImage:function(e){var n=e.target.dataset.src;t.previewImage({current:n,urls:[n]})}}}}).call(e,n(1).default)},31:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(33),r=n.n(a),s=n(34);var o=function(t){n(32)},i=n(0)(r.a,s.a,o,"data-v-7b94d74a",null);e.default=i.exports},32:function(t,e){},33:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},created:function(){},methods:{getDayOfYear:function(){return this.isLeapYear?366:355},isLeapYear:function(){return this.year%400==0||this.year%4==0&&year%100!=0}},computed:{year:function(){return(new Date).getFullYear()},days:function(){var t=new Date;t.setMonth(0),t.setDate(1);var e=Date.now()-t.getTime();return Math.floor(e/1e3/60/60/24)+1},progressData:function(){return(100*this.days/this.getDayOfYear()).toFixed(1)}}}},34:function(t,e,n){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progressbar"},[e("progress",{attrs:{percent:this.progressData,"stroke-width":"8","show-info":"",activeColor:"#EA5A49",backgroundColor:"#333",active:"true"}}),e("p",{staticClass:"tip"},[this._v(this._s(this.year)+"年已经过去的"+this._s(this.days)+"天")])],1)},staticRenderFns:[]};e.a=a},35:function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"userinfo"},[n("img",{attrs:{src:t.userInfo.avatarUrl,alt:""}}),t.userInfo.nickName?n("p",{staticClass:"nickname"},[t._v(t._s(t.userInfo.nickName))]):n("button",{staticClass:"login-btn",attrs:{"open-type":"getUserInfo",eventid:"LHv-0"},on:{getuserinfo:t.onGotUserInfo}},[t._v("点击登陆")])],1),n("YearProgress",{attrs:{mpcomid:"9PG-0"}}),n("button",{directives:[{name:"show",rawName:"v-show",value:t.userInfo.nickName,expression:"userInfo.nickName"}],staticClass:"btn",attrs:{eventid:"NQG-1"},on:{click:t.scanBook}},[t._v("添加图书")]),n("div",{staticClass:"reward-div"},[n("image",{attrs:{src:t.rewardImg,"data-src":t.rewardImg,eventid:"YRF-2"},on:{click:t.previewImage}}),n("p",[t._v("点击预览图片，长按图片扫一扫")])],1)],1)},staticRenderFns:[]};e.a=a}},[27]);