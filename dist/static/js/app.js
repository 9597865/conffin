(function(e){function t(t){for(var c,r,a=t[0],l=t[1],u=t[2],p=0,d=[];p<a.length;p++)r=a[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);s&&s(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(c=!1)}c&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},o={app:0},i=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/conffin/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1936:function(e,t,n){e.exports=n.p+"static/img/banner.png"},"1be40":function(e,t,n){},2019:function(e,t,n){e.exports=n.p+"static/img/icon_chuancheng.png"},"548b":function(e,t,n){"use strict";n("5b84")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=n("1250"),i=(n("7437"),Object(c["createElementVNode"])("div",{class:"copyright"},"1960-2021 @郑氏寿材木器厂",-1));function r(e,t,n,o,r,a){var l=Object(c["resolveComponent"])("TopMenu"),u=Object(c["resolveComponent"])("Banner"),s=Object(c["resolveComponent"])("MainList"),p=Object(c["resolveComponent"])("AlertDiv");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(l),Object(c["createVNode"])(u,{bannerPic:r.bannerImg},null,8,["bannerPic"]),Object(c["createVNode"])(s,{datalist:r.pddListData},null,8,["datalist"]),Object(c["createVNode"])(p),i])}Object(c["pushScopeId"])("data-v-c4e62594");var a={class:"bg"},l=Object(c["createElementVNode"])("div",{class:"menu-line"},null,-1),u=[l];function s(e,t,n,o,i,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createElementVNode"])("div",{class:"menu-box",onClick:t[0]||(t[0]=function(){return r.clickFun&&r.clickFun.apply(r,arguments)})},u),i.isShowMenu?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:0,class:"menu-list menu-fade",onClick:t[5]||(t[5]=Object(c["withModifiers"])((function(){return r.clickCloseMenu&&r.clickCloseMenu.apply(r,arguments)}),["stop"]))},[Object(c["createElementVNode"])("div",{style:Object(c["normalizeStyle"])({width:"100%","background-color":"#000","background-image":"url("+i.menuBgImgUrl+")","background-repeat":"no-repeat","background-size":"120px 220px","background-position":"top left"})},[Object(c["createElementVNode"])("div",{class:"menu-item",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(){return r.clickMenu&&r.clickMenu.apply(r,arguments)}),["stop"]))},"木厂简介"),Object(c["createElementVNode"])("div",{class:"menu-item",onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(){return r.clickMenu&&r.clickMenu.apply(r,arguments)}),["stop"]))},"产品介绍"),Object(c["createElementVNode"])("div",{class:"menu-item",onClick:t[3]||(t[3]=Object(c["withModifiers"])((function(){return r.clickMenu&&r.clickMenu.apply(r,arguments)}),["stop"]))},"商务合作"),Object(c["createElementVNode"])("div",{class:"menu-item",onClick:t[4]||(t[4]=Object(c["withModifiers"])((function(){return r.clickMenu&&r.clickMenu.apply(r,arguments)}),["stop"]))},"联系方式")],4)])):Object(c["createCommentVNode"])("",!0)])}Object(c["popScopeId"])();var p={name:"TestCom",props:{title:{type:String,default:""}},data:function(){return{isShowMenu:!1,menuBgImgUrl:n("2019")}},created:function(){console.log(this.$attrs)},methods:{clickFun:function(e){this.isShowMenu=!this.isShowMenu,this.$emit("click-event",e)},clickMenu:function(e){},clickCloseMenu:function(){this.isShowMenu=!1}}};n("cad6");p.render=s,p.__scopeId="data-v-c4e62594";var d=p;Object(c["pushScopeId"])("data-v-488a9aba");var b={class:"",style:{overflow:"auto"}},m={class:"list"},f=["src"];function g(e,t,n,o,i,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",b,[Object(c["createElementVNode"])("ul",m,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.datalist,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:e,class:"list-item",style:Object(c["normalizeStyle"])({width:i.webWidth-i.spaceMargin+"px"})},[Object(c["createElementVNode"])("img",{src:e.thumb},null,8,f)],4)})),128))])])}Object(c["popScopeId"])();var j={props:["datalist"],data:function(){return{count:0,spaceMargin:0,loading:!1,webWidth:document.documentElement.clientWidth,webHeight:document.documentElement.clientHeight}},computed:{noMore:function(){return this.count>=10},disabled:function(){return this.loading||this.noMore}},mounted:function(){this.setWebTitle()},methods:{load:function(){var e=this;this.loading=!0,setTimeout((function(){e.count+=2,e.loading=!1}),2e3)},setWebTitle:function(){document.title="多多捡漏多多进宝"}}};n("d16b");j.render=g,j.__scopeId="data-v-488a9aba";var O=j;Object(c["pushScopeId"])("data-v-11e7468b");var h=Object(c["createElementVNode"])("div",{class:"top-img"},[Object(c["createElementVNode"])("img",{src:"https://www.qiter.com/static/pic/alertImg.png"})],-1),v=Object(c["createElementVNode"])("div",{class:"alert-msg"},[Object(c["createElementVNode"])("div",{class:"shengming"},"声明:"),Object(c["createElementVNode"])("div",null,"1.多多捡漏站商品均来自拼多多商家，精选质优低价格促销。"),Object(c["createElementVNode"])("div",null,"2.本站不留存任何用户数，网友购买产品，均跳转到拼多多电商品。")],-1),k={class:"dialog-footer"},w=Object(c["createTextVNode"])("我已了解");function y(e,t,n,o,i,r){var a=Object(c["resolveComponent"])("el-button"),l=Object(c["resolveComponent"])("el-dialog");return Object(c["openBlock"])(),Object(c["createBlock"])(l,{title:"",modelValue:i.centerDialogVisible,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.centerDialogVisible=e}),width:"80%",center:""},{footer:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("span",k,[Object(c["createVNode"])(a,{type:"danger",onClick:t[0]||(t[0]=function(e){return i.centerDialogVisible=!1})},{default:Object(c["withCtx"])((function(){return[w]})),_:1})])]})),default:Object(c["withCtx"])((function(){return[h,v]})),_:1},8,["modelValue"])}Object(c["popScopeId"])();var M={data:function(){return{centerDialogVisible:!1}}};n("548b");M.render=y,M.__scopeId="data-v-11e7468b";var V=M,E={class:"top60"};function N(e,t,n,o,i,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",E,[Object(c["createElementVNode"])("div",{class:"banner",style:Object(c["normalizeStyle"])({"background-image":"url("+n.bannerPic+")","background-repeat":"no-repeat","background-size":"cover","background-position":"center"})},null,4)])}var B={props:["bannerPic"]};n("b196");B.render=N;var S=B,x={name:"App",data:function(){return{bannerImg:n("1936"),topImgList:["https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b8014a90f603738d8387f7fabd1bb051f919ec1d.jpg","https://t16img.yangkeduo.com/pdd_oms/2020-12-31/8c4982a42171002be033beaf5ad3817d.jpg","https://www.qiter.com/static/pic/banner01.jpeg","https://www.qiter.com/static/pic/banner02.png"],pddListData:[{title:"【包邮】【北极绒】秋冬男女德绒保暖内衣套装无痕加绒加厚加大码秋衣秋裤",priceTop:"67.8",priceBottom:"19.8",date:20210922,thumb:n("6477"),gotourl:"https://p.pinduoduo.com/y5la1qAu"},{title:"【包邮】秋冬新款ins韩版加绒加厚连帽卫衣女潮大码女装外套上衣时尚宽松",priceTop:"69.9",priceBottom:"17.9",date:20210922,thumb:n("6237"),gotourl:"https://p.pinduoduo.com/V3saFOSD"},{title:"【包邮】南极人印花圆领卫衣男秋季新款街头ins潮流嘻哈上衣宽松休闲外套",priceTop:"49.9",priceBottom:"16.9",date:20210922,thumb:n("de15"),gotourl:"https://p.pinduoduo.com/4dearFP1"},{title:"【包邮】南极人印花圆领卫衣男秋季新款街头ins潮流嘻哈上衣宽松休闲外套",priceTop:"39.9",priceBottom:"14.9",date:20210921,thumb:n("b0c6"),gotourl:"https://p.pinduoduo.com/nAqa4r6W"}]}},components:{AlertDiv:V,MainList:O,Banner:S,TopMenu:d}};n("e360");x.render=r;var C=x;document.title="";var _=Object(c["createApp"])(C);_.use(o["a"]),_.mount("#app")},"5b84":function(e,t,n){},6237:function(e,t,n){e.exports=n.p+"static/img/02.png"},6477:function(e,t,n){e.exports=n.p+"static/img/01.png"},"8f2b":function(e,t,n){},b0c6:function(e,t,n){e.exports=n.p+"static/img/04.png"},b196:function(e,t,n){"use strict";n("8f2b")},b34b:function(e,t,n){},cad6:function(e,t,n){"use strict";n("b34b")},d16b:function(e,t,n){"use strict";n("1be40")},de15:function(e,t,n){e.exports=n.p+"static/img/03.png"},e360:function(e,t,n){"use strict";n("e82a")},e82a:function(e,t,n){}});
//# sourceMappingURL=app.js.map