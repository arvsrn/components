import{n as e}from"./chunk-DnJy8xQt.js";import{G as t,W as n,X as r,Y as i,_t as a,dt as o,ft as s,ht as c,it as l,lt as u,mt as d,ot as f,st as p,tt as m,xt as h,yt as g}from"./iframe-DZLDNB0z.js";import{F as _,I as ee,O as v,P as y,c as b,i as te,n as ne,r as x,s as S,t as re,u as C,v as ie}from"./5WXHJDCZ-Dp5bSThz.js";import{i as ae,n as oe,o as se}from"./QZDH5R5B-_ryyjt8I.js";import{n as ce,r as le}from"./N3GAC5SS-x8SeOUbn.js";import{n as ue,t as w}from"./JNCCF6MP-BWyX6TiD.js";import{a as de,i as fe,n as pe,o as T,r as me}from"./UGE6PPGT-D9L2ZPFS.js";import{n as he,r as ge,t as _e}from"./SOM3K36D-BHJaB_1D.js";function E(){let e=h(P);if(e===void 0)throw Error("[kobalte]: `useAccordionItemContext` must be used within a `Accordion.Item` component");return e}function D(e){let t=E(),[n,r]=g(v({id:t.generateId(`content`)},e),[`id`,`style`]);return p(()=>a(t.registerContentId(n.id))),l(pe,c({role:`region`,get"aria-labelledby"(){return t.triggerId()},get style(){return ee({"--kb-accordion-content-height":`var(--kb-collapsible-content-height)`,"--kb-accordion-content-width":`var(--kb-collapsible-content-width)`},n.style)}},r))}function O(e){let t=T();return l(x,c({as:`h3`},()=>t.dataset(),e))}function k(){let e=h(F);if(e===void 0)throw Error("[kobalte]: `useAccordionContext` must be used within a `Accordion.Root` component");return e}function A(e){let t=k(),[n,r]=g(v({id:`${t.generateId(`item`)}-${s()}`},e),[`value`,`disabled`]),[i,a]=o(),[u,d]=o(),f=()=>t.listState().selectionManager(),p=()=>f().isSelected(n.value),m={value:()=>n.value,triggerId:i,contentId:u,generateId:C(()=>r.id),registerTriggerId:w(a),registerContentId:w(d)};return l(P.Provider,{value:m,get children(){return l(me,c({get open(){return p()},get disabled(){return n.disabled}},r))}})}function j(e){let t,[n,r]=g(v({id:`accordion-${s()}`,multiple:!1,collapsible:!1,shouldFocusWrap:!0},e),[`id`,`ref`,`value`,`defaultValue`,`onChange`,`multiple`,`collapsible`,`shouldFocusWrap`,`onKeyDown`,`onMouseDown`,`onFocusIn`,`onFocusOut`]),[i,a]=o([]),{DomCollectionProvider:u}=_e({items:i,onItemsChange:a}),d=oe({selectedKeys:()=>n.value,defaultSelectedKeys:()=>n.defaultValue,onSelectionChange:e=>n.onChange?.(Array.from(e)),disallowEmptySelection:()=>!n.multiple&&!n.collapsible,selectionMode:()=>n.multiple?`multiple`:`single`,dataSource:i});d.selectionManager().setFocusedKey(`item-1`);let f=ce({selectionManager:()=>d.selectionManager(),collection:()=>d.collection(),disallowEmptySelection:()=>d.selectionManager().disallowEmptySelection(),shouldFocusWrap:()=>n.shouldFocusWrap,disallowTypeAhead:!0,allowsTabNavigation:!0},()=>t),p={listState:()=>d,generateId:C(()=>n.id)};return l(u,{get children(){return l(F.Provider,{value:p,get children(){return l(x,c({as:`div`,get id(){return n.id},ref(e){var r=y(e=>t=e,n.ref);typeof r==`function`&&r(e)},get onKeyDown(){return b([n.onKeyDown,f.onKeyDown])},get onMouseDown(){return b([n.onMouseDown,f.onMouseDown])},get onFocusIn(){return b([n.onFocusIn])},get onFocusOut(){return b([n.onFocusOut,f.onFocusOut])}},r))}})}})}function M(e){let t,n=k(),r=E(),i=T(),[o,s]=g(v({id:r.generateId(`trigger`)},e),[`ref`,`onPointerDown`,`onPointerUp`,`onClick`,`onKeyDown`,`onMouseDown`,`onFocus`]);he({getItem:()=>({ref:()=>t,type:`item`,key:r.value(),textValue:``,disabled:i.disabled()})});let u=ae({key:()=>r.value(),selectionManager:()=>n.listState().selectionManager(),disabled:()=>i.disabled(),shouldSelectOnPressUp:!0},()=>t);return p(()=>a(r.registerTriggerId(s.id))),l(fe,c({ref(e){var n=y(e=>t=e,o.ref);typeof n==`function`&&n(e)},get"data-key"(){return u.dataKey()},get onPointerDown(){return b([o.onPointerDown,u.onPointerDown])},get onPointerUp(){return b([o.onPointerUp,u.onPointerUp])},get onClick(){return b([o.onClick,u.onClick])},onKeyDown:e=>{[`Enter`,` `].includes(e.key)&&e.preventDefault(),S(e,o.onKeyDown),S(e,u.onKeyDown)},get onMouseDown(){return b([o.onMouseDown,u.onMouseDown])},get onFocus(){return b([o.onFocus,u.onFocus])}},s))}var N,P,F,I,ve=e((()=>{n(),le(),se(),de(),ge(),ue(),te(),ne(),ie(),d(),_(),N={},re(N,{Accordion:()=>I,Content:()=>D,Header:()=>O,Item:()=>A,Root:()=>j,Trigger:()=>M,useAccordionContext:()=>k}),P=f(),F=f(),I=Object.assign(j,{Content:D,Header:O,Item:A,Trigger:M})})),ye=e((()=>{ve()})),be=e((()=>{}));function xe(e){let[t,n]=g(e,[`class`,`classList`]);return l(I,c(n,{"data-component":`accordion-v2`,get classList(){return{...t.classList,[t.class??``]:!!t.class}}}))}function Se(e){let[t,n]=g(e,[`class`,`classList`]);return l(I.Item,c(n,{"data-component":`accordion-v2-item`,get classList(){return{...t.classList,[t.class??``]:!!t.class}}}))}function Ce(e){let[t,n]=g(e,[`class`,`classList`,`children`]);return l(I.Header,c(n,{"data-slot":`accordion-v2-header`,get classList(){return{...t.classList,[t.class??``]:!!t.class}},get children(){return t.children}}))}function we(e){let[n,r]=g(e,[`class`,`classList`,`children`,`hideChevron`]);return l(I.Trigger,c(r,{"data-component":`accordion-v2-trigger`,get classList(){return{...n.classList,[n.class??``]:!!n.class}},get children(){return[(()=>{var e=R();return t(e,()=>n.children),e})(),l(m,{get when(){return!n.hideChevron},get children(){return l(B,{})}})]}}))}function Te(e){let[n,r]=g(e,[`class`,`classList`,`children`]);return l(I.Content,c(r,{"data-component":`accordion-v2-content`,get classList(){return{...n.classList,[n.class??``]:!!n.class}},get children(){var e=z();return t(e,()=>n.children),e}}))}var L,R,z,B,V,Ee=e((()=>{n(),ye(),d(),be(),L=r(`<svg data-slot=accordion-v2-chevron width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg aria-hidden=true><path d="M4 5.5L7 8.5L10 5.5"stroke=currentColor>`),R=r(`<span data-slot=accordion-v2-trigger-content>`),z=r(`<div data-slot=accordion-v2-content-inner>`),B=()=>L(),V=Object.assign(xe,{Item:Se,Header:Ce,Trigger:we,Content:Te})})),H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{n(),Ee(),H=r(`<div>`),U=r(`<div style=display:grid;gap:8px><p style=margin:0>Accordions are useful for compressing dense content into scannable sections. They preserve heading semantics and announce open/closed state to screen readers.</p><p style=margin:0>The body can hold arbitrary content — paragraphs, lists, even nested components.</p><ul style=margin:0;padding-left:16px><li>Keyboard navigable</li><li>Animated</li><li>Themeable via CSS variables`),W=r(`<code>hideChevron`),G="### Overview\nCompound accordion built on Kobalte's `Accordion` primitive. The trigger automatically renders a chevron that rotates open.\n\n### API\n- `AccordionV2` — root; forwards Kobalte props (`multiple`, `collapsible`, `value`, `defaultValue`, `onChange`, etc.).\n- `AccordionV2.Item` — one expandable row; requires a unique `value: string`.\n- `AccordionV2.Header` — wraps the trigger; preserves heading semantics.\n- `AccordionV2.Trigger` — auto-renders a trailing chevron; pass `hideChevron` to opt out.\n- `AccordionV2.Content` — body shown when the item is expanded; height-animated.\n\n### Behavior\n- Single-select by default (`collapsible` allows closing the active item). Use `multiple` to let several items open at once.\n- Open/closed state is reflected on items, triggers, and content via `data-expanded` / `data-closed`.\n- Content height animates using Kobalte's `--kb-collapsible-content-height` variable.\n",K={title:`UI V2/Accordion`,id:`components-accordion-v2`,component:V,tags:[`autodocs`],parameters:{frameBackground:`#f5f5f5`,docs:{description:{component:G}}}},q={width:`346px`,"font-family":`var(--font-family-sans)`,"font-size":`13px`},J={render:()=>(()=>{var e=H();return t(e,l(V,{collapsible:!0,defaultValue:[`item-1`],get children(){return[l(V.Item,{value:`item-1`,get children(){return[l(V.Header,{get children(){return l(V.Trigger,{children:`Is it accessible?`})}}),l(V.Content,{children:`Yes. It follows the WAI-ARIA Accordion pattern and ships with full keyboard support.`})]}}),l(V.Item,{value:`item-2`,get children(){return[l(V.Header,{get children(){return l(V.Trigger,{children:`Is it styled?`})}}),l(V.Content,{children:`Yeah`})]}}),l(V.Item,{value:`item-3`,get children(){return[l(V.Header,{get children(){return l(V.Trigger,{children:`Is it animated?`})}}),l(V.Content,{children:`Yes. Height animates via Kobalte's collapsible height variable.`})]}})]}})),u(t=>i(e,q,t)),e})()},Y={render:()=>(()=>{var e=H();return t(e,l(V,{multiple:!0,defaultValue:[`a`,`c`],get children(){return[l(V.Item,{value:`a`,get children(){return[l(V.Header,{get children(){return l(V.Trigger,{children:`Section A`})}}),l(V.Content,{children:`Multiple items can be open at once.`})]}}),l(V.Item,{value:`b`,get children(){return[l(V.Header,{get children(){return l(V.Trigger,{children:`Section B`})}}),l(V.Content,{children:`Open me too.`})]}}),l(V.Item,{value:`c`,get children(){return[l(V.Header,{get children(){return l(V.Trigger,{children:`Section C`})}}),l(V.Content,{children:`Already open by default.`})]}})]}})),u(t=>i(e,q,t)),e})()},X={render:()=>(()=>{var e=H();return t(e,l(V,{collapsible:!0,get children(){return[l(V.Item,{value:`one`,get children(){return[l(V.Header,{get children(){return l(V.Trigger,{children:`Enabled item`})}}),l(V.Content,{children:`Body content.`})]}}),l(V.Item,{value:`two`,disabled:!0,get children(){return[l(V.Header,{get children(){return l(V.Trigger,{children:`Disabled item`})}}),l(V.Content,{children:`You can't open this one.`})]}}),l(V.Item,{value:`three`,get children(){return[l(V.Header,{get children(){return l(V.Trigger,{children:`Another enabled item`})}}),l(V.Content,{children:`Body content.`})]}})]}})),u(t=>i(e,q,t)),e})()},Z={render:()=>(()=>{var e=H();return t(e,l(V,{collapsible:!0,defaultValue:[`long`],get children(){return[l(V.Item,{value:`long`,get children(){return[l(V.Header,{get children(){return l(V.Trigger,{children:`What's inside?`})}}),l(V.Content,{get children(){var e=U();return e.firstChild.nextSibling.nextSibling,e}})]}}),l(V.Item,{value:`short`,get children(){return[l(V.Header,{get children(){return l(V.Trigger,{children:`One more`})}}),l(V.Content,{children:`Short body.`})]}})]}})),u(t=>i(e,q,t)),e})()},Q={render:()=>(()=>{var e=H();return t(e,l(V,{collapsible:!0,get children(){return[l(V.Item,{value:`x`,get children(){return[l(V.Header,{get children(){return l(V.Trigger,{hideChevron:!0,children:`Trigger without chevron`})}}),l(V.Content,{get children(){return[`Pass `,W(),` on the trigger.`]}})]}}),l(V.Item,{value:`y`,get children(){return[l(V.Header,{get children(){return l(V.Trigger,{children:`Default trigger`})}}),l(V.Content,{children:`Chevron renders by default.`})]}})]}})),u(t=>i(e,q,t)),e})()},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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