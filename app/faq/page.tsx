'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  Search, ChevronDown, ChevronUp, ArrowRight, 
  Shield, Users, CreditCard, Smartphone, Package, 
  Building2, HelpCircle, Sparkles, CheckCircle,
  ShoppingBag
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openSection, setOpenSection] = useState<string | null>('getting-started')
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const categories = [
    { id: 'getting-started', name: 'Getting Started', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { id: 'selling', name: 'Selling', icon: Package, color: 'from-emerald-500 to-teal-500' },
    { id: 'buying', name: 'Buying', icon: ShoppingBag, color: 'from-blue-500 to-cyan-500' },
    { id: 'payments', name: 'Payments & Escrow', icon: CreditCard, color: 'from-orange-500 to-red-500' },
    { id: 'business', name: 'Business Accounts', icon: Building2, color: 'from-purple-500 to-pink-500' },
    { id: 'safety', name: 'Safety & Trust', icon: Shield, color: 'from-emerald-500 to-teal-500' }
  ]

  const faqs = {
    'getting-started': [
      {
        q: "What is GetRid.ng?",
        a: "GetRid.ng is Nigeria's student marketplace for buying and selling used items. We make campus transactions safe, simple, and secure."
      },
      {
        q: "When will GetRid.ng launch?",
        a: "We're targeting Q2 2026. Join our waitlist to be the first to know when we launch and get early access."
      },
      {
        q: "Is GetRid.ng free to use?",
        a: "Yes! Basic accounts are completely free. Business accounts have a subscription for advanced features like unlimited listings and analytics."
      },
      {
        q: "How do I join the waitlist?",
        a: "Simply enter your email on our homepage. We'll notify you as soon as we launch."
      },
      {
        q: "Do I need to be a student to use GetRid.ng?",
        a: "Yes, GetRid.ng is exclusively for Nigerian university students. You'll need to verify with your student ID or NIN."
      }
    ],
    'selling': [
      {
        q: "How do I list an item?",
        a: "Snap a photo, add a description, set your price, and publish. It takes less than a minute."
      },
      {
        q: "Are there listing fees?",
        a: "No! Basic accounts can list items for free. Business accounts have unlimited listings with no per-item fees."
      },
      {
        q: "What can I sell on GetRid.ng?",
        a: "Almost anything! Textbooks, electronics, furniture, clothes, gadgets, sports equipment, and more. Just no prohibited items."
      },
      {
        q: "How do I get paid?",
        a: "When a buyer purchases your item, funds are held in escrow. Once the buyer confirms receipt, money is released to your wallet. Withdraw to your bank account."
      },
      {
        q: "What if my item doesn't sell?",
        a: "You can keep your listing active as long as you want. We'll also suggest price optimization tips to help you sell faster."
      }
    ],
    'buying': [
      {
        q: "How do I buy an item?",
        a: "Browse listings, chat with the seller, agree on price, and pay securely through our escrow system."
      },
      {
        q: "Is it safe to buy on GetRid.ng?",
        a: "Absolutely. Every seller is verified with NIN or Student ID. Plus, your payment is held in escrow until you confirm receipt of the item."
      },
      {
        q: "What if the item is not as described?",
        a: "You can open a dispute. Our team will review the case and help resolve it fairly. Your money is safe in escrow."
      },
      {
        q: "How do I arrange delivery?",
        a: "Chat with the seller to arrange meetup on campus or courier delivery. We provide tools to coordinate safely."
      },
      {
        q: "Can I negotiate the price?",
        a: "Yes! Most items are negotiable. Use the chat feature to discuss pricing with the seller."
      }
    ],
    'payments': [
      {
        q: "How does escrow work?",
        a: "When you buy an item, your payment is held securely by GetRid.ng. Once you confirm you've received the item, we release the funds to the seller. No risk, no worries."
      },
      {
        q: "What payment methods do you accept?",
        a: "We support card payments, bank transfers, and USSD. All major Nigerian banks are supported."
      },
      {
        q: "How long does it take to get paid?",
        a: "Funds are released immediately when the buyer confirms receipt. Withdrawals to your bank account typically take 1-3 business days."
      },
      {
        q: "Are there transaction fees?",
        a: "Basic accounts have a small transaction fee (5%). Business accounts enjoy reduced fees. Escrow protection is included."
      },
      {
        q: "Is my payment information secure?",
        a: "Yes. We use industry-standard encryption and never store your full payment details."
      }
    ],
    'business': [
      {
        q: "What's included in a Business account?",
        a: "Unlimited listings, custom store page, advanced analytics, customer insights, verified badge, and priority support."
      },
      {
        q: "How much does a Business account cost?",
        a: "₦10,000 per month with the first month free. No setup fees, cancel anytime."
      },
      {
        q: "Can I upgrade from a Basic account?",
        a: "Yes! You can upgrade to a Business account anytime from your dashboard."
      },
      {
        q: "Do I need a CAC registration?",
        a: "Yes, business accounts require verification with your CAC or business registration documents."
      },
      {
        q: "How do I get verified as a business?",
        a: "Submit your business documents during signup. Our team reviews and verifies within 24-48 hours."
      }
    ],
    'safety': [
      {
        q: "How do you verify sellers?",
        a: "Every seller must verify with NIN or Student ID. Business accounts require CAC registration."
      },
      {
        q: "What happens if I'm scammed?",
        a: "We take safety seriously. If you're scammed, open a dispute immediately. Our team will investigate and protect your funds."
      },
      {
        q: "Is my personal information safe?",
        a: "Yes. We use encryption and never share your personal information without consent. Your data is protected."
      },
      {
        q: "How do I report a suspicious user?",
        a: "Click the 'Report' button on any listing or user profile. Our moderation team will investigate."
      },
      {
        q: "Can I meet sellers in person?",
        a: "Yes, we recommend meeting in safe, public places on campus. Use our chat to coordinate and stay safe."
      }
    ]
  }

  const filteredFaqs = (categoryId: string) => {
    if (!searchQuery) return faqs[categoryId as keyof typeof faqs]
    return faqs[categoryId as keyof typeof faqs].filter(faq => 
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const totalResults = () => {
    if (!searchQuery) return 0
    let count = 0
    Object.values(faqs).forEach(category => {
      count += category.filter(faq => 
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      ).length
    })
    return count
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-16">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <HelpCircle className="h-4 w-4" />
                Got questions?
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Frequently asked questions
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Everything you need to know about GetRid.ng. Can't find what you're looking for? Contact us.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search */}
        <section className="pb-8">
          <div className="max-w-2xl mx-auto px-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition"
              />
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-slate-500 text-center">
                Found {totalResults()} result{totalResults() !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </section>

        {/* Categories */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon
                const hasResults = !searchQuery || filteredFaqs(cat.id).length > 0
                if (!hasResults) return null
                return (
                  <button
                    key={cat.id}
                    onClick={() => setOpenSection(openSection === cat.id ? null : cat.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition ${
                      openSection === cat.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {cat.name}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Accordions */}
        <section className="py-12 pb-24">
          <div className="max-w-3xl mx-auto px-6">
            {categories.map((category) => {
              const categoryFaqs = filteredFaqs(category.id)
              if (categoryFaqs.length === 0) return null
              
              const Icon = category.icon
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <button
                    onClick={() => setOpenSection(openSection === category.id ? null : category.id)}
                    className="w-full flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-100 hover:border-purple-200 transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h2 className="text-xl font-semibold text-slate-900">{category.name}</h2>
                    </div>
                    {openSection === category.id ? (
                      <ChevronUp className="h-5 w-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openSection === category.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 space-y-2"
                      >
                        {categoryFaqs.map((faq, idx) => (
                          <div
                            key={idx}
                            className="bg-white rounded-xl border border-slate-100 overflow-hidden"
                          >
                            <button
                              onClick={() => setOpenQuestion(openQuestion === `${category.id}-${idx}` ? null : `${category.id}-${idx}`)}
                              className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition"
                            >
                              <span className="font-medium text-slate-900">{faq.q}</span>
                              {openQuestion === `${category.id}-${idx}` ? (
                                <ChevronUp className="h-4 w-4 text-slate-400 flex-shrink-0 ml-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-slate-400 flex-shrink-0 ml-4" />
                              )}
                            </button>
                            <AnimatePresence>
                              {openQuestion === `${category.id}-${idx}` && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="px-5 pb-5 pt-0"
                                >
                                  <p className="text-slate-500 text-sm border-t border-slate-100 pt-4">
                                    {faq.a}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}

            {searchQuery && totalResults() === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <HelpCircle className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">No results found</h3>
                <p className="text-slate-500 mb-6">
                  We couldn't find any questions matching "{searchQuery}"
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Clear search
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-16 bg-slate-50/30 border-y border-slate-100">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Still have questions?</h2>
              <p className="text-slate-500 mb-8 max-w-lg mx-auto">
                Can't find what you're looking for? Our team is here to help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition group"
              >
                Contact us
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
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