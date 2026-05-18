import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,W as n,X as r,it as i}from"./iframe-DZLDNB0z.js";import{n as a,t as o}from"./tooltip-v2-Br2zvhtY.js";import{n as s,t as c}from"./keybind-v2-BqFfCmvf.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{n(),a(),s(),l=r(`<span>Hover me`),u=r(`<div style=padding:80px;display:flex;justify-content:center>`),d=r(`<span style=color:var(--text-text-faint)>/`),f=r(`<span>Title`),p=r(`<span style=color:var(--text-text-faint)>·`),m=r(`<span style=color:var(--text-text-faint)>Description`),h=`### Overview
Floating tooltip built on Kobalte's tooltip primitive with v2 styling.

### API
- \`value\`: Content rendered inside the floating tooltip.
- \`children\`: The trigger element that activates the tooltip on hover/focus.
- \`placement\`: Kobalte placement string (e.g. "top", "bottom", "left", "right").
- \`inactive\`: When true, renders only the trigger without tooltip behavior.
- \`forceOpen\`: Forces the tooltip to stay open.
- Inherits Kobalte Tooltip root props.
`,g={title:`UI V2/Tooltip`,id:`components-tooltip-v2`,component:o,tags:[`autodocs`],parameters:{frameHeight:`300px`,frameBackground:`#fff`,docs:{description:{component:h}}}},_={render:()=>(()=>{var e=u();return t(e,i(o,{value:`Tooltip Text`,get children(){return l()}})),e})()},v={render:()=>(()=>{var e=u();return t(e,i(o,{get value(){return[`Tooltip Text`,i(c,{keys:[`⌘`,`⌘`],variant:`neutral`})]},get children(){return l()}})),e})()},y={render:()=>(()=>{var e=u();return t(e,i(o,{get value(){return[`Components `,d(),` Tooltip`]},get children(){return l()}})),e})()},b={render:()=>(()=>{var e=u();return t(e,i(o,{get value(){return[f(),p(),m()]},get children(){return l()}})),e})()},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "80px",
    display: "flex",
    "justify-content": "center"
  }}>
      <TooltipV2 value="Tooltip Text">
        <span>Hover me</span>
      </TooltipV2>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Simple`,`WithKeybind`,`Path`,`TitleDescription`]}))();export{y as Path,_ as Simple,b as TitleDescription,v as WithKeybind,x as __namedExportsOrder,g as default};