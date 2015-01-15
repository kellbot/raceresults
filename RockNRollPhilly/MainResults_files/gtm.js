// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 9
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){
var n=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b){var d=Array.prototype.slice.call(arguments,1);return function(){var b=d.slice();b.push.apply(b,arguments);return a.apply(this,b)}},ca=null;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var da=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,fa=function(a){if(null==a)return String(a);var b=da.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ga=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ha=function(a){if(!a||"object"!=fa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ga(a,"constructor")&&!ga(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}for(var d in a);return void 0===
d||ga(a,d)},ja=function(a,b){var d=b||("array"==fa(a)?[]:{}),c;for(c in a)if(ga(a,c)){var e=a[c];"array"==fa(e)?("array"!=fa(d[c])&&(d[c]=[]),d[c]=ja(e,d[c])):ha(e)?(ha(d[c])||(d[c]={}),d[c]=ja(e,d[c])):d[c]=e}return d};var ka=function(){},y=function(a){return"function"==typeof a},la=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ma=function(a){return"number"==fa(a)&&!isNaN(a)},na=function(a,b){if(Array.prototype.indexOf){var d=a.indexOf(b);return"number"==typeof d?d:-1}for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1},oa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},C=function(a){return Math.round(Number(a))||0},pa=function(a){var b=[];if(la(a))for(var d=0;d<a.length;d++)b.push(String(a[d]));
return b},D=function(){return new Date},qa=function(a,b){if(!ma(a)||!ma(b)||a>b)a=0,b=2147483647;return Math.round(Math.random()*(b-a)+a)},E=function(){this.prefix="gtm.";this.ga={}};E.prototype.set=function(a,b){this.ga[this.prefix+a]=b};E.prototype.get=function(a){return this.ga[this.prefix+a]};E.prototype.contains=function(a){return void 0!==this.get(a)};
var ra=function(a,b,d){try{return a["15"](a,b||ka,d||ka)}catch(c){}return!1},ua=function(a,b){function d(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var c=oa(b).split("&"),e=0;e<c.length;e++)if(c[e]){var f=c[e].indexOf("=");0>f?d(c[e],"1"):d(c[e].substring(0,f),c[e].substring(f+1))}},va=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},wa=function(a){for(var b=0;b<a.length;b++)a[b]()},xa=D().getTime(),ya=function(a,b,d){return a&&a.hasOwnProperty(b)?a[b]:d},za=function(a,
b,d){a.prototype["gtm_proxy_"+b]=a.prototype[b];a.prototype[b]=d};var F=window,H=document,Aa=navigator,J=function(a,b,d){var c=F[a];if(a&&/^[a-zA-Z_]\w*$/g.test(a)){var e="var "+a+";";if(n.execScript)n.execScript(e,"JavaScript");else if(n.eval)if(null==ca&&(n.eval("var _et_ = 1;"),"undefined"!=typeof n._et_?(delete n._et_,ca=!0):ca=!1),ca)n.eval(e);else{var f=n.document,g=f.createElement("script");g.type="text/javascript";g.defer=!1;g.appendChild(f.createTextNode(e));f.body.appendChild(g);f.body.removeChild(g)}else throw Error("goog.globalEval not available");}F[a]=
void 0===c||d?b:c;return F[a]},K=function(a,b,d,c){return(c||"http:"!=F.location.protocol?a:b)+d},Ba=function(a){var b=H.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)},Ca=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},M=function(a,b,d){var c=H.createElement("script");c.type="text/javascript";c.async=!0;c.src=a;Ca(c,b);d&&(c.onerror=d);Ba(c)},Da=function(a,b){var d=H.createElement("iframe");
d.height="0";d.width="0";d.style.display="none";d.style.visibility="hidden";Ba(d);Ca(d,b);void 0!==a&&(d.src=a);return d},l=function(a,b,d){var c=new Image(1,1);c.onload=function(){c.onload=null;b&&b()};c.onerror=function(){c.onerror=null;d&&d()};c.src=a},N=function(a,b,d,c){a.addEventListener?a.addEventListener(b,d,!!c):a.attachEvent&&a.attachEvent("on"+b,d)},P=function(a){F.setTimeout(a,0)},Ea=!1,Ga=[],Ha=function(a){if(!Ea){var b=H.createEventObject,d="complete"==H.readyState,c="interactive"==
H.readyState;if(!a||"readystatechange"!=a.type||d||!b&&c){Ea=!0;for(var e=0;e<Ga.length;e++)Ga[e]()}}},Ia=0,Ja=function(){if(!Ea&&140>Ia){Ia++;try{H.documentElement.doScroll("left"),Ha()}catch(a){F.setTimeout(Ja,50)}}},La=function(a){var b=H.getElementById(a);if(b&&Ka(b,"id")!=a)for(var d=1;d<document.all[a].length;d++)if(Ka(document.all[a][d],"id")==a)return document.all[a][d];return b},Ka=function(a,b){return a&&b&&a.attributes[b]?a.attributes[b].value:null},Ma=function(a){return a.target||a.srcElement||
{}},Na=function(a){var b=H.createElement("div");b.innerHTML="A<div>"+a+"</div>";for(var b=b.lastChild,d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},Oa=function(a,b){for(var d={},c=0;c<b.length;c++)d[b[c]]=!0;for(var e=a,c=0;e&&!d[String(e.tagName).toLowerCase()]&&100>c;c++)e=e.parentElement;e&&!d[String(e.tagName).toLowerCase()]&&(e=null);return e},Pa=!1,Qa=[],Ra=function(){if(!Pa){Pa=!0;for(var a=0;a<Qa.length;a++)Qa[a]()}},Sa=function(a){a=a||F;var b=a.location.href,d=b.indexOf("#");
return 0>d?"":b.substring(d+1)},Ta=function(a){window.console&&window.console.log&&window.console.log(a)};var Ua=new E,Va={},Xa={set:function(a,b){ja(Wa(a,b),Va)},get:function(a){return Q(a,2)},reset:function(){Ua=new E;Va={}}},Q=function(a,b){if(2==b){for(var d=Va,c=a.split("."),e=0;e<c.length;e++){if(void 0===d[c[e]])return;d=d[c[e]]}return d}return Ua.get(a)},Wa=function(a,b){for(var d={},c=d,e=a.split("."),f=0;f<e.length-1;f++)c=c[e[f]]={};c[e[e.length-1]]=b;return d};var Ya=new RegExp(/^(.*\.)?(google|youtube|blogger)(\.com?)?(\.[a-z]{2})?\.?$/),Za={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},$a={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},ab=function(a,b){for(var d=[],c=0;c<a.length;c++)d.push(a[c]),d.push.apply(d,b[a[c]]||[]);return d},cb=function(){var a=Q("gtm.whitelist");
var b=a&&ab(pa(a),Za),d=Q("gtm.blacklist")||Q("tagTypeBlacklist")||[];var c=d&&ab(pa(d),$a),e={};return function(f){var g=f&&f["15"];if(!g)return!0;if(void 0!==e[g.a])return e[g.a];var h=!0;if(a)e:{if(0>na(b,g.a))if(g.b&&0<g.b.length)for(var k=0;k<g.b.length;k++){if(0>na(b,g.b[k])){h=
!1;break e}}else{h=!1;break e}h=!0}var p=!1;if(d){var m;if(!(m=0<=na(c,g.a)))e:{for(var q=g.b||[],r=new E,u=0;u<c.length;u++)r.set(c[u],!0);for(u=0;u<q.length;u++)if(r.get(q[u])){m=!0;break e}m=!1}p=m}return e[g.a]=!h||p}};var eb=function(a){return db?H.querySelectorAll(a):null},fb;e:{var gb=/MSIE +([\d\.]+)/.exec(Aa.userAgent);if(gb&&gb[1]){var hb=H.documentMode;hb||(hb="CSS1Compat"==H.compatMode?parseInt(gb[1],10):5);if(!hb||8>=hb){fb=!1;break e}}fb=!!H.querySelectorAll}var db=fb;var ib=function(a,b,d,c,e){var f,g=(a.protocol.replace(":","")||F.location.protocol.replace(":","")).toLowerCase();switch(b){case "protocol":f=g;break;case "host":f=(a.hostname||F.location.hostname).split(":")[0].toLowerCase();if(d){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(1*(a.hostname?a.port:F.location.port)||("http"==g?80:"https"==g?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var k=f.split("/");0<=na(c||[],k[k.length-
1])&&(k[k.length-1]="");f=k.join("/");break;case "query":f=a.search.replace("?","");if(e)e:{for(var p=f.split("&"),m=0;m<p.length;m++){var q=p[m].split("=");if(decodeURIComponent(q[0]).replace("+"," ")==e){f=decodeURIComponent(q.slice(1).join("=")).replace("+"," ");break e}}f=void 0}break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},jb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},kb=function(a){var b=H.createElement("a");a&&
(b.href=a);return b};var _eu=function(a){var b=String(Q("gtm.elementUrl")||a[""]||""),d=kb(b);return b};_eu.a="eu";_eu.b=["google"];var lb=Math.random(),mb=null,nb=null;var _e=function(){return nb};_e.a="e";_e.b=["google"];var _v=function(a){var b=Q(a["20"].replace(/\\\./g,"."),a[""]);return void 0!==b?b:a[""]};_v.a="v";_v.b=["google"];var _f=function(a){var b=String(Q("gtm.referrer")||H.referrer);if(!b)return b;var d=kb(b);return b};_f.a="f";_f.b=["google"];var ob=function(a){var b=F.location,d=b.hash?b.href.replace(b.hash,""):b.href,c;if(c=a[""]?a[""]:Q("gtm.url"))d=String(c),b=kb(d);var e,f,g;
a["6"]&&(d=ib(b,a["6"],e,f,g));return d},_u=ob;_u.a="u";_u.b=["google"];var _eq=function(a){return String(a["4"])==String(a["5"])};_eq.a="eq";_eq.b=["google"];var _re=function(a){return(new RegExp(a["5"],a[""]?"i":void 0)).test(a["4"])};_re.a="re";_re.b=["google"];var ub=ka,vb=[],wb=!1,R=function(a){return F["dataLayer"].push(a)},xb=function(a){var b=!1;return function(){!b&&y(a)&&P(a);b=!0}},Db=function(){for(var a=!1;!wb&&0<vb.length;){wb=!0;var b=vb.shift();if(y(b))try{b.call(Xa)}catch(d){}else if(la(b))e:{var c=b;if("string"==fa(c[0])){for(var e=c[0].split("."),f=e.pop(),g=c.slice(1),h=Va,k=0;k<e.length;k++){if(void 0===h[e[k]])break e;h=h[e[k]]}try{h[f].apply(h,g)}catch(p){}}}else{var m=b,q=void 0;for(q in m)if(m.hasOwnProperty(q)){var r=q,u=m[q];
Ua.set(r,u);ja(Wa(r,u),Va)}var v=!1,w=m.event;if(w){nb=w;var z=xb(m.eventCallback),O=m.eventTimeout;O&&F.setTimeout(z,Number(O));v=ub(w,z,m.eventReporter)}if(!mb&&(mb=m["gtm.start"])){}nb=null;a=v||a}var I=b,Z=Va;Cb();wb=!1}return!a};var Eb,Fb=/(Firefox\D28\D)/g.test(Aa.userAgent),Gb={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},Hb={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},Nb=function(a,b){return function(d){d=d||F.event;var c=Ma(d),e=!1;if(3!==d.which||"LINK_CLICK"!=a){"LINK_CLICK"==a&&(c=Oa(c,["a","area"]),e=!c||!c.href||Ib(c.href)||2===d.which||null==d.which&&4==d.button||d.ctrlKey||d.shiftKey||d.altKey||!0===d.metaKey);var f="FORM_SUBMIT"==a?Hb:Gb;if(d.defaultPrevented||!1===d.returnValue||d.T&&d.T()){if(c){var g={simulateDefault:!1},
h=Jb(f);h&&Kb(a,c,g,f.wt,h)}}else{if(c){var g={},k=!0;(k=Kb(a,c,g,f.wt,""))||(Lb(g.eventReport,f)?b=!0:e=!0);e=e||k||"LINK_CLICK"==a&&Fb;g.simulateDefault=!k&&b&&!e;g.simulateDefault&&(e=Mb(c,g)||e,!e&&d.preventDefault&&d.preventDefault());d.returnValue=k||!b||e;return d.returnValue}return!0}}}},Kb=function(a,b,d,c,e){var f=c||2E3,g={"gtm.element":b,"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||Ka(b,"id")||"","gtm.elementTarget":b.formTarget||b.target||""};switch(a){case "LINK_CLICK":g["gtm.triggers"]=
e||"";g.event="gtm.linkClick";g["gtm.elementUrl"]=b.href;g.eventTimeout=f;g.eventCallback=Ob(b,d);g.eventReporter=function(a){d.eventReport=a};break;case "FORM_SUBMIT":g["gtm.triggers"]=e||"";g.event="gtm.formSubmit";g["gtm.elementUrl"]=Pb(b);g.eventTimeout=f;g.eventCallback=Qb(b,d);g.eventReporter=function(a){d.eventReport=a};break;case "CLICK":g.event="gtm.click";g["gtm.elementUrl"]=b.formAction||b.action||b.href||b.src||b.code||b.codebase||"";break;default:return!0}return R(g)},Pb=function(a){var b=
a.action;b&&b.tagName&&(b=a.cloneNode(!1).action);return b},Rb=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "area":case "form":b="_self"}return b},Mb=function(a,b){var d=!1,c=/(iPad|iPhone|iPod)/g.test(Aa.userAgent),e=Rb(a).toLowerCase();switch(e){case "":case "_self":case "_parent":case "_top":var f;f=(e||"_self").substring(1);b.targetWindow=F.frames&&F.frames[f]||F[f];break;case "_blank":c?(b.simulateDefault=!1,d=!0):(b.targetWindowName="gtm_autoEvent_"+
D().getTime(),b.targetWindow=F.open("",b.targetWindowName));break;default:c&&!F.frames[e]?(b.simulateDefault=!1,d=!0):(F.frames[e]||(b.targetWindowName=e),b.targetWindow=F.frames[e]||F.open("",e))}return d},Ob=function(a,b,d){return function(){b.simulateDefault&&(b.targetWindow?b.targetWindow.location.href=a.href:(d=d||D().getTime(),500>D().getTime()-d&&F.setTimeout(Ob(a,b,d),25)))}},Qb=function(a,b,d){return function(){if(b.simulateDefault)if(b.targetWindow){var c;b.targetWindowName&&(c=a.target,
a.target=b.targetWindowName);H.gtmSubmitFormNow=!0;Sb(a).call(a);b.targetWindowName&&(a.target=c)}else d=d||D().getTime(),500>D().getTime()-d&&F.setTimeout(Qb(a,b,d),25)}},Jb=function(a){for(var b=["wnc","nwnc"],d=[],c=0;c<b.length;c++){var e=a[b[c]],f;for(f in e)e.hasOwnProperty(f)&&e[f]&&d.push(f)}return d.join(",")},Tb=function(a,b,d,c,e){var f=e;if(!f||"0"==f){if(a.l)return;a.l=!0;f="0"}var g=a.wt;b&&(!g||g>c)&&(a.wt=c);a[b?d?"wc":"wnc":d?"nwc":"nwnc"][f]=!0},Lb=function(a,b){if(b.wnc["0"]||b.wc["0"])return!0;
for(var d=0;d<Ub.length;d++)if(a.passingRules[d]){var c=Ub[d],e=Vb[d],f=e&&e[0]&&e[0][0]||e[1]&&e[1][0];if(f&&"0"!=f&&(b.wc[f]||b.wnc[f]))for(var g=c[1],h=0;h<g.length;h++)if(a.resolvedTags[g[h]])return!0}return!1},Wb=function(a,b,d,c,e){var f,g,h=!1;switch(a){case "CLICK":if(H.gtmHasClickListenerTag)return;H.gtmHasClickListenerTag=!0;f="click";g=function(a){var b=Ma(a);b&&Kb("CLICK",b,{},c)};h=!0;break;case "LINK_CLICK":b&&!Eb&&(Eb=jb(H.location));Tb(Gb,b||!1,d||!1,c,e);if(H.gtmHasLinkClickListenerTag)return;
H.gtmHasLinkClickListenerTag=!0;f="click";g=Nb(a,b||!1);break;case "FORM_SUBMIT":Tb(Hb,b||!1,d||!1,c,e);if(H.gtmHasFormSubmitListenerTag)return;H.gtmHasFormSubmitListenerTag=!0;f="submit";g=Nb(a,b||!1);break;default:return}N(H,f,g,h)},Ib=function(a){if(!Eb)return!0;var b=a.indexOf("#");if(0>b)return!1;if(0==b)return!0;var d=kb(a);return Eb==jb(d)},Sb=function(a){try{if(a.constructor&&a.constructor.prototype)return a.constructor.prototype.submit}catch(b){}if(a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;
H.gtmFormElementSubmitter||(H.gtmFormElementSubmitter=H.createElement("form"));return H.gtmFormElementSubmitter.submit.call?H.gtmFormElementSubmitter.submit:a.submit};var dc=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ec=function(a,b){return a<b?-1:a>b?1:0};var U;e:{var fc=n.navigator;if(fc){var gc=fc.userAgent;if(gc){U=gc;break e}}U=""};var hc=-1!=U.indexOf("Opera")||-1!=U.indexOf("OPR"),V=-1!=U.indexOf("Trident")||-1!=U.indexOf("MSIE"),ic=-1!=U.indexOf("Gecko")&&-1==U.toLowerCase().indexOf("webkit")&&!(-1!=U.indexOf("Trident")||-1!=U.indexOf("MSIE")),jc=-1!=U.toLowerCase().indexOf("webkit"),kc=function(){var a=n.document;return a?a.documentMode:void 0},lc=function(){var a="",b;if(hc&&n.opera){var d=n.opera.version;return"function"==aa(d)?d():d}ic?b=/rv\:([^\);]+)(\)|;)/:V?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:jc&&(b=/WebKit\/(\S+)/);
if(b)var c=b.exec(U),a=c?c[1]:"";if(V){var e=kc();if(e>parseFloat(a))return String(e)}return a}(),mc={},nc=function(a){var b;if(!(b=mc[a])){for(var d=0,c=dc(String(lc)).split("."),e=dc(String(a)).split("."),f=Math.max(c.length,e.length),g=0;0==d&&g<f;g++){var h=c[g]||"",k=e[g]||"",p=RegExp("(\\d*)(\\D*)","g"),m=RegExp("(\\d*)(\\D*)","g");do{var q=p.exec(h)||["","",""],r=m.exec(k)||["","",""];if(0==q[0].length&&0==r[0].length)break;d=ec(0==q[1].length?0:parseInt(q[1],10),0==r[1].length?0:parseInt(r[1],
10))||ec(0==q[2].length,0==r[2].length)||ec(q[2],r[2])}while(0==d)}b=mc[a]=0<=d}return b},oc=n.document,pc=oc&&V?kc()||("CSS1Compat"==oc.compatMode?parseInt(lc,10):5):void 0;var qc;if(!(qc=!ic&&!V)){var rc;if(rc=V)rc=V&&9<=pc;qc=rc}qc||ic&&nc("1.9.1");V&&nc("9");var sc=function(a){sc[" "](a);return a};sc[" "]=function(){};var xc=function(a,b){var d="";V&&!tc(a)&&(d='<script>document.domain="'+document.domain+'";\x3c/script>'+d);var c="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+d+"</head><body>"+b+"</body></html>";if(uc)a.srcdoc=c;else if(vc){var e=a.contentWindow.document;e.open("text/html","replace");e.write(c);e.close()}else wc(a,c)},uc=jc&&"srcdoc"in document.createElement("iframe"),vc=ic||jc||V&&nc(11),wc=function(a,b){V&&nc(7)&&!nc(10)&&6>yc()&&zc(b)&&(b=Ac(b));var d=function(){a.contentWindow.goog_content=
b;a.contentWindow.location.replace("javascript:window.goog_content")};V&&!tc(a)?Bc(a,d):d()},yc=function(){var a=navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);return a?parseFloat(a[1]):0},tc=function(a){try{var b;var d=a.contentWindow;try{var c;if(c=!!d&&null!=d.location.href)t:{try{sc(d.foo);c=!0;break t}catch(e){}c=!1}b=c}catch(f){b=!1}return b}catch(g){return!1}},Cc=0,Bc=function(a,b){var d="goog_rendering_callback"+Cc++;window[d]=b;a.src="javascript:'<script>(function() {document.domain = \""+
document.domain+'";var continuation = window.parent.'+d+";window.parent."+d+" = null;continuation();})()\x3c/script>'"},zc=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},Ac=function(a){for(var b=unescape(encodeURIComponent(a)),d=Math.floor(b.length/2),c=[],e=0;e<d;++e)c[e]=String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(c[d]=b.charAt(b.length-1));return c.join("")};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Dc,Ec=function(){};(function(){function a(a,g){a=a||"";g=g||{};for(var p in b)b.hasOwnProperty(p)&&(g.ha&&(g["fix_"+p]=!0),g.aa=g.aa||g["fix_"+p]);var m={Z:/^\x3c!--/,B:/^<\//,X:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,r:/^</,Y:/^[^<]/},q={Z:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},B:function(){var b=a.match(c);if(b)return{tagName:b[1],length:b[0].length}},X:function(){var b=q.r();if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+
b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,c:b.c,content:d[1],length:d[0].length+b.length}}}},r:function(){var b=a.match(d);if(b){var c={};b[2].replace(e,function(a,b,d,e,g){var u=d||e||g||f.test(b)&&b||null,h=document.createElement("div");h.innerHTML=u;c[b]=h.textContent||h.innerText||u});return{tagName:b[1],c:c,m:!!b[3],length:b[0].length}}},Y:function(){var b=a.indexOf("<");return{length:0<=b?b:a.length}}},r=function(){for(var b in m)if(m[b].test(a)){var c=
q[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};g.aa&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.ba=function(){return this[this.length-1]};d.P=function(a){var b=this.ba();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.Ia=function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&
"startTag"===a.type&&(a.m=b.test(a.tagName)||a.m);return a},f=r,q=function(){a="</"+d.pop().tagName+">"+a},p={r:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.P("TABLE")?(a="<TBODY>"+a,m()):g.Ya&&c.test(e)&&d.Ia(e)?d.P(e)?q():(a="</"+b.tagName+">"+a,m()):b.m||d.push(b)},B:function(a){d.ba()?g.Ja&&!d.P(a.tagName)?q():d.pop():g.Ja&&(f(),m())}},m=function(){var b=a,c=e(f());a=b;if(c&&p[c.type])p[c.type](c)};r=function(){m();return e(f())}}();return{append:function(b){a+=b},ia:r,Za:function(a){for(var b;(b=
r())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},$a:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.bb="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.ab=2===b.childNodes.length;return a}(),d=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,c=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.cb=function(a){var b={Z:function(a){return"<--"+a.content+"--\x3e"},B:function(a){return"</"+a.tagName+">"},X:function(a){return b.r(a)+a.content+b.B(a)},r:function(a){var b="<"+a.tagName,c;for(c in a.c)var d=a.c[c],b=b+(" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"');return b+(a.m?"/>":">")},Y:function(a){return a.text}};return b[a.type](a)};a.Xa=function(a){var b=
{},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var g in b)a.Ha=a.Ha||!b[g]&&g;Dc=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function d(a,b){var c,d=a&&a.length||0;for(c=0;c<d;c++)b.call(void 0,a[c],c)}function c(a,b){for(var c in a)a.hasOwnProperty(c)&&b.call(void 0,c,a[c])}function e(a,b){c(b,function(b,c){a[b]=c});return a}function f(a,d){a=a||{};c(d,function(c,d){b(a[c])||(a[c]=d)});return a}function g(a){try{return p.call(a)}catch(b){var c=
[];d(a,function(a){c.push(a)});return c}}var h={ja:a,ka:a,la:a,ma:a,na:a,oa:function(a){return a},done:a,error:function(a){throw a;},Aa:!1},k=this;if(!k.w){var p=Array.prototype.slice,m=function(){function a(c,d,e){var f="data-ps-"+d;if(2===arguments.length){var g=c.getAttribute(f);return b(g)?String(g):g}b(e)&&""!==e?c.setAttribute(f,e):c.removeAttribute(f)}function f(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,o:d.defaultView||d.parentWindow,i:d,v:Dc("",{ha:!0}),J:[b],L:"",M:d.createElement(b.nodeName),
n:[],f:[]});a(this.M,"proxyof",0)}f.prototype.write=function(){[].push.apply(this.f,arguments);for(var a;!this.u&&this.f.length;)a=this.f.shift(),"function"===typeof a?this.sa(a):this.N(a)};f.prototype.sa=function(a){var b={type:"function",value:a.name||a.toString()};this.K(b);a.call(this.o,this.i);this.V(b)};f.prototype.N=function(a){this.v.append(a);for(var b,c=[],d,e;(b=this.v.ia())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):
!1);)c.push(b);this.Fa(c);d&&this.ta(b);e&&this.ua(b)};f.prototype.Fa=function(a){var b=this.pa(a);b.U&&(b.va=this.L+b.U,this.L+=b.za,this.M.innerHTML=b.va,this.Da())};f.prototype.pa=function(a){var b=this.J.length,c=[],e=[],f=[];d(a,function(a){c.push(a.text);if(a.c){if(!/^noscript$/i.test(a.tagName)){var d=b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+d+" $1"));"ps-script"!==a.c.id&&"ps-style"!==a.c.id&&f.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+d+(a.m?" />":">"))}}else e.push(a.text),
f.push("endTag"===a.type?a.text:"")});return{I:a,Va:c.join(""),U:e.join(""),za:f.join("")}};f.prototype.Da=function(){for(var c,d=[this.M];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.J[a(c,"id")]=c,a(c,"id",null));var f=c.parentNode&&a(c.parentNode,"proxyof");f&&this.J[f].appendChild(c)}d.unshift.apply(d,g(c.childNodes))}};f.prototype.ta=function(a){var b=this.v.clear();b&&this.f.unshift(b);a.src=a.c.src||a.c.Pa;a.src&&this.n.length?this.u=a:this.K(a);var c=this;this.Ea(a,
function(){c.V(a)})};f.prototype.ua=function(a){var b=this.v.clear();b&&this.f.unshift(b);a.type=a.c.type||a.c.Qa||"text/css";this.Ga(a);b&&this.write()};f.prototype.Ga=function(a){var b=this.ra(a);this.xa(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:b.appendChild(this.i.createTextNode(a.content)))};f.prototype.ra=function(a){var b=this.i.createElement(a.tagName);b.setAttribute("type",a.type);c(a.c,function(a,c){b.setAttribute(a,c)});return b};f.prototype.xa=function(a){this.N('<span id="ps-style"/>');
var b=this.i.getElementById("ps-style");b.parentNode.replaceChild(a,b)};f.prototype.K=function(a){a.ya=this.f;this.f=[];this.n.unshift(a)};f.prototype.V=function(a){a!==this.n[0]?this.options.error({message:"Bad script nesting or script finished twice"}):(this.n.shift(),this.write.apply(this,a.ya),!this.n.length&&this.u&&(this.K(this.u),this.u=null))};f.prototype.Ea=function(a,b){var c=this.qa(a),d=this.Ca(c),e=this.options.ja;a.src&&(c.src=a.src,this.Ba(c,d?e:function(){b();e()}));try{this.wa(c),
a.src&&!d||b()}catch(f){this.options.error(f),b()}};f.prototype.qa=function(a){var b=this.i.createElement(a.tagName);c(a.c,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};f.prototype.wa=function(a){this.N('<span id="ps-script"/>');var b=this.i.getElementById("ps-script");b.parentNode.replaceChild(a,b)};f.prototype.Ba=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&
(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};f.prototype.Ca=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.Aa&&a.src&&a.hasAttribute("async"))};return f}();k.w=function(){function b(){var a=p.shift(),d;a&&(d=a[a.length-1],d.ka(),a.stream=c.apply(null,a),d.la())}function c(f,h,k){function p(a){a=k.oa(a);w.write(a);k.ma(a)}w=new m(f,k);w.id=d++;w.name=k.name||w.id;var r=f.ownerDocument,v={close:r.close,open:r.open,write:r.write,writeln:r.writeln};
e(r,{close:a,open:a,write:function(){return p(g(arguments).join(""))},writeln:function(){return p(g(arguments).join("")+"\n")}});var t=w.o.onerror||a;w.o.onerror=function(a,b,c){k.error({Ta:a+" - "+b+":"+c});t.apply(w.o,arguments)};w.write(h,function(){e(r,v);w.o.onerror=t;k.done();w=null;b()});return w}var d=0,p=[],w=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=f(e,h);c=/^#/.test(c)?k.document.getElementById(c.substr(1)):c.Sa?c[0]:c;var g=[c,d,e];c.w={cancel:function(){g.stream?
g.stream.abort():g[1]=a}};e.na(g);p.push(g);w||b();return c.w},{Wa:{},Ua:p,Ra:m})}();Ec=k.w}})();
var Fc=function(a,b,d,c){return function(){try{if(0<b.length){var e=b.shift(),f=Fc(a,b,d,c);if("SCRIPT"==String(e.nodeName).toUpperCase()&&"text/gtmscript"==e.type){var g=H.createElement("script");g.async=!1;g.type="text/javascript";g.id=e.id;g.text=e.text||e.textContent||e.innerHTML||"";e.charset&&(g.charset=e.charset);var h=e.getAttribute("data-gtmsrc");h&&(g.src=h,Ca(g,f));a.insertBefore(g,null);h||f()}else if(e.innerHTML&&0<=e.innerHTML.toLowerCase().indexOf("<script")){for(var k=[];e.firstChild;)k.push(e.removeChild(e.firstChild));
a.insertBefore(e,null);Fc(e,k,f,c)()}else a.insertBefore(e,null),f()}else d()}catch(p){P(c)}}};var Gc=function(a,b,d){var c=function(){var c={done:b},f=H.createElement("div");f.style.display="none";f.style.visibility="hidden";H.body.appendChild(f);try{Ec(f,a["16"],c)}catch(g){P(d)}};Ea?c():Ga.push(c)};var Hc=function(a,b,d){if(H.body){if(a[""])try{xc(Da(),"<script>var google_tag_manager=parent.google_tag_manager;\x3c/script>"+a["16"]),P(b)}catch(c){P(d)}else a["23"]?Gc(a,b,d):Fc(H.body,Na(a["16"]),b,d)()}else F.setTimeout(function(){Hc(a,b,d)},200)},_html=Hc;_html.a="html";_html.b=["customScripts"];var Kc,Lc;
var Vc=function(a){return function(){}},Wc=function(a){return function(){}};var nd=function(a){var b=F||n,d=b.onerror,c=!1;jc&&!nc("535.3")&&(c=!c);b.onerror=function(b,f,g,h,k){d&&d(b,f,g,h,k);a({message:b,fileName:f,Ma:g,eb:h,error:k});return c}};var pd=function(){var a=this;this.s=!1;this.ea=[];this.da=[];this.G=function(){a.s||wa(a.ea);a.s=!0};this.H=function(){a.s||wa(a.da);a.s=!0};this.g=ka},qd=function(a,b){a.ea.push(b)},rd=function(a,b){a.da.push(b)},sd=function(){this.j=[];this.W={};this.O=[];this.p=0};sd.prototype.addListener=function(a){this.O.push(a)};var td=function(a,b,d,c){if(!d.s){a.j[b]=d;void 0!==c&&(a.W[b]=c);a.p++;var e=function(){0<a.p&&a.p--;0<a.p||wa(a.O)};qd(d,e);rd(d,e)}};var ud=function(a,b){return function(){a["24"]=b.G;a["25"]=b.H;ra(a,b.G,b.H)}},vd=function(a){var b=new pd;qd(b,Vc(a));rd(b,Wc(a));b.g=ud(a,b);return b};
var yd=!1,_ua=function(a,b,d){function c(a){var b=[].slice.call(arguments,0);b[0]=q+b[0];F[p()].apply(window,b)}function e(b,d){void 0!==a[d]&&c("set",b,a[d])}function f(a,b){return void 0===b?b:a(b)}function g(a,b){if(b)for(var d in b)b.hasOwnProperty(d)&&c("set",a+d,b[d])}function h(){var b=function(a,b,d){if(!ha(b))return!1;for(var e=ya(Object(b),d,[]),f=0;e&&f<e.length;f++)c(a,e[f]);return!!e&&0<e.length},d;a["12"]?
d=Q("ecommerce"):a[""]&&(d=a[""].ecommerce);if(!ha(d))return;d=Object(d);var e=ya(a["14"],"currencyCode",d.currencyCode);void 0!==e&&c("set","&cu",e);b("ec:addImpression",d,"impressions");if(b("ec:addPromo",d[d.promoClick?"promoClick":"promoView"],"promotions")&&d.promoClick){c("ec:setAction","promo_click",d.promoClick.actionField);return}for(var f="detail checkout checkout_option click add remove purchase refund".split(" "),
g=0;g<f.length;g++){var h=d[f[g]];if(h){b("ec:addProduct",h,"products");c("ec:setAction",f[g],h.actionField);break}}}function k(a,b,c){var d=0;if(void 0!==a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&v[e]||!c&&void 0===v[e])){var f;if(w[e]){var g=a[e];f="false"==String(g).toLowerCase()?!1:!!g}else f=a[e];b[e]=f;d++}return d}J("GoogleAnalyticsObject",a["20"]||"ga",!1);var p=function(){return F.GoogleAnalyticsObject},m=J(p(),function(){var a=
F[p()];a.q=a.q||[];a.q.push(arguments)},!1);m.l=Number(D());var q="",r="";void 0==a[""]?(r="gtm"+xa++,q=r+"."):""!==a[""]&&(r=a[""],q=r+".");var u=!1;var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0},w={allowAnchor:!0,
allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useBeacon:!0};var z={name:r};
void 0!==
a["1"]&&(z.allowLinker=a["1"]);k(a["14"],z,!0);m("create",a["0"],z);c("set","&gtm","GTM-NK4426");void 0!==a["3"]&&c("set","anonymizeIp",a["3"]||void 0);

