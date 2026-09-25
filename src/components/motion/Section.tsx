import { m, type HTMLMotionProps } from 'motion/react';

/** A <section> that fades up once when it scrolls into view. */
const Section = (props: HTMLMotionProps<'section'>) => (
  <m.section
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.08 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    {...props}
  />
);

export default Section;
