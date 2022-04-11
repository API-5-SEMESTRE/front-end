"use strict";(self["webpackChunksas_front"]=self["webpackChunksas_front"]||[]).push([[649],{6868:function(t,e,i){i.r(e),i.d(e,{default:function(){return T}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"upload-csv"}},[i("v-main",[i("v-container",{attrs:{fluid:"","fill-height":""}},[i("v-layout",{attrs:{"align-center":"","justify-center":""}},[i("v-flex",{attrs:{xs12:"",sm8:"",md10:""}},[i("h1",{staticClass:"text-center white--text"},[t._v("UPLOAD CSV")]),i("p",{staticClass:"text-center white--text"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veritatis illo unde asperiores voluptates voluptatem, enim at ullam, dolore omnis cumque repellendus nesciunt dolores nihil? Praesentium fuga aut optio quam. ")]),i("v-row",{staticClass:"pa-4"},[i("v-col",[i("v-card",{staticClass:"pa-2 rounded-xl",attrs:{tile:"",outlined:"",color:"white"}},[i("v-card-text",[i("v-row",{staticClass:"mb-6",attrs:{"no-gutters":""}},[i("v-col",[i("client-only",[i("v-file-input",{attrs:{color:"blue accent-4",counter:"",label:"Inserir o CSV",placeholder:"Inserir o CSV","prepend-icon":"mdi-paperclip",outlined:"","show-size":1e3},scopedSlots:t._u([{key:"selection",fn:function(e){var s=e.index,l=e.text;return[s<2?i("v-chip",{attrs:{color:"blue accent-4",dark:"",label:"",small:""}},[t._v(" "+t._s(l)+" ")]):2===s?i("span",{staticClass:"overline grey--text text--darken-3 mx-2"},[t._v(" +"+t._s(t.files.length-2)+" File(s) ")]):t._e()]}}]),model:{value:t.files,callback:function(e){t.files=e},expression:"files"}})],1)],1)],1),i("v-row",[i("v-col",[i("div",{attrs:{id:"btn"}},[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"primary",id:"botao-enviar"},on:{click:t.sendFile}},[t._v(" Enviar ")])],1)],1)])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},l=[],n=i(6455),a=i.n(n),r=i(336),o={name:"upload-csv",head:{title:"Upload CSV"},data:()=>({IMPORT_URI:"/codelist/import",valid:!0,files:[],response:[]}),methods:{validate(){this.$refs.form.validate()},reset(){this.$refs.form.reset()},sendFile(){this.validate();const t=new FormData;for(let e of this.files)t.append("files",e,e.name);r.d.post(this.IMPORT_URI,t).then((t=>{console.log(t),this.response=t.data,this.reset()}),a()("Sucesso!","Arquivo salvo com sucesso!","success"))},removeFile(t){this.files.splice(t,1)}}},u=o,h=i(1001),c=i(3453),p=i.n(c),d=i(7524),f=i(680),v=i(3237),m=i(7118),y=i(5424),g=i(2102),S=i(4228),V=i(5978),x=V.Z,C=i(4589),b=i(1824),$=i(6290),_=x.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>(0,C.TI)(t).every((t=>null!=t&&"object"===typeof t))}},computed:{classes(){return{...x.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce(((t,{size:e=0})=>t+e),0);return this.$vuetify.lang.t(this.counterSizeString,t,(0,C.XE)(e,1024===this.base))},internalArrayValue(){return(0,C.TI)(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((t=>{const{name:e="",size:i=0}=t,s=this.truncateText(e);return this.showSize?`${s} (${(0,C.XE)(i,1024===this.base)})`:s})):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&(0,b.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];(0,C.vZ)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map(((t,e)=>this.$createElement(y.Z,{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t]))):[]},genControl(){const t=x.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=(0,$.y0)(t.data.style,{display:"none"})),t},genInput(){const t=x.options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",(()=>{this.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach(((e,i)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[i],file:e,index:i}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=x.options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:()=>this.$refs.input.click()},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}}),w=i(5972),I=i(6232),z=i(4470),k=i(7877),Z=i(2877),F=(0,h.Z)(u,s,l,!1,null,"1d69e5ae",null),T=F.exports;p()(F,{VApp:d.Z,VBtn:f.Z,VCard:v.Z,VCardText:m.ZB,VChip:y.Z,VCol:g.Z,VContainer:S.Z,VFileInput:_,VFlex:w.Z,VForm:I.Z,VLayout:z.Z,VMain:k.Z,VRow:Z.Z})}}]);
//# sourceMappingURL=649.d7577f7c.js.map