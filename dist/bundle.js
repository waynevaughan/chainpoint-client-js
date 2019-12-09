!function(r,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("chainpointClient",[],n):"object"==typeof exports?exports.chainpointClient=n():r.chainpointClient=n()}(global,function(){return function(r){var n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,n){if(1&n&&(r=e(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var o in r)e.d(t,o,function(n){return r[n]}.bind(null,o));return t},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="",e(e.s=27)}([function(r,n){r.exports=require("lodash/isEmpty")},function(r,n){r.exports=require("lodash/forEach")},function(r,n){r.exports=require("lodash/map")},function(r,n){r.exports=require("lodash/isArray")},function(r,n){r.exports=require("lodash/isString")},function(r,n){r.exports=require("lodash/reject")},function(r,n){r.exports=require("lodash/isFunction")},function(r,n){r.exports=require("lodash/isObject")},function(r,n){r.exports=require("lodash/has")},function(r,n){r.exports=require("lodash/shuffle")},function(r,n){r.exports=require("lodash/slice")},function(r,n){r.exports=require("lodash/isInteger")},function(r,n){r.exports=require("lodash/filter")},function(r,n){r.exports=require("lodash/first")},function(r,n){r.exports=require("lodash/uniq")},function(r,n){r.exports=require("lodash/flatten")},function(r,n){r.exports=require("lodash/mapKeys")},function(r,n){r.exports=require("lodash/camelCase")},function(r,n){r.exports=require("validator/lib/isURL")},function(r,n){r.exports=require("validator/lib/isJSON")},function(r,n){r.exports=require("validator/lib/isBase64")},function(r,n){r.exports=require("lodash/isBuffer")},function(r,n){r.exports=require("lodash/every")},function(r,n){r.exports=require("lodash/keys")},function(r,n){r.exports=require("lodash/uniqWith")},function(r,n){r.exports=require("lodash/isEqual")},function(r,n){r.exports=require("validator/lib/isIP")},function(r,n,e){e(28),e(29),r.exports=e(30)},function(r,n){r.exports=require("@babel/polyfill")},function(r,n){r.exports=require("@ungap/url-search-params")},function(r,n,e){"use strict";e.r(n),e.d(n,"getCores",function(){return yr}),e.d(n,"getNodes",function(){return xr}),e.d(n,"submitHashes",function(){return Pr}),e.d(n,"submitFileHashes",function(){return Sr}),e.d(n,"getProofs",function(){return Or}),e.d(n,"verifyProofs",function(){return Ir}),e.d(n,"evaluateProofs",function(){return Nr}),e.d(n,"getProofTxs",function(){return Cr});var t=e(4),o=e.n(t),i=e(0),u=e.n(i),a=e(6),s=e.n(a),c=e(11),f=e.n(c),h=e(2),l=e.n(h),p=e(9),d=e.n(p),m=e(12),b=e.n(m),v=e(10),y=e.n(v),w=e(13),g=e.n(w),x=e(7),_=e.n(x),E=e(8),q=e.n(E),j=e(3),P=e.n(j),S=e(1),A=e.n(S),O=e(21),I=e.n(O),N=e(5),C=e.n(N),T=e(14),k=e.n(T),H=e(22),U=e.n(H),R=e(23),J=e.n(R),F=e(15),M=e.n(F),D=e(16),G=e.n(D),X=e(17),B=e.n(X),$=e(24),z=e.n($),K=e(25),L=e.n(K),W=e(18),Z=e.n(W),Q=e(26),V=e.n(Q),Y=e(19),rr=e.n(Y),nr=e(20),er=e.n(nr);function tr(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var e=[],t=!0,o=!1,i=void 0;try{for(var u,a=r[Symbol.iterator]();!(t=(u=a.next()).done)&&(e.push(u.value),!n||e.length!==n);t=!0);}catch(r){o=!0,i=r}finally{try{t||null==a.return||a.return()}finally{if(o)throw i}}return e}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function or(r,n,e,t,o,i,u){try{var a=r[i](u),s=a.value}catch(r){return void e(r)}a.done?n(s):Promise.resolve(s).then(t,o)}function ir(r){return(ir="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function ur(r,n,e){return n in r?Object.defineProperty(r,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[n]=e,r}var ar=e(31),sr=e(32),cr=e(33),fr=e(34),hr=e(35),lr=e(36),pr=e(37),dr=e(38),mr="https://node-proxy.chainpoint.org:443",br=function(r,n){return Promise.all(r.map(function(r){var e=JSON.parse(JSON.stringify(r)),t=e.method,o=e.uri,i=e.body;switch(delete e.method,delete e.uri,delete e.body,t){case"GET":return n(o,e).then(function(r){var n=r.clone();return r.json().catch(function(){return n.text()})});case"POST":return n(o,function(r){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},t=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e).filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.forEach(function(n){ur(r,n,e[n])})}return r}({method:t},e,{body:JSON.stringify(i)})).then(function(r){var n=r.clone();return r.json().catch(function(){return n.text()})})}}))},vr="_core.addr.chainpoint.org";function yr(r,n){if(n=n||function(){},r=r||1,!f()(r)||r<1)throw new Error("num arg must be an Integer >= 1");return new Promise(function(e,t){if(!ar||!s()(ar.resolveTxt)){var i=y()(d()(["https://a.chainpoint.org","https://b.chainpoint.org","https://c.chainpoint.org"]),0,r);return e(i),n(null,i)}ar.resolveTxt(vr,function(i,a){if(i)return t(i),n(i);if(u()(a)){var s=new Error("no core addresses available");return t(s),n(s)}var c=l()(a,function(r){return"https://"+r}),f=d()(c),h=b()(f,function(r){return function(r){if(u()(r)||!o()(r))return!1;try{return Z()(r,{protocols:["https"],require_protocol:!0,host_whitelist:[/^[a-z]\.chainpoint\.org$/]})}catch(r){return!1}}(r)}),p=y()(h,0,r);return e(p),n(null,p)})})}function wr(r){if(!o()(r))return!1;try{var n=Z()(r,{protocols:["http","https"],require_protocol:!0,host_blacklist:["0.0.0.0"]}),e=sr.parse(r).hostname;return n&&V()(e,4)}catch(r){return!1}}function gr(){return"object"===("undefined"==typeof window?"undefined":ir(window))&&"https:"===window.location.protocol}function xr(r,n){if(n=n||function(){},r=r||3,!f()(r)||r<1)throw new Error("num arg must be an Integer >= 1");return new Promise(function(e,t){yr(1).then(function(t){var o=g()(t)+"/nodes/random";return dr(o).then(function(r){return r.json()}).then(function(t){var o=l()(t,"public_uri"),i=d()(o),u=b()(i,function(r){return wr(r)}),a=y()(u,0,r);if(!a.length)throw new Error("There seems to be an issue retrieving a list of available nodes. Please try again.");return e(a),n(null,a)})}).catch(function(r){return t(r),n(r)})})}function _r(r){return/^[0-9a-f]{2,}$/i.test(r)&&!(r.length%2)}function Er(r){if(!P()(r))throw new Error("proofs arg must be an Array");if(u()(r))throw new Error("proofs arg must be a non-empty Array");var n=[];return A()(r,function(r){if(_()(r))n.push(fr.parse(r));else if(rr()(r))n.push(fr.parse(JSON.parse(r)));else{if(!(er()(r)||I()(r)||_r(r)))throw new Error("unknown proof format");n.push(fr.parse(r))}}),n}function qr(r){if(!P()(r))throw new Error("parsedProofs arg must be an Array");if(u()(r))throw new Error("parsedProofs arg must be a non-empty Array");var n=[];return A()(r,function(r){var e=function r(n){var e=[];A()(n,function(n){var t=n.anchors;A()(t,function(r){var t={};t.branch=n.label||void 0,t.uri=r.uris[0],t.type=r.type,t.anchor_id=r.anchor_id,t.expected_value=r.expected_value,e.push(t)}),n.branches&&(e=e.concat(r(n.branches)))});return e}(r.branches);A()(e,function(e){var t={};t.hash=r.hash,t.hash_id_node=r.hash_id_node,t.hash_id_core=r.hash_id_core,t.hash_submitted_node_at=r.hash_submitted_node_at,t.hash_submitted_core_at=r.hash_submitted_core_at,t.branch=e.branch,t.uri=e.uri,t.type=e.type,t.anchor_id=e.anchor_id,t.expected_value=e.expected_value,n.push(t)})}),n}function jr(r){if(!P()(r))throw new Error("proofs arg must be an Array");if(u()(r))throw new Error("proofs arg must be a non-empty Array");return l()(r,function(r){if(_()(r)&&q()(r,"proof")&&o()(r.proof))return r.proof;if(_()(r)&&q()(r,"type")&&"Chainpoint"===r.type)return r;if(o()(r)&&(rr()(r)||er()(r)))return r;throw new Error("proofs arg Array has elements that are not Objects or Strings")})}function Pr(r,n,e){var t;if(n=n||[],e=e||function(){},!s()(e))throw new Error("callback arg must be a function");if(!P()(r))throw new Error("hashes arg must be an Array");if(u()(r))throw new Error("hashes arg must be a non-empty Array");if(r.length>250)throw new Error("hashes arg must be an Array with <= 250 elements");var o=C()(r,function(r){return _r(r)});if(!u()(o))throw new Error("hashes arg contains invalid hashes : ".concat(o.join(", ")));if(!P()(n))throw new Error("uris arg must be an Array of String URIs");if(n.length>5)throw new Error("uris arg must be an Array with <= 5 elements");if(u()(n))t=xr(3);else{n=k()(n);var i=C()(n,function(r){return wr(r)});if(!u()(i))throw new Error("uris arg contains invalid URIs : ".concat(i.join(", ")));t=Promise.resolve(n)}return new Promise(function(n,o){t.then(function(t){var i=l()(t,function(n){var e=gr()?mr:n,t=Object.assign({"Content-Type":"application/json",Accept:"application/json"},gr()?{"X-Node-Uri":n}:{});return{method:"POST",uri:e+"/hashes",body:{hashes:r},headers:t,timeout:1e4}});br(i,dr,{concurrency:25}).then(function(r){A()(t,function(n,e){r[e].meta.submitted_to=n});var o=function(r){if(!P()(r)&&!r.length)throw new Error("_mapSubmitHashesRespToProofHandles arg must be an Array");var n=[],e=[];return r[0]&&r[0].hashes&&A()(r[0].hashes,function(){e.push(pr())}),A()(r,function(r){A()(r.hashes,function(t,o){var i={};i.uri=r.meta.submitted_to,i.hash=t.hash,i.hashIdNode=t.hash_id_node,i.groupId=e[o],n.push(i)})}),n}(r);return n(o),e(null,o)},function(r){return o(r),e(r)})}).catch(function(r){throw console.error(r.message),r})})}function Sr(r,n,e){if(e=e||function(){},n=n||[],!s()(e))throw new Error("callback arg must be a function");if(!P()(r))throw new Error("paths arg must be an Array");if(u()(r))throw new Error("paths arg must be a non-empty Array");if(r.length>250)throw new Error("paths arg must be an Array with <= 250 elements");var t=C()(r,function(r){return lr.existsSync(r)&&lr.lstatSync(r).isFile()});if(!u()(t))throw new Error("paths arg contains invalid paths : ".concat(t.join(", ")));if(!P()(n))throw new Error("uris arg must be an Array of String URIs");if(n.length>5)throw new Error("uris arg must be an Array with <= 5 elements");return new Promise(function(){var t,o=(t=regeneratorRuntime.mark(function t(o,i){var u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u=[],t.prev=1,t.next=4,Promise.all(r.map(function(r){return Ar(r)}));case 4:u=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),i(t.t0),t.abrupt("return",e(t.t0));case 11:if(0!==(u=u.filter(function(r){return"EACCES"===r.error&&console.error("Insufficient permission to read file '".concat(r.path,"', skipping")),"EACCES"!==r.error})).length){t.next=15;break}return o([]),t.abrupt("return",e(null,[]));case 15:Pr(u.map(function(r){return r.hash}),n).then(function(r){return r=r.map(function(r){return r.path=u.find(function(n){return n.hash===r.hash}).path,r}),o(r),e(null,r)},function(r){return i(r),e(r)});case 16:case"end":return t.stop()}},t,this,[[1,7]])}),function(){var r=this,n=arguments;return new Promise(function(e,o){var i=t.apply(r,n);function u(r){or(i,e,o,u,a,"next",r)}function a(r){or(i,e,o,u,a,"throw",r)}u(void 0)})});return function(r,n){return o.apply(this,arguments)}}()).catch(function(r){throw console.error(r.message),r})}function Ar(r){return new Promise(function(n,e){var t=hr.createHash("sha256"),o=lr.createReadStream(r);o.on("data",function(r){return t.update(r)}),o.on("end",function(){var e=t.digest("hex");n({path:r,hash:e})}),o.on("error",function(t){"EACCES"===t.code&&n({path:r,hash:null,error:"EACCES"}),e(t)})})}function Or(r,n){if(n=n||function(){},!s()(n))throw new Error("callback arg must be a function");if(!P()(r))throw new Error("proofHandles arg must be an Array");if(u()(r))throw new Error("proofHandles arg must be a non-empty Array");if(!U()(r,function(r){return function(r){if(!u()(r)&&_()(r)&&q()(r,"uri")&&q()(r,"hashIdNode"))return!0}(r)}))throw new Error("proofHandles Array contains invalid Objects");if(r.length>250)throw new Error("proofHandles arg must be an Array with <= 250 elements");var e=C()(r,function(r){return wr(r.uri)});if(!u()(e))throw new Error("some proof handles contain invalid URI values : ".concat(l()(e,function(r){return r.uri}).join(", ")));var t=C()(r,function(r){return function(r){if(cr(r,1))return!0}(r.hashIdNode)});if(!u()(t))throw new Error("some proof handles contain invalid hashIdNode UUID values : ".concat(l()(t,function(r){return r.hashIdNode}).join(", ")));return new Promise(function(e,t){try{var o={};A()(r,function(r){u()(o[r.uri])&&(o[r.uri]=[]),o[r.uri].push(r.hashIdNode)});var i=l()(J()(o),function(r){var n=Object.assign({accept:"application/json","content-type":"application/json"},{hashids:o[r].join(",")},gr()?{"X-Node-Uri":r}:{});return{method:"GET",uri:(gr()?mr:r)+"/proofs",body:{},headers:n,timeout:1e4}});br(i,dr,{concurrency:25}).then(function(r){var o=M()(r),i=[];try{A()(o,function(r){r.anchors_complete=r.anchors_complete||[];var n=G()(r,function(r,n){return B()(n)});i.push(n)})}catch(r){return t(r),n(r)}return e(i),n(null,i)},function(r){return t(r),n(r)})}catch(r){return t(r),n(r)}})}function Ir(r,n,e){e=e||function(){};var t,i=Nr(r);if(u()(n))t=xr(1);else{if(!o()(n))throw new Error("uri arg must be a String");if(!wr(n))throw new Error("uri arg contains invalid Node URI : ".concat(n));t=Promise.resolve([n])}return new Promise(function(r,n){try{t.then(function(r){return g()(r)}).then(function(r){var n=l()(i,function(n){var e=sr.parse(n.uri);return n.uri=r+e.path,n});return z()(n,L.a)}).then(function(r){var n=[];A()(r,function(r){n.push(r.uri)});var e=k()(n);return[r,l()(e,function(r){var n=Object.assign({"Content-Type":"application/json",Accept:"application/json"},gr()?{"X-Node-Uri":sr.parse(r).protocol+"//"+sr.parse(r).host}:{});return{method:"GET",uri:gr()?mr+sr.parse(r).path:r,body:{},headers:n,timeout:1e4}})]}).then(function(r){var t=tr(r,2),o=t[0],i=t[1];return[o,br(i,dr,{concurrency:25}).then(function(r){var n=M()(r),e={};return A()(i,function(r,t){var o=r.uri.split("/"),i=o[o.length-2];e[i]=n[t]}),e}).catch(function(r){return n(r),e(r)})]}).then(function(t){var o=tr(t,2),i=o[0];o[1].then(function(n){if(u()(n))return Promise.reject(new Error("No hashes were found."));var t=[];return A()(i,function(r){var e=r.uri.split("/"),o=e[e.length-2];r.expected_value===n[o]?(r.verified=!0,r.verified_at=(new Date).toISOString().slice(0,19)+"Z"):(r.verified=!1,r.verified_at=null);var i=G()(r,function(r,n){return B()(n)});t.push(i)}),r(t),e(null,t)}).catch(function(r){return console.error(r.message),n(r),e(r)})}).catch(function(r){return console.error(r.message),n(r),e(r)})}catch(r){return n(r),e(r)}})}function Nr(r){return qr(Er(jr(r)))}function Cr(r){return function(r){var n=[];return A()(r,function(r){var e={};e.hash_id_node=r.hash_id_node,r.branches&&A()(r.branches,function(r){if(r.branches){var n=r.branches.find(function(r){return"btc_anchor_branch"===r.label});e.raw_btc_tx=n.rawTx;var t=n.anchors.find(function(r){return"btc"===r.type});e.expected_value=t.expected_value,e.anchor_id=t.anchor_id}}),n.push(e)}),n}(Er(jr(r)))}n.default={getCores:yr,getNodes:xr,submitHashes:Pr,submitFileHashes:Sr,getProofs:Or,verifyProofs:Ir,evaluateProofs:Nr,getProofTxs:Cr}},function(r,n){r.exports=require("dns")},function(r,n){r.exports=require("url")},function(r,n){r.exports=require("uuid-validate")},function(r,n){r.exports=require("chainpoint-parse")},function(r,n){r.exports=require("crypto")},function(r,n){r.exports=require("fs")},function(r,n){r.exports=require("uuid/v1")},function(r,n){r.exports=require("node-fetch")}])});