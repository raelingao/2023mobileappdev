/*!
 App Connect Framework7 v6 plugin
 Version: 1.1.5
 (c) 2023 Wappler.io
 @build 2023-02-08 11:02:10
 */
Framework7||alert("Framework7 missing!"),dmx.f7={events:null,init:function(e,t){var n=dmx.f7.events||new Framework7.Events,o=Object.assign({},t,{el:e});window.routes&&window.routes.length&&!o.routes&&(o.routes=routes);var s=new Framework7(o);return s.initialized?n.emit("ready",s):s.once("init",(function(){n.emit("ready",s)})),s},ready:function(e){e&&(Framework7.instance?e(Framework7.instance):dmx.f7.events.once("ready",e))}},dmx.config.mapping[".view"]="f7-view",dmx.config.mapping[".page"]="f7-page",dmx.config.mapping[".popup"]="f7-popup",dmx.config.mapping[".login-screen"]="f7-login-screen",dmx.config.mapping[".actions-modal"]="f7-actions-modal",dmx.config.mapping[".progressbar"]="f7-progressbar",dmx.config.mapping[".toggle:not(.toggle-init)"]="f7-toggle",dmx.config.mapping[".ptr-content"]="f7-ptr",dmx.Actions({"f7.toast.show":function(e){Framework7.instance.toast.create({destroyOnClose:!0,icon:this.parse(e.icon),text:this.parse(e.text),position:this.parse(e.position)||"bottom",horizontalPosition:this.parse(e.horizontalPosition)||"left",closeButton:!!this.parse(e.closeButton),closeButtonColor:this.parse(e.closeButtonColor),closeButtonText:this.parse(e.closeButtonText)||"Ok",closeTimeout:this.parse(e.closeTimeout)||void 0}).open()}}),dmx.Actions({"f7.dialog.alert":function(e){var t=this.parse(e.text),n=this.parse(e.title);return new Promise((function(e){Framework7.instance.dialog.alert(t,n,e)}))},"f7.dialog.confirm":function(e){var t=this,n=this.parse(e.text),o=this.parse(e.title);return new Promise((function(s){Framework7.instance.dialog.confirm(n,o,(function(){e.then?t._exec(e.then).then((function(){s(!0)})):s(!0)}),(function(){e.else?t._exec(e.else).then((function(){s(!1)})):s(!1)}))}))},"f7.dialog.prompt":function(e){var t=this.parse(e.text),n=this.parse(e.title),o=this.parse(e.defaultValue);return new Promise((function(e){Framework7.instance.dialog.prompt(t,n,(function(t){e(t)}),(function(){e(null)}),o)}))},"f7.dialog.login":function(e){var t=this.parse(e.text),n=this.parse(e.title);return new Promise((function(e){Framework7.instance.dialog.login(t,n,(function(t,n){e({username:t,password:n})}),(function(){e(null)}))}))},"f7.dialog.password":function(e){var t=this.parse(e.text),n=this.parse(e.title);return new Promise((function(e){Framework7.instance.dialog.password(t,n,(function(t){e(t)}),(function(){e(null)}))}))},"f7.dialog.preloader":function(e){var t=this.parse(e.title),n=this.parse(e.color);Framework7.instance.dialog.preloader(t,n)},"f7.dialog.close":function(e){Framework7.instance.dialog.close()}}),dmx.Actions({"f7.progressbar.show":function(e){Framework7.instance.progressbar.show(this.parse(e.color))},"f7.progressbar.set":function(e){Framework7.instance.progressbar.set(this.parse(e.progress),this.parse(e.duration))},"f7.progressbar.hide":function(e){Framework7.instance.progressbar.hide()}}),dmx.Actions({"f7.preloader.show":function(e){Framework7.instance.preloader.show()},"f7.preloader.hide":function(e){Framework7.instance.preloader.hide()}}),dmx.Component("f7-app",{initialData:{},attributes:{name:{type:String,default:"Framework7"},version:{type:String,default:"1.0.0"},theme:{type:String,default:"auto",enum:["auto","ios","md","aurora"]},"auto-dark-theme":{type:Boolean,default:!1},params:{type:Object,default:{}}},methods:{alert:function(e){this.f7&&this.f7.dialog.alert(e)},showPreloader:function(e){this.f7&&this.f7.preloader.show(e)},hidePreloader:function(){this.f7&&this.f7.preloader.hide()},showProgress:function(e){this.f7&&this.f7.progressbar.show(e)},setProgress:function(e,t){this.f7&&this.f7.progressbar.set(e,t)},hideProgress:function(e){this.f7&&this.f7.progressbar.hide()}},render:function(e){var t=this.props.theme;"auto"==t&&document.location.search.indexOf("theme=")>=0&&(t=document.location.search.split("theme=")[1].split("&")[0]),this.f7=dmx.f7.init(e,Object.assign(this.props.params,{id:"io.framework7."+this.name,name:this.props.name,version:this.props.version,theme:t,autoDarkTheme:this.props["auto-dark-theme"],view:{stackPages:!0}})),this.$parse()}}),dmx.Component("f7-view",{constructor:function(e,t){this.onPageInit=this.onPageInit.bind(this),this.onPageBeforeRemove=this.onPageBeforeRemove.bind(this),dmx.BaseComponent.call(this,e,t)},methods:{navigate:function(e,t){this.f7View.router&&this.f7View.router.navigate(e,t)},back:function(e,t){this.f7View.router&&this.f7View.router.back(e,t)},refresh:function(){this.f7View.router&&this.f7View.router.refreshPage()},clearHistory:function(){this.f7View.router&&this.f7View.router.clearPreviousHistory()}},render:function(e){this.f7View=Framework7.instance.views.create(e),this.f7View.on("pageInit",this.onPageInit),this.f7View.on("pageReinit",this.onPageReinit),this.f7View.on("pageBeforeRemove",this.onPageBeforeRemove),this.$parse()},onPageInit:function(e){var t=new(dmx.Component("f7-page"))(e.el,this);t.set("route",e.route),this.children.push(t),this.set(t.name,t.data),e.dmxComponent=t},onPageReinit:function(e){e.dmxComponent&&e.dmxComponent.set("route",e.route)},onPageBeforeRemove:function(e){var t=this.children.findIndex((function(t){return t.$node==e.el}));-1!=t&&(this.del(this.children[t].name),this.children.splice(t,1))},destroy:function(){this.f7View&&(this.f7View.off("pageInit",this.onPageInit),this.f7View.off("pageReinit",this.onPageReinit),this.f7View.off("pageBeforeRemove",this.onPageBeforeRemove),this.f7View.destroy&&this.f7View.destroy())}}),dmx.Component("f7-page",{initialData:{route:null},render:function(e){this.$parse()}}),dmx.Component("f7-popup",{initialData:{opened:!1},attributes:{"close-on-escape":{type:Boolean,default:!1},"swipe-to-close":{type:Boolean,default:!1},opened:{type:Boolean,default:!1}},methods:{open:function(e){this.f7Popup&&this.f7Popup.open(e)},close:function(e){this.f7Popup&&this.f7Popup.close(e)}},events:{open:Event,opened:Event,close:Event,closed:Event},render:function(e){var t={el:e,on:{open:this.dispatchEvent.bind(this,"open"),opened:this.dispatchEvent.bind(this,"opened"),close:this.dispatchEvent.bind(this,"close"),closed:this.dispatchEvent.bind(this,"closed")},closeOnEscape:this.props["close-on-escape"],swipeToClose:this.props["swipe-to-close"]};e.classList.add("popup");var n=this;dmx.f7.ready((function(e){n.f7Popup=e.popup.create(t),n.f7Popup.on("opened",(function(){n.set("opened",!0)})),n.f7Popup.on("closed",(function(){n.set("opened",!1)})),n.props.opened&&n.f7Popup.open(!1)})),this.$parse()},update:function(e){e.opened!=this.props.opened&&(this.props.opened?this.f7Popup.open():this.f7Popup.close()),this.set("opened",this.f7Popup.opened)},destroy:function(){this.f7Popup&&(this.f7Popup.destroy(),this.f7Popup=void 0)}}),dmx.Component("f7-login-screen",{initialData:{opened:!1},attributes:{opened:{type:Boolean,default:!1}},methods:{open:function(e){this.f7LoginScreen&&this.f7LoginScreen.open(e)},close:function(e){this.f7LoginScreen&&this.f7LoginScreen.close(e)}},events:{open:Event,opened:Event,close:Event,closed:Event},render:function(e){var t={el:e,on:{open:this.dispatchEvent.bind(this,"open"),opened:this.dispatchEvent.bind(this,"opened"),close:this.dispatchEvent.bind(this,"close"),closed:this.dispatchEvent.bind(this,"closed")}},n=this;dmx.f7.ready((function(e){n.f7LoginScreen=e.loginScreen.create(t),n.f7LoginScreen.on("opened",(function(){n.set("opened",!0)})),n.f7LoginScreen.on("closed",(function(){n.set("opened",!1)})),n.props.opened&&n.f7LoginScreen.open(!1)})),this.$parse()},update:function(e){e.opened!=this.props.opened&&(this.props.opened?this.f7LoginScreen.open():this.f7LoginScreen.close()),this.set("opened",this.f7LoginScreen.opened)},destroy:function(){this.f7LoginScreen&&(this.f7LoginScreen.destroy(),this.f7LoginScreen=void 0)}}),dmx.Component("f7-actions-modal",{initialData:{opened:!1},attributes:{"close-by-outside-click":{type:Boolean,default:!1},"close-on-escape":{type:Boolean,default:!1},opened:{type:Boolean,default:!1}},methods:{open:function(e){this.component&&this.component.open(e)},close:function(e){this.component&&this.component.close(e)}},events:{open:Event,opened:Event,close:Event,closed:Event},render:function(e){var t={el:e,on:{open:this.dispatchEvent.bind(this,"open"),opened:this.dispatchEvent.bind(this,"opened"),close:this.dispatchEvent.bind(this,"close"),closed:this.dispatchEvent.bind(this,"closed")},closeByOutsideClick:this.props["close-by-outside-click"],closeOnEscape:this.props["close-on-escape"]},n=this;dmx.f7.ready((function(e){n.component=e.actions.create(t),n.component.on("opened",(function(){n.set("opened",!0)})),n.component.on("closed",(function(){n.set("opened",!1)})),n.props.opened&&n.component.open(!1)})),this.$parse()},update:function(e){e.opened!=this.props.opened&&(this.props.opened?this.component.open():this.component.close()),this.set("opened",this.component.opened)},destroy:function(){this.component&&(this.component.destroy(),this.component=void 0)}}),dmx.Component("f7-area-chart",{attributes:{width:{type:Number,default:640},height:{type:Number,default:320},datasets:{type:Array,default:[]},"datasets:values":{type:String,default:"values"},"datasets:color":{type:String,default:"color"},"datasets:label":{type:String,default:"label"},"line-chart":{type:Boolean,default:!1},axis:{type:Boolean,default:!1},"axis-labels":{type:Array,default:[]},tooltip:{type:Boolean,default:!1},legend:{type:Boolean,default:!1},"toggle-datasets":{type:Boolean,default:!1},"max-axis-labels":{type:Number,default:8}},getProps:function(){return Object.entries(this.props).reduce((function(e,t){return e[t[0].replace(/\-(.)?/g,(function(e,t){return t.toUpperCase()}))]=t[1],e}),{})},getDatasets:function(){var e=[];return Array.isArray(this.props.datasets)&&(e=this.props.datasets.map((function(e){var t=dmx.parse(this.props["datasets:values"],e),n=dmx.parse(this.props["datasets:color"],e),o=dmx.parse(this.props["datasets:label"],e);Array.isArray(t)||(t=[t]);var s={values:t.map(Number)};return n&&(s.color=String(n)),o&&(s.label=String(o)),s}),this)),e},render:function(e){var t=this,n=Object.assign({el:e},this.getProps(),this.getDatasets());e.classList.add("area-chart"),dmx.f7.ready((function(e){t.component=e.areaChart.create(n)}))},update:function(e){if(!dmx.equal(e,this.props)){var t=Object.assign(this.getProps(),this.getDatasets());this.component.update(t)}},destroy:function(){this.component&&(this.component.destroy(),this.component=void 0)}}),dmx.Component("f7-gauge",{attributes:{type:{type:String,default:"circle"},value:{type:Number,default:0},size:{type:Number,default:200},"bg-color":{type:String,default:"transparent"},"border-bg-color":{type:String,default:"#eeeeee"},"border-color":{type:String,default:"#000000"},"border-width":{type:String,default:"10"},"value-text":{type:String,default:null},"value-text-color":{type:String,default:"#000000"},"value-font-size":{type:String,default:"31"},"value-font-weight":{type:String,default:"500"},"label-text":{type:String,default:null},"label-text-color":{type:String,default:"#888888"},"label-font-size":{type:String,default:"14"},"label-font-weight":{type:String,default:"400"}},getProps:function(){return Object.entries(this.props).reduce((function(e,t){return e[t[0].replace(/\-(.)?/g,(function(e,t){return t.toUpperCase()}))]=t[1],e}),{})},render:function(e){var t=this;dmx.f7.ready((function(n){t.component=n.gauge.create(Object.assign({el:e},t.getProps()))}))},update:function(e){dmx.equal(e,this.props)||this.component.update(this.getProps())},destroy:function(){this.component&&(this.component.destroy(),this.component=void 0)}}),dmx.Component("f7-messages",{attributes:{"new-messages-first":{type:Boolean,default:!1},messages:{type:Array,default:[]}},methods:{showTyping:function(e){this.component&&this.component.showTyping(e)},hideTyping:function(){this.component&&this.component.hideTyping()},addMessage:function(e,t,n){this.component&&this.component.addMessage(e,t,n)},addMessages:function(e,t,n){this.component&&this.component.addMessages(e,t,n)},removeMessage:function(e){this.component&&this.component.removeMessage(e)},removeMessages:function(e){this.component&&this.component.removeMessages(e)},scroll:function(e,t){this.component&&this.component.scroll(e,t)},renderMessages:function(){this.component&&this.component.renderMessages()},layout:function(){this.component&&this.component.layout()},clear:function(){this.component&&this.component.clear()}},getProps:function(){return Object.entries(this.props).reduce((function(e,t){return e[t[0].replace(/\-(.)?/g,(function(e,t){return t.toUpperCase()}))]=t[1],e}),{})},render:function(e){var t=this;dmx.f7.ready((function(n){t.component=n.messages.create(Object.assign({el:e},t.getProps()))})),this.$parse()},update:function(e){Framework7.instance&&!dmx.equal(e,this.props)&&(this.component.destroy(),this.component=Framework7.instance.messages.create(Object.assign({el:this.$node},this.getProps())))},destroy:function(){this.component&&(this.component.destroy(),this.component=void 0)}}),dmx.Component("f7-notification",{attributes:{icon:{type:String},title:{type:String},"title-right-text":{type:String},subtitle:{type:String},text:{type:String},"close-button":{type:Boolean,default:!1},"close-timeout":{type:Number},"close-on-click":{type:Boolean,default:!1},"swipe-to-close":{type:Boolean,default:!0},"css-class":{type:String},opened:{type:Boolean,default:!1}},methods:{open:function(e){this.component&&this.component.open(e)},close:function(e){this.component&&this.component.close(e)}},events:{open:Event,opened:Event,close:Event,closed:Event,click:Event},getProps:function(){return Object.entries(this.props).reduce((function(e,t){return e[t[0].replace(/\-(.)?/g,(function(e,t){return t.toUpperCase()}))]=t[1],e}),{})},render:function(e){var t=this;dmx.f7.ready((function(e){t.component=e.notification.create(Object.assign({on:{open:t.dispatchEvent.bind(t,"open"),opened:t.dispatchEvent.bind(t,"opened"),close:t.dispatchEvent.bind(t,"close"),closed:t.dispatchEvent.bind(t,"closed"),click:t.dispatchEvent.bind(t,"click")}},t.getProps())),t.component.on("opened",(function(){t.set("opened",!0)})),t.component.on("closed",(function(){t.set("opened",!1)})),t.props.opened&&t.component.open(!1)})),this.$parse()},update:function(e){if(this.component){if(Framework7.instance&&!dmx.equal(e,this.props)){Framework7.instance.notification.destroy(this.component.el),this.component=Framework7.instance.notification.create(Object.assign({on:{open:this.dispatchEvent.bind(this,"open"),opened:this.dispatchEvent.bind(this,"opened"),close:this.dispatchEvent.bind(this,"close"),closed:this.dispatchEvent.bind(this,"closed"),click:this.dispatchEvent.bind(this,"click")}},this.getProps()));var t=this;this.component.on("opened",(function(){t.set("opened",!0)})),this.component.on("closed",(function(){t.set("opened",!1)})),this.props.opened&&this.component.open(!1)}this.set("opened",this.component.opened)}},destroy:function(){this.component&&(Framework7.instance.notification.destroy(this.component.el),this.component=void 0)}}),dmx.Component("f7-photo-browser",{initialData:{activeIndex:0,exposed:!1,opened:!1},attributes:{photos:{type:Array,default:[]},exposition:{type:Boolean,default:!0},"exposition-hide-captions":{type:Boolean,default:!1},"swipe-to-close":{type:Boolean,default:!0},"popup-push":{type:Boolean,default:!1},"routable-modals":{type:Boolean,default:!1},url:{type:String,default:"photos/"},type:{type:String,default:"standalone"},theme:{type:String,default:"light"},"captions-theme":{type:String},navbar:{type:Boolean,default:!0},toolbar:{type:Boolean,default:!0},"page-back-link-text":{type:String,default:"Back"},"page-close-link-text":{type:String,default:"Close"},"navbar-show-count":{type:Boolean,default:void 0},"navbar-of-text":{type:String,default:"of"},"icons-color":{type:String}},methods:{open:function(e){this.component&&this.component.open(e)},close:function(){this.component&&this.component.close()},expositionToggle:function(){this.component&&this.component.expositionToggle()},expositionEnable:function(){this.component&&this.component.expositionEnable()},expositionDisable:function(){this.component&&this.component.expositionDisable()}},events:{tap:Event,click:Event,doubleTap:Event,doubleClick:Event,slideChange:Event,lazyImageLoad:Event,lazyImageReady:Event,open:Event,opened:Event,close:Event,closed:Event},getProps:function(){return Object.entries(this.props).reduce((function(e,t){return e[t[0].replace(/\-(.)?/g,(function(e,t){return t.toUpperCase()}))]=t[1],e}),{})},render:function(e){var t=this;dmx.f7.ready((function(e){t.component=e.photoBrowser.create(t.getProps()),t.component.on("opened",(function(){t.set("opened",!0)})),t.component.on("closed",(function(){t.set("opened",!1)})),t.component.on("tap",t.dispatchEvent.bind(t,"tap")),t.component.on("click",t.dispatchEvent.bind(t,"click")),t.component.on("doubleTap",t.dispatchEvent.bind(t,"doubleTap")),t.component.on("doubleClick",t.dispatchEvent.bind(t,"doubleClick")),t.component.on("slideChange",t.dispatchEvent.bind(t,"slideChange")),t.component.on("lazyImageLoad",t.dispatchEvent.bind(t,"lazyImageLoad")),t.component.on("lazyImageReady",t.dispatchEvent.bind(t,"lazyImageReady")),t.component.on("open",t.dispatchEvent.bind(t,"open")),t.component.on("opened",t.dispatchEvent.bind(t,"opened")),t.component.on("close",t.dispatchEvent.bind(t,"close")),t.component.on("closed",t.dispatchEvent.bind(t,"closed"))})),this.$parse()},update:function(e){if(Framework7.instance&&!dmx.equal(e,this.props)){var t=this;this.component.destroy(),this.component=Framework7.instance.photoBrowser.create(this.getProps()),this.component.on("opened",(function(){t.set("opened",!0)})),this.component.on("closed",(function(){t.set("opened",!1)})),this.component.on("opened",(function(){t.set("opened",!0)})),this.component.on("closed",(function(){t.set("opened",!1)})),this.component.on("tap",this.dispatchEvent.bind(this,"tap")),this.component.on("click",this.dispatchEvent.bind(this,"click")),this.component.on("doubleTap",this.dispatchEvent.bind(this,"doubleTap")),this.component.on("doubleClick",this.dispatchEvent.bind(this,"doubleClick")),this.component.on("slideChange",this.dispatchEvent.bind(this,"slideChange")),this.component.on("lazyImageLoad",this.dispatchEvent.bind(this,"lazyImageLoad")),this.component.on("lazyImageReady",this.dispatchEvent.bind(this,"lazyImageReady")),this.component.on("open",this.dispatchEvent.bind(this,"open")),this.component.on("opened",this.dispatchEvent.bind(this,"opened")),this.component.on("close",this.dispatchEvent.bind(this,"close")),this.component.on("closed",this.dispatchEvent.bind(this,"closed"))}this.set("activeIndex",this.component.activeIndex),this.set("exposed",this.component.exposed),this.set("opened",this.component.opened)},destroy:function(){this.component&&(this.component.destroy(),this.component=void 0)}}),dmx.Component("f7-pie-chart",{attributes:{datasets:{type:Array,default:[]},"datasets:value":{type:String,default:"value"},"datasets:color":{type:String,default:"color"},"datasets:label":{type:String,default:"label"},size:{type:Number,default:320},tooltip:{type:Boolean,default:!1}},getProps:function(){return Object.entries(this.props).reduce((function(e,t){return e[t[0].replace(/\-(.)?/g,(function(e,t){return t.toUpperCase()}))]=t[1],e}),{})},getDatasets:function(){var e=[];return Array.isArray(this.props.datasets)&&(e=this.props.datasets.map((function(e){var t=dmx.parse(this.props["datasets:value"],e),n=dmx.parse(this.props["datasets:color"],e),o=dmx.parse(this.props["datasets:label"],e),s={value:Number(t)};return n&&(s.color=String(n)),o&&(s.label=String(o)),s}),this)),e},render:function(e){var t=this;e.classList.add("pie-chart"),dmx.f7.ready((function(n){t.component=n.pieChart.create(Object.assign({el:e},t.getProps(),t.getDatasets()))}))},update:function(e){dmx.equal(e,this.props)||this.component.update(Object.assign(this.getProps(),this.getDatasets()))},destroy:function(){this.component&&(this.component.destroy(),this.component=void 0)}}),dmx.Component("f7-progressbar",{initialData:{progress:0},attributes:{progress:{type:Number,default:null},color:{type:String,default:"default",enum:["default","red","green","blue","pink","yellow","orange","purple","deeppurple","lightblue","teal","lime","deeporange","gray","white","black","multi"]},hidden:{type:Boolean,default:!1}},methods:{set:function(e,t){Framework7.instance.progressbar.set(this.$node,e,t)},show:function(){this.props.hidden=!1,this.update({})},hide:function(){this.props.hidden=!0,this.update({})}},render:function(e){var t=this;e.classList.add("progressbar"),"default"!=this.props.color&&e.classList.add("color-"+color),dmx.f7.ready((function(e){t.update({})}))},update:function(e){Framework7.instance&&!dmx.equal(e,this.props)&&(this.props.hidden?Framework7.instance.progressbar.hide(this.$node):Framework7.instance.progressbar.show(this.$node,this.props.progress,this.props.color))}}),dmx.Component("f7-toggle",{initialData:{checked:!1},attributes:{checked:{type:Boolean,default:!1}},methods:{toggle:function(){this.component.toggle(),this.update({})}},events:{change:Event},render:function(e){var t=this;dmx.f7.ready((function(n){t.component=n.toggle.create({el:e}),t.component.on("change",(function(){t.set("checked",t.component.checked)})),t.component.checked!=t.props.checked&&t.component.toggle(),t.set("checked",t.component.checked)})),this.$parse()},update:function(e){e.checked!=this.props.checked&&this.component.checked!=this.props.checked&&this.component.toggle(),this.set("checked",this.component.checked)},destroy:function(e){this.component&&(Framework7.instance.toggle.destroy(this.component.el),this.component=void 0)}}),dmx.Component("f7-range",{initialData:{value:null},attributes:{value:{type:Number,default:null},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},label:{type:Boolean,default:!1},"no-draggable-bar":{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},"vertical-reversed":{type:Boolean,default:!1},scale:{type:Boolean,default:!1},"scale-steps":{type:Number,default:5},"scale-sub-steps":{type:Number,default:0}},methods:{setValue:function(e){this.component&&this.component.setValue(e)}},events:{change:Event,changed:Event},init:function(e){var t=this;this.component=Framework7.instance.range.create({el:e,value:this.props.value,min:this.props.min,max:this.props.max,step:this.props.step,label:this.props.label,draggableBar:!this.props["no-draggable-bar"],vertical:this.props.vertical,verticalReversed:this.props["vertical-reversed"],scale:this.props.scale,scaleSteps:this.props["scale-steps"],scaleSubSteps:this.props["scale-sub-steps"]}),this.component.on("change",(function(e,n){t.set("value",n),t.dispatchEvent("change")})),this.component.on("changed",(function(){t.dispatchEvent("changed")})),this.set("value",this.component.value)},render:function(e){var t=this;dmx.f7.ready((function(n){t.init(e)}))},update:function(e){e.value!=this.props.value&&this.component.setValue(this.props.value)},destroy:function(){this.component&&(this.component.destroy(),this.component=void 0)}}),dmx.Component("f7-range-dual",{extends:"f7-range",initialData:{start:null,end:null},attributes:{"value-start":{type:Number,default:null},"value-end":{type:Number,default:null}},methods:{setValues:function(e,t){this.component&&this.component.setValue([e,t])}},init:function(e){var t=this;this.component=Framework7.instance.range.create({el:e,dual:!0,value:[this.props["value-start"],this.props["value-end"]],min:this.props.min,max:this.props.max,step:this.props.step,label:this.props.label,draggableBar:!this.props["no-draggable-bar"],vertical:this.props.vertical,verticalReversed:this.props["vertical-reversed"],scale:this.props.scale,scaleSteps:this.props["scale-steps"],scaleSubSteps:this.props["scale-sub-steps"]}),this.component.on("change",(function(e,n){t.set("start",n[0]),t.set("end",n[1]),t.dispatchEvent("change")})),this.component.on("changed",(function(){t.dispatchEvent("changed")})),this.set("start",this.component.value[0]),this.set("end",this.component.value[1])},update:function(e){e["value-start"]==this.props["value-start"]&&e["value-end"]==this.props["value-end"]||this.component.setValue([this.props["value-start"],this.props["value-end"]])}}),dmx.Component("f7-ptr",{initialData:{refreshing:!1},methods:{done:function(){this.ptr&&this.ptr.done()},refresh:function(){this.ptr&&this.ptr.refresh()}},events:{pullstart:Event,pullmove:Event,pullend:Event,refresh:Event,done:Event},render:function(e){const t=e.classList.contains("ptr-bottom");e.classList.add("ptr-content"),e[(t?"last":"first")+"ElementChild"].classList.contains("ptr-preloader")||(e.insertAdjacentHTML(t?"beforeend":"afterbegin",'<div class="ptr-preloader"><div class="preloader"></div><div class="ptr-arrow"></div></div>'),dmx.f7.ready((t=>t.preloader.init(e.querySelector(".preloader"))))),dmx.f7.ready((t=>{this.ptr=t.ptr.get(e)||t.ptr.create(e),this.ptr.on("pullStart",this.dispatchEvent.bind(this,"pullstart")),this.ptr.on("pullMove",this.dispatchEvent.bind(this,"pullmove")),this.ptr.on("pullEnd",this.dispatchEvent.bind(this,"pullend")),this.ptr.on("refresh",this.dispatchEvent.bind(this,"refresh")),this.ptr.on("done",this.dispatchEvent.bind(this,"done")),this.ptr.on("refresh",(()=>this.set("refreshing",!0))),this.ptr.on("done",(()=>this.set("refershing",!1)))})),this.$parse()}});
//# sourceMappingURL=../maps/dmxFramework7_6.js.map
