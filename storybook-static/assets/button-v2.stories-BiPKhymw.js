import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,W as n,X as r,it as i}from"./iframe-DZLDNB0z.js";import{n as a,t as o}from"./button-v2-kxWSC5Wg.js";var s,c,l,u,d,f,p,m,h,g,_;e((()=>{n(),a(),s=r(`<div style=display:flex;gap:12px;align-items:center;flex-wrap:wrap>`),c=r(`<div style=display:grid;gap:12px>`),l=r(`<div style=display:grid;gap:8px><div style=font-size:12px;color:var(--text-weak);text-transform:capitalize></div><div style=display:flex;gap:8px;flex-wrap:wrap>`),u=`### Overview
Button v2 with three visual variants and two sizes.

### API
- \`variant\`: "neutral" | "contrast" | "ghost".
- \`size\`: "normal" | "large".
- \`icon\`: Optional icon name.
- Inherits Kobalte Button props and native button attributes.

### States
- default, hover, pressed, focus, disabled.
- State selectors are available via pseudo-classes and \`[data-state]\`.
`,d={title:`UI V2/Button`,id:`components-button-v2`,component:o,tags:[`autodocs`],parameters:{frameHeight:`240px`,frameBackground:`#fff`,docs:{description:{component:u}}},args:{children:`Button`,variant:`neutral`,size:`normal`},argTypes:{icon:{control:`text`},variant:{control:`select`,options:[`neutral`,`contrast`,`ghost`]},size:{control:`select`,options:[`normal`,`large`]}}},f={},p={render:()=>(()=>{var e=s();return t(e,i(o,{variant:`neutral`,children:`Neutral`}),null),t(e,i(o,{variant:`contrast`,children:`Contrast`}),null),t(e,i(o,{variant:`ghost`,children:`Ghost`}),null),e})()},m={render:()=>(()=>{var e=s();return t(e,i(o,{size:`small`,variant:`neutral`,children:`Small`}),null),t(e,i(o,{size:`normal`,variant:`neutral`,children:`Normal`}),null),t(e,i(o,{size:`large`,variant:`neutral`,children:`Large`}),null),e})()},h={render:()=>(()=>{var e=s();return t(e,i(o,{variant:`neutral`,size:`normal`,icon:`plus`,children:`Normal`}),null),t(e,i(o,{variant:`contrast`,size:`large`,icon:`plus`,children:`Large`}),null),e})()},g={render:()=>{let e=[`neutral`,`contrast`,`ghost`],n=[`default`,`hover`,`pressed`,`focus`,`disabled`],r=e=>e.charAt(0).toUpperCase()+e.slice(1);return(()=>{var a=c();return t(a,()=>e.map(e=>(()=>{var a=l(),s=a.firstChild,c=s.nextSibling;return t(s,e),t(c,()=>n.map(t=>i(o,{variant:e,"data-state":t===`default`?void 0:t,disabled:t===`disabled`,get children(){return r(t)}}))),a})())),a})()}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    "align-items": "center",
    "flex-wrap": "wrap"
  }}>
      <ButtonV2 variant="neutral">Neutral</ButtonV2>
      <ButtonV2 variant="contrast">Contrast</ButtonV2>
      <ButtonV2 variant="ghost">Ghost</ButtonV2>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    "align-items": "center",
    "flex-wrap": "wrap"
  }}>
      <ButtonV2 size="small" variant="neutral">
        Small
      </ButtonV2>
      <ButtonV2 size="normal" variant="neutral">
        Normal
      </ButtonV2>
      <ButtonV2 size="large" variant="neutral">
        Large
      </ButtonV2>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    "align-items": "center",
    "flex-wrap": "wrap"
  }}>
      <ButtonV2 variant="neutral" size="normal" icon="plus">
        Normal
      </ButtonV2>
      <ButtonV2 variant="contrast" size="large" icon="plus">
        Large
      </ButtonV2>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants = ["neutral", "contrast", "ghost"] as const;
    const states = ["default", "hover", "pressed", "focus", "disabled"] as const;
    const toTitleCase = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
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
              {states.map(state => <ButtonV2 variant={variant} data-state={state === "default" ? undefined : state} disabled={state === "disabled"}>
                  {toTitleCase(state)}
                </ButtonV2>)}
            </div>
          </div>)}
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Variants`,`Sizes`,`Icon`,`AllStates`]}))();export{g as AllStates,h as Icon,f as Playground,m as Sizes,p as Variants,_ as __namedExportsOrder,d as default};