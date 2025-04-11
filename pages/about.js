import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  const websiteName = "SPCA.wtf";
  const authorName = "Chandigarh Animal Rights Advocates";
  const authorRole = "Transparency Initiative Team";
  const authorQualifications = "We are a group of citizens, animal welfare advocates, and legal professionals concerned about the treatment of animals at SPCA Chandigarh. Our team has been monitoring the situation since 2018 through regular site visits, RTI requests, and court proceedings.";
  const websiteMotivation = "This website documents and presents evidence of systemic issues at the Society for Prevention of Cruelty to Animals (SPCA) Chandigarh. Our goal is to create transparency around animal welfare concerns that have been raised for years but remain unaddressed. By consolidating court records, RTI responses, and official communications, we aim to present a clear picture of the ongoing situation.";
  const commitmentToAccuracy = `We are committed to presenting information accurately and transparently. Factual claims on this site are supported by citations linking to detailed source information on the <a href="/sources">Sources page</a>. This page explains our methodology for source verification and reliability assessment. We distinguish factual reporting from commentary or analysis. While we strive for accuracy, errors may occur. If you identify a factual inaccuracy, please use the <a href="/report-error">Report Error form</a> to notify us.`;
  const contactMethod = `via email at <a href="mailto:info@spca.wtf">info@spca.wtf</a> or through our <a href="/contact">contact form</a>`;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Head>
        <title>About | {websiteName}</title>
        <meta name="description" content={`Learn more about ${authorName} and the purpose and methodology of ${websiteName}.`} />
      </Head>

      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About {websiteName}</h1>
        {authorRole && <p className="text-xl text-gray-600">{authorRole}</p>}
      </header>

      <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#author" className="text-primary hover:underline">About Us</a></li>
                <li><a href="#motivation" className="text-primary hover:underline">Our Purpose</a></li>
                <li><a href="#accuracy" className="text-primary hover:underline">Accuracy Commitment</a></li>
                <li><a href="#contact" className="text-primary hover:underline">Contact Information</a></li>
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-3"> 
            <h2 id="author" className="text-2xl font-bold mb-4 text-gray-800">Who We Are</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              This website is maintained by {authorName}. {authorQualifications}
            </p>
            
            <h2 id="motivation" className="text-2xl font-bold mb-4 text-gray-800">Purpose of This Website</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {websiteMotivation}
            </p>
            
            <h2 id="accuracy" className="text-2xl font-bold mb-4 text-gray-800">Commitment to Accuracy & Transparency</h2>
            <p className="mb-6 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: commitmentToAccuracy }}></p>
            
            <h2 id="contact" className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
            <p className="mb-3 text-gray-700 leading-relaxed">
               For general inquiries (please use the specific forms for error reporting or media requests), you can reach out {contactMethod}.
            </p>
            <p className="text-gray-700 leading-relaxed">
                Please refer to the <Link href="/press-media-guidelines" className="text-primary hover:underline">Press/Media Guidelines</Link> for media inquiries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 