(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-exampaperlist-list"],{"0247":function(t,e,i){"use strict";var n={"mescroll-uni":i("f05e").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"flex flex-between flex-align-center pl15 pb30"},[i("v-uni-text",{staticClass:"f28 col3"},[t._v("知识竞赛列表")])],1),t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"listm flex flex-between",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onDetailTap(e.id)}}},[i("v-uni-image",{staticClass:"listmpic mt10",attrs:{src:"/static/exam-index/paper.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"listmr"},[i("v-uni-view",{staticClass:"col3 f30 elip mb15"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"colb f24 lh35"},[t._v("竞赛时长："+t._s(e.time)+"分钟")]),i("v-uni-view",{staticClass:"flex flex-align-center mt20"},[i("v-uni-text",{staticClass:"colb f25"},[i("v-uni-button",{staticClass:"cu-btn bg-green shadow"},[t._v("点击竞赛")])],1)],1)],1)],1)}))],2)],1)],1)},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},5968:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'uni-view[data-v-2b30b9b6]{font-family:"\\5FAE\\8F6F\\96C5\\9ED1";font-size:%?30?%}uni-page-body[data-v-2b30b9b6]{background:#ededed}.header[data-v-2b30b9b6]{background:#f39800;padding:%?15?% %?20?% %?255?%;position:relative}.ssbox[data-v-2b30b9b6]{background:hsla(0,0%,100%,.35);width:%?530?%;border-radius:%?60?%;padding:%?10?% %?15?%;box-sizing:border-box}.ss_input[data-v-2b30b9b6]{border:none;width:%?450?%;font-size:%?30?%;color:#fff;background:none;height:%?45?%;line-break:%?45?%}.headerb[data-v-2b30b9b6]{position:absolute;left:0;top:%?60?%;width:100%;box-sizing:border-box;padding:0 %?20?%}.headerb uni-image[data-v-2b30b9b6]{width:%?710?%;box-shadow:0 %?10?% 10px rgba(0,0,0,.3);border-radius:%?40?%;position:relative;z-index:10}.notice[data-v-2b30b9b6]{position:relative;z-index:5;padding:0 %?50?%}.noticem[data-v-2b30b9b6]{background:#fff;padding:%?55?% %?30?% %?15?%;border-radius:%?10?%;box-shadow:0 0 10px rgba(0,0,0,.3);margin-top:%?-45?%}.noticer[data-v-2b30b9b6]{width:%?480?%;height:%?50?%}.noticer .swiper-item[data-v-2b30b9b6]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;height:%?50?%;line-height:%?50?%;font-size:%?24?%}.list[data-v-2b30b9b6]{padding:%?50?% %?20?% %?20?%}.listm[data-v-2b30b9b6]{background:#fff;border-radius:%?15?%;box-shadow:0 0 10px rgba(0,0,0,.3);margin-bottom:%?20?%;padding:%?30?%}.listmpic[data-v-2b30b9b6]{border-radius:%?10?%;width:%?166?%}.listmr[data-v-2b30b9b6]{width:%?460?%;display:inline-block}\n\n\n\n\n\n\n\n\n\nbody.?%PAGE?%[data-v-2b30b9b6]{background:#ededed}',""]),t.exports=e},"95af":function(t,e,i){var n=i("5968");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("984fa6ac",n,!0,{sourceMap:!1,shadowMode:!1})},ab3e:function(t,e,i){"use strict";i.r(e);var n=i("0247"),a=i("ecb3");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("ed09");var r,o=i("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"2b30b9b6",null,!1,n["a"],r);e["default"]=l.exports},ecb3:function(t,e,i){"use strict";i.r(e);var n=i("fc5c"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},ed09:function(t,e,i){"use strict";var n=i("95af"),a=i.n(n);a.a},fc5c:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("3b8d")),s={data:function(){return{list:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},CustomBar:"0",userid:""}},onLoad:function(t){this.userid=uni.getStorageSync("userid"),this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.list("exampaper",{page:e.num,limit:e.size,status:1});case 2:i=t.sent,1==e.num&&(this.list=[]),this.list=this.list.concat(i.data.list),0==i.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onDetailTap:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.deleteRecords(this.userid,e);case 2:this.$utils.jump("./exam?id=".concat(e));case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),search:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.mescroll.num=1,e={page:this.mescroll.num,limit:this.mescroll.size},t.next=4,this.$api.list("exampaper",e);case 4:i=t.sent,1==this.mescroll.num&&(this.list=[]),this.list=this.list.concat(i.data.list),0==i.data.list.length&&(this.hasNext=!1),this.mescroll.endSuccess(this.mescroll.size,this.hasNext);case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=s}}]);