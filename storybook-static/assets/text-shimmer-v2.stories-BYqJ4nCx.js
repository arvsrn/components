import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,W as n,X as r,rt as i}from"./iframe-hOlr1WQH.js";import{n as a,t as o}from"./text-shimmer-v2-DZmN-72n.js";var s,c,l,u,d,f,p,m;e((()=>{n(),a(),s=r(`<span style="font-size:13px;font-weight:440;font-family:Inter, system-ui, sans-serif">`),c=r(`<div style="display:flex;flex-direction:column;gap:8px;font-size:13px;font-weight:440;font-family:Inter, system-ui, sans-serif">`),l=`### Overview
Animated shimmer effect for loading text placeholders.

### API
- Required: \`text\` string.
- Optional: \`as\`, \`active\`, \`offset\`, \`class\`.

### Behavior
- Uses a moving gradient sweep clipped to text.
- \`offset\` lets multiple shimmers run out-of-phase.

### Accessibility
- Uses \`aria-label\` with the full text.

### Theming
- Uses \`data-component="text-shimmer-v2"\` and CSS custom properties for timing and colors.
`,u={title:`UI V2/TextShimmer`,id:`components-text-shimmer-v2`,component:o,tags:[`autodocs`],parameters:{frameBackground:`#fff`,layout:`padded`,docs:{description:{component:l}}}},d={render:()=>(()=>{var e=s();return t(e,i(o,{text:`Loading...`,active:!0})),e})()},f={render:()=>(()=>{var e=s();return t(e,i(o,{text:`Static text`,active:!1})),e})()},p={render:()=>(()=>{var e=c();return t(e,i(o,{text:`First line`,active:!0,offset:0}),null),t(e,i(o,{text:`Second line`,active:!0,offset:5}),null),t(e,i(o,{text:`Third line`,active:!0,offset:10}),null),e})()},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <span style={{
    "font-size": "13px",
    "font-weight": "440",
    "font-family": "Inter, system-ui, sans-serif"
  }}>
      <TextShimmerV2 text="Loading..." active={true} />
    </span>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <span style={{
    "font-size": "13px",
    "font-weight": "440",
    "font-family": "Inter, system-ui, sans-serif"
  }}>
      <TextShimmerV2 text="Static text" active={false} />
    </span>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    "flex-direction": "column",
    gap: "8px",
    "font-size": "13px",
    "font-weight": "440",
    "font-family": "Inter, system-ui, sans-serif"
  }}>
      <TextShimmerV2 text="First line" active={true} offset={0} />
      <TextShimmerV2 text="Second line" active={true} offset={5} />
      <TextShimmerV2 text="Third line" active={true} offset={10} />
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Active`,`Inactive`,`WithOffset`]}))();export{d as Active,f as Inactive,p as WithOffset,m as __namedExportsOrder,u as default};