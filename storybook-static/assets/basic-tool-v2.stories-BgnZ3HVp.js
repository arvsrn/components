import{n as e}from"./chunk-DnJy8xQt.js";import{$ as t,G as n,K as r,U as i,W as a,X as o,Y as s,ct as c,dt as l,ht as u,it as d,lt as f,mt as p,tt as m,yt as h}from"./iframe-DZLDNB0z.js";import{t as g}from"./UGE6PPGT-D9L2ZPFS.js";import{t as _}from"./collapsible-DuJ8MdZi.js";import{n as v,t as y}from"./diff-changes-v2-DZiov8bk.js";import{n as b,t as x}from"./text-shimmer-v2-CsB3-vQw.js";var S=e((()=>{}));function C(){return T()}function w(e){let[i,a]=h(e,[`trigger`,`children`,`status`,`open`,`defaultOpen`,`onOpenChange`,`onSubtitleClick`,`class`,`classList`]),o=c(()=>i.status===`pending`||i.status===`running`),l=c(()=>i.children!=null),p=c(()=>l()&&!o());return d(g,u(a,{"data-component":`basic-tool-v2`,get open(){return i.open},get defaultOpen(){return i.defaultOpen},onOpenChange:e=>{o()||i.onOpenChange?.(e)},get disabled(){return!p()},get classList(){return{...i.classList,[i.class??``]:!!i.class}},get children(){return[d(g.Trigger,{as:`div`,role:`button`,"data-slot":`basic-tool-v2-trigger`,get children(){var e=D();return n(e,d(m,{get when(){return r(()=>!!P(i.trigger))()&&i.trigger},get fallback(){return i.trigger},children:e=>[(()=>{var t=k();return n(t,d(x,{get text(){return e().title},get active(){return o()}})),t})(),d(m,{get when(){return r(()=>!o())()&&e().subtitle},get children(){return[A(),(()=>{var t=j();return t.$$click=e=>{i.onSubtitleClick&&(e.stopPropagation(),i.onSubtitleClick())},n(t,()=>e().subtitle),f(e=>s(t,i.onSubtitleClick?{cursor:`pointer`}:void 0,e)),t})()]}}),d(m,{get when(){return r(()=>!o())()&&e().args?.length},get children(){return d(t,{get each(){return e().args},children:e=>(()=>{var t=N();return n(t,e),t})()})}}),d(m,{get when(){return r(()=>!o())()&&e().changes},get children(){var t=M();return n(t,d(y,{get changes(){return e().changes}})),t}}),d(m,{get when(){return r(()=>!o())()&&e().action},get children(){return e().action}})]}),null),n(e,d(m,{get when(){return p()},get children(){var e=E();return n(e,d(C,{})),e}}),null),e}}),d(m,{get when(){return p()},get children(){return d(g.Content,{"data-slot":`basic-tool-v2-content`,get children(){var e=O();return n(e,()=>i.children),e}})}})]}}))}var T,E,D,O,k,A,j,M,N,P,F=e((()=>{a(),_(),p(),v(),b(),S(),T=o(`<svg data-slot=basic-tool-v2-chevron width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg aria-hidden=true><path d="M6.75194 10.6243C6.41861 10.8187 6 10.5783 6 10.1924V5.80837C6 5.42247 6.41861 5.18204 6.75194 5.37648L10.5096 7.56846C10.8404 7.7614 10.8404 8.2393 10.5096 8.43224L6.75194 10.6243Z"fill=currentColor>`),E=o(`<span data-slot=basic-tool-v2-chevron-wrap>`),D=o(`<div data-slot=basic-tool-v2-labels>`),O=o(`<div data-slot=basic-tool-v2-content-inner>`),k=o(`<span data-slot=basic-tool-v2-title>`),A=o(`<span data-slot=basic-tool-v2-sep aria-hidden=true>·`),j=o(`<span data-slot=basic-tool-v2-subtitle>`),M=o(`<span data-slot=basic-tool-v2-diff>`),N=o(`<span data-slot=basic-tool-v2-arg>`),P=e=>typeof e==`object`&&!!e&&`title`in e&&(typeof Node>`u`||!(e instanceof Node)),i([`click`])})),I,L,R,z,B,V,H,U,W,G,K;e((()=>{a(),p(),F(),I=o(`<span style=color:#161616;font-size:13px;font-weight:440>Custom trigger content`),L=o(`<div style=display:flex;flex-direction:column;gap:16px;max-width:420px><button type=button style="padding:4px 10px;font-size:12px;border-radius:6px;border:1px solid rgba(0,0,0,0.15);background:#fff;color:#161616;cursor:pointer">Toggle from outside: `),R='### Overview\nCompact collapsible tool row showing title, subtitle, args, and diff changes, with an expand/collapse chevron.\n\n### API\n- `BasicToolV2` wraps Kobalte `Collapsible`. Pass `open`, `defaultOpen`, and `onOpenChange` for controlled/uncontrolled disclosure.\n- `trigger` accepts either a `BasicToolV2TriggerTitle` object (title, subtitle, args, changes) or arbitrary JSX.\n- When `status` is `"pending"` or `"running"`, subtitle/args/chevron hide and the title shows a shimmer animation.\n- Pass `children` for expandable detail content.\n\n### Theming\n- Uses `data-component="basic-tool-v2"` and slot attributes; colors via `--bt-*` CSS variables.\n',z={title:`UI V2/BasicTool`,id:`components-basic-tool-v2`,component:w,tags:[`autodocs`],parameters:{frameBackground:`#fff`,layout:`padded`,docs:{description:{component:R}}}},B={render:()=>d(w,{trigger:{title:`Read`,subtitle:`src/index.ts`,args:[`lines=1-50`],changes:{additions:12,deletions:3}},defaultOpen:!1,children:`File content appears here.`})},V={render:()=>d(w,{trigger:{title:`Read`,subtitle:`src/index.ts`,args:[`lines=1-50`],changes:{additions:12,deletions:3}},defaultOpen:!0,children:`File content appears here.`})},H={render:()=>d(w,{trigger:{title:`Read`,subtitle:`src/index.ts`,args:[`lines=1-50`],changes:{additions:12,deletions:3}},status:`pending`})},U={render:()=>d(w,{trigger:{title:`Grep`,subtitle:`pattern=TODO`,args:[`recursive=true`]}})},W={render:()=>d(w,{get trigger(){return I()},children:`Expandable detail for custom trigger.`})},G={render:()=>{let[e,t]=l(!1);return(()=>{var r=L(),i=r.firstChild;return i.firstChild,i.$$click=()=>t(e=>!e),n(i,()=>e()?`Open`:`Closed`,null),n(r,d(w,{trigger:{title:`Write`,subtitle:`src/utils.ts`,changes:{additions:8,deletions:2}},get open(){return e()},onOpenChange:t,children:`Controlled content.`}),null),r})()}},i([`click`]),B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <BasicToolV2 trigger={{
    title: "Read",
    subtitle: "src/index.ts",
    args: ["lines=1-50"],
    changes: {
      additions: 12,
      deletions: 3
    }
  }} defaultOpen={false}>
      File content appears here.
    </BasicToolV2>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <BasicToolV2 trigger={{
    title: "Read",
    subtitle: "src/index.ts",
    args: ["lines=1-50"],
    changes: {
      additions: 12,
      deletions: 3
    }
  }} defaultOpen={true}>
      File content appears here.
    </BasicToolV2>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <BasicToolV2 trigger={{
    title: "Read",
    subtitle: "src/index.ts",
    args: ["lines=1-50"],
    changes: {
      additions: 12,
      deletions: 3
    }
  }} status="pending" />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <BasicToolV2 trigger={{
    title: "Grep",
    subtitle: "pattern=TODO",
    args: ["recursive=true"]
  }} />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <BasicToolV2 trigger={<span style={{
    color: "#161616",
    "font-size": "13px",
    "font-weight": "440"
  }}>Custom trigger content</span>}>
      Expandable detail for custom trigger.
    </BasicToolV2>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = createSignal(false);
    return <div style={{
      display: "flex",
      "flex-direction": "column",
      gap: "16px",
      "max-width": "420px"
    }}>
        <button type="button" onClick={() => setOpen(o => !o)} style={{
        padding: "4px 10px",
        "font-size": "12px",
        "border-radius": "6px",
        border: "1px solid rgba(0,0,0,0.15)",
        background: "#fff",
        color: "#161616",
        cursor: "pointer"
      }}>
          Toggle from outside: {open() ? "Open" : "Closed"}
        </button>
        <BasicToolV2 trigger={{
        title: "Write",
        subtitle: "src/utils.ts",
        changes: {
          additions: 8,
          deletions: 2
        }
      }} open={open()} onOpenChange={setOpen}>
          Controlled content.
        </BasicToolV2>
      </div>;
  }
}`,...G.parameters?.docs?.source}}},K=[`Default`,`Expanded`,`Pending`,`NoChildren`,`CustomTrigger`,`Controlled`]}))();export{G as Controlled,W as CustomTrigger,B as Default,V as Expanded,U as NoChildren,H as Pending,K as __namedExportsOrder,z as default};