"use strict";(self.webpackChunksline_sdk_doc=self.webpackChunksline_sdk_doc||[]).push([[283],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=d(a),m=l,k=s["".concat(o,".").concat(m)]||s[m]||c[m]||r;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=m;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[s]="string"==typeof t?t:l,i[1]=u;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1346:(t,e,a)=>{a.r(e),a.d(e,{CartExample:()=>p,assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const r={description:"Utiliser le SDK de Sline",title:"SDK Sline"},i=void 0,u={unversionedId:"index",id:"version-2.1.7/index",title:"SDK Sline",description:"Utiliser le SDK de Sline",source:"@site/versioned_docs/version-2.1.7/index.mdx",sourceDirName:".",slug:"/",permalink:"/docs/2.1.7/",draft:!1,tags:[],version:"2.1.7",frontMatter:{description:"Utiliser le SDK de Sline",title:"SDK Sline"}},o={},d=[{value:"Installation",id:"installation",level:2},{value:"Initialisation",id:"initialisation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Options principales",id:"options-principales",level:3},{value:"Configuration du CheckoutButton",id:"configuration-du-checkoutbutton",level:3},{value:"Configuration du CheckoutButton.Events",id:"configuration-du-checkoutbuttonevents",level:3},{value:"Configuration du DurationSelector",id:"configuration-du-durationselector",level:3},{value:"Variables accessibles",id:"variables-accessibles",level:2},{value:"Cart",id:"cart",level:3},{value:"Durations",id:"durations",level:3},{value:"Prices",id:"prices",level:3},{value:"M\xe9thodes",id:"m\xe9thodes",level:2},{value:"Initialize",id:"initialize",level:3},{value:"ResetCart",id:"resetcart",level:3},{value:"AddCart",id:"addcart",level:3},{value:"UpdateCart",id:"updatecart",level:3},{value:"GetPriceForProductWithDuration",id:"getpriceforproductwithduration",level:3},{value:"Example",id:"example",level:2}],p=()=>(0,l.kt)("div",{className:"text-center"},(0,l.kt)("table",{className:"table raw text-left",id:"cartv210"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"col",className:"bg-light col-4"},(0,l.kt)("div",{className:"p-2 px-3 text-uppercase"},"Produit")),(0,l.kt)("th",{scope:"col",className:"bg-light col-2"},(0,l.kt)("div",{className:"py-2 text-uppercase"},"Prix de vente")),(0,l.kt)("th",{scope:"col",className:"bg-light col-2"},(0,l.kt)("div",{className:"py-2 text-uppercase"},"Mensualit\xe9")),(0,l.kt)("th",{scope:"col",className:"bg-light col-2"},(0,l.kt)("div",{className:"py-2 text-uppercase"},"Quantit\xe9")),(0,l.kt)("th",{scope:"col",className:"bg-light col-2"},(0,l.kt)("div",{className:"py-2 text-uppercase"},"Total")))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"},(0,l.kt)("div",{className:"p-2"},(0,l.kt)("img",{src:"https://media.ldlc.com/r1600/ld/products/00/05/88/64/LD0005886472_1_0005927794.jpg",alt:"",width:"70",className:"img-fluid rounded shadow-sm"}),(0,l.kt)("div",{className:"ml-3 d-inline-block align-middle"},(0,l.kt)("h5",{className:"mb-0"}," ",(0,l.kt)("a",{href:"#",className:"text-dark d-inline-block align-middle"},"iPhone 13 Pro Bleu 128 Go"))))),(0,l.kt)("td",{className:"align-middle"},(0,l.kt)("strong",null,"1 159.00 \u20ac")),(0,l.kt)("td",{className:"align-middle"}),(0,l.kt)("td",{className:"align-middle"},(0,l.kt)("div",{className:"input-group mb-2"},(0,l.kt)("div",{className:"input-group-prepend"},(0,l.kt)("button",{className:"btn btn-dark",id:"qtyminus",type:"button"},"\u2212")),(0,l.kt)("input",{type:"number",className:"form-control",name:"sku-iphone13bleu2",id:"qty",min:"1",max:"10",step:"1",defaultValue:"2"}),(0,l.kt)("div",{className:"input-group-append"},(0,l.kt)("button",{className:"btn btn-dark",id:"qtyplus",type:"button"},"+")))),(0,l.kt)("td",{className:"align-middle"})),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"},(0,l.kt)("div",{className:"p-2"},(0,l.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/5e/Nintendo_Switch_Console.png",alt:"",width:"70",className:"img-fluid rounded shadow-sm"}),(0,l.kt)("div",{className:"ml-3 d-inline-block align-middle"},(0,l.kt)("h5",{className:"mb-0"},(0,l.kt)("a",{href:"#",className:"text-dark d-inline-block"},"Nintendo Switch"))))),(0,l.kt)("td",{className:"align-middle"},(0,l.kt)("strong",null,"229.00 \u20ac")),(0,l.kt)("td",{className:"align-middle"}),(0,l.kt)("td",{className:"align-middle"},(0,l.kt)("div",{className:"input-group mb-2"},(0,l.kt)("div",{className:"input-group-prepend"},(0,l.kt)("button",{className:"btn btn-dark",id:"qtyminus2",type:"button"},"\u2212")),(0,l.kt)("input",{type:"number",className:"form-control",name:"nintendoswitch",id:"qty2",min:"1",max:"10",step:"1",defaultValue:"1"}),(0,l.kt)("div",{className:"input-group-append"},(0,l.kt)("button",{className:"btn btn-dark",id:"qtyplus2",type:"button"},"+")))),(0,l.kt)("td",{className:"align-middle"})))),(0,l.kt)("div",{id:"period-selector",className:"text-right"}),(0,l.kt)("a",{href:"#",id:"rent-btn",className:"btn btn-dark rounded-pill px-4"},"Louer")),s={toc:d,CartExample:p};function c(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Rajoutez la balise suivante \xe0 la fin de la section ","<","head",">"," de votre page:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/sline-io/web-sdk@2.1/sline-sdk.min.js"><\/script>\n')),(0,l.kt)("h2",{id:"initialisation"},"Initialisation"),(0,l.kt)("p",null,"A la fin de votre ","<","body",">",", ajoutez la ligne suivante:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<script type=\"text/javascript\">\n    Sline.Initialize({\n        retailer: retailerId,\n        production: false,\n        checkoutButton: {\n          id: 'rent-btn',\n          prefix: 'Louer \xe0 partir de ',\n          suffix: '/mois',\n          events: {\n            customOnClickEvent: true\n          }\n        },\n        durationSelector: {\n            id: 'period-selector'\n        }\n      });\n<\/script>\n")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("h3",{id:"options-principales"},"Options principales"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Obligatoire"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retailer"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Identifiant du marchand"),(0,l.kt)("td",{parentName:"tr",align:null},"Oui")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"production"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Mettre \xe0 true si vous \xeates en production, sinon \xe0 false"),(0,l.kt)("td",{parentName:"tr",align:null},"Oui")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checkoutButton"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Voir les options du ",(0,l.kt)("a",{parentName:"td",href:"#configuration-du-checkoutbutton"},"checkoutButton")," plus bas"),(0,l.kt)("td",{parentName:"tr",align:null},"Oui")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"durationSelector"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Voir les options du ",(0,l.kt)("a",{parentName:"td",href:"#configuration-du-durationselector"},"durationSelector")," plus bas"),(0,l.kt)("td",{parentName:"tr",align:null},"Non")))),(0,l.kt)("h3",{id:"configuration-du-checkoutbutton"},"Configuration du CheckoutButton"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Obligatoire"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Identifiant du bouton"),(0,l.kt)("td",{parentName:"tr",align:null},"Oui")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Texte qui appara\xeetra avant le prix dans le bouton"),(0,l.kt)("td",{parentName:"tr",align:null},"Non")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"suffix"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Texte qui appara\xeetra apr\xe8s le prix dans le bouton"),(0,l.kt)("td",{parentName:"tr",align:null},"Non")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"events"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Voir la configuration des ",(0,l.kt)("a",{parentName:"td",href:"#configuration-du-checkoutbuttonevents"},"\xe9v\xe8nements du checkoutButton")),(0,l.kt)("td",{parentName:"tr",align:null},"Non")))),(0,l.kt)("h3",{id:"configuration-du-checkoutbuttonevents"},"Configuration du CheckoutButton.Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Obligatoire"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"customOnClickEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Mettre \xe0 true si vous \xe9coutez des \xe9v\xe8nements sur le click du bouton de checkout"),(0,l.kt)("td",{parentName:"tr",align:null},"Non")))),(0,l.kt)("h3",{id:"configuration-du-durationselector"},"Configuration du DurationSelector"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Obligatoire"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Identifiant du selecteur de dur\xe9e"),(0,l.kt)("td",{parentName:"tr",align:null},"Non")))),(0,l.kt)("h2",{id:"variables-accessibles"},"Variables accessibles"),(0,l.kt)("h3",{id:"cart"},"Cart"),(0,l.kt)("p",null,"Contient la liste des produits et les quantit\xe9s associ\xe9es"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Sline.cart: {product, quantity}[]\n")),(0,l.kt)("h3",{id:"durations"},"Durations"),(0,l.kt)("p",null,"Contient la liste des diff\xe9rentes dur\xe9es de locations disponibles (en mois). La valeur -1 repr\xe9sente un location sans engagement"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Sline.durations: number[]\n")),(0,l.kt)("h3",{id:"prices"},"Prices"),(0,l.kt)("p",null,"Contient la liste des produits et les prix associ\xe9s en fonction de la dur\xe9e de location"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Sline.prices: Object\n")),(0,l.kt)("p",null,"Voici un exemple de prix:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n    produit1: {\n        dur\xe9e1: {\n            firstInstalmentPrice: {amount: 20000, currency: 'EUR'}\n            otherInstalmentPrice: {amount: 5000, currency: 'EUR'}\n        },\n        dur\xe9e2: {\n            firstInstalmentPrice: {amount: 25000, currency: 'EUR'}\n            otherInstalmentPrice: {amount: 7000, currency: 'EUR'}\n        }\n    }\n    produit2: {\n        dur\xe9e1: {\n            firstInstalmentPrice: {amount: 20000, currency: 'EUR'}\n            otherInstalmentPrice: {amount: 5000, currency: 'EUR'}\n        },\n        dur\xe9e2: {\n            firstInstalmentPrice: {amount: 25000, currency: 'EUR'}\n            otherInstalmentPrice: {amount: 7000, currency: 'EUR'}\n        }\n    }\n}\n")),(0,l.kt)("h2",{id:"m\xe9thodes"},"M\xe9thodes"),(0,l.kt)("p",null,"Voici les diff\xe9rentes m\xe9thodes disponibles via le SDK:"),(0,l.kt)("h3",{id:"initialize"},"Initialize"),(0,l.kt)("p",null,"Initialize doit \xeatre la premi\xe8re m\xe9thode que vous appelez pour configurer le SDK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Sline.Initialize(options)\n")),(0,l.kt)("h3",{id:"resetcart"},"ResetCart"),(0,l.kt)("p",null,"ResetCart permet de vider compl\xe8tement le panier actuel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Sline.ResetCart()\n")),(0,l.kt)("h3",{id:"addcart"},"AddCart"),(0,l.kt)("p",null,"Ajoute un produit dans le panier. Si le produit est d\xe9j\xe0 pr\xe9sent, la quantit\xe9 pass\xe9e en param\xe8tre remplacera l'ancienne valeur"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Sline.AddCart(item, quantity)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Obligatoire"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"item"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Identifiant du produit"),(0,l.kt)("td",{parentName:"tr",align:null},"Oui")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quantity"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Nombre d'exemplaires du produit \xe0 ajouter"),(0,l.kt)("td",{parentName:"tr",align:null},"Oui")))),(0,l.kt)("h3",{id:"updatecart"},"UpdateCart"),(0,l.kt)("p",null,"Ajoute un produit dans le panier. Si le produit est d\xe9j\xe0 pr\xe9sent, la quantit\xe9 pass\xe9e en param\xe8tre remplacera l'ancienne valeur"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Sline.UpdateCart(item, quantity)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Obligatoire"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"item"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Identifiant du produit"),(0,l.kt)("td",{parentName:"tr",align:null},"Oui")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quantity"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Nombre d'exemplaires du produit \xe0 ajouter"),(0,l.kt)("td",{parentName:"tr",align:null},"Oui")))),(0,l.kt)("h3",{id:"getpriceforproductwithduration"},"GetPriceForProductWithDuration"),(0,l.kt)("p",null,"Retourne le prix (formatt\xe9 avec la devise) pour un produit en fonction de la dur\xe9e de location et de la quantit\xe9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Sline.GetPriceForProductWithDuration(item, quantity);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Obligatoire"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"elementId"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"ID du bouton d\xe9clencheur"),(0,l.kt)("td",{parentName:"tr",align:null},"Oui")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'Texte qui sera inject\xe9 dans le bouton, en pr\xe9fixe de "X\u20ac/mois".',(0,l.kt)("br",null),'Valeur par d\xe9faut: "Louer \xe0 partir de "'),(0,l.kt)("td",{parentName:"tr",align:null},"Non")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(p,{mdxType:"CartExample"}))}c.isMDXComponent=!0}}]);