import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,W as n,X as r,ht as i,it as a,mt as o,yt as s}from"./iframe-DZLDNB0z.js";import{t as c}from"./UKTBL2JL-_oGrLKFs.js";import{t as l}from"./button-C2BzhOYQ.js";import{n as u,t as d}from"./icon-gyZ8DRhJ.js";var f=e((()=>{}));function p(e){let[t,n]=s(e,[`variant`,`size`,`iconSize`,`class`,`classList`]);return a(c,i(n,{"data-component":`icon-button-v2`,get"data-icon"(){return e.icon},get"data-size"(){return t.size||`normal`},get"data-variant"(){return t.variant||`neutral`},get classList(){return{...t.classList,[t.class??``]:!!t.class}},get children(){return a(d,{get name(){return e.icon},get size(){return t.iconSize??(t.size===`large`?`normal`:`small`)}})}}))}var m=e((()=>{n(),l(),o(),u(),f()})),h,g,_,v,y,b,x,S,C,w;e((()=>{n(),m(),h=r(`<div style=display:flex;gap:12px;align-items:center;flex-wrap:wrap>`),g=r(`<div style=display:grid;gap:12px>`),_=r(`<div style=display:grid;gap:8px><div style=font-size:12px;color:var(--text-weak);text-transform:capitalize></div><div style=display:flex;gap:8px;flex-wrap:wrap>`),v=`### Overview
Square icon-only button v2 with three visual variants and three sizes.

### API
- \`icon\`: Icon name from the icon component.
- \`variant\`: "neutral" | "contrast" | "ghost".
- \`size\`: "small" | "normal" | "large".
- \`iconSize\`: Optional explicit icon size override.
- Inherits Kobalte Button props and native button attributes.

### States
- default, hover, pressed, focus, disabled.
- State selectors are available via pseudo-classes and \`[data-state]\`.
`,y={title:`UI V2/IconButton`,id:`components-icon-button-v2`,component:p,tags:[`autodocs`],parameters:{frameHeight:`300px`,frameBackground:`#fff`,docs:{description:{component:v}}},args:{icon:`plus`,variant:`neutral`,size:`normal`},argTypes:{icon:{control:`text`},variant:{control:`select`,options:[`neutral`,`contrast`,`ghost`]},size:{control:`select`,options:[`small`,`normal`,`large`]},iconSize:{control:`select`,options:[`small`,`normal`,`large`]}}},b={},x={render:()=>(()=>{var e=h();return t(e,a(p,{icon:`plus`,variant:`neutral`}),null),t(e,a(p,{icon:`plus`,variant:`contrast`}),null),t(e,a(p,{icon:`plus`,variant:`ghost`}),null),e})()},S={render:()=>(()=>{var e=h();return t(e,a(p,{icon:`plus`,size:`small`,variant:`neutral`}),null),t(e,a(p,{icon:`plus`,size:`normal`,variant:`neutral`}),null),t(e,a(p,{icon:`plus`,size:`large`,variant:`neutral`}),null),e})()},C={render:()=>{let e=[`neutral`,`contrast`,`ghost`],n=[`default`,`hover`,`pressed`,`focus`,`disabled`];return(()=>{var r=g();return t(r,()=>e.map(e=>(()=>{var r=_(),i=r.firstChild,o=i.nextSibling;return t(i,e),t(o,()=>n.map(t=>a(p,{icon:`plus`,variant:e,"data-state":t===`default`?void 0:t,disabled:t===`disabled`}))),r})())),r})()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    "align-items": "center",
    "flex-wrap": "wrap"
  }}>
      <IconButtonV2 icon="plus" variant="neutral" />
      <IconButtonV2 icon="plus" variant="contrast" />
      <IconButtonV2 icon="plus" variant="ghost" />
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    "align-items": "center",
    "flex-wrap": "wrap"
  }}>
      <IconButtonV2 icon="plus" size="small" variant="neutral" />
      <IconButtonV2 icon="plus" size="normal" variant="neutral" />
      <IconButtonV2 icon="plus" size="large" variant="neutral" />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants = ["neutral", "contrast", "ghost"] as const;
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