import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,J as n,W as r,X as i,_t as a,ft as o,pt as s,rt as c}from"./iframe-hOlr1WQH.js";var l=e((()=>{}));function u(e){let[r,i]=a(e,[`class`,`classList`,`children`]);return(()=>{var e=d();return n(e,s(i,{"data-component":`tag`,get classList(){return{...r.classList,[r.class??``]:!!r.class}}}),!1,!0),t(e,()=>r.children),e})()}var d,f=e((()=>{r(),o(),l(),d=i(`<span>`)})),p,m,h,g,_,v;e((()=>{r(),f(),p=i(`<div style=display:flex;gap:8px;align-items:center>`),m=`### Overview
Small label tag for metadata and status chips.

Use alongside headings or lists for quick metadata.

### API
- Accepts standard span props.
- Optional: \`data-high-contrast\` attribute for stronger border contrast.

### Variants and states
- Single size style.
- Optional high-contrast border style.

### Behavior
- Inline element with fixed 16px height and tabular numeric text.

### Accessibility
- Ensure text conveys meaning; avoid color-only distinction.

### Theming/tokens
- Uses \`data-component="tag"\`.

`,h={title:`UI V2/Badge`,id:`components-badge-v2`,component:u,tags:[`autodocs`],parameters:{docs:{description:{component:m}}},args:{children:`Label`}},g={},_={render:()=>(()=>{var e=p();return t(e,c(u,{children:`Label`}),null),t(e,c(u,{"data-high-contrast":!0,children:`Label`}),null),e})()},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    "align-items": "center"
  }}>
      <Tag>Label</Tag>
      <Tag data-high-contrast>Label</Tag>
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Basic`,`HighContrast`]}))();export{g as Basic,_ as HighContrast,v as __namedExportsOrder,h as default};