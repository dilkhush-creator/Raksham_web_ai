import { Children, type ReactNode } from 'react';
import { m } from 'motion/react';

/** Hero entrance: each child rises in, one after another. */
const Rise = ({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <div className={className}>
    {Children.toArray(children).map((child, i) => (
      <m.div
        key={i}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: delay + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        {child}
      </m.div>
    ))}
  </div>
);

export default Rise;
