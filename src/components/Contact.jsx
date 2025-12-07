'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <p className="text-gray-400 text-center mb-12 text-lg">
            I'm currently looking for full-time opportunities in DevOps and Cloud Engineering.
            Feel free to reach out if you'd like to connect!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.a
              href="mailto:yashtembhare2025@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 text-center backdrop-blur-sm hover:bg-slate-800/70 transition-colors"
            >
              <Mail className="mx-auto mb-3 text-purple-400" size={32} />
              <p className="text-white font-medium mb-1">Email</p>
              <p className="text-gray-400 text-sm">yashtembhare2025@gmail.com</p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/yash-tembhare"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 text-center backdrop-blur-sm hover:bg-slate-800/70 transition-colors"
            >
              <Linkedin className="mx-auto mb-3 text-purple-400" size={32} />
              <p className="text-white font-medium mb-1">LinkedIn</p>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </motion.a>

            <motion.a
              href="https://github.com/Yash-Tembhare"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 text-center backdrop-blur-sm hover:bg-slate-800/70 transition-colors"
            >
              <Github className="mx-auto mb-3 text-purple-400" size={32} />
              <p className="text-white font-medium mb-1">GitHub</p>
              <p className="text-gray-400 text-sm">Check my projects</p>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form action="mailto:yashtembhare2025@gmail.com" method="GET" className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  name="body"
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
