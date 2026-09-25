import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { CaretRight } from '@phosphor-icons/react';

type LinkProps = { to: string; children: ReactNode; className?: string };

// Internal routes use the router; mailto/tel/http links use a plain <a>
const Anchor = ({ to, children, className }: LinkProps) =>
  to.startsWith('/') ? (
    <Link to={to} className={className}>{children}</Link>
  ) : (
    <a href={to} className={className}>{children}</a>
  );

/** Apple-style filled pill button. */
export const PillLink = ({ to, children, className = '' }: LinkProps) => (
  <Anchor
    to={to}
    className={`inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-3 text-[17px] font-normal transition-all active:scale-[0.98] ${className}`}
  >
    {children}
  </Anchor>
);

/** Apple-style outline pill, for the secondary action next to a PillLink. */
export const OutlinePillLink = ({ to, children, className = '' }: LinkProps) => (
  <Anchor
    to={to}
    className={`inline-flex items-center justify-center rounded-full border border-current px-6 py-3 text-[17px] transition-all hover:bg-primary hover:border-primary hover:text-white active:scale-[0.98] ${className}`}
  >
    {children}
  </Anchor>
);

/** "Learn more ›" text link. */
export const ChevronLink = ({ to, children, className = '' }: LinkProps) => (
  <Anchor to={to} className={`group inline-flex items-center gap-1 text-[17px] hover:underline underline-offset-4 ${className}`}>
    {children}
    <CaretRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
  </Anchor>
);
