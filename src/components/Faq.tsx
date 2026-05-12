import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
    <div className="border border-light-gray rounded-xl overflow-hidden bg-white mb-4 shadow-sm hover:shadow-md transition-shadow">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg text-dark">{question}</span>
        {isOpen ? <ChevronUp className="text-primary flex-shrink-0 ml-4" /> : <ChevronDown className="text-gray flex-shrink-0 ml-4" />}
      </button>
      <div 
        className={`px-6 text-gray overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section id="faq" className="py-24 bg-gray-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray">
            Explore common questions about Raksham’s workforce management software.
          </p>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
