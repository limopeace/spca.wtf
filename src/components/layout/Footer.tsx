import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">SPCA.wtf</h3>
            <p className="text-sm">
              An independent initiative for documenting and raising awareness about SPCA Chandigarh.
            </p>
            <p className="text-xs mt-2">
              This site is not affiliated with the official SPCA organization.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About the Initiative</Link></li>
              <li><Link href="/timeline" className="hover:text-white transition-colors">Timeline</Link></li>
              <li><Link href="/documents" className="hover:text-white transition-colors">Documents</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">Legal Cases</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact & Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@spca.wtf" className="flex items-center hover:text-white transition-colors">
                  <FiMail className="mr-2" /> info@spca.wtf
                </a>
              </li>
              <li className="pt-2">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer & Terms</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {currentYear} SPCA.wtf. All rights reserved.</p>
          <p className="text-xs mt-1">Content is provided for informational purposes only. Please read the full <Link href="/disclaimer" className="underline hover:text-white">Disclaimer</Link>.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 