import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,W as n,X as r,Y as i,_t as a,at as o,ct as s,et as c,ft as l,ht as u,lt as d,ot as f,pt as p,rt as m,ut as h,yt as g}from"./iframe-hOlr1WQH.js";import{F as ee,I as te,O as _,P as v,c as y,i as ne,n as re,r as b,s as x,t as ie,u as S,v as ae}from"./5WXHJDCZ-Boj9LFIf.js";import{a as C,c as oe,n as se,r as ce,s as le,t as ue}from"./SOM3K36D-CKUFyOJT.js";import{n as de,t as fe}from"./N3GAC5SS-BWvSBjRj.js";import{n as pe,t as w}from"./JNCCF6MP-BWyX6TiD.js";import{a as me,i as he,n as ge,o as T,r as _e}from"./UGE6PPGT-z0U6Zv2D.js";function E(){let e=g(P);if(e===void 0)throw Error("[kobalte]: `useAccordionItemContext` must be used within a `Accordion.Item` component");return e}function D(e){let t=E(),[n,r]=a(_({id:t.generateId(`content`)},e),[`id`,`style`]);return f(()=>u(t.registerContentId(n.id))),m(ge,p({role:`region`,get"aria-labelledby"(){return t.triggerId()},get style(){return te({"--kb-accordion-content-height":`var(--kb-collapsible-content-height)`,"--kb-accordion-content-width":`var(--kb-collapsible-content-width)`},n.style)}},r))}function O(e){let t=T();return m(b,p({as:`h3`},()=>t.dataset(),e))}function k(){let e=g(F);if(e===void 0)throw Error("[kobalte]: `useAccordionContext` must be used within a `Accordion.Root` component");return e}function A(e){let t=k(),[n,r]=a(_({id:`${t.generateId(`item`)}-${h()}`},e),[`value`,`disabled`]),[i,o]=d(),[s,c]=d(),l=()=>t.listState().selectionManager(),u=()=>l().isSelected(n.value),f={value:()=>n.value,triggerId:i,contentId:s,generateId:S(()=>r.id),registerTriggerId:w(o),registerContentId:w(c)};return m(P.Provider,{value:f,get children(){return m(_e,p({get open(){return u()},get disabled(){return n.disabled}},r))}})}function j(e){let t,[n,r]=a(_({id:`accordion-${h()}`,multiple:!1,collapsible:!1,shouldFocusWrap:!0},e),[`id`,`ref`,`value`,`defaultValue`,`onChange`,`multiple`,`collapsible`,`shouldFocusWrap`,`onKeyDown`,`onMouseDown`,`onFocusIn`,`onFocusOut`]),[i,o]=d([]),{DomCollectionProvider:s}=ue({items:i,onItemsChange:o}),c=C({selectedKeys:()=>n.value,defaultSelectedKeys:()=>n.defaultValue,onSelectionChange:e=>n.onChange?.(Array.from(e)),disallowEmptySelection:()=>!n.multiple&&!n.collapsible,selectionMode:()=>n.multiple?`multiple`:`single`,dataSource:i});c.selectionManager().setFocusedKey(`item-1`);let l=fe({selectionManager:()=>c.selectionManager(),collection:()=>c.collection(),disallowEmptySelection:()=>c.selectionManager().disallowEmptySelection(),shouldFocusWrap:()=>n.shouldFocusWrap,disallowTypeAhead:!0,allowsTabNavigation:!0},()=>t),u={listState:()=>c,generateId:S(()=>n.id)};return m(s,{get children(){return m(F.Provider,{value:u,get children(){return m(b,p({as:`div`,get id(){return n.id},ref(e){var r=v(e=>t=e,n.ref);typeof r==`function`&&r(e)},get onKeyDown(){return y([n.onKeyDown,l.onKeyDown])},get onMouseDown(){return y([n.onMouseDown,l.onMouseDown])},get onFocusIn(){return y([n.onFocusIn])},get onFocusOut(){return y([n.onFocusOut,l.onFocusOut])}},r))}})}})}function M(e){let t,n=k(),r=E(),i=T(),[o,s]=a(_({id:r.generateId(`trigger`)},e),[`ref`,`onPointerDown`,`onPointerUp`,`onClick`,`onKeyDown`,`onMouseDown`,`onFocus`]);se({getItem:()=>({ref:()=>t,type:`item`,key:r.value(),textValue:``,disabled:i.disabled()})});let c=le({key:()=>r.value(),selectionManager:()=>n.listState().selectionManager(),disabled:()=>i.disabled(),shouldSelectOnPressUp:!0},()=>t);return f(()=>u(r.registerTriggerId(s.id))),m(he,p({ref(e){var n=v(e=>t=e,o.ref);typeof n==`function`&&n(e)},get"data-key"(){return c.dataKey()},get onPointerDown(){return y([o.onPointerDown,c.onPointerDown])},get onPointerUp(){return y([o.onPointerUp,c.onPointerUp])},get onClick(){return y([o.onClick,c.onClick])},onKeyDown:e=>{[`Enter`,` `].includes(e.key)&&e.preventDefault(),x(e,o.onKeyDown),x(e,c.onKeyDown)},get onMouseDown(){return y([o.onMouseDown,c.onMouseDown])},get onFocus(){return y([o.onFocus,c.onFocus])}},s))}var N,P,F,I,ve=e((()=>{n(),de(),oe(),me(),ce(),pe(),ne(),re(),ae(),l(),ee(),N={},ie(N,{Accordion:()=>I,Content:()=>D,Header:()=>O,Item:()=>A,Root:()=>j,Trigger:()=>M,useAccordionContext:()=>k}),P=o(),F=o(),I=Object.assign(j,{Content:D,Header:O,Item:A,Trigger:M})})),ye=e((()=>{ve()})),be=e((()=>{}));function xe(e){let[t,n]=a(e,[`class`,`classList`]);return m(I,p(n,{"data-component":`accordion-v2`,get classList(){return{...t.classList,[t.class??``]:!!t.class}}}))}function Se(e){let[t,n]=a(e,[`class`,`classList`]);return m(I.Item,p(n,{"data-component":`accordion-v2-item`,get classList(){return{...t.classList,[t.class??``]:!!t.class}}}))}function Ce(e){let[t,n]=a(e,[`class`,`classList`,`children`]);return m(I.Header,p(n,{"data-slot":`accordion-v2-header`,get classList(){return{...t.classList,[t.class??``]:!!t.class}},get children(){return t.children}}))}function we(e){let[n,r]=a(e,[`class`,`classList`,`children`,`hideChevron`]);return m(I.Trigger,p(r,{"data-component":`accordion-v2-trigger`,get classList(){return{...n.classList,[n.class??``]:!!n.class}},get children(){return[(()=>{var e=R();return t(e,()=>n.children),e})(),m(c,{get when(){return!n.hideChevron},get children(){return m(B,{})}})]}}))}function Te(e){let[n,r]=a(e,[`class`,`classList`,`children`]);return m(I.Content,p(r,{"data-component":`accordion-v2-content`,get classList(){return{...n.classList,[n.class??``]:!!n.class}},get children(){var e=z();return t(e,()=>n.children),e}}))}var L,R,z,B,V,Ee=e((()=>{n(),ye(),l(),be(),L=r(`<svg data-slot=accordion-v2-chevron width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg aria-hidden=true><path d="M4 5.5L7 8.5L10 5.5"stroke=currentColor>`),R=r(`<span data-slot=accordion-v2-trigger-content>`),z=r(`<div data-slot=accordion-v2-content-inner>`),B=()=>L(),V=Object.assign(xe,{Item:Se,Header:Ce,Trigger:we,Content:Te})})),H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{n(),Ee(),H=r(`<div>`),U=r(`<div style=display:grid;gap:8px><p style=margin:0>Accordions are useful for compressing dense content into scannable sections. They preserve heading semantics and announce open/closed state to screen readers.</p><p style=margin:0>The body can hold arbitrary content — paragraphs, lists, even nested components.</p><ul style=margin:0;padding-left:16px><li>Keyboard navigable</li><li>Animated</li><li>Themeable via CSS variables`),W=r(`<code>hideChevron`),G="### Overview\nCompound accordion built on Kobalte's `Accordion` primitive. The trigger automatically renders a chevron that rotates open.\n\n### API\n- `AccordionV2` — root; forwards Kobalte props (`multiple`, `collapsible`, `value`, `defaultValue`, `onChange`, etc.).\n- `AccordionV2.Item` — one expandable row; requires a unique `value: string`.\n- `AccordionV2.Header` — wraps the trigger; preserves heading semantics.\n- `AccordionV2.Trigger` — auto-renders a trailing chevron; pass `hideChevron` to opt out.\n- `AccordionV2.Content` — body shown when the item is expanded; height-animated.\n\n### Behavior\n- Single-select by default (`collapsible` allows closing the active item). Use `multiple` to let several items open at once.\n- Open/closed state is reflected on items, triggers, and content via `data-expanded` / `data-closed`.\n- Content height animates using Kobalte's `--kb-collapsible-content-height` variable.\n",K={title:`UI V2/Accordion`,id:`components-accordion-v2`,component:V,tags:[`autodocs`],parameters:{frameBackground:`#f5f5f5`,docs:{description:{component:G}}}},q={width:`346px`,"font-family":`var(--font-family-sans)`,"font-size":`13px`},J={render:()=>(()=>{var e=H();return t(e,m(V,{collapsible:!0,defaultValue:[`item-1`],get children(){return[m(V.Item,{value:`item-1`,get children(){return[m(V.Header,{get children(){return m(V.Trigger,{children:`Is it accessible?`})}}),m(V.Content,{children:`Yes. It follows the WAI-ARIA Accordion pattern and ships with full keyboard support.`})]}}),m(V.Item,{value:`item-2`,get children(){return[m(V.Header,{get children(){return m(V.Trigger,{children:`Is it styled?`})}}),m(V.Content,{children:`Yeah`})]}}),m(V.Item,{value:`item-3`,get children(){return[m(V.Header,{get children(){return m(V.Trigger,{children:`Is it animated?`})}}),m(V.Content,{children:`Yes. Height animates via Kobalte's collapsible height variable.`})]}})]}})),s(t=>i(e,q,t)),e})()},Y={render:()=>(()=>{var e=H();return t(e,m(V,{multiple:!0,defaultValue:[`a`,`c`],get children(){return[m(V.Item,{value:`a`,get children(){return[m(V.Header,{get children(){return m(V.Trigger,{children:`Section A`})}}),m(V.Content,{children:`Multiple items can be open at once.`})]}}),m(V.Item,{value:`b`,get children(){return[m(V.Header,{get children(){return m(V.Trigger,{children:`Section B`})}}),m(V.Content,{children:`Open me too.`})]}}),m(V.Item,{value:`c`,get children(){return[m(V.Header,{get children(){return m(V.Trigger,{children:`Section C`})}}),m(V.Content,{children:`Already open by default.`})]}})]}})),s(t=>i(e,q,t)),e})()},X={render:()=>(()=>{var e=H();return t(e,m(V,{collapsible:!0,get children(){return[m(V.Item,{value:`one`,get children(){return[m(V.Header,{get children(){return m(V.Trigger,{children:`Enabled item`})}}),m(V.Content,{children:`Body content.`})]}}),m(V.Item,{value:`two`,disabled:!0,get children(){return[m(V.Header,{get children(){return m(V.Trigger,{children:`Disabled item`})}}),m(V.Content,{children:`You can't open this one.`})]}}),m(V.Item,{value:`three`,get children(){return[m(V.Header,{get children(){return m(V.Trigger,{children:`Another enabled item`})}}),m(V.Content,{children:`Body content.`})]}})]}})),s(t=>i(e,q,t)),e})()},Z={render:()=>(()=>{var e=H();return t(e,m(V,{collapsible:!0,defaultValue:[`long`],get children(){return[m(V.Item,{value:`long`,get children(){return[m(V.Header,{get children(){return m(V.Trigger,{children:`What's inside?`})}}),m(V.Content,{get children(){var e=U();return e.firstChild.nextSibling.nextSibling,e}})]}}),m(V.Item,{value:`short`,get children(){return[m(V.Header,{get children(){return m(V.Trigger,{children:`One more`})}}),m(V.Content,{children:`Short body.`})]}})]}})),s(t=>i(e,q,t)),e})()},Q={render:()=>(()=>{var e=H();return t(e,m(V,{collapsible:!0,get children(){return[m(V.Item,{value:`x`,get children(){return[m(V.Header,{get children(){return m(V.Trigger,{hideChevron:!0,children:`Trigger without chevron`})}}),m(V.Content,{get children(){return[`Pass `,W(),` on the trigger.`]}})]}}),m(V.Item,{value:`y`,get children(){return[m(V.Header,{get children(){return m(V.Trigger,{children:`Default trigger`})}}),m(V.Content,{children:`Chevron renders by default.`})]}})]}})),s(t=>i(e,q,t)),e})()},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div style={frame}>
      <AccordionV2 collapsible defaultValue={["item-1"]}>
        <AccordionV2.Item value="item-1">
          <AccordionV2.Header>
            <AccordionV2.Trigger>Is it accessible?</AccordionV2.Trigger>
          </AccordionV2.Header>
          <AccordionV2.Content>
            Yes. It follows the WAI-ARIA Accordion pattern and ships with full keyboard support.
          </AccordionV2.Content>
        </AccordionV2.Item>
        <AccordionV2.Item value="item-2">
          <AccordionV2.Header>
            <AccordionV2.Trigger>Is it styled?</AccordionV2.Trigger>
          </AccordionV2.Header>
          <AccordionV2.Content>Yeah</AccordionV2.Content>
        </AccordionV2.Item>
        <AccordionV2.Item value="item-3">
          <AccordionV2.Header>
            <AccordionV2.Trigger>Is it animated?</AccordionV2.Trigger>
          </AccordionV2.Header>
          <AccordionV2.Content>Yes. Height animates via Kobalte's collapsible height variable.</AccordionV2.Content>
        </AccordionV2.Item>
      </AccordionV2>
    </div>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={frame}>
      <AccordionV2 multiple defaultValue={["a", "c"]}>
        <AccordionV2.Item value="a">
          <AccordionV2.Header>
            <AccordionV2.Trigger>Section A</AccordionV2.Trigger>
          </AccordionV2.Header>
          <AccordionV2.Content>Multiple items can be open at once.</AccordionV2.Content>
        </AccordionV2.Item>
        <AccordionV2.Item value="b">
          <AccordionV2.Header>
            <AccordionV2.Trigger>Section B</AccordionV2.Trigger>
          </AccordionV2.Header>
          <AccordionV2.Content>Open me too.</AccordionV2.Content>
        </AccordionV2.Item>
        <AccordionV2.Item value="c">
          <AccordionV2.Header>
            <AccordionV2.Trigger>Section C</AccordionV2.Trigger>
          </AccordionV2.Header>
          <AccordionV2.Content>Already open by default.</AccordionV2.Content>
        </AccordionV2.Item>
      </AccordionV2>
    </div>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div style={frame}>
      <AccordionV2 collapsible>
        <AccordionV2.Item value="one">
          <AccordionV2.Header>
            <AccordionV2.Trigger>Enabled item</AccordionV2.Trigger>
          </AccordionV2.Header>
          <AccordionV2.Content>Body content.</AccordionV2.Content>
        </AccordionV2.Item>
        <AccordionV2.Item value="two" disabled>
          <AccordionV2.Header>
            <AccordionV2.Trigger>Disabled item</AccordionV2.Trigger>
          </AccordionV2.Header>
          <AccordionV2.Content>You can't open this one.</AccordionV2.Content>
        </AccordionV2.Item>
        <AccordionV2.Item value="three">
          <AccordionV2.Header>
            <AccordionV2.Trigger>Another enabled item</AccordionV2.Trigger>
          </AccordionV2.Header>
          <AccordionV2.Content>Body content.</AccordionV2.Content>
        </AccordionV2.Item>
      </AccordionV2>
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={frame}>
      <AccordionV2 collapsible defaultValue={["long"]}>
        <AccordionV2.Item value="long">
          <AccordionV2.Header>
            <AccordionV2.Trigger>What's inside?</AccordionV2.Trigger>
          </AccordionV2.Header>
          <AccordionV2.Content>
            <div style={{
            display: "grid",
            gap: "8px"
          }}>
              <p style={{
              margin: 0
            }}>
                Accordions are useful for compressing dense content into scannable sections. They preserve heading
                semantics and announce open/closed state to screen readers.
              </p>
              <p style={{
              margin: 0
            }}>
                The body can hold arbitrary content — paragraphs, lists, even nested components.
              </p>
              <ul style={{
              margin: 0,
              "padding-left": "16px"
            }}>
                <li>Keyboard navigable</li>
                <li>Animated</li>
                <li>Themeable via CSS variables</li>
              </ul>
            </div>
          </AccordionV2.Content>
        </AccordionV2.Item>
        <AccordionV2.Item value="short">
          <AccordionV2.Header>
            <AccordionV2.Trigger>One more</AccordionV2.Trigger>
          </AccordionV2.Header>
          <AccordionV2.Content>Short body.</AccordionV2.Content>
        </AccordionV2.Item>
      </AccordionV2>
    </div>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={frame}>
      <AccordionV2 collapsible>
        <AccordionV2.Item value="x">
          <AccordionV2.Header>
            <AccordionV2.Trigger hideChevron>Trigger without chevron</AccordionV2.Trigger>
          </AccordionV2.Header>
          <AccordionV2.Content>Pass <code>hideChevron</code> on the trigger.</AccordionV2.Content>
        </AccordionV2.Item>
        <AccordionV2.Item value="y">
          <AccordionV2.Header>
            <AccordionV2.Trigger>Default trigger</AccordionV2.Trigger>
          </AccordionV2.Header>
          <AccordionV2.Content>Chevron renders by default.</AccordionV2.Content>
        </AccordionV2.Item>
      </AccordionV2>
    </div>
}`,...Q.parameters?.docs?.source}}},$=[`Basic`,`Multiple`,`Disabled`,`LongContent`,`NoChevron`]}))();export{J as Basic,X as Disabled,Z as LongContent,Y as Multiple,Q as NoChevron,$ as __namedExportsOrder,K as default};