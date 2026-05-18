import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,W as n,X as r,it as i}from"./iframe-DZLDNB0z.js";import{n as a,t as o}from"./keybind-v2-BqFfCmvf.js";var s,c,l,u,d,f,p,m,h;e((()=>{n(),a(),s=r(`<div style=display:flex;gap:24px;align-items:center>`),c=r(`<div style=display:flex;flex-direction:column;gap:16px><div style=display:flex;gap:24px;align-items:center><span style=font-size:11px;color:#808080;width:50px>Neutral</span></div><div style=display:flex;gap:24px;align-items:center><span style=font-size:11px;color:#808080;width:50px>Ghost`),l=`### Overview
Inline keybind indicator that renders one or more keyboard keys in a compact row.

### API
- \`keys\`: Array of key labels to display (e.g. \`["⌘", "K"]\`).
- \`variant\`: "neutral" (gray background) | "ghost" (no background).
- Inherits native div attributes.

### Variants
- **Neutral** — each key sits on a \`#D4D4D4\` pill with darker text.
- **Ghost** — keys render without a background, lighter text color.
`,u={title:`UI V2/Keybind`,id:`components-keybind-v2`,component:o,tags:[`autodocs`],parameters:{frameHeight:`200px`,frameBackground:`#fff`,docs:{description:{component:l}}},args:{keys:[`⌘`],variant:`neutral`},argTypes:{keys:{control:`object`},variant:{control:`select`,options:[`neutral`,`ghost`]}}},d={},f={render:()=>(()=>{var e=s();return t(e,i(o,{keys:[`⌘`],variant:`neutral`}),null),t(e,i(o,{keys:[`⌘`],variant:`ghost`}),null),e})()},p={render:()=>(()=>{var e=s();return t(e,i(o,{keys:[`⌘`,`K`],variant:`neutral`}),null),t(e,i(o,{keys:[`⌘`,`K`],variant:`ghost`}),null),e})()},m={render:()=>(()=>{var e=c(),n=e.firstChild;n.firstChild;var r=n.nextSibling;return r.firstChild,t(n,i(o,{keys:[`⌘`],variant:`neutral`}),null),t(n,i(o,{keys:[`⌘`,`K`],variant:`neutral`}),null),t(n,i(o,{keys:[`⌘`,`⇧`,`P`],variant:`neutral`}),null),t(r,i(o,{keys:[`⌘`],variant:`ghost`}),null),t(r,i(o,{keys:[`⌘`,`K`],variant:`ghost`}),null),t(r,i(o,{keys:[`⌘`,`⇧`,`P`],variant:`ghost`}),null),e})()},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "24px",
    "align-items": "center"
  }}>
      <KeybindV2 keys={["⌘"]} variant="neutral" />
      <KeybindV2 keys={["⌘"]} variant="ghost" />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "24px",
    "align-items": "center"
  }}>
      <KeybindV2 keys={["⌘", "K"]} variant="neutral" />
      <KeybindV2 keys={["⌘", "K"]} variant="ghost" />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    "flex-direction": "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      gap: "24px",
      "align-items": "center"
    }}>
        <span style={{
        "font-size": "11px",
        color: "#808080",
        width: "50px"
      }}>Neutral</span>
        <KeybindV2 keys={["⌘"]} variant="neutral" />
        <KeybindV2 keys={["⌘", "K"]} variant="neutral" />
        <KeybindV2 keys={["⌘", "⇧", "P"]} variant="neutral" />
      </div>
      <div style={{
      display: "flex",
      gap: "24px",
      "align-items": "center"
    }}>
        <span style={{
        "font-size": "11px",
        color: "#808080",
        width: "50px"
      }}>Ghost</span>
        <KeybindV2 keys={["⌘"]} variant="ghost" />
        <KeybindV2 keys={["⌘", "K"]} variant="ghost" />
        <KeybindV2 keys={["⌘", "⇧", "P"]} variant="ghost" />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Variants`,`MultipleKeys`,`AllExamples`]}))();export{m as AllExamples,p as MultipleKeys,d as Playground,f as Variants,h as __namedExportsOrder,u as default};