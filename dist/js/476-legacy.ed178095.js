"use strict";(self["webpackChunksas_front"]=self["webpackChunksas_front"]||[]).push([[476],{9508:function(t,a,e){e.r(a),e.d(a,{default:function(){return w}});var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"relatorios-score"}},[e("v-main",[e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{"align-center":"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm8:"",md10:""}},[e("div",[e("v-row",[e("v-col",[e("v-row",{staticClass:"pa-4"},[e("v-card",{staticClass:"pa-3 mx-auto",attrs:{color:"#C0C0C0"}},[e("v-card",{staticClass:"pt-2 pb-2",attrs:{width:"600"}},[e("v-row",[e("v-col",[e("h1",{staticClass:"text-center text-color"},[t._v(" PESQUISAR SCORE POR ORIGEM ")])])],1),e("v-row",[e("v-col",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"mx-auto",attrs:{cols:"4"}},[e("v-select",{attrs:{items:t.grafico1_origem,label:"Origem","single-line":"",solo:"",required:"",dense:"","background-color":"#e0e1dd"},model:{value:t.grafico1.origem,callback:function(a){t.$set(t.grafico1,"origem",a)},expression:"grafico1.origem"}})],1),e("v-col",{staticClass:"mx-auto",attrs:{cols:"4"}},[e("v-text-field",{attrs:{label:"Quantidade Itens","single-line":"",solo:"",required:"",dense:"","background-color":"#e0e1dd"},model:{value:t.grafico1.Quantidade_itens,callback:function(a){t.$set(t.grafico1,"Quantidade_itens",a)},expression:"grafico1.Quantidade_itens"}})],1)],1),e("v-row",[e("v-col",[e("div",{attrs:{id:"btn"}},[e("v-form",{ref:"form",attrs:{"lazy-validation":""}},[e("v-btn",{staticClass:"mr-4",attrs:{color:"primary",id:"botao-enviar"},on:{click:function(a){return t.gerarGraficoScoreOrigem()}}},[t._v(" Gerar Gráfico ")])],1)],1)])],1)],1)],1)],1)],1)],1)],1)],1)],1)])],1)],1)],1)],1)},o=[],i=(e(1539),e(4747),e(7941),e(9669)),s=e.n(i),c={components:{},data:function(){return{grafico1:{origem:"",Quantidade_itens:""},grafico1_origem:["SPC","CONCORRENTE"],lista_cnpj_grafico1:[],lista_score_grafico1:[]}},methods:{gerarGraficoScoreOrigem:function(){var t=this;s()({url:"http://localhost:8080/empresa/pesquisar-score-por-origem/SPC/1/10/0",method:"GET"}).then((function(a){console.log(a.data),Object.keys(a.data).forEach((function(a){t.lista_cnpj_grafico1.push(a.cnpj)})),console.log(t.lista_cnpj_grafico1),t.loaded=!0}))}}},n=c,l=e(1001),d=e(3453),u=e.n(d),f=e(7524),g=e(680),v=e(3237),m=e(2102),p=e(4228),C=e(5972),_=e(6232),h=e(4470),b=e(7877),x=e(2877),Z=e(7032),V=e(5978),k=(0,l.Z)(n,r,o,!1,null,"35f29e92",null),w=k.exports;u()(k,{VApp:f.Z,VBtn:g.Z,VCard:v.Z,VCol:m.Z,VContainer:p.Z,VFlex:C.Z,VForm:_.Z,VLayout:h.Z,VMain:b.Z,VRow:x.Z,VSelect:Z.Z,VTextField:V.Z})}}]);
//# sourceMappingURL=476-legacy.ed178095.js.map