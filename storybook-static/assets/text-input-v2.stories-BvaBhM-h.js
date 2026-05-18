import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,W as n,X as r,ft as i,lt as a,rt as o}from"./iframe-hOlr1WQH.js";import{n as s,t as c}from"./text-input-v2-BCYCJYAE.js";var l,u,d,f,p,m,h,g,_,v;e((()=>{n(),i(),s(),l=r(`<div style=display:grid;gap:12px><div style=font-family:var(--font-family-sans);font-size:12px;color:var(--text-text-faint)>Value: `),u=r(`<div style=display:grid;gap:20px;width:280px>`),d='### Overview\nCompact single-line text field with neutral elevation, optional trailing copy action, and theme tokens.\n\n### API\n- Forwards native `input` props (`value`, `defaultValue`, `placeholder`, `disabled`, `name`, `type`, etc.).\n- `showCopyButton`: Renders the trailing outline-copy control.\n- `copyLabel`: Accessible name for the copy button (default: "Copy").\n- `onCopyClick`: Handler for the copy button.\n- `invalid`: Error outline and danger text color.\n- `appearance`: `"base"` (28px) or `"large"` (32px).\n\n### States\n- **Hover**: neutral overlay on the raised surface.\n- **Focus** (`:focus-within`): focus border, elevation removed.\n- **Invalid**: danger border and text.\n- **Disabled**: 50% opacity.\n- Uses `data-component="text-input-v2"` with `--background-bg-base`, `--elevation-button-neutral`, `--text-text-faint` (placeholder), and `--icon-icon-muted` (copy icon).\n',f={title:`UI V2/TextInput`,id:`components-text-input-v2`,component:c,tags:[`autodocs`],parameters:{frameHeight:`300px`,frameBackground:`#fff`,docs:{description:{component:d}}},args:{placeholder:`Placeholder`,showCopyButton:!1,disabled:!1,invalid:!1,appearance:`base`},argTypes:{appearance:{control:`select`,options:[`base`,`large`]},showCopyButton:{control:`boolean`},disabled:{control:`boolean`},invalid:{control:`boolean`},placeholder:{control:`text`}}},p={},m={args:{placeholder:`api.example.com/v1`,defaultValue:`https://api.example.com/v1`,showCopyButton:!0,copyLabel:`Copy URL`}},h={render:()=>{let[e,n]=a(`Controlled value`);return(()=>{var r=l(),i=r.firstChild;return i.firstChild,t(r,o(c,{get value(){return e()},onInput:e=>n(e.currentTarget.value),placeholder:`Type here…`}),i),t(i,e,null),r})()}},g={render:()=>(()=>{var e=u();return t(e,o(c,{appearance:`base`,placeholder:`Base (28px)`,defaultValue:`Base`}),null),t(e,o(c,{appearance:`large`,placeholder:`Large (32px)`,defaultValue:`Large`}),null),t(e,o(c,{appearance:`large`,placeholder:`Large with copy`,defaultValue:`copy-me`,showCopyButton:!0}),null),e})()},_={render:()=>(()=>{var e=u();return t(e,o(c,{placeholder:`Default`}),null),t(e,o(c,{placeholder:`With value`,defaultValue:`Hello world`}),null),t(e,o(c,{placeholder:`With copy`,defaultValue:`copy-me`,showCopyButton:!0}),null),t(e,o(c,{placeholder:`Invalid`,defaultValue:`Invalid value`,invalid:!0,showCopyButton:!0}),null),t(e,o(c,{placeholder:`Disabled`,disabled:!0}),null),t(e,o(c,{placeholder:`Disabled with value`,defaultValue:`Read only`,disabled:!0,showCopyButton:!0}),null),e})()},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "api.example.com/v1",
    defaultValue: "https://api.example.com/v1",
    showCopyButton: true,
    copyLabel: "Copy URL"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "20px",
    width: "280px"
  }}>
      <TextInputV2 appearance="base" placeholder="Base (28px)" defaultValue="Base" />
      <TextInputV2 appearance="large" placeholder="Large (32px)" defaultValue="Large" />
      <TextInputV2 appearance="large" placeholder="Large with copy" defaultValue="copy-me" showCopyButton />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`WithCopyButton`,`Controlled`,`Appearances`,`States`]}))();export{g as Appearances,h as Controlled,p as Playground,_ as States,m as WithCopyButton,v as __namedExportsOrder,f as default};