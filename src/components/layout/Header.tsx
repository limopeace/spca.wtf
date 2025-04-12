import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-white bg-opacity-70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                SPCA<span className="text-primary">.wtf</span>
              </span>
            </Link>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <Link href="/" className="text-gray-900 hover:text-primary font-medium">
                Home
              </Link>
              <Link href="/timeline" className="text-gray-600 hover:text-primary font-medium">
                Timeline
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-primary font-medium">
                FAQ
              </Link>
              <Link href="/documents" className="text-gray-600 hover:text-primary font-medium">
                Documents
              </Link>
              <Link href="/legal" className="text-gray-600 hover:text-primary font-medium">
                Legal Cases
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center">
            <Link
              href="/about"
              className="hidden md:flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              About the Initiative
            </Link>
            
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 z-50 bg-dark transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={toggleMobileMenu}
            className="text-white p-2"
            aria-label="Close menu"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <div className="px-4 pt-2 pb-5 space-y-3">
          <Link
            href="/"
            className="block px-4 py-3 rounded-md text-white text-lg font-medium hover:bg-gray-700"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/timeline"
            className="block px-4 py-3 rounded-md text-gray-300 text-lg font-medium hover:bg-gray-700 hover:text-white"
            onClick={toggleMobileMenu}
          >
            Timeline
          </Link>
          <Link
            href="/faq"
            className="block px-4 py-3 rounded-md text-gray-300 text-lg font-medium hover:bg-gray-700 hover:text-white"
            onClick={toggleMobileMenu}
          >
            FAQ
          </Link>
          <Link
            href="/documents"
            className="block px-4 py-3 rounded-md text-gray-300 text-lg font-medium hover:bg-gray-700 hover:text-white"
            onClick={toggleMobileMenu}
          >
            Documents
          </Link>
          <Link
            href="/legal"
            className="block px-4 py-3 rounded-md text-gray-300 text-lg font-medium hover:bg-gray-700 hover:text-white"
            onClick={toggleMobileMenu}
          >
            Legal Cases
          </Link>
          <Link
            href="/about"
            className="block mt-6 px-4 py-3 text-center rounded-md bg-primary text-white text-lg font-medium hover:bg-opacity-90"
            onClick={toggleMobileMenu}
          >
            About the Initiative
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header 