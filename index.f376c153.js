function e(e,n,r,t){Object.defineProperty(e,n,{get:r,set:t,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=o),o.register("kyEFX",(function(n,r){var t,o;e(n.exports,"register",(function(){return t}),(function(e){return t=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};t=function(e){for(var n=Object.keys(e),r=0;r<n.length;r++)i[n[r]]=e[n[r]]},o=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),o("kyEFX").register(JSON.parse('{"5ZPII":"index.f376c153.js","6wFd8":"b11-2.a0dae7f3.avif","3kz8k":"b11-2.48716ecd.avif","dOFoa":"b11-2.7ae72997.webp","7qMKF":"b11-2.b3f1f4ce.webp","1Etm9":"b11-2.5c400700.jpeg","8fBxF":"b11-2.8a73642f.jpeg","ez5JG":"b11-2.59450da1.jpeg"}'));const i=document.querySelector(".test");var a;a=new URL(o("kyEFX").resolve("6wFd8"),import.meta.url).toString();const c=new URL(a);console.log(c);var l;l=new URL(o("kyEFX").resolve("3kz8k"),import.meta.url).toString();var u;u=new URL(o("kyEFX").resolve("dOFoa"),import.meta.url).toString();var s;s=new URL(o("kyEFX").resolve("7qMKF"),import.meta.url).toString();var f;f=new URL(o("kyEFX").resolve("1Etm9"),import.meta.url).toString();var d;d=new URL(o("kyEFX").resolve("8fBxF"),import.meta.url).toString();var p;p=new URL(o("kyEFX").resolve("ez5JG"),import.meta.url).toString(),function(e){const n=`  <picture>\n      <source\n        srcset="\n      ${new URL(a)}  1x,\n      ${new URL(l)}  2x,\n    "\n        type="image/avif"\n      />\n      <source\n        srcset="\n        ${new URL(u)}  1x,\n        ${new URL(s)}  2x,\n    "\n        type="image/webp"\n      />\n      <source\n        srcset="\n        ${new URL(f)}  1x,\n        ${new URL(d)}  2x,\n    "\n        type="image/jpeg"\n      />\n\n      <img src="${new URL(p)}" alt="test image" />\n    </picture>`;e.innerHTML=n}(i);
//# sourceMappingURL=index.f376c153.js.map
