import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,K as n,U as r,W as i,X as a,_t as o,ct as s,et as c,ft as l,lt as u,pt as d,q as f,rt as p,st as m}from"./iframe-hOlr1WQH.js";import{t as h}from"./UGE6PPGT-z0U6Zv2D.js";import{t as g}from"./collapsible-JEdMuPGf.js";import{n as _,t as v}from"./button-v2-CyFpZw3H.js";var y=e((()=>{}));function b(){return w()}function x(){return(()=>{var e=T();return e.firstChild.firstChild.nextSibling,e})()}function S(){return E()}function C(e){let[n,r]=o(e,[`title`,`subtitle`,`suffix`,`loading`,`open`,`defaultOpen`,`onOpenChange`,`subtitleHref`,`class`,`classList`]),i=m(()=>{let e=n.suffix;return e==null?!1:typeof e==`string`?e.length>0:!0});return p(h,d(r,{"data-component":`tool-error-card`,get open(){return n.open},get defaultOpen(){return n.defaultOpen},get onOpenChange(){return n.onOpenChange},get disabled(){return!i()},get"aria-busy"(){return n.loading?!0:void 0},get classList(){return{...n.classList,[n.class??``]:!!n.class}},get children(){return[p(h.Trigger,{as:`div`,role:`button`,"data-slot":`tool-error-card-trigger`,get children(){return[(()=>{var e=D();return t(e,p(c,{get when(){return n.loading},get fallback(){return p(b,{})},get children(){return p(x,{})}})),e})(),(()=>{var e=A(),r=e.firstChild,a=r.firstChild;return a.nextSibling,t(a,()=>n.title),t(r,p(c,{get when(){return n.subtitleHref},get fallback(){return(()=>{var e=M();return t(e,()=>n.subtitle),e})()},get children(){var e=O();return e.$$pointerdown=e=>e.stopPropagation(),e.$$click=e=>e.stopPropagation(),t(e,()=>n.subtitle),s(()=>f(e,`href`,n.subtitleHref)),e}}),null),t(r,p(c,{get when(){return i()},get children(){var e=k();return t(e,p(S,{})),e}}),null),e})()]}}),p(c,{get when(){return i()},get children(){return p(h.Content,{"data-slot":`tool-error-card-content`,get children(){var e=j();return t(e,()=>n.suffix),e}})}})]}}))}var w,T,E,D,O,k,A,j,M,N=e((()=>{i(),g(),l(),y(),w=a(`<svg data-slot=tool-error-card-ban width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg aria-hidden=true><path d="M3.44283 12.5575L12.5495 3.45081M14.4446 8.00011C14.4446 11.5593 11.5593 14.4446 8.00011 14.4446C4.44094 14.4446 1.55566 11.5593 1.55566 8.00011C1.55566 4.44094 4.44094 1.55566 8.00011 1.55566C11.5593 1.55566 14.4446 4.44094 14.4446 8.00011Z"stroke=currentColor>`),T=a(`<svg data-slot=tool-error-card-loader width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg aria-hidden=true><g transform="translate(8 8)"><circle r=5.9 fill=none stroke=var(--icon-icon-base) stroke-width=1 stroke-opacity=0.3 transform=rotate(-90)></circle><circle r=5.9 fill=none stroke=var(--icon-icon-base) stroke-width=1 pathLength=100 stroke-dasharray="25 75"transform=rotate(-90)>`),E=a(`<svg data-slot=tool-error-card-chevron width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg aria-hidden=true><path d="M5.90795 9.62425C5.61628 9.81865 5.25 9.57825 5.25 9.19235V4.80837C5.25 4.42247 5.61628 4.18204 5.90795 4.37648L9.1959 6.56846C9.48535 6.7614 9.48535 7.2393 9.1959 7.43224L5.90795 9.62425Z"fill=currentColor>`),D=a(`<span data-slot=tool-error-card-icon-wrap>`),O=a(`<a data-slot=tool-error-card-subtitle>`),k=a(`<span data-slot=tool-error-card-chevron-wrap>`),A=a(`<div data-slot=tool-error-card-main><div data-slot=tool-error-card-labels><span data-slot=tool-error-card-title></span><span data-slot=tool-error-card-sep aria-hidden=true>·`),j=a(`<div data-slot=tool-error-card-suffix>`),M=a(`<span data-slot=tool-error-card-subtitle>`),r([`click`,`pointerdown`])})),P,F,I,L,R,z,B,V,H;e((()=>{i(),l(),_(),N(),P=a(`<div style=display:flex;flex-direction:column;gap:24px;max-width:420px>`),F='### Overview\nCompact tool error row with optional expandable detail, aligned to the OpenCode design system spec.\n\n### API\n- `ToolErrorCardV2` wraps Kobalte `Collapsible` directly. Pass `open`, `defaultOpen`, and `onOpenChange` like any disclosure (controlled when `open` is defined).\n- Without a non-empty `suffix`, the card is not expandable (`disabled` on the collapsible root).\n\n### Theming\n- Uses `data-component="tool-error-card"` and slot attributes; colors are CSS variables on the root (`--tec-*`).\n',I={title:`UI V2/ToolErrorCard`,id:`components-tool-error-card-v2`,component:C,tags:[`autodocs`],parameters:{frameBackground:`#fff`,layout:`padded`,docs:{description:{component:F}}}},L={args:{title:`Read`,subtitle:`Permission denied`,suffix:`The tool could not access the requested path.`,defaultOpen:!1},render:e=>p(C,e)},R={args:{title:`Read`,subtitle:`Working`,suffix:`Details appear when the tool finishes.`,loading:!0,defaultOpen:!1},render:e=>p(C,e)},z={args:{title:`Task`,subtitle:`View logs`,subtitleHref:`https://example.com`,suffix:`Subagent exited with code 1.`,defaultOpen:!1},render:e=>p(C,e)},B={args:{title:`List`,subtitle:`No detail`,defaultOpen:!1},render:e=>p(C,e)},V={render:()=>{let[e,r]=u(!1);return(()=>{var i=P();return t(i,p(v,{type:`button`,classList:{"w-fit":!0},onClick:()=>r(e=>!e),get children(){return[`Toggle from outside: `,n(()=>e()?`Open`:`Closed`)]}}),null),t(i,p(C,{title:`Grep`,subtitle:`Timeout`,suffix:`Operation exceeded 30s.`,get open(){return e()},onOpenChange:r}),null),i})()}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Read",
    subtitle: "Permission denied",
    suffix: "The tool could not access the requested path.",
    defaultOpen: false
  } satisfies ToolErrorCardV2Props,
  render: (args: ToolErrorCardV2Props) => <ToolErrorCardV2 {...args} />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Read",
    subtitle: "Working",
    suffix: "Details appear when the tool finishes.",
    loading: true,
    defaultOpen: false
  } satisfies ToolErrorCardV2Props,
  render: (args: ToolErrorCardV2Props) => <ToolErrorCardV2 {...args} />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Task",
    subtitle: "View logs",
    subtitleHref: "https://example.com",
    suffix: "Subagent exited with code 1.",
    defaultOpen: false
  } satisfies ToolErrorCardV2Props,
  render: (args: ToolErrorCardV2Props) => <ToolErrorCardV2 {...args} />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    title: "List",
    subtitle: "No detail",
    defaultOpen: false
  } satisfies ToolErrorCardV2Props,
  render: (args: ToolErrorCardV2Props) => <ToolErrorCardV2 {...args} />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = createSignal(false);
    return <div style={{
      display: "flex",
      "flex-direction": "column",
      gap: "24px",
      "max-width": "420px"
    }}>
        <ButtonV2 type="button" classList={{
        "w-fit": true
      }} onClick={() => setOpen(o => !o)}>
          Toggle from outside: {open() ? "Open" : "Closed"}
        </ButtonV2>
        <ToolErrorCardV2 title="Grep" subtitle="Timeout" suffix="Operation exceeded 30s." open={open()} onOpenChange={setOpen} />
      </div>;
  }
}`,...V.parameters?.docs?.source}}},H=[`Default`,`Loading`,`SubtitleLink`,`NoSuffixDisabled`,`Controlled`]}))();export{V as Controlled,L as Default,R as Loading,B as NoSuffixDisabled,z as SubtitleLink,H as __namedExportsOrder,I as default};