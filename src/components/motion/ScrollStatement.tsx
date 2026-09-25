import { useRef } from 'react';
import { m, useScroll, useTransform, useReducedMotion, type MotionValue } from 'motion/react';

const Word = ({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return <m.span style={{ opacity }}>{word} </m.span>;
};

/** A large statement whose words light up one by one as it scrolls through the viewport. */
const ScrollStatement = ({ text, className = '' }: { text: string; className?: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] });
  const words = text.split(' ');

  if (reduce) return <p ref={ref} className={className}>{text}</p>;

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word key={i} word={word} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
      ))}
    </p>
  );
};

export default ScrollStatement;
