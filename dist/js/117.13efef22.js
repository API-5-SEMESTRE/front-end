"use strict";(self["webpackChunksas_front"]=self["webpackChunksas_front"]||[]).push([[117],{3117:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",{attrs:{id:"login"}},[t("v-main",[t("v-container",{attrs:{fluid:"","fill-height":""}},[t("v-layout",{attrs:{"align-center":"","justify-center":""}},[t("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[t("h1",{staticClass:"text-center white--text"},[e._v("LOGIN")]),t("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(a){return a.preventDefault(),e.do_login.apply(null,arguments)}},model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[t("span",{staticStyle:{color:"white","font-size":"18px"}},[e._v("E-mail")]),t("v-text-field",{attrs:{label:"Email",rules:e.regra_email,"single-line":"",solo:"",required:"",dense:"","background-color":"white"},model:{value:e.usuario.email,callback:function(a){e.$set(e.usuario,"email",a)},expression:"usuario.email"}}),t("span",{staticStyle:{color:"white","font-size":"18px"}},[e._v("Senha")]),t("v-text-field",{attrs:{label:"Senha",rules:e.regra_senha,"background-color":"white","single-line":"",solo:"",required:"",dense:"",password:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password"},on:{"click:append":function(a){e.show1=!e.show1}},model:{value:e.usuario.senha,callback:function(a){e.$set(e.usuario,"senha",a)},expression:"usuario.senha"}}),t("div",{staticStyle:{"font-size":"18px",color:"black","text-align":"center"}},[t("v-btn",{staticClass:"white--text",attrs:{id:"botao-login",color:"#415a77",type:"submit",disabled:!e.valid},on:{click:e.validate}},[e._v("Login")])],1)],1)],1)],1)],1)],1)],1)},l=[],n={name:"IndexPage",data:()=>({usuario:{email:"",senha:""},show1:!1,valid:!0,regra_email:[e=>!!e||"O e-mail é obrigatório",e=>/.+@.+\..+/.test(e)||"E-mail inválido"],regra_senha:[e=>!!e||"A senha é obrigatória"]}),methods:{validate(){this.$refs.form.validate()}}},s=n,o=t(1001),r=t(3453),u=t.n(r),c=t(7524),d=t(680),f=t(4228),v=t(5972),h=t(6232),m=t(4470),p=t(7877),x=t(5978),g=(0,o.Z)(s,i,l,!1,null,null,null),b=g.exports;u()(g,{VApp:c.Z,VBtn:d.Z,VContainer:f.Z,VFlex:v.Z,VForm:h.Z,VLayout:m.Z,VMain:p.Z,VTextField:x.Z})}}]);
//# sourceMappingURL=117.13efef22.js.map