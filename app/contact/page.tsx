'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Mail, Phone, MapPin, Clock, Send, MessageCircle, 
  Loader2, ArrowRight, Sparkles, AlertCircle, CheckCircle
} from 'lucide-react'
import { FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@getrid.ng",
      sub: "support@getrid.ng",
      link: "mailto:hello@getrid.ng"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+234 801 234 5678",
      sub: "Mon-Fri, 9am-5pm",
      link: "tel:+2348012345678"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Lagos, Nigeria",
      sub: "We're fully remote",
      link: null
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      sub: "We read every message",
      link: null
    }
  ]

  const faqs = [
    {
      q: "How do I join the waitlist?",
      a: "Simply enter your email on the homepage and we'll notify you when we launch."
    },
    {
      q: "When is GetRid.ng launching?",
      a: "We're targeting Q2 2026. Join the waitlist to be the first to know."
    },
    {
      q: "Is GetRid.ng free to use?",
      a: "Yes! Basic accounts are free. Business accounts have a subscription for advanced features."
    },
    {
      q: "How does escrow protection work?",
      a: "We hold funds securely until the buyer confirms they've received the item. Then we release payment to the seller."
    }
  ]

  if (submitted) {
    return (
      <>
        <Header />
        <div className="min-h-[70vh] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full text-center bg-white rounded-3xl shadow-xl p-8"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Message sent!</h2>
            <p className="text-slate-500 mb-6">
              Thanks for reaching out. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
            >
              Send another message →
            </button>
          </motion.div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-16">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Get in touch
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                We'd love to hear from you
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Questions? Feedback? Just want to say hi? Drop us a message and we'll get back to you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-slate-100 text-center hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-purple-600 hover:text-purple-700">
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-slate-600">{info.details}</p>
                  )}
                  <p className="text-sm text-slate-400 mt-1">{info.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-slate-50/30 border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-slate-100"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h2>
                <p className="text-slate-500 mb-6">We'll get back to you within 24 hours</p>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Your name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2 group"
                  >
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Send message
                        <Send className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>

              {/* FAQ Preview */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl p-8 border border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Frequently asked questions</h2>
                  <p className="text-slate-500 mb-6">Find quick answers to common questions</p>

                  <div className="space-y-4">
                    {faqs.map((faq, i) => (
                      <details key={i} className="group border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                        <summary className="flex items-center justify-between cursor-pointer list-none py-2">
                          <span className="font-medium text-slate-900">{faq.q}</span>
                          <span className="text-purple-600 group-open:rotate-90 transition">→</span>
                        </summary>
                        <p className="text-slate-500 text-sm pt-2 pb-1">{faq.a}</p>
                      </details>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      href="/faq"
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium group"
                    >
                      View all FAQs
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Follow our journey</h2>
              <p className="text-slate-500 mb-8">Stay updated on our progress and be the first to know when we launch</p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://twitter.com/getridng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition group"
                >
                  <FaTwitter className="h-5 w-5 text-slate-600 group-hover:text-purple-600" />
                </a>
                <a
                  href="https://instagram.com/getridng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition group"
                >
                  <FaInstagram className="h-5 w-5 text-slate-600 group-hover:text-purple-600" />
                </a>
                <a
                  href="https://facebook.com/getridng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition group"
                >
                  <FaFacebook className="h-5 w-5 text-slate-600 group-hover:text-purple-600" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-purple-100 mb-8">Join the waitlist and be the first to know when we launch.</p>
              <Link
                href="/#waitlist"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-purple-50 transition group"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}