import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import AnimatedBackground from '../components/AnimatedBackground'

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
            <AnimatedBackground />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />

            <footer className="py-8 text-center border-t border-purple-500/20 bg-slate-900/50">
                <p className="text-gray-400">
                    © 2025 Yash Tembhare. Built with Next.js, Tailwind CSS, and Framer Motion.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                    Deployed with CI/CD using GitHub Actions
                </p>
            </footer>
        </main>
    )
}