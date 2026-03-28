'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Mail, MapPin, ArrowUpRight, Sparkles } from 'lucide-react'
import {FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { name: 'How it works', href: '/#how-it-works' },
      { name: 'Features', href: '/#features' },
      { name: 'For Business', href: '/business' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    social: [
      { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com/getridng' },
      { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/getridng' },
      { name: 'Facebook', icon: FaFacebook, href: 'https://facebook.com/getridng' },
      { name: 'Email', icon: Mail, href: 'mailto:hello@getrid.ng' }
    ]
  }

  return (
    <footer className="relative bg-slate-900 text-slate-400 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 group mb-4">
              <motion.div whileHover={{ scale: 1.05 }} className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">G</span>
              </motion.div>
              <span className="text-xl font-semibold text-white">GetRid.ng</span>
            </Link>
            <p className="text-slate-400 text-sm mb-4 max-w-md">
              Nigeria's student marketplace for buying and selling used items. Secure, verified, and built for campus life.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="h-4 w-4" />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="flex gap-4 mt-6">
              {links.social.map((social, i) => (
                <motion.a key={i} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition group">
                  <social.icon className="h-4 w-4 text-slate-400 group-hover:text-white transition" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link, i) => (
                <motion.li key={i} whileHover={{ x: 2 }}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link, i) => (
                <motion.li key={i} whileHover={{ x: 2 }}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link, i) => (
                <motion.li key={i} whileHover={{ x: 2 }}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span>© {currentYear} GetRid.ng</span>
              <span className="w-1 h-1 bg-slate-600 rounded-full" />
              <span className="text-slate-500">All rights reserved</span>
            </div>
            <div className="flex items-center gap-1 text-slate-500">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-red-500 fill-red-500" />
              <span>for Nigerian students</span>
              <span className="ml-1 text-lg">🇳🇬</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}