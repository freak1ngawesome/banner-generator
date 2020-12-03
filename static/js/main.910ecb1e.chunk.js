(this.webpackJsonpbanner_creater=this.webpackJsonpbanner_creater||[]).push([[0],{17:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(1),a=n(4),c=n.n(a);n(17);var s=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("h1",{className:"header__heading",children:"Create your awesome banner"})})},r=n(3);n(24);var u={bgChange:function(e){return{type:"ADD_BG",value:e}},fontColorChange:function(e){return{type:"ADD_FONT_COLOR",value:e}},fontSizeChange:function(e){return{type:"ADD_FORN_SIZE",value:e}},bannerSizeXChange:function(e){return{type:"ADD_BANNER_SIZE_X",value:e}},bannerSizeYChange:function(e){return{type:"ADD_BANNER_SIZE_Y",value:e}},imgChange:function(e){return{type:"ADD_IMG",value:e}},linkChange:function(e){return{type:"ADD_LINK",value:e}},reset:function(){return{type:"RESET"}}},l=Object(r.b)((function(e){return{settings:e}}),u)((function(e){var t=e.settings,n=e.bgChange,i=e.fontColorChange,a=e.fontSizeChange,c=e.bannerSizeXChange,s=e.bannerSizeYChange,r=e.imgChange,u=e.linkChange,l=e.reset,m=t.background,b=t.fontColor,d=t.fontSize,_=t.bannerSizeX,f=t.bannerSizeY,j=t.imgURL,g=t.link;return Object(o.jsx)("section",{className:"customization",children:Object(o.jsxs)("div",{className:"customization__block",children:[Object(o.jsx)("button",{className:"customizer_btn",onClick:function(e){return function(e){var t=document.querySelector(".customization__form"),n=e.target.textContent;"show"===n&&(t.style.display="block",e.target.textContent="hide"),"hide"===n&&(t.style.display="none",e.target.textContent="show")}(e)},children:"show"}),Object(o.jsxs)("form",{className:"customization__form",children:[Object(o.jsxs)("div",{className:"customization__form_item banner_sizes",children:[Object(o.jsx)("h2",{className:"customization__form_label",children:"Banner size"}),Object(o.jsxs)("div",{className:"customization__form_inputs",children:[Object(o.jsx)("span",{children:"X:"}),Object(o.jsx)("input",{type:"text",className:"customization__form_text","data-test":"SizeX",value:_,onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("span",{children:"Y:"}),Object(o.jsx)("input",{type:"text",className:"customization__form_text","data-test":"SizeY",value:f,onChange:function(e){return s(e.target.value)}})]})]}),Object(o.jsxs)("div",{className:"customization__form_item background",children:[Object(o.jsx)("h2",{className:"customization__form_label",children:"Background"}),Object(o.jsxs)("div",{className:"customization__form_inputs",children:[Object(o.jsx)("input",{type:"color",className:"customization__form_color","data-test":"BGColor",value:m,onInput:function(e){return n(e.target.value)}}),Object(o.jsx)("input",{type:"text",className:"customization__form_text",value:m,onChange:function(e){return n(e.target.value)}})]})]}),Object(o.jsxs)("div",{className:"customization__form_item font_color",children:[Object(o.jsx)("h2",{className:"customization__form_label",children:"Font color"}),Object(o.jsxs)("div",{className:"customization__form_inputs",children:[Object(o.jsx)("input",{type:"color",className:"customization__form_color","data-test":"FontColor",value:b,onInput:function(e){return i(e.target.value)}}),Object(o.jsx)("input",{type:"text",className:"customization__form_text",value:b,onChange:function(e){return i(e.target.value)}})]})]}),Object(o.jsxs)("div",{className:"customization__form_item font_size",children:[Object(o.jsx)("h2",{className:"customization__form_label",children:"Font size"}),Object(o.jsx)("div",{className:"customization__form_inputs",children:Object(o.jsx)("input",{type:"text",className:"customization__form_text","data-test":"FontSize",value:d,onChange:function(e){return a(e.target.value)}})})]}),Object(o.jsxs)("div",{className:"customization__form_item imgURL",children:[Object(o.jsx)("h2",{className:"customization__form_label",children:"Enter img link or URI"}),Object(o.jsx)("div",{className:"customization__form_inputs",children:Object(o.jsx)("input",{type:"text",className:"customization__form_text","data-test":"ImgLink",value:j,onChange:function(e){return r(e.target.value)}})})]}),Object(o.jsxs)("div",{className:"customization__form_item link",children:[Object(o.jsx)("h2",{className:"customization__form_label",children:"Enter link to your site"}),Object(o.jsx)("div",{className:"customization__form_inputs",children:Object(o.jsx)("input",{type:"text",className:"customization__form_text","data-test":"SiteLink",value:g,onChange:function(e){return u(e.target.value)}})})]}),Object(o.jsx)("button",{className:"reset_btn",onClick:function(e){e.preventDefault(),l()},children:"reset"})]})]})})}));n(25);var m=Object(r.b)((function(e){return{settings:e}}))((function(e){var t=e.settings,n={position:"absolute",width:t.bannerSizeX+"px",height:t.bannerSizeY+"px",background:t.background,overflow:"hidden",borderRadius:"10px"},a={width:"100%",position:"absolute",top:"50%",left:"10px",color:t.fontColor,fontFamily:"monospace",fontWeight:"700",fontSize:t.fontSize+"px",lineHeight:t.fontSize+"px",height:3*t.fontSize+"px",overflow:"hidden",userSelect:"none"};function c(e,t){e.onmousedown=function(n){var o=t.getBoundingClientRect().left,i=t.getBoundingClientRect().top+document.documentElement.scrollTop,a=n.clientX-e.getBoundingClientRect().left,c=n.clientY-e.getBoundingClientRect().top;function s(t,n){e.style.left=t-a-o+"px",e.style.top=n-c-i+"px"}function r(e){s(e.pageX,e.pageY)}s(n.pageX,n.pageY),document.addEventListener("mousemove",r),e.onmouseup=function(){document.removeEventListener("mousemove",r),e.onmouseup=null}},e.ondragstart=function(){return!1}}return Object(i.useEffect)((function(){var e=document.querySelector(".banner"),t=document.getElementById("banner_img"),n=document.getElementById("banner_text");c(t,e),c(n,e),n.addEventListener("dblclick",(function(){n.setAttribute("contenteditable","true"),n.style.cursor="text",n.style.userSelect="auto",n.onmousedown=null,n.addEventListener("blur",(function(){n.setAttribute("contenteditable","false"),n.style.cursor="move",n.style.userSelect="none",c(n,e),n.onblur=null}))}))}),[]),Object(o.jsx)("section",{className:"preview",id:"preview",children:Object(o.jsxs)("div",{className:"banner",style:n,id:"capture",children:[Object(o.jsx)("img",{src:t.imgURL,alt:"",style:{position:"absolute",top:"0",left:"0"},id:"banner_img"}),Object(o.jsx)("div",{style:a,suppressContentEditableWarning:!0,id:"banner_text",children:" Write your awesome text here"})]})})})),b=n(2),d=(n(26),n(11)),_=n.n(d);var f=Object(r.b)((function(e){return{link:e.link,settings:e}}))((function(e){var t=e.link,n=e.settings,i=function(e,t){var n=document.createElement("a");"string"===typeof n.download?(n.href=e,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)):window.open(e)},a=function(e){var t=document.querySelector(".notification");t.innerHTML=e,t.style.display="block"},c=function(){var e=document.querySelector(".notification");e.innerHTML="",e.style.display="none"};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("section",{className:"export",children:[Object(o.jsx)("button",{className:"export__btn",id:"save_png",onClick:function(){var e=document.getElementById("capture");window.scrollTo({top:0,behavior:"instant"}),_()(e,{useCORS:!0}).then((function(e){i(e.toDataURL(),"banner.png"),a("<b>take a screenshot...</b>"),setTimeout(c,500)})).catch((function(){a("<b>something is going wrong</b>"),setTimeout(c,500)}))},children:"Save as .png"}),Object(o.jsx)("button",{className:"export__btn copy_html",onClick:function(){var e=document.getElementById("capture").outerHTML;navigator.clipboard.writeText("<a href=".concat(t," style='display: block; heigth: 100%' target='_blank'>")+e+"</a>").then((function(){a("<b>copied to clipboard</b>"),setTimeout(c,500)})).catch((function(){a("<b>something is going wrong</b>"),setTimeout(c,500)}))},children:"Copy as HTML5 string"}),Object(o.jsx)("button",{className:"export__btn copy_json",onClick:function(){var e=document.getElementById("banner_text").textContent,t=Object(b.a)(Object(b.a)({},n),{},{textValue:e});navigator.clipboard.writeText(JSON.stringify(t)).then((function(){a("<b>settings is saved as JSON</b>"),setTimeout(c,500)})).catch((function(){a("<b>something is going wrong</b>"),setTimeout(c,500)}))},children:"Copy settings"})]}),Object(o.jsx)("p",{className:"notification"})]})}));n(27);var j=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(s,{}),Object(o.jsx)(f,{}),Object(o.jsx)(l,{}),Object(o.jsx)(m,{})]})},g=n(5),h={background:"#000000",fontColor:"#ffffff",fontSize:"44",bannerSizeX:"282",bannerSizeY:"376",imgURL:"",link:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BG":return Object(b.a)(Object(b.a)({},e),{},{background:t.value});case"ADD_FONT_COLOR":return Object(b.a)(Object(b.a)({},e),{},{fontColor:t.value});case"ADD_FORN_SIZE":return Object(b.a)(Object(b.a)({},e),{},{fontSize:t.value});case"ADD_BANNER_SIZE_X":return Object(b.a)(Object(b.a)({},e),{},{bannerSizeX:t.value});case"ADD_BANNER_SIZE_Y":return Object(b.a)(Object(b.a)({},e),{},{bannerSizeY:t.value});case"ADD_IMG":return Object(b.a)(Object(b.a)({},e),{},{imgURL:t.value});case"ADD_LINK":return Object(b.a)(Object(b.a)({},e),{},{link:t.value});case"RESET":return h;default:return e}},x=Object(g.b)(p);n(28);c.a.render(Object(o.jsx)(r.a,{store:x,children:Object(o.jsx)(j,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.910ecb1e.chunk.js.map