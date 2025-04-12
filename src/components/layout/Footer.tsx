import React from 'react'
import Link from 'next/link'
import { FiMail } from 'react-icons/fi'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold text-white">SPCA.wtf</p>
            <p className="text-sm">
              An independent initiative documenting animal welfare transparency.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 justify-center">
            <Link href="/about" className="text-sm hover:text-white transition-colors">About</Link>
            <Link href="/timeline" className="text-sm hover:text-white transition-colors">Timeline</Link>
            <Link href="/documents" className="text-sm hover:text-white transition-colors">Documents</Link>
            <Link href="/faq" className="text-sm hover:text-white transition-colors">FAQ</Link>
            <Link href="/legal" className="text-sm hover:text-white transition-colors">Legal</Link>
            <Link href="/privacy-policy" className="text-sm hover:text-white transition-colors">Privacy</Link>
            <Link href="/disclaimer" className="text-sm hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} SPCA.wtf (Welfare Transparency Framework)</p>
          <a href="mailto:info@spca.wtf" className="flex items-center hover:text-white transition-colors mt-2 md:mt-0">
            <FiMail className="mr-2" /> info@spca.wtf
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 