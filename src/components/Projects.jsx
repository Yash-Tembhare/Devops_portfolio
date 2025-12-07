'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
    const projects = [
        {
            title: "DevOpsified 3-Tier Application",
            description: "Production-style architecture with automated infrastructure provisioning, configuration management, and CI/CD pipeline on AWS.",
            tech: ["AWS", "Terraform", "Ansible", "Docker", "Jenkins", "CI/CD"],
            github: "https://github.com/Yash-Tembhare",
            highlights: ["Complete IaC with Terraform", "Ansible automation", "Jenkins CI/CD pipeline"]
        },
        {
            title: "IoT Health Monitoring System",
            description: "Real-time soldier health tracking using IoT sensors with cloud integration for data visualization and alerts.",
            tech: ["Arduino", "ESP32", "IoT", "Cloud", "Real-time Dashboard"],
            github: "https://github.com/Yash-Tembhare",
            highlights: ["Real-time monitoring", "Cloud data logging", "Alert system"]
        },
        {
            title: "College Job & Internship Portal",
            description: "Full-stack MERN application with authentication, job posting, and admin panel functionalities.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
            github: "https://github.com/Yash-Tembhare",
            highlights: ["JWT Authentication", "RBAC", "RESTful APIs"]
        }
    ]

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm flex flex-col"
                            >
                                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs text-purple-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="border-t border-purple-500/20 pt-4">
                                    <p className="text-sm text-gray-500 mb-2">Key Features:</p>
                                    <ul className="space-y-1">
                                        {project.highlights.map((highlight, idx) => (
                                            <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                                                <span className="text-purple-400 mt-1">•</span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-3 mt-4">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm transition-colors"
                                    >
                                        <Github size={16} />
                                        Code
                                    </motion.a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}