(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2kvhd",Modal:"Modal_Modal__3LDNJ",Button:"Modal_Button__1pznx"}},13:function(e,t,a){e.exports={Loader:"Loader_Loader__2OiKn"}},15:function(e,t,a){e.exports={Button:"Button_Button__1BF4U"}},20:function(e,t,a){},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2v3R-",SearchForm:"Searchbar_SearchForm__3xfiX","SearchForm-button":"Searchbar_SearchForm-button__24vJF","SearchForm-button-label":"Searchbar_SearchForm-button-label__363j5","SearchForm-input":"Searchbar_SearchForm-input__T_bH0"}},44:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a.n(r),c=(a(20),a(12)),o=a(3),i=a(0),s=a(7),l=(a(21),a(13)),u=a.n(l),b=a(14),m=a.n(b),j=(a(42),a(1));var d=function(){return Object(j.jsxs)("div",{className:u.a.Loader,children:[Object(j.jsx)(m.a,{type:"Rings",color:"#00BFFF",height:100,width:100}),";"]})};var h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",a="key=23963114-6d0d5d874ae460d9125bacd21";return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=12&").concat(a)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something wrong..."))})).catch((function(e){return console.log(e)}))},g=a(4),O=a.n(g);var f=function(e){var t=e.onSubmit,a=Object(i.useState)(""),r=Object(o.a)(a,2),n=r[0],c=r[1];return Object(j.jsx)("header",{className:O.a.Searchbar,children:Object(j.jsxs)("form",{className:O.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==n.trim()?(t(n),c("")):s.b.warning("Enter word for search")},children:[Object(j.jsx)("button",{type:"submit",className:O.a["SearchForm-button"],children:Object(j.jsx)("span",{className:O.a["SearchForm-button-label"],children:"Search"})}),Object(j.jsx)("input",{className:O.a["SearchForm-input"],type:"text",value:n,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){c(e.target.value.toLowerCase())}})]})})},p=a(6),_=a.n(p),v=function(e){var t=e.imgUrl,a=e.bigImgUrl;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("img",{className:_.a["ImageGalleryItem-image"],src:t,alt:"","data-source":a})})};var x=function(e){var t=e.pictures,a=e.onClick;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:_.a.ImageGallery,onClick:a,children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL;return Object(j.jsx)("li",{className:_.a.ImageGalleryItem,children:Object(j.jsx)(v,{imgUrl:a,bigImgUrl:r})},t)}))})})},S=a(15),y=a.n(S),I=function(e){var t=e.onClick;return Object(j.jsx)("button",{className:y.a.Button,type:"button",onClick:t,children:"Load more"})},F=a(10),w=a.n(F);var k=function(e){var t=e.bigImg,a=e.onClose;return Object(i.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]),Object(j.jsx)("div",{className:w.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(j.jsxs)("div",{className:w.a.Modal,children:[Object(j.jsx)("button",{className:w.a.Button,type:"button",onClick:a}),Object(j.jsx)("img",{src:t,alt:"",width:"560"})]})})};var C=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],n=Object(i.useState)([]),l=Object(o.a)(n,2),u=l[0],b=l[1],m=Object(i.useState)(1),g=Object(o.a)(m,2),O=g[0],p=g[1],_=Object(i.useState)(!1),v=Object(o.a)(_,2),S=v[0],y=v[1],F=Object(i.useState)(""),w=Object(o.a)(F,2),C=w[0],N=w[1],G=Object(i.useState)(null),B=Object(o.a)(G,2),L=B[0],E=B[1],U=Object(i.useState)("idle"),M=Object(o.a)(U,2),J=M[0],R=M[1];return Object(i.useEffect)((function(){""!==a&&(R("pending"),h(a,O).then((function(e){e.hits.length>0?(R("resolved"),b((function(t){return[].concat(Object(c.a)(t),Object(c.a)(e.hits))}))):(R("idle"),s.b.error("Enter correct querry"))})).catch((function(e){R("rejected"),E(e)})))}),[O,a]),Object(j.jsxs)("div",{children:[Object(j.jsx)(s.a,{autoClose:3e3,theme:"colored"}),Object(j.jsx)(f,{onSubmit:function(e){r(e),R("pending"),b([]),p(1)}}),"pending"===J&&Object(j.jsx)(d,{}),"rejected"===J&&Object(j.jsx)("h1",{children:L.message}),"resolved"===J&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x,{pictures:u,onClick:function(e){e.target!==e.currentTarget&&(y(!0),N(e.target.dataset.source),document.body.style.overflow="hidden")}}),Object(j.jsx)(I,{onClick:function(){R("pending"),p((function(e){return e+1}))}})]}),S&&Object(j.jsx)(k,{bigImg:C,onClose:function(){y(!1),document.body.style.overflow="scroll"}})]})};n.a.render(Object(j.jsx)(C,{}),document.getElementById("root"))},6:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1FpA0",ImageGalleryItem:"ImageGallery_ImageGalleryItem__3zoih","ImageGalleryItem-image":"ImageGallery_ImageGalleryItem-image__223-B"}}},[[44,1,2]]]);
//# sourceMappingURL=main.47f085c1.chunk.js.map