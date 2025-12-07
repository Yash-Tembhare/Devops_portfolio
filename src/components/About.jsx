'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

export default function About() {
    const highlights = [
        "55% reduction in infrastructure setup time",
        "10+ cloud instances automated",
        "Production-grade 3-tier deployments"
    ]

    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    <div className="bg-slate-800/30 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            AWS DevOps Engineer with 8+ months of hands-on experience in cloud infrastructure automation,
                            CI/CD pipeline development, and containerization. Proven expertise in Infrastructure as Code (IaC)
                            using Terraform, configuration management with Ansible, and deploying scalable applications on AWS.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {highlights.map((highlight, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center"
                                >
                                    <Award className="mx-auto mb-2 text-purple-400" size={24} />
                                    <p className="text-purple-300 font-medium">{highlight}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}