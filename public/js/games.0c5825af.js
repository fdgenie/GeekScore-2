(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["games"],{"1efd":function(e,t,a){e.exports=a.p+"img/team.76152c6e.jpg"},3383:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"cards-list"},[a("v-row",[a("v-col",{attrs:{sm:"6",md:"4",cols:"12"}},[e.items.length>3?a("v-text-field",{attrs:{clearable:"","prepend-icon":"mdi-magnify",dark:"",label:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e()],1)],1),a("v-row",e._l(e.filteredItems,(function(t){return a("v-col",{key:t._id,staticClass:"mb-6",attrs:{sm:"6",md:"4",cols:"12"}},[a("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"}},[a("v-card",{key:t._id,staticClass:"mx-auto app-card",attrs:{dark:"",raised:"","aria-describedby":t.name}},[a("router-link",{attrs:{to:e.setRoute(t._id)}},[a("div",{staticClass:"title-wrap"},[a("v-card-title",{staticClass:"row_between"},[a("span",{staticClass:"card-list-name"},[e._v(e._s(t.name))]),e._t("action",null,{item:t})],2)],1),t.players?a("v-list",{staticClass:"players",attrs:{dense:"",disabled:""}},[a("v-list-item-group",e._l(t.players,(function(t){var i=t.name;return a("v-list-item",{key:i},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:e._s("mdi-account")}})],1),a("v-list-item-content",{domProps:{textContent:e._s(i)}})],1)})),1)],1):e._e(),a("v-img",{staticClass:"white--text align-end",attrs:{height:"350",src:e.imagePath(t,"jpg"),srcset:e.imagePath(t,"webp"),alt:t.name},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"secondary"}})],1)]},proxy:!0}],null,!0)},[a("div",{staticClass:"title-wrap"},[a("v-card-title",{staticClass:"card-list-actions"},[e.getActions(t).length?e._l(e.getActions(t),(function(i,r){return a("v-btn",{key:r,staticClass:"px-0 mx-1",attrs:{href:i.link,target:"_blank",download:i.download,rel:"noopener noreferrer",small:"","aria-label":t.name,text:"",fab:"",color:"#fff"},on:{click:function(e){e.stopPropagation()}}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-"+e._s(i.icon))])],1)})):e._e(),e.items.length>1?a("v-btn",{staticClass:"px-0 mx-1",attrs:{small:"",text:"","aria-label":"Favorite",fab:"",color:t.favorite?"error":"#fff"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.favorite(t)}}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-heart")])],1):e._e()],2)],1)])],1)],1)],1)],1)})),1)],1)},r=[],s=(a("a623"),a("4de4"),a("caad"),a("fb6a"),a("b0c0"),a("b64b"),a("ac1f"),a("2532"),a("841c"),a("1276"),a("fc11")),n=a("f3f3"),o={name:"CardsList",props:{items:{type:Array,required:!0},route:{type:Object,required:!0}},data:function(){return{search:""}},computed:{filteredItems:function(){var e=this;!this.search&&this.getItemsOrder(this.items);var t=this.items.filter((function(t){return e.search.toLowerCase().split(" ").every((function(e){return t.name.toLowerCase().includes(e)}))}));return this.getItemsOrder(t)}},methods:{getActions:function(e){var t=[];return e.bggURL&&t.push({link:e.bggURL,name:"Board game geek",icon:"cards"}),e.rulesURL&&t.push({link:e.rulesURL,name:"Rules",icon:"book-open-variant",download:!0}),e.melodiceURL&&t.push({link:e.melodiceURL,name:"Melodice",icon:"music"}),t},imagePath:function(e,t){return e.imageUrl?e.imageUrl:e.teams?a("e679")("./game.".concat(t)):a("544f")("./team.".concat(t))},getItemsOrder:function(e){var t=e.slice().reverse();return t.sort((function(e,t){return t.favorite-e.favorite}))},setRoute:function(e){var t=Object(n["a"])({},this.route);return t.params=Object(s["a"])({},Object.keys(this.route.params)[0],e),t},favorite:function(e){var t=!e.favorite,a={favorite:t,_id:e._id};this.$emit("favorite",a)}}},l=o,c=(a("abab"),a("2877")),d=a("6544"),u=a.n(d),m=a("8336"),f=a("b0af"),v=a("99d9"),g=a("62ad"),h=a("132d"),p=a("adda"),b=a("24b2"),_=a("f2e7"),y=a("90a2"),k=a("58df"),O=a("80d2"),L=Object(k["a"])(b["a"],_["a"]).extend({name:"VLazy",directives:{intersect:y["a"]},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return Object(n["a"])({},this.measurableStyles)}},methods:{genContent:function(){var e=Object(O["s"])(this);if(!this.transition)return e;var t=[];return this.isActive&&t.push(e),this.$createElement("transition",{props:{name:this.transition}},t)},onObserve:function(e,t,a){this.isActive||(this.isActive=a)}},render:function(e){return e(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}}),U=a("8860"),x=a("da13"),j=a("5d23"),R=a("1baa"),C=a("34c3"),w=a("490a"),I=a("0fd9"),V=a("8654"),D=Object(c["a"])(l,i,r,!1,null,"d690ac8c",null);t["a"]=D.exports;u()(D,{VBtn:m["a"],VCard:f["a"],VCardTitle:v["c"],VCol:g["a"],VIcon:h["a"],VImg:p["a"],VLazy:L,VList:U["a"],VListItem:x["a"],VListItemContent:j["a"],VListItemGroup:R["a"],VListItemIcon:C["a"],VProgressCircular:w["a"],VRow:I["a"],VTextField:V["a"]})},"47b9":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("the-title",{attrs:{title:"Games",icon:"dice-multiple",component:"game-add-dialog"}}),e.games?a("cards-list",{attrs:{route:e.gameRoute,items:e.games},on:{favorite:e.toggleFavorite},scopedSlots:e._u([{key:"action",fn:function(e){var t=e.item;return[a("game-edit-dialog",{attrs:{game:t}})]}}],null,!1,3616864036)}):e._e()],1)},r=[],s=a("f3f3"),n=a("882a"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("the-dialog",{attrs:{"activator-icon":"pencil",color:"#fff",header:"Edit game info",simple:"","submit-logic":e.onSubmit}},[e._l(e.fields,(function(t){return a("v-text-field",{key:t.label,attrs:{clearable:"",rules:t.rules,"prepend-icon":"mdi-"+t.icon,label:t.label},model:{value:t.value,callback:function(a){e.$set(t,"value","string"===typeof a?a.trim():a)},expression:"field.value"}})})),e.fields.imageUrl.value?a("v-img",{attrs:{src:e.fields.imageUrl.value,alt:e.fields.name.value,height:"200",contain:""}}):e._e(),a("v-switch",{attrs:{label:"Delete game",color:"error","hide-details":""},model:{value:e.toDelete,callback:function(t){e.toDelete=t},expression:"toDelete"}})],2)},l=[],c=(a("b0c0"),a("5f37")),d=a("2f62"),u={name:"GameEditDialog",props:{game:{type:Object,required:!0}},data:function(){return{toDelete:!1,fields:{name:{label:"Name",icon:"dice-multiple",value:this.game.name,rules:c["e"]},bggURL:{label:"Board geek game URL",icon:"cards",value:void 0===this.game.bggURL?"":this.game.bggURL,rules:[c["f"],c["b"]]},melodiceURL:{label:"Melodice URL",icon:"music",value:void 0===this.game.melodiceURL?"":this.game.melodiceURL,rules:[c["f"],c["b"]]},rulesURL:{label:"Rules URL",icon:"book-open-variant",value:void 0===this.game.rulesURL?"":this.game.rulesURL,rules:[c["f"],c["b"]]},imageUrl:{label:"Image URL",icon:"image",value:void 0===this.game.imageUrl?"":this.game.imageUrl,rules:[c["f"],c["b"]]}}}},methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])("games",["updateGame","deleteGame"])),{},{onSubmit:function(){if(this.toDelete)return this.deleteGame(this.game._id);this.updateTheGame()},updateTheGame:function(){var e={_id:this.game._id,name:this.fields.name.value,bggURL:this.fields.bggURL.value,melodiceURL:this.fields.melodiceURL.value,rulesURL:this.fields.rulesURL.value,imageUrl:this.fields.imageUrl.value};this.updateGame(e)}})},m=u,f=a("2877"),v=a("6544"),g=a.n(v),h=a("adda"),p=a("b73d"),b=a("8654"),_=Object(f["a"])(m,o,l,!1,null,null,null),y=_.exports;g()(_,{VImg:h["a"],VSwitch:p["a"],VTextField:b["a"]});var k=a("3383"),O={name:"GameList",components:{TheTitle:n["a"],GameEditDialog:y,CardsList:k["a"]},data:function(){return{gameRoute:{name:"game",params:{gameId:""}}}},computed:Object(s["a"])({},Object(d["d"])("games",["games"])),created:function(){this.loadData()},methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])("games",["loadGames","updateGame"])),{},{toggleFavorite:function(e){this.updateGame(e)},loadData:function(){var e;null!==(e=this.games)&&void 0!==e||this.loadGames()}})},L=O,U=Object(f["a"])(L,i,r,!1,null,null,null);t["default"]=U.exports},"47d6":function(e,t,a){},"4f0c":function(e,t,a){e.exports=a.p+"img/game.10a04d7d.webp"},"544f":function(e,t,a){var i={"./team.jpg":"1efd","./team.webp":"c368"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=s,e.exports=r,r.id="544f"},"841c":function(e,t,a){"use strict";var i=a("d784"),r=a("825a"),s=a("1d80"),n=a("129f"),o=a("14c3");i("search",1,(function(e,t,a){return[function(t){var a=s(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,a):new RegExp(t)[e](String(a))},function(e){var i=a(t,e,this);if(i.done)return i.value;var s=r(e),l=String(this),c=s.lastIndex;n(c,0)||(s.lastIndex=0);var d=o(s,l);return n(s.lastIndex,c)||(s.lastIndex=c),null===d?-1:d.index}]}))},"99d9":function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return l}));var i=a("b0af"),r=a("80d2"),s=Object(r["i"])("v-card__actions"),n=Object(r["i"])("v-card__subtitle"),o=Object(r["i"])("v-card__text"),l=Object(r["i"])("v-card__title");i["a"]},abab:function(e,t,a){"use strict";var i=a("47d6"),r=a.n(i);r.a},b0af:function(e,t,a){"use strict";a("0481"),a("4069"),a("a9e3");var i=a("f3f3"),r=(a("615b"),a("10d2")),s=a("297c"),n=a("1c87"),o=a("58df");t["a"]=Object(o["a"])(s["a"],n["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r["a"].options.computed.classes.call(this))},styles:function(){var e=Object(i["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=s["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),a=t.tag,i=t.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),e(a,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},c368:function(e,t,a){e.exports=a.p+"img/team.bf4c6f13.webp"},cdc8:function(e,t,a){e.exports=a.p+"img/game.711fd041.jpg"},e679:function(e,t,a){var i={"./game.jpg":"cdc8","./game.webp":"4f0c"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=s,e.exports=r,r.id="e679"}}]);
//# sourceMappingURL=games.0c5825af.js.map