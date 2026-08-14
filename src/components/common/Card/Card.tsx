import type { HTMLAttributes, ReactNode } from "react";

import "./Card.css";

export type CardVariant =
  "default" | "outlined" | "dashed" | "primary" | "secondary";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  children: ReactNode;
};

export type CardHeaderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  action?: ReactNode;
};

export type CardContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export type CardFooterProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const variantClasses: Record<CardVariant, string> = {
  default: "card--default",
  outlined: "card--outlined",
  dashed: "card--dashed",
  primary: "card--primary",
  secondary: "card--secondary",
};

export function Card({
  variant = "default",
  children,
  className = "",
  ...props
}: CardProps) {
  const cardClassName = ["card", variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div {...props} className={cardClassName}>
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  action,
  className = "",
  ...props
}: CardHeaderProps) {
  const headerClassName = ["card__header", className].filter(Boolean).join(" ");

  return (
    <div {...props} className={headerClassName}>
      <div className="card__header-content">{children}</div>

      {action ? <div className="card__header-action">{action}</div> : null}
    </div>
  );
}

export function CardContent({
  children,
  className = "",
  ...props
}: CardContentProps) {
  const contentClassName = ["card__content", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div {...props} className={contentClassName}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className = "",
  ...props
}: CardFooterProps) {
  const footerClassName = ["card__footer", className].filter(Boolean).join(" ");

  return (
    <div {...props} className={footerClassName}>
      {children}
    </div>
  );
}
