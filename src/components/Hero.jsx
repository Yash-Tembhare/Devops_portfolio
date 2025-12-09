'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, Server } from 'lucide-react'

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-4"
                        >
                            <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
                                Available for Full-time Opportunities
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                            Yash Tembhare
                        </h1>

                        <h2 className="text-2xl md:text-3xl text-purple-400 font-semibold mb-4">
                            AWS DevOps Engineer
                        </h2>

                        <p className="text-gray-400 text-lg mb-8">
                            Cloud Infrastructure | CI/CD | Automation Specialist
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="/resume.pdf.pdf"
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
                            >
                                <Download size={20} />
                                Download Resume
                            </motion.a>

                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 border border-purple-500/50 hover:bg-purple-500/10 text-white rounded-lg font-medium transition-colors"
                            >
                                Get In Touch
                            </motion.a>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <motion.a
                                href="https://github.com/Yash-Tembhare"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, color: "#a855f7" }}
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                <Github size={28} />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/yash-tembhare"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, color: "#a855f7" }}
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                <Linkedin size={28} />
                            </motion.a>
                            <motion.a
                                href="mailto:yashtembhare2025@gmail.com"
                                whileHover={{ scale: 1.1, color: "#a855f7" }}
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                <Mail size={28} />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
                            <div className="relative bg-slate-800/50 border border-purple-500/30 rounded-3xl overflow-hidden backdrop-blur-sm">
                                <img
                                    src="./portrait.jpg"
                                    alt="Yash Tembhare"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none'
                                        e.target.nextSibling.style.display = 'flex'
                                    }}
                                />
                                <div className="hidden w-full h-full items-center justify-center text-gray-500">
                                    <div className="text-center p-8">
                                        <Server size={64} className="mx-auto mb-4 text-purple-500" />
                                        <p className="text-sm">Add your photo as /public/portrait.jpg</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}