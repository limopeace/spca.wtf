import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About SPCA.wtf</h3>
            <p className="text-gray-400">
              A transparency portal documenting issues at the SPCA Chandigarh animal shelter.
              Our mission is to expose problems and advocate for better animal welfare.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/documents" className="text-gray-400 hover:text-white">
                  Documents
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-400 hover:text-white">
                  Legal Cases
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="text-gray-400 hover:text-white">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Take Action</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Report Issues
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-gray-400 hover:text-white">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-white">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} SPCA.wtf - Fighting for Animal Welfare
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 