(this["webpackJsonpeverestminds-task"]=this["webpackJsonpeverestminds-task"]||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(32),i=n.n(a),s=n(19),l=n(8),o=n(56),u=n(22),d=n(30),j=(n(71),n(57)),h=n.n(j),b=n(4),p="SET_CURRENT_USER",m={currentUser:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(b.a)(Object(b.a)({},e),{},{currentUser:t.payload});default:return e}},v={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},f=n(63),g=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(b.a)(Object(b.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(f.a)(e),[Object(b.a)(Object(b.a)({},t),{},{quantity:1})])},x=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(b.a)(Object(b.a)({},e),{},{quantity:e.quantity-1}):e}))},y={hidden:!0,cartItems:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.TOGGLE_CART_HIDDEN:return Object(b.a)(Object(b.a)({},e),{},{hidden:!e.hidden});case v.ADD_ITEM:return Object(b.a)(Object(b.a)({},e),{},{cartItems:g(e.cartItems,t.payload)});case v.REMOVE_ITEM:return Object(b.a)(Object(b.a)({},e),{},{cartItems:x(e.cartItems,t.payload)});case v.CLEAR_ITEM_FROM_CART:return Object(b.a)(Object(b.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},N={sections:[{title:"hats",imageUrl:"https://i.ibb.co/NFN5wyD/hats.jpg",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/4VBQ0S2/jackets.jpg",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/9NLgfrV/sneakers.jpg",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/k8X37ys/womens.webp",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/rpHdQV3/mens.jpg",size:"large",id:5,linkUrl:"shop/mens"}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return t.type,e},k={UPDATE_COLLECTIONS:"UPDATE_COLLECTIONS"},E={collections:null},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.UPDATE_COLLECTIONS:return Object(b.a)(Object(b.a)({},e),{},{collections:t.payload});default:return e}},L={key:"root",storage:h.a,whitelist:["cart","directory","shop"]},M=Object(u.b)({user:O,cart:w,directory:C,shop:I}),T=Object(d.a)(L,M);var U=Object(u.c)(T,u.a.apply(void 0,[])),A=Object(d.b)(U),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(74);var z=n(13),D=n.n(z),P=n(21),R=n(34),H=n(35),V=n(38),G=n(36),q=n(9),F=n(7),W=(n(76),n(20)),B=Object(F.a)([function(e){return e.directory}],(function(e){return e.sections})),Q=(n(77),n(2)),J=Object(q.g)((function(e){var t=e.title,n=e.imageUrl,c=e.size,r=e.history,a=e.linkUrl,i=e.match;return Object(Q.jsxs)("div",{className:"".concat(c," menu-item"),onClick:function(){return r.push("".concat(i.url).concat(a))},children:[Object(Q.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(Q.jsxs)("div",{className:"content",children:[Object(Q.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(Q.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),K=(n(80),["id"]),Y=Object(F.b)({sections:B}),Z=Object(l.b)(Y)((function(e){var t=e.sections;return Object(Q.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(W.a)(e,K);return Object(Q.jsx)(J,Object(b.a)({},n),t)}))})})),$=(n(81),function(){return Object(Q.jsx)("div",{className:"homepage",children:Object(Q.jsx)(Z,{})})}),X=n(28);n(117),n(82);X.a.initializeApp({apiKey:"AIzaSyBx5ZDZWeCjSBVrwJGWA_FmjKn4zTHQ0U0",authDomain:"everestminds-task.firebaseapp.com",databaseURL:"https://everestminds-task-default-rtdb.europe-west1.firebasedatabase.app",projectId:"everestminds-task",storageBucket:"everestminds-task.appspot.com",messagingSenderId:"772183598481",appId:"1:772183598481:web:3538bad57f00bdacf06630",measurementId:"G-7Z592M3948"});var ee=function(){var e=Object(P.a)(D.a.mark((function e(t,n){var c,r,a,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=ne.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,a=t.email,i=new Date,e.prev=9,e.next=12,c.set(Object(b.a)({displayName:r,email:a,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),te=X.a.auth(),ne=X.a.firestore(),ce=new X.a.auth.GoogleAuthProvider;ce.setCustomParameters({prompt:"select_account"});var re,ae,ie,se,le,oe,ue,de,je,he,be,pe,me,Oe,ve,fe,ge,xe=function(){return te.signInWithPopup(ce)},ye=(X.a,n(45)),we=n(46),Ne=we.a.div(re||(re=Object(ye.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Ce=we.a.div(ae||(ae=Object(ye.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]))),ke=["isLoading"],Ee=function(e){return function(t){var n=t.isLoading,c=Object(W.a)(t,ke);return n?Object(Q.jsx)(Ne,{children:Object(Q.jsx)(Ce,{})}):Object(Q.jsx)(e,Object(b.a)({},c))}},Ie=(n(84),["children","isGoogleSignIn","inverted"]),Le=function(e){var t=e.children,n=e.isGoogleSignIn,c=e.inverted,r=Object(W.a)(e,Ie);return Object(Q.jsx)("button",Object(b.a)(Object(b.a)({className:"".concat(c?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},r),{},{children:t}))},Me=function(){return{type:v.TOGGLE_CART_HIDDEN}},Te=function(e){return{type:v.ADD_ITEM,payload:e}},Ue=(n(85),Object(l.b)(null,(function(e){return{addItem:function(t){return e(Te(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,r=t.price,a=t.imageUrl;return Object(Q.jsxs)("div",{className:"collection-item",children:[Object(Q.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),Object(Q.jsxs)("div",{className:"collection-footer",children:[Object(Q.jsx)("span",{className:"name",children:c}),Object(Q.jsxs)("span",{className:"price",children:["$",r]})]}),Object(Q.jsx)(Le,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})}))),Ae=(n(86),function(e){var t=e.title,n=e.items;return Object(Q.jsxs)("div",{className:"collection-preview",children:[Object(Q.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(Q.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(Q.jsx)(Ue,{item:e},e.id)}))})]})}),Se=Object(F.a)([function(e){return e.shop}],(function(e){return e.collections})),_e=Object(F.a)([Se],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),ze=(n(87),["id"]),De=Object(F.b)({collections:_e}),Pe=Object(l.b)(De)((function(e){var t=e.collections;return Object(Q.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(W.a)(e,ze);return Object(Q.jsx)(Ae,Object(b.a)({},n),t)}))})})),Re=(n(88),Object(l.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(F.a)([Se],(function(e){return e?e[n]:null})))(e)};var n}))((function(e){var t=e.collection,n=t.title,c=t.items;return Object(Q.jsxs)("div",{className:"collection-page",children:[Object(Q.jsx)("h2",{className:"title",children:n}),Object(Q.jsx)("div",{className:"items",children:c.map((function(e){return Object(Q.jsx)(Ue,{item:e},e.id)}))})]})}))),He=Ee(Pe),Ve=Ee(Re),Ge=function(e){Object(V.a)(n,e);var t=Object(G.a)(n);function n(){var e;Object(R.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0},e.unsubscribeFromSnapshot=null,e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.updateCollections;ne.collection("collections").get().then((function(n){var c=n.docs.map((function(e){var t=e.data(),n=t.title,c=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:c}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{});t(c),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.props.match,t=this.state.loading;return Object(Q.jsxs)("div",{className:"shop-page",children:[Object(Q.jsx)(q.b,{exact:!0,path:"".concat(e.path),render:function(e){return Object(Q.jsx)(He,Object(b.a)({isLoading:t},e))}}),Object(Q.jsx)(q.b,{path:"".concat(e.path,"/:collectionId"),render:function(e){return Object(Q.jsx)(Ve,Object(b.a)({isLoading:t},e))}})]})}}]),n}(r.a.Component),qe=Object(l.b)(null,(function(e){return{updateCollections:function(t){return e(function(e){return{type:k.UPDATE_COLLECTIONS,payload:e}}(t))}}}))(Ge),Fe=n(27),We=n(37),Be=(n(89),["handleChange","label"]),Qe=function(e){var t=e.handleChange,n=e.label,c=Object(W.a)(e,Be);return Object(Q.jsxs)("div",{className:"group",children:[Object(Q.jsx)("input",Object(b.a)({className:"form-input",onChange:t},c)),n?Object(Q.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:n}):null]})},Je=(n(90),function(){var e=Object(c.useState)({email:"",password:""}),t=Object(We.a)(e,2),n=t[0],r=t[1],a=n.email,i=n.password,s=function(){var e=Object(P.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,te.signInWithEmailAndPassword(a,i);case 4:r({email:"",password:""}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(e){var t=e.target,c=t.value,a=t.name;r(Object(b.a)(Object(b.a)({},n),{},Object(Fe.a)({},a,c)))};return Object(Q.jsxs)("div",{className:"sign-in",children:[Object(Q.jsx)("h2",{children:"I already have an account"}),Object(Q.jsx)("span",{children:"Sign in with your email and password"}),Object(Q.jsxs)("form",{onSubmit:s,children:[Object(Q.jsx)(Qe,{name:"email",type:"email",handleChange:l,value:a,label:"email",required:!0}),Object(Q.jsx)(Qe,{name:"password",type:"password",value:i,handleChange:l,label:"password",required:!0}),Object(Q.jsxs)("div",{className:"buttons",children:[Object(Q.jsx)(Le,{type:"submit",children:" Sign in "}),Object(Q.jsx)(Le,{onClick:xe,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}),Ke=(n(91),function(){var e=Object(c.useState)({displayName:"",email:"",password:"",confirmPassword:""}),t=Object(We.a)(e,2),n=t[0],r=t[1],a=n.displayName,i=n.email,s=n.password,l=n.confirmPassword,o=function(){var e=Object(P.a)(D.a.mark((function e(t){var n,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s===l){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:return e.prev=4,e.next=7,te.createUserWithEmailAndPassword(i,s);case 7:return n=e.sent,c=n.user,e.next=11,ee(c,a);case 11:r({displayName:"",email:"",password:"",confirmPassword:""}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0),alert(e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,c=t.name,a=t.value;r(Object(b.a)(Object(b.a)({},n),{},Object(Fe.a)({},c,a)))};return Object(Q.jsxs)("div",{className:"sign-up",children:[Object(Q.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(Q.jsx)("span",{children:"Sign up with your email and password"}),Object(Q.jsxs)("form",{className:"sign-up-form",onSubmit:o,children:[Object(Q.jsx)(Qe,{type:"text",name:"displayName",value:a,onChange:u,label:"Display Name",required:!0}),Object(Q.jsx)(Qe,{type:"email",name:"email",value:i,onChange:u,label:"Email",required:!0}),Object(Q.jsx)(Qe,{type:"password",name:"password",value:s,onChange:u,label:"Password",required:!0}),Object(Q.jsx)(Qe,{type:"password",name:"confirmPassword",value:l,onChange:u,label:"Confirm Password",required:!0}),Object(Q.jsx)(Le,{type:"submit",children:"SIGN UP"})]})]})}),Ye=(n(92),function(){return Object(Q.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(Q.jsx)(Je,{}),Object(Q.jsx)(Ke,{})]})}),Ze=(n(93),Object(l.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:v.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(Te(t))},removeItem:function(t){return e(function(e){return{type:v.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.addItem,r=e.removeItem,a=t.name,i=t.imageUrl,s=t.price,l=t.quantity;return Object(Q.jsxs)("div",{className:"checkout-item",children:[Object(Q.jsx)("div",{className:"image-container",children:Object(Q.jsx)("img",{src:i,alt:"item"})}),Object(Q.jsx)("span",{className:"name",children:a}),Object(Q.jsxs)("span",{className:"quantity",children:[Object(Q.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276e"}),Object(Q.jsx)("span",{className:"value",children:l}),Object(Q.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276f"})]}),Object(Q.jsx)("span",{className:"price",children:s}),Object(Q.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),$e=n(61),Xe=n.n($e),et=n(62),tt=n.n(et),nt=function(e){var t=e.price,n=100*t;return Object(Q.jsx)(Xe.a,{label:"Pay Now",name:"yves saint laurent clothing inc.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/YRp.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){tt()({url:"payment",method:"post",data:{amount:n,token:e}}).then((function(e){alert("payment successful!")})).catch((function(e){console.log("payment error: ",JSON.parse(e)),alert("There was an issue with you payment, please use the provided test card")}))},stripeKey:"pk_test_51J5bYFDb358mW3DLGtVJvWIsc3UIeyehz6LPczT9Up3Q4JpGWiEYVvwtZhLKKcQIZZk6vh3iYOqQoGo7o66P60fQ00o458pQqz"})},ct=function(e){return e.cart},rt=Object(F.a)([ct],(function(e){return e.cartItems})),at=Object(F.a)([ct],(function(e){return e.hidden})),it=Object(F.a)([rt],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),st=Object(F.a)([rt],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),lt=(n(111),Object(F.b)({cartItems:rt,total:st})),ot=Object(l.b)(lt)((function(e){var t=e.cartItems,n=e.total;return Object(Q.jsxs)("div",{className:"checkout-page",children:[Object(Q.jsxs)("div",{className:"checkout-header",children:[Object(Q.jsx)("div",{className:"header-block",children:Object(Q.jsx)("span",{children:"Product"})}),Object(Q.jsx)("div",{className:"header-block",children:Object(Q.jsx)("span",{children:"Description"})}),Object(Q.jsx)("div",{className:"header-block",children:Object(Q.jsx)("span",{children:"Quantity"})}),Object(Q.jsx)("div",{className:"header-block",children:Object(Q.jsx)("span",{children:"Price"})}),Object(Q.jsx)("div",{className:"header-block",children:Object(Q.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(Q.jsx)(Ze,{cartItem:e},e.id)})),Object(Q.jsxs)("div",{className:"total",children:["TOTAL: $",n]}),Object(Q.jsx)("div",{className:"test-warning",children:"*use the test card for payments!*"}),Object(Q.jsx)("br",{}),"5555 5555 5555 4444 / cvc 123 / any future date",Object(Q.jsx)(nt,{price:n})]})})),ut=["title","titleId"];function dt(){return(dt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function jt(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ht(e,t){var n=e.title,r=e.titleId,a=jt(e,ut);return c.createElement("svg",dt({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ie||(ie=c.createElement("g",null)),se||(se=c.createElement("g",null)),le||(le=c.createElement("g",null)),oe||(oe=c.createElement("g",null)),ue||(ue=c.createElement("g",null)),de||(de=c.createElement("g",null)),je||(je=c.createElement("g",null)),he||(he=c.createElement("g",null)),be||(be=c.createElement("g",null)),pe||(pe=c.createElement("g",null)),me||(me=c.createElement("g",null)),Oe||(Oe=c.createElement("g",null)),ve||(ve=c.createElement("g",null)),fe||(fe=c.createElement("g",null)),ge||(ge=c.createElement("g",null)))}var bt,pt,mt=c.forwardRef(ht),Ot=(n.p,n(112),Object(F.b)({itemCount:it})),vt=Object(l.b)(Ot,(function(e){return{toggleCartHidden:function(){return e(Me())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(Q.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(Q.jsx)(mt,{className:"shopping-icon"}),Object(Q.jsx)("span",{className:"item-count",children:n})]})})),ft=(n(113),function(e){var t=e.item,n=t.imageUrl,c=t.price,r=t.name,a=t.quantity;return Object(Q.jsxs)("div",{className:"cart-item",children:[Object(Q.jsx)("img",{src:n,alt:"item"}),Object(Q.jsxs)("div",{className:"item-details",children:[Object(Q.jsx)("span",{className:"name",children:r}),Object(Q.jsxs)("span",{className:"price",children:[a," x $",c]})]})]})}),gt=(n(114),Object(F.b)({cartItems:rt})),xt=Object(q.g)(Object(l.b)(gt)((function(e){var t=e.cartItems,n=e.history,c=e.dispatch;return Object(Q.jsxs)("div",{className:"cart-dropdown",children:[Object(Q.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(Q.jsx)(ft,{item:e},e.id)})):Object(Q.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(Q.jsx)(Le,{onClick:function(){n.push("/checkout"),c(Me())},children:"CHECKOUT"})]})}))),yt=Object(F.a)([function(e){return e.user}],(function(e){return e.currentUser})),wt=["title","titleId"];function Nt(){return(Nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function Ct(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function kt(e,t){var n=e.title,r=e.titleId,a=Ct(e,wt);return c.createElement("svg",Nt({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 150.6 150.6",style:{enableBackground:"new 0 0 150.6 150.6"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,bt||(bt=c.createElement("style",{type:"text/css"},"\r\n\t.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}\r\n\t.st1{fill-rule:evenodd;clip-rule:evenodd;}\r\n")),pt||(pt=c.createElement("g",null,c.createElement("path",{className:"st0",d:"M0,0h150.6v150.6H0V0z"}),c.createElement("path",{className:"st1",d:"M120.3,78.1v-5.8h5.2v-1.2h-5.2v-5.8c1.7-0.3,3.5-0.3,5.5,0v-1.2h-7.6v14l-4.4-5v-0.9c2-0.6,2.9-2,2.9-4.4 s-2.3-3.8-4.4-3.8h-5v15.1h2.3V64.8c2,0,4.4,0.6,4.4,2.9c0,2.3-1.2,3.5-2.9,4.1v0.9l6.7,7.9l2.6,0.6l-1.2-1.7h6.7l1.2-2.6 C124.9,78.1,122.6,78.7,120.3,78.1L120.3,78.1z M105.7,64.4h-1.2v8.7c0,3.2,0,5.5-2.6,5.5S99,77.1,99,73.1v-8.7h-1.7v9.3 c0,4.1,0.6,6.7,5,6.7c4.1,0,3.8-4.7,3.8-6.7v-9.3H105.7z M57.4,79.5h1.7V64.4h-1.7V79.5z M92,64.4l-0.9,1.5l-7.3,13.7h2.3l2.9-6.1 h3.5l1.5,6.1h2.3l-3.8-15.1L92,64.4L92,64.4z M91.5,71.7h-1.2l1.2-2.6l0.3-0.6l0.9,3.5h-1.2C91.5,72,91.5,71.7,91.5,71.7z"}),c.createElement("path",{className:"st1",d:"M82.1,83.3l5.3-24.4H85l-1.2,5.5h-11V76l-9.9-11.6h-1.5v15.1h1.5V67.9l9.9,11.6h1.5v-14c1.2-0.3,2-0.3,2.9,0.3 v13.7h1.7V65.8c0.9-0.6,2.9-0.9,4.4,0.3l-3.2,18.3l11.4-0.3h1.2l0.3-2h-1.5L82.1,83.3L82.1,83.3z M52.7,64.4l-0.9,1.5l-5.2,10.5 c-0.3-0.9-0.6-1.5-1.2-2c-2-2.9-7.3-6.4-7.6-10.2c-0.3-2.6,1.7-4.4,4.4-4.7c1.7,0,4.4,1.5,5.2,2.9l1.7-1.2c-1.5-2.3-5-2.9-7.3-2.9 c-1.7,0-3.5,1.2-4.7,2.3c-0.9,0.9-1.7,2-1.7,2.9v1.2c-3.5-1.2-7.3-0.3-7,4.4c0.3,2.6,5,4.4,5.5,6.1c0.6,1.5,1.2,3.5-1.7,3.5 c-2.3,0.3-3.5-1.5-3.5-1.7c-1.2,1.5-6.4,2-6.7,1.5v-5.8h5.2v-1.2H22V66c1.7-0.3,3.5-0.3,5.5,0v-1.2h-7.3l0,0h-0.9l-5.2,10.8 l-2-10.8h-0.6l4.1-5.5H14L7,69.6H6.4L3.8,59.1H2l2.3,12.5L1.7,84.5h2L6.6,72l4.1-5.2L13,80.2h0.6l6.7-13.4v12.8H28l0.6-1.2 c0.9,0.9,2.3,1.2,3.5,1.2h1.2v2.9c1.2,0.9,2.6,1.7,4.4,2c2.9,0.6,6.1,0.3,8.2-2.3c0.6-0.9,0.9-1.5,1.2-2.6h0.3l2.9-6.1h3.5l1.5,6.1 h2.3l-3.8-15.1L52.7,64.4L52.7,64.4L52.7,64.4z M39.9,83.9c-1.2,0-1.7-0.3-2.6-0.6c-1.7-0.6-2.6-2-3.8-4.1c3.5-0.3,4.1-2.6,2.9-5.2 c-0.9-2-6.4-4.7-6.4-6.7c0-3.2,4.1-3.2,5.5-0.3l0.3-0.6c0.3,0.9,0.9,1.7,1.5,2.3c2,2.6,5,4.4,6.4,7C45.7,79.8,43.4,83.9,39.9,83.9 L39.9,83.9z M51.8,71.7h-1.2l1.2-2.6l0.3-0.6L53,72h-1.2V71.7z M140.1,64.4h-1.5V76l-9.9-11.6h-1.5v15.1h1.5V67.9l9.9,11.6h1.5v-14 c1.2-0.3,2-0.3,2.9,0.3v13.7h1.7V65.8c0.9-0.9,2-0.6,4.1,0v-1.5L140.1,64.4L140.1,64.4z M62.9,88.9c-0.3,0-0.9,0-1.2,0.3 c-0.3,0.3-0.6,0.6-0.9,0.9c-0.3,0.3-0.3,0.9-0.3,1.2c0,0.3,0,0.3,0,0.6c0,0.3,0.3,0.3,0.3,0.3c0.3,0,0.3,0.3,0.6,0.3s0.6,0,0.9-0.3 c0.3,0,0.6-0.3,0.9-0.6l0,0c-0.3,0.3-0.3,0.3-0.6,0.3s-0.3,0-0.6,0s-0.3,0-0.6-0.3c0,0-0.3-0.3-0.3-0.6c0-0.3,0-0.6,0.3-1.2 c0-0.3,0.3-0.6,0.6-0.9C62.3,89.1,62.6,89.1,62.9,88.9C62.9,89.1,62.9,89.1,62.9,88.9c0.3,0.3,0.3,0.3,0.3,0.3s0,0-0.3,0.3 l-0.3,0.3v0.3h0.3c0,0,0.3,0,0.3-0.3c0,0,0.3-0.3,0.3-0.6c0-0.3,0-0.3-0.3-0.6C63.2,88.9,63.2,88.9,62.9,88.9L62.9,88.9z M67,88.9 c-0.3,0-0.3,0-0.6,0s-0.6,0-0.6,0h-0.3c-0.3,0-0.6,0.3-0.9,0.6c-0.3,0.3-0.3,0.6-0.6,0.9c0,0.3-0.3,0.6-0.3,0.9 c0,0.3,0,0.6,0.3,0.9c0.3,0.3,0.6,0.3,0.9,0.3s0.6,0,0.6,0c0.6-0.3,1.2-0.6,1.5-1.2c0.3-0.3,0.3-0.9,0.3-1.2c0-0.3,0-0.3,0-0.6 C67.3,89.1,67.3,89.1,67,88.9L67,88.9z M66.4,90.6c0,0.3-0.3,0.9-0.3,1.2c0,0.3-0.3,0.3-0.3,0.3s0,0-0.3,0.3h-0.3h-0.3v-0.3 c0-0.6,0-1.2,0.3-1.7s0.3-0.9,0.6-0.9c0,0,0,0,0-0.3h0.3h0.3v0.3C66.4,89.7,66.4,90,66.4,90.6L66.4,90.6z M69,92.1L69,92.1L69,92.1 L69,92.1c-0.3,0-0.3-0.3,0-0.6l1.2-4.1v-0.3h-0.3l-1.2,0.3l0,0c0.3,0,0.3,0,0.3,0s0,0,0,0.3V88l-1.2,3.5c0,0.3,0,0.3,0,0.6v0.3h0.3 c0.3,0,0.3,0,0.6-0.3c0.3-0.3,0.6-0.6,0.6-0.9H69C69.3,91.8,69.3,91.8,69,92.1L69,92.1z M87.1,88.9c-0.3,0-0.3,0-0.6,0 s-0.6,0-0.6,0h-0.3c-0.3,0-0.6,0.3-0.9,0.6c-0.3,0.3-0.3,0.6-0.6,0.9c0,0.3-0.3,0.6-0.3,0.9c0,0.3,0,0.6,0.3,0.9 c0.3,0.3,0.6,0.3,0.9,0.3s0.6,0,0.6,0c0.6-0.3,1.2-0.6,1.5-1.2c0.3-0.3,0.3-0.9,0.3-1.2c0-0.3,0-0.3,0-0.6 C87.4,89.1,87.1,89.1,87.1,88.9L87.1,88.9z M86.5,90.6c0,0.3-0.3,0.9-0.3,1.2c0,0.3-0.3,0.3-0.3,0.3s0,0.3-0.3,0.3h-0.3H85v-0.3 c0-0.6,0-1.2,0.3-1.7s0.3-0.9,0.6-0.9c0,0,0,0,0-0.3h0.3h0.3v0.3C86.5,89.7,86.5,90.3,86.5,90.6L86.5,90.6z M83.3,87.1 c-0.3,0-0.3,0-0.3,0.3l-0.3,0.3c0,0.3,0,0.3,0.3,0.3l0.3,0.3c0,0,0.3,0,0.3-0.3l0.3-0.3c0-0.3,0-0.3-0.3-0.3 C83.6,87.1,83.6,87.1,83.3,87.1z M91.5,91.5l-0.3,0.3l0,0l0,0l0,0c0,0,0,0,0-0.3l0.6-1.7c0-0.3,0-0.3,0-0.6v-0.3l-0.3-0.3 c0,0-0.3,0-0.6,0s-0.3,0.3-0.6,0.6C90,89.5,90,89.7,89.4,90l0.6-1.7h-0.3l-1.5,0.3l0,0h0.3l0,0l0,0c0,0,0,0.3,0,0.6L88,91.8h0.9 l0.3-1.2c0.3-0.6,0.6-1.2,1.2-1.5l0.3-0.3l0,0l0,0c0,0,0,0,0,0.3l-0.3,2.3c0,0.3,0,0.3,0,0.6v0.3h0.3 C90.9,92.6,91.5,92.1,91.5,91.5L91.5,91.5L91.5,91.5L91.5,91.5z M83.6,88.9L83.6,88.9l-1.5,0.3v0.3l0,0h0.3l0,0v0.3l-0.6,1.7l0,0 v0.3v0.3l0,0h0.3c0.6,0,0.9-0.3,1.2-1.2l0,0C83,91.2,83,91.2,83,91.5l0,0l0,0l0,0c0,0,0,0,0-0.3L83.6,88.9z M78.9,89.1 c0,0-0.3-0.3-0.6-0.3s-0.9,0-1.2,0.3c-0.3,0.3-0.6,0.6-0.9,0.9C76,90.3,76,90.9,76,91.2c0,0.3,0,0.3,0,0.6c0,0.3,0.3,0.3,0.3,0.3 c0.3,0,0.3,0.3,0.6,0.3s0.6,0,1.2-0.3c0.3,0,0.6-0.3,0.6-0.6l0,0c-0.3,0.3-0.3,0.3-0.6,0.3s-0.3,0-0.6,0s-0.3,0-0.6-0.3 c0,0-0.3-0.3-0.3-0.6c0-0.3,0-0.6,0.3-1.2c0-0.3,0.3-0.6,0.6-0.9c0.3-0.3,0.3-0.3,0.6-0.3c0,0,0,0,0.3,0l0,0c0,0,0,0-0.3,0.3 l-0.3,0.3v0.3h0.3c0,0,0.3,0,0.3-0.3c0,0,0.3-0.3,0.3-0.6C79.2,89.4,79.2,89.1,78.9,89.1L78.9,89.1z M75.1,88.9 c-0.3,0-0.6,0-0.9,0.3c0,0-0.3,0-0.3,0.3c-0.3,0.3-0.9,0.6-1.2,1.2c0,0.3-0.3,0.6-0.3,0.9c0,0.3,0,0.3,0,0.6v0.3c0,0,0,0.3,0.3,0.3 c0.4,0.1,0.7,0.1,1,0.1c0.3,0,0.3,0,0.6,0h0.3c0.3-0.3,0.6-0.3,0.9-0.9l0,0c-0.3,0.3-0.6,0.3-0.6,0.6h-0.3l0,0 c-0.3,0-0.3,0-0.6-0.3c0,0-0.3-0.3-0.3-0.6v-0.3c0.3,0,0.6,0,0.6,0l0,0c0.3,0,0.6-0.3,0.9-0.3s0.3-0.3,0.6-0.6 c0-0.3,0.3-0.3,0.3-0.6c0-0.3,0-0.3-0.3-0.3C75.4,88.9,75.1,88.9,75.1,88.9L75.1,88.9z M74.8,89.7c0,0.3-0.3,0.3-0.3,0.6 c0,0-0.3,0-0.3,0.3l0,0c0,0-0.3,0-0.6,0c0.4-0.6,0.4-1.2,0.7-1.5l0,0c0.3-0.3,0.3-0.3,0.3-0.3s0,0,0.3,0c0,0,0,0,0,0.3 C74.9,89.4,74.8,89.7,74.8,89.7L74.8,89.7z M71.4,92.1L71.4,92.1C71.1,92.1,71.1,92.1,71.4,92.1C71.1,92.1,71.1,92.1,71.4,92.1 c-0.3,0-0.3-0.3,0-0.6l1.2-4.1v-0.3h-0.3l-1.2,0.3l0,0h0.3c0,0,0,0,0,0.3V88l-1.2,3.5l0,0c0,0.3,0,0.3,0,0.6v0.3l0,0h0.3 c0.3,0,0.3,0,0.6-0.3c0.3-0.3,0.6-0.6,0.6-0.9h-0.3C71.6,91.8,71.4,91.8,71.4,92.1L71.4,92.1z M81.3,89.4h0.3v-0.3v-0.2H81l0.3-1.2 H81c-0.3,0.3-0.6,0.6-0.9,0.9c-0.3,0.3-0.6,0.3-0.9,0.6v0.3h0.6l-0.6,2c0,0.3,0,0.3,0,0.6c0,0,0,0.3,0.3,0.3h0.3 c0.3,0,0.3,0,0.6-0.3c0.3,0,0.3-0.3,0.6-0.6l0,0c-0.3,0.3-0.3,0.3-0.3,0.6l0,0l0,0l0,0v-0.3L81.3,89.4L81.3,89.4z"}))))}var Et=c.forwardRef(kt),It=(n.p,n(115),Object(F.b)({currentUser:yt,hidden:at})),Lt=Object(l.b)(It)((function(e){var t=e.currentUser,n=e.hidden;return Object(Q.jsxs)("div",{className:"header",children:[Object(Q.jsx)(s.b,{className:"logo-container",to:"/",children:Object(Q.jsx)(Et,{className:"logo"})}),Object(Q.jsxs)("div",{className:"options",children:[Object(Q.jsx)(s.b,{className:"option",to:"/shop",children:"SHOP"}),Object(Q.jsx)(s.b,{className:"option",to:"/shop",children:"CONTACT"}),t?Object(Q.jsx)("div",{className:"option",onClick:function(){return te.signOut()},children:"SIGN OUT"}):Object(Q.jsx)(s.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(Q.jsx)(vt,{})]}),n?null:Object(Q.jsx)(xt,{})]})})),Mt=function(e){Object(V.a)(n,e);var t=Object(G.a)(n);function n(){var e;Object(R.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=te.onAuthStateChanged(function(){var t=Object(P.a)(D.a.mark((function t(n){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,ee(n);case 3:t.sent.onSnapshot((function(t){e(Object(b.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(Q.jsxs)("div",{children:[Object(Q.jsx)(Lt,{}),Object(Q.jsxs)(q.d,{children:[Object(Q.jsx)(q.b,{exact:!0,path:"/",component:$}),Object(Q.jsx)(q.b,{path:"/shop",component:qe}),Object(Q.jsx)(q.b,{exact:!0,path:"/checkout",component:ot}),Object(Q.jsx)(q.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(Q.jsx)(q.a,{to:"/"}):Object(Q.jsx)(Ye,{})}})]})]})}}]),n}(r.a.Component),Tt=Object(F.b)({currentUser:yt}),Ut=Object(l.b)(Tt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:p,payload:e}}(t))}}}))(Mt);i.a.render(Object(Q.jsx)(l.a,{store:U,children:Object(Q.jsx)(s.a,{children:Object(Q.jsx)(o.a,{persistor:A,children:Object(Q.jsx)(Ut,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");S?(!function(e,t){fetch(e).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_(t,e)}))}}()},74:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.86ea66ba.chunk.js.map