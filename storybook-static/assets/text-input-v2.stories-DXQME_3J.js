import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,W as n,X as r,dt as i,it as a,mt as o}from"./iframe-DZLDNB0z.js";import{n as s,t as c}from"./field-v2-CTehACi5.js";import{n as l,t as u}from"./text-input-v2-CSlQy32h.js";var d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{n(),o(),s(),l(),d=r(`<div style=display:grid;gap:12px><div style=font-family:var(--font-family-sans);font-size:12px;color:var(--text-text-faint)>Value: `),f=r(`<div style=display:grid;gap:20px;width:280px>`),p=r(`<div style=display:grid;gap:24px;width:280px>`),m='### Overview\nCompact single-line text field with neutral elevation, optional trailing copy action, and theme tokens.\n\n### API\n- Forwards native `input` props (`value`, `defaultValue`, `placeholder`, `disabled`, `name`, `type`, etc.).\n- `showCopyButton`: Renders the trailing outline-copy control.\n- `copyLabel`: Accessible name for the copy button (default: "Copy").\n- `onCopyClick`: Handler for the copy button.\n- `invalid`: Error outline and danger text color.\n- `appearance`: `"base"` (28px) or `"large"` (32px).\n\n### States\n- **Hover**: neutral overlay on the raised surface.\n- **Focus** (`:focus-within`): focus border, elevation removed.\n- **Invalid**: danger border and text.\n- **Disabled**: 50% opacity.\n- Uses `data-component="text-input-v2"` with `--background-bg-base`, `--elevation-button-neutral`, `--text-text-faint` (placeholder), and `--icon-icon-muted` (copy icon).\n\n### Field\nCompose with `Field` for label, helper prefix/suffix, and tooltip — see the **Field** story.\n',h={title:`UI V2/TextInput`,id:`components-text-input-v2`,component:u,tags:[`autodocs`],parameters:{frameHeight:`300px`,frameBackground:`#fff`,docs:{description:{component:m}}},args:{placeholder:`Placeholder`,showCopyButton:!1,disabled:!1,invalid:!1,appearance:`base`},argTypes:{appearance:{control:`select`,options:[`base`,`large`]},showCopyButton:{control:`boolean`},disabled:{control:`boolean`},invalid:{control:`boolean`},placeholder:{control:`text`}}},g={},_={args:{placeholder:`api.example.com/v1`,defaultValue:`https://api.example.com/v1`,showCopyButton:!0,copyLabel:`Copy URL`}},v={render:()=>{let[e,n]=i(`Controlled value`);return(()=>{var r=d(),i=r.firstChild;return i.firstChild,t(r,a(u,{get value(){return e()},onInput:e=>n(e.currentTarget.value),placeholder:`Type here…`}),i),t(i,e,null),r})()}},y={render:()=>(()=>{var e=f();return t(e,a(u,{appearance:`base`,placeholder:`Base (28px)`,defaultValue:`Base`}),null),t(e,a(u,{appearance:`large`,placeholder:`Large (32px)`,defaultValue:`Large`}),null),t(e,a(u,{appearance:`large`,placeholder:`Large with copy`,defaultValue:`copy-me`,showCopyButton:!0}),null),e})()},b={parameters:{frameHeight:`500px`},render:()=>(()=>{var e=p();return t(e,a(c,{get children(){return[a(c.Label,{tooltip:`Additional context`,children:`Label`}),a(c.Prefix,{children:`Prefix`}),a(u,{placeholder:`Text`,showCopyButton:!0}),a(c.Suffix,{children:`Suffix`})]}}),null),t(e,a(c,{invalid:!0,get children(){return[a(c.Label,{children:`Label`}),a(c.Prefix,{children:`Prefix`}),a(u,{placeholder:`Text`,defaultValue:`Invalid`,showCopyButton:!0}),a(c.Suffix,{children:`Suffix`})]}}),null),e})()},x={render:()=>(()=>{var e=f();return t(e,a(u,{placeholder:`Default`}),null),t(e,a(u,{placeholder:`With value`,defaultValue:`Hello world`}),null),t(e,a(u,{placeholder:`With copy`,defaultValue:`copy-me`,showCopyButton:!0}),null),t(e,a(u,{placeholder:`Invalid`,defaultValue:`Invalid value`,invalid:!0,showCopyButton:!0}),null),t(e,a(u,{placeholder:`Disabled`,disabled:!0}),null),t(e,a(u,{placeholder:`Disabled with value`,defaultValue:`Read only`,disabled:!0,showCopyButton:!0}),null),e})()},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "api.example.com/v1",
    defaultValue: "https://api.example.com/v1",
    showCopyButton: true,
    copyLabel: "Copy URL"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal("Controlled value");
    return <div style={{
      display: "grid",
      gap: "12px"
    }}>
        <TextInputV2 value={value()} onInput={e => setValue(e.currentTarget.value)} placeholder="Type here…" />
        <div style={{
        "font-family": "var(--font-family-sans)",
        "font-size": "12px",
        color: "var(--text-text-faint)"
      }}>
          Value: {value()}
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "20px",
    width: "280px"
  }}>
      <TextInputV2 appearance="base" placeholder="Base (28px)" defaultValue="Base" />
      <TextInputV2 appearance="large" placeholder="Large (32px)" defaultValue="Large" />
      <TextInputV2 appearance="large" placeholder="Large with copy" defaultValue="copy-me" showCopyButton />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
        <TextInputV2 placeholder="Text" showCopyButton />
        <FieldV2.Suffix>Suffix</FieldV2.Suffix>
      </FieldV2>
      <FieldV2 invalid>
        <FieldV2.Label>Label</FieldV2.Label>
        <FieldV2.Prefix>Prefix</FieldV2.Prefix>
        <TextInputV2 placeholder="Text" defaultValue="Invalid" showCopyButton />
        <FieldV2.Suffix>Suffix</FieldV2.Suffix>
      </FieldV2>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "20px",
    width: "280px"
  }}>
      <TextInputV2 placeholder="Default" />
      <TextInputV2 placeholder="With value" defaultValue="Hello world" />
      <TextInputV2 placeholder="With copy" defaultValue="copy-me" showCopyButton />
      <TextInputV2 placeholder="Invalid" defaultValue="Invalid value" invalid showCopyButton />
      <TextInputV2 placeholder="Disabled" disabled />
      <TextInputV2 placeholder="Disabled with value" defaultValue="Read only" disabled showCopyButton />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`WithCopyButton`,`Controlled`,`Appearances`,`Field`,`States`]}))();export{y as Appearances,v as Controlled,b as Field,g as Playground,x as States,_ as WithCopyButton,S as __namedExportsOrder,h as default};