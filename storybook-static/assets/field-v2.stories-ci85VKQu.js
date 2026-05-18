import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,J as n,K as r,W as i,X as a,Z as o,_t as s,at as c,ct as l,et as u,ft as d,gt as f,ht as p,lt as m,ot as h,pt as g,q as _,rt as v,ut as y,yt as b}from"./iframe-hOlr1WQH.js";import{n as x,t as S}from"./inline-input-v2--Ya8N9Ue.js";import{n as C,t as w}from"./text-input-v2-BCYCJYAE.js";import{n as T,t as E}from"./textarea-v2-B8M4M1tM.js";var D=e((()=>{}));function O(){let e=b(z);if(!e)throw Error(`Field subcomponents must be used within <Field>`);return e}function k(e){let[r,i]=s(e,[`invalid`,`class`,`classList`,`children`]),a=`field-control-${y()}`,c=`field-label-${y()}`,l=`field-prefix-${y()}`,u=`field-suffix-${y()}`,[d,p]=m(0),[_,b]=m(0),x,S={controlId:a,labelId:c,prefixId:l,suffixId:u,invalid:()=>!!r.invalid,registerPrefix:()=>p(e=>e+1),unregisterPrefix:()=>p(e=>Math.max(0,e-1)),registerSuffix:()=>b(e=>e+1),unregisterSuffix:()=>b(e=>Math.max(0,e-1)),getDescribedBy:()=>{let e=[];return d()>0&&e.push(l),_()>0&&e.push(u),e.length>0?e.join(` `):void 0}},C=()=>{let e=x;if(!e)return;let t=e.querySelector(B);if(!t)return;let n=t.closest(`[data-component='text-input-v2'], [data-component='textarea-v2'], [data-component='inline-input-v2']`);t.id=a,t.setAttribute(`aria-labelledby`,c);let r=S.getDescribedBy();r?t.setAttribute(`aria-describedby`,r):t.removeAttribute(`aria-describedby`),S.invalid()?(t.setAttribute(`aria-invalid`,`true`),n?.setAttribute(`data-invalid`,``)):(t.removeAttribute(`aria-invalid`),n?.removeAttribute(`data-invalid`))};return f(()=>{C()}),h(()=>{d(),_(),r.invalid,C()}),v(z.Provider,{value:S,get children(){var e=F(),a=x;return typeof a==`function`?o(a,e):x=e,n(e,g(i,{"data-component":`field-v2`,get"data-invalid"(){return r.invalid?``:void 0},get classList(){return{...r.classList,[r.class??``]:!!r.class}}}),!1,!0),t(e,()=>r.children),e}})}function A(){return I()}function j(e){let[r,i]=s(e,[`class`,`classList`,`children`,`info`,`infoLabel`]),a=O();return(()=>{var e=R(),o=e.firstChild;return n(e,g(i,{get id(){return a.labelId},get for(){return a.controlId},"data-slot":`field-v2-label`,get classList(){return{...r.classList,[r.class??``]:!!r.class}}}),!1,!0),t(o,()=>r.children),t(e,v(u,{get when(){return r.info!=null||r.infoLabel},get children(){var e=L();return t(e,v(A,{})),l(t=>{var n=r.infoLabel??(typeof r.info==`string`?r.info:`More information`),i=typeof r.info==`string`?r.info:void 0;return n!==t.e&&_(e,`aria-label`,t.e=n),i!==t.t&&_(e,`title`,t.t=i),t},{e:void 0,t:void 0}),e}}),null),e})()}function M(e){let[r,i]=s(e,[`class`,`classList`,`children`]),a=O();return f(()=>{a.registerPrefix(),p(()=>a.unregisterPrefix())}),(()=>{var e=F();return n(e,g(i,{get id(){return a.prefixId},"data-slot":`field-v2-prefix`,get classList(){return{...r.classList,[r.class??``]:!!r.class}}}),!1,!0),t(e,()=>r.children),e})()}function N(e){let[r,i]=s(e,[`class`,`classList`,`children`]),a=O();return f(()=>{a.registerSuffix(),p(()=>a.unregisterSuffix())}),(()=>{var e=F();return n(e,g(i,{get id(){return a.suffixId},"data-slot":`field-v2-suffix`,get classList(){return{...r.classList,[r.class??``]:!!r.class}}}),!1,!0),t(e,()=>r.children),e})()}function P(e){let[r,i]=s(e,[`class`,`classList`,`children`]);return(()=>{var e=F();return n(e,g(i,{"data-slot":`field-v2-control`,get classList(){return{...r.classList,[r.class??``]:!!r.class}}}),!1,!0),t(e,()=>r.children),e})()}var F,I,L,R,z,B,V,H,U=e((()=>{i(),d(),D(),F=a(`<div>`),I=a(`<svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg aria-hidden=true><rect x=2.5 y=2.5 width=11 height=11 rx=1.5 stroke=currentColor stroke-width=1></rect><path d="M8 7.25V11M8 5.25V5.5"stroke=currentColor stroke-width=1 stroke-linecap=round>`),L=a(`<button type=button data-slot=field-v2-label-info>`),R=a(`<label><span data-slot=field-v2-label-text>`),z=c(),B=[`[data-slot='text-input-v2-input']`,`[data-slot='textarea-v2-textarea']`,`[data-slot='inline-input-v2-input']`].join(`, `),V=Object.assign(k,{Label:j,Prefix:M,Suffix:N,Control:P}),H=V})),W,G,K,q,J,Y,X,Z,Q,$;e((()=>{i(),d(),U(),x(),C(),T(),W=a(`<div style=width:280px>`),G='### Overview\nComposable field layout for TextInput, Textarea, and InlineInput v2.\n\n### Usage\n```tsx\n<Field invalid>\n  <Field.Label info="Helper">Label</Field.Label>\n  <Field.Prefix>Prefix</Field.Prefix>\n  <Field.Control>\n    <TextInputV2 placeholder="Text" />\n  </Field.Control>\n  <Field.Suffix>Suffix</Field.Suffix>\n</Field>\n```\n\nOmit `Field.Control` and place the input directly inside `Field` — a11y props are merged automatically.\n\n### API\n- `Field`: `invalid` propagates to the control.\n- `Field.Label`: `info` / `infoLabel` for the optional info button.\n- `Field.Prefix` / `Field.Suffix`: helper copy above / below the control.\n- `Field.Control`: optional wrapper (marker only).\n',K={title:`UI V2/Field`,id:`components-field-v2`,subcomponents:{Label:H.Label,Prefix:H.Prefix,Suffix:H.Suffix,Control:H.Control},tags:[`autodocs`],parameters:{frameHeight:`500px`,frameBackground:`#fff`,docs:{description:{component:G}}}},q={render:()=>(()=>{var e=W();return t(e,v(H,{get children(){return[v(H.Label,{info:`Additional context`,children:`Label`}),v(H.Prefix,{children:`Prefix`}),v(H.Control,{get children(){return v(w,{placeholder:`Text`,showCopyButton:!0})}}),v(H.Suffix,{children:`Suffix`})]}})),e})()},J={render:()=>(()=>{var e=W();return t(e,v(H,{get children(){return[v(H.Label,{children:`Label`}),v(H.Prefix,{children:`Prefix`}),v(w,{placeholder:`Text`}),v(H.Suffix,{children:`Suffix`})]}})),e})()},Y={render:()=>(()=>{var e=W();return t(e,v(H,{get children(){return[v(H.Label,{children:`Label`}),v(H.Prefix,{children:`Prefix`}),v(E,{placeholder:`Text`}),v(H.Suffix,{children:`Suffix`})]}})),e})()},X={render:()=>(()=>{var e=W();return t(e,v(H,{get children(){return[v(H.Label,{children:`Label`}),v(H.Prefix,{children:`Prefix`}),v(S,{prefix:`USD`,placeholder:`0.00`,numeric:!0,showCopyButton:!0}),v(H.Suffix,{children:`Suffix`})]}})),e})()},Z={render:()=>(()=>{var e=W();return t(e,v(H,{invalid:!0,get children(){return[v(H.Label,{children:`Label`}),v(H.Prefix,{children:`Prefix`}),v(w,{placeholder:`Text`,defaultValue:`Invalid`,showCopyButton:!0}),v(H.Suffix,{children:`Suffix`})]}})),e})()},Q={render:()=>{let[e,n]=m(``);return(()=>{var i=W();return t(i,v(H,{get children(){return[v(H.Label,{children:`Amount`}),v(H.Control,{get children(){return v(w,{placeholder:`0.00`,get value(){return e()},onInput:e=>n(e.currentTarget.value),numeric:!0})}}),v(H.Suffix,{get children(){return r(()=>!!e())()?`Entered: ${e()}`:`Suffix`}})]}})),i})()}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "280px"
  }}>
      <Field>
        <Field.Label info="Additional context">Label</Field.Label>
        <Field.Prefix>Prefix</Field.Prefix>
        <Field.Control>
          <TextInputV2 placeholder="Text" showCopyButton />
        </Field.Control>
        <Field.Suffix>Suffix</Field.Suffix>
      </Field>
    </div>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`TextInputExample`,`TextInputDirectChild`,`TextareaExample`,`InlineInputExample`,`Invalid`,`Controlled`]}))();export{Q as Controlled,X as InlineInputExample,Z as Invalid,J as TextInputDirectChild,q as TextInputExample,Y as TextareaExample,$ as __namedExportsOrder,K as default};