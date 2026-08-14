import type { HTMLAttributes, ReactNode } from "react";

import { iconMap, type IconName } from "../../IconMap/icon";

import "./Badge.css";

export type BadgeVariant =
  "default" | "primary" | "success" | "warning" | "danger" | "info" | "neutral";

export type BadgeSize = "sm" | "md" | "lg";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
  label?: ReactNode;
  iconLeft?: IconName;
  iconRight?: IconName;
  iconOnly?: boolean;
  rounded?: boolean;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "badge--default",
  primary: "badge--primary",
  success: "badge--success",
  warning: "badge--warning",
  danger: "badge--danger",
  info: "badge--info",
  neutral: "badge--neutral",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "badge--sm",
  md: "badge--md",
  lg: "badge--lg",
};

export function Badge({
  variant = "default",
  size = "md",
  label,
  iconLeft,
  iconRight,
  iconOnly = false,
  rounded = true,
  className = "",
  ...props
}: BadgeProps) {
  const LeftIcon = iconLeft ? iconMap[iconLeft] : null;
  const RightIcon = iconRight ? iconMap[iconRight] : null;

  const badgeClassName = [
    "badge",
    variantClasses[variant],
    sizeClasses[size],
    rounded ? "badge--rounded-full" : "badge--rounded-md",
    iconOnly ? "badge--icon-only" : "",
    props.onClick ? "badge--clickable" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span {...props} className={badgeClassName}>
      {LeftIcon ? (
        <LeftIcon className="badge__icon" aria-hidden="true" />
      ) : null}

      {!iconOnly && label ? (
        <span className="badge__label">{label}</span>
      ) : null}

      {!iconOnly && RightIcon ? (
        <RightIcon className="badge__icon" aria-hidden="true" />
      ) : null}
    </span>
  );
}
