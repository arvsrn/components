import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,K as n,W as r,X as i,ct as a,dt as o,ft as ee,ht as s,it as c,mt as l,ot as u,rt as d,tt as f,xt as p,yt as m}from"./iframe-DZLDNB0z.js";import{F as h,I as g,N as _,O as v,P as y,S as b,a as te,i as x,n as S,r as C,s as w,t as T,u as E,v as D,z as O}from"./5WXHJDCZ-Dp5bSThz.js";import{n as k,t as ne}from"./VI7QYH27-BXa6T-jg.js";import{a as re,c as ie,d as ae,f as A,i as oe,l as se,n as ce,o as le,r as ue,s as de,t as fe,u as j}from"./ZZYKR3VO-B9y5S3Kb.js";import{n as M,r as N,t as P}from"./NGHEENNE-BySPiQ_x.js";function F(){let e=p(W);if(e===void 0)throw Error("[kobalte]: `useSwitchContext` must be used within a `Switch` component");return e}function I(e){let t=A(),n=F(),[r,i]=m(v({id:n.generateId(`control`)},e),[`onClick`,`onKeyDown`]);return c(C,s({as:`div`,onClick:e=>{w(e,r.onClick),n.toggle(),n.inputRef()?.focus()},onKeyDown:e=>{w(e,r.onKeyDown),e.key===te.Space&&(n.toggle(),n.inputRef()?.focus())}},()=>t.dataset(),()=>n.dataset(),i))}function L(e){let t=F();return c(se,s(()=>t.dataset(),e))}function R(e){let t=F();return c(fe,s(()=>t.dataset(),e))}function z(e){let t=A(),n=F(),[r,i,a]=m(v({id:n.generateId(`input`)},e),[`ref`,`style`,`onChange`,`onFocus`,`onBlur`],P),{fieldProps:o}=M(i);return c(C,s({as:`input`,ref(e){var t=y(n.setInputRef,r.ref);typeof t==`function`&&t(e)},type:`checkbox`,role:`switch`,get id(){return o.id()},get name(){return t.name()},get value(){return n.value()},get checked(){return n.checked()},get required(){return t.isRequired()},get disabled(){return t.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return g({..._},r.style)},get"aria-checked"(){return n.checked()},get"aria-label"(){return o.ariaLabel()},get"aria-labelledby"(){return o.ariaLabelledBy()},get"aria-describedby"(){return o.ariaDescribedBy()},get"aria-invalid"(){return t.validationState()===`invalid`||void 0},get"aria-required"(){return t.isRequired()||void 0},get"aria-disabled"(){return t.isDisabled()||void 0},get"aria-readonly"(){return t.isReadOnly()||void 0},onChange:e=>{w(e,r.onChange),e.stopPropagation();let t=e.target;n.setIsChecked(t.checked),t.checked=n.checked()},onFocus:e=>{w(e,r.onFocus),n.setIsFocused(!0)},onBlur:e=>{w(e,r.onBlur),n.setIsFocused(!1)}},()=>t.dataset(),()=>n.dataset(),a))}function B(e){let t=F();return c(re,s(()=>t.dataset(),e))}function V(e){let t,[n,r,i]=m(v({value:`on`,id:`switch-${ee()}`},e),[`ref`,`children`,`value`,`checked`,`defaultChecked`,`onChange`,`onPointerDown`],de),[l,u]=o(),[d,f]=o(!1),{formControlContext:p}=j(r),h=ne({isSelected:()=>n.checked,defaultIsSelected:()=>n.defaultChecked,onSelectedChange:e=>n.onChange?.(e),isDisabled:()=>p.isDisabled(),isReadOnly:()=>p.isReadOnly()});ue(()=>t,()=>h.setIsSelected(n.defaultChecked??!1));let g=e=>{w(e,n.onPointerDown),d()&&e.preventDefault()},_=a(()=>({"data-checked":h.isSelected()?``:void 0})),b={value:()=>n.value,dataset:_,checked:()=>h.isSelected(),inputRef:l,generateId:E(()=>O(r.id)),toggle:()=>h.toggle(),setIsChecked:e=>h.setIsSelected(e),setIsFocused:f,setInputRef:u};return c(ie.Provider,{value:p,get children(){return c(W.Provider,{value:b,get children(){return c(C,s({as:`div`,ref(e){var r=y(e=>t=e,n.ref);typeof r==`function`&&r(e)},role:`group`,get id(){return O(r.id)},onPointerDown:g},()=>p.dataset(),_,i,{get children(){return c(pe,{state:b,get children(){return n.children}})}}))}})}})}function pe(e){return n(d(()=>{let t=e.children;return b(t)?t(e.state):t}))}function H(e){let t=A(),n=F();return c(C,s({as:`div`},()=>t.dataset(),()=>n.dataset(),v({id:n.generateId(`thumb`)},e)))}var U,W,G,me=e((()=>{r(),k(),N(),le(),oe(),ce(),ae(),x(),S(),D(),l(),h(),U={},T(U,{Control:()=>I,Description:()=>L,ErrorMessage:()=>R,Input:()=>z,Label:()=>B,Root:()=>V,Switch:()=>G,Thumb:()=>H,useSwitchContext:()=>F}),W=u(),G=Object.assign(V,{Control:I,Description:L,ErrorMessage:R,Input:z,Label:B,Thumb:H})})),he=e((()=>{me()})),ge=e((()=>{}));function K(e){let[t,n]=m(e,[`children`,`class`,`hideLabel`]);return c(G,s(n,{get class(){return t.class},"data-component":`switch`,get children(){return[c(G.Input,{"data-slot":`switch-input`}),c(f,{get when(){return t.children},get children(){return c(G.Label,{"data-slot":`switch-label`,get classList(){return{"sr-only":t.hideLabel}},get children(){return t.children}})}}),c(G.Control,{"data-slot":`switch-control`,get children(){return c(G.Thumb,{"data-slot":`switch-thumb`})}}),c(G.ErrorMessage,{"data-slot":`switch-error`})]}}))}var _e=e((()=>{r(),he(),l(),ge()})),q,J,Y,X,Z,Q,$;e((()=>{r(),_e(),q=i(`<div style=display:grid;gap:12px>`),J=`### Overview
Toggle control for binary settings.

Use in settings panels or forms.

### API
- Uses Kobalte Switch props (\`checked\`, \`defaultChecked\`, \`onChange\`).
- Optional: \`hideLabel\`.
- Children render as the label.

### Variants and states
- Checked/unchecked, disabled states.

### Behavior
- Controlled or uncontrolled usage via Kobalte props.

### Accessibility
- TODO: confirm aria attributes from Kobalte.

### Theming/tokens
- Uses \`data-component="switch"\` and slot attributes.

`,Y={title:`UI V2/Switch`,id:`components-switch-v2`,component:K,tags:[`autodocs`],parameters:{docs:{description:{component:J}}},args:{defaultChecked:!0,children:`Enable notifications`}},X={},Z={render:()=>(()=>{var e=q();return t(e,c(K,{defaultChecked:!0,children:`Enabled`}),null),t(e,c(K,{children:`Disabled`}),null),t(e,c(K,{disabled:!0,children:`Disabled switch`}),null),e})()},Q={args:{children:`Hidden label`,hideLabel:!0,defaultChecked:!0}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "12px"
  }}>
      <Switch defaultChecked>Enabled</Switch>
      <Switch>Disabled</Switch>
      <Switch disabled>Disabled switch</Switch>
    </div>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Hidden label",
    hideLabel: true,
    defaultChecked: true
  }
}`,...Q.parameters?.docs?.source}}},$=[`Basic`,`States`,`HiddenLabel`]}))();export{X as Basic,Q as HiddenLabel,Z as States,$ as __namedExportsOrder,Y as default};