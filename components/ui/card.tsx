import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-paper-line bg-white/70 shadow-[0_1px_0_0_rgba(27,43,38,0.04)]",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
