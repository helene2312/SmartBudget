import type { HTMLAttributes } from "react";

import { iconMap, type IconName } from "../../IconMap/icon";

import "./IconBadge.css";

export type IconBadgeVariant = "default" | "primary" | "secondary" | "neutral";

export type IconBadgeSize = "sm" | "md" | "lg" | "xl";

export type IconBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  icon: IconName;
  variant?: IconBadgeVariant;
  size?: IconBadgeSize;
  rounded?: boolean;
};

const variantClasses: Record<IconBadgeVariant, string> = {
  default: "icon-badge--default",
  primary: "icon-badge--primary",
  secondary: "icon-badge--secondary",
  neutral: "icon-badge--neutral",
};

const sizeClasses: Record<IconBadgeSize, string> = {
  sm: "icon-badge--sm",
  md: "icon-badge--md",
  lg: "icon-badge--lg",
  xl: "icon-badge--xl",
};

export function IconBadge({
  icon,
  variant = "default",
  size = "md",
  rounded = false,
  className = "",
  ...props
}: IconBadgeProps) {
  const Icon = iconMap[icon];

  const iconBadgeClassName = [
    "icon-badge",
    variantClasses[variant],
    sizeClasses[size],
    rounded ? "icon-badge--rounded-full" : "icon-badge--rounded-md",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span {...props} className={iconBadgeClassName}>
      <Icon className="icon-badge__icon" aria-hidden="true" />
    </span>
  );
}
