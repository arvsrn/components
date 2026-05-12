import{n as e}from"./chunk-DnJy8xQt.js";import{J as t,Q as n,U as r,V as i,W as a,X as o,nt as s,rt as c,st as l}from"./iframe-Ck-CNuiI.js";var u=e((()=>{}));function d(e){let t=s(()=>Array.isArray(e.changes)?e.changes.reduce((e,t)=>e+(t.additions??0),0):e.changes.additions),r=s(()=>Array.isArray(e.changes)?e.changes.reduce((e,t)=>e+(t.deletions??0),0):e.changes.deletions),l=s(()=>(t()??0)+(r()??0));return n(o,{get when(){return l()>0},get children(){var n=f(),o=n.firstChild,s=o.nextSibling;return a(o,()=>`+${t()}`),a(s,()=>`-${r()}`),c(t=>i(n,{[e.class??``]:!0},t)),n}})}var f,p=e((()=>{r(),l(),u(),f=t(`<div data-component=diff-changes><span data-slot=diff-changes-additions></span><span data-slot=diff-changes-deletions>`)})),m,h,g,_,v,y,b;e((()=>{p(),m=`### Overview  
Summarize additions/deletions as compact text.

Pair with \`Diff\`/\`DiffSSR\` to contextualize a change set.

### API
- Required: \`changes\` as { additions, deletions } or an array of those objects.

### Variants and states
- Handles zero-change state (renders nothing).

### Behavior
- Aggregates arrays into total additions/deletions.

### Accessibility
- Ensure surrounding context conveys meaning of the counts/bars.

### Theming/tokens
- Uses \`data-component="diff-changes"\` and diff color tokens.

`,h={additions:12,deletions:5},g={title:`UI V2/DiffChanges`,id:`components-diff-changes-v2`,component:d,tags:[`autodocs`],parameters:{docs:{description:{component:m}}},args:{changes:h}},_={},v={args:{changes:[{additions:4,deletions:1},{additions:8,deletions:3},{additions:2,deletions:0}]}},y={args:{changes:{additions:0,deletions:0}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    changes: [{
      additions: 4,
      deletions: 1
    }, {
      additions: 8,
      deletions: 3
    }, {
      additions: 2,
      deletions: 0
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    changes: {
      additions: 0,
      deletions: 0
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`MultipleFiles`,`Zero`]}))();export{_ as Default,v as MultipleFiles,y as Zero,b as __namedExportsOrder,g as default};