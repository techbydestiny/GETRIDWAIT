'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { 
  ArrowRight, Shield, MessageCircle, Users, Package, Star, CheckCircle, Lock, Globe,
  Sparkles, Zap, Smartphone, CreditCard, ChevronRight, Mail, Loader2, TrendingUp
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
    { icon: Shield, title: "Escrow protection", description: "Funds held securely until you receive your item", color: "from-emerald-500 to-teal-500" },
    { icon: MessageCircle, title: "Integrated messaging", description: "Chat, negotiate, arrange delivery all in one place", color: "from-blue-500 to-cyan-500" },
    { icon: Users, title: "Verified community", description: "Every seller verified with NIN or Student ID", color: "from-purple-500 to-pink-500" },
    { icon: Smartphone, title: "Mobile-first", description: "Sell in under a minute from your phone", color: "from-orange-500 to-red-500" }
  ]

  const stats = [
    { number: "10,000+", label: "Students", suffix: "waiting" },
    { number: "₦50M+", label: "Transaction volume", suffix: "projected" },
    { number: "500+", label: "Daily listings", suffix: "expected" },
    { number: "98%", label: "Satisfaction", suffix: "rate" }
  ]

  const steps = [
    { step: "01", title: "Create account", desc: "Sign up with your university email" },
    { step: "02", title: "List item", desc: "Add photos, set price, publish" },
    { step: "03", title: "Connect", desc: "Chat with interested buyers" },
    { step: "04", title: "Get paid", desc: "Money released when buyer confirms" }
  ]

  const testimonials = [
    { name: "Oluwaseun Adebayo", role: "Computer Science, UNILAG", text: "Listed my laptop at 2pm. Sold by 5pm. The escrow system made it feel completely safe.", avatar: "O" },
    { name: "Chioma Okonkwo", role: "Business Admin, UNN", text: "Found all my textbooks for the semester. Saved over ₦50,000. This is a game changer.", avatar: "C" },
    { name: "Emeka Okafor", role: "Entrepreneur, OAU", text: "Business account paid for itself in the first week. Students are always buying.", avatar: "E" }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
          
          <motion.div style={{ opacity: springOpacity, scale: springScale }} className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" /> Launching in Nigeria <Zap className="h-3 w-3" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              Get rid of what you don't need.<br />
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

        {/* Stats */}
        <section className="py-24 border-y border-slate-100 bg-slate-50/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                  <div className="text-slate-500 font-medium">{stat.label}</div>
                  <div className="text-sm text-slate-400">{stat.suffix}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
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

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-slate-50/30 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Sell in four simple steps</h2>
              <p className="text-xl text-slate-500">From listing to cash in your pocket</p>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Trusted by students</h2>
            <p className="text-xl text-slate-500">What early users are saying</p>
          </div>
          <div className="relative">
            <div className="flex gap-6 animate-marquee">
              {[...testimonials, ...testimonials].map((t, i) => (
                <motion.div key={i} whileHover={{ scale: 1.02 }} className="flex-none w-[400px] bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">{t.avatar}</div>
                    <div><p className="font-semibold text-slate-900">{t.name}</p><p className="text-sm text-slate-400">{t.role}</p></div>
                  </div>
                  <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => (<Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}</div>
                  <p className="text-slate-600 italic">"{t.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-12 md:p-16">
              <div className="absolute inset-0 bg-grid-white/5" />
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-6"><TrendingUp className="h-4 w-4" /> For businesses</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sell to Nigerian students</h2>
                  <p className="text-slate-300 text-lg max-w-md">Business accounts with unlimited listings, custom store pages, and analytics.</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 min-w-[280px]">
                  <div className="text-5xl font-bold text-white mb-2">₦10,000</div>
                  <div className="text-slate-300 mb-4">/month • First month free</div>
                  <Link href="/business" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-medium hover:bg-slate-100 transition group">Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" /></Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Ready to get rid of your stuff?</h2>
              <p className="text-xl text-slate-500 mb-8">Join thousands of Nigerian students waiting for early access.</p>
              <div className="max-w-md mx-auto"><WaitlistForm /></div>
              <p className="mt-6 text-sm text-slate-400">First 1,000 students get free premium for life. 🎁</p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}