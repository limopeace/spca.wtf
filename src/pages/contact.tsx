import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiInfo, FiMail, FiPhone, FiMapPin, FiUploadCloud, FiCheck, FiAlertTriangle } from 'react-icons/fi';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    isAnonymous: false,
    hasEvidence: false,
    fileDescription: '',
  });
  
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [fileSelected, setFileSelected] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hasFiles = !!(e.target.files && e.target.files.length > 0);
    setFileSelected(hasFiles);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      // This would be replaced with actual form submission logic
      if (Math.random() > 0.2) { // Simulate 80% success rate
        setSubmitStatus('success');
        // Reset form after success
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          isAnonymous: false,
          hasEvidence: false,
          fileDescription: '',
        });
        setFileSelected(false);
      } else {
        setSubmitStatus('error');
      }
    }, 1500);
  };
  
  return (
    <>
      <Head>
        <title>Contact Us | SPCA.wtf</title>
        <meta 
          name="description" 
          content="Report issues or submit evidence related to SPCA Chandigarh. Help us improve animal welfare."
        />
      </Head>

      {/* Disclaimer Banner - Gen Z Style */}
      <section className="bg-yellow-100 py-4 border-t border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <span className="text-yellow-600 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-yellow-800">
                  <span className="font-bold">Heads up!</span> This is <span className="underline">not</span> the official SPCA Chandigarh website.
                </p>
                <p className="text-sm text-yellow-700 max-w-2xl">
                  We're just keeping it 💯 about what's happening at SPCA Chandigarh specifically. 
                  This is a public awareness vibe for citizens and officials to see the full picture.
                  Social media coming soon! <span className="text-xs">(No cap)</span>
                </p>
              </div>
            </div>
            <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-200 text-yellow-800 rounded-md hover:bg-yellow-300 transition-colors text-sm font-medium whitespace-nowrap">
              Read Our Whitepaper
            </a>
          </div>
        </div>
      </section>

      {/* Coming Soon Overlay */}
      <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-70 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg max-w-md mx-auto text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold mb-3">Coming Soon!</h2>
          <p className="text-gray-600 mb-4">
            Our contact form is under development. 
            For urgent inquiries, please email us directly at info@spca.wtf
          </p>
          <Link href="/" className="inline-block px-5 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>

      <div className="py-12 bg-white filter blur-sm pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 bg-primary bg-opacity-20 text-primary rounded-md text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Report Issues or <span className="title-gradient">Submit Evidence</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-500">
              Have information about SPCA Chandigarh that should be documented? Use this form to contact us or submit evidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact information */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FiMail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">info@spca.wtf</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FiMapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        SPCA Chandigarh is located at <br />
                        Industrial Area, Phase I, <br />
                        Chandigarh, 160002
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FiInfo className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Important Note</h3>
                        <p className="text-gray-600 mb-4">
                          All submissions are reviewed for accuracy and relevance. We only publish information that can be verified.
                        </p>
                        <p className="text-gray-600">
                          For animal emergencies in Chandigarh, please contact the SPCA helpline directly at <strong>0172-2656025</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                {submitStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-md p-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <FiCheck className="h-5 w-5 text-green-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-green-800">Thank you for your submission</h3>
                        <div className="mt-2 text-green-700">
                          <p>
                            We've received your message and will review it promptly. If you provided contact information, we'll respond within 2-3 business days.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : submitStatus === 'error' ? (
                  <div className="bg-red-50 border border-red-200 rounded-md p-6 mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <FiAlertTriangle className="h-5 w-5 text-red-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-red-800">There was an error submitting your form</h3>
                        <div className="mt-2 text-red-700">
                          <p>
                            Please try again or contact us directly at info@spca.wtf if the problem persists.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className={submitStatus === 'success' ? 'hidden' : ''}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={formData.isAnonymous || submitStatus === 'loading'}
                        className={`w-full px-4 py-2 border ${formData.isAnonymous ? 'bg-gray-100 border-gray-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                        placeholder={formData.isAnonymous ? 'Anonymous submission' : 'Your name'}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={formData.isAnonymous || submitStatus === 'loading'}
                        className={`w-full px-4 py-2 border ${formData.isAnonymous ? 'bg-gray-100 border-gray-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                        placeholder={formData.isAnonymous ? 'Anonymous submission' : 'Your email'}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={submitStatus === 'loading'}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Subject of your message"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={submitStatus === 'loading'}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Provide details about your report or evidence"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="hasEvidence"
                        name="hasEvidence"
                        checked={formData.hasEvidence}
                        onChange={handleCheckboxChange}
                        disabled={submitStatus === 'loading'}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="hasEvidence" className="ml-2 block text-sm text-gray-700">
                        I have evidence to upload (documents, photos, videos)
                      </label>
                    </div>
                  </div>
                  
                  {formData.hasEvidence && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-md">
                      <div className="mb-4">
                        <label htmlFor="fileDescription" className="block text-sm font-medium text-gray-700 mb-1">
                          Description of Evidence
                        </label>
                        <input
                          type="text"
                          id="fileDescription"
                          name="fileDescription"
                          value={formData.fileDescription}
                          onChange={handleChange}
                          disabled={submitStatus === 'loading'}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Briefly describe what you're uploading"
                        />
                      </div>
                      
                      <div className="border-dashed border-2 border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                        <FiUploadCloud className="h-10 w-10 text-gray-400 mb-4" />
                        <p className="text-sm text-gray-500 mb-2">
                          Drag and drop files here, or click to browse
                        </p>
                        <p className="text-xs text-gray-400 mb-4">
                          Accepted formats: PDF, JPG, PNG, MP4 (Max size: 20MB)
                        </p>
                        <input
                          type="file"
                          id="file"
                          name="file"
                          onChange={handleFileChange}
                          disabled={submitStatus === 'loading'}
                          className="hidden"
                        />
                        <label
                          htmlFor="file"
                          className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md cursor-pointer hover:bg-opacity-90 transition-colors"
                        >
                          {fileSelected ? 'File Selected' : 'Select Files'}
                        </label>
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="isAnonymous"
                        name="isAnonymous"
                        checked={formData.isAnonymous}
                        onChange={handleCheckboxChange}
                        disabled={submitStatus === 'loading'}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="isAnonymous" className="ml-2 block text-sm text-gray-700">
                        I want to submit this information anonymously
                      </label>
                    </div>
                    {formData.isAnonymous && (
                      <p className="mt-2 text-sm text-gray-500">
                        Note: We won't be able to contact you for follow-up information.
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className="w-full px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitStatus === 'loading' ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : 'Submit Report'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact; 