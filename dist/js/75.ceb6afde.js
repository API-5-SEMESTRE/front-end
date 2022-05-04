"use strict";(self["webpackChunksas_front"]=self["webpackChunksas_front"]||[]).push([[75],{1075:function(t,e,i){i.r(e),i.d(e,{default:function(){return G}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"usuario-crud"}},[i("v-main",[i("v-container",{attrs:{fluid:"","fill-height":""}},[i("v-layout",{attrs:{"align-center":"","justify-center":""}},[i("v-flex",{attrs:{xs12:"",sm8:"",md10:""}},[i("h1",{staticClass:"text-center white--text pb-5"},[t._v("GESTÃO USUÁRIO")]),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.lista_de_usuarios,"sort-by":"calories"},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v("CRUD")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,o=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",o,!1),s),[t._v(" Novo Usuário ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",{attrs:{color:"#415a77"}},[i("v-card-title",[i("span",{staticClass:"text-h5 white--text"},[t._v(t._s(t.formTitle))])]),i("v-card-text",[i("v-container",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:t.cadastrar_usuario},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"24"}},[i("span",{staticStyle:{color:"white","font-size":"18px"}},[t._v("Nome")]),i("v-text-field",{attrs:{label:"Nome",rules:t.regra_nome,"single-line":"",solo:"",required:"",dense:"","background-color":"#e0e1dd"},model:{value:t.usuario.nome,callback:function(e){t.$set(t.usuario,"nome",e)},expression:"usuario.nome"}})],1)],1),i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"24"}},[i("span",{staticStyle:{color:"white","font-size":"18px"}},[t._v("E-mail")]),i("v-text-field",{attrs:{label:"E-mail",rules:t.regra_email,"single-line":"",solo:"",required:"",dense:"","background-color":"#e0e1dd"},model:{value:t.usuario.email,callback:function(e){t.$set(t.usuario,"email",e)},expression:"usuario.email"}})],1)],1),i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"24"}},[i("span",{staticStyle:{color:"white","font-size":"18px"}},[t._v("Senha")]),i("v-text-field",{attrs:{label:"Senha",rules:t.regra_senha,"background-color":"#e0e1dd","single-line":"",solo:"",required:"",dense:"",password:"","append-icon":t.show1?"mdi-eye":"mdi-eye-off",type:t.show1?"text":"password"},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.usuario.senha,callback:function(e){t.$set(t.usuario,"senha",e)},expression:"usuario.senha"}})],1)],1),i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"24"}},[i("span",{staticStyle:{color:"white","font-size":"18px"}},[t._v("Tipo de Acesso")]),i("v-select",{attrs:{items:t.tipo_acesso,label:"Tipo de Acesso","single-line":"",solo:"",required:"",dense:"","background-color":"#e0e1dd",rules:[function(t){return!!t||"O tipo do usuário é obrigatório"}]},model:{value:t.usuario.tipoAcesso,callback:function(e){t.$set(t.usuario,"tipoAcesso",e)},expression:"usuario.tipoAcesso"}})],1)],1),i("v-row",[i("v-col"),i("v-col",[i("v-btn",{attrs:{text:"",color:"white"},on:{click:t.close}},[t._v(" Cancelar ")])],1),i("v-col",[i("v-btn",{staticClass:"white--text mr-4",attrs:{color:"#1b263b",type:"submit",disabled:!t.valid}},[t._v(" Salvar ")])],1)],1)],1)],1)],1)],1)],1),i("v-dialog",{attrs:{"max-width":"540px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[i("v-card",{attrs:{color:"#272733"}},[i("v-card-title",{staticClass:"text-h5 white--text"},[t._v("Tem certeza de que deseja excluir este item?")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{text:"",color:"white"},on:{click:t.closeDelete}},[t._v(" Cancelar ")]),i("v-btn",{staticClass:"white--text mr-4",attrs:{color:"#C84634"},on:{click:function(e){return t.deletar_usuario(t.usuario)}}},[t._v("Sim")]),i("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var s=e.item;return[i("v-icon",{staticClass:"mr-2",on:{click:function(e){return t.editar_usuario(s)}}},[t._v(" mdi-pencil ")]),i("v-icon",{on:{click:function(e){return t.deleteItem(s)}}},[t._v(" mdi-delete ")])]}}],null,!0)})],1)],1)],1)],1)],1)},o=[],a=i(7121),r=i(6455),n=i.n(r),l={name:"usuario-crud",data:()=>({usuario:{id:"",nome:"",email:"",senha:"",tipoAcesso:""},valid:!0,regra_nome:[t=>!!t||"O nome é obrigatório"],regra_email:[t=>!!t||"O e-mail é obrigatório",t=>/.+@.+\..+/.test(t)||"E-mail inválido"],regra_senha:[t=>!!t||"A senha é obrigatória"],tipo_acesso:["ADMINISTRADOR","VENDEDOR","INTELIGENCIA"],show1:!1,lista_de_usuarios:[],dialog:!1,dialogDelete:!1,headers:[{text:"ID",align:"start",value:"id"},{text:"Nome",value:"nome"},{text:"Email",value:"email"},{text:"Tipo acesso",value:"tipoAcesso"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}),computed:{formTitle(){return-1===this.editedIndex?"Novo Usuário":"Editar Usuário"}},watch:{dialog(t){t||this.close()},dialogDelete(t){t||this.closeDelete()}},mounted(){this.exibir_usuario()},methods:{cadastrar_usuario(){this.usuario.id?(a.Z.atualizar_usuario(this.usuario).then((t=>{this.usuario={},n().fire("Sucesso","Usuário "+t.data.nome+" atualizado com sucesso!!!","success"),this.exibir_usuario()})).catch((t=>{n().fire("Oops...","Erro ao atualizar o usuário! - Erro: "+t.response.data.error,"error")})),this.close()):(a.Z.salvar_usuario(this.usuario).then((t=>{this.usuario={},n().fire("Sucesso","Usuário "+t.data.nome+" cadastrado com sucesso!!!","success"),this.exibir_usuario()})).catch((t=>{n().fire("Oops...","Erro ao cadastrar o usuário! - Erro: "+t.response.data.error,"error")})),this.close())},exibir_usuario(){a.Z.listar_usuarios().then((t=>{this.lista_de_usuarios=t.data})).catch((t=>{n().fire("Oops...","Erro ao carregar a tabela de usuários! - Erro: "+t.response.data.error,"error")}))},validate(){this.$refs.form.validate()},editar_usuario(t){this.editedIndex=this.lista_de_usuarios.indexOf(t),this.usuario=Object.assign({},t),this.dialog=!0},deleteItem(t){this.editedIndex=this.lista_de_usuarios.indexOf(t),this.usuario=Object.assign({},t),console.log(this.usuario),this.dialogDelete=!0},deletar_usuario(t){a.Z.excluir_usuario(t).then((t=>{n().fire("Sucesso","Usuário excluido com sucesso!!!","success"),this.exibir_usuario()})).catch((t=>{n().fire("Oops...","Erro ao excluir o usuário! - Erro: "+t.response.data.error,"error")})),this.closeDelete()},close(){this.dialog=!1,this.usuario={}},closeDelete(){this.dialogDelete=!1,this.usuario={}}}},c=l,u=i(1001),d=i(3453),h=i.n(d),v=i(7524),m=i(680),f=i(3237),p=i(7118),g=i(2102),x=i(4228),b=i(9292),_=i(3242),w=i(5795),k=i(5907),y=i(3944),C=i(390),Z=i(423),A=i(5703),E=i(5600),S=i(3325),O=i(1824),T=i(4589);const $=(0,S.Z)(k.Z,y.Z,C.Z,Z.Z,A.Z,w.Z);var D=$.extend({name:"v-dialog",directives:{ClickOutside:E.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,O.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):C.Z.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{this.$refs.content.contains(document.activeElement)||(this.previousActiveElement=document.activeElement,this.$refs.content.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===T.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find((t=>!t.hasAttribute("disabled")));e&&e.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(_.Z,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog",tabindex:this.isActive?0:void 0,"aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,T.kb)(this.maxWidth),width:(0,T.kb)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}}),I=i(1418),V=i(5972),B=i(6232),z=i(6428),N=i(4470),U=i(7877),j=i(2877),F=i(4330),q=i(9762),L=i(5978),M=i(6656),R=i(7921),W=(0,u.Z)(c,s,o,!1,null,null,null),G=W.exports;h()(W,{VApp:v.Z,VBtn:m.Z,VCard:f.Z,VCardActions:p.h7,VCardText:p.ZB,VCardTitle:p.EB,VCol:g.Z,VContainer:x.Z,VDataTable:b.Z,VDialog:D,VDivider:I.Z,VFlex:V.Z,VForm:B.Z,VIcon:z.Z,VLayout:N.Z,VMain:U.Z,VRow:j.Z,VSelect:F.Z,VSpacer:q.Z,VTextField:L.Z,VToolbar:M.Z,VToolbarTitle:R.qW})}}]);
//# sourceMappingURL=75.ceb6afde.js.map