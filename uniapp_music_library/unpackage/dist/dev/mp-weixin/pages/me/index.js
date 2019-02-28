require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{27:function(e,t,n){"use strict";var r=s(n(2)),o=s(n(28));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,r.default)(o.default))},28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(30),o=n.n(r),s=n(35),a=!1;var i=function(e){a||n(29)},u=n(0)(o.a,s.a,i,null,null);u.options.__file="E:\\我的资料\\mytest\\uniapp\\我的音乐 - 副本\\pages\\me\\index.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},29:function(e,t){},30:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(4),a=n(3),i=n(31),u=(r=i)&&r.__esModule?r:{default:r};t.default={data:function(){return{userInfo:{avatarUrl:"/static/img/unlogin.png",nickName:""},rewardImg:"https://www.burtyang.top:8080/static/img/reward.jpg"}},created:function(){this.userInfo=e.getStorageSync("userInfo")||this.userInfo},components:{YearProgress:u.default},methods:{addBook:function(t){(0,a.post)(s.addBookUrl,{isbn:t,uid:this.userInfo.uid,nickname:this.userInfo.nickName},!0).then(function(n){e.hideLoading(),"OK"==n.data?(0,a.showToast)(n.title+"添加成功"):"Not exists"==n.data?e.showModal({title:"未找到",content:t+":编号图书未找到",showCancel:!1}):"Exists"==n.data?e.showModal({title:"重复添加",content:n.title+"被添加过了",showCancel:!1}):e.showModal({title:"其它错误",showCancel:!1})})},scanBook:function(){var t=this;e.showLoading({title:"加载中..."}),e.scanCode({success:function(e){var n=e.result;n&&t.addBook(n)},fail:function(){(0,a.showToast)("扫描失败")}})},onGotUserInfo:function(t){var n=this,r=t.target;e.getStorageSync("userInfo")||new Promise(function(t,n){e.login({success:function(e){var n=e.code;t(n)}})}).then(function(t){e.showLoading({title:"登陆中..."});var i={code:t,userInfo:{avatarUrl:r.userInfo.avatarUrl,city:r.userInfo.city,country:r.userInfo.country,gender:r.userInfo.gender,language:r.userInfo.language,nickName:r.userInfo.nickName,province:r.userInfo.province}};(0,a.get)(s.loginUrl,i,!0).then(function(t){console.log(t,11);var r=t.uid,s=o({uid:r},i.userInfo);e.setStorageSync("userInfo",s),n.userInfo=s,e.hideLoading()}).catch(function(e){(0,a.showToast)("登陆失败")})})},previewImage:function(t){var n=t.target.dataset.src;e.previewImage({current:n,urls:[n]})}}}}).call(t,n(1).default)},31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(33),o=n.n(r),s=n(34),a=!1;var i=function(e){a||n(32)},u=n(0)(o.a,s.a,i,"data-v-7b94d74a",null);u.options.__file="E:\\我的资料\\mytest\\uniapp\\我的音乐 - 副本\\components\\YearProgress.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] YearProgress.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},32:function(e,t){},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},created:function(){},methods:{getDayOfYear:function(){return this.isLeapYear?366:355},isLeapYear:function(){return this.year%400==0||this.year%4==0&&year%100!=0}},computed:{year:function(){return(new Date).getFullYear()},days:function(){var e=new Date;e.setMonth(0),e.setDate(1);var t=Date.now()-e.getTime();return Math.floor(t/1e3/60/60/24)+1},progressData:function(){return(100*this.days/this.getDayOfYear()).toFixed(1)}}}},34:function(e,t,n){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"progressbar"},[t("progress",{attrs:{percent:this.progressData,"stroke-width":"8","show-info":"",activeColor:"#EA5A49",backgroundColor:"#333",active:"true"}}),t("p",{staticClass:"tip"},[this._v(this._s(this.year)+"年已经过去的"+this._s(this.days)+"天")])],1)};r._withStripped=!0;var o={render:r,staticRenderFns:[]};t.a=o},35:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"userinfo"},[n("img",{attrs:{src:e.userInfo.avatarUrl,alt:""}}),e.userInfo.nickName?n("p",{staticClass:"nickname"},[e._v(e._s(e.userInfo.nickName))]):n("button",{staticClass:"login-btn",attrs:{"open-type":"getUserInfo",eventid:"PdB-0"},on:{getuserinfo:e.onGotUserInfo}},[e._v("点击登陆")])],1),n("YearProgress",{attrs:{mpcomid:"4P1-0"}}),n("button",{directives:[{name:"show",rawName:"v-show",value:e.userInfo.nickName,expression:"userInfo.nickName"}],staticClass:"btn",attrs:{eventid:"6qh-1"},on:{click:e.scanBook}},[e._v("添加图书")]),n("div",{staticClass:"reward-div"},[n("image",{attrs:{src:e.rewardImg,"data-src":e.rewardImg,eventid:"sBu-2"},on:{click:e.previewImage}}),n("p",[e._v("点击预览图片，长按图片扫一扫")])],1)],1)};r._withStripped=!0;var o={render:r,staticRenderFns:[]};t.a=o}},[27]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/me/index.js.map