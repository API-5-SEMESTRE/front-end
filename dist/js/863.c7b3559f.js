"use strict";(self["webpackChunksas_front"]=self["webpackChunksas_front"]||[]).push([[863],{5424:function(t,e,i){i.d(e,{Z:function(){return d}});var s=i(3325),l=i(5827),a=i(172),n=i(6952),r=i(7352),o=i(8085),h=i(2936),c=i(6505),u=i(9131),p=i(1824),d=(0,s.Z)(n.Z,u.Z,c.Z,o.Z,(0,r.d)("chipGroup"),(0,h.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...c.Z.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(c.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,p.fK)(t,e,this)}))},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(a.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.Zq,t)},genClose(){return this.$createElement(a.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:i,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const l=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(l,s),e)}})},3568:function(t,e,i){i.d(e,{Z:function(){return n}});var s=i(4589),l=i(8085),a=i(3325),n=(0,a.Z)(l.Z).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:(0,s.kb)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},7781:function(t,e,i){i.d(e,{Z:function(){return h}});var s=i(5978),l=s.Z,a=i(5424),n=i(4589),r=i(1824),o=i(6290),h=l.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>(0,n.TI)(t).every((t=>null!=t&&"object"===typeof t))}},computed:{classes(){return{...l.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce(((t,{size:e=0})=>t+e),0);return this.$vuetify.lang.t(this.counterSizeString,t,(0,n.XE)(e,1024===this.base))},internalArrayValue(){return(0,n.TI)(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((t=>{const{name:e="",size:i=0}=t,s=this.truncateText(e);return this.showSize?`${s} (${(0,n.XE)(i,1024===this.base)})`:s})):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&(0,r.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];(0,n.vZ)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map(((t,e)=>this.$createElement(a.Z,{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t]))):[]},genControl(){const t=l.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=(0,o.y0)(t.data.style,{display:"none"})),t},genInput(){const t=l.options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",(()=>{this.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach(((e,i)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[i],file:e,index:i}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=l.options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:()=>this.$refs.input.click()},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})},336:function(t,e,i){i.d(e,{d:function(){return a}});var s=i(9669),l=i.n(s);const a=l().create({baseURL:"http://localhost:8080/"})},6863:function(t,e,i){i.r(e),i.d(e,{default:function(){return Z}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"upload-csv"}},[i("v-main",[i("v-container",{attrs:{fluid:"","fill-height":""}},[i("v-layout",{attrs:{"align-center":"","justify-center":""}},[i("v-flex",{attrs:{xs12:"",sm8:"",md10:""}},[i("div",[i("h1",{staticClass:"text-center text-color"},[t._v("UPLOAD CNAE")]),i("v-row",{staticClass:"pa-4"},[i("v-col",[i("v-row",{staticClass:"mb-6",attrs:{"no-gutters":""}},[i("v-col",[i("v-file-input",{attrs:{accept:"text/csv",color:"blue accent-4",counter:"",label:"Inserir o arquivo",multiple:"",placeholder:"Inserir o arquivo","prepend-icon":"mdi-paperclip",outlined:"","show-size":1e3,"background-color":"#C0C0C0"},scopedSlots:t._u([{key:"selection",fn:function(e){var s=e.index,l=e.text;return[s<2?i("v-chip",{attrs:{color:"blue accent-4",dark:"",label:"",small:""}},[t._v(" "+t._s(l)+" ")]):2===s?i("span",{staticClass:"overline grey--text text--darken-3 mx-2"},[t._v(" +"+t._s(t.files.length-2)+" File(s) ")]):t._e()]}}]),model:{value:t.filesCnae,callback:function(e){t.filesCnae=e},expression:"filesCnae"}})],1)],1),i("v-row",[i("v-col",[i("div",{attrs:{id:"btn"}},[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"primary",id:"botao-enviar"},on:{click:t.sendFileCnae}},[t._v(" Enviar ")])],1)],1)])],1)],1)],1),i("v-row",[i("v-col",[i("v-card",{staticClass:"pa-3",attrs:{color:"#C0C0C0"}},[i("v-card",{staticClass:"mx-auto"},[i("v-simple-table",[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[t._v("Id")]),i("th",{staticClass:"text-left"},[t._v("Código")]),i("th",{staticClass:"text-left"},[t._v("Descrição")])])]),i("tbody",t._l(t.return_cnae,(function(e){return i("tr",{key:e.id},[i("td",[t._v(t._s(e.id))]),i("td",[t._v(t._s(e.codigo))]),i("td",[t._v(t._s(e.descricao))])])})),0)])],1)],1)],1)],1)],1)])],1)],1)],1)],1)},l=[],a=i(336),n=i(6455),r=i.n(n),o={data:()=>({URL_CNAE:"/cnae/leitor-csv",valid:!0,filesCnae:[],return_cnae:[]}),methods:{validate(){this.$refs.form.validate()},reset(){this.$refs.form.reset()},sendFileCnae(){this.validate();const t=new FormData;for(let e of this.filesCnae)t.append("arquivo",e,e.name);a.d.post(this.URL_CNAE,t).then((t=>{this.return_cnae=t.data,this.reset(),r().fire("Sucesso","Arquivo importado com sucesso","success")})).catch((t=>{r().fire("Oops...","Erro ao importar o arquivo - Erro: "+t.return_cnae.data.error,"error")}))}}},h=o,c=i(1001),u=i(3453),p=i.n(u),d=i(7524),v=i(680),f=i(3237),g=i(5424),m=i(2102),C=i(4228),b=i(7781),y=i(5972),x=i(6232),$=i(4470),S=i(7877),_=i(2877),V=i(3568),k=(0,c.Z)(h,s,l,!1,null,"43685e50",null),Z=k.exports;p()(k,{VApp:d.Z,VBtn:v.Z,VCard:f.Z,VChip:g.Z,VCol:m.Z,VContainer:C.Z,VFileInput:b.Z,VFlex:y.Z,VForm:x.Z,VLayout:$.Z,VMain:S.Z,VRow:_.Z,VSimpleTable:V.Z})}}]);
//# sourceMappingURL=863.c7b3559f.js.map