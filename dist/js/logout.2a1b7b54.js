"use strict";(self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[]).push([[170],{1710:function(t,n,a){a.d(n,{IU:function(){return e},PR:function(){return u},Vx:function(){return c},kS:function(){return o},qv:function(){return i},x4:function(){return s}});var r=a(76051);const e=async function(t,n,a,e){const s=await r.ZP.post("authenticate/signup",{name:t,email:n,password:a,password_confirmation:e});return s.data},s=async function(t,n){const a=await r.ZP.post("authenticate/login",{email:t,password:n});return a.data},o=async function(t=null){t||(t="current");const n=await r.ZP.get("logout",{tokens:t});return n.data},u=async function(t){const n=await r.ZP.get(`/users/${t}`);return n.data},c=async function(t){const n=await r.ZP.put("/users/0",t);return n.data},i=async function(){const t=await r.ZP.get("/users/0/personal-access-tokens");return t.data}},28875:function(t,n,a){a.r(n),a.d(n,{default:function(){return m}});var r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-container",{staticClass:"d-flex justify-center align-center",attrs:{"fill-height":""}},[a("v-row",[a("v-col",[a("v-card",{staticClass:"ma-6 mx-auto",attrs:{loading:"loading"==t.status,"max-width":"500","loader-height":100,color:t.cardColor,outlined:""}},[a("v-card-title",[a("v-spacer"),"loading"==t.status?a("span",[t._v(" "+t._s(t.$t("pages.logout.loading"))+" ")]):t._e(),"error"==t.status?a("span",[t._v(" "+t._s(t.$t("pages.logout.unknown_error"))+" ")]):t._e(),a("v-spacer")],1)],1)],1)],1)],1)},e=[],s=a(1710),o={data(){return{loading:!0,status:"loading"}},computed:{cardColor(){switch(this.status){case"loading":return"";case"error":return"error";default:return""}}},async created(){await this.logout()},methods:{async logout(){this.status="loading";let t="current";try{await(0,s.kS)(t),this.$store.dispatch("User/logout"),this.$router.push({name:"Home"})}catch(n){this.status="error",console.log(n)}}}},u=o,c=a(1001),i=a(43453),l=a.n(i),d=a(53237),f=a(37118),g=a(82102),h=a(99846),p=a(62877),w=a(99762),v=(0,c.Z)(u,r,e,!1,null,null,null),m=v.exports;l()(v,{VCard:d.Z,VCardTitle:f.EB,VCol:g.Z,VContainer:h.Z,VRow:p.Z,VSpacer:w.Z})}}]);
//# sourceMappingURL=logout.2a1b7b54.js.map