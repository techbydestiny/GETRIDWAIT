'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-sm">G</span>
            </motion.div>
            <span className="font-semibold text-slate-900">GetRid.ng</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/#how-it-works" className="text-sm text-slate-500 hover:text-slate-900 transition">
              How it works
            </Link>
            <Link href="/business" className="text-sm text-slate-500 hover:text-slate-900 transition">
              Business
            </Link>
            <Link
              href="/#waitlist"
              className="group flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition"
            >
              <Sparkles className="h-3 w-3" />
              Join waitlist
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-slate-100"
            >
              <div className="flex flex-col space-y-3">
                <Link href="/#how-it-works" className="text-slate-500 py-2" onClick={() => setIsOpen(false)}>
                  How it works
                </Link>
                <Link href="/business" className="text-slate-500 py-2" onClick={() => setIsOpen(false)}>
                  Business
                </Link>
                <Link href="/#waitlist" className="bg-slate-900 text-white px-5 py-2 rounded-full text-center" onClick={() => setIsOpen(false)}>
                  Join waitlist
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}