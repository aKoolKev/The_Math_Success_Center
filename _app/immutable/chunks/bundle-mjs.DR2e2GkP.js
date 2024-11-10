import{z as N,A as de,ah as ue,q as pe,a0 as Q,ai as fe,aj as be}from"./runtime.BO3TkG6p.js";import{k as ge,l as he,m as me,n as ye,o as ve,p as xe,q as D}from"./disclose-version.CKMqF5cf.js";function er(e,r,t,o,a){var s;N&&de();var n=(s=r.$$slots)==null?void 0:s[t],i=!1;n===!0&&(n=r[t==="default"?"children":t],i=!0),n===void 0?a!==null&&a(e):n(e,i?()=>o:o)}function rr(e){const r={};e.children&&(r.default=!0);for(const t in e.$$slots)r[t]=!0;return r}function tr(e){if(N){var r=!1,t=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var o=e.value;U(e,"value",null),e.value=o}if(e.hasAttribute("checked")){var a=e.checked;U(e,"checked",null),e.checked=a}}};e.__on_r=t,ue(t),ge()}}function U(e,r,t,o){var a=e.__attributes??(e.__attributes={});N&&(a[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||a[r]!==(a[r]=t)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[fe]=t),t==null?e.removeAttribute(r):typeof t!="string"&&oe(e).includes(r)?e[r]=t:e.setAttribute(r,t))}function or(e,r,t,o,a=!1,n=!1,i=!1){var s=r||{},b=e.tagName==="OPTION";for(var h in r)h in t||(t[h]=null);var m=oe(e),x=e.__attributes??(e.__attributes={}),y=[];for(const c in t){let d=t[c];if(b&&c==="value"&&d==null){e.value=e.__value="",s[c]=d;continue}var _=s[c];if(d!==_){s[c]=d;var w=c[0]+c[1];if(w!=="$$"){if(w==="on"){const k={},C="$$"+c;let v=c.slice(2);var g=xe(v);if(he(v)&&(v=v.slice(0,-7),k.capture=!0),!g&&_){if(d!=null)continue;e.removeEventListener(v,s[C],k),s[C]=null}if(d!=null)if(g)e[`__${v}`]=d,me([v]);else{let I=function(j){s[c].call(this,j)};r?s[C]=D(v,e,I,k):y.push([c,d,()=>s[C]=D(v,e,I,k)])}}else if(c==="style"&&d!=null)e.style.cssText=d+"";else if(c==="autofocus")ye(e,!!d);else if(c==="__value"||c==="value"&&d!=null)e.value=e[c]=e.__value=d;else{var u=c;a||(u=ve(u)),d==null&&!n?(x[c]=null,e.removeAttribute(c)):m.includes(u)&&(n||typeof d!="string")?e[u]=d:typeof d!="function"&&(N&&(u==="src"||u==="href"||u==="srcset")||U(e,u,d))}c==="style"&&"__styles"in e&&(e.__styles={})}}}return r||pe(()=>{if(e.isConnected)for(const[c,d,k]of y)s[c]===d&&k()}),s}var ee=new Map;function oe(e){var r=ee.get(e.nodeName);if(r)return r;ee.set(e.nodeName,r=[]);for(var t,o=Q(e),a=Element.prototype;a!==o;){t=be(o);for(var n in t)t[n].set&&r.push(n);o=Q(o)}return r}function sr(e,r){var t=e.__className,o=se(r);N&&e.getAttribute("class")===o?e.__className=o:(t!==o||N&&e.getAttribute("class")!==o)&&(o===""?e.removeAttribute("class"):e.setAttribute("class",o),e.__className=o)}function nr(e,r){var t=e.__className,o=se(r);N&&e.className===o?e.__className=o:(t!==o||N&&e.className!==o)&&(r==null?e.removeAttribute("class"):e.className=o,e.__className=o)}function se(e){return e??""}const J="-",we=e=>{const r=ke(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:i=>{const s=i.split(J);return s[0]===""&&s.length!==1&&s.shift(),ne(s,r)||_e(i)},getConflictingClassGroupIds:(i,s)=>{const b=t[i]||[];return s&&o[i]?[...b,...o[i]]:b}}},ne=(e,r)=>{var i;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),a=o?ne(e.slice(1),o):void 0;if(a)return a;if(r.validators.length===0)return;const n=e.join(J);return(i=r.validators.find(({validator:s})=>s(n)))==null?void 0:i.classGroupId},re=/^\[(.+)\]$/,_e=e=>{if(re.test(e)){const r=re.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},ke=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return ze(Object.entries(e.classGroups),t).forEach(([n,i])=>{F(i,o,n,r)}),o},F=(e,r,t,o)=>{e.forEach(a=>{if(typeof a=="string"){const n=a===""?r:te(r,a);n.classGroupId=t;return}if(typeof a=="function"){if(Ce(a)){F(a(o),r,t,o);return}r.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([n,i])=>{F(i,te(r,n),t,o)})})},te=(e,r)=>{let t=e;return r.split(J).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},Ce=e=>e.isThemeGetter,ze=(e,r)=>r?e.map(([t,o])=>{const a=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,s])=>[r+i,s])):n);return[t,a]}):e,Ae=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const a=(n,i)=>{t.set(n,i),r++,r>e&&(r=0,o=t,t=new Map)};return{get(n){let i=t.get(n);if(i!==void 0)return i;if((i=o.get(n))!==void 0)return a(n,i),i},set(n,i){t.has(n)?t.set(n,i):a(n,i)}}},ae="!",Se=e=>{const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,a=r[0],n=r.length,i=s=>{const b=[];let h=0,m=0,x;for(let u=0;u<s.length;u++){let c=s[u];if(h===0){if(c===a&&(o||s.slice(u,u+n)===r)){b.push(s.slice(m,u)),m=u+n;continue}if(c==="/"){x=u;continue}}c==="["?h++:c==="]"&&h--}const y=b.length===0?s:s.substring(m),_=y.startsWith(ae),w=_?y.substring(1):y,g=x&&x>m?x-m:void 0;return{modifiers:b,hasImportantModifier:_,baseClassName:w,maybePostfixModifierPosition:g}};return t?s=>t({className:s,parseClassName:i}):i},Me=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r},Ne=e=>({cache:Ae(e.cacheSize),parseClassName:Se(e),...we(e)}),Ge=/\s+/,Re=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:a}=r,n=[],i=e.trim().split(Ge);let s="";for(let b=i.length-1;b>=0;b-=1){const h=i[b],{modifiers:m,hasImportantModifier:x,baseClassName:y,maybePostfixModifierPosition:_}=t(h);let w=!!_,g=o(w?y.substring(0,_):y);if(!g){if(!w){s=h+(s.length>0?" "+s:s);continue}if(g=o(y),!g){s=h+(s.length>0?" "+s:s);continue}w=!1}const u=Me(m).join(":"),c=x?u+ae:u,d=c+g;if(n.includes(d))continue;n.push(d);const k=a(g,w);for(let C=0;C<k.length;++C){const v=k[C];n.push(c+v)}s=h+(s.length>0?" "+s:s)}return s};function Ie(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=ie(r))&&(o&&(o+=" "),o+=t);return o}const ie=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=ie(e[o]))&&(t&&(t+=" "),t+=r);return t};function Pe(e,...r){let t,o,a,n=i;function i(b){const h=r.reduce((m,x)=>x(m),e());return t=Ne(h),o=t.cache.get,a=t.cache.set,n=s,s(b)}function s(b){const h=o(b);if(h)return h;const m=Re(b,t);return a(b,m),m}return function(){return n(Ie.apply(null,arguments))}}const p=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},le=/^\[(?:([a-z-]+):)?(.+)\]$/i,Te=/^\d+\/\d+$/,Ee=new Set(["px","full","screen"]),je=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Le=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,$e=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Oe=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,We=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,A=e=>G(e)||Ee.has(e)||Te.test(e),S=e=>R(e,"length",Xe),G=e=>!!e&&!Number.isNaN(Number(e)),q=e=>R(e,"number",G),T=e=>!!e&&Number.isInteger(Number(e)),Ve=e=>e.endsWith("%")&&G(e.slice(0,-1)),l=e=>le.test(e),M=e=>je.test(e),Be=new Set(["length","size","percentage"]),qe=e=>R(e,Be,ce),Ue=e=>R(e,"position",ce),Fe=new Set(["image","url"]),Je=e=>R(e,Fe,Ze),Ke=e=>R(e,"",Ye),E=()=>!0,R=(e,r,t)=>{const o=le.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1},Xe=e=>Le.test(e)&&!$e.test(e),ce=()=>!1,Ye=e=>Oe.test(e),Ze=e=>We.test(e),He=()=>{const e=p("colors"),r=p("spacing"),t=p("blur"),o=p("brightness"),a=p("borderColor"),n=p("borderRadius"),i=p("borderSpacing"),s=p("borderWidth"),b=p("contrast"),h=p("grayscale"),m=p("hueRotate"),x=p("invert"),y=p("gap"),_=p("gradientColorStops"),w=p("gradientColorStopPositions"),g=p("inset"),u=p("margin"),c=p("opacity"),d=p("padding"),k=p("saturate"),C=p("scale"),v=p("sepia"),I=p("skew"),j=p("space"),K=p("translate"),O=()=>["auto","contain","none"],W=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto",l,r],f=()=>[l,r],X=()=>["",A,S],L=()=>["auto",G,l],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],$=()=>["solid","dashed","dotted","double","none"],Z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],B=()=>["start","end","center","between","around","evenly","stretch"],P=()=>["","0",l],H=()=>["auto","avoid","all","avoid-page","page","left","right","column"],z=()=>[G,l];return{cacheSize:500,separator:":",theme:{colors:[E],spacing:[A,S],blur:["none","",M,l],brightness:z(),borderColor:[e],borderRadius:["none","","full",M,l],borderSpacing:f(),borderWidth:X(),contrast:z(),grayscale:P(),hueRotate:z(),invert:P(),gap:f(),gradientColorStops:[e],gradientColorStopPositions:[Ve,S],inset:V(),margin:V(),opacity:z(),padding:f(),saturate:z(),scale:z(),sepia:P(),skew:z(),space:f(),translate:f()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[M]}],"break-after":[{"break-after":H()}],"break-before":[{"break-before":H()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),l]}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",T,l]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:P()}],shrink:[{shrink:P()}],order:[{order:["first","last","none",T,l]}],"grid-cols":[{"grid-cols":[E]}],"col-start-end":[{col:["auto",{span:["full",T,l]},l]}],"col-start":[{"col-start":L()}],"col-end":[{"col-end":L()}],"grid-rows":[{"grid-rows":[E]}],"row-start-end":[{row:["auto",{span:[T,l]},l]}],"row-start":[{"row-start":L()}],"row-end":[{"row-end":L()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[y]}],"gap-x":[{"gap-x":[y]}],"gap-y":[{"gap-y":[y]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[d]}],px:[{px:[d]}],py:[{py:[d]}],ps:[{ps:[d]}],pe:[{pe:[d]}],pt:[{pt:[d]}],pr:[{pr:[d]}],pb:[{pb:[d]}],pl:[{pl:[d]}],m:[{m:[u]}],mx:[{mx:[u]}],my:[{my:[u]}],ms:[{ms:[u]}],me:[{me:[u]}],mt:[{mt:[u]}],mr:[{mr:[u]}],mb:[{mb:[u]}],ml:[{ml:[u]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",l,r]}],"min-w":[{"min-w":[l,r,"min","max","fit"]}],"max-w":[{"max-w":[l,r,"none","full","min","max","fit","prose",{screen:[M]},M]}],h:[{h:[l,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[l,r,"auto","min","max","fit"]}],"font-size":[{text:["base",M,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",q]}],"font-family":[{font:[E]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",G,q]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",A,l]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[c]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[c]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",A,S]}],"underline-offset":[{"underline-offset":["auto",A,l]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:f()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[c]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),Ue]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",qe]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Je]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[_]}],"gradient-via":[{via:[_]}],"gradient-to":[{to:[_]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[c]}],"border-style":[{border:[...$(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[c]}],"divide-style":[{divide:$()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-s":[{"border-s":[a]}],"border-color-e":[{"border-e":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...$()]}],"outline-offset":[{"outline-offset":[A,l]}],"outline-w":[{outline:[A,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[c]}],"ring-offset-w":[{"ring-offset":[A,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",M,Ke]}],"shadow-color":[{shadow:[E]}],opacity:[{opacity:[c]}],"mix-blend":[{"mix-blend":[...Z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Z()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[b]}],"drop-shadow":[{"drop-shadow":["","none",M,l]}],grayscale:[{grayscale:[h]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[x]}],saturate:[{saturate:[k]}],sepia:[{sepia:[v]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[b]}],"backdrop-grayscale":[{"backdrop-grayscale":[h]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[x]}],"backdrop-opacity":[{"backdrop-opacity":[c]}],"backdrop-saturate":[{"backdrop-saturate":[k]}],"backdrop-sepia":[{"backdrop-sepia":[v]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:z()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:z()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[C]}],"scale-x":[{"scale-x":[C]}],"scale-y":[{"scale-y":[C]}],rotate:[{rotate:[T,l]}],"translate-x":[{"translate-x":[K]}],"translate-y":[{"translate-y":[K]}],"skew-x":[{"skew-x":[I]}],"skew-y":[{"skew-y":[I]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":f()}],"scroll-mx":[{"scroll-mx":f()}],"scroll-my":[{"scroll-my":f()}],"scroll-ms":[{"scroll-ms":f()}],"scroll-me":[{"scroll-me":f()}],"scroll-mt":[{"scroll-mt":f()}],"scroll-mr":[{"scroll-mr":f()}],"scroll-mb":[{"scroll-mb":f()}],"scroll-ml":[{"scroll-ml":f()}],"scroll-p":[{"scroll-p":f()}],"scroll-px":[{"scroll-px":f()}],"scroll-py":[{"scroll-py":f()}],"scroll-ps":[{"scroll-ps":f()}],"scroll-pe":[{"scroll-pe":f()}],"scroll-pt":[{"scroll-pt":f()}],"scroll-pr":[{"scroll-pr":f()}],"scroll-pb":[{"scroll-pb":f()}],"scroll-pl":[{"scroll-pl":f()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[A,S,q]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},ar=Pe(He);export{er as a,or as b,U as c,sr as d,rr as e,tr as r,nr as s,ar as t};
