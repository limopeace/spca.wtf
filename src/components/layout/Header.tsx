import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Add scroll event listener to change header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Prevent body scrolling when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <header className={`sticky top-0 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-white bg-opacity-95'} transition-all duration-200`}>
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
              <Link href="/help" className="text-gray-600 hover:text-primary font-medium">
                How to Help
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
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
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
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        />
      )}
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-xl font-bold text-white">Menu</span>
          <button 
            onClick={toggleMobileMenu}
            className="text-white p-2 hover:bg-gray-700 rounded-full"
            aria-label="Close menu"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <div className="py-3 overflow-y-auto max-h-screen">
          <Link
            href="/"
            className="block px-5 py-3 text-white text-lg font-medium hover:bg-gray-700"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/help"
            className="block px-5 py-3 text-white text-lg font-medium bg-gray-700 border-l-4 border-primary"
            onClick={toggleMobileMenu}
          >
            How to Help
          </Link>
          <Link
            href="/timeline"
            className="block px-5 py-3 text-gray-300 text-lg font-medium hover:bg-gray-700 hover:text-white"
            onClick={toggleMobileMenu}
          >
            Timeline
          </Link>
          <Link
            href="/faq"
            className="block px-5 py-3 text-gray-300 text-lg font-medium hover:bg-gray-700 hover:text-white"
            onClick={toggleMobileMenu}
          >
            FAQ
          </Link>
          <Link
            href="/documents"
            className="block px-5 py-3 text-gray-300 text-lg font-medium hover:bg-gray-700 hover:text-white"
            onClick={toggleMobileMenu}
          >
            Documents
          </Link>
          <Link
            href="/legal"
            className="block px-5 py-3 text-gray-300 text-lg font-medium hover:bg-gray-700 hover:text-white"
            onClick={toggleMobileMenu}
          >
            Legal Cases
          </Link>
          <Link
            href="/privacy-policy"
            className="block px-5 py-3 text-gray-300 text-lg font-medium hover:bg-gray-700 hover:text-white"
            onClick={toggleMobileMenu}
          >
            Privacy Policy
          </Link>
          <Link
            href="/disclaimer"
            className="block px-5 py-3 text-gray-300 text-lg font-medium hover:bg-gray-700 hover:text-white"
            onClick={toggleMobileMenu}
          >
            Disclaimer
          </Link>
          <div className="px-5 pt-6">
            <Link
              href="/about"
              className="block px-4 py-3 text-center rounded-md bg-primary text-white text-lg font-medium hover:bg-opacity-90"
              onClick={toggleMobileMenu}
            >
              About the Initiative
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 