(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"3da9":function(t,e,a){},4800:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("navbar-top"),a("div",{staticClass:"row"},[a("div",{staticClass:"position-fixed"},[a("vertical-sidebar")],1),a("div",{staticClass:"col-md-3"}),a("div",{staticClass:"col-md-9"},[a("main-content")],1)]),a("footer",{staticClass:"bg-bottom footer"})],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("span",{staticClass:"anchor",attrs:{id:"portfolio"}}),a("section",[a("carousel")],1),a("span",{staticClass:"anchor",attrs:{id:"resumee"}}),a("section"),a("span",{staticClass:"anchor",attrs:{id:"about"}}),a("section")])},r=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"carousel"},[s("div",{staticClass:"img-container my-3"},[s("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[s("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),s("b-carousel-slide",{attrs:{"img-src":a("fe17")}},[s("h1",[t._v("Hello world!")])]),s("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),s("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[s("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"}})]},proxy:!0}])}),s("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[s("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum. ")])])],1)],1),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-1"}),s("div",{staticClass:"col-md-1"},[s("font-awesome-layers",{staticClass:"fa-stack fa-fw fa-3x",attrs:{alt:"twitter link"},on:{click:function(e){return t.redirect("https://github.com/Shafouz")}}},[s("font-awesome-icon",{staticClass:"icon-background",style:{color:"grey"},attrs:{icon:"circle"}}),s("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","github"]}})],1)],1),s("div",{staticClass:"col-md-1"},[s("font-awesome-layers",{staticClass:"fa-stack fa-fw fa-3x",attrs:{alt:"twitter link"},on:{click:function(e){return t.redirect("https://twitter.com/Shafouz")}}},[s("font-awesome-icon",{staticClass:"icon-background",style:{color:"grey"},attrs:{icon:"circle"}}),s("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","globe"]}})],1)],1)])])},l=[],u={name:"carousel"},d=u,f=(a("92da"),a("2877")),p=Object(f["a"])(d,c,l,!1,null,"510e59f5",null),m=p.exports,v={name:"main-content",components:{Carousel:m},methods:{redirect:function(t){window.location=t}}},b=v,h=(a("9a12"),Object(f["a"])(b,o,r,!1,null,"5d0d5206",null)),g=h.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("div",{staticClass:"portrait"},[s("b-img",t._b({attrs:{rounded:"circle"}},"b-img",t.mainProps,!1))],1),s("nav",{staticClass:"navbar"},[s("ul",[s("li",{staticClass:"nav-item active",on:{mouseover:function(e){return t.setHide(1)}}},[1==t.hide?s("img",{attrs:{src:a("6ddd")}}):t._e(),s("a",{staticClass:"nav-link",attrs:{href:"#portfolio"}},[t._v("My portfolio")])]),s("li",{staticClass:"nav-item active",on:{mouseover:function(e){return t.setHide(2)}}},[2==t.hide?s("img",{attrs:{src:a("6ddd")}}):t._e(),s("a",{staticClass:"nav-link",attrs:{href:"#resumee"}},[t._v("Projects")])]),s("li",{staticClass:"nav-item active",on:{mouseover:function(e){return t.setHide(3)}}},[3==t.hide?s("img",{attrs:{src:a("6ddd")}}):t._e(),s("a",{staticClass:"nav-link",attrs:{href:"#about"}},[t._v("About me")])])])])])},C=[],_={name:"vertical-sidebar",data:function(){return{hide:1,mainProps:{blank:!0,blankColor:"#777",width:150,height:150,class:"m1"}}},methods:{redirect:function(t){window.location=t},setHide:function(t){this.hide=t}}},y=_,x=(a("a802"),Object(f["a"])(y,w,C,!1,null,null,null)),k=x.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"navbar navbar-dark fixed-top bg-primary navbar-top"},[t._m(0),a("div",[a("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:"Dropdown Button"}},[a("b-dropdown-item",{attrs:{href:"#portfolio"}},[t._v("Portfolio")]),a("b-dropdown-item",{attrs:{href:"#resumee"}},[t._v("Resumee")]),a("b-dropdown-item",{attrs:{href:"#about"}},[t._v("About me")])],1)],1)])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-brand"},[a("span",[t._v("Joao Luca")])])}],S={name:"navbar-top"},P=S,E=(a("b898"),Object(f["a"])(P,O,j,!1,null,"9dae9b48",null)),$=E.exports,M={components:{VerticalSidebar:k,MainContent:g,NavbarTop:$}},H=M,T=(a("034f"),Object(f["a"])(H,n,i,!1,null,null,null)),B=T.exports,J=a("ecee"),N=a("f2d1"),z=a("c074"),A=a("ad3d"),L=a("5f5b"),q=a("b1e0"),D=a("8c60"),F=a("d7b1");a("f9e3"),a("2dd8");J["c"].add(N["b"],N["a"],z["b"],z["a"],z["c"]),s["default"].component("font-awesome-icon",A["a"]),s["default"].component("font-awesome-layers",A["b"]),s["default"].config.productionTip=!1,s["default"].use(L["a"]),s["default"].use(q["a"]),s["default"].use(D["a"]),s["default"].use(F["a"]),new s["default"]({render:function(t){return t(B)}}).$mount("#app")},"6ddd":function(t,e,a){t.exports=a.p+"img/cursor.d5a8e541.png"},"85ec":function(t,e,a){},"92da":function(t,e,a){"use strict";var s=a("d607"),n=a.n(s);n.a},"9a12":function(t,e,a){"use strict";var s=a("3da9"),n=a.n(s);n.a},a802:function(t,e,a){"use strict";var s=a("4800"),n=a.n(s);n.a},b898:function(t,e,a){"use strict";var s=a("d92f"),n=a.n(s);n.a},d607:function(t,e,a){},d92f:function(t,e,a){},fe17:function(t,e,a){t.exports=a.p+"img/mtg-store.86948438.png"}});
//# sourceMappingURL=app.17ac1d3d.js.map