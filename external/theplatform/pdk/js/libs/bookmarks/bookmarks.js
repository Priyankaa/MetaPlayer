function com_theplatform_community_bookmarks(){var N='',dc='\n-',ub='" for "gwt:onLoadErrorFn"',sb='" for "gwt:onPropertyErrorFn"',Sb='"<script src=\\"',gb='"><\/script>',X='#',cc=');',Wb='-\n',ec='-><\/scr',jc='.cache.js',Tb='.cache.js\\"><\/scr" + "ipt>"',Z='/',Jb='0B0ABD5AFBF4B9808EB89381641EE7D3',Kb='16C47F713D1322AB53666F177D97015E',Lb='20CD834E6F85C4CFC0D8435F6A204465',Mb='518CC5C3590FA26B019FD3B7F0429152',Nb='909D2FB098BE65163A7618912BFD4676',Pb=':',mb='::',Ub='<scr',fb='<script id="',pb='=',Y='?',Ob='A202435E4242E75358307F6A08AC1ECC',rb='Bad handler "',Gb='Cross-site hosted mode not yet implemented. See issue ',Qb='DOMContentLoaded',hb='SCRIPT',eb='__gwt_marker_bookmarks',ib='base',ab='baseUrl',R='begin',O='bookmarks',cb='bookmarks.js',lb='bookmarks::',Q='bootstrap',_='clear.cache.gif',ob='content',bc='document.write(',W='end',Zb='evtGroup: "loadExternalRefs", millis:(new Date()).getTime(),',_b='evtGroup: "moduleStartup", millis:(new Date()).getTime(),',Db='gecko',Eb='gecko1_8',S='gwt.codesvr=',T='gwt.hosted=',U='gwt.hybrid',tb='gwt:onLoadErrorFn',qb='gwt:onPropertyErrorFn',nb='gwt:property',hc='head',Hb='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',Cb='ie6',Bb='ie8',Ab='ie9',$='img',fc='ipt>',Vb='ipt><!-',Rb='loadExternalRefs',jb='meta',Yb='moduleName:"bookmarks", sessionId:window.__gwtStatsSessionId, subSystem:"startup",',ic='moduleRequested',V='moduleStartup',zb='msie',kb='name',wb='opera',yb='safari',bb='script',Ib='selectingPermutation',P='startup',gc='text/javascript',$b='type: "end"});',ac='type: "moduleRequested"});',db='undefined',Fb='unknown',vb='user.agent',xb='webkit',Xb='window.__gwtStatsEvent && window.__gwtStatsEvent({';var l=window,m=document,n=l.__gwtStatsEvent?function(a){return l.__gwtStatsEvent(a)}:null,o=l.__gwtStatsSessionId?l.__gwtStatsSessionId:null,p,q,r=N,s={},t=[],u=[],v=[],w=0,x,y;n&&n({moduleName:O,sessionId:o,subSystem:P,evtGroup:Q,millis:(new Date).getTime(),type:R});if(!l.__gwt_stylesLoaded){l.__gwt_stylesLoaded={}}if(!l.__gwt_scriptsLoaded){l.__gwt_scriptsLoaded={}}function z(){var b=false;try{var c=l.location.search;return (c.indexOf(S)!=-1||(c.indexOf(T)!=-1||l.external&&l.external.gwtOnLoad))&&c.indexOf(U)==-1}catch(a){}z=function(){return b};return b}
function A(){if(p&&q){p(x,O,r,w);n&&n({moduleName:O,sessionId:o,subSystem:P,evtGroup:V,millis:(new Date).getTime(),type:W})}}
function B(){function e(a){var b=a.lastIndexOf(X);if(b==-1){b=a.length}var c=a.indexOf(Y);if(c==-1){c=a.length}var d=a.lastIndexOf(Z,Math.min(c,b));return d>=0?a.substring(0,d+1):N}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=m.createElement($);b.src=a+_;a=e(b.src)}return a}
function g(){var a=D(ab);if(a!=null){return a}return N}
function h(){var a=m.getElementsByTagName(bb);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(cb)!=-1){return e(a[b].src)}}return N}
function i(){var a;if(typeof isBodyLoaded==db||!isBodyLoaded()){var b=eb;var c;m.write(fb+b+gb);c=m.getElementById(b);a=c&&c.previousSibling;while(a&&a.tagName!=hb){a=a.previousSibling}if(c){c.parentNode.removeChild(c)}if(a&&a.src){return e(a.src)}}return N}
function j(){var a=m.getElementsByTagName(ib);if(a.length>0){return a[a.length-1].href}return N}
var k=g();if(k==N){k=h()}if(k==N){k=i()}if(k==N){k=j()}if(k==N){k=e(m.location.href)}k=f(k);r=k;return k}
function C(){var b=document.getElementsByTagName(jb);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(kb),g;if(f){f=f.replace(lb,N);if(f.indexOf(mb)>=0){continue}if(f==nb){g=e.getAttribute(ob);if(g){var h,i=g.indexOf(pb);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=N}s[f]=h}}else if(f==qb){g=e.getAttribute(ob);if(g){try{y=eval(g)}catch(a){alert(rb+g+sb)}}}else if(f==tb){g=e.getAttribute(ob);if(g){try{x=eval(g)}catch(a){alert(rb+g+ub)}}}}}}
function D(a){var b=s[a];return b==null?null:b}
function E(a,b){var c=v;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function F(a){var b=u[a](),c=t[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(y){y(a,d,b)}throw null}
u[vb]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(function(){return b.indexOf(wb)!=-1}())return wb;if(function(){return b.indexOf(xb)!=-1}())return yb;if(function(){return b.indexOf(zb)!=-1&&m.documentMode>=9}())return Ab;if(function(){return b.indexOf(zb)!=-1&&m.documentMode>=8}())return Bb;if(function(){var a=/msie ([0-9]+)\.([0-9]+)/.exec(b);if(a&&a.length==3)return c(a)>=6000}())return Cb;if(function(){return b.indexOf(Db)!=-1}())return Eb;return Fb};t[vb]={gecko1_8:0,ie6:1,ie8:2,ie9:3,opera:4,safari:5};com_theplatform_community_bookmarks.onScriptLoad=function(a){com_theplatform_community_bookmarks.onScriptLoad=null;p=a;A()};if(z()){alert(Gb+Hb);return}C();B();n&&n({moduleName:O,sessionId:o,subSystem:P,evtGroup:Q,millis:(new Date).getTime(),type:Ib});var G;try{E([Eb],Jb);E([Cb],Kb);E([Bb],Lb);E([wb],Mb);E([yb],Nb);E([Ab],Ob);G=v[F(vb)];var H=G.indexOf(Pb);if(H!=-1){w=Number(G.substring(H+1));G=G.substring(0,H)}}catch(a){return}var I;function J(){if(!q){q=true;A();if(m.removeEventListener){m.removeEventListener(Qb,J,false)}if(I){clearInterval(I)}}}
if(m.addEventListener){m.addEventListener(Qb,function(){J()},false)}var I=setInterval(function(){if(/loaded|complete/.test(m.readyState)){J()}},50);n&&n({moduleName:O,sessionId:o,subSystem:P,evtGroup:Q,millis:(new Date).getTime(),type:W});n&&n({moduleName:O,sessionId:o,subSystem:P,evtGroup:Rb,millis:(new Date).getTime(),type:R});if(/loaded|complete|interactive/.test(document.readyState)===false){var K=Sb+r+G+Tb;m.write(Ub+Vb+Wb+Xb+Yb+Zb+$b+Xb+Yb+_b+ac+bc+K+cc+dc+ec+fc)}else{var L=document.createElement(bb);L.type=gc;var M=document.getElementsByTagName(hc)[0];if(!M)M=document.body;window.__gwtStatsEvent&&window.__gwtStatsEvent({moduleName:O,sessionId:window.__gwtStatsSessionId,subSystem:P,evtGroup:Rb,millis:(new Date).getTime(),type:W});window.__gwtStatsEvent&&window.__gwtStatsEvent({moduleName:O,sessionId:window.__gwtStatsSessionId,subSystem:P,evtGroup:V,millis:(new Date).getTime(),type:ic});L.src=r+G+jc;M.appendChild(L)}}
if(window['$pdk']===null||typeof window['$pdk']!=='object'&&typeof window['$pdk']!=='function'){window['$pdk']={}}if(typeof window['$pdk']['bookmarks']==='undefined'){(function(){var g='$pdk',f='OnReady',h='bookmarks';var e=function(){this.listeners={}};e.prototype.addEventListener=function(a,b){if(a===f&&this.isReady)b();if(this.listeners[a]===undefined){this.listeners[a]=[]}this.listeners[a].push(b)};e.prototype.removeEventListener=function(a,b){if(this.listeners[a]===undefined){return}var c=this.listeners[a];if(c!==undefined){for(var d=0;d<c.length;d++){if(c[d]===b){this.listeners[a].splice(d,1);return}}}};e.prototype.dispatchEvent=function(a,b){var c=this.listeners[a];if(c!==undefined){for(var d=0;d<c.length;d++){c[d].call(this,{type:a,data:b})}}};window[g][h]=new e}())}com_theplatform_community_bookmarks();