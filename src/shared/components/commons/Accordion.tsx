import { ReactNode, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        type="button"
        onClick={toggleAccordion}
        className="relative z-10 flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 rounded-lg"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="border-t border-gray-200 px-4 py-3">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;