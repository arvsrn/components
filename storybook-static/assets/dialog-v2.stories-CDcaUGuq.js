import{n as e}from"./chunk-DnJy8xQt.js";import{B as t,G as n,K as r,W as i,X as a,_t as o,at as s,ct as c,et as l,ft as u,ht as d,lt as f,ot as p,pt as m,q as h,rt as g,ut as ee,yt as _}from"./iframe-hOlr1WQH.js";import{F as v,I as y,O as b,P as x,d as S,i as te,l as ne,n as re,r as C,s as w,t as ie,u as ae,v as oe}from"./5WXHJDCZ-Boj9LFIf.js";import{n as se,t as ce}from"./E53DB7BS-Dm4eKjYq.js";import{n as le,r as ue}from"./UKTBL2JL-k2Q86Gcf.js";import{n as de,t as T}from"./JNCCF6MP-BWyX6TiD.js";import{n as E,t as fe}from"./dist-C81wiyPB.js";import{n as pe,t as D}from"./button-v2-CyFpZw3H.js";import{a as me,i as he,n as ge,o as _e,r as ve,t as ye}from"./dist-CioQxq47.js";import{n as be,t as xe}from"./3VFJM5NZ-M0AtHe1m.js";function O(){let e=_(R);if(e===void 0)throw Error("[kobalte]: `useDialogContext` must be used within a `Dialog` component");return e}function k(e){let t=O(),[n,r]=o(e,[`aria-label`,`onClick`]);return g(le,m({get"aria-label"(){return n[`aria-label`]||t.translations().dismiss},onClick:e=>{w(e,n.onClick),t.close()}},r))}function A(e){let t,n=O(),[i,a]=o(b({id:n.generateId(`content`)},e),[`ref`,`onOpenAutoFocus`,`onCloseAutoFocus`,`onPointerDownOutside`,`onFocusOutside`,`onInteractOutside`]),s=!1,c=!1,u=e=>{i.onPointerDownOutside?.(e),n.modal()&&e.detail.isContextMenu&&e.preventDefault()},f=e=>{i.onFocusOutside?.(e),n.modal()&&e.preventDefault()},h=e=>{i.onInteractOutside?.(e),!n.modal()&&(e.defaultPrevented||(s=!0,e.detail.originalEvent.type===`pointerdown`&&(c=!0)),ne(n.triggerRef(),e.target)&&e.preventDefault(),e.detail.originalEvent.type===`focusin`&&c&&e.preventDefault())};return ve({isDisabled:()=>!(n.isOpen()&&n.modal()),targets:()=>t?[t]:[]}),ge({element:()=>t??null,enabled:()=>n.contentPresent()&&n.preventScroll()}),me({trapFocus:()=>n.isOpen()&&n.modal(),onMountAutoFocus:i.onOpenAutoFocus,onUnmountAutoFocus:e=>{i.onCloseAutoFocus?.(e),n.modal()?(e.preventDefault(),S(n.triggerRef())):(e.defaultPrevented||(s||S(n.triggerRef()),e.preventDefault()),s=!1,c=!1)}},()=>t),p(()=>d(n.registerContentId(a.id))),g(l,{get when(){return n.contentPresent()},get children(){return g(xe,m({ref(e){var r=x(e=>{n.setContentRef(e),t=e},i.ref);typeof r==`function`&&r(e)},role:`dialog`,tabIndex:-1,get disableOutsidePointerEvents(){return r(()=>!!n.modal())()&&n.isOpen()},get excludedElements(){return[n.triggerRef]},get"aria-labelledby"(){return n.titleId()},get"aria-describedby"(){return n.descriptionId()},get"data-expanded"(){return n.isOpen()?``:void 0},get"data-closed"(){return n.isOpen()?void 0:``},onPointerDownOutside:u,onFocusOutside:f,onInteractOutside:h,get onDismiss(){return n.close}},a))}})}function j(e){let t=O(),[n,r]=o(b({id:t.generateId(`description`)},e),[`id`]);return p(()=>d(t.registerDescriptionId(n.id))),g(C,m({as:`p`,get id(){return n.id}},r))}function M(e){let t=O(),[n,r]=o(e,[`ref`,`style`,`onPointerDown`]),i=e=>{w(e,n.onPointerDown),e.target===e.currentTarget&&e.preventDefault()};return g(l,{get when(){return t.overlayPresent()},get children(){return g(C,m({as:`div`,ref(e){var r=x(t.setOverlayRef,n.ref);typeof r==`function`&&r(e)},get style(){return y({"pointer-events":`auto`},n.style)},get"data-expanded"(){return t.isOpen()?``:void 0},get"data-closed"(){return t.isOpen()?void 0:``},onPointerDown:i},r))}})}function N(e){let n=O();return g(l,{get when(){return n.contentPresent()||n.overlayPresent()},get children(){return g(t,e)}})}function P(e){let t=b({id:`dialog-${ee()}`,modal:!0,translations:z},e),[n,r]=f(),[i,a]=f(),[o,s]=f(),[c,l]=f(),[u,d]=f(),[p,m]=f(),h=ce({open:()=>t.open,defaultOpen:()=>t.defaultOpen,onOpenChange:e=>t.onOpenChange?.(e)}),_=()=>t.forceMount||h.isOpen(),{present:v}=E({show:_,element:()=>c()??null}),{present:y}=E({show:_,element:()=>u()??null}),x={translations:()=>t.translations??z,isOpen:h.isOpen,modal:()=>t.modal??!0,preventScroll:()=>t.preventScroll??x.modal(),contentId:n,titleId:i,descriptionId:o,triggerRef:p,overlayRef:c,setOverlayRef:l,contentRef:u,setContentRef:d,overlayPresent:v,contentPresent:y,close:h.close,toggle:h.toggle,setTriggerRef:m,generateId:ae(()=>t.id),registerContentId:T(r),registerTitleId:T(a),registerDescriptionId:T(s)};return g(R.Provider,{value:x,get children(){return t.children}})}function F(e){let t=O(),[n,r]=o(b({id:t.generateId(`title`)},e),[`id`]);return p(()=>d(t.registerTitleId(n.id))),g(C,m({as:`h2`,get id(){return n.id}},r))}function I(e){let t=O(),[n,i]=o(e,[`ref`,`onClick`]);return g(le,m({ref(e){var r=x(t.setTriggerRef,n.ref);typeof r==`function`&&r(e)},"aria-haspopup":`dialog`,get"aria-expanded"(){return t.isOpen()},get"aria-controls"(){return r(()=>!!t.isOpen())()?t.contentId():void 0},get"data-expanded"(){return t.isOpen()?``:void 0},get"data-closed"(){return t.isOpen()?void 0:``},onClick:e=>{w(e,n.onClick),t.toggle()}},i))}var L,R,z,B,Se=e((()=>{i(),_e(),he(),be(),se(),ue(),de(),te(),re(),oe(),u(),ye(),v(),fe(),L={},ie(L,{CloseButton:()=>k,Content:()=>A,Description:()=>j,Dialog:()=>B,Overlay:()=>M,Portal:()=>N,Root:()=>P,Title:()=>F,Trigger:()=>I,useDialogContext:()=>O}),R=s(),z={dismiss:`Dismiss`},B=Object.assign(P,{CloseButton:k,Content:A,Description:j,Overlay:M,Portal:N,Title:F,Trigger:I})})),V=e((()=>{Se()})),Ce=e((()=>{}));function H(e){return(()=>{var t=W();return n(t,()=>e.children),t})()}function U(e){return(()=>{var t=Te(),r=t.firstChild;return n(r,g(B.Content,{"data-slot":`dialog-content`,get"data-no-header"(){return!e.title&&!e.action?``:void 0},get classList(){return{...e.classList,[e.class??``]:!!e.class}},onOpenAutoFocus:e=>{let t=e.currentTarget?.querySelector(`[autofocus]`);t&&(e.preventDefault(),t.focus())},get children(){return[g(l,{get when(){return e.title||e.action},get children(){var t=K(),r=t.firstChild;return n(r,g(l,{get when(){return e.title},get children(){return g(B.Title,{"data-slot":`dialog-title`,get children(){return e.title}})}}),null),n(r,g(l,{get when(){return e.description},get children(){return g(B.Description,{"data-slot":`dialog-description`,get children(){return e.description}})}}),null),n(t,g(l,{get when(){return e.action},get children(){return e.action}}),null),n(t,g(B.CloseButton,{"data-slot":`dialog-close-button`,"aria-label":`Close`,get children(){return G()}}),null),t}}),(()=>{var t=we();return n(t,()=>e.children),t})()]}})),c(n=>{var r=e.fit?!0:void 0,i=e.size||`normal`;return r!==n.e&&h(t,`data-fit`,n.e=r),i!==n.t&&h(t,`data-size`,n.t=i),n},{e:void 0,t:void 0}),t})()}var W,G,K,we,Te,Ee=e((()=>{i(),V(),u(),Ce(),W=a(`<div data-slot=dialog-footer>`),G=a(`<svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg aria-hidden=true><path d="M12.4446 3.55469L3.55566 12.4436M3.55566 3.55469L12.4446 12.4436"stroke=#808080 stroke-linejoin=round>`),K=a(`<div data-slot=dialog-header><div data-slot=dialog-title-group>`),we=a(`<div data-slot=dialog-body>`),Te=a(`<div data-component=dialog><div data-slot=dialog-container>`)})),q,De,Oe,ke,J,Y,X,Z,Q,$,Ae;e((()=>{i(),V(),Ee(),pe(),q=a(`<div style=display:flex;gap:12px>`),De=a(`<span style=margin-right:auto>`),Oe=`### Overview
Dialog content wrapper built on Kobalte's dialog primitive with v2 styling.

### API
- Optional: \`title\`, \`description\`, \`action\`.
- \`size\`: normal | large | x-large.
- \`fit\` and \`transition\` control layout and animation.

### Variants and states
- Sizes and optional header/action controls.

### Accessibility
- Focus trapping and aria attributes provided by Kobalte Dialog.

### Theming/tokens
- Uses \`data-component="dialog"\` and slot attributes.
`,ke={title:`UI V2/Dialog`,id:`components-dialog-v2`,component:U,tags:[`autodocs`],parameters:{docs:{description:{component:Oe}}}},J={render:()=>g(B,{defaultOpen:!0,get children(){return[g(B.Trigger,{as:D,variant:`neutral`,children:`Open dialog`}),g(B.Portal,{get children(){return[g(B.Overlay,{}),g(U,{title:`Dialog`,description:`Description`,children:`Dialog body content.`})]}})]}})},Y={render:()=>(()=>{var e=q();return n(e,g(B,{get children(){return[g(B.Trigger,{as:D,variant:`neutral`,children:`Normal`}),g(B.Portal,{get children(){return[g(B.Overlay,{}),g(U,{title:`Normal`,description:`Normal size`,children:`Normal dialog content.`})]}})]}}),null),n(e,g(B,{get children(){return[g(B.Trigger,{as:D,variant:`neutral`,children:`Large`}),g(B.Portal,{get children(){return[g(B.Overlay,{}),g(U,{size:`large`,title:`Large`,description:`Large size`,children:`Large dialog content.`})]}})]}}),null),n(e,g(B,{get children(){return[g(B.Trigger,{as:D,variant:`neutral`,children:`X-Large`}),g(B.Portal,{get children(){return[g(B.Overlay,{}),g(U,{size:`x-large`,title:`Extra large`,description:`X-large size`,children:`X-large dialog content.`})]}})]}}),null),e})()},X={render:()=>g(B,{get children(){return[g(B.Trigger,{as:D,variant:`neutral`,children:`Open action dialog`}),g(B.Portal,{get children(){return[g(B.Overlay,{}),g(U,{title:`Custom action`,description:`Dialog with a custom header action`,get action(){return g(D,{variant:`neutral`,size:`small`,children:`Help`})},children:`Dialog body content.`})]}})]}})},Z={render:()=>g(B,{defaultOpen:!0,get children(){return[g(B.Trigger,{as:D,variant:`neutral`,children:`Open dialog`}),g(B.Portal,{get children(){return[g(B.Overlay,{}),g(U,{title:`Save changes`,description:`Your changes will be lost if you don't save them.`,fit:!0,get children(){return g(H,{get children(){return[g(D,{variant:`neutral`,children:`Cancel`}),g(D,{variant:`contrast`,children:`Save`})]}})}})]}})]}})},Q={render:()=>g(B,{defaultOpen:!0,get children(){return[g(B.Trigger,{as:D,variant:`neutral`,children:`Open dialog`}),g(B.Portal,{get children(){return[g(B.Overlay,{}),g(U,{title:`Unsaved changes`,description:`You have unsaved changes. What would you like to do?`,fit:!0,get children(){return g(H,{get children(){return[(()=>{var e=De();return n(e,g(D,{variant:`ghost`,children:`Remind me later`})),e})(),g(D,{variant:`neutral`,children:`Cancel`}),g(D,{variant:`contrast`,children:`Save`})]}})}})]}})]}})},$={render:()=>g(B,{get children(){return[g(B.Trigger,{as:D,variant:`neutral`,children:`Open fit dialog`}),g(B.Portal,{get children(){return[g(B.Overlay,{}),g(U,{title:`Fit content`,fit:!0,children:`Dialog fits its content.`})]}})]}})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <KobalteDialog defaultOpen>
      <KobalteDialog.Trigger as={ButtonV2} variant="neutral">
        Open dialog
      </KobalteDialog.Trigger>
      <KobalteDialog.Portal>
        <KobalteDialog.Overlay />
        <Dialog title="Dialog" description="Description">
          Dialog body content.
        </Dialog>
      </KobalteDialog.Portal>
    </KobalteDialog>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px"
  }}>
      <KobalteDialog>
        <KobalteDialog.Trigger as={ButtonV2} variant="neutral">
          Normal
        </KobalteDialog.Trigger>
        <KobalteDialog.Portal>
          <KobalteDialog.Overlay />
          <Dialog title="Normal" description="Normal size">
            Normal dialog content.
          </Dialog>
        </KobalteDialog.Portal>
      </KobalteDialog>

      <KobalteDialog>
        <KobalteDialog.Trigger as={ButtonV2} variant="neutral">
          Large
        </KobalteDialog.Trigger>
        <KobalteDialog.Portal>
          <KobalteDialog.Overlay />
          <Dialog size="large" title="Large" description="Large size">
            Large dialog content.
          </Dialog>
        </KobalteDialog.Portal>
      </KobalteDialog>

      <KobalteDialog>
        <KobalteDialog.Trigger as={ButtonV2} variant="neutral">
          X-Large
        </KobalteDialog.Trigger>
        <KobalteDialog.Portal>
          <KobalteDialog.Overlay />
          <Dialog size="x-large" title="Extra large" description="X-large size">
            X-large dialog content.
          </Dialog>
        </KobalteDialog.Portal>
      </KobalteDialog>
    </div>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <KobalteDialog>
      <KobalteDialog.Trigger as={ButtonV2} variant="neutral">
        Open action dialog
      </KobalteDialog.Trigger>
      <KobalteDialog.Portal>
        <KobalteDialog.Overlay />
        <Dialog title="Custom action" description="Dialog with a custom header action" action={<ButtonV2 variant="neutral" size="small">Help</ButtonV2>}>
          Dialog body content.
        </Dialog>
      </KobalteDialog.Portal>
    </KobalteDialog>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <KobalteDialog defaultOpen>
      <KobalteDialog.Trigger as={ButtonV2} variant="neutral">
        Open dialog
      </KobalteDialog.Trigger>
      <KobalteDialog.Portal>
        <KobalteDialog.Overlay />
        <Dialog title="Save changes" description="Your changes will be lost if you don't save them." fit>
          <DialogFooter>
            <ButtonV2 variant="neutral">Cancel</ButtonV2>
            <ButtonV2 variant="contrast">Save</ButtonV2>
          </DialogFooter>
        </Dialog>
      </KobalteDialog.Portal>
    </KobalteDialog>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <KobalteDialog defaultOpen>
      <KobalteDialog.Trigger as={ButtonV2} variant="neutral">
        Open dialog
      </KobalteDialog.Trigger>
      <KobalteDialog.Portal>
        <KobalteDialog.Overlay />
        <Dialog title="Unsaved changes" description="You have unsaved changes. What would you like to do?" fit>
          <DialogFooter>
            <span style={{
            "margin-right": "auto"
          }}>
              <ButtonV2 variant="ghost">Remind me later</ButtonV2>
            </span>
            <ButtonV2 variant="neutral">Cancel</ButtonV2>
            <ButtonV2 variant="contrast">Save</ButtonV2>
          </DialogFooter>
        </Dialog>
      </KobalteDialog.Portal>
    </KobalteDialog>
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <KobalteDialog>
      <KobalteDialog.Trigger as={ButtonV2} variant="neutral">
        Open fit dialog
      </KobalteDialog.Trigger>
      <KobalteDialog.Portal>
        <KobalteDialog.Overlay />
        <Dialog title="Fit content" fit>
          Dialog fits its content.
        </Dialog>
      </KobalteDialog.Portal>
    </KobalteDialog>
}`,...$.parameters?.docs?.source}}},Ae=[`Basic`,`Sizes`,`CustomAction`,`WithFooter`,`WithFooterThreeButtons`,`Fit`]}))();export{J as Basic,X as CustomAction,$ as Fit,Y as Sizes,Z as WithFooter,Q as WithFooterThreeButtons,Ae as __namedExportsOrder,ke as default};