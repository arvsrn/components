import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,J as n,K as r,W as i,X as a,Z as o,_t as s,at as c,ft as l,lt as u,pt as d,rt as f,st as p,yt as m}from"./iframe-hOlr1WQH.js";var h=e((()=>{}));function g(){let e=m(S);if(!e)throw Error(`SegmentedControlItemV2 must be used inside SegmentedControlV2`);return e}function _(e){let r=p(()=>Object.hasOwn(e,`value`)),[i,a]=s(d({allowDeselect:!1,disabled:!1},e),[`class`,`classList`,`children`,`value`,`defaultValue`,`onChange`,`allowDeselect`,`disabled`,`ref`]),[c,l]=u(i.defaultValue??null),m=p(()=>r()?i.value??null:c()),h=e=>{r()||l(e),i.onChange?.(e)},g={selected:m,groupDisabled:()=>!!i.disabled,select:e=>{h(e)},clearIfAllowed:e=>{!i.allowDeselect||m()!==e||h(null)},focusNext:(e,t)=>{let n=e.closest(`[data-slot="segmented-control-v2"]`);if(!n)return;let r=Array.from(n.querySelectorAll(`button[data-slot="segmented-control-v2-item"]`)).filter(e=>!e.disabled);r[r.indexOf(e)+t]?.focus()}},_=e=>{let t=i.ref;typeof t==`function`?t(e):typeof t==`object`&&t&&`value`in t&&(t.value=e)};return f(S.Provider,{value:g,get children(){var e=b();return o(_,e),n(e,d(a,{role:`group`,"data-component":`segmented-control-v2`,"data-slot":`segmented-control-v2`,get classList(){return{...i.classList,[i.class??``]:!!i.class}}}),!1,!0),t(e,()=>i.children),e}})}function v(e,t){typeof e==`function`&&e(t)}function y(e){let[r,i]=s(d({disabled:!1},e),[`class`,`classList`,`children`,`value`,`disabled`,`onClick`,`onKeyDown`]),a=g(),o=p(()=>a.selected()===r.value),c=p(()=>a.groupDisabled()||!!r.disabled),l=e=>{v(r.onClick,e),!(e.defaultPrevented||c())&&(o()?a.clearIfAllowed(r.value):a.select(r.value))},u=e=>{if(v(r.onKeyDown,e),e.defaultPrevented||c())return;let t=e.currentTarget;if(e.key===`ArrowRight`)e.preventDefault(),a.focusNext(t,1);else if(e.key===`ArrowLeft`)e.preventDefault(),a.focusNext(t,-1);else if(e.key===`Home`)e.preventDefault(),(t.closest(`[data-slot="segmented-control-v2"]`)?.querySelector(`button[data-slot="segmented-control-v2-item"]:not(:disabled)`))?.focus();else if(e.key===`End`){e.preventDefault();let n=t.closest(`[data-slot="segmented-control-v2"]`)?.querySelectorAll(`button[data-slot="segmented-control-v2-item"]:not(:disabled)`);(n?.[n.length-1])?.focus()}};return(()=>{var e=x(),a=e.firstChild;return n(e,d(i,{type:`button`,"data-slot":`segmented-control-v2-item`,get"data-pressed"(){return o()?``:void 0},get"aria-pressed"(){return o()},get disabled(){return c()},get classList(){return{...r.classList,[r.class??``]:!!r.class}},onClick:l,onKeyDown:u}),!1,!0),t(a,()=>r.children),e})()}var b,x,S,C=e((()=>{i(),l(),h(),b=a(`<div>`),x=a(`<button><span data-slot=segmented-control-v2-item-label>`),S=c()})),w,T,E,D,O,k,A,j,M,N;e((()=>{i(),l(),C(),w=a(`<div style=display:grid;gap:12px;justify-items:start><div style=font-family:var(--font-family-sans);font-size:12px;color:#808080>Value: `),T=a(`<div style=width:320px>`),E='### Overview\nSingle-select segmented control with **custom state** and native `<button type="button">` segments.\n\n### Accessibility (toggle group style)\n- Root: `role="group"` — pass `aria-label` or `aria-labelledby` (standard div attributes).\n- Segments: `aria-pressed` reflects selection; `data-pressed` is set for styling.\n- **Arrow Left / Right** move focus between enabled segments; **Home** / **End** focus first / last enabled segment.\n\n### API\n- **SegmentedControlV2:** `value?`, `defaultValue?`, `onChange?(value: string | null)`, `allowDeselect?` (default `false`), `disabled?`, plus native div attributes (`class`, `aria-*`, `ref`, etc.).\n- **SegmentedControlItemV2:** `value` (string), `disabled?`, `children` (label), plus other button attributes except `type`.\n\n### Behavior\n- With default `allowDeselect={false}`, clicking the active segment does nothing; selection is never cleared.\n- With `allowDeselect`, clicking the active segment clears selection and `onChange(null)` runs.\n\n### Theming\n- `data-slot="segmented-control-v2"` on the track; items use `data-slot="segmented-control-v2-item"` and `data-pressed` when selected.\n',D={title:`UI V2/SegmentedControl`,id:`components-segmented-control-v2`,component:_,tags:[`autodocs`],parameters:{docs:{description:{component:E}}}},O={render:()=>f(_,{defaultValue:`a`,"aria-label":`Demo segment control`,get children(){return[f(y,{value:`a`,children:`Label`}),f(y,{value:`b`,children:`Label`}),f(y,{value:`c`,children:`Label`}),f(y,{value:`d`,children:`Label`})]}})},k={render:()=>{let[e,n]=u(`b`);return(()=>{var r=w(),i=r.firstChild;return i.firstChild,t(r,f(_,{get value(){return e()},onChange:n,"aria-label":`View mode`,get children(){return[f(y,{value:`a`,children:`List`}),f(y,{value:`b`,children:`Grid`}),f(y,{value:`c`,children:`Board`})]}}),i),t(i,e,null),r})()}},A={render:()=>{let[e,n]=u(`a`);return(()=>{var i=w(),a=i.firstChild;return a.firstChild,t(i,f(_,{get value(){return e()},allowDeselect:!0,onChange:n,"aria-label":`Optional selection`,get children(){return[f(y,{value:`a`,children:`A`}),f(y,{value:`b`,children:`B`}),f(y,{value:`c`,children:`C`})]}}),a),t(a,(()=>{var t=r(()=>e()===null);return()=>t()?`none`:e()})(),null),i})()}},j={render:()=>f(_,{defaultValue:`a`,"aria-label":`Segments with one disabled`,get children(){return[f(y,{value:`a`,children:`One`}),f(y,{value:`b`,disabled:!0,children:`Two`}),f(y,{value:`c`,children:`Three`})]}})},M={render:()=>(()=>{var e=T();return t(e,f(_,{defaultValue:`x`,class:`segmented-control-v2--full-width`,"aria-label":`Full width`,get children(){return[f(y,{value:`x`,children:`A`}),f(y,{value:`y`,children:`B`}),f(y,{value:`z`,children:`C`})]}})),e})()},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <SegmentedControlV2 defaultValue="a" aria-label="Demo segment control">
      <SegmentedControlItemV2 value="a">Label</SegmentedControlItemV2>
      <SegmentedControlItemV2 value="b">Label</SegmentedControlItemV2>
      <SegmentedControlItemV2 value="c">Label</SegmentedControlItemV2>
      <SegmentedControlItemV2 value="d">Label</SegmentedControlItemV2>
    </SegmentedControlV2>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal("b");
    return <div style={{
      display: "grid",
      gap: "12px",
      "justify-items": "start"
    }}>
        <SegmentedControlV2 value={value()} onChange={setValue} aria-label="View mode">
          <SegmentedControlItemV2 value="a">List</SegmentedControlItemV2>
          <SegmentedControlItemV2 value="b">Grid</SegmentedControlItemV2>
          <SegmentedControlItemV2 value="c">Board</SegmentedControlItemV2>
        </SegmentedControlV2>
        <div style={{
        "font-family": "var(--font-family-sans)",
        "font-size": "12px",
        color: "#808080"
      }}>
          Value: {value()}
        </div>
      </div>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal<string | null>("a");
    return <div style={{
      display: "grid",
      gap: "12px",
      "justify-items": "start"
    }}>
        <SegmentedControlV2 value={value()} allowDeselect onChange={setValue} aria-label="Optional selection">
          <SegmentedControlItemV2 value="a">A</SegmentedControlItemV2>
          <SegmentedControlItemV2 value="b">B</SegmentedControlItemV2>
          <SegmentedControlItemV2 value="c">C</SegmentedControlItemV2>
        </SegmentedControlV2>
        <div style={{
        "font-family": "var(--font-family-sans)",
        "font-size": "12px",
        color: "#808080"
      }}>
          Value: {value() === null ? "none" : value()}
        </div>
      </div>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <SegmentedControlV2 defaultValue="a" aria-label="Segments with one disabled">
      <SegmentedControlItemV2 value="a">One</SegmentedControlItemV2>
      <SegmentedControlItemV2 value="b" disabled>
        Two
      </SegmentedControlItemV2>
      <SegmentedControlItemV2 value="c">Three</SegmentedControlItemV2>
    </SegmentedControlV2>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "320px"
  }}>
      <SegmentedControlV2 defaultValue="x" class="segmented-control-v2--full-width" aria-label="Full width">
        <SegmentedControlItemV2 value="x">A</SegmentedControlItemV2>
        <SegmentedControlItemV2 value="y">B</SegmentedControlItemV2>
        <SegmentedControlItemV2 value="z">C</SegmentedControlItemV2>
      </SegmentedControlV2>
    </div>
}`,...M.parameters?.docs?.source}}},N=[`Basic`,`Controlled`,`AllowDeselect`,`WithDisabledItem`,`FullWidth`]}))();export{A as AllowDeselect,O as Basic,k as Controlled,M as FullWidth,j as WithDisabledItem,N as __namedExportsOrder,D as default};