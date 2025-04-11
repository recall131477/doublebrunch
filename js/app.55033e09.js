(function(){"use strict";var e={3974:function(e,t,n){var r=n(9963),o=n(8262),i=n(9669),a=n.n(i),c=n(2346),u=n(2954),l=n(2387),d=n(6391),s=n(2389),m=n(4e3),f=n.n(m),h=n(6252);function p(e,t,n,r,o,i){const a=(0,h.up)("router-view");return o.routerAlive?((0,h.wg)(),(0,h.j4)(a,{key:0})):(0,h.kq)("",!0)}var b={data(){return{routerAlive:!0}},provide(){return{routerRefresh:this.routerRefresh}},watch:{$route(e){const t=e.meta.title||"";document.title=`${t} 午分之食`}},methods:{routerRefresh(){this.routerAlive=!1,this.$nextTick((()=>{this.routerAlive=!0}))}}},v=n(3744);const g=(0,v.Z)(b,[["render",p]]);var y=g,k=n(2119);const P=[{path:"/",name:"front",component:()=>Promise.all([n.e(455),n.e(20)]).then(n.bind(n,2020)),children:[{path:"/",name:"home",component:()=>Promise.all([n.e(455),n.e(550),n.e(103)]).then(n.bind(n,4103))},{path:"about",name:"about",component:()=>n.e(385).then(n.bind(n,4385)),meta:{title:"關於"}},{path:"products",name:"products",component:()=>Promise.all([n.e(455),n.e(34)]).then(n.bind(n,1034)),meta:{title:"美味餐點"}},{path:"product/:id",name:"product",component:()=>Promise.all([n.e(455),n.e(550),n.e(247)]).then(n.bind(n,2247))},{path:"search",name:"search",component:()=>Promise.all([n.e(455),n.e(681)]).then(n.bind(n,681)),meta:{title:"搜尋"}},{path:"cart",name:"cart",component:()=>Promise.all([n.e(455),n.e(584)]).then(n.bind(n,7584)),meta:{title:"購物車"}},{path:"checkout",name:"checkout",component:()=>Promise.all([n.e(455),n.e(446)]).then(n.bind(n,1446)),meta:{title:"訂單資訊"}},{path:"checkorder/:id",name:"checkorder",component:()=>Promise.all([n.e(455),n.e(600)]).then(n.bind(n,3600)),meta:{title:"確認訂單"}},{path:"complete/:id",name:"complete",component:()=>Promise.all([n.e(455),n.e(538)]).then(n.bind(n,3538)),meta:{title:"完成訂單"}},{path:"articles",name:"articles",component:()=>Promise.all([n.e(455),n.e(554)]).then(n.bind(n,2554)),meta:{title:"最新消息"}},{path:"article/:id",name:"article",component:()=>Promise.all([n.e(455),n.e(382)]).then(n.bind(n,382))}]},{path:"/login",name:"login",component:()=>Promise.all([n.e(455),n.e(354)]).then(n.bind(n,354)),meta:{title:"登入"}},{path:"/admin",name:"back",component:()=>Promise.all([n.e(455),n.e(775)]).then(n.bind(n,775)),children:[{path:"products",name:"backProducts",component:()=>Promise.all([n.e(455),n.e(100)]).then(n.bind(n,9100)),meta:{title:"後台商品"}},{path:"order",name:"backOrder",component:()=>Promise.all([n.e(455),n.e(921)]).then(n.bind(n,3921)),meta:{title:"後台訂單"}},{path:"coupon",name:"backCoupon",component:()=>Promise.all([n.e(455),n.e(815)]).then(n.bind(n,9815)),meta:{title:"後台優惠券"}},{path:"articles",name:"backArticles",component:()=>Promise.all([n.e(455),n.e(489)]).then(n.bind(n,6489)),meta:{title:"後台文章"}}]},{path:"/:pathMatch(.*)*",name:"404",component:()=>n.e(580).then(n.bind(n,9580))}],w=(0,k.p7)({history:(0,k.r5)(),routes:P,scrollBehavior(){return{top:0,behavior:"smooth"}}});var O=w;function j(e){const t=parseInt(e,10);return`${t.toFixed(0).replace(/./g,((e,t,n)=>t&&"."!==e&&(n.length-t)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function C(e){const t=new Date(1e3*e);return t.toLocaleDateString()}(0,u.aH)("required",l.C1),(0,u.aH)("email",l.Do),(0,u.aH)("min",l.VV),(0,u.aH)("max",l.Fp),(0,u.jQ)({generateMessage:(0,d.NC)({zh_TW:s}),validateOnInput:!0}),(0,d.i_)("zh_TW");const E=(0,r.ri)(y);E.config.globalProperties.$filters={date:C,currency:j};const x=(0,o.WB)();E.use(O),E.use(c.Z,a()),E.use(f()),E.use(x),E.component("VForm",u.l0),E.component("VField",u.gN),E.component("ErrorMessage",u.Bc),E.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],i=e[d][2];for(var c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{20:"207aa71e",34:"bc91d365",100:"d0fd0667",103:"0fe35025",247:"15c50254",354:"300e0dfa",382:"4e62d541",385:"d92c9bc9",446:"f8bcfb82",455:"935ec96b",489:"7e4352ea",538:"53f2e5a2",550:"30404fd5",554:"2a72341c",580:"f46534ea",584:"771003b6",600:"1ad88e25",681:"34ceaf0d",775:"3742e8ee",815:"dd6313d0",921:"9a5c3016"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{489:"44b3be86",921:"1bbb8ff0"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="doublebrunch:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var c,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var s=l[d];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+i){c=s;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=r),e[r]=[o];var m=function(t,n){c.onerror=c.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/doublebrunch/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),c=n.p+a;if(t(a,c))return o();e(r,c,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={489:1,921:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),c=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],c=r[1],u=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var d=u(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},r=self["webpackChunkdoublebrunch"]=self["webpackChunkdoublebrunch"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3974)}));r=n.O(r)})();
//# sourceMappingURL=app.55033e09.js.map