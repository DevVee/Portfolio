import React from 'react';
import { useReveal } from '../hooks/useReveal';

const PROJECTS = [
    {
        name: 'GradNet',
        label: 'ICCBI Alumni Connect',
        desc: 'A full-featured alumni networking platform for Immaculate Conception College of Balayan: batchmate discovery, push notifications, alumni directory, and social posting.',
        tags: ['Laravel 12', 'PHP 8.2', 'PostgreSQL', 'Supabase'],
        type: 'Web App',
        href: 'https://github.com/DevVee/GradNet',
    },
    {
        name: 'Clinovia',
        label: 'Smart School Clinic System',
        desc: 'School clinic management system for ICCBI: patient records, appointment scheduling, medicine inventory, consultation logs, and role-based access control.',
        tags: ['Laravel 12', 'PHP 8.2', 'MySQL', 'Blade'],
        type: 'Web App',
        href: 'https://github.com/DevVee/Clinovia',
    },
    {
        name: 'Melo',
        label: 'AI-Powered Resume Builder',
        desc: 'Resume builder with 3 modes (Quick, Guided, AI Chat), 20+ professional templates, ATS analyzer, job description matcher, cover letter generator, and PDF/DOCX export.',
        tags: ['React 19', 'TypeScript', 'Supabase', 'Groq AI', 'Vite'],
        type: 'Web App',
        href: 'https://github.com/DevVee/Melo',
        demo: 'https://melo-resume.vercel.app',
    },
    {
        name: 'HomeFixer',
        label: 'Home Services Marketplace',
        desc: 'Platform connecting homeowners with verified service professionals: provider search, appointment booking, real-time tracking, and secure payments via GCash and Maya.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
        type: 'Web App',
        href: 'https://github.com/DevVee/HomeFixer',
        demo: 'https://home-fixer-seven.vercel.app',
    },
    {
        name: 'TenPOS',
        label: 'Point of Sale System',
        desc: 'Full-featured POS system with a web dashboard and companion mobile app: product management, sales tracking, inventory, receipts, and real-time analytics.',
        tags: ['React 19', 'TypeScript', 'Supabase', 'React Native', 'Expo'],
        type: 'Web + Mobile',
        href: 'https://github.com/DevVee/TenPOS',
        demo: 'https://ten-pos-theta.vercel.app',
    },
    {
        name: 'TenPayroll',
        label: 'HR & Payroll Platform',
        desc: 'Philippines-compliant enterprise payroll platform: SSS 2024, PhilHealth 5%, Pag-IBIG, BIR TRAIN Law, attendance kiosk, leave & overtime management, and audit logs.',
        tags: ['React 19', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Recharts'],
        type: 'Web App',
        href: 'https://github.com/DevVee/TenPayroll',
        demo: 'https://ten-payroll.vercel.app',
    },
    {
        name: 'AND Travel',
        label: 'Travel Agency Website',
        desc: 'Marketing website for A N D Travel and Tours: destination showcase, service listings, package highlights, contact form, and smooth scroll animations.',
        tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
        type: 'Website',
        href: 'https://github.com/DevVee/and-travel-tours-website',
        demo: 'https://andtraveltours.vercel.app',
    },
];


function ProjectCard({ project, index }) {
    return (
        <div
            className="proj-card"
            style={{ animationDelay: `${index * 60}ms` }}
        >
            <div className="proj-card-top">
                <div className="proj-type-badge">{project.type}</div>
            </div>
            <div className="proj-name">{project.name}</div>
            <div className="proj-label">{project.label}</div>
            <div className="proj-desc">{project.desc}</div>
            <div className="proj-tags">
                {project.tags.map(t => (
                    <span className="proj-tag" key={t}>{t}</span>
                ))}
            </div>
            <div className="proj-links">
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
                        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.7 18.3.5 12 .5z" />
                    </svg>
                    Code
                </a>
                {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
}


export function ProjectsCerts() {
    const ref = useReveal();

    return (
        <div className="section reveal" ref={ref}>
            <div className="sec-head" style={{ marginBottom: '16px' }}>
                <div className="sec-title">Projects</div>
                <span className="sec-badge">{PROJECTS.length} projects</span>
            </div>
            <div className="projects-grid projects-grid-full">
                {PROJECTS.map((p, i) => (
                    <ProjectCard key={p.name} project={p} index={i} />
                ))}
            </div>
        </div>
    );
}
