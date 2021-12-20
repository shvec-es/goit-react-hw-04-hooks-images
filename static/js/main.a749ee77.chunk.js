(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2kvhd",Modal:"Modal_Modal__3LDNJ"}},14:function(e,t,a){e.exports={Button:"Button_Button__1BF4U"}},23:function(e,t,a){},4:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1FpA0",ImageGalleryItem:"ImageGallery_ImageGalleryItem__3zoih","ImageGalleryItem-image":"ImageGallery_ImageGalleryItem-image__223-B",Button:"ImageGallery_Button__36gzt",Loader:"ImageGallery_Loader__2H8Qe"}},47:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a.n(r),c=(a(23),a(3)),o=a(0),l=a(5),s=(a(24),a(6)),i=a.n(s),u=a(1);var b=function(e){var t=e.onSubmit,a=Object(o.useState)(""),r=Object(c.a)(a,2),n=r[0],s=r[1];return Object(u.jsx)("header",{className:i.a.Searchbar,children:Object(u.jsxs)("form",{className:i.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==n.trim()?(t(n),s("")):l.b.warning("Enter word for search")},children:[Object(u.jsx)("button",{type:"submit",className:i.a["SearchForm-button"],children:Object(u.jsx)("span",{className:i.a["SearchForm-button-label"],children:"Search"})}),Object(u.jsx)("input",{className:i.a["SearchForm-input"],type:"text",value:n,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){s(e.target.value.toLowerCase())}})]})})},m=a(12),h=a(13),d=a.n(h),j=(a(46),a(4)),g=a.n(j);var O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",a="key=23963114-6d0d5d874ae460d9125bacd21";return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=12&").concat(a)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something wrong..."))})).catch((function(e){return console.log(e)}))},f=function(e){var t=e.imgUrl,a=e.bigImgUrl;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("img",{className:g.a["ImageGalleryItem-image"],src:t,alt:"","data-source":a})})},p=a(14),v=a.n(p),_=function(e){var t=e.onClick;return Object(u.jsx)("button",{className:v.a.Button,type:"button",onClick:t,children:"Load more"})},y=a(15),x=a(16),S=a(18),I=a(17),F=a(11),w=a.n(F),k=function(e){Object(S.a)(a,e);var t=Object(I.a)(a);function a(){var e;Object(y.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleModal=function(t){"Escape"!==t.code&&t.currentTarget!==t.target||e.props.onClose()},e}return Object(x.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleModal)}},{key:"render",value:function(){return Object(u.jsx)("div",{className:w.a.Overlay,onClick:this.handleModal,children:Object(u.jsx)("div",{className:w.a.Modal,children:this.props.children})})}}]),a}(o.Component),N=k;var G=function(e){var t=e.searchName,a=Object(o.useState)([]),r=Object(c.a)(a,2),n=r[0],s=r[1],i=Object(o.useState)(1),b=Object(c.a)(i,2),h=b[0],j=b[1],p=Object(o.useState)(!1),v=Object(c.a)(p,2),y=v[0],x=v[1],S=Object(o.useState)(""),I=Object(c.a)(S,2),F=I[0],w=I[1],k=Object(o.useState)(null),G=Object(c.a)(k,2),C=G[0],B=G[1],L=Object(o.useState)("idle"),M=Object(c.a)(L,2),E=M[0],U=M[1];Object(o.useEffect)((function(){""!==t&&(U("pending"),O(t,h).then((function(e){e.hits.length>0?(s((function(t){return[].concat(Object(m.a)(t),Object(m.a)(e.hits))})),U("resolved")):(U("idle"),l.b.error("Enter correct querry"))})).catch((function(e){U("rejected"),B(e)})))}),[h,t]);var D=function(){x(!1),document.body.style.overflow="scroll"};return"idle"===E?Object(u.jsx)(u.Fragment,{}):"pending"===E?Object(u.jsxs)("div",{className:g.a.Loader,children:[Object(u.jsx)(d.a,{type:"Rings",color:"#00BFFF",height:100,width:100}),";"]}):"rejected"===E?Object(u.jsx)("h1",{children:C.message}):"resolved"===E?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{className:g.a.ImageGallery,onClick:function(e){e.target!==e.currentTarget&&(x(!0),w(e.target.dataset.source),document.body.style.overflow="hidden")},children:n.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL;return Object(u.jsx)("li",{className:g.a.ImageGalleryItem,children:Object(u.jsx)(f,{imgUrl:a,bigImgUrl:r})},t)}))}),Object(u.jsx)(_,{onClick:function(e){e.preventDefault(),j((function(e){return e+1}))}}),y&&Object(u.jsxs)(N,{onClose:D,children:[Object(u.jsx)("button",{className:g.a.Button,type:"button",onClick:D}),Object(u.jsx)("img",{src:F,alt:"",width:"560"})]})]}):void 0};var C=function(){var e=Object(o.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(l.a,{autoClose:3e3,theme:"colored"}),Object(u.jsx)(b,{onSubmit:function(e){r(e)}}),Object(u.jsx)(G,{searchName:a})]})};n.a.render(Object(u.jsx)(C,{}),document.getElementById("root"))},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2v3R-",SearchForm:"Searchbar_SearchForm__3xfiX","SearchForm-button":"Searchbar_SearchForm-button__24vJF","SearchForm-button-label":"Searchbar_SearchForm-button-label__363j5","SearchForm-input":"Searchbar_SearchForm-input__T_bH0"}}},[[47,1,2]]]);
//# sourceMappingURL=main.a749ee77.chunk.js.map