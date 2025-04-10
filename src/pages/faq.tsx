import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

// FAQ item type
type FAQItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
  category: string;
};

const FAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  const filterByCategory = (category: string) => {
    setActiveCategory(category);
  };

  // FAQ data
  const faqItems: FAQItem[] = [
    {
      id: 'what-is-spca',
      question: 'What is SPCA Chandigarh?',
      answer: (
        <p>
          The Society for Prevention of Cruelty to Animals (SPCA) Chandigarh is an animal welfare organization responsible for the protection and care of stray, injured, and abandoned animals in Chandigarh. It operates under the administrative control of the Municipal Corporation Chandigarh and is governed by the Prevention of Cruelty to Animals Act, 1960.
        </p>
      ),
      category: 'general'
    },
    {
      id: 'why-this-website',
      question: 'Why was this website created?',
      answer: (
        <>
          <p className="mb-4">
            This website was created to provide transparency about the documented issues at SPCA Chandigarh that have persisted despite multiple formal complaints and interventions. The goal is to raise awareness and advocate for improvements in animal welfare.
          </p>
          <p>
            By making all evidence publicly available, we hope to create accountability and pressure for meaningful changes to benefit the animals under SPCA's care.
          </p>
        </>
      ),
      category: 'general'
    },
    {
      id: 'main-issues',
      question: 'What are the main issues at SPCA Chandigarh?',
      answer: (
        <>
          <p className="mb-4">The main documented issues include:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Inadequate veterinary care and supervision</li>
            <li>Poor infrastructure and maintenance</li>
            <li>Administrative mismanagement</li>
            <li>Staffing issues including absenteeism</li>
            <li>High mortality rate (47% according to RTI data)</li>
            <li>Lack of essential supplies</li>
            <li>Financial irregularities</li>
          </ul>
          <p>
            You can find detailed documentation of these issues in our <Link href="/documents" className="text-primary hover:underline">documents section</Link> and through the <Link href="/timeline" className="text-primary hover:underline">timeline</Link>.
          </p>
        </>
      ),
      category: 'issues'
    },
    {
      id: 'mortality-rate',
      question: 'What evidence is there of a high mortality rate?',
      answer: (
        <p>
          According to RTI (Right to Information) responses obtained in 2021, approximately 47% of animals (6,383 out of 13,582) brought to SPCA Chandigarh between January 2019 and September 2021 died during treatment. This extraordinarily high mortality rate indicates serious deficiencies in animal care. The original RTI documents are available in our <Link href="/documents" className="text-primary hover:underline">documents section</Link>.
        </p>
      ),
      category: 'data'
    },
    {
      id: 'what-actions-taken',
      question: 'What actions have been taken to address these issues?',
      answer: (
        <>
          <p className="mb-4">
            Several attempts have been made to address these issues, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Formal complaints to the Municipal Commissioner</li>
            <li>Intervention by animal welfare advocate Smt. Maneka Gandhi</li>
            <li>Multiple meetings with officials</li>
            <li>Documentation of issues through official channels</li>
            <li>Volunteer efforts to improve conditions</li>
          </ul>
          <p>
            You can see the full sequence of interventions in our <Link href="/timeline" className="text-primary hover:underline">timeline section</Link>.
          </p>
        </>
      ),
      category: 'actions'
    },
    {
      id: 'any-improvements',
      question: 'Have there been any improvements?',
      answer: (
        <p>
          There have been some limited improvements, particularly in cleanliness and organization under Supervisor Saurav Sharma. Some kennel repairs were also undertaken in January 2025. However, these improvements have been incremental and insufficient to address the fundamental issues. Many critical problems persist, including inadequate veterinary care, staffing issues, and administrative mismanagement.
        </p>
      ),
      category: 'actions'
    },
    {
      id: 'how-to-help',
      question: 'How can I help improve the situation?',
      answer: (
        <>
          <p className="mb-4">
            You can help in several ways:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Share this website to raise awareness</li>
            <li>Contact local officials to express your concern</li>
            <li>If you have relevant evidence or documentation, submit it through our <Link href="/contact" className="text-primary hover:underline">contact form</Link></li>
            <li>Volunteer with local animal welfare organizations</li>
            <li>Support credible animal welfare initiatives in Chandigarh</li>
          </ul>
        </>
      ),
      category: 'actions'
    },
    {
      id: 'legal-implications',
      question: 'What are the legal implications of these issues?',
      answer: (
        <p>
          The documented issues potentially violate several provisions of the Prevention of Cruelty to Animals Act, 1960, and related animal welfare laws. The high mortality rate and inadequate care could constitute neglect under these laws. Additionally, there may be violations of financial regulations regarding the use of public funds. For more information on legal aspects, see our <Link href="/legal" className="text-primary hover:underline">legal cases section</Link>.
        </p>
      ),
      category: 'legal'
    },
    {
      id: 'sources-reliable',
      question: 'Are the sources and documents on this website reliable?',
      answer: (
        <p>
          Yes, all documents on this website are authentic and verifiable. They include official RTI responses, formal complaints, meeting minutes, official communications, and photographic evidence. We maintain strict documentation standards and only publish information that can be substantiated. You can examine the original documents in our <Link href="/documents" className="text-primary hover:underline">documents section</Link>.
        </p>
      ),
      category: 'general'
    },
    {
      id: 'contact-officials',
      question: 'How can I contact officials regarding these issues?',
      answer: (
        <>
          <p className="mb-4">
            You can contact the following officials:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Municipal Commissioner, Chandigarh</li>
            <li>Animal Welfare Board of India</li>
            <li>Honorary Secretary, SPCA Chandigarh</li>
          </ul>
          <p className="mt-4">
            Contact information for these officials is available through our <Link href="/contact" className="text-primary hover:underline">contact page</Link>.
          </p>
        </>
      ),
      category: 'actions'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General Information' },
    { id: 'issues', name: 'SPCA Issues' },
    { id: 'data', name: 'Data & Statistics' },
    { id: 'actions', name: 'Actions & Solutions' },
    { id: 'legal', name: 'Legal Aspects' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Head>
        <title>Frequently Asked Questions | SPCA.wtf</title>
        <meta 
          name="description" 
          content="Answers to common questions about SPCA Chandigarh issues, documentation, and animal welfare concerns."
        />
      </Head>

      <div className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 bg-primary bg-opacity-20 text-primary rounded-md text-sm font-medium mb-4">
              Your Questions Answered
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="title-gradient">Questions</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-500">
              Get answers to common questions about SPCA Chandigarh, the issues documented, and how you can help.
            </p>
          </div>

          {/* Category filters */}
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => filterByCategory(category.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ accordion */}
          <div className="space-y-6">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                  <span>
                    {activeId === item.id ? (
                      <FiChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <FiChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </span>
                </button>
                
                {activeId === item.id && (
                  <div className="px-6 pb-4 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6">
              If you don't see your question answered here, feel free to reach out to us.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ; 