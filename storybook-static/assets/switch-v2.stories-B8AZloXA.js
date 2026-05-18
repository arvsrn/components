import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,K as n,W as r,X as i,_t as a,at as o,et as s,ft as c,lt as l,nt as u,pt as d,rt as f,st as ee,ut as te,yt as p}from"./iframe-hOlr1WQH.js";import{F as m,I as h,N as g,O as _,P as v,R as y,S as b,a as ne,i as re,n as ie,r as x,s as S,t as C,u as ae,v as w}from"./5WXHJDCZ-Boj9LFIf.js";import{n as T,t as E}from"./VI7QYH27-YZlT9LzQ.js";import{a as D,c as O,d as k,f as A,i as oe,l as se,n as ce,o as le,r as ue,s as de,t as fe,u as pe}from"./ZZYKR3VO-BEdxEa0K.js";import{n as j,r as M,t as N}from"./NGHEENNE-CoPZXQT9.js";function P(){let e=p(U);if(e===void 0)throw Error("[kobalte]: `useSwitchContext` must be used within a `Switch` component");return e}function F(e){let t=A(),n=P(),[r,i]=a(_({id:n.generateId(`control`)},e),[`onClick`,`onKeyDown`]);return f(x,d({as:`div`,onClick:e=>{S(e,r.onClick),n.toggle(),n.inputRef()?.focus()},onKeyDown:e=>{S(e,r.onKeyDown),e.key===ne.Space&&(n.toggle(),n.inputRef()?.focus())}},()=>t.dataset(),()=>n.dataset(),i))}function I(e){let t=P();return f(se,d(()=>t.dataset(),e))}function L(e){let t=P();return f(fe,d(()=>t.dataset(),e))}function R(e){let t=A(),n=P(),[r,i,o]=a(_({id:n.generateId(`input`)},e),[`ref`,`style`,`onChange`,`onFocus`,`onBlur`],N),{fieldProps:s}=j(i);return f(x,d({as:`input`,ref(e){var t=v(n.setInputRef,r.ref);typeof t==`function`&&t(e)},type:`checkbox`,role:`switch`,get id(){return s.id()},get name(){return t.name()},get value(){return n.value()},get checked(){return n.checked()},get required(){return t.isRequired()},get disabled(){return t.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return h({...g},r.style)},get"aria-checked"(){return n.checked()},get"aria-label"(){return s.ariaLabel()},get"aria-labelledby"(){return s.ariaLabelledBy()},get"aria-describedby"(){return s.ariaDescribedBy()},get"aria-invalid"(){return t.validationState()===`invalid`||void 0},get"aria-required"(){return t.isRequired()||void 0},get"aria-disabled"(){return t.isDisabled()||void 0},get"aria-readonly"(){return t.isReadOnly()||void 0},onChange:e=>{S(e,r.onChange),e.stopPropagation();let t=e.target;n.setIsChecked(t.checked),t.checked=n.checked()},onFocus:e=>{S(e,r.onFocus),n.setIsFocused(!0)},onBlur:e=>{S(e,r.onBlur),n.setIsFocused(!1)}},()=>t.dataset(),()=>n.dataset(),o))}function z(e){let t=P();return f(D,d(()=>t.dataset(),e))}function B(e){let t,[n,r,i]=a(_({value:`on`,id:`switch-${te()}`},e),[`ref`,`children`,`value`,`checked`,`defaultChecked`,`onChange`,`onPointerDown`],de),[o,s]=l(),[c,u]=l(!1),{formControlContext:p}=pe(r),m=E({isSelected:()=>n.checked,defaultIsSelected:()=>n.defaultChecked,onSelectedChange:e=>n.onChange?.(e),isDisabled:()=>p.isDisabled(),isReadOnly:()=>p.isReadOnly()});ue(()=>t,()=>m.setIsSelected(n.defaultChecked??!1));let h=e=>{S(e,n.onPointerDown),c()&&e.preventDefault()},g=ee(()=>({"data-checked":m.isSelected()?``:void 0})),b={value:()=>n.value,dataset:g,checked:()=>m.isSelected(),inputRef:o,generateId:ae(()=>y(r.id)),toggle:()=>m.toggle(),setIsChecked:e=>m.setIsSelected(e),setIsFocused:u,setInputRef:s};return f(O.Provider,{value:p,get children(){return f(U.Provider,{value:b,get children(){return f(x,d({as:`div`,ref(e){var r=v(e=>t=e,n.ref);typeof r==`function`&&r(e)},role:`group`,get id(){return y(r.id)},onPointerDown:h},()=>p.dataset(),g,i,{get children(){return f(me,{state:b,get children(){return n.children}})}}))}})}})}function me(e){return n(u(()=>{let t=e.children;return b(t)?t(e.state):t}))}function V(e){let t=A(),n=P();return f(x,d({as:`div`},()=>t.dataset(),()=>n.dataset(),_({id:n.generateId(`thumb`)},e)))}var H,U,W,he=e((()=>{r(),T(),M(),le(),oe(),ce(),k(),re(),ie(),w(),c(),m(),H={},C(H,{Control:()=>F,Description:()=>I,ErrorMessage:()=>L,Input:()=>R,Label:()=>z,Root:()=>B,Switch:()=>W,Thumb:()=>V,useSwitchContext:()=>P}),U=o(),W=Object.assign(B,{Control:F,Description:I,ErrorMessage:L,Input:R,Label:z,Thumb:V})})),ge=e((()=>{he()})),G=e((()=>{}));function K(e){let[t,n]=a(e,[`children`,`class`,`hideLabel`]);return f(W,d(n,{get class(){return t.class},"data-component":`switch`,get children(){return[f(W.Input,{"data-slot":`switch-input`}),f(s,{get when(){return t.children},get children(){return f(W.Label,{"data-slot":`switch-label`,get classList(){return{"sr-only":t.hideLabel}},get children(){return t.children}})}}),f(W.Control,{"data-slot":`switch-control`,get children(){return f(W.Thumb,{"data-slot":`switch-thumb`})}}),f(W.ErrorMessage,{"data-slot":`switch-error`})]}}))}var _e=e((()=>{r(),ge(),c(),G()})),q,J,Y,X,Z,Q,$;e((()=>{r(),_e(),q=i(`<div style=display:grid;gap:12px>`),J=`### Overview
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

`,Y={title:`UI V2/Switch`,id:`components-switch-v2`,component:K,tags:[`autodocs`],parameters:{docs:{description:{component:J}}},args:{defaultChecked:!0,children:`Enable notifications`}},X={},Z={render:()=>(()=>{var e=q();return t(e,f(K,{defaultChecked:!0,children:`Enabled`}),null),t(e,f(K,{children:`Disabled`}),null),t(e,f(K,{disabled:!0,children:`Disabled switch`}),null),e})()},Q={args:{children:`Hidden label`,hideLabel:!0,defaultChecked:!0}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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