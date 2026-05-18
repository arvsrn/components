import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,W as n,X as r,dt as i,it as a,mt as o}from"./iframe-DZLDNB0z.js";import{n as s,t as c}from"./field-v2-CTehACi5.js";import{n as l,t as u}from"./inline-input-v2-CtnnU8Oi.js";var d,f,p,m,h,g,_,v,y,b,x;e((()=>{n(),o(),s(),l(),d=r(`<div style=display:grid;gap:12px;width:280px><div style=font-family:var(--font-family-sans);font-size:12px;color:var(--text-text-faint)>Value: `),f=r(`<div style=display:grid;gap:20px;width:280px>`),p=r(`<div style=display:grid;gap:24px;width:280px>`),m='### Overview\nSingle-line field with an inline prefix label, vertical divider, and the same states as TextInput v2.\n\n### API\n- `prefix`: Inline label in the leading segment (required).\n- `labelWidth`: Fixed prefix width (px number or CSS length). Omit for fit-content.\n- Forwards native `input` props (`value`, `defaultValue`, `placeholder`, `disabled`, etc.).\n- `showCopyButton`, `copyLabel`, `onCopyClick`: Optional trailing copy control.\n- `invalid`: Error outline and danger text color.\n- `appearance`: `"base"` (28px) or `"large"` (32px).\n- `numeric`: Tabular numerals on prefix and value.\n\n### States\n- **Hover**, **Focus**, **Invalid**, **Disabled** — same as TextInput v2 on the outer shell.\n\n### Field\nCompose with `Field` for label, helper prefix/suffix, and tooltip — see the **Field** story.\n',h={title:`UI V2/InlineInput`,id:`components-inline-input-v2`,component:u,tags:[`autodocs`],parameters:{frameHeight:`400px`,frameBackground:`#fff`,docs:{description:{component:m}}},args:{prefix:`Label`,placeholder:`Text`,showCopyButton:!0,disabled:!1,invalid:!1,appearance:`base`},argTypes:{prefix:{control:`text`},labelWidth:{control:`number`},appearance:{control:`select`,options:[`base`,`large`]},showCopyButton:{control:`boolean`},disabled:{control:`boolean`},invalid:{control:`boolean`},placeholder:{control:`text`}}},g={},_={render:()=>{let[e,n]=i(`42`);return(()=>{var r=d(),i=r.firstChild;return i.firstChild,t(r,a(u,{prefix:`Amount`,get value(){return e()},onInput:e=>n(e.currentTarget.value),placeholder:`0.00`,numeric:!0}),i),t(i,e,null),r})()}},v={render:()=>(()=>{var e=f();return t(e,a(u,{prefix:`Label`,appearance:`base`,placeholder:`Text`,showCopyButton:!0}),null),t(e,a(u,{prefix:`Label`,appearance:`large`,placeholder:`Text`,showCopyButton:!0}),null),t(e,a(u,{prefix:`Label`,labelWidth:50,placeholder:`Text`,showCopyButton:!0}),null),t(e,a(u,{prefix:`Long label`,placeholder:`Text`,showCopyButton:!0}),null),e})()},y={parameters:{frameHeight:`500px`},render:()=>(()=>{var e=p();return t(e,a(c,{get children(){return[a(c.Label,{tooltip:`Additional context`,children:`Label`}),a(c.Prefix,{children:`Prefix`}),a(u,{prefix:`USD`,placeholder:`0.00`,numeric:!0,showCopyButton:!0}),a(c.Suffix,{children:`Suffix`})]}}),null),t(e,a(c,{invalid:!0,get children(){return[a(c.Label,{children:`Label`}),a(c.Prefix,{children:`Prefix`}),a(u,{prefix:`USD`,placeholder:`0.00`,defaultValue:`Invalid`,showCopyButton:!0}),a(c.Suffix,{children:`Suffix`})]}}),null),e})()},b={render:()=>(()=>{var e=f();return t(e,a(u,{prefix:`Label`,placeholder:`Text`,showCopyButton:!0}),null),t(e,a(u,{prefix:`Label`,placeholder:`Text`,defaultValue:`Hello`,showCopyButton:!0}),null),t(e,a(u,{prefix:`Label`,placeholder:`Text`,defaultValue:`Invalid`,invalid:!0,showCopyButton:!0}),null),t(e,a(u,{prefix:`Label`,placeholder:`Text`,disabled:!0,showCopyButton:!0}),null),e})()},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    frameHeight: "500px"
  },
  render: () => <div style={{
    display: "grid",
    gap: "24px",
    width: "280px"
  }}>
      <FieldV2>
        <FieldV2.Label tooltip="Additional context">Label</FieldV2.Label>
        <FieldV2.Prefix>Prefix</FieldV2.Prefix>
        <InlineInputV2 prefix="USD" placeholder="0.00" numeric showCopyButton />
        <FieldV2.Suffix>Suffix</FieldV2.Suffix>
      </FieldV2>
      <FieldV2 invalid>
        <FieldV2.Label>Label</FieldV2.Label>
        <FieldV2.Prefix>Prefix</FieldV2.Prefix>
        <InlineInputV2 prefix="USD" placeholder="0.00" defaultValue="Invalid" showCopyButton />
        <FieldV2.Suffix>Suffix</FieldV2.Suffix>
      </FieldV2>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`Controlled`,`Appearances`,`Field`,`States`]}))();export{v as Appearances,_ as Controlled,y as Field,g as Playground,b as States,x as __namedExportsOrder,h as default};