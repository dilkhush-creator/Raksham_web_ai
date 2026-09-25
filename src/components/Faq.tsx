import { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import { AnimatePresence, m } from 'motion/react';
import Section from './motion/Section';

const faqs = [
  {
    question: 'What is Raksham workforce management software used for?',
    answer: 'Raksham simplifies workforce management, tracking attendance, payroll, and employee records, ensuring smooth operations and compliance for businesses.'
  },
  {
    question: 'How does Raksham improve payroll accuracy?',
    answer: 'Raksham automates payroll processes, reducing human errors and ensuring accurate, compliant payroll management for businesses of all sizes.'
  },
  {
    question: 'Can Raksham help track employee attendance effectively?',
    answer: 'Yes, Raksham offers real-time attendance tracking, helping businesses monitor employee work hours and improve overall workforce productivity.'
  },
  {
    question: 'Is Raksham suitable for small businesses too?',
    answer: 'Absolutely! Raksham is designed to scale, offering flexible tools for both small and large businesses to manage their workforce.'
  },
  {
    question: 'How secure is Raksham for businesses?',
    answer: 'Raksham uses advanced security protocols to safeguard your company’s sensitive data, ensuring it’s protected from unauthorized access.'
  },
  {
    question: 'Does Raksham offer mobile app support?',
    answer: 'Yes, Raksham provides a user-friendly mobile app, allowing businesses to manage attendance, payroll, and records on the go.'
  }
];

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-line">
      <button
        className="w-full py-6 text-left flex justify-between items-center gap-6 focus-visible:outline-2 focus-visible:outline-primary rounded"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg md:text-xl text-ink tracking-tight">{question}</span>
        <CaretDown
          size={22}
          className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-gray-400'}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-10 text-lg text-body leading-relaxed">{answer}</p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  return (
    <Section id="faq" className="py-24 md:py-32 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-ink tracking-tight mb-4">Questions? Answers.</h2>
        <p className="text-lg text-body mb-10">
          Common questions about Raksham’s workforce management software.
        </p>
        <div className="border-t border-line">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Faq;
