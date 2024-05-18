(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"5ZrT":function(e,t,a){"use strict";var n=a("ahKI"),l=a.n(n),r=a("bIC1"),c=a.n(r);a("lFyj");function u(e,t){return s(e)||d(e,t)||m(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,u=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(o){u=!0,l=o}finally{try{c||null==a["return"]||a["return"]()}finally{if(u)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),o=u(r,2),m=o[0],i=o[1],d=Object(n["useState"])(!1),s=u(d,2),E=s[0],f=s[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){i(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":m||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},"6l3e":function(e,t,a){"use strict";a.r(t);var n=a("ahKI"),l=a.n(n),r=a("D2G6"),c=a("Il19"),u=a("zJrY"),o=a("5ZrT"),m=l.a.memo((e=>{var t=e.demos,a=t["usemap-demo1"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"usemap"},l.a.createElement(r["AnchorLink"],{to:"#usemap","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useMap"),l.a.createElement("p",null,"\u7ba1\u7406 Map \u7c7b\u578b\u72b6\u6001\u7684 Hook\u3002"),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.a.createElement(c["default"],t["usemap-demo1"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(u["a"],{code:"const [\n  map,\n  {\n    set,\n    setAll,\n    remove,\n    reset,\n    get\n  }\n] = useMap<K, V>(initialValue);",lang:"typescript"}),l.a.createElement("h3",{id:"result"},l.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Result"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"map"),l.a.createElement("td",null,"Map \u5bf9\u8c61"),l.a.createElement("td",null,l.a.createElement("code",null,"Map<K, V>"))),l.a.createElement("tr",null,l.a.createElement("td",null,"set"),l.a.createElement("td",null,"\u6dfb\u52a0\u5143\u7d20"),l.a.createElement("td",null,l.a.createElement("code",null,"(key: K, value: V) => void"))),l.a.createElement("tr",null,l.a.createElement("td",null,"get"),l.a.createElement("td",null,"\u83b7\u53d6\u5143\u7d20"),l.a.createElement("td",null,l.a.createElement("code",null,"(key: K) => V | undefined"))),l.a.createElement("tr",null,l.a.createElement("td",null,"setAll"),l.a.createElement("td",null,"\u751f\u6210\u4e00\u4e2a\u65b0\u7684 Map \u5bf9\u8c61"),l.a.createElement("td",null,l.a.createElement("code",null,"(newMap: Iterable<[K, V]>) => void"))),l.a.createElement("tr",null,l.a.createElement("td",null,"remove"),l.a.createElement("td",null,"\u79fb\u9664\u5143\u7d20"),l.a.createElement("td",null,l.a.createElement("code",null,"(key: K) => void"))),l.a.createElement("tr",null,l.a.createElement("td",null,"reset"),l.a.createElement("td",null,"\u91cd\u7f6e\u4e3a\u9ed8\u8ba4\u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void"))))),l.a.createElement("h3",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Params"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"initialValue"),l.a.createElement("td",null,"\u53ef\u9009\u9879\uff0c\u4f20\u5165\u9ed8\u8ba4\u7684 Map \u53c2\u6570"),l.a.createElement("td",null,l.a.createElement("code",null,"Iterable<[K, V]>")),l.a.createElement("td",null,"-")))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(m,{demos:a})}},MZF8:function(e,t,a){"use strict";var n=a("ogwx");a.d(t,"a",(function(){return n["b"]}));a("VCU9")},lFyj:function(e,t,a){}}]);