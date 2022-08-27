"use strict";(self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[]).push([[616],{36201:function(t,e,i){i.d(e,{Z:function(){return l}});var n=i(4367),s=(i(9653),i(92353)),o=i(98119),r=i(70172),a=i(67420),u=i(96215),h=i(4589),c=i(71824),l=s.Z.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return(0,n.Z)((0,n.Z)({},s.Z.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&(0,c.fK)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:s.Z.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var s=this.$createElement(o.Z,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(r.Z,{props:{size:18}},this.delimiterIcon)]);i.push(s)}return this.$createElement(u.Z,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(a.Z,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=s.Z.options.render.call(this,t);return e.data.style="height: ".concat((0,h.kb)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},6501:function(t,e,i){var n=i(4367),s=i(47864),o=i(97047),r=i(73325),a=i(4589),u=i(6505),h=(0,r.Z)(s.Z,u.Z);e["Z"]=h.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(o.Z,{staticClass:"v-carousel__item",props:(0,n.Z)((0,n.Z)({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},(0,a.z9)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}})},92353:function(t,e,i){i.d(e,{Z:function(){return u}});var n=i(4367),s=(i(92222),i(69826),i(41539),i(34553),i(95500)),o=i(98119),r=i(70172),a=i(24622),u=a.y.extend({name:"v-window",directives:{Touch:s.Z},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return(0,n.Z)((0,n.Z)({},a.y.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var n,s,a,u=this,h={click:function(t){t.stopPropagation(),u.changedByDelimiters=!0,i()}},c={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},l=null!=(n=null==(s=(a=this.$scopedSlots)[t])?void 0:s.call(a,{on:h,attrs:c}))?n:[this.$createElement(o.Z,{props:{icon:!0},attrs:c,on:h},[this.$createElement(r.Z,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},l)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var s=this.genIcon("next",n,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var i=this.items.length,n=i-1;return i<=2?t<e:t===n&&0===e||(0!==t||e!==n)&&t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}})},47864:function(t,e,i){var n=i(88625),s=i(17352),o=i(95500),r=i(4589),a=i(73325),u=(0,a.Z)(n.Z,(0,s.d)("windowGroup","v-window-item","v-window"));e["Z"]=u.extend().extend().extend({name:"v-window-item",directives:{Touch:o.Z},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=(0,r.kb)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=(0,r.kb)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},95500:function(t,e,i){i(41539),i(54747);var n=i(4589),s=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,o=.5,r=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<o*Math.abs(t.offsetX)&&(t.left&&i<e-r&&t.left(t),t.right&&i>e+r&&t.right(t)),Math.abs(t.offsetX)<o*Math.abs(t.offsetY)&&(t.up&&s<n-r&&t.up(t),t.down&&s>n+r&&t.down(t))};function o(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function r(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function a(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function u(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return o(t,e)},touchend:function(t){return r(t,e)},touchmove:function(t){return a(t,e)}}}function h(t,e,i){var s=e.value,o=s.parent?t.parentElement:t,r=s.options||{passive:!0};if(o){var a=u(e.value);o._touchHandlers=Object(o._touchHandlers),o._touchHandlers[i.context._uid]=a,(0,n.XP)(a).forEach((function(t){o.addEventListener(t,a[t],r)}))}}function c(t,e,i){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var o=s._touchHandlers[i.context._uid];(0,n.XP)(o).forEach((function(t){s.removeEventListener(t,o[t])})),delete s._touchHandlers[i.context._uid]}}var l={inserted:h,unbind:c};e["Z"]=l},96215:function(t,e,i){var n=i(24622);e["Z"]=n.y.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return n.y.options.computed.classes.call(this)}},methods:{genData:n.y.options.methods.genData}})}}]);
//# sourceMappingURL=616-legacy.a02d562b.js.map