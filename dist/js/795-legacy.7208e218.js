"use strict";(self["webpackChunksas_front"]=self["webpackChunksas_front"]||[]).push([[795],{5424:function(t,e,i){i.d(e,{Z:function(){return v}});var n=i(5200),s=i(4367),a=(i(1539),i(7327),i(3325)),l=i(5827),r=i(172),o=i(6952),c=i(7352),u=i(8085),h=i(2936),p=i(6505),d=i(9131),f=i(1824),v=(0,a.Z)(o.Z,d.Z,p.Z,u.Z,(0,c.d)("chipGroup"),(0,h.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({"v-chip":!0},p.Z.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(p.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=(0,n.Z)(e,2),s=i[0],a=i[1];t.$attrs.hasOwnProperty(s)&&(0,f.fK)(s,a,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(r.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.Zq,t)},genClose:function(){var t=this;return this.$createElement(r.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),n=i.tag,a=i.data;a.attrs=(0,s.Z)((0,s.Z)({},a.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:a.attrs.tabindex}),a.directives.push({name:"show",value:this.active}),a=this.setBackgroundColor(this.color,a);var l=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(l,a),e)}})},3568:function(t,e,i){i.d(e,{Z:function(){return r}});var n=i(4367),s=(i(9653),i(4589)),a=i(8085),l=i(3325),r=(0,l.Z)(a.Z).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return(0,n.Z)({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:(0,s.kb)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},7781:function(t,e,i){i.d(e,{Z:function(){return p}});var n=i(8932),s=i(4367),a=i(9726),l=(i(9653),i(6699),i(1539),i(1249),i(8309),i(2222),i(561),i(4747),i(7042),i(5978)),r=l.Z,o=i(5424),c=i(4589),u=i(1824),h=i(6290),p=r.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return(0,c.TI)(t).every((function(t){return null!=t&&"object"===(0,a.Z)(t)}))}}},computed:{classes:function(){return(0,s.Z)((0,s.Z)({},r.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var i=e.size,n=void 0===i?0:i;return t+n}),0);return this.$vuetify.lang.t(this.counterSizeString,t,(0,c.XE)(e,1024===this.base))},internalArrayValue:function(){return(0,c.TI)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var i=e.name,n=void 0===i?"":i,s=e.size,a=void 0===s?0:s,l=t.truncateText(n);return t.showSize?"".concat(l," (").concat((0,c.XE)(a,1024===t.base),")"):l})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&(0,u.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];(0,c.vZ)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,i){return t.$createElement(o.Z,{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(i,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=r.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=(0,h.y0)(t.data.style,{display:"none"})),t},genInput:function(){var t=r.options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(i,n){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[n],file:i,index:n}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=r.options.methods.genTextFieldSlot.call(this);return e.data.on=(0,s.Z)((0,s.Z)({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=(0,n.Z)(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},336:function(t,e,i){i.d(e,{d:function(){return a}});var n=i(9669),s=i.n(n),a=s().create({baseURL:"http://localhost:8080/"})},8795:function(t,e,i){i.r(e),i.d(e,{default:function(){return E}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"upload-csv"}},[i("v-main",[i("v-container",{attrs:{fluid:"","fill-height":""}},[i("v-layout",{attrs:{"align-center":"","justify-center":""}},[i("v-flex",{attrs:{xs12:"",sm8:"",md10:""}},[i("div",[i("h1",{staticClass:"text-center text-color"},[t._v("UPLOAD EMPRESA")]),i("v-row",{staticClass:"pa-4"},[i("v-col",[i("v-row",{staticClass:"mb-6",attrs:{"no-gutters":""}},[i("v-col",[i("v-file-input",{attrs:{accept:"text/csv",color:"blue accent-4",counter:"",label:"Inserir o arquivo",multiple:"",placeholder:"Inserir o arquivo","prepend-icon":"mdi-paperclip",outlined:"","show-size":1e3,"background-color":"#C0C0C0"},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.index,s=e.text;return[n<2?i("v-chip",{attrs:{color:"blue accent-4",dark:"",label:"",small:""}},[t._v(" "+t._s(s)+" ")]):2===n?i("span",{staticClass:"overline grey--text text--darken-3 mx-2"},[t._v(" +"+t._s(t.files.length-2)+" File(s) ")]):t._e()]}}]),model:{value:t.filesEmpresa,callback:function(e){t.filesEmpresa=e},expression:"filesEmpresa"}})],1)],1),i("v-row",[i("v-col",[i("div",{attrs:{id:"btn"}},[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"primary",id:"botao-enviar"},on:{click:t.sendFileEmpresa}},[t._v(" Enviar ")])],1)],1)])],1)],1)],1),i("v-row",[i("v-col",[i("v-card",{staticClass:"pa-3",attrs:{color:"#C0C0C0"}},[i("v-card",{staticClass:"mx-auto"},[i("v-simple-table",[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[t._v("CNPJ")]),i("th",{staticClass:"text-left"},[t._v("Cidade")]),i("th",{staticClass:"text-left"},[t._v("CNAE")]),i("th",{staticClass:"text-left"},[t._v("Empresa Origem")])])]),i("tbody",t._l(t.return_empresa,(function(e){return i("tr",{key:e.id},[i("td",[t._v(t._s(e.cnpj))]),i("td",[t._v(t._s(e.cidade.descricao))]),i("td",[t._v(t._s(e.cnae.descricao))]),i("td",[t._v(t._s(e.origem))])])})),0)])],1)],1)],1)],1)],1)])],1)],1)],1)],1)},s=[],a=i(2032),l=(i(8309),i(336)),r=i(6455),o=i.n(r),c={data:function(){return{URL_EMPRESA:"/empresa/leitor-csv",valid:!0,filesEmpresa:[],return_empresa:[]}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},sendFileEmpresa:function(){var t=this;this.validate();var e,i=new FormData,n=(0,a.Z)(this.filesEmpresa);try{for(n.s();!(e=n.n()).done;){var s=e.value;i.append("arquivo",s,s.name),console}}catch(r){n.e(r)}finally{n.f()}l.d.post(this.URL_EMPRESA,i).then((function(e){t.return_empresa=e.data,t.reset(),o().fire("Sucesso","Arquivo importado com sucesso","success")})).catch((function(t){o().fire("Oops...","Erro ao importar o arquivo - Erro: "+t.return_empresa.data.error,"error")}))}}},u=c,h=i(1001),p=i(3453),d=i.n(p),f=i(7524),v=i(680),m=i(3237),g=i(5424),b=i(2102),y=i(4228),C=i(7781),x=i(5972),Z=i(6232),S=i(4470),_=i(7877),$=i(2877),V=i(3568),k=(0,h.Z)(u,n,s,!1,null,"acd55d90",null),E=k.exports;d()(k,{VApp:f.Z,VBtn:v.Z,VCard:m.Z,VChip:g.Z,VCol:b.Z,VContainer:y.Z,VFileInput:C.Z,VFlex:x.Z,VForm:Z.Z,VLayout:S.Z,VMain:_.Z,VRow:$.Z,VSimpleTable:V.Z})}}]);
//# sourceMappingURL=795-legacy.7208e218.js.map