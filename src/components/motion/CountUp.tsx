import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

/** Counts from 0 to `to` the first time it scrolls into view. Writes to the DOM directly, no re-renders. */
const CountUp = ({ to, suffix = '', className = '' }: { to: number; suffix?: string; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (reduce) {
      el.textContent = `${to.toLocaleString('en-IN')}${suffix}`;
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => { el.textContent = `${Math.round(v).toLocaleString('en-IN')}${suffix}`; },
    });
    return () => controls.stop();
  }, [inView, reduce, to, suffix]);

  // Starts at 0 so the count-up doesn't flash the final number first
  return <span ref={ref} className={className}>{reduce ? `${to.toLocaleString('en-IN')}${suffix}` : `0${suffix}`}</span>;
};

export default CountUp;
