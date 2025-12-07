import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Yash Tembhare - AWS DevOps Engineer Portfolio',
    description: 'DevOps Engineer specializing in AWS, CI/CD, Terraform, Docker, and cloud automation.',
    keywords: 'DevOps, AWS, CI/CD, Terraform, Docker, Kubernetes, Cloud Engineer, Ansible, Jenkins',
    authors: [{ name: 'Yash Tembhare' }],
    openGraph: {
        title: 'Yash Tembhare - AWS DevOps Engineer',
        description: 'AWS DevOps Engineer with expertise in cloud infrastructure, CI/CD pipelines, and automation.',
        url: 'https://yash-tembhare.github.io',
        siteName: 'Yash Tembhare Portfolio',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}