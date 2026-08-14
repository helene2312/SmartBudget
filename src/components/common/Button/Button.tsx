import type { ButtonHTMLAttributes } from "react";

import { iconMap, type IconName } from "../../IconMap/icon";

import "./button.css";

export type ButtonStyle = "primary" | "secondary" | "inverted" | "outline";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonStyle?: ButtonStyle;
  isLoading?: boolean;
  iconOnly?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
};

export function Button({
  buttonStyle = "primary",
  isLoading = false,
  iconOnly = false,
  disabled = false,
  iconLeft,
  iconRight,
  className = "",
  children,
  type = "button",
  style,
  ...props
}: ButtonProps) {
  const LeftIcon = iconLeft ? iconMap[iconLeft] : null;
  const RightIcon = iconRight ? iconMap[iconRight] : null;
  const IconOnlyComponent = LeftIcon || RightIcon;

  const isDisabled = disabled || isLoading;

  const buttonClassName = [
    "button",
    `button--${buttonStyle}`,
    isLoading ? "button--loading" : "",
    iconOnly ? "button--icon-only" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      type={type}
      className={buttonClassName}
      style={style}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
    >
      <span className="button__content" style={undefined}>
        {isLoading ? (
          <span className="button__spinner" aria-hidden="true" />
        ) : iconOnly && IconOnlyComponent ? (
          <IconOnlyComponent className="button__icon" aria-hidden="true" />
        ) : LeftIcon ? (
          <LeftIcon className="button__icon" aria-hidden="true" />
        ) : null}

        {!iconOnly ? <span className="button__label">{children}</span> : null}

        {!isLoading && !iconOnly && RightIcon ? (
          <RightIcon className="button__icon" aria-hidden="true" />
        ) : null}
      </span>
    </button>
  );
}
