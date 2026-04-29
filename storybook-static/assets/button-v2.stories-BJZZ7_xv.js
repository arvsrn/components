import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,Q as n,W as r,Y as i}from"./iframe-PABRdq1H.js";import{n as a,t as o}from"./button-v2-5DRqEzED.js";var s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{r(),a(),s=i(`<div style=display:flex;gap:12px;align-items:center;flex-wrap:wrap>`),c=i(`<svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.88867V13.1109"stroke=currentColor stroke-linejoin=round></path><path d="M2.88867 8H13.1109"stroke=currentColor stroke-linejoin=round>`),l=i(`<div style=display:grid;gap:12px>`),u=i(`<div style=display:grid;gap:8px><div style=font-size:12px;color:var(--text-weak);text-transform:capitalize></div><div style=display:flex;gap:8px;flex-wrap:wrap>`),d=`### Overview
Button v2 with four visual variants and two sizes.

### API
- \`variant\`: "neutral" | "contrast" | "ghost" | "notify-highlight".
- \`size\`: "normal" | "large".
- \`leadingIcon\`: Optional leading icon instance.
- Inherits Kobalte Button props and native button attributes.

### States
- default, hover, pressed, focus, disabled.
- State selectors are available via pseudo-classes and \`[data-state]\`.
`,f={title:`UI V2/Button`,id:`components-button-v2`,component:o,tags:[`autodocs`],parameters:{frameHeight:`240px`,frameBackground:`#fff`,docs:{description:{component:d}}},args:{children:`Button`,variant:`neutral`,size:`normal`},argTypes:{variant:{control:`select`,options:[`neutral`,`contrast`,`ghost`,`notify-highlight`]},size:{control:`select`,options:[`normal`,`large`]}}},p={},m={render:()=>(()=>{var e=s();return t(e,n(o,{variant:`neutral`,children:`Neutral`}),null),t(e,n(o,{variant:`contrast`,children:`Contrast`}),null),t(e,n(o,{variant:`ghost`,children:`Ghost`}),null),t(e,n(o,{variant:`notify-highlight`,children:`Notify highlight`}),null),e})()},h={render:()=>(()=>{var e=s();return t(e,n(o,{size:`small`,variant:`neutral`,children:`Small`}),null),t(e,n(o,{size:`normal`,variant:`neutral`,children:`Normal`}),null),t(e,n(o,{size:`large`,variant:`neutral`,children:`Large`}),null),e})()},g={render:()=>(()=>{var e=s();return t(e,n(o,{variant:`neutral`,size:`normal`,get leadingIcon(){return c()},children:`Normal`}),null),t(e,n(o,{variant:`contrast`,size:`large`,get leadingIcon(){return c()},children:`Large`}),null),e})()},_={render:()=>{let e=[`neutral`,`contrast`,`ghost`,`notify-highlight`],r=[`default`,`hover`,`pressed`,`focus`,`disabled`],i=e=>e.charAt(0).toUpperCase()+e.slice(1);return(()=>{var a=l();return t(a,()=>e.map(e=>(()=>{var a=u(),s=a.firstChild,c=s.nextSibling;return t(s,e),t(c,()=>r.map(t=>n(o,{variant:e,"data-state":t===`default`?void 0:t,disabled:t===`disabled`,get children(){return i(t)}}))),a})())),a})()}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    "align-items": "center",
    "flex-wrap": "wrap"
  }}>
      <ButtonV2 variant="neutral">Neutral</ButtonV2>
      <ButtonV2 variant="contrast">Contrast</ButtonV2>
      <ButtonV2 variant="ghost">Ghost</ButtonV2>
      <ButtonV2 variant="notify-highlight">Notify highlight</ButtonV2>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    "align-items": "center",
    "flex-wrap": "wrap"
  }}>
      <ButtonV2 variant="neutral" size="normal" leadingIcon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2.88867V13.1109" stroke="currentColor" stroke-linejoin="round" />
            <path d="M2.88867 8H13.1109" stroke="currentColor" stroke-linejoin="round" />
          </svg>}>
        Normal
      </ButtonV2>
      <ButtonV2 variant="contrast" size="large" leadingIcon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2.88867V13.1109" stroke="currentColor" stroke-linejoin="round" />
            <path d="M2.88867 8H13.1109" stroke="currentColor" stroke-linejoin="round" />
          </svg>}>
        Large
      </ButtonV2>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants = ["neutral", "contrast", "ghost", "notify-highlight"] as const;
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
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Variants`,`Sizes`,`LeadingIcon`,`AllStates`]}))();export{_ as AllStates,g as LeadingIcon,p as Playground,h as Sizes,m as Variants,v as __namedExportsOrder,f as default};