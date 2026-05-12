import{n as e}from"./chunk-DnJy8xQt.js";import{J as t,K as n,Q as r,U as i,W as a,X as o,ct as s,ft as c,q as l,rt as u,st as d}from"./iframe-Ck-CNuiI.js";var f=e((()=>{}));function p(e){return e?_?_.segment(e)[Symbol.iterator]().next().value?.segment??Array.from(e)[0]??``:Array.from(e)[0]??``:``}function m(e){let[t,i]=c(e,[`fallback`,`src`,`background`,`foreground`,`size`,`kind`,`class`,`classList`,`style`]),d=t.src;return(()=>{var e=h();return l(e,s(i,{"data-component":`avatar`,get"data-size"(){return t.size||`large`},get"data-kind"(){return t.kind||`user`},"data-has-image":d?``:void 0,get classList(){return{...t.classList,[t.class??``]:!!t.class}},get style(){return{...typeof t.style==`object`?t.style:{},...!d&&t.background?{"--avatar-bg":t.background}:{},...!d&&t.foreground?{"--avatar-fg":t.foreground}:{}}}}),!1,!0),a(e,r(o,{when:d,get fallback(){return p(t.fallback)},children:e=>(()=>{var t=g();return n(t,`draggable`,!1),u(()=>n(t,`src`,e())),t})()})),e})()}var h,g,_,v=e((()=>{i(),d(),f(),h=t(`<div>`),g=t(`<img data-slot=avatar-image>`),_=typeof Intl<`u`&&`Segmenter`in Intl?new Intl.Segmenter(void 0,{granularity:`grapheme`}):void 0})),y,b,x,S,C,w,T,E;e((()=>{i(),v(),y=t(`<div style=display:flex;gap:12px;align-items:center>`),b=`### Overview
Avatar matching OpenCode DS variants from Figma.

Use in user lists and headers.

### API
- Required: \`fallback\` string.
- Optional: \`src\`, \`background\`, \`foreground\`, \`size\`, \`kind\`.

### Variants and states
- Sizes: small (16), normal (20), large (28).
- Kind: user (circle), org (rounded-square).
- Image vs initials content state.

### Behavior
- Uses grapheme-aware fallback rendering.

### Accessibility
- TODO: provide alt text when using images; currently image is decorative.

### Theming/tokens
- Uses \`data-component="avatar"\` with size and image state attributes.

`,x={title:`UI V2/Avatar`,id:`components-avatar`,component:m,tags:[`autodocs`],parameters:{docs:{description:{component:b}}},argTypes:{size:{control:`select`,options:[`small`,`normal`,`large`]},kind:{control:`select`,options:[`user`,`org`]}},args:{fallback:`WW`,size:`large`,kind:`user`}},S={},C={args:{src:`https://placehold.co/80x80/png`,fallback:`WW`}},w={render:()=>(()=>{var e=y();return a(e,r(m,{size:`small`,fallback:`W`}),null),a(e,r(m,{size:`normal`,fallback:`W`}),null),a(e,r(m,{size:`large`,fallback:`WW`}),null),e})()},T={render:()=>(()=>{var e=y();return a(e,r(m,{kind:`org`,size:`small`,fallback:`W`}),null),a(e,r(m,{kind:`org`,size:`normal`,fallback:`W`}),null),a(e,r(m,{kind:`org`,size:`large`,fallback:`WW`}),null),e})()},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/80x80/png",
    fallback: "WW"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    "align-items": "center"
  }}>
      <Avatar size="small" fallback="W" />
      <Avatar size="normal" fallback="W" />
      <Avatar size="large" fallback="WW" />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    "align-items": "center"
  }}>
      <Avatar kind="org" size="small" fallback="W" />
      <Avatar kind="org" size="normal" fallback="W" />
      <Avatar kind="org" size="large" fallback="WW" />
    </div>
}`,...T.parameters?.docs?.source}}},E=[`Basic`,`WithImage`,`Sizes`,`OrgVariant`]}))();export{S as Basic,T as OrgVariant,w as Sizes,C as WithImage,E as __namedExportsOrder,x as default};