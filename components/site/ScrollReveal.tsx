"use client";

import * as React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Additional CSS classes added to the inner wrapper */
  innerClassName?: string;
  /** Direction variant: 'up' (default), 'left', 'right' */
  direction?: "up" | "left" | "right";
  /** Delay index 1-6 mapping to 50-300ms */
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Root margin for IntersectionObserver */
  rootMargin?: string;
  /** Whether to render as a specific HTML element */
  as?: keyof React.JSX.IntrinsicElements;
}


export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay,
  rootMargin = "0px 0px -60px 0px",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("sr-visible");
          observer.unobserve(el);
        }
      },
      { rootMargin, threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  const dirClass =
    direction === "left" ? "sr-left" : direction === "right" ? "sr-right" : "";
  const delayClass = delay ? `sr-delay-${delay}` : "";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      className={`sr-item ${dirClass} ${delayClass} ${className}`}
    >
      {children}
    </Component>
  );
}

/**
 * Convenience wrapper that reveals a group of children with staggered delays.
 */
export function ScrollRevealGroup({
  children,
  className = "",
  direction = "up",
  rootMargin = "0px 0px -40px 0px",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  rootMargin?: string;
}) {
  return (
    <>
      {React.Children.map(children, (child, i) => (
        <ScrollReveal
          key={i}
          delay={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}
          direction={direction}
          className={className}
          rootMargin={rootMargin}
        >
          {child}
        </ScrollReveal>
      ))}
    </>
  );
}
