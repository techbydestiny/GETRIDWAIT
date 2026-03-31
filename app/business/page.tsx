'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, CheckCircle, BarChart, Users, Store, Shield, Zap, Mail, Loader2, 
  TrendingUp, CreditCard, Package, MessageCircle, Building2, UserPlus, DollarSign,
  Sparkles, Lock, Globe
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WaitlistForm from '@/components/WaitlistForm'

export default function BusinessPage() {
  const [email, setEmail] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, businessName, type: 'business' })
      })
      if (response.ok) setSubmitted(true)
    } catch (error) { console.error('Error:', error) }
    finally { setIsLoading(false) }
  }

  const benefits = [
    { icon: Package, title: "Unlimited listings", description: "No per-item fees. List as much as you want." },
    { icon: Store, title: "Custom store page", description: "Your branding, your story. Stand out from the crowd." },
    { icon: BarChart, title: "Advanced analytics", description: "Track sales, views, and customer behavior." },
    { icon: Users, title: "Customer insights", description: "Know who's buying and what they want." },
    { icon: Shield, title: "Verified badge", description: "Build trust with our business verification." },
    { icon: Zap, title: "Priority support", description: "Skip the line. Get help when you need it." }
  ]

  const steps = [
    { step: "01", title: "Sign up for business", description: "Create your business account with your CAC or business registration details.", icon: UserPlus, detail: "Get verified in 24-48 hours" },
    { step: "02", title: "Set up your store", description: "Customize your store page with your logo, banner, and business story.", icon: Store, detail: "Your brand, your identity" },
    { step: "03", title: "List your products", description: "Add photos, descriptions, and prices. List unlimited items with no fees.", icon: Package, detail: "Sell electronics, fashion, books, and more" },
    { step: "04", title: "Connect with students", description: "Chat with interested buyers, answer questions, and negotiate prices.", icon: MessageCircle, detail: "Build relationships" },
    { step: "05", title: "Get paid securely", description: "Receive payments via escrow. Money released when buyer confirms delivery.", icon: DollarSign, detail: "Safe transactions" },
    { step: "06", title: "Grow your business", description: "Use analytics to track sales, understand customers, and scale your reach.", icon: TrendingUp, detail: "Data-driven decisions" }
  ]

  if (submitted) {
    return (
      <>
        <Header />
        <div className="min-h-[80vh] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md w-full text-center bg-white rounded-3xl shadow-xl p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle className="h-10 w-10 text-green-600" /></div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Thanks for your interest!</h2>
            <p className="text-slate-500 mb-6">We'll contact you when GetRid.ng for Business is ready.</p>
            <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group">← Back to home</Link>
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
        {/* Hero - Fixed spacing */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Building2 className="h-4 w-4" /> For Businesses <Sparkles className="h-3 w-3" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Sell to <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Nigerian students</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto">
              Reach thousands of students across Nigerian universities. List unlimited items, get your own store page, and track your sales.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="max-w-md mx-auto" id="waitlist">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <input 
                    type="text" 
                    value={businessName} 
                    onChange={(e) => setBusinessName(e.target.value)} 
                    placeholder="Business name" 
                    className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition" 
                    required 
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Business email" 
                    className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition" 
                    required 
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isLoading} 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2 group"
                >
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <>Join waitlist for Business <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" /></>}
                </button>
              </form>
              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> No spam</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3" /> First month free</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span className="flex items-center gap-1"><Globe className="h-3 w-3" /> Nigeria only</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits - Everything you need to grow */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Everything you need to grow</h2>
              <p className="text-xl text-slate-500">Built for businesses selling to students</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }} 
                  className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-purple-200 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <benefit.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Detailed steps */}
        <section className="py-24 bg-slate-50/30 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">How it works</h2>
              <p className="text-xl text-slate-500">Get started in six simple steps</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }} 
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="text-2xl font-bold text-purple-200">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm mb-3">{step.description}</p>
                  <div className="flex items-center gap-2 text-sm text-purple-600 pt-3 border-t border-slate-100">
                    <CheckCircle className="h-4 w-4" />
                    <span>{step.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Simple, transparent pricing</h2>
              <p className="text-xl text-slate-500">No hidden fees. No surprises.</p>
            </motion.div>
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }} 
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 text-white text-center"
              >
                <div className="absolute inset-0 bg-grid-white/5" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
                    <Sparkles className="h-4 w-4" /> Limited time offer
                  </div>
                  <div className="text-5xl md:text-6xl font-bold mb-2">₦10,000</div>
                  <div className="text-slate-300 mb-6">/month • First month free</div>
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <span className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-400" /> No setup fee</span>
                    <span className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-400" /> Cancel anytime</span>
                    <span className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-400" /> Free support</span>
                  </div>
                  <Link href="#waitlist" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition group">
                    Join waitlist <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} 
              className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to reach Nigerian students?</h2>
              <p className="text-purple-100 mb-8 max-w-lg mx-auto">Join the waitlist for early access. First month free.</p>
              <Link href="#waitlist" className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-purple-50 transition group">
                Join business waitlist <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}