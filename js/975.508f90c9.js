(globalThis["webpackChunktamponati_client"]=globalThis["webpackChunktamponati_client"]||[]).push([[975],{3245:(t,o,e)=>{"use strict";e.d(o,{Z:()=>l,e:()=>n});var a=e(4562);const l={id:null,nomecompleto:"",tipo:null},n=(0,a.r8)((()=>(0,a.y$)("vue-tamponati",{...l},sessionStorage)))},1975:(t,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>Z});var a=e(3673);function l(t,o,e,l,n,r){const i=(0,a.up)("tool-bar"),u=(0,a.up)("q-header"),s=(0,a.up)("router-view"),c=(0,a.up)("q-page-container"),p=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(p,{view:"lHh Lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{elevated:""},{default:(0,a.w5)((()=>[(0,a.Wm)(i)])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s)])),_:1})])),_:1})}const n=(0,a.Uk)("Tamponati App");function r(t,o,e,l,r,i){const u=(0,a.up)("q-btn"),s=(0,a.up)("q-toolbar-title"),c=(0,a.up)("q-space"),p=(0,a.up)("q-toolbar");return(0,a.wg)(),(0,a.j4)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{stretch:"",flat:"",icon:"home",to:"/"}),(0,a.Wm)(s,{class:"text-weight-bold"},{default:(0,a.w5)((()=>[n])),_:1}),(0,a.Wm)(c),t.state.tipo?((0,a.wg)(),(0,a.j4)(a.HY,{key:0},[(0,a.Wm)(u,{stretch:"",flat:"",to:4==t.state.tipo?"/profilolab":"/profilo",label:t.state.nomecompleto},null,8,["to","label"]),(0,a.Wm)(u,{stretch:"",flat:"",icon:"logout",title:"Logout",onClick:t.logout},null,8,["onClick"])],64)):((0,a.wg)(),(0,a.j4)(a.HY,{key:1},[(0,a.Wm)(u,{stretch:"",flat:"",label:"Voglio Convenzionarmi",icon:"biotech",to:"/registerlab"}),(0,a.Wm)(u,{stretch:"",flat:"",label:"Register",icon:"person",to:"/register"}),(0,a.Wm)(u,{stretch:"",flat:"",label:"Login",icon:"login",to:"/login"})],64))])),_:1})}var i=e(2490),u=e(3245);const s=(0,a.aZ)({name:"ToolBar",setup(){const t=(0,u.e)(),o=async()=>{await i.auth.signOut(),t.value={...u.Z}};return{state:t,logout:o}}});var c=e(9570),p=e(8240),m=e(3747),g=e(2025),b=e(7518),f=e.n(b);s.render=r;const h=s;f()(s,"components",{QToolbar:c.Z,QBtn:p.Z,QToolbarTitle:m.Z,QSpace:g.Z});const d=(0,a.aZ)({name:"MainLayout",components:{ToolBar:h}});var w=e(3066),W=e(3812),v=e(2652);d.render=l;const Z=d;f()(d,"components",{QLayout:w.Z,QHeader:W.Z,QPageContainer:v.Z})}}]);