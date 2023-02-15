function D(){for(var e=0,r,t,o="";e<arguments.length;)(r=arguments[e++])&&(t=K(r))&&(o&&(o+=" "),o+=t);return o}function K(e){if(typeof e=="string")return e;for(var r,t="",o=0;o<e.length;o++)e[o]&&(r=K(e[o]))&&(t&&(t+=" "),t+=r);return t}function T(){return T=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},T.apply(this,arguments)}var N="-";function rr(e){var r=tr(e);function t(a){var l=a.split(N);return l[0]===""&&l.length!==1&&l.shift(),Q(l,r)||er(a)}function o(a){return e.conflictingClassGroups[a]||[]}return{getClassGroupId:t,getConflictingClassGroupIds:o}}function Q(e,r){var t;if(e.length===0)return r.classGroupId;var o=e[0],a=r.nextPart.get(o),l=a?Q(e.slice(1),a):void 0;if(l)return l;if(r.validators.length!==0){var i=e.join(N);return(t=r.validators.find(function(n){var c=n.validator;return c(i)}))==null?void 0:t.classGroupId}}var J=/^\[(.+)\]$/;function er(e){if(J.test(e)){var r=J.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function tr(e){var r=e.theme,t=e.prefix,o={nextPart:new Map,validators:[]},a=nr(Object.entries(e.classGroups),t);return a.forEach(function(l){var i=l[0],n=l[1];W(n,o,i,r)}),o}function W(e,r,t,o){e.forEach(function(a){if(typeof a=="string"){var l=a===""?r:X(r,a);l.classGroupId=t;return}if(typeof a=="function"){if(or(a)){W(a(o),r,t,o);return}r.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(function(i){var n=i[0],c=i[1];W(c,X(r,n),t,o)})})}function X(e,r){var t=e;return r.split(N).forEach(function(o){t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function or(e){return e.isThemeGetter}function nr(e,r){return r?e.map(function(t){var o=t[0],a=t[1],l=a.map(function(i){return typeof i=="string"?r+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(function(n){var c=n[0],d=n[1];return[r+c,d]})):i});return[o,l]}):e}function ar(e){if(e<1)return{get:function(){},set:function(){}};var r=0,t=new Map,o=new Map;function a(l,i){t.set(l,i),r++,r>e&&(r=0,o=t,t=new Map)}return{get:function(i){var n=t.get(i);if(n!==void 0)return n;if((n=o.get(i))!==void 0)return a(i,n),n},set:function(i,n){t.has(i)?t.set(i,n):a(i,n)}}}var Y="!";function ir(e){var r=e.separator||":";return function(o){for(var a=0,l=[],i=0,n=0;n<o.length;n++){var c=o[n];a===0&&c===r[0]&&(r.length===1||o.slice(n,n+r.length)===r)&&(l.push(o.slice(i,n)),i=n+r.length),c==="["?a++:c==="]"&&a--}var d=l.length===0?o:o.substring(i),f=d.startsWith(Y),b=f?d.substring(1):d;return{modifiers:l,hasImportantModifier:f,baseClassName:b}}}function lr(e){if(e.length<=1)return e;var r=[],t=[];return e.forEach(function(o){var a=o[0]==="[";a?(r.push.apply(r,t.sort().concat([o])),t=[]):t.push(o)}),r.push.apply(r,t.sort()),r}function sr(e){return T({cache:ar(e.cacheSize),splitModifiers:ir(e)},rr(e))}var cr=/\s+/;function dr(e,r){var t=r.splitModifiers,o=r.getClassGroupId,a=r.getConflictingClassGroupIds,l=new Set;return e.trim().split(cr).map(function(i){var n=t(i),c=n.modifiers,d=n.hasImportantModifier,f=n.baseClassName,b=o(f);if(!b)return{isTailwindClass:!1,originalClassName:i};var h=lr(c).join(":"),C=d?h+Y:h;return{isTailwindClass:!0,modifierId:C,classGroupId:b,originalClassName:i}}).reverse().filter(function(i){if(!i.isTailwindClass)return!0;var n=i.modifierId,c=i.classGroupId,d=n+c;return l.has(d)?!1:(l.add(d),a(c).forEach(function(f){return l.add(n+f)}),!0)}).reverse().map(function(i){return i.originalClassName}).join(" ")}function ur(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o,a,l,i=n;function n(d){var f=r[0],b=r.slice(1),h=b.reduce(function(C,m){return m(C)},f());return o=sr(h),a=o.cache.get,l=o.cache.set,i=c,c(d)}function c(d){var f=a(d);if(f)return f;var b=dr(d,o);return l(d,b),b}return function(){return i(D.apply(null,arguments))}}function s(e){var r=function(o){return o[e]||[]};return r.isThemeGetter=!0,r}var w=/^\[(.+)\]$/,pr=/^\d+\/\d+$/,fr=new Set(["px","full","screen"]),br=/^(\d+)?(xs|sm|md|lg|xl)$/,gr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/,vr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function g(e){return!Number.isNaN(Number(e))||fr.has(e)||pr.test(e)||I(e)}function I(e){var r,t=(r=w.exec(e))==null?void 0:r[1];return t?t.startsWith("length:")||gr.test(t):!1}function mr(e){var r,t=(r=w.exec(e))==null?void 0:r[1];return t?t.startsWith("size:"):!1}function hr(e){var r,t=(r=w.exec(e))==null?void 0:r[1];return t?t.startsWith("position:"):!1}function yr(e){var r,t=(r=w.exec(e))==null?void 0:r[1];return t?t.startsWith("url(")||t.startsWith("url:"):!1}function H(e){var r,t=(r=w.exec(e))==null?void 0:r[1];return t?!Number.isNaN(Number(t))||t.startsWith("number:"):!1}function p(e){var r,t=(r=w.exec(e))==null?void 0:r[1];return t?Number.isInteger(Number(t)):Number.isInteger(Number(e))}function u(e){return w.test(e)}function M(){return!0}function x(e){return br.test(e)}function xr(e){var r,t=(r=w.exec(e))==null?void 0:r[1];return t?vr.test(t):!1}function wr(){var e=s("colors"),r=s("spacing"),t=s("blur"),o=s("brightness"),a=s("borderColor"),l=s("borderRadius"),i=s("borderSpacing"),n=s("borderWidth"),c=s("contrast"),d=s("grayscale"),f=s("hueRotate"),b=s("invert"),h=s("gap"),C=s("gradientColorStops"),m=s("inset"),k=s("margin"),y=s("opacity"),z=s("padding"),O=s("saturate"),A=s("scale"),$=s("sepia"),L=s("skew"),P=s("space"),_=s("translate"),V=function(){return["auto","contain","none"]},j=function(){return["auto","hidden","clip","visible","scroll"]},B=function(){return["auto",r]},U=function(){return["",g]},R=function(){return["auto",p]},F=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},S=function(){return["solid","dashed","dotted","double","none"]},Z=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},E=function(){return["start","end","center","between","around","evenly"]},G=function(){return["","0",u]},q=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]};return{cacheSize:500,theme:{colors:[M],spacing:[g],blur:["none","",x,I],brightness:[p],borderColor:[e],borderRadius:["none","","full",x,I],borderSpacing:[r],borderWidth:U(),contrast:[p],grayscale:G(),hueRotate:[p],invert:G(),gap:[r],gradientColorStops:[e],inset:B(),margin:B(),opacity:[p],padding:[r],saturate:[p],scale:[p],sepia:G(),skew:[p,u],space:[r],translate:[r]},classGroups:{aspect:[{aspect:["auto","square","video",u]}],container:["container"],columns:[{columns:[x]}],"break-after":[{"break-after":q()}],"break-before":[{"break-before":q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(F(),[u])}],overflow:[{overflow:j()}],"overflow-x":[{"overflow-x":j()}],"overflow-y":[{"overflow-y":j()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:[p]}],basis:[{basis:[r]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",u]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",p]}],"grid-cols":[{"grid-cols":[M]}],"col-start-end":[{col:["auto",{span:[p]}]}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":[M]}],"row-start-end":[{row:["auto",{span:[p]}]}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",u]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",u]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:E()}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:[].concat(E(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(E(),["baseline","stretch"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[z]}],px:[{px:[z]}],py:[{py:[z]}],pt:[{pt:[z]}],pr:[{pr:[z]}],pb:[{pb:[z]}],pl:[{pl:[z]}],m:[{m:[k]}],mx:[{mx:[k]}],my:[{my:[k]}],mt:[{mt:[k]}],mr:[{mr:[k]}],mb:[{mb:[k]}],ml:[{ml:[k]}],"space-x":[{"space-x":[P]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[P]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",r]}],"min-w":[{"min-w":["min","max","fit",g]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[x]},x,I]}],h:[{h:[r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",g]}],"max-h":[{"max-h":[r,"min","max","fit"]}],"font-size":[{text:["base",x,I]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",H]}],"font-family":[{font:[M]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",I]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",g]}],"list-style-type":[{list:["none","disc","decimal",u]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[y]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(S(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",g]}],"underline-offset":[{"underline-offset":["auto",g]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[r]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap"]}],break:[{break:["normal","words","all","keep"]}],content:[{content:["none",u]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[y]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(F(),[hr])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",mr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},yr]}],"bg-color":[{bg:[e]}],"gradient-from":[{from:[C]}],"gradient-via":[{via:[C]}],"gradient-to":[{to:[C]}],rounded:[{rounded:[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[n]}],"border-w-x":[{"border-x":[n]}],"border-w-y":[{"border-y":[n]}],"border-w-t":[{"border-t":[n]}],"border-w-r":[{"border-r":[n]}],"border-w-b":[{"border-b":[n]}],"border-w-l":[{"border-l":[n]}],"border-opacity":[{"border-opacity":[y]}],"border-style":[{border:[].concat(S(),["hidden"])}],"divide-x":[{"divide-x":[n]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[n]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[y]}],"divide-style":[{divide:S()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:[""].concat(S())}],"outline-offset":[{"outline-offset":[g]}],"outline-w":[{outline:[g]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:U()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[y]}],"ring-offset-w":[{"ring-offset":[g]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",x,xr]}],"shadow-color":[{shadow:[M]}],opacity:[{opacity:[y]}],"mix-blend":[{"mix-blend":Z()}],"bg-blend":[{"bg-blend":Z()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",x,u]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[b]}],saturate:[{saturate:[O]}],sepia:[{sepia:[$]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[y]}],"backdrop-saturate":[{"backdrop-saturate":[O]}],"backdrop-sepia":[{"backdrop-sepia":[$]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",u]}],duration:[{duration:[p]}],ease:[{ease:["linear","in","out","in-out",u]}],delay:[{delay:[p]}],animate:[{animate:["none","spin","ping","pulse","bounce",u]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[A]}],"scale-x":[{"scale-x":[A]}],"scale-y":[{"scale-y":[A]}],rotate:[{rotate:[p,u]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[L]}],"skew-y":[{"skew-y":[L]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",u]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",u]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[r]}],"scroll-mx":[{"scroll-mx":[r]}],"scroll-my":[{"scroll-my":[r]}],"scroll-mt":[{"scroll-mt":[r]}],"scroll-mr":[{"scroll-mr":[r]}],"scroll-mb":[{"scroll-mb":[r]}],"scroll-ml":[{"scroll-ml":[r]}],"scroll-p":[{"scroll-p":[r]}],"scroll-px":[{"scroll-px":[r]}],"scroll-py":[{"scroll-py":[r]}],"scroll-pt":[{"scroll-pt":[r]}],"scroll-pr":[{"scroll-pr":[r]}],"scroll-pb":[{"scroll-pb":[r]}],"scroll-pl":[{"scroll-pl":[r]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",u]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[g,H]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-t","rounded-r","rounded-b","rounded-l","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]}}}var Cr=ur(wr);export{Cr as t};