"use strict";(self["webpackChunkdoublebrunch"]=self["webpackChunkdoublebrunch"]||[]).push([[20],{5679:function(t,e,r){function a(t){return{all:t=t||new Map,on:function(e,r){var a=t.get(e);a?a.push(r):t.set(e,[r])},off:function(e,r){var a=t.get(e);a&&(r?a.splice(a.indexOf(r)>>>0,1):t.set(e,[]))},emit:function(e,r){var a=t.get(e);a&&a.slice().map((function(t){t(r)})),(a=t.get("*"))&&a.slice().map((function(t){t(e,r)}))}}}r.d(e,{Z:function(){return s}});const i=a();var s=i},2020:function(t,e,r){r.r(e),r.d(e,{default:function(){return Xt}});var a=r(6252),i=r(3577);const s=(0,a.uE)('<div class="fixed top-0 left-0 z-[999] w-full h-full p-[15px] pointer-events-none md:p-5"><div class="absolute top-0 left-0 w-full h-[15px] bg-secondary md:h-5"></div><div class="absolute top-0 left-0 w-[15px] h-full bg-secondary md:w-5"></div><div class="absolute bottom-0 right-0 w-full h-[15px] bg-secondary md:h-5"></div><div class="absolute bottom-0 right-0 w-[15px] h-full bg-secondary md:w-5"></div><div class="w-full h-full border-primary border-2"></div></div>',1),o=(0,a._)("svg",{class:"absolute top-0 left-0 w-full h-full"},[(0,a._)("rect",{class:"line",fill:"transparent"})],-1),l={class:"relative"},n=(0,a._)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",class:"stroke-primary group-hover:stroke-white"},[(0,a._)("rect",{width:"16",height:"12",rx:"3",transform:"translate(2 6)",fill:"none","stroke-width":"2"}),(0,a._)("path",{d:"M13,9V5A4,4,0,0,0,5,5V9",transform:"translate(1 1)",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"})],-1),p={key:0,class:"absolute top-[-6px] right-[-12px] flex justify-center items-center text-12px text-white bg-primary w-[18px] h-[18px] rounded-full group-hover:text-primary group-hover:bg-white"},c={class:"p-[15px] md:p-5"},d={class:"mt-[60px] md:mt-20 lg:mt-[100px]"};function u(t,e,r,u,m,h){const f=(0,a.up)("router-link"),x=(0,a.up)("HeaderLayout"),g=(0,a.up)("NavBar"),v=(0,a.up)("router-view"),b=(0,a.up)("FooterLayout");return(0,a.wg)(),(0,a.iD)(a.HY,null,[s,(0,a.Wm)(f,{to:"/cart",class:"btn-line fixed bottom-0 right-0 z-[9999] flex justify-center items-center bg-secondary w-[60px] h-[60px] group md:w-20 md:h-20"},{default:(0,a.w5)((()=>[o,(0,a._)("div",l,[n,m.cart.carts.length>0?((0,a.wg)(),(0,a.iD)("span",p,(0,i.zw)(m.cart.carts.length),1)):(0,a.kq)("",!0)])])),_:1}),(0,a._)("div",c,[(0,a.Wm)(x),(0,a.Wm)(g),(0,a._)("main",d,[(0,a.Wm)(v)]),(0,a.Wm)(b)])],64)}var m=r(6455),h=r.n(m),f=r(5679),x=r(9963),g=r(2835),v=r(6515),b=r(6633);const w=g,y={class:"fixed top-[15px] left-[15px] w-[calc(100%-1.875rem)] z-[999] flex bg-secondary border-primary border-2 md:top-5 md:left-5 md:w-[calc(100%-2.5rem)]"},_={class:"w-[100px] md:w-[240px]"},k={class:"border-primary border-r-2 h-full"},C=(0,a._)("picture",null,[(0,a._)("source",{media:"(min-width:768px)",srcset:w}),(0,a._)("img",{src:v,alt:"logo",class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"})],-1),O={class:"w-[calc(100%-100px)] flex md:w-[calc(100%-240px)]"},M={class:"relative"},F=(0,a._)("defs",null,[(0,a._)("clipPath",{id:"clip-icon-favorite"},[(0,a._)("rect",{width:"20",height:"20"})])],-1),W=(0,a._)("g",{id:"icon-favorite","clip-path":"url(#clip-icon-favorite)"},[(0,a._)("path",{id:"heart-solid",d:"M14.435,32.924a4.273,4.273,0,0,0-5.831.425l-.616.634-.616-.634a4.273,4.273,0,0,0-5.831-.425,4.487,4.487,0,0,0-.309,6.5l6.047,6.244a.98.98,0,0,0,1.416,0l6.047-6.244a4.484,4.484,0,0,0-.306-6.5Z",transform:"translate(2.012 -28.967)","stroke-width":"2"})],-1),z=[F,W],Z={key:0,class:"absolute top-[-6px] right-[-12px] flex justify-center items-center text-12px text-white bg-primary w-[18px] h-[18px] rounded-full"},$={class:"flex items-center h-[60px] px-5"},D=(0,a._)("img",{src:b,alt:"放大鏡"},null,-1),j={class:"flex items-center h-20 px-10 lg:h-[100px]"},U=(0,a._)("img",{src:b,alt:"放大鏡"},null,-1),B={class:"relative w-5 h-5"};function N(t,e,r,s,o,l){const n=(0,a.up)("router-link"),p=(0,a.up)("FavoriteModal");return(0,a.wg)(),(0,a.iD)("header",y,[(0,a._)("div",_,[(0,a._)("h1",k,[(0,a.Wm)(n,{to:"/",class:"relative block bg-primary h-[60px] md:h-20 lg:h-[100px]"},{default:(0,a.w5)((()=>[C])),_:1})])]),(0,a._)("div",O,[(0,a._)("button",{type:"button",class:"relative flex justify-center items-center border-primary border-r-2 w-[60px] h-[60px] group md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]",onClick:e[0]||(e[0]=(...t)=>l.openFavoriteModal&&l.openFavoriteModal(...t))},[(0,a._)("div",M,[((0,a.wg)(),(0,a.iD)("svg",{class:(0,i.C_)(["duration-300 stroke-primary fill-transparent group-hover:fill-primary",{"fill-primary":o.isOpenFavorite}]),xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"20",height:"20",viewBox:"0 0 20 20"},z,2)),o.favorite.length>0?((0,a.wg)(),(0,a.iD)("span",Z,(0,i.zw)(o.favorite.length),1)):(0,a.kq)("",!0)])]),(0,a._)("form",{class:"flex-1 md:hidden",onSubmit:e[2]||(e[2]=(0,x.iM)(((...t)=>l.searchProducts&&l.searchProducts(...t)),["prevent"]))},[(0,a._)("div",$,[D,(0,a.wy)((0,a._)("input",{type:"text",id:"keyword",class:"text-primary bg-secondary w-full h-full ml-2.5","onUpdate:modelValue":e[1]||(e[1]=t=>o.keyword=t)},null,512),[[x.nr,o.keyword]])])],32),(0,a._)("form",{class:"hidden flex-1 md:block",onSubmit:e[4]||(e[4]=(0,x.iM)(((...t)=>l.searchProducts&&l.searchProducts(...t)),["prevent"]))},[(0,a._)("div",j,[U,(0,a.wy)((0,a._)("input",{type:"text",id:"keyword",placeholder:"早安，今天我想來點...",class:"text-primary bg-secondary w-full h-full ml-5","onUpdate:modelValue":e[3]||(e[3]=t=>o.keyword=t)},null,512),[[x.nr,o.keyword]])])],32),(0,a._)("button",{type:"button",class:"hamburger relative flex justify-center items-center border-primary border-l-2 w-[60px] h-[60px] md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]",onClick:e[5]||(e[5]=(...t)=>l.toggleMenu&&l.toggleMenu(...t))},[(0,a._)("div",B,[(0,a._)("span",{class:(0,i.C_)({"is-active":o.isOpenMenu})},null,2),(0,a._)("span",{class:(0,i.C_)({"is-active":o.isOpenMenu})},null,2),(0,a._)("span",{class:(0,i.C_)({"is-active":o.isOpenMenu})},null,2),(0,a._)("span",{class:(0,i.C_)({"is-active":o.isOpenMenu})},null,2),(0,a._)("span",{class:(0,i.C_)({"is-active":o.isOpenMenu})},null,2),(0,a._)("span",{class:(0,i.C_)({"is-active":o.isOpenMenu})},null,2)])])]),(0,a.Wm)(p,{ref:"favoriteModal",favorite:o.favorite,onUpdateFavorite:l.getFavorite},null,8,["favorite","onUpdateFavorite"])])}const I={key:0},L=(0,a._)("p",{class:"text-20px text-primary mb-2.5 md:text-24px md:mb-5"}," 目前我的最愛沒有商品哦! ",-1),P=(0,a.Uk)("前往購物 "),S={key:1,class:"overflow-hidden"},q={class:"relative flex items-center mb-5"},H=["src","alt"],V={class:"flex-1 text-primary ml-2.5"},A={class:"block mb-2"},E={class:"block"},J=["onClick"],T=(0,a._)("span",{class:"block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary -rotate-45 w-4 h-[2px]"},null,-1),Y=(0,a._)("span",{class:"block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rotate-45 w-4 h-[2px]"},null,-1),G=[T,Y],K={class:"relative inline-block"},R={key:0,type:"button",class:"text-primary border-primary border-2 pointer-events-none px-4 py-3"},Q=["onClick"],X={class:"absolute inset-0 flex justify-center items-center bg-primary"},tt=(0,a.uE)('<div class="flex items-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg><span class="text-white">加入中...</span></div>',1),et=[tt];function rt(t,e,r,s,o,l){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(["favorite duration-300 fixed top-[77px] left-[15px] right-[15px] z-10 bg-secondary border-primary border-2 max-h-[400px] overflow-y-auto opacity-0 invisible p-5 md:top-[102px] md:left-[260px] md:right-5 md:w-[400px] lg:top-[122px]",{"!opacity-100 !visible":o.isOpen}])},[0===r.favorite.length?((0,a.wg)(),(0,a.iD)("div",I,[L,(0,a.Wm)(n,{to:{path:"/products",query:{category:"all",page:1}},class:"btn duration-[400ms] inline-block text-primary border-primary border-2 px-5 py-2.5"},{default:(0,a.w5)((()=>[P])),_:1})])):((0,a.wg)(),(0,a.iD)("ul",S,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.favorite,(t=>((0,a.wg)(),(0,a.iD)("li",{class:(0,i.C_)(["border-primary border-t-2 pt-5",{"mb-5":r.favorite.length>1}]),key:t.id},[(0,a._)("div",q,[(0,a._)("img",{src:t.imageUrl,alt:t.title,class:"w-20 h-20 object-cover"},null,8,H),(0,a._)("div",V,[(0,a._)("span",A,(0,i.zw)(t.title),1),(0,a._)("span",E,"$"+(0,i.zw)(t.price),1)]),(0,a._)("button",{type:"button",class:"duration-300 absolute top-0 right-0 w-6 h-6 hover:rotate-90",onClick:e=>l.deleteFavorite(t)},G,8,J)]),(0,a._)("div",K,[l.isMaxNum(t)?((0,a.wg)(),(0,a.iD)("button",R," 商品已達購買上限 ")):((0,a.wg)(),(0,a.iD)("button",{key:1,type:"button",class:"btn duration-[400ms] text-primary border-primary border-2 px-4 py-3",onClick:e=>l.addToCart(t.id)}," 加入購物車 ",8,Q)),(0,a.wy)((0,a._)("div",X,et,512),[[x.F8,o.isLoadingItem===t.id]])])],2)))),128))]))],2)}var at={props:{favorite:{type:Array,default(){return[]}}},data(){return{isOpen:!1,tempFavorite:[],cart:{carts:[]},isLoadingItem:""}},watch:{$route:{handler(){this.isOpen=!1}},favorite(){this.tempFavorite=JSON.parse(JSON.stringify(this.favorite))}},methods:{getCart(){const t="https://vue3-course-api.hexschool.io/v2/api/rousong/cart";this.$http.get(t).then((t=>{this.cart=t.data.data})).catch((t=>{h().fire({position:"top-end",icon:"error",title:t.response.data.message,showConfirmButton:!1,timer:1500})}))},addToCart(t,e=1){this.isLoadingItem=t;const r={product_id:t,qty:e},a="https://vue3-course-api.hexschool.io/v2/api/rousong/cart",i="已加入購物車";this.$http.post(a,{data:r}).then((()=>{h().fire({position:"top-end",icon:"success",title:i,showConfirmButton:!1,timer:1500}),f.Z.emit("get-cart"),f.Z.emit("add-cart"),this.getCart(),this.isLoadingItem=""})).catch((t=>{h().fire({position:"top-end",icon:"error",title:t.response.data.message,showConfirmButton:!1,timer:1500})}))},isMaxNum(t){const e=this.cart.carts.filter((e=>e.product_id===t.id))[0];return e&&30===e.qty},deleteFavorite(t){const e=this.tempFavorite.findIndex((e=>e.id===t.id));this.tempFavorite.splice(e,1),localStorage.setItem("favorite",JSON.stringify(this.tempFavorite)),this.$emit("update-favorite"),f.Z.emit("update-favorite");const r="已移除我的最愛";h().fire({position:"top-end",icon:"success",title:r,showConfirmButton:!1,timer:1500})}},mounted(){f.Z.on("update-cart",(()=>{this.getCart()})),this.getCart()}},it=r(3744);const st=(0,it.Z)(at,[["render",rt]]);var ot=st,lt={components:{FavoriteModal:ot},watch:{$route:{handler(){this.isOpenMenu=!1,this.isOpenFavorite=!1}}},data(){return{favorite:[],keyword:"",isOpenFavorite:!1,isOpenMenu:!1}},methods:{toggleMenu(){f.Z.emit("toggle-menu"),this.isOpenMenu=!this.isOpenMenu},getFavorite(){this.favorite=JSON.parse(localStorage.getItem("favorite"))||[]},searchProducts(){this.$router.push({path:"/search",query:{keyword:this.keyword}}),this.keyword=""},openFavoriteModal(){this.$refs.favoriteModal.isOpen=!this.$refs.favoriteModal.isOpen,this.isOpenFavorite=!this.isOpenFavorite}},mounted(){this.getFavorite(),f.Z.on("get-favorite",(()=>{this.getFavorite()}))}};const nt=(0,it.Z)(lt,[["render",N]]);var pt=nt,ct=r(4260),dt=r(4264),ut=r(9880);const mt={class:"border-primary border-t-2"},ht={class:"text-center border-primary border-b-2 py-5 md:py-[30px]"},ft=(0,a.uE)('<div class="inline-block bg-primary px-5 py-2.5 mb-5"><img src="'+g+'" alt="logo"></div><h4 class="text-20px text-primary mb-2">聯絡資訊</h4><ul class="mb-5"><li><p class="text-primary"> 電話：<a href="tel:0912000000">0912000000</a></p></li><li><p class="text-primary">地址：台中市的某個角落</p></li><li><p class="text-primary"> E-mail： <a href="mailto:doublebrunch@gmail.com">doublebrunch@gmail.com</a></p></li><li><p class="text-primary">營業時間 ( 週三公休 )：7:00 am - 17:00 pm</p></li></ul>',3),xt={class:"flex justify-center"},gt=(0,a._)("img",{src:ct,alt:"fb"},null,-1),vt=(0,a._)("img",{src:dt,alt:"line"},null,-1),bt=(0,a._)("img",{src:ut,alt:"ig"},null,-1),wt={class:"text-primary text-center p-5"},yt={class:"mb-2 md:hidden"},_t=(0,a.Uk)(" 本網站僅供個人作品使用，"),kt=(0,a._)("br",null,null,-1),Ct=(0,a.Uk)("不提供任何商業用途"),Ot=(0,a._)("br",null,null,-1),Mt=(0,a.Uk)("登入後台"),Ft={class:"hidden mb-2 md:block"},Wt=(0,a.Uk)(" 本網站僅供個人作品使用，不提供任何商業用途 | "),zt=(0,a.Uk)("登入後台"),Zt=(0,a._)("p",{class:"text-14px"},"午分之食 © 2022 COPYRIGHT | made by 肉鬆",-1);function $t(t,e){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("footer",mt,[(0,a._)("div",ht,[ft,(0,a._)("div",xt,[(0,a.Wm)(r,{to:"/",target:"_blank",class:"duration-300 hover:scale-110"},{default:(0,a.w5)((()=>[gt])),_:1}),(0,a.Wm)(r,{to:"/",target:"_blank",class:"duration-300 mx-4 hover:scale-110"},{default:(0,a.w5)((()=>[vt])),_:1}),(0,a.Wm)(r,{to:"/",target:"_blank",class:"duration-300 hover:scale-110"},{default:(0,a.w5)((()=>[bt])),_:1})])]),(0,a._)("div",wt,[(0,a._)("p",yt,[_t,kt,Ct,Ot,(0,a.Wm)(r,{to:"/admin/products",class:"duration-300 border-transparent border-b-2 hover:border-primary"},{default:(0,a.w5)((()=>[Mt])),_:1})]),(0,a._)("p",Ft,[Wt,(0,a.Wm)(r,{to:"/admin/products",class:"duration-300 border-transparent border-b-2 hover:border-primary"},{default:(0,a.w5)((()=>[zt])),_:1})]),Zt])])}const Dt={},jt=(0,it.Z)(Dt,[["render",$t]]);var Ut=jt,Bt=r(6144);const Nt={class:"w-full lg:w-1/2"},It={class:"bg-secondary h-full border-primary border-r-2"},Lt={class:"h-1/4"},Pt=(0,a._)("span",{class:"text-primary w-[60px]"},"Menu",-1),St={class:"h-1/4"},qt=(0,a._)("span",{class:"text-primary w-[60px]"},"About",-1),Ht={class:"h-1/4"},Vt=(0,a._)("span",{class:"text-primary w-[60px]"},"News",-1),At={class:"h-1/4"},Et=(0,a._)("span",{class:"text-primary w-[60px]"},"Cart",-1),Jt=(0,a._)("div",{class:"hidden w-1/2 lg:block"},[(0,a._)("img",{src:Bt,alt:"菜單圖片",class:"w-full h-full object-cover"})],-1);function Tt(t,e,r,s,o,l){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",{class:(0,i.C_)(["nav duration-500 fixed top-[75px] bottom-[15px] left-[15px] z-50 w-[calc(100%-1.875rem)] overflow-hidden md:top-[100px] md:bottom-5 md:left-5 md:w-[calc(100%-2.5rem)] lg:top-[120px]",{"translate-y-0":o.isOpen,"-translate-y-[100%]":!o.isOpen}])},[(0,a._)("div",{class:(0,i.C_)(["duration-500 flex h-full",{"translate-y-0":o.isOpen,"translate-y-[100%]":!o.isOpen}])},[(0,a._)("div",Nt,[(0,a._)("ul",It,[(0,a._)("li",Lt,[(0,a.Wm)(n,{to:{path:"/products",query:{category:"all",page:1}},class:"flex items-center h-full border-primary border-b-2 p-5 md:p-10"},{default:(0,a.w5)((()=>[Pt,(0,a._)("h2",{class:(0,i.C_)(["relative z-10 text-24px text-primary md:text-32px",{"is-active":"/products"===t.$route.path}])}," 美味餐點 ",2)])),_:1})]),(0,a._)("li",St,[(0,a.Wm)(n,{to:"/about",class:"flex items-center h-full border-primary border-b-2 p-5 md:p-10"},{default:(0,a.w5)((()=>[qt,(0,a._)("h2",{class:(0,i.C_)(["relative z-10 text-24px text-primary md:text-32px",{"is-active":"/about"===t.$route.path}])}," 關於午分之食 ",2)])),_:1})]),(0,a._)("li",Ht,[(0,a.Wm)(n,{to:"/articles",class:"flex items-center h-full border-primary border-b-2 p-5 md:p-10"},{default:(0,a.w5)((()=>[Vt,(0,a._)("h2",{class:(0,i.C_)(["relative z-10 text-24px text-primary md:text-32px",{"is-active":"/articles"===t.$route.path}])}," 最新消息 ",2)])),_:1})]),(0,a._)("li",At,[(0,a.Wm)(n,{to:"/cart",class:"flex items-center h-full border-primary border-b-2 p-5 md:p-10"},{default:(0,a.w5)((()=>[Et,(0,a._)("h2",{class:(0,i.C_)(["relative z-10 text-24px text-primary md:text-32px",{"is-active":"/cart"===t.$route.path}])}," 購物車 ",2)])),_:1})])])]),Jt],2)],2)}var Yt={data(){return{isOpen:!1,isPage:""}},watch:{$route:{handler(){this.isOpen=!1}}},methods:{toggleMenu(){this.isOpen=!this.isOpen}},mounted(){f.Z.on("toggle-menu",(()=>{this.toggleMenu()}))}};const Gt=(0,it.Z)(Yt,[["render",Tt]]);var Kt=Gt,Rt={components:{HeaderLayout:pt,FooterLayout:Ut,NavBar:Kt},data(){return{cart:{carts:[]}}},methods:{getCart(){const t="https://vue3-course-api.hexschool.io/v2/api/rousong/cart";this.$http.get(t).then((t=>{this.cart=t.data.data})).catch((t=>{h().fire({position:"top-end",icon:"error",title:t.response.data.message,showConfirmButton:!1,timer:1500})}))}},mounted(){this.getCart(),f.Z.on("get-cart",(()=>{this.getCart()}))}};const Qt=(0,it.Z)(Rt,[["render",u]]);var Xt=Qt},4260:function(t,e,r){t.exports=r.p+"img/icon-fb.256dbcc4.svg"},9880:function(t,e,r){t.exports=r.p+"img/icon-ig.f19f7511.svg"},4264:function(t,e,r){t.exports=r.p+"img/icon-line.ea8c4215.svg"},6633:function(t,e,r){t.exports=r.p+"img/icon-search.0126fede.svg"},2835:function(t,e,r){t.exports=r.p+"img/logo.bd894e75.svg"},6515:function(t,e,r){t.exports=r.p+"img/mobile-logo.fac279fe.svg"},6144:function(t,e,r){t.exports=r.p+"img/bg-menu.e40cc4da.jpg"}}]);
//# sourceMappingURL=20.198414b6.js.map