'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Users, Shield, Heart, Globe, Zap, Sparkles, 
  CheckCircle, ArrowRight, Award, TrendingUp, Building2, Target
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Trust First",
      description: "Every transaction is protected. Every seller verified. Your safety is our priority.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Student First",
      description: "Built by students, for students. We understand campus life because we live it.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Heart,
      title: "Community First",
      description: "We're building more than a marketplace—we're building a community of Nigerian students.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Simple First",
      description: "No complicated forms. No hidden fees. Just a simple way to buy and sell.",
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const team = [
    {
      name: "Oluwaseun Adebayo",
      role: "Founder & CEO",
      bio: "Former UNILAG student who couldn't find a safe place to sell textbooks. Started GetRid.ng to fix that.",
      avatar: "O",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Chioma Okonkwo",
      role: "Head of Product",
      bio: "UNN graduate passionate about creating simple, beautiful products that students love.",
      avatar: "C",
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Emeka Okafor",
      role: "Head of Community",
      bio: "OAU alum building the largest student marketplace community in Nigeria.",
      avatar: "E",
      color: "from-orange-500 to-red-500"
    }
  ]

  const milestones = [
    { year: "2024", title: "Idea born", description: "The vision for a safer student marketplace was born." },
    { year: "2025", title: "Building", description: "Working with students across Nigeria to build what they actually need." },
    { year: "2026", title: "Launch", description: "GetRid.ng launches to serve Nigerian students everywhere." }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-16">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Our story
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Building the future of
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">campus commerce</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                GetRid.ng started with a simple idea: Nigerian students deserve a safe, simple way to buy and sell on campus.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Every student has been there.</h2>
              <p className="text-lg text-slate-600 mb-6">
                A drawer full of textbooks you'll never open again. A laptop you upgraded from. 
                Clothes that don't fit. Furniture you can't take home. 
                You know it's valuable to someone, but where do you sell it?
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Facebook groups are chaotic. Campus WhatsApp groups are noisy. 
                Online marketplaces feel risky—especially when you're meeting strangers with cash.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                That's why we built GetRid.ng. A place where Nigerian students can buy and sell 
                with confidence. Every seller verified. Every transaction protected. Every deal simple.
              </p>
              <div className="bg-purple-50 rounded-2xl p-6 my-8">
                <p className="text-lg text-purple-800 italic mb-0">
                  "We're not just building a marketplace. We're building a community where 
                  students help students get rid of what they don't need and find what they do."
                </p>
                <p className="text-sm text-purple-600 mt-3">— Oluwaseun Adebayo, Founder</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-slate-50/30 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-slate-100"
              >
                <Target className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-600">
                  To make campus commerce safe, simple, and accessible for every Nigerian student.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-slate-100"
              >
                <Award className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-slate-600">
                  To become the most trusted marketplace for students across Nigeria and beyond.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What we believe</h2>
              <p className="text-xl text-slate-500">The principles that guide everything we do</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-500 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-slate-50/30 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">The team behind GetRid</h2>
              <p className="text-xl text-slate-500">Students who get it, building for students who need it</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-24 h-24 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-white">{member.avatar}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 text-sm mb-3">{member.role}</p>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our journey</h2>
              <p className="text-xl text-slate-500">From idea to impact</p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0 w-24">
                    <span className="text-2xl font-bold text-purple-600">{milestone.year}</span>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-purple-200 pl-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{milestone.title}</h3>
                    <p className="text-slate-500">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join us on this journey</h2>
              <p className="text-purple-100 mb-8 max-w-lg mx-auto">
                Be part of something bigger. Join the waitlist and help shape the future of campus commerce.
              </p>
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