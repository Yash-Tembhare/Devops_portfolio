'use client'

import { motion } from 'framer-motion'
import { Cloud, Server, Terminal, Code, Database, GitBranch } from 'lucide-react'

export default function Skills() {
    const categories = [
        {
            name: "Cloud & Infrastructure",
            icon: Cloud,
            items: ["AWS (EC2, S3, VPC, IAM)", "CloudWatch", "Lambda", "ELB", "Auto Scaling"]
        },
        {
            name: "DevOps & Automation",
            icon: Server,
            items: ["Jenkins", "GitHub Actions", "Terraform", "Ansible", "CI/CD Pipelines"]
        },
        {
            name: "Containers & Orchestration",
            icon: Terminal,
            items: ["Docker", "Docker Compose", "Kubernetes", "Container Registries"]
        },
        {
            name: "Programming & Scripting",
            icon: Code,
            items: ["Python", "Bash", "PowerShell", "JavaScript", "C/C++"]
        },
        {
            name: "Databases & Storage",
            icon: Database,
            items: ["MongoDB", "MySQL", "S3", "Database Optimization"]
        },
        {
            name: "Version Control & Collaboration",
            icon: GitBranch,
            items: ["Git", "GitHub", "GitLab", "Agile Methodologies"]
        }
    ]

    return (
        <section id="skills" className="py-20 px-4 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                        Technical Skills
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category, index) => {
                            const Icon = category.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-purple-500/20 rounded-lg">
                                            <Icon className="text-purple-400" size={24} />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}