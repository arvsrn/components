import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n}from"./diff-changes-v2-C4tK0m2D.js";var r,i,a,o,s,c,l;e((()=>{t(),r=`### Overview  
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

`,i={additions:12,deletions:5},a={title:`UI V2/DiffChanges`,id:`components-diff-changes-v2`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:r}}},args:{changes:i}},o={},s={args:{changes:[{additions:4,deletions:1},{additions:8,deletions:3},{additions:2,deletions:0}]}},c={args:{changes:{additions:0,deletions:0}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    changes: {
      additions: 0,
      deletions: 0
    }
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`MultipleFiles`,`Zero`]}))();export{o as Default,s as MultipleFiles,c as Zero,l as __namedExportsOrder,a as default};