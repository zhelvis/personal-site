(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"9Koi":function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("J4zp"),o=n.n(r),i=n("lSNA"),a=n.n(i),c=n("q1tI"),u=n("QSL9");function s(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var f={};function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&f[t[0]]||("string"==typeof t[0]&&(f[t[0]]=new Date),s.apply(void 0,t))}function p(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return l("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],o=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!a(r,e)||o&&!a(i,e))))}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(c.useContext)(u.a)||{},i=r.i18n,a=r.defaultNS,s=n||i||Object(u.d)();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new u.b),!s){l("You will need pass in an i18next instance by using initReactI18next");var f=function(e){return Array.isArray(e)?e[e.length-1]:e},g=[f,{},!1];return g.t=f,g.i18n={},g.ready=!1,g}var y=b({},Object(u.c)(),{},s.options.react,{},t),v=y.useSuspense,m=e||a||s.options&&s.options.defaultNS;m="string"==typeof m?[m]:m||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(m);var h=(s.isInitialized||s.initializedStoreOnce)&&m.every((function(e){return d(e,s,y)}));function w(){return{t:s.getFixedT(null,"fallback"===y.nsMode?m:m[0])}}var O=Object(c.useState)(w()),j=o()(O,2),x=j[0],k=j[1],S=Object(c.useRef)(!0);Object(c.useEffect)((function(){var e=y.bindI18n,t=y.bindI18nStore;function n(){S.current&&k(w())}return S.current=!0,h||v||p(s,m,(function(){S.current&&k(w())})),e&&s&&s.on(e,n),t&&s&&s.store.on(t,n),function(){S.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,n)})),t&&s&&t.split(" ").forEach((function(e){return s.store.off(e,n)}))}}),[m.join()]);var I=[x.t,s,h];if(I.t=x.t,I.i18n=s,I.ready=h,h)return I;if(!h&&!v)return I;throw new Promise((function(e){p(s,m,(function(){S.current&&k(w()),e()}))}))}},J4zp:function(e,t,n){var r=n("wTVA"),o=n("m0LI"),i=n("ZhPi"),a=n("wkBT");e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},m0LI:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("qhky");t.a=function(e){var t=e.description,n=e.title,r=e.children;return o.a.createElement(i.a,{title:n},o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"og:title",content:n}),o.a.createElement("meta",{name:"og:description",content:t}),o.a.createElement("meta",{name:"og:type",content:"website"}),r)}},w2l6:function(e,t,n){"use strict";n.r(t);var r=n("2A+t"),o=n("MXbp"),i=n("q1tI"),a=n("Frpm"),c=n("9Koi"),u=n("vrFN");t.default=function(){var e=Object(c.a)("404").t;return Object(r.c)(i.Fragment,null,Object(r.c)(u.a,{title:e(["404:title","Not Found"]),description:e(["404:description","This page does not exist"])}),Object(r.c)("div",{sx:{width:"100vw",height:"100vh",p:3}},Object(r.c)(o.b.h1,null,"404"),Object(r.c)("p",null,e(["404:text","Right now you are on a page that does not exist. Do you exist yourself?"])),Object(r.c)(o.b.a,{as:a.a,to:"/"},e(["404:link","Back to home page"]))))}},wTVA:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},wkBT:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);
//# sourceMappingURL=component---src-pages-404-js-201be13b3d627cf80e48.js.map