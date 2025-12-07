'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function Experience() {
    const experiences = [
        {
            title: "DevOps & Cloud Engineering Intern",
            company: "Skillected",
            location: "Nagpur",
            period: "May 2024 – Dec 2024",
            description: [
                "Designed and deployed AWS infrastructure (EC2, S3, VPC, IAM) for scalable application environments",
                "Automated infrastructure provisioning using Terraform, reducing manual setup time by 55%",
                "Built CI/CD pipelines with GitHub Actions and Jenkins",
                "Containerized applications with Docker and managed multi-service environments"
            ]
        },
        {
            title: "Technical Educator",
            company: "Guruji Technologies (Nagpur Nagar Parishad - UMANG Scheme)",
            location: "Nagpur",
            period: "June 2024 – Nov 2024",
            description: [
                "Delivered ICT/Robotics and STEM curriculum to PM Shree Primary School students",
                "Designed hands-on workshops on IoT, programming, and computational thinking",
                "Demonstrated strong technical communication and mentoring skills"
            ]
        },
        {
            title: "MERN Stack Developer Intern",
            company: "Complete Coding By Prashant",
            location: "Remote",
            period: "June 2024 – Nov 2024",
            description: [
                "Developed full-stack web applications using MERN Stack",
                "Implemented responsive front-end interfaces",
                "Integrated backend services for seamless user experiences"
            ]
        }
    ]
    return (
        <section id="experience" className="py-20 px-4 bg-slate-900/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                        Professional Experience
                    </h2>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 border-l-2 border-purple-500/30"
                            >
                                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full" />

                                <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
                                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                            <p className="text-purple-400 font-medium">{exp.company}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-gray-400 text-sm">{exp.period}</p>
                                            <p className="text-gray-500 text-sm">{exp.location}</p>
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.description.map((item, idx) => (
                                            <li key={idx} className="text-gray-400 flex items-start gap-2">
                                                <span className="text-purple-400 mt-1">▹</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <GraduationCap className="text-purple-400" size={28} />
                            <h3 className="text-xl font-bold text-white">Education</h3>
                        </div>
                        <p className="text-lg font-semibold text-purple-300">Bachelor of Technology (B.Tech) - Information Technology</p>
                        <p className="text-gray-400">Govindrao Wanjari College of Engineering and Technology, Nagpur</p>
                        <div className="flex justify-between mt-2">
                            <p className="text-gray-500">2021 – 2025</p>
                            <p className="text-purple-400 font-semibold">CGPA: 8.49/10</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}