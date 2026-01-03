'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Works', href: '#projects' },
  { name: 'CV', href: '/CV.pdf' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Don't prevent default for external links (like PDF)
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setIsMobileMenuOpen(false)
      }
    } else {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#e9e4e0]/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-lg md:text-xl font-medium hover:opacity-70 transition-opacity"
            style={{ color: '#172A39' }}
          >
            MovicDev
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 p-1 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm md:text-base font-normal transition-all px-4 py-2 rounded-full ${
                  item.name === 'Contact'
                    ? 'text-white hover:opacity-90'
                    : 'hover:opacity-70'
                }`}
                style={item.name === 'Contact' ? { backgroundColor: '#172A39' } : { color: '#172A39' }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden focus:outline-none"
            style={{ color: '#172A39' }}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-px transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                }`}
                style={{ backgroundColor: '#172A39' }}
              />
              <span
                className={`block w-5 h-px transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ backgroundColor: '#172A39' }}
              />
              <span
                className={`block w-5 h-px transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                }`}
                style={{ backgroundColor: '#172A39' }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t"
            style={{ backgroundColor: '#e9e4e0', borderColor: 'rgba(23, 42, 57, 0.1)' }}
          >
            <div className="px-6 py-6 space-y-5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block text-base font-normal transition-all px-4 py-2 rounded-full ${
                    item.name === 'Contact'
                      ? 'text-white hover:opacity-90'
                      : 'hover:opacity-70'
                  }`}
                  style={item.name === 'Contact' ? { backgroundColor: '#172A39' } : { color: '#172A39' }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
