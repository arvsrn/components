import { Dialog as Kobalte } from "@kobalte/core/dialog"
import { type ComponentProps, type JSXElement, type ParentProps, Show } from "solid-js"
import "./dialog-v2.css"

export interface DialogProps extends ParentProps {
  title?: JSXElement
  description?: JSXElement
  action?: JSXElement
  size?: "normal" | "large" | "x-large"
  class?: ComponentProps<"div">["class"]
  classList?: ComponentProps<"div">["classList"]
  fit?: boolean
}

export function DialogFooter(props: ParentProps) {
  return <div data-slot="dialog-footer">{props.children}</div>
}

export function Dialog(props: DialogProps) {
  return (
    <div
      data-component="dialog"
      data-fit={props.fit ? true : undefined}
      data-size={props.size || "normal"}
    >
      <div data-slot="dialog-container">
        <Kobalte.Content
          data-slot="dialog-content"
          data-no-header={!props.title && !props.action ? "" : undefined}
          classList={{
            ...props.classList,
            [props.class ?? ""]: !!props.class,
          }}
          onOpenAutoFocus={(e) => {
            const target = e.currentTarget as HTMLElement | null
            const autofocusEl = target?.querySelector("[autofocus]") as HTMLElement | null
            if (autofocusEl) {
              e.preventDefault()
              autofocusEl.focus()
            }
          }}
        >
          <Show when={props.title || props.action}>
            <div data-slot="dialog-header">
              <div data-slot="dialog-title-group">
                <Show when={props.title}>
                  <Kobalte.Title data-slot="dialog-title">{props.title}</Kobalte.Title>
                </Show>
                <Show when={props.description}>
                  <Kobalte.Description data-slot="dialog-description">
                    {props.description}
                  </Kobalte.Description>
                </Show>
              </div>
              <Show when={props.action}>{props.action}</Show>
              <Kobalte.CloseButton data-slot="dialog-close-button" aria-label="Close">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12.4446 3.55469L3.55566 12.4436M3.55566 3.55469L12.4446 12.4436" stroke="#808080" stroke-linejoin="round" />
                </svg>
              </Kobalte.CloseButton>
            </div>
          </Show>
          <div data-slot="dialog-body">{props.children}</div>
        </Kobalte.Content>
      </div>
    </div>
  )
}
