(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67662b4a"],{"261e":function(t,e,s){},"2e4e":function(t,e,s){},"395a":function(t,e,s){"use strict";var i=s("d07f"),a=s.n(i);a.a},"3a68":function(t,e,s){"use strict";var i=s("7504"),a=s.n(i);a.a},"456d":function(t,e,s){var i=s("4bf8"),a=s("0d58");s("5eda")("keys",(function(){return function(t){return a(i(t))}}))},"5d6e":function(t,e,s){"use strict";var i=s("8577"),a=s.n(i);a.a},"5eda":function(t,e,s){var i=s("5ca1"),a=s("8378"),n=s("79e5");t.exports=function(t,e){var s=(a.Object||{})[t]||Object[t],o={};o[t]=e(s),i(i.S+i.F*n((function(){s(1)})),"Object",o)}},6570:function(t,e,s){"use strict";var i=s("beec"),a=s.n(i);a.a},"672c":function(t,e,s){"use strict";var i=s("c0ed"),a=s.n(i);a.a},"6ab7":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"detail"}},[s("detail-nav",{ref:"nav",staticClass:"detail-nav",on:{itemClick:t.itemClick}}),s("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3},on:{scroll:t.contentScroll}},[s("detail-swiper",{attrs:{"top-images":t.topImages}}),s("detail-base-info",{attrs:{goods:t.goods}}),s("detail-shop-info",{attrs:{shop:t.shop}}),s("detail-goods-info",{attrs:{"detail-info":t.detailInfo},on:{itemImageLoad:t.itemImageLoad}}),s("detail-param-info",{ref:"param",attrs:{paramInfo:t.paramInfo}}),s("detail-comment-info",{ref:"comment",attrs:{commentInfo:t.commentInfo}}),s("goods-list",{ref:"recommend",attrs:{goods:t.recommend}})],1),s("detail-bottom-bar",{on:{addToCart:t.addToCart}}),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick(e)}}})],1)},a=[],n=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),o=(s("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav-bar",[i("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[i("img",{attrs:{src:s("7a74"),alt:""}})]),i("div",{staticClass:"detail",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,s){return i("div",{key:e,staticClass:"detail-item",class:{active:t.currentIndex===s},on:{click:function(e){return t.itemClick(s)}}},[t._v("\n              "+t._s(e)+"\n          ")])})),0)])],1)}),c=[],r=s("a7ac"),l={name:"DetailNav",components:{NavBar:r["a"]},data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("itemClick",t)},backClick:function(){this.$router.back()}}},f=l,d=(s("89ef"),s("2877")),u=Object(d["a"])(f,o,c,!1,null,"1a34dee8",null),m=u.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail-swiper"},[s("swiper",{staticClass:"swiper1"},t._l(t.topImages,(function(t){return s("swiper-item",{key:t,staticClass:"swiper-item"},[s("img",{attrs:{src:t,alt:""}})])})),1)],1)},v=[],h=s("dc2c"),g={name:"DetailSwiper",components:{Swiper:h["a"],SwiperItem:h["b"]},props:{topImages:{type:Array,defalut:function(){return[]}}}},_=g,C=(s("aa11"),Object(d["a"])(_,p,v,!1,null,"3ec208b2",null)),b=C.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.goods).length?s("div",{staticClass:"base-info"},[s("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),s("div",{staticClass:"info-price"},[s("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),s("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),t.goods.discount?s("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))]):t._e()]),s("div",{staticClass:"info-other"},[s("span",[t._v(t._s(t.goods.columns[0]))]),s("span",[t._v(t._s(t.goods.columns[1]))]),s("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),s("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(e){return s("span",{key:e,staticClass:"info-service-item"},[s("img",{attrs:{src:t.goods.services[e-1].icon}}),s("span",[t._v(t._s(t.goods.services[e-1].name))])])})),0)]):t._e()},y=[],k={name:"DetailBaseInfo",props:{goods:{type:Object,default:function(){return{}}}}},O=k,w=(s("6570"),Object(d["a"])(O,I,y,!1,null,"7e1d4838",null)),L=w.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-info"},[s("div",{staticClass:"shop-top"},[s("img",{attrs:{src:t.shop.logo}}),s("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),s("div",{staticClass:"shop-middle"},[s("div",{staticClass:"shop-middle-item shop-middle-left"},[s("div",{staticClass:"info-sells"},[s("div",{staticClass:"sells-count"},[t._v("\n          "+t._s(t._f("sellCountFiler")(t.shop.sells))+"\n        ")]),s("div",{staticClass:"sells-text"},[t._v("总销量")])]),s("div",{staticClass:"info-goods"},[s("div",{staticClass:"goods-count"},[t._v("\n          "+t._s(t.shop.goodsCount)+"\n        ")]),s("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),s("div",{staticClass:"shop-middle-item shop-middle-right"},[s("table",t._l(t.shop.score,(function(e,i){return s("tr",{key:i},[s("td",[t._v(t._s(e.name))]),s("td",{staticClass:"score",class:{"score-better":e.isBetter}},[t._v(t._s(e.score))]),s("td",{staticClass:"better",class:{"better-more":e.isBetter}},[s("span",[t._v(t._s(e.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-bottom"},[s("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],T={name:"DetailShopInfo",props:{shop:{type:Object}},filters:{sellCountFiler:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}},x=T,D=(s("f813"),Object(d["a"])(x,S,j,!1,null,"791ae043",null)),$=D.exports,P=s("5d17"),E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.detailInfo).length?s("div",{staticClass:"goods-info"},[s("div",{staticClass:"info-desc clear-fix"},[s("div",{staticClass:"start"}),s("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),s("div",{staticClass:"end"})]),s("div",{staticClass:"info-key"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),s("div",{staticClass:"info-list"},t._l(t.detailInfo.detailImage[0].list,(function(e,i){return s("img",{key:i,attrs:{src:e},on:{load:t.itemImageLoad}})})),0)]):t._e()},B=[],Y={name:"DetailGoodsInfo",props:{detailInfo:{type:Object}},data:function(){return{counter:0,imagesLength:0}},methods:{itemImageLoad:function(){++this.counter===this.imagesLength&&this.$emit("itemImageLoad")}},watch:{detailInfo:function(){this.imagesLength=this.detailInfo.detailImage[0].list.length}}},M=Y,N=(s("395a"),Object(d["a"])(M,E,B,!1,null,"c124c8f8",null)),G=N.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.paramInfo).length?s("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(e,i){return s("table",{key:i,staticClass:"info-size"},t._l(e,(function(e,i){return s("tr",{key:i},t._l(e,(function(e,i){return s("td",{key:i},[t._v(t._s(e))])})),0)})),0)})),s("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(e,i){return s("tr",{key:i},[s("td",{staticClass:"info-param-key"},[t._v(t._s(e.key))]),s("td",{staticClass:"param-value"},[t._v(t._s(e.value))])])})),0),0!==t.paramInfo.image.length?s("div",{staticClass:"info-img"},[s("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},V=[],A={name:"DetailParamInfo",props:{paramInfo:{type:Object}}},R=A,H=(s("3a68"),Object(d["a"])(R,F,V,!1,null,"45a20a56",null)),z=H.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[0!==Object.keys(t.commentInfo).length?s("div",{staticClass:"comment-info"},[t._m(0),s("div",{staticClass:"info-user"},[s("img",{attrs:{src:t.commentInfo.user.avatar}}),s("span",[t._v(t._s(t.commentInfo.user.uname))])]),s("div",{staticClass:"info-detail"},[s("p",[t._v(t._s(t.commentInfo.content))]),s("div",{staticClass:"info-other"},[s("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),s("span",[t._v(t._s(t.commentInfo.style))])]),s("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return s("img",{key:e,attrs:{src:t}})})),0)])]):t._e()])},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info-header"},[s("div",{staticClass:"header-title"},[t._v("用户评价")]),s("div",{staticClass:"header-more"},[t._v("\n        更多\n        "),s("i",{staticClass:"arrow-right"})])])}],K=s("95fe"),U={name:"DetailCommentInfo",props:{commentInfo:{type:Object}},filters:{showDate:function(t){var e=new Date(1e3*t);return Object(K["b"])(e,"yyyy/MM/dd")}}},X=U,Q=(s("5d6e"),Object(d["a"])(X,J,q,!1,null,"384bc1fa",null)),W=Q.exports,Z=s("6d71"),tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-bar"},[t._m(0),s("div",{staticClass:"bar-item bar-right"},[s("div",{staticClass:"cart",on:{click:t.addToCart}},[t._v("加入购物车")]),s("div",{staticClass:"buy"},[t._v("购买")])])])},et=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bar-item bar-left"},[s("div",[s("i",{staticClass:"icon service"}),s("span",{staticClass:"text"},[t._v("客服")])]),s("div",[s("i",{staticClass:"icon shop"}),s("span",{staticClass:"text"},[t._v("店铺")])]),s("div",[s("i",{staticClass:"icon select"}),s("span",{staticClass:"text"},[t._v("收藏")])])])}],st={name:"DetailBottomBar",methods:{addToCart:function(){this.$emit("addToCart")}}},it=st,at=(s("a8ae"),Object(d["a"])(it,tt,et,!1,null,"15156587",null)),nt=at.exports;s("7f7f");function ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var ct=s("1bab");function rt(t){return Object(ct["a"])({url:"/detail",params:{iid:t}})}function lt(){return Object(ct["a"])({url:"/recommend"})}var ft=function t(e,s,i){ot(this,t),this.title=e.title,this.desc=e.desc,this.newPrice=e.price,this.oldPrice=e.oldPrice,this.discount=e.discountDesc,this.columns=s,this.services=i,this.nowPrice=e.highNowPrice,this.realPrice=e.lowNowPrice},dt=function t(e){ot(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods},ut=function t(e,s){ot(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=s.tables},mt=s("eecb"),pt=s("2f62");function vt(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function ht(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?vt(s,!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):vt(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var gt={name:"Detail",components:{DetailNav:m,DetailSwiper:b,DetailBaseInfo:L,DetailShopInfo:$,DetailGoodsInfo:G,DetailParamInfo:z,DetailCommentInfo:W,DetailBottomBar:nt,Scroll:P["a"],GoodsList:Z["a"]},mixins:[mt["b"],mt["a"]],data:function(){return{iid:0,topImages:[],goods:{},shop:{},detailInfo:{},paramInfo:{},commentInfo:{},recommend:[],navYs:[],getThemeTopY:null,currentIndex:0}},created:function(){var t=this;this.iid=this.$route.params.iid,rt(this.iid).then((function(e){var s=e.data.result;t.topImages=s.itemInfo.topImages,t.goods=new ft(s.itemInfo,s.columns,s.shopInfo.services),t.shop=new dt(s.shopInfo),t.detailInfo=s.detailInfo,t.paramInfo=new ut(s.itemParams.info,s.itemParams.rule),0!==s.rate.cRate&&(t.commentInfo=s.rate.list[0])})),lt().then((function(e){t.recommend=e.data.data.list})),this.getThemeTopY=Object(K["a"])((function(){t.navYs=[],t.navYs.push(0),t.navYs.push(t.$refs.param.$el.offsetTop+-44),t.navYs.push(t.$refs.comment.$el.offsetTop+-44),t.navYs.push(t.$refs.recommend.$el.offsetTop+-44),t.navYs.push(Number.MAX_VALUE)}),500)},mounted:function(){},destroyed:function(){this.$bus.$off("itemImageLoad",this.itemListener)},methods:ht({},Object(pt["b"])(["addCart"]),{itemImageLoad:function(){this.$refs.scroll.refresh(),this.getThemeTopY()},itemClick:function(t){this.$refs.scroll.scrollTo(0,-this.navYs[t],100)},contentScroll:function(t){for(var e=-t.y,s=this.navYs.length,i=0;i<s-1;i++)this.currentIndex!==i&&i<s-1&&e>=this.navYs[i]&&e<this.navYs[i+1]&&(this.currentIndex=i,this.$refs.nav.currentIndex=this.currentIndex);this.listenShopBack(t)},addToCart:function(){var t=this,e={};e.image=this.topImages[0],e.title=this.goods.title,e.desc=this.goods.desc,e.price=this.goods.realPrice,e.iid=this.iid,this.addCart(e).then((function(e){t.$toast.show(e,1e3)}))}})},_t=gt,Ct=(s("672c"),Object(d["a"])(_t,i,a,!1,null,"6ec178dc",null));e["default"]=Ct.exports},7504:function(t,e,s){},"7a74":function(t,e,s){t.exports=s.p+"img/back.26df9036.svg"},"7f7f":function(t,e,s){var i=s("86cc").f,a=Function.prototype,n=/^\s*function ([^ (]*)/,o="name";o in a||s("9e1e")&&i(a,o,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},8577:function(t,e,s){},"89ef":function(t,e,s){"use strict";var i=s("2e4e"),a=s.n(i);a.a},"8e6e":function(t,e,s){var i=s("5ca1"),a=s("990b"),n=s("6821"),o=s("11e9"),c=s("f1ae");i(i.S,"Object",{getOwnPropertyDescriptors:function(t){var e,s,i=n(t),r=o.f,l=a(i),f={},d=0;while(l.length>d)s=r(i,e=l[d++]),void 0!==s&&c(f,e,s);return f}})},"990b":function(t,e,s){var i=s("9093"),a=s("2621"),n=s("cb7c"),o=s("7726").Reflect;t.exports=o&&o.ownKeys||function(t){var e=i.f(n(t)),s=a.f;return s?e.concat(s(t)):e}},"9d58":function(t,e,s){},a8ae:function(t,e,s){"use strict";var i=s("9d58"),a=s.n(i);a.a},a9c0:function(t,e,s){},aa11:function(t,e,s){"use strict";var i=s("261e"),a=s.n(i);a.a},ac6a:function(t,e,s){for(var i=s("cadf"),a=s("0d58"),n=s("2aba"),o=s("7726"),c=s("32e9"),r=s("84f2"),l=s("2b4c"),f=l("iterator"),d=l("toStringTag"),u=r.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=a(m),v=0;v<p.length;v++){var h,g=p[v],_=m[g],C=o[g],b=C&&C.prototype;if(b&&(b[f]||c(b,f,u),b[d]||c(b,d,g),r[g]=u,_))for(h in i)b[h]||n(b,h,i[h],!0)}},beec:function(t,e,s){},c0ed:function(t,e,s){},d07f:function(t,e,s){},f1ae:function(t,e,s){"use strict";var i=s("86cc"),a=s("4630");t.exports=function(t,e,s){e in t?i.f(t,e,a(0,s)):t[e]=s}},f813:function(t,e,s){"use strict";var i=s("a9c0"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-67662b4a.ea40633b.js.map