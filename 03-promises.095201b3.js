!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("h6c0i");function i(e,n){var t=Math.random()>.3;return new Promise((function(r,o){setInterval((function(){t?r("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}({formEl:document.querySelector(".form")}).formEl.addEventListener("submit",(function(e){e.preventDefault();for(var n=e.currentTarget.elements,t=n.delay,r=n.step,u=n.amount,a=Number(t.value),l=1;l<=u.value;l+=1)1===l?a=+t.value:a+=Number(r.value),i(l,a).then((function(e){o.Notify.success(e)})).catch((function(e){o.Notify.failure(e)}))}))}();
//# sourceMappingURL=03-promises.095201b3.js.map
