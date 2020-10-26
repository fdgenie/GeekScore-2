(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"1b9f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"cards-list"},[a("v-row",[a("v-col",{attrs:{sm:"6",md:"4",cols:"12"}},[t.items.length>3?a("v-text-field",{attrs:{clearable:"","prepend-icon":"mdi-magnify",dark:"",label:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}):t._e()],1)],1),a("v-row",t._l(t.filteredItems,(function(e){return a("v-col",{key:e._id,staticClass:"mb-6",attrs:{sm:"6",md:"4",cols:"12"}},[a("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"}},[a("v-card",{key:e._id,staticClass:"mx-auto app-card",attrs:{dark:"",raised:"","aria-describedby":e.name}},[a("router-link",{attrs:{to:t.setRoute(e._id)}},[a("div",{staticClass:"title-wrap"},[a("v-card-title",{staticClass:"row_between"},[a("span",{staticClass:"card-list-name"},[t._v(t._s(e.name))]),t._t("action",null,{item:e})],2)],1),e.players?a("v-list",{staticClass:"players",attrs:{dense:"",disabled:""}},[a("v-list-item-group",t._l(t.formatPlayers(e.players),(function(e){var i=e.name;return a("v-list-item",{key:i},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s("mdi-account")}})],1),a("v-list-item-content",{domProps:{textContent:t._s(i)}})],1)})),1)],1):t._e(),a("v-img",{staticClass:"white--text align-end",attrs:{height:"350",src:t.imagePath(e,"jpg"),srcset:t.imagePath(e,"webp"),alt:e.name},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"secondary"}})],1)]},proxy:!0}],null,!0)},[a("div",{staticClass:"title-wrap"},[a("v-card-title",{staticClass:"card-list-actions"},[t.getActions(e).length?t._l(t.getActions(e),(function(i,s){return a("v-btn",{key:s,staticClass:"px-0 mx-1",attrs:{href:i.link,target:"_blank",download:i.download,rel:"noopener noreferrer",small:"","aria-label":e.name,text:"",fab:"",color:"#fff"},on:{click:function(t){t.stopPropagation()}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-"+t._s(i.icon))])],1)})):t._e(),t.items.length>1?a("v-btn",{staticClass:"px-0 mx-1",attrs:{small:"",text:"","aria-label":"Favorite",fab:"",color:e.favorite?"error":"#fff"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.favorite(e)}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-heart")])],1):t._e()],2)],1)])],1)],1)],1)],1)})),1)],1)},s=[],n=(a("a623"),a("4de4"),a("caad"),a("d81d"),a("fb6a"),a("b0c0"),a("b64b"),a("ac1f"),a("2532"),a("841c"),a("1276"),a("fc11")),r=a("f3f3"),o=a("2f62"),c={name:"CardsList",props:{items:{type:Array,required:!0},route:{type:Object,required:!0}},data:function(){return{search:""}},computed:Object(r["a"])(Object(r["a"])({},Object(o["d"])("user",["user"])),{},{filteredItems:function(){var t=this;!this.search&&this.getItemsOrder(this.items);var e=this.items.filter((function(e){return t.search.toLowerCase().split(" ").every((function(t){return e.name.toLowerCase().includes(t)}))}));return this.getItemsOrder(e)}}),methods:{formatPlayers:function(t){var e=this,a=t.map((function(t){var a="";return a="Me"===t.name&&e.user.username?e.user.username:t.name,{name:a}}));return a},getActions:function(t){var e=[];return t.bggURL&&e.push({link:t.bggURL,name:"Board game geek",icon:"cards"}),t.rulesURL&&e.push({link:t.rulesURL,name:"Rules",icon:"book-open-variant",download:!0}),t.melodiceURL&&e.push({link:t.melodiceURL,name:"Melodice",icon:"music"}),e},imagePath:function(t,e){return t.imageUrl?t.imageUrl:t.teams?a("e679")("./game.".concat(e)):a("544f")("./team.".concat(e))},getItemsOrder:function(t){var e=t.slice().reverse();return e.sort((function(t,e){return e.favorite-t.favorite}))},setRoute:function(t){var e=Object(r["a"])({},this.route);return e.params=Object(n["a"])({},Object.keys(this.route.params)[0],t),e},favorite:function(t){var e=!t.favorite,a={favorite:e,_id:t._id};this.$emit("favorite",a)}}},l=c,d=(a("ca3c"),a("2877")),u=a("6544"),m=a.n(u),f=a("8336"),h=a("b0af"),v=a("99d9"),g=a("62ad"),p=a("132d"),b=a("adda"),O=a("24b2"),j=a("f2e7"),_=a("90a2"),y=a("58df"),k=a("80d2"),w=Object(y["a"])(O["a"],j["a"]).extend({name:"VLazy",directives:{intersect:_["a"]},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return Object(r["a"])({},this.measurableStyles)}},methods:{genContent:function(){var t=Object(k["s"])(this);if(!this.transition)return t;var e=[];return this.isActive&&e.push(t),this.$createElement("transition",{props:{name:this.transition}},e)},onObserve:function(t,e,a){this.isActive||(this.isActive=a)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}}),x=a("8860"),C=a("da13"),I=a("5d23"),T=a("1baa"),R=a("34c3"),L=a("490a"),V=a("0fd9"),D=a("8654"),S=Object(d["a"])(l,i,s,!1,null,"41f53c3c",null);e["a"]=S.exports;m()(S,{VBtn:f["a"],VCard:h["a"],VCardTitle:v["c"],VCol:g["a"],VIcon:p["a"],VImg:b["a"],VLazy:w,VList:x["a"],VListItem:C["a"],VListItemContent:I["a"],VListItemGroup:T["a"],VListItemIcon:R["a"],VProgressCircular:L["a"],VRow:V["a"],VTextField:D["a"]})},"1efd":function(t,e,a){t.exports=a.p+"img/team.76152c6e.jpg"},"37dd":function(t,e,a){},"4f0c":function(t,e,a){t.exports=a.p+"img/game.10a04d7d.webp"},"544f":function(t,e,a){var i={"./team.jpg":"1efd","./team.webp":"c368"};function s(t){var e=n(t);return a(e)}function n(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=n,t.exports=s,s.id="544f"},"841c":function(t,e,a){"use strict";var i=a("d784"),s=a("825a"),n=a("1d80"),r=a("129f"),o=a("14c3");i("search",1,(function(t,e,a){return[function(e){var a=n(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a):new RegExp(e)[t](String(a))},function(t){var i=a(e,t,this);if(i.done)return i.value;var n=s(t),c=String(this),l=n.lastIndex;r(l,0)||(n.lastIndex=0);var d=o(n,c);return r(n.lastIndex,l)||(n.lastIndex=l),null===d?-1:d.index}]}))},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return c}));var i=a("b0af"),s=a("80d2"),n=Object(s["i"])("v-card__actions"),r=Object(s["i"])("v-card__subtitle"),o=Object(s["i"])("v-card__text"),c=Object(s["i"])("v-card__title");i["a"]},a0b5:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"game-details"},[a("the-title",{attrs:{title:"Teams",icon:"account-group",props:{gameId:t.gameId},component:"team-add-dialog"}}),t.winRate?a("div",{staticClass:"win-rate"},[a("v-icon",{staticClass:"mr-3",attrs:{dark:""}},[t._v("mdi-brightness-percent")]),a("span",[t._v("Your win rate is: "+t._s(t.winRate))])],1):t._e(),t.gameTeams?a("cards-list",{attrs:{items:t.gameTeams,route:t.teamRoute},on:{favorite:t.toggleFavorite},scopedSlots:t._u([{key:"action",fn:function(t){var e=t.item;return[a("team-edit-dialog",{attrs:{team:e}})]}}],null,!1,3846198980)}):t._e()],1)},s=[],n=(a("b0c0"),a("f3f3")),r=a("882a"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("the-dialog",{attrs:{"activator-icon":"pencil",color:"#fff",header:"Edit team info",simple:"","submit-logic":t.onSubmit}},[a("v-text-field",{attrs:{clearable:"",rules:t.nameRules,label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-switch",{attrs:{label:"Delete team",color:"error","hide-details":""},model:{value:t.toDelete,callback:function(e){t.toDelete=e},expression:"toDelete"}})],1)},c=[],l=a("5f37"),d=a("2f62"),u={name:"TeamEditDialog",props:{team:{type:Object,required:!0}},data:function(){return{name:this.team.name,toDelete:!1,nameRules:l["e"]}},methods:Object(n["a"])(Object(n["a"])({},Object(d["b"])("teams",["updateTeam","deleteTeam"])),{},{onSubmit:function(){this.toDelete&&this.deleteTeam(this.team._id),this.updateTheTeam()},updateTheTeam:function(){var t={_id:this.team._id,gameId:this.team.gameId,name:this.name};this.updateTeam(t)}})},m=u,f=a("2877"),h=a("6544"),v=a.n(h),g=a("b73d"),p=a("8654"),b=Object(f["a"])(m,o,c,!1,null,null,null),O=b.exports;v()(b,{VSwitch:g["a"],VTextField:p["a"]});var j=a("1b9f"),_={name:"GameDetails",components:{TheTitle:r["a"],TeamEditDialog:O,CardsList:j["a"]},props:{gameId:{type:String,required:!0}},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(d["d"])("teams",["teams"])),Object(d["d"])("games",["games","winRate"])),Object(d["c"])("teams",["getGameTeams"])),Object(d["c"])("games",["getGame"])),{},{gameTeams:function(){return this.teams?this.getGameTeams(this.gameId):null},game:function(){return this.games?this.getGame(this.gameId):null},teamRoute:function(){return{name:"team",params:{teamId:""},query:{gameId:this.gameId}}}}),created:function(){this.loadData()},beforeDestroy:function(){this.setBackTitle()},methods:Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(d["b"])(["setBackTitle"])),Object(d["b"])("games",["loadGames","loadWinRate"])),Object(d["b"])("teams",["updateTeam","loadTeams","loadGameTeams"])),{},{toggleFavorite:function(t){var e=Object(n["a"])(Object(n["a"])({},t),{},{gameId:this.gameId});this.updateTeam(e)},loadData:function(){var t=this;this.games||this.loadGames().then((function(){t.setBackTitle(t.getGame(t.gameId).name)})),this.teams||this.loadTeams(),this.loadWinRate(this.gameId),null!=this.games&&this.setBackTitle(this.getGame(this.gameId).name)}})},y=_,k=(a("abf5"),a("132d")),w=Object(f["a"])(y,i,s,!1,null,null,null);e["default"]=w.exports;v()(w,{VIcon:k["a"]})},abf5:function(t,e,a){"use strict";var i=a("37dd"),s=a.n(i);s.a},b0af:function(t,e,a){"use strict";a("0481"),a("4069"),a("a9e3");var i=a("f3f3"),s=(a("615b"),a("10d2")),n=a("297c"),r=a("1c87"),o=a("58df");e["a"]=Object(o["a"])(n["a"],r["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},r["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(i["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},c368:function(t,e,a){t.exports=a.p+"img/team.bf4c6f13.webp"},ca3c:function(t,e,a){"use strict";var i=a("dc1b"),s=a.n(i);s.a},cdc8:function(t,e,a){t.exports=a.p+"img/game.711fd041.jpg"},dc1b:function(t,e,a){},e679:function(t,e,a){var i={"./game.jpg":"cdc8","./game.webp":"4f0c"};function s(t){var e=n(t);return a(e)}function n(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=n,t.exports=s,s.id="e679"}}]);
//# sourceMappingURL=game.86a930b7.js.map