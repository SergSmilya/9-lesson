const t={startEl:document.querySelector("[data-start]"),stopEl:document.querySelector("[data-stop]"),bodyEl:document.querySelector("body")};let e=null;function l(){t.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startEl.addEventListener("click",(()=>{e=setInterval(l,1e3),t.startEl.setAttribute("disabled",!0)})),t.stopEl.addEventListener("click",(()=>{clearInterval(e),t.startEl.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.f3c7f305.js.map