import { Button as Kobalte } from "@kobalte/core/button"
import { type ComponentProps, Show, splitProps, type JSX } from "solid-js"
import "./button-v2.css"

export interface ButtonV2Props
  extends ComponentProps<typeof Kobalte>,
    Pick<ComponentProps<"button">, "class" | "classList" | "children"> {
  size?: "small" | "normal" | "large"
  variant?: "neutral" | "contrast" | "ghost" | "notify-highlight"
  leadingIcon?: JSX.Element
}

export function ButtonV2(props: ButtonV2Props) {
  const [split, rest] = splitProps(props, ["variant", "size", "leadingIcon", "class", "classList"])
  return (
    <Kobalte
      {...rest}
      data-component="button-v2"
      data-size={split.size || "normal"}
      data-variant={split.variant || "neutral"}
      data-leading-icon={split.leadingIcon ? true : undefined}
      classList={{
        ...split.classList,
        [split.class ?? ""]: !!split.class,
      }}
    >
      <Show when={split.leadingIcon}>
        {(leadingIcon) => <span data-slot="button-v2-leading-icon">{leadingIcon()}</span>}
      </Show>
      {props.children}
    </Kobalte>
  )
}
