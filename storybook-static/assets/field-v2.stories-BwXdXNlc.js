import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,K as n,W as r,X as i,dt as a,it as o,mt as s}from"./iframe-DZLDNB0z.js";import{n as c,t as l}from"./field-v2-CTehACi5.js";import{n as u,t as d}from"./inline-input-v2-CtnnU8Oi.js";import{n as f,t as p}from"./text-input-v2-CSlQy32h.js";import{n as m,t as h}from"./textarea-v2-CDNaom8B.js";var g,_,v,y,b,x,S,C,w,T;e((()=>{r(),s(),c(),u(),f(),m(),g=i(`<div style=width:280px>`),_='### Overview\nComposable field layout for TextInput, Textarea, and InlineInput v2.\n\n### Usage\n```tsx\n<Field invalid>\n  <Field.Label tooltip="Helper">Label</Field.Label>\n  <Field.Prefix>Prefix</Field.Prefix>\n  <Field.Control>\n    <TextInputV2 placeholder="Text" />\n  </Field.Control>\n  <Field.Suffix>Suffix</Field.Suffix>\n</Field>\n```\n\nOmit `Field.Control` and place the input directly inside `Field` — a11y props are merged automatically.\n\n### API\n- `Field`: `invalid` propagates to the control.\n- `Field.Label`: `tooltip` shows the info icon with tooltip text.\n- `Field.Prefix` / `Field.Suffix`: helper copy above / below the control.\n- `Field.Control`: optional wrapper (marker only).\n',v={title:`UI V2/Field`,id:`components-field-v2`,subcomponents:{Label:l.Label,Prefix:l.Prefix,Suffix:l.Suffix,Control:l.Control},tags:[`autodocs`],parameters:{frameHeight:`500px`,frameBackground:`#fff`,docs:{description:{component:_}}}},y={render:()=>(()=>{var e=g();return t(e,o(l,{get children(){return[o(l.Label,{tooltip:`Additional context`,children:`Label`}),o(l.Prefix,{children:`Prefix`}),o(l.Control,{get children(){return o(p,{placeholder:`Text`,showCopyButton:!0})}}),o(l.Suffix,{children:`Suffix`})]}})),e})()},b={render:()=>(()=>{var e=g();return t(e,o(l,{get children(){return[o(l.Label,{children:`Label`}),o(l.Prefix,{children:`Prefix`}),o(p,{placeholder:`Text`}),o(l.Suffix,{children:`Suffix`})]}})),e})()},x={render:()=>(()=>{var e=g();return t(e,o(l,{get children(){return[o(l.Label,{children:`Label`}),o(l.Prefix,{children:`Prefix`}),o(h,{placeholder:`Text`}),o(l.Suffix,{children:`Suffix`})]}})),e})()},S={render:()=>(()=>{var e=g();return t(e,o(l,{get children(){return[o(l.Label,{children:`Label`}),o(l.Prefix,{children:`Prefix`}),o(d,{prefix:`USD`,placeholder:`0.00`,numeric:!0,showCopyButton:!0}),o(l.Suffix,{children:`Suffix`})]}})),e})()},C={render:()=>(()=>{var e=g();return t(e,o(l,{invalid:!0,get children(){return[o(l.Label,{children:`Label`}),o(l.Prefix,{children:`Prefix`}),o(p,{placeholder:`Text`,defaultValue:`Invalid`,showCopyButton:!0}),o(l.Suffix,{children:`Suffix`})]}})),e})()},w={render:()=>{let[e,r]=a(``);return(()=>{var i=g();return t(i,o(l,{get children(){return[o(l.Label,{children:`Amount`}),o(l.Control,{get children(){return o(p,{placeholder:`0.00`,get value(){return e()},onInput:e=>r(e.currentTarget.value),numeric:!0})}}),o(l.Suffix,{get children(){return n(()=>!!e())()?`Entered: ${e()}`:`Suffix`}})]}})),i})()}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "280px"
  }}>
      <Field>
        <Field.Label tooltip="Additional context">Label</Field.Label>
        <Field.Prefix>Prefix</Field.Prefix>
        <Field.Control>
          <TextInputV2 placeholder="Text" showCopyButton />
        </Field.Control>
        <Field.Suffix>Suffix</Field.Suffix>
      </Field>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "280px"
  }}>
      <Field>
        <Field.Label>Label</Field.Label>
        <Field.Prefix>Prefix</Field.Prefix>
        <TextInputV2 placeholder="Text" />
        <Field.Suffix>Suffix</Field.Suffix>
      </Field>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "280px"
  }}>
      <Field>
        <Field.Label>Label</Field.Label>
        <Field.Prefix>Prefix</Field.Prefix>
        <TextareaV2 placeholder="Text" />
        <Field.Suffix>Suffix</Field.Suffix>
      </Field>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "280px"
  }}>
      <Field>
        <Field.Label>Label</Field.Label>
        <Field.Prefix>Prefix</Field.Prefix>
        <InlineInputV2 prefix="USD" placeholder="0.00" numeric showCopyButton />
        <Field.Suffix>Suffix</Field.Suffix>
      </Field>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "280px"
  }}>
      <Field invalid>
        <Field.Label>Label</Field.Label>
        <Field.Prefix>Prefix</Field.Prefix>
        <TextInputV2 placeholder="Text" defaultValue="Invalid" showCopyButton />
        <Field.Suffix>Suffix</Field.Suffix>
      </Field>
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal("");
    return <div style={{
      width: "280px"
    }}>
        <Field>
          <Field.Label>Amount</Field.Label>
          <Field.Control>
            <TextInputV2 placeholder="0.00" value={value()} onInput={e => setValue(e.currentTarget.value)} numeric />
          </Field.Control>
          <Field.Suffix>{value() ? \`Entered: \${value()}\` : "Suffix"}</Field.Suffix>
        </Field>
      </div>;
  }
}`,...w.parameters?.docs?.source}}},T=[`TextInputExample`,`TextInputDirectChild`,`TextareaExample`,`InlineInputExample`,`Invalid`,`Controlled`]}))();export{w as Controlled,S as InlineInputExample,C as Invalid,b as TextInputDirectChild,y as TextInputExample,x as TextareaExample,T as __namedExportsOrder,v as default};