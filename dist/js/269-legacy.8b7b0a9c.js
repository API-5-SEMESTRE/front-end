"use strict";(self["webpackChunksas_front"]=self["webpackChunksas_front"]||[]).push([[269],{7781:function(t,e,i){i.d(e,{Z:function(){return d}});var n=i(8932),a=i(4367),s=i(9726),r=(i(9653),i(6699),i(1539),i(1249),i(8309),i(2222),i(561),i(4747),i(7042),i(5978)),l=r.Z,o=i(5424),u=i(4589),c=i(1824),h=i(6290),d=l.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return(0,u.TI)(t).every((function(t){return null!=t&&"object"===(0,s.Z)(t)}))}}},computed:{classes:function(){return(0,a.Z)((0,a.Z)({},l.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var i=e.size,n=void 0===i?0:i;return t+n}),0);return this.$vuetify.lang.t(this.counterSizeString,t,(0,u.XE)(e,1024===this.base))},internalArrayValue:function(){return(0,u.TI)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var i=e.name,n=void 0===i?"":i,a=e.size,s=void 0===a?0:a,r=t.truncateText(n);return t.showSize?"".concat(r," (").concat((0,u.XE)(s,1024===t.base),")"):r})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&(0,c.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];(0,u.vZ)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,i){return t.$createElement(o.Z,{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(i,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=l.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=(0,h.y0)(t.data.style,{display:"none"})),t},genInput:function(){var t=l.options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(i,n){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[n],file:i,index:n}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=l.options.methods.genTextFieldSlot.call(this);return e.data.on=(0,a.Z)((0,a.Z)({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=(0,n.Z)(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},1251:function(t,e,i){i.r(e),i.d(e,{default:function(){return k}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"upload-csv"}},[i("v-main",[i("v-container",{attrs:{fluid:"","fill-height":""}},[i("v-layout",{attrs:{"align-center":"","justify-center":""}},[i("v-flex",{attrs:{xs12:"",sm8:"",md10:""}},[i("div",{staticClass:"pt-16"},[i("h1",{staticClass:"text-center white--text"},[t._v("UPLOAD CNAE")]),i("v-row",{staticClass:"pa-4"},[i("v-col",[i("v-card",{staticClass:"pa-2 rounded-xl",attrs:{tile:"",outlined:"",color:"white"}},[i("v-card-text",[i("v-row",{staticClass:"mb-6",attrs:{"no-gutters":""}},[i("v-col",[i("v-file-input",{attrs:{accept:"text/csv",color:"blue accent-4",counter:"",label:"Inserir o arquivo",multiple:"",placeholder:"Inserir o arquivo","prepend-icon":"mdi-paperclip",outlined:"","show-size":1e3},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.index,a=e.text;return[n<2?i("v-chip",{attrs:{color:"blue accent-4",dark:"",label:"",small:""}},[t._v(" "+t._s(a)+" ")]):2===n?i("span",{staticClass:"overline grey--text text--darken-3 mx-2"},[t._v(" +"+t._s(t.files.length-2)+" File(s) ")]):t._e()]}}]),model:{value:t.filesCnae,callback:function(e){t.filesCnae=e},expression:"filesCnae"}})],1)],1),i("v-row",[i("v-col",[i("div",{attrs:{id:"btn"}},[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"primary",id:"botao-enviar"},on:{click:t.sendFileCnae}},[t._v(" Enviar ")])],1)],1)])],1)],1)],1)],1)],1),i("v-row",[i("v-col",[i("v-card",{staticClass:"mx-auto rounded-xl"},[i("v-simple-table",[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[t._v("Id")]),i("th",{staticClass:"text-left"},[t._v("Código")]),i("th",{staticClass:"text-left"},[t._v("Descrição")])])]),i("tbody",t._l(t.return_cnae,(function(e){return i("tr",{key:e.id},[i("td",[t._v(t._s(e.id))]),i("td",[t._v(t._s(e.codigo))]),i("td",[t._v(t._s(e.descricao))])])})),0)])],1)],1)],1)],1)])],1)],1)],1)],1)},a=[],s=i(2032),r=(i(8309),i(336)),l=i(6455),o=i.n(l),u={data:function(){return{URL_CNAE:"/cnae/leitor-csv",valid:!0,filesCnae:[],return_cnae:[]}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},sendFileCnae:function(){var t=this;this.validate();var e,i=new FormData,n=(0,s.Z)(this.filesCnae);try{for(n.s();!(e=n.n()).done;){var a=e.value;i.append("arquivo",a,a.name)}}catch(l){n.e(l)}finally{n.f()}r.d.post(this.URL_CNAE,i).then((function(e){t.return_cnae=e.data,t.reset(),o().fire("Sucesso","Arquivo importado com sucesso","success")})).catch((function(t){o().fire("Oops...","Erro ao importar o arquivo - Erro: "+t.return_cnae.data.error,"error")}))}}},c=u,h=i(1001),d=i(3453),p=i.n(d),f=i(7524),v=i(680),m=i(3237),y=i(7118),g=i(5424),C=i(2102),x=i(4228),S=i(7781),V=i(5972),_=i(6232),b=i(4470),Z=i(7877),$=i(2877),w=i(3568),z=(0,h.Z)(c,n,a,!1,null,"4d358c84",null),k=z.exports;p()(z,{VApp:f.Z,VBtn:v.Z,VCard:m.Z,VCardText:y.ZB,VChip:g.Z,VCol:C.Z,VContainer:x.Z,VFileInput:S.Z,VFlex:V.Z,VForm:_.Z,VLayout:b.Z,VMain:Z.Z,VRow:$.Z,VSimpleTable:w.Z})}}]);
//# sourceMappingURL=269-legacy.8b7b0a9c.js.map