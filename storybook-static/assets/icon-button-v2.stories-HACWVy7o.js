import{n as e}from"./chunk-DnJy8xQt.js";import{J as t,Q as n,U as r,W as i,ct as a,ft as o,st as s}from"./iframe-Ck-CNuiI.js";import{i as c,n as l,r as u,t as d}from"./icon-DVAdbc6B.js";var f=e((()=>{}));function p(e){let[t,r]=o(e,[`variant`,`size`,`iconSize`,`class`,`classList`]);return n(c,a(r,{"data-component":`icon-button-v2`,get"data-icon"(){return e.icon},get"data-size"(){return t.size||`normal`},get"data-variant"(){return t.variant||`secondary`},get classList(){return{...t.classList,[t.class??``]:!!t.class}},get children(){return n(d,{get name(){return e.icon},get size(){return t.iconSize??(t.size===`large`?`normal`:`small`)}})}}))}var m=e((()=>{r(),u(),s(),l(),f()})),h,g,_,v,y,b,x,S,C,w;e((()=>{r(),m(),h=t(`<div style=display:flex;gap:12px;align-items:center;flex-wrap:wrap>`),g=t(`<div style=display:grid;gap:12px>`),_=t(`<div style=display:grid;gap:8px><div style=font-size:12px;color:var(--text-weak);text-transform:capitalize></div><div style=display:flex;gap:8px;flex-wrap:wrap>`),v=`### Overview
Square icon-only button v2 with three visual variants and three sizes.

### API
- \`icon\`: Icon name from the icon component.
- \`variant\`: "primary" | "secondary" | "ghost".
- \`size\`: "small" | "normal" | "large".
- \`iconSize\`: Optional explicit icon size override.
- Inherits Kobalte Button props and native button attributes.

### States
- default, hover, pressed, focus, disabled.
- State selectors are available via pseudo-classes and \`[data-state]\`.
`,y={title:`UI V2/Icon Button`,id:`components-icon-button-v2`,component:p,tags:[`autodocs`],parameters:{frameHeight:`300px`,frameBackground:`#fff`,docs:{description:{component:v}}},args:{icon:`plus`,variant:`secondary`,size:`normal`},argTypes:{icon:{control:`text`},variant:{control:`select`,options:[`primary`,`secondary`,`ghost`]},size:{control:`select`,options:[`small`,`normal`,`large`]},iconSize:{control:`select`,options:[`small`,`normal`,`large`]}}},b={},x={render:()=>(()=>{var e=h();return i(e,n(p,{icon:`plus`,variant:`secondary`}),null),i(e,n(p,{icon:`plus`,variant:`primary`}),null),i(e,n(p,{icon:`plus`,variant:`ghost`}),null),e})()},S={render:()=>(()=>{var e=h();return i(e,n(p,{icon:`plus`,size:`small`,variant:`secondary`}),null),i(e,n(p,{icon:`plus`,size:`normal`,variant:`secondary`}),null),i(e,n(p,{icon:`plus`,size:`large`,variant:`secondary`}),null),e})()},C={render:()=>{let e=[`secondary`,`primary`,`ghost`],t=[`default`,`hover`,`pressed`,`focus`,`disabled`];return(()=>{var r=g();return i(r,()=>e.map(e=>(()=>{var r=_(),a=r.firstChild,o=a.nextSibling;return i(a,e),i(o,()=>t.map(t=>n(p,{icon:`plus`,variant:e,"data-state":t===`default`?void 0:t,disabled:t===`disabled`}))),r})())),r})()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    "align-items": "center",
    "flex-wrap": "wrap"
  }}>
      <IconButtonV2 icon="plus" variant="secondary" />
      <IconButtonV2 icon="plus" variant="primary" />
      <IconButtonV2 icon="plus" variant="ghost" />
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    "align-items": "center",
    "flex-wrap": "wrap"
  }}>
      <IconButtonV2 icon="plus" size="small" variant="secondary" />
      <IconButtonV2 icon="plus" size="normal" variant="secondary" />
      <IconButtonV2 icon="plus" size="large" variant="secondary" />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants = ["secondary", "primary", "ghost"] as const;
    const states = ["default", "hover", "pressed", "focus", "disabled"] as const;
    return <div style={{
      display: "grid",
      gap: "12px"
    }}>
        {variants.map(variant => <div style={{
        display: "grid",
        gap: "8px"
      }}>
            <div style={{
          "font-size": "12px",
          color: "var(--text-weak)",
          "text-transform": "capitalize"
        }}>
              {variant}
            </div>
            <div style={{
          display: "flex",
          gap: "8px",
          "flex-wrap": "wrap"
        }}>
              {states.map(state => <IconButtonV2 icon="plus" variant={variant} data-state={state === "default" ? undefined : state} disabled={state === "disabled"} />)}
            </div>
          </div>)}
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`Variants`,`Sizes`,`AllStates`]}))();export{C as AllStates,b as Playground,S as Sizes,x as Variants,w as __namedExportsOrder,y as default};