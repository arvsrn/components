import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,W as n,X as r,ft as i,lt as a,rt as o}from"./iframe-hOlr1WQH.js";import{n as s,t as c}from"./inline-input-v2--Ya8N9Ue.js";var l,u,d,f,p,m,h,g,_;e((()=>{n(),i(),s(),l=r(`<div style=display:grid;gap:12px;width:280px><div style=font-family:var(--font-family-sans);font-size:12px;color:var(--text-text-faint)>Value: `),u=r(`<div style=display:grid;gap:20px;width:280px>`),d='### Overview\nSingle-line field with an inline prefix label, vertical divider, and the same states as TextInput v2.\n\n### API\n- `prefix`: Inline label in the leading segment (required).\n- `labelWidth`: Fixed prefix width (px number or CSS length). Omit for fit-content.\n- Forwards native `input` props (`value`, `defaultValue`, `placeholder`, `disabled`, etc.).\n- `showCopyButton`, `copyLabel`, `onCopyClick`: Optional trailing copy control.\n- `invalid`: Error outline and danger text color.\n- `appearance`: `"base"` (28px) or `"large"` (32px).\n- `numeric`: Tabular numerals on prefix and value.\n\n### States\n- **Hover**, **Focus**, **Invalid**, **Disabled** — same as TextInput v2 on the outer shell.\n',f={title:`UI V2/InlineInput`,id:`components-inline-input-v2`,component:c,tags:[`autodocs`],parameters:{frameHeight:`400px`,frameBackground:`#fff`,docs:{description:{component:d}}},args:{prefix:`Label`,placeholder:`Text`,showCopyButton:!0,disabled:!1,invalid:!1,appearance:`base`},argTypes:{prefix:{control:`text`},labelWidth:{control:`number`},appearance:{control:`select`,options:[`base`,`large`]},showCopyButton:{control:`boolean`},disabled:{control:`boolean`},invalid:{control:`boolean`},placeholder:{control:`text`}}},p={},m={render:()=>{let[e,n]=a(`42`);return(()=>{var r=l(),i=r.firstChild;return i.firstChild,t(r,o(c,{prefix:`Amount`,get value(){return e()},onInput:e=>n(e.currentTarget.value),placeholder:`0.00`,numeric:!0}),i),t(i,e,null),r})()}},h={render:()=>(()=>{var e=u();return t(e,o(c,{prefix:`Label`,appearance:`base`,placeholder:`Text`,showCopyButton:!0}),null),t(e,o(c,{prefix:`Label`,appearance:`large`,placeholder:`Text`,showCopyButton:!0}),null),t(e,o(c,{prefix:`Label`,labelWidth:50,placeholder:`Text`,showCopyButton:!0}),null),t(e,o(c,{prefix:`Long label`,placeholder:`Text`,showCopyButton:!0}),null),e})()},g={render:()=>(()=>{var e=u();return t(e,o(c,{prefix:`Label`,placeholder:`Text`,showCopyButton:!0}),null),t(e,o(c,{prefix:`Label`,placeholder:`Text`,defaultValue:`Hello`,showCopyButton:!0}),null),t(e,o(c,{prefix:`Label`,placeholder:`Text`,defaultValue:`Invalid`,invalid:!0,showCopyButton:!0}),null),t(e,o(c,{prefix:`Label`,placeholder:`Text`,disabled:!0,showCopyButton:!0}),null),e})()},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal("42");
    return <div style={{
      display: "grid",
      gap: "12px",
      width: "280px"
    }}>
        <InlineInputV2 prefix="Amount" value={value()} onInput={e => setValue(e.currentTarget.value)} placeholder="0.00" numeric />
        <div style={{
        "font-family": "var(--font-family-sans)",
        "font-size": "12px",
        color: "var(--text-text-faint)"
      }}>
          Value: {value()}
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "20px",
    width: "280px"
  }}>
      <InlineInputV2 prefix="Label" appearance="base" placeholder="Text" showCopyButton />
      <InlineInputV2 prefix="Label" appearance="large" placeholder="Text" showCopyButton />
      <InlineInputV2 prefix="Label" labelWidth={50} placeholder="Text" showCopyButton />
      <InlineInputV2 prefix="Long label" placeholder="Text" showCopyButton />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "20px",
    width: "280px"
  }}>
      <InlineInputV2 prefix="Label" placeholder="Text" showCopyButton />
      <InlineInputV2 prefix="Label" placeholder="Text" defaultValue="Hello" showCopyButton />
      <InlineInputV2 prefix="Label" placeholder="Text" defaultValue="Invalid" invalid showCopyButton />
      <InlineInputV2 prefix="Label" placeholder="Text" disabled showCopyButton />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Controlled`,`Appearances`,`States`]}))();export{h as Appearances,m as Controlled,p as Playground,g as States,_ as __namedExportsOrder,f as default};