webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("yf3K"),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("duo-paper-cut",{attrs:{width:t.width,height:t.height,srcList:t.srcList,autoPlay:t.autoPlay,interval:t.interval,transition:t.transition,cutsNumber:t.cutsNumber,paginationDirection:t.paginationDirection}})],1)},staticRenderFns:[]};var r=i("C7Lr")({data:function(){return{width:1200,height:560,cutsNumber:18,interval:8e3,autoPlay:!1,transition:1500,paginationDirection:"left-bottom",srcList:["https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg","http://d300.paixin.com/thumbs/1739009/19194001/staff_1024.jpg","https://images.pexels.com/photos/17811/pexels-photo.jpg","http://d300.paixin.com/thumbs/1067920/20205975/staff_1024.jpg"]}}},n,!1,function(t){i("ZiG8")},null,null).exports,s=i("8/MV");a.a.config.productionTip=!1,a.a.use(s.a),new a.a({el:"#app",components:{App:r},template:"<App/>"})},"T+3V":function(t,e){},ZiG8:function(t,e){},mdnc:function(t,e,i){"use strict";var a=i("KH7x"),n=i.n(a),r=(i("T+3V"),{name:"PaperCut",data:function(){return{current:0,timer:null,fragmentWidth:0,paginationDirectionStyle:{}}},props:{paginationDirection:{type:String,default:"right-bottom"},interval:{type:Number,default:2e3},autoPlay:{type:Boolean,default:!0},srcList:{type:Array,default:[]},cutsNumber:{type:Number,default:6},transition:{type:String|Number,default:.5},height:{type:String|Number,default:360},width:{type:String|Number,default:800}},mounted:function(){this.init()},methods:{init:function(){for(var t=this,e=this.cutsNumber,i=this.width/e,a=this.$refs["paper-cut"],n=.5*this.height,r=this.arrayLikeToArray(a.children),s=0,o=0;o<e;o++)o>e/2?s--:s++,this.setStyleByName([{node:r[o],styleName:"transition",styleValue:this.transition+"ms "+80*o+"ms all"},{node:r[o],styleName:"z-index",styleValue:s}]),this.arrayLikeToArray(r[o].children).forEach(function(e){t.setStyleByName(e,"background-position",-i*o+"px")});this.setStyleByName(a,"height",this.height+"px"),r.forEach(function(e){t.setStyleByName(e,"width",i+"px"),e.children[0]&&t.setStyleByName(e.children[0],"transform","translateZ("+n+"px)"),e.children[1]&&t.setStyleByName(e.children[1],"transform","translateZ(-"+n+"px)  rotateX(180deg)"),e.children[2]&&t.setStyleByName([{node:e.children[2],styleName:"top",styleValue:"-"+t.height+"px"},{node:e.children[2],styleName:"transform",styleValue:"translateZ("+n+"px) rotateX(90deg)"}]),e.children[3]&&t.setStyleByName([{node:e.children[3],styleName:"top",styleValue:t.height+"px"},{node:e.children[3],styleName:"transform",styleValue:"translateZ("+n+"px) rotateX(-90deg)"}]),t.arrayLikeToArray(e.children).forEach(function(e){t.setStyleByName(e,"width",Math.ceil(i+5)+"px")})}),this.autoPlay&&this.autoPlayFn(),this.generatePaginationDirectionFn()},generatePaginationDirectionFn:function(){switch(this.paginationDirection){case"right-top":this.paginationDirectionStyle={right:"10%",top:"5px"};break;case"left-top":this.paginationDirectionStyle={left:"10%",top:"5px"};break;case"right-bottom":this.paginationDirectionStyle={right:"10%",bottom:"5px"};break;case"left-bottom":this.paginationDirectionStyle={left:"10%",bottom:"5px"}}},autoPlayFn:function(){var t=this;this.timer=setInterval(function(){t.playFn("+")},this.interval)},playFn:function(t){return"+"===t?++this.current:--this.current,this.current>this.srcList.length-1?(this.current=0,void this.doFn(0)):this.current<0?(this.current=this.srcList.length-1,void this.doFn(this.current)):void this.doFn(this.current)},doFn:function(t){var e=this;this.arrayLikeToArray(this.$refs["paper-cut"].children).forEach(function(i){e.setStyleByName(i,"transform","translateZ(-180px) rotateX("+90*-t+"deg)")})},setStyleByName:function(){var t=function(t){var e=n()(t,3),i=e[0],a=e[1],r=e[2];i&&(i.style[a]=r)};1===arguments.length?this.arrayLikeToArray(arguments)[0].forEach(function(e){t([e.node,e.styleName,e.styleValue])}):t(arguments)},arrayLikeToArray:function(t){return Array.prototype.slice.call(t)},clickAgentFn:function(t){var e=t.target.getAttribute("data-index");switch(t.target.getAttribute("data-paperCut-action")){case"point":clearInterval(this.timer),this.doFn(e),this.current=e,this.autoPlay&&this.autoPlayFn();break;case"prev":clearInterval(this.timer),this.playFn("-"),this.autoPlay&&this.autoPlayFn();break;case"next":clearInterval(this.timer),this.playFn("+"),this.autoPlay&&this.autoPlayFn()}}},beforeDestroy:function(){clearInterval(this.timer)}}),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"duo-paper-cut",style:{width:t.width+"px"},on:{click:t.clickAgentFn}},[i("ul",{ref:"paper-cut",staticClass:"paper-cut",style:{"-webkit-perspective":t.width+"px"}},t._l(t.cutsNumber,function(e){return i("li",{key:e},t._l(t.srcList,function(t,e){return i("span",{key:e,style:{background:"url("+t+")"}})}),0)}),0),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"pagination",style:t.paginationDirectionStyle},t._l(t.srcList,function(e,a){return i("div",{key:a,staticClass:"point",class:t.current==a?"current":"",attrs:{"data-index":a,"data-paperCut-action":"point"}},[t._v("\n      "+t._s(a+1)+"\n    ")])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"control"},[e("div",{staticClass:"left",attrs:{"data-paperCut-action":"prev"}},[e("i",{staticClass:"left-arrow"})]),this._v(" "),e("div",{staticClass:"right",attrs:{"data-paperCut-action":"next"}},[e("i",{staticClass:"right-arrow"})])])}]};var o=i("C7Lr")(r,s,!1,function(t){i("uP9+")},null,null);e.a=o.exports},"uP9+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cece3e920d9dc292ecd3.js.map