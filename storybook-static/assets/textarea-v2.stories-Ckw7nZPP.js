import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,W as n,X as r,dt as i,it as a,mt as o}from"./iframe-DZLDNB0z.js";import{n as s,t as c}from"./field-v2-CTehACi5.js";import{n as l,t as u}from"./textarea-v2-CDNaom8B.js";var d,f,p,m,h,g,_,v,y,b;e((()=>{n(),o(),s(),l(),d=r(`<div style=display:grid;gap:12px;width:280px><div style=font-family:var(--font-family-sans);font-size:12px;color:var(--text-text-faint)>Value: `),f=r(`<div style=display:grid;gap:24px;width:280px>`),p=r(`<div style=display:grid;gap:20px;width:280px>`),m="### Overview\nMultiline text field with the same neutral elevation, states, and tokens as TextInput v2.\n\n### API\n- Forwards native `textarea` props (`value`, `defaultValue`, `placeholder`, `disabled`, `name`, `rows`, etc.).\n- `invalid`: Error outline and danger text color.\n\n### States\n- **Hover**: neutral overlay on the raised surface.\n- **Focus** (`:focus-within`): focus outline, elevation removed.\n- **Invalid**: danger outline and text.\n- **Disabled**: 50% opacity.\n\n### Field\nCompose with `Field` for label, helper prefix/suffix, and tooltip — see the **Field** story.\n",h={title:`UI V2/Textarea`,id:`components-textarea-v2`,component:u,tags:[`autodocs`],parameters:{frameHeight:`400px`,frameBackground:`#fff`,docs:{description:{component:m}}},args:{placeholder:`Placeholder`,disabled:!1,invalid:!1,rows:3},argTypes:{disabled:{control:`boolean`},invalid:{control:`boolean`},placeholder:{control:`text`},rows:{control:{type:`number`,min:1,max:12}}}},g={},_={render:()=>{let[e,n]=i(`Controlled value`);return(()=>{var r=d(),i=r.firstChild;return i.firstChild,t(r,a(u,{get value(){return e()},onInput:e=>n(e.currentTarget.value),placeholder:`Type here…`}),i),t(i,e,null),r})()}},v={parameters:{frameHeight:`500px`},render:()=>(()=>{var e=f();return t(e,a(c,{get children(){return[a(c.Label,{tooltip:`Additional context`,children:`Label`}),a(c.Prefix,{children:`Prefix`}),a(u,{placeholder:`Text`}),a(c.Suffix,{children:`Suffix`})]}}),null),t(e,a(c,{invalid:!0,get children(){return[a(c.Label,{children:`Label`}),a(c.Prefix,{children:`Prefix`}),a(u,{placeholder:`Text`,defaultValue:`Invalid value`}),a(c.Suffix,{children:`Suffix`})]}}),null),e})()},y={render:()=>(()=>{var e=p();return t(e,a(u,{placeholder:`Default`}),null),t(e,a(u,{placeholder:`With value`,defaultValue:`Hello world`}),null),t(e,a(u,{placeholder:`Invalid`,defaultValue:`Invalid value`,invalid:!0}),null),t(e,a(u,{placeholder:`Disabled`,disabled:!0}),null),t(e,a(u,{placeholder:`Disabled with value`,defaultValue:`Read only`,disabled:!0}),null),e})()},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal("Controlled value");
    return <div style={{
      display: "grid",
      gap: "12px",
      width: "280px"
    }}>
        <TextareaV2 value={value()} onInput={e => setValue(e.currentTarget.value)} placeholder="Type here…" />
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
        <TextareaV2 placeholder="Text" />
        <FieldV2.Suffix>Suffix</FieldV2.Suffix>
      </FieldV2>
      <FieldV2 invalid>
        <FieldV2.Label>Label</FieldV2.Label>
        <FieldV2.Prefix>Prefix</FieldV2.Prefix>
        <TextareaV2 placeholder="Text" defaultValue="Invalid value" />
        <FieldV2.Suffix>Suffix</FieldV2.Suffix>
      </FieldV2>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "20px",
    width: "280px"
  }}>
      <TextareaV2 placeholder="Default" />
      <TextareaV2 placeholder="With value" defaultValue="Hello world" />
      <TextareaV2 placeholder="Invalid" defaultValue="Invalid value" invalid />
      <TextareaV2 placeholder="Disabled" disabled />
      <TextareaV2 placeholder="Disabled with value" defaultValue="Read only" disabled />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`Controlled`,`Field`,`States`]}))();export{_ as Controlled,v as Field,g as Playground,y as States,b as __namedExportsOrder,h as default};