g("contentGroup",a["7"]);g("dimension",a["10"]);
g("metric",a["19"]);var O={};k(a["14"],O,!1)&&c("set",O);a["18"]&&c("require","linkid","linkid.js");
c("set","hitCallback",function(){if(y(a[""]))a[""]();else{var c=a["14"],d=c&&c.hitCallback;y(d)&&d()}b()});if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else{a["13"]&&(c("require","ec","ec.js"),h());if(a["11"]&&
!a[""]){var I="_dc_gtm_"+String(a["0"]).replace(/[^A-Za-z0-9-]/g,"");c("require","displayfeatures",void 0,{cookieName:I})}
c("send","pageview");}if(!yd){var ea=a["8"]?"u/analytics_debug.js":"analytics.js";yd=!0;M(K("https:","http:","//www.google-analytics.com/"+ea,
u),function(){F[p()].loaded||d()},d)}};_ua.a="ua";_ua.b=["google"];var zd,Ad;var ce=function(){this.h=[]};ce.prototype.set=function(a,b){this.h.push([a,b]);return this};ce.prototype.resolve=function(a,b){for(var d={},c=0;c<this.h.length;c++){var e=de(this.h[c][0],a,b),f=de(this.h[c][1],a,b);d[e]=f}return d};var ee=function(a){this.index=a};ee.prototype.resolve=function(a,b){var d=yb[this.index];if(d&&!b(d)){var c=d["17"];if(a){if(a.get(c))return;a.set(c,!0)}d=de(d,a,b);a&&a.set(c,!1);return ra(d)}};
for(var _M=function(a){return new ee(a)},ge=function(a){this.resolve=function(b,d){for(var c=[],e=0;e<a.length;e++)c.push(de(fe[a[e]],b,d));return c.join("")}},_T=function(a){return new ge(arguments)},ie=function(a){function b(b){for(var c=1;c<a.length;c++)if(a[c]==b)return!0;return!1}this.resolve=function(d,c){var e=de(a[0],d,c);if(a[0]instanceof
ee&&b(8)&&b(16)){var f="gtm"+xa++;he.set(f,e);return'google_tag_manager["GTM-NK4426"].macro(\''+f+"')"}for(var e=String(e),g=1;g<a.length;g++)e=X[a[g]](e);return e}},_E=function(a,b){return new ie(arguments)},Bb=function(a,b){return de(a,new E,b)},de=function(a,b,d){var c=a;if(a instanceof ee||a instanceof ce||a instanceof ge||a instanceof ie)return a.resolve(b,d);if(la(a))for(var c=[],e=0;e<a.length;e++)c[e]=de(a[e],b,d);else if(a&&"object"==typeof a){var c={},f;for(f in a)a.hasOwnProperty(f)&&(c[f]=
de(a[f],b,d))}return c},je=function(a,b){var d=b[a],c=d;if(d instanceof ee||d instanceof ie||d instanceof ge)c=d;else if(la(d))for(var c=[],e=0;e<d.length;e++)c[e]=je(d[e],b);else if("object"==typeof d){var c=new ce,f;for(f in d)d.hasOwnProperty(f)&&c.set(b[f],je(d[f],b))}return c},Y=function(a,b){for(var d=b?b.split(","):[],c=0;c<d.length;c++){var e=d[c]=d[c].split(":");0==a&&(e[1]=fe[e[1]]);if(1==a)for(var f=ke(e[0]),e=d[c]={},g=0;g<f.length;g++){var h=le[f[g]];e[h[0]]=h[1]}if(2==a)for(g=0;4>g;g++)e[g]=
ke(e[g]);3==a&&(d[c]=fe[e[0]]);if(4==a)for(g=0;2>g;g++)if(e[g]){e[g]=e[g].split(".");for(var k=0;k<e[g].length;k++)e[g][k]=fe[e[g][k]]}else e[g]=[];5==a&&(d[c]=e[0])}return d},ke=function(a){var b=[];if(!a)return b;for(var d=0,c=0;c<a.length&&d<me;d+=6,c++){var e=a&&a.charCodeAt(c)||65;if(65!=e){var f=0,f=65<e&&90>=e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&b.push(d);2&f&&b.push(d+1);4&f&&b.push(d+2);8&f&&b.push(d+3);16&f&&b.push(d+4);32&f&&b.push(d+5)}}return b},me=57,
ne=[_re,_u,'url',_M(0),'.*',_eq,_e,'_event',_M(1),'gtm.js','',_html,'CrazyEgg Heatmapping','\x3cscript type\x3d\x22text/gtmscript\x22\x3esetTimeout(function(){var a\x3ddocument.createElement(\x22script\x22),b\x3ddocument.getElementsByTagName(\x22script\x22)[0];a.src\x3ddocument.location.protocol+\x22//dnn506yrbagrg.cloudfront.net/pages/scripts/0020/2452.js?\x22+Math.floor((new Date).getTime()/36E5);a.async\x3d!0;a.type\x3d\x22text/javascript\x22;b.parentNode.insertBefore(a,b)},1);\x3c/script\x3e',1,'LinkSmart for Publishers','\x3cscript type\x3d\x22text/javascript\x22\x3evar _ls_pub_id\x3d\x222\x22;(function(b,c){var a\x3db.createElement(c),d\x3db.getElementsByTagName(c)[0];a.async\x3da.src\x3d\x22//cdn.linksmart.com/linksmart.js\x22;d.parentNode.insertBefore(a,d)})(document,\x22script\x22);\x3c/script\x3e',true,2,'CR_Chartbeat','\x3cscript type\x3d\x22text/gtmscript\x22\x3evar _sf_async_config\x3d{uid:2450,domain:\x22running.competitor.com\x22,useCanonical:!0};(function(){function b(){window._sf_endpt\x3d(new Date).getTime();var a\x3ddocument.createElement(\x22script\x22);a.setAttribute(\x22language\x22,\x22javascript\x22);a.setAttribute(\x22type\x22,\x22text/javascript\x22);a.setAttribute(\x22src\x22,\x22//static.chartbeat.com/js/chartbeat.js\x22);document.body.appendChild(a)}var c\x3dwindow.onload;window.onload\x3d\x22function\x22!\x3dtypeof window.onload?b:function(){c();b()}})();\x3c/script\x3e',3,_ua,'Google Analytics','UA-58139247-1',false,{},'\x26tid','\x26aip',{27:24,28:25},6,'url hostname','host','url path','path',_f,'referrer','event',_v,'element','gtm.element','element classes','gtm.elementClasses','element id','gtm.elementId','element target','gtm.elementTarget','element url','gtm.elementUrl'],oe=[],pe=0;pe<ne.length;pe++)oe[pe]=je(pe,ne);var fe=oe,le=Y(0,"15:0,15:1,17:2,4:3,5:4,15:5,15:6,17:7,4:8,5:9,15:11,17:12,16:13,21:14,17:15,16:16,23:17,21:18,17:19,16:20,21:21,15:22,17:23,0:24,13:25,12:25,3:25,7:26,10:26,19:26,22:25,14:26,8:25,9:25,2:29,18:25,1:25,11:17,21:30,17:31,6:32,17:33,6:34,15:35,17:36,17:37,15:38,17:39,20:40,17:41,20:42,17:43,20:44,17:45,20:46,17:47,20:48"),yb=Y(1,"G,AD,CAAAAAY,CAAAAAgB,AAAAAAAG,ABAAAAAI,AAAAAAAwB,AAAAAAAQG,AAAAAAAQY,AAAAAAAQgB,AAAAAAAQAG"),he=new E,qe=Y(1,"Z,gM"),W=Y(1,"AwD,AQ8,AQAH,AAA4__H"),Ub=Y(2,"D:P::"),Vb=Y(4,"10.10.10.10:");var Cb=function(){};var ve=function(){var a=[];return function(b,d){if(void 0===a[b]){var c=qe[b]&&Bb(qe[b],d);a[b]=[c&&ra(c),c]}return a[b]}},we=function(a,b){for(var d=b[0],c=0;c<d.length;c++)if(!a.k(d[c],a.d)[0])return!1;for(var e=b[2],c=0;c<e.length;c++)if(a.k(e[c],a.d)[0])return!1;return!0},xe=!1,ub=function(a,b,d){switch(a){case "gtm.js":if(xe)return!1;xe=!0;break;case "gtm.sync":if(Q("gtm.snippet")!=lb)return!1}Q("tagTypeBlacklist");for(var c={name:a,A:b||ka,C:ke(),D:ke(),k:ve(),d:cb()},e=[],f=0;f<Ub.length;f++)if(we(c,
Ub[f])){e[f]=!0;for(var g=c,h=Ub[f],k=h[1],p=0;p<k.length;p++)g.C[k[p]]=!0;for(var m=h[3],p=0;p<m.length;p++)g.D[m[p]]=!0}else e[f]=!1;var q=[];for(var r=0;r<me;r++)if(c.C[r]&&!c.D[r])if(c.d(W[r])){}else{q[r]=Bb(W[r],c.d);}c.F=
q;for(var u=new sd,v=0;v<me;v++)if(c.C[v]&&!c.D[v]&&!c.d(W[v])){var w=c.F[v],z=vd(w);td(u,v,z,w[""])}u.addListener(c.A);for(var O=[],A=0;A<u.j.length;A++){var L=u.j[A];if(L){var G=u.W[A];void 0!==G?G!=A&&u.j[G]&&qd(u.j[G],L.g):O.push(A)}}for(A=0;A<O.length;A++)u.j[O[A]].g();0<u.p||wa(u.O);d&&y(d)&&d({passingRules:e,resolvedTags:c.F});return 0<c.F.length};var ye={macro:function(a){if(he.contains(a))return he.get(a)}};ye.dataLayer=Xa;ye.Oa=function(){var a=F.google_tag_manager;a||(a=F.google_tag_manager={});a["GTM-NK4426"]||(a["GTM-NK4426"]=ye)};ye.Oa();
(function(){var a=J("dataLayer",[],!1),b=J("google_tag_manager",{},!1),b=b["dataLayer"]=b["dataLayer"]||{};Ga.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Qa.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var d=a.push;a.push=function(){var b=[].slice.call(arguments,0);d.apply(a,b);for(vb.push.apply(vb,b);300<this.length;)this.shift();return Db()};vb.push.apply(vb,a.slice(0));P(Db)})();
if("interactive"==H.readyState&&!H.createEventObject||"complete"==H.readyState)Ha();else{N(H,"DOMContentLoaded",Ha);N(H,"readystatechange",Ha);if(H.createEventObject&&H.documentElement.doScroll){var ze=!0;try{ze=!F.frameElement}catch(Ae){}ze&&Ja()}N(F,"load",Ha)}"complete"===H.readyState?Ra():N(F,"load",Ra);
(function(a){})("async");var _vs="res_ts:1420123065782000,srv_cl:83610477,ds:live,cv:9";
})()
