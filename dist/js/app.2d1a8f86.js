(function(){"use strict";var e={554:function(e,r,t){var a=t(3396);const s={class:"max-w-[1300px] mx-auto md:px-10 text-plp-grey",ref:"app-container"};function n(e,r,t,n,o,l){const i=(0,a.up)("FilterToolbar"),c=(0,a.up)("DropDownMenu"),d=(0,a.up)("ProductGridList");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(i,{brands:l.listBrands,onUpdateAvailableFilter:l.showAvailableOnly,onUpdateSelectedBrandsFilter:l.showSelectedBrandsOnly},null,8,["brands","onUpdateAvailableFilter","onUpdateSelectedBrandsFilter"]),(0,a.Wm)(c,{onUpdateSortingOrder:l.showInOrderSelected},null,8,["onUpdateSortingOrder"]),(0,a.Wm)(d,{products:l.sortProducts},null,8,["products"])],512)}var o=JSON.parse('[{"name":"Product 1","price":75,"image":"https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_1.webp","rank":1,"brand":"Nike","isAvailable":true},{"name":"Product 2","price":50,"image":"https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_2.webp","rank":5,"brand":"Adidas","isAvailable":true},{"name":"Product 3","price":150,"image":"https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_3.webp","rank":2,"brand":"Nike","isAvailable":false},{"name":"Product 4","price":75,"image":"https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_4.webp","rank":13,"brand":"Adidas","isAvailable":true},{"name":"Product 5","price":200,"image":"https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_5.webp","rank":10,"brand":"Nike","isAvailable":false},{"name":"Product 6","price":10,"image":"https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_6.webp","rank":13,"brand":"Adidas","isAvailable":true},{"name":"Product 7","price":10,"image":"https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_7.webp","rank":14,"brand":"New Balance","isAvailable":true},{"name":"Product 8","price":100,"image":"https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_8.webp","rank":null,"brand":"Adidas","isAvailable":true},{"name":"Product 9","price":150,"image":"https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_9.webp","rank":20,"brand":"Adidas","isAvailable":false},{"name":"Product 10","price":20,"image":"https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_10.webp","rank":25,"brand":"Nike","isAvailable":true},{"name":"Product 11","price":120,"image":"https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_11.webp","rank":300,"brand":"Converse","isAvailable":false},{"name":"Product 12","price":500,"image":"https://storage.googleapis.com/hulla-customer-files/tech-assessment/product_12.webp","rank":1000,"brand":"Crocs","isAvailable":true}]'),l=t(9242),i=t(7139);const c={class:"flex flex-wrap mx-2"},d={class:"lg:w-1/6 sm:w-1/3"},u={for:"available"},p=["for"],m=["id","value"];function b(e,r,t,s,n,o){return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",d,[(0,a._)("label",u,[(0,a.wy)((0,a._)("input",{type:"checkbox",id:"available","onUpdate:modelValue":r[0]||(r[0]=e=>n.availableOnly=e)},null,512),[[l.e8,n.availableOnly]]),(0,a.Uk)(" Available only ")])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.brands,(e=>((0,a.wg)(),(0,a.iD)("div",{for:e,key:e,class:"lg:w-1/6 sm:w-1/3"},[(0,a._)("label",null,[(0,a.wy)((0,a._)("input",{type:"checkbox",id:e,value:e,"onUpdate:modelValue":r[1]||(r[1]=e=>n.selectedBrands=e)},null,8,m),[[l.e8,n.selectedBrands]]),(0,a.Uk)(" "+(0,i.zw)(e),1)])],8,p)))),128))])}var g={name:"FilterToolbar",props:{brands:{type:Array}},data(){return{availableOnly:!1,selectedBrands:[]}},watch:{availableOnly(e){this.$emit("updateAvailableFilter",e)},selectedBrands(){this.$emit("updateSelectedBrandsFilter",this.selectedBrands)}}},h=t(89);const v=(0,h.Z)(g,[["render",b]]);var f=v;const w={class:"inline"},y={class:"absolute right-10 mt-2"},O=(0,a._)("option",{disabled:"",selected:"",value:""},"Sort by:",-1),_=(0,a._)("option",{value:"price-descending"},"Price: High to Low",-1),A=(0,a._)("option",{value:"price-ascending"},"Price: Low to High",-1),k=(0,a._)("option",{value:"relevance"},"Relevance",-1),P=[O,_,A,k];function x(e,r,t,s,n,o){return(0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("label",y,[(0,a.wy)((0,a._)("select",{onChange:r[0]||(r[0]=(...e)=>o.sortOrder&&o.sortOrder(...e)),"onUpdate:modelValue":r[1]||(r[1]=e=>n.selectedOrder=e)},P,544),[[l.bM,n.selectedOrder]])])])}var S={name:"DropDownMenu",data(){return{selectedOrder:"relevance"}},methods:{sortOrder(){this.$emit("updateSortingOrder",this.selectedOrder)}}};const B=(0,h.Z)(S,[["render",x]]);var D=B;const U={class:"py-5"},F={class:"text-xs"},j={class:"grid gap-4 md:grid-cols-3 sm:grid-cols-2 place-items-center"};function M(e,r,t,s,n,o){const l=(0,a.up)("ProductGridItem");return(0,a.wg)(),(0,a.iD)("section",U,[(0,a._)("p",F,(0,i.zw)(t.products.length)+" Results",1),(0,a._)("ul",j,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.products,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.name,class:"bg-plp-secondary"},[(0,a.Wm)(l,{product:e},null,8,["product"])])))),128))])])}const T={class:"hover:text-indigo-500 hover:border hover:border-indigo-500 border border-transparent"},G=["src"],N={class:"p-2 font-semibold"},z={class:"pl-2 pb-2 font-bold"};function C(e,r,t,s,n,o){return(0,a.wg)(),(0,a.iD)("div",T,[(0,a._)("img",{src:t.product.image},null,8,G),(0,a._)("p",N,[(0,a._)("span",null,(0,i.zw)(t.product.brand),1),(0,a.Uk)(" "+(0,i.zw)(t.product.name),1)]),(0,a._)("p",z," £"+(0,i.zw)(t.product.price),1)])}var I={name:"ProductGridItem",props:{product:{type:Object}}};const L=(0,h.Z)(I,[["render",C]]);var Z=L,H={name:"ProductGridList",components:{ProductGridItem:Z},props:{products:{type:Array,required:!0}}};const R=(0,h.Z)(H,[["render",M]]);var W=R,V={name:"App",components:{FilterToolbar:f,DropDownMenu:D,ProductGridList:W},data(){return{products:o,availableOnly:!1,selectedBrands:[],selectedOrder:"relevance"}},methods:{showAvailableOnly(e){this.availableOnly=e},showSelectedBrandsOnly(e){this.selectedBrands=e},showInOrderSelected(e){this.selectedOrder=e},sortRelevance(e,r){return e.isAvailable===r.isAvailable?e.rank-r.rank:e.isAvailable?-1:1}},computed:{listBrands(){let e=[...new Set(this.products.map((e=>e.brand)))];return e},filterProducts(){let e=this.products;return this.availableOnly&&(e=e.filter((e=>e.isAvailable))),this.selectedBrands.length>0&&(e=e.filter((e=>this.selectedBrands.includes(e.brand)))),e},sortProducts(){const e={"price-descending":(e,r)=>r.price-e.price,"price-ascending":(e,r)=>e.price-r.price,relevance:this.sortRelevance},r=e[this.selectedOrder],t=[...this.filterProducts].sort(r);return t}}};const $=(0,h.Z)(V,[["render",n]]);var K=$;const{createApp:Y}=t(6866);Y(K).mount("#app")}},r={};function t(a){var s=r[a];if(void 0!==s)return s.exports;var n=r[a]={exports:{}};return e[a].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(r,a,s,n){if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],s=e[d][1],n=e[d][2];for(var l=!0,i=0;i<a.length;i++)(!1&n||o>=n)&&Object.keys(t.O).every((function(e){return t.O[e](a[i])}))?a.splice(i--,1):(l=!1,n<o&&(o=n));if(l){e.splice(d--,1);var c=s();void 0!==c&&(r=c)}}return r}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,s,n]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,a){var s,n,o=a[0],l=a[1],i=a[2],c=0;if(o.some((function(r){return 0!==e[r]}))){for(s in l)t.o(l,s)&&(t.m[s]=l[s]);if(i)var d=i(t)}for(r&&r(a);c<o.length;c++)n=o[c],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(d)},a=self["webpackChunksb_vue"]=self["webpackChunksb_vue"]||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(554)}));a=t.O(a)})();
//# sourceMappingURL=app.2d1a8f86.js.map