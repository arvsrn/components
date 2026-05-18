import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,W as n,X as r,it as i}from"./iframe-DZLDNB0z.js";import{n as a,t as o}from"./avatar-v2-l5xvp1uV.js";var s,c,l,u,d,f,p,m;e((()=>{n(),a(),s=r(`<div style=display:flex;gap:12px;align-items:center>`),c=`### Overview
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

`,l={title:`UI V2/Avatar`,id:`components-avatar`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:c}}},argTypes:{size:{control:`select`,options:[`small`,`normal`,`large`]},kind:{control:`select`,options:[`user`,`org`]}},args:{fallback:`WW`,size:`large`,kind:`user`}},u={},d={args:{src:`https://placehold.co/80x80/png`,fallback:`WW`}},f={render:()=>(()=>{var e=s();return t(e,i(o,{size:`small`,fallback:`W`}),null),t(e,i(o,{size:`normal`,fallback:`W`}),null),t(e,i(o,{size:`large`,fallback:`WW`}),null),e})()},p={render:()=>(()=>{var e=s();return t(e,i(o,{kind:`org`,size:`small`,fallback:`W`}),null),t(e,i(o,{kind:`org`,size:`normal`,fallback:`W`}),null),t(e,i(o,{kind:`org`,size:`large`,fallback:`WW`}),null),e})()},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/80x80/png",
    fallback: "WW"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    "align-items": "center"
  }}>
      <Avatar size="small" fallback="W" />
      <Avatar size="normal" fallback="W" />
      <Avatar size="large" fallback="WW" />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    "align-items": "center"
  }}>
      <Avatar kind="org" size="small" fallback="W" />
      <Avatar kind="org" size="normal" fallback="W" />
      <Avatar kind="org" size="large" fallback="WW" />
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Basic`,`WithImage`,`Sizes`,`OrgVariant`]}))();export{u as Basic,p as OrgVariant,f as Sizes,d as WithImage,m as __namedExportsOrder,l as default};