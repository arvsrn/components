import { Button as Kobalte } from "@kobalte/core/button"
import { type ComponentProps, splitProps } from "solid-js"
import { Icon, type IconProps } from "./icon"
import "./icon-button-v2.css"

export interface IconButtonV2Props
  extends ComponentProps<typeof Kobalte>,
    Pick<ComponentProps<"button">, "class" | "classList"> {
  icon: IconProps["name"]
  size?: "small" | "normal" | "large"
  iconSize?: IconProps["size"]
  variant?: "primary" | "secondary" | "ghost"
}

export function IconButtonV2(props: ComponentProps<"button"> & IconButtonV2Props) {
  const [split, rest] = splitProps(props, ["variant", "size", "iconSize", "class", "classList"])
  return (
    <Kobalte
      {...rest}
      data-component="icon-button-v2"
      data-icon={props.icon}
      data-size={split.size || "normal"}
      data-variant={split.variant || "secondary"}
      classList={{
        ...split.classList,
        [split.class ?? ""]: !!split.class,
      }}
    >
      <Icon name={props.icon} size={split.iconSize ?? (split.size === "large" ? "normal" : "small")} />
    </Kobalte>
  )
}
