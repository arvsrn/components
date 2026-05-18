import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,W as n,X as r,ft as i,lt as a,rt as o}from"./iframe-hOlr1WQH.js";import{n as s,t as c}from"./textarea-v2-B8M4M1tM.js";var l,u,d,f,p,m,h,g;e((()=>{n(),i(),s(),l=r(`<div style=display:grid;gap:12px;width:280px><div style=font-family:var(--font-family-sans);font-size:12px;color:var(--text-text-faint)>Value: `),u=r(`<div style=display:grid;gap:20px;width:280px>`),d="### Overview\nMultiline text field with the same neutral elevation, states, and tokens as TextInput v2.\n\n### API\n- Forwards native `textarea` props (`value`, `defaultValue`, `placeholder`, `disabled`, `name`, `rows`, etc.).\n- `invalid`: Error outline and danger text color.\n\n### States\n- **Hover**: neutral overlay on the raised surface.\n- **Focus** (`:focus-within`): focus outline, elevation removed.\n- **Invalid**: danger outline and text.\n- **Disabled**: 50% opacity.\n",f={title:`UI V2/Textarea`,id:`components-textarea-v2`,component:c,tags:[`autodocs`],parameters:{frameHeight:`400px`,frameBackground:`#fff`,docs:{description:{component:d}}},args:{placeholder:`Placeholder`,disabled:!1,invalid:!1,rows:3},argTypes:{disabled:{control:`boolean`},invalid:{control:`boolean`},placeholder:{control:`text`},rows:{control:{type:`number`,min:1,max:12}}}},p={},m={render:()=>{let[e,n]=a(`Controlled value`);return(()=>{var r=l(),i=r.firstChild;return i.firstChild,t(r,o(c,{get value(){return e()},onInput:e=>n(e.currentTarget.value),placeholder:`Type here…`}),i),t(i,e,null),r})()}},h={render:()=>(()=>{var e=u();return t(e,o(c,{placeholder:`Default`}),null),t(e,o(c,{placeholder:`With value`,defaultValue:`Hello world`}),null),t(e,o(c,{placeholder:`Invalid`,defaultValue:`Invalid value`,invalid:!0}),null),t(e,o(c,{placeholder:`Disabled`,disabled:!0}),null),t(e,o(c,{placeholder:`Disabled with value`,defaultValue:`Read only`,disabled:!0}),null),e})()},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Controlled`,`States`]}))();export{m as Controlled,p as Playground,h as States,g as __namedExportsOrder,f as default};