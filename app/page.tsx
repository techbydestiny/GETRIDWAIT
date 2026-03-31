'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { 
  ArrowRight, Shield, MessageCircle, Users, Package, Star, CheckCircle, Lock, Globe,
  Sparkles, Zap, Smartphone, CreditCard, ChevronRight, Mail, Loader2,
  TrendingUp, UserPlus, DollarSign, Camera, Store, MessageSquare
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WaitlistForm from '@/components/WaitlistForm'

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 })

  const features = [
    { icon: Shield, title: "Escrow protection", description: "Funds held securely until you receive your item" },
    { icon: MessageCircle, title: "Integrated messaging", description: "Chat, negotiate, arrange delivery all in one place" },
    { icon: Users, title: "Verified community", description: "Every seller verified with NIN or Student ID" },
    { icon: Smartphone, title: "Mobile-first", description: "Sell in under a minute from your phone" }
  ]

  const steps = [
    { 
      step: "01", 
      title: "Create account", 
      description: "Sign up with your university email. It takes less than a minute.", 
      icon: UserPlus,
      detail: "Free to join"
    },
    { 
      step: "02", 
      title: "List your item", 
      description: "Snap a photo, add a description, set your price. Your item goes live instantly.", 
      icon: Camera,
      detail: "No listing fees"
    },
    { 
      step: "03", 
      title: "Connect with buyers", 
      description: "Chat with interested students, answer questions, and negotiate price.", 
      icon: MessageSquare,
      detail: "Real-time messaging"
    },
    { 
      step: "04", 
      title: "Get paid securely", 
      description: "Money held in escrow until buyer confirms receipt. Then it's in your wallet.", 
      icon: DollarSign,
      detail: "100% safe"
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero - Fixed Spacing */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
          
          <motion.div style={{ opacity: springOpacity, scale: springScale }} className="relative max-w-7xl mx-auto px-6 py-16 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" /> Launching in Nigeria <Zap className="h-3 w-3" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
              Get rid of what you don't need.
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Get what you do.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
              Nigeria's student marketplace. Secure, verified, and built for campus life.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="max-w-md mx-auto" id="waitlist">
              <WaitlistForm />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> No spam</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3" /> Early access</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span className="flex items-center gap-1"><Globe className="h-3 w-3" /> Nigeria only</span>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-slate-400 rounded-full mt-2" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features - Simplified Single Color */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Built for trust and simplicity
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Every feature designed to make campus transactions safer and easier
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Detailed, matching business page style */}
        <section id="how-it-works" className="py-24 bg-slate-50/30 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Sell in four simple steps
              </h2>
              <p className="text-xl text-slate-500">From listing to cash in your pocket</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all"
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

        {/* Business Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-12 md:p-16"
            >
              <div className="absolute inset-0 bg-grid-white/5" />
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-6">
                    <TrendingUp className="h-4 w-4" /> For businesses
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Sell to Nigerian students
                  </h2>
                  <p className="text-slate-300 text-lg max-w-md">
                    Business accounts with unlimited listings, custom store pages, and analytics.
                  </p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 min-w-[280px]">
                  <div className="text-5xl font-bold text-white mb-2">₦10,000</div>
                  <div className="text-slate-300 mb-4">/month • First month free</div>
                  <Link
                    href="/business"
                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-medium hover:bg-slate-100 transition group"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Ready to get rid of your stuff?
              </h2>
              <p className="text-xl text-slate-500 mb-8">
                Join thousands of Nigerian students waiting for early access.
              </p>
              <div className="max-w-md mx-auto">
                <WaitlistForm />
              </div>
              <p className="mt-6 text-sm text-slate-400">
                First 1,000 students get free premium for life. 🎁
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}