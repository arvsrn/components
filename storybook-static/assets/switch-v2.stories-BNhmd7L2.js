import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,J as n,Q as r,U as i,W as a,X as o,Z as s,at as ee,ct as c,et as l,ft as u,it as d,mt as f,nt as te,st as p}from"./iframe-Ck-CNuiI.js";import{D as m,E as h,S as g,T as _,_ as v,a as y,h as ne,i as b,k as x,n as re,r as S,s as C,t as w,u as T,w as E}from"./5WXHJDCZ-BYY-28qQ.js";import{a as D,i as O,n as ie,r as ae,t as oe}from"./NGHEENNE-DMloueap.js";import{a as se,c as ce,d as le,f as k,i as ue,l as de,n as fe,o as pe,r as A,s as j,t as M,u as N}from"./ZZYKR3VO-CmphqKtU.js";function P(){let e=f(U);if(e===void 0)throw Error("[kobalte]: `useSwitchContext` must be used within a `Switch` component");return e}function F(e){let t=k(),n=P(),[i,a]=u(g({id:n.generateId(`control`)},e),[`onClick`,`onKeyDown`]);return r(S,c({as:`div`,onClick:e=>{C(e,i.onClick),n.toggle(),n.inputRef()?.focus()},onKeyDown:e=>{C(e,i.onKeyDown),e.key===y.Space&&(n.toggle(),n.inputRef()?.focus())}},()=>t.dataset(),()=>n.dataset(),a))}function I(e){let t=P();return r(de,c(()=>t.dataset(),e))}function L(e){let t=P();return r(M,c(()=>t.dataset(),e))}function R(e){let t=k(),n=P(),[i,a,o]=u(g({id:n.generateId(`input`)},e),[`ref`,`style`,`onChange`,`onFocus`,`onBlur`],oe),{fieldProps:s}=ie(a);return r(S,c({as:`input`,ref(e){var t=_(n.setInputRef,i.ref);typeof t==`function`&&t(e)},type:`checkbox`,role:`switch`,get id(){return s.id()},get name(){return t.name()},get value(){return n.value()},get checked(){return n.checked()},get required(){return t.isRequired()},get disabled(){return t.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return m({...E},i.style)},get"aria-checked"(){return n.checked()},get"aria-label"(){return s.ariaLabel()},get"aria-labelledby"(){return s.ariaLabelledBy()},get"aria-describedby"(){return s.ariaDescribedBy()},get"aria-invalid"(){return t.validationState()===`invalid`||void 0},get"aria-required"(){return t.isRequired()||void 0},get"aria-disabled"(){return t.isDisabled()||void 0},get"aria-readonly"(){return t.isReadOnly()||void 0},onChange:e=>{C(e,i.onChange),e.stopPropagation();let t=e.target;n.setIsChecked(t.checked),t.checked=n.checked()},onFocus:e=>{C(e,i.onFocus),n.setIsFocused(!0)},onBlur:e=>{C(e,i.onBlur),n.setIsFocused(!1)}},()=>t.dataset(),()=>n.dataset(),o))}function z(e){let t=P();return r(se,c(()=>t.dataset(),e))}function B(e){let t,[n,i,a]=u(g({value:`on`,id:`switch-${ee()}`},e),[`ref`,`children`,`value`,`checked`,`defaultChecked`,`onChange`,`onPointerDown`],j),[o,s]=d(),[l,f]=d(!1),{formControlContext:p}=N(i),m=O({isSelected:()=>n.checked,defaultIsSelected:()=>n.defaultChecked,onSelectedChange:e=>n.onChange?.(e),isDisabled:()=>p.isDisabled(),isReadOnly:()=>p.isReadOnly()});A(()=>t,()=>m.setIsSelected(n.defaultChecked??!1));let h=e=>{C(e,n.onPointerDown),l()&&e.preventDefault()},v=te(()=>({"data-checked":m.isSelected()?``:void 0})),y={value:()=>n.value,dataset:v,checked:()=>m.isSelected(),inputRef:o,generateId:T(()=>x(i.id)),toggle:()=>m.toggle(),setIsChecked:e=>m.setIsSelected(e),setIsFocused:f,setInputRef:s};return r(ce.Provider,{value:p,get children(){return r(U.Provider,{value:y,get children(){return r(S,c({as:`div`,ref(e){var r=_(e=>t=e,n.ref);typeof r==`function`&&r(e)},role:`group`,get id(){return x(i.id)},onPointerDown:h},()=>p.dataset(),v,a,{get children(){return r(me,{state:y,get children(){return n.children}})}}))}})}})}function me(e){return t(s(()=>{let t=e.children;return v(t)?t(e.state):t}))}function V(e){let t=k(),n=P();return r(S,c({as:`div`},()=>t.dataset(),()=>n.dataset(),g({id:n.generateId(`thumb`)},e)))}var H,U,W,he=e((()=>{i(),D(),ae(),pe(),ue(),fe(),le(),b(),re(),ne(),p(),h(),H={},w(H,{Control:()=>F,Description:()=>I,ErrorMessage:()=>L,Input:()=>R,Label:()=>z,Root:()=>B,Switch:()=>W,Thumb:()=>V,useSwitchContext:()=>P}),U=l(),W=Object.assign(B,{Control:F,Description:I,ErrorMessage:L,Input:R,Label:z,Thumb:V})})),G=e((()=>{he()})),ge=e((()=>{}));function K(e){let[t,n]=u(e,[`children`,`class`,`hideLabel`]);return r(W,c(n,{get class(){return t.class},"data-component":`switch`,get children(){return[r(W.Input,{"data-slot":`switch-input`}),r(o,{get when(){return t.children},get children(){return r(W.Label,{"data-slot":`switch-label`,get classList(){return{"sr-only":t.hideLabel}},get children(){return t.children}})}}),r(W.Control,{"data-slot":`switch-control`,get children(){return r(W.Thumb,{"data-slot":`switch-thumb`})}}),r(W.ErrorMessage,{"data-slot":`switch-error`})]}}))}var _e=e((()=>{i(),G(),p(),ge()})),q,J,Y,X,Z,Q,$;e((()=>{i(),_e(),q=n(`<div style=display:grid;gap:12px>`),J=`### Overview
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

`,Y={title:`UI V2/Switch`,id:`components-switch-v2`,component:K,tags:[`autodocs`],parameters:{docs:{description:{component:J}}},args:{defaultChecked:!0,children:`Enable notifications`}},X={},Z={render:()=>(()=>{var e=q();return a(e,r(K,{defaultChecked:!0,children:`Enabled`}),null),a(e,r(K,{children:`Disabled`}),null),a(e,r(K,{disabled:!0,children:`Disabled switch`}),null),e})()},Q={args:{children:`Hidden label`,hideLabel:!0,defaultChecked:!0}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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