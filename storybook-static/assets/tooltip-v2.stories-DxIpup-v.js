import{n as e}from"./chunk-DnJy8xQt.js";import{$ as t,B as n,G as r,K as i,L as a,R as o,W as s,X as c,_t as l,at as u,et as d,ft as f,ht as p,lt as m,ot as h,pt as g,rt as _,st as ee,tt as te,ut as v,yt as ne}from"./iframe-hOlr1WQH.js";import{F as y,I as b,O as re,P as x,T as ie,_ as ae,h as oe,i as S,l as C,m as w,n as T,r as E,s as D,t as se,u as ce,v as le}from"./5WXHJDCZ-Boj9LFIf.js";import{n as ue,t as de}from"./E53DB7BS-Dm4eKjYq.js";import{n as O,t as fe}from"./JNCCF6MP-BWyX6TiD.js";import{n as pe,t as k}from"./dist-C81wiyPB.js";import{n as me,t as A}from"./3VFJM5NZ-M0AtHe1m.js";import{n as he,t as ge}from"./keybind-v2-C5NxGshz.js";import{n as j,r as _e,t as M}from"./2CTBMVJ4-BsM61kxe.js";function N(){let e=ne(R);if(e===void 0)throw Error("[kobalte]: `useTooltipContext` must be used within a `Tooltip` component");return e}function P(e){let t=N(),[n,r]=l(re({id:t.generateId(`content`)},e),[`ref`,`style`]);return h(()=>p(t.registerContentId(r.id))),_(d,{get when(){return t.contentPresent()},get children(){return _(M.Positioner,{get children(){return _(A,g({ref(e){var r=x(e=>{t.setContentRef(e)},n.ref);typeof r==`function`&&r(e)},role:`tooltip`,disableOutsidePointerEvents:!1,get style(){return b({"--kb-tooltip-content-transform-origin":`var(--kb-popper-content-transform-origin)`,position:`relative`},n.style)},onFocusOutside:e=>e.preventDefault(),onDismiss:()=>t.hideTooltip(!0)},()=>t.dataset(),r))}})}})}function F(e){let t=N();return _(d,{get when(){return t.contentPresent()},get children(){return _(n,e)}})}function ve(e,t,n){let r=e.split(`-`)[0],i=t.getBoundingClientRect(),a=n.getBoundingClientRect(),o=[],s=i.left+i.width/2,c=i.top+i.height/2;switch(r){case`top`:o.push([i.left,c]),o.push([a.left,a.bottom]),o.push([a.left,a.top]),o.push([a.right,a.top]),o.push([a.right,a.bottom]),o.push([i.right,c]);break;case`right`:o.push([s,i.top]),o.push([a.left,a.top]),o.push([a.right,a.top]),o.push([a.right,a.bottom]),o.push([a.left,a.bottom]),o.push([s,i.bottom]);break;case`bottom`:o.push([i.left,c]),o.push([a.left,a.top]),o.push([a.left,a.bottom]),o.push([a.right,a.bottom]),o.push([a.right,a.top]),o.push([i.right,c]);break;case`left`:o.push([s,i.top]),o.push([a.right,a.top]),o.push([a.left,a.top]),o.push([a.left,a.bottom]),o.push([a.right,a.bottom]),o.push([s,i.bottom]);break}return o}function I(e){let t=`tooltip-${v()}`,n=`${++be}`,r=re({id:t,openDelay:700,closeDelay:300,skipDelayDuration:300},e),[i,a]=l(r,[`id`,`open`,`defaultOpen`,`onOpenChange`,`disabled`,`triggerOnFocusOnly`,`openDelay`,`closeDelay`,`skipDelayDuration`,`ignoreSafeArea`,`forceMount`]),o,[s,c]=m(),[u,d]=m(),[f,te]=m(),[ne,y]=m(a.placement),b=de({open:()=>i.open,defaultOpen:()=>i.defaultOpen,onOpenChange:e=>i.onOpenChange?.(e)}),{present:x}=pe({show:()=>i.forceMount||b.isOpen(),element:()=>f()??null}),S=()=>{z[n]=E},T=()=>{for(let e in z)e!==n&&(z[e](!0),delete z[e])},E=(e=!1)=>{e||i.closeDelay&&i.closeDelay<=0?(window.clearTimeout(o),o=void 0,b.close()):o||=window.setTimeout(()=>{o=void 0,b.close()},i.closeDelay),window.clearTimeout(V),V=void 0,i.skipDelayDuration&&i.skipDelayDuration>=0&&(U=window.setTimeout(()=>{window.clearTimeout(U),U=void 0},i.skipDelayDuration)),B&&(window.clearTimeout(H),H=window.setTimeout(()=>{delete z[n],H=void 0,B=!1},i.closeDelay))},D=()=>{clearTimeout(o),o=void 0,T(),S(),B=!0,b.open(),window.clearTimeout(V),V=void 0,window.clearTimeout(H),H=void 0,window.clearTimeout(U),U=void 0},se=()=>{T(),S(),!b.isOpen()&&!V&&!B?V=window.setTimeout(()=>{V=void 0,B=!0,D()},i.openDelay):b.isOpen()||D()},le=(e=!1)=>{!e&&i.openDelay&&i.openDelay>0&&!o&&!U?se():D()},ue=()=>{window.clearTimeout(V),V=void 0,B=!1},O=()=>{window.clearTimeout(o),o=void 0},k=e=>C(u(),e)||C(f(),e),me=e=>{let t=u(),n=f();if(!(!t||!n))return ve(e,t,n)},A=e=>{let t=e.target;if(k(t)){O();return}if(!i.ignoreSafeArea){let t=me(ne());if(t&&ie(oe(e),t)){O();return}}o||E()};h(()=>{if(!b.isOpen())return;let e=w();e.addEventListener(`pointermove`,A,!0),p(()=>{e.removeEventListener(`pointermove`,A,!0)})}),h(()=>{let e=u();if(!e||!b.isOpen())return;let t=t=>{let n=t.target;C(n,e)&&E(!0)},n=ae();n.addEventListener(`scroll`,t,{capture:!0}),p(()=>{n.removeEventListener(`scroll`,t,{capture:!0})})}),p(()=>{clearTimeout(o),z[n]&&delete z[n]});let he={dataset:ee(()=>({"data-expanded":b.isOpen()?``:void 0,"data-closed":b.isOpen()?void 0:``})),isOpen:b.isOpen,isDisabled:()=>i.disabled??!1,triggerOnFocusOnly:()=>i.triggerOnFocusOnly??!1,contentId:s,contentPresent:x,openTooltip:le,hideTooltip:E,cancelOpening:ue,generateId:ce(()=>r.id),registerContentId:fe(c),isTargetOnTooltip:k,setTriggerRef:d,setContentRef:te};return _(R.Provider,{value:he,get children(){return _(M,g({anchorRef:u,contentRef:f,onCurrentPlacementChange:y},a))}})}function L(e){let t,n=N(),[r,a]=l(e,[`ref`,`onPointerEnter`,`onPointerLeave`,`onPointerDown`,`onClick`,`onFocus`,`onBlur`]),o=!1,s=!1,c=!1,u=()=>{o=!1},d=()=>{!n.isOpen()&&(s||c)&&n.openTooltip(c)},f=e=>{n.isOpen()&&!s&&!c&&n.hideTooltip(e)};return p(()=>{w(t).removeEventListener(`pointerup`,u)}),_(E,g({as:`button`,ref(e){var i=x(e=>{n.setTriggerRef(e),t=e},r.ref);typeof i==`function`&&i(e)},get"aria-describedby"(){return i(()=>!!n.isOpen())()?n.contentId():void 0},onPointerEnter:e=>{D(e,r.onPointerEnter),!(e.pointerType===`touch`||n.triggerOnFocusOnly()||n.isDisabled()||e.defaultPrevented)&&(s=!0,d())},onPointerLeave:e=>{D(e,r.onPointerLeave),e.pointerType!==`touch`&&(s=!1,c=!1,n.isOpen()?f():n.cancelOpening())},onPointerDown:e=>{D(e,r.onPointerDown),o=!0,w(t).addEventListener(`pointerup`,u,{once:!0})},onClick:e=>{D(e,r.onClick),s=!1,c=!1,f(!0)},onFocus:e=>{D(e,r.onFocus),!(n.isDisabled()||e.defaultPrevented||o)&&(c=!0,d())},onBlur:e=>{D(e,r.onBlur);let t=e.relatedTarget;n.isTargetOnTooltip(t)||(s=!1,c=!1,f(!0))}},()=>n.dataset(),a))}var ye,R,z,be,B,V,H,U,W,xe=e((()=>{s(),_e(),me(),ue(),O(),S(),T(),le(),f(),y(),k(),ye={},se(ye,{Arrow:()=>j,Content:()=>P,Portal:()=>F,Root:()=>I,Tooltip:()=>W,Trigger:()=>L,useTooltipContext:()=>N}),R=u(),z={},be=0,B=!1,W=Object.assign(I,{Arrow:j,Content:P,Portal:F,Trigger:L})})),Se=e((()=>{xe()})),Ce=e((()=>{}));function G(e){let n,[r,i]=a({open:!1,block:!1,expand:!1}),[o,s]=l(e,[`children`,`class`,`contentClass`,`contentStyle`,`inactive`,`forceOpen`,`ignoreSafeArea`,`value`]),c=()=>i(`open`,!1),u=()=>{let e=document.activeElement;return!n||!e?!1:n.contains(e)},d=(e=r.expand)=>{e||n?.matches(`:hover`)||u()||i(`block`,!1)},f=()=>{let e=!!n?.querySelector(`[aria-expanded="true"], [data-expanded]`);if(i(`expand`,e),e){i(`block`,!0),c();return}d(e)},m=()=>{i(`block`,!0),c()},ee=()=>{u()||c(),d()};h(()=>{if(!n)return;f();let e=new MutationObserver(f);e.observe(n,{subtree:!0,childList:!0,attributes:!0,attributeFilter:[`aria-expanded`,`data-expanded`]}),p(()=>e.disconnect())});let v=!1;return _(te,{get children(){return[_(t,{get when(){return o.inactive},get children(){return o.children}}),_(t,{when:!0,get children(){return _(W,g({gutter:4},s,{openDelay:0,closeDelay:0,get ignoreSafeArea(){return o.ignoreSafeArea??!0},get open(){return o.forceOpen||r.open},onOpenChange:e=>{if(!o.forceOpen&&!(r.block&&e)){if(v){v=!1;return}i(`open`,e)}},get children(){return[_(W.Trigger,{ref(e){var t=n;typeof t==`function`?t(e):n=e},as:`div`,"data-component":`tooltip-v2-trigger`,get class(){return o.class},onPointerDownCapture:m,onKeyDownCapture:e=>{e.key!==`Enter`&&e.key!==` `||m()},onPointerLeave:ee,onFocusOut:()=>requestAnimationFrame(()=>d()),get children(){return o.children}}),_(W.Portal,{get children(){return _(W.Content,{"data-component":`tooltip-v2`,get"data-placement"(){return e.placement},get"data-force-open"(){return o.forceOpen},get class(){return o.contentClass},get style(){return o.contentStyle},onPointerDownOutside:e=>{(n===e.target||e.target instanceof Node&&n?.contains(e.target))&&(v=!0),e.preventDefault()},get children(){return o.value}})}})]}}))}})]}})}var we=e((()=>{s(),Se(),f(),o(),Ce()})),K,q,Te,J,Ee,De,Oe,ke,Y,X,Z,Q,$;e((()=>{s(),we(),he(),K=c(`<span>Hover me`),q=c(`<div style=padding:80px;display:flex;justify-content:center>`),Te=c(`<span style=color:var(--text-text-faint)>/`),J=c(`<span>Title`),Ee=c(`<span style=color:var(--text-text-faint)>·`),De=c(`<span style=color:var(--text-text-faint)>Description`),Oe=`### Overview
Floating tooltip built on Kobalte's tooltip primitive with v2 styling.

### API
- \`value\`: Content rendered inside the floating tooltip.
- \`children\`: The trigger element that activates the tooltip on hover/focus.
- \`placement\`: Kobalte placement string (e.g. "top", "bottom", "left", "right").
- \`inactive\`: When true, renders only the trigger without tooltip behavior.
- \`forceOpen\`: Forces the tooltip to stay open.
- Inherits Kobalte Tooltip root props.
`,ke={title:`UI V2/Tooltip`,id:`components-tooltip-v2`,component:G,tags:[`autodocs`],parameters:{frameHeight:`300px`,frameBackground:`#fff`,docs:{description:{component:Oe}}}},Y={render:()=>(()=>{var e=q();return r(e,_(G,{value:`Tooltip Text`,get children(){return K()}})),e})()},X={render:()=>(()=>{var e=q();return r(e,_(G,{get value(){return[`Tooltip Text`,_(ge,{keys:[`⌘`,`⌘`],variant:`neutral`})]},get children(){return K()}})),e})()},Z={render:()=>(()=>{var e=q();return r(e,_(G,{get value(){return[`Components `,Te(),` Tooltip`]},get children(){return K()}})),e})()},Q={render:()=>(()=>{var e=q();return r(e,_(G,{get value(){return[J(),Ee(),De()]},get children(){return K()}})),e})()},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "80px",
    display: "flex",
    "justify-content": "center"
  }}>
      <TooltipV2 value="Tooltip Text">
        <span>Hover me</span>
      </TooltipV2>
    </div>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "80px",
    display: "flex",
    "justify-content": "center"
  }}>
      <TooltipV2 value={<>
            Tooltip Text
            <KeybindV2 keys={["⌘", "⌘"]} variant="neutral" />
          </>}>
        <span>Hover me</span>
      </TooltipV2>
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "80px",
    display: "flex",
    "justify-content": "center"
  }}>
      <TooltipV2 value={<>Components <span style={{
        color: "var(--text-text-faint)"
      }}>/</span> Tooltip</>}>
        <span>Hover me</span>
      </TooltipV2>
    </div>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "80px",
    display: "flex",
    "justify-content": "center"
  }}>
      <TooltipV2 value={<>
            <span>Title</span>
            <span style={{
        color: "var(--text-text-faint)"
      }}>·</span>
            <span style={{
        color: "var(--text-text-faint)"
      }}>Description</span>
          </>}>
        <span>Hover me</span>
      </TooltipV2>
    </div>
}`,...Q.parameters?.docs?.source}}},$=[`Simple`,`WithKeybind`,`Path`,`TitleDescription`]}))();export{Z as Path,Y as Simple,Q as TitleDescription,X as WithKeybind,$ as __namedExportsOrder,ke as default};