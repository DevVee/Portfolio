import React from 'react';
import { useReveal } from '../hooks/useReveal';

const PROJECTS = [
    {
        name: 'GradNet',
        label: 'ICCBI Alumni Connect',
        desc: 'A full-featured alumni networking platform for Immaculate Conception College of Balayan — batchmate discovery, push notifications, alumni directory, and social posting.',
        tags: ['Laravel 12', 'PHP 8.2', 'PostgreSQL', 'Supabase'],
        type: 'Web App',
        href: 'https://github.com/DevVee',
    },
    {
        name: 'Clinovia',
        label: 'Smart School Clinic System',
        desc: 'School clinic management system for ICCBI — patient records, appointment scheduling, medicine inventory, consultation logs, and role-based access control.',
        tags: ['Laravel 12', 'PHP 8.2', 'MySQL', 'Blade'],
        type: 'Web App',
        href: 'https://github.com/DevVee',
    },
    {
        name: 'Melo',
        label: 'AI-Powered Resume Builder',
        desc: 'Resume builder with 3 modes (Quick, Guided, AI Chat), 20+ professional templates, ATS analyzer, job description matcher, cover letter generator, and PDF/DOCX export.',
        tags: ['React 19', 'TypeScript', 'Supabase', 'Groq AI', 'Vite'],
        type: 'Web App',
        href: 'https://github.com/DevVee',
    },
    {
        name: 'HomeFixer',
        label: 'Home Services Marketplace',
        desc: 'Platform connecting homeowners with verified service professionals — provider search, appointment booking, real-time tracking, and secure payments via GCash and Maya.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
        type: 'Web App',
        href: 'https://github.com/DevVee',
    },
    {
        name: 'TenPOS',
        label: 'Point of Sale System',
        desc: 'Full-featured POS system with a web dashboard and companion mobile app — product management, sales tracking, inventory, receipts, and real-time analytics.',
        tags: ['React 19', 'TypeScript', 'Supabase', 'React Native', 'Expo'],
        type: 'Web + Mobile',
        href: 'https://github.com/DevVee',
    },
    {
        name: 'TenPayroll',
        label: 'HR & Payroll Platform',
        desc: 'Philippines-compliant enterprise payroll platform — SSS 2024, PhilHealth 5%, Pag-IBIG, BIR TRAIN Law, attendance kiosk, leave & overtime management, and audit logs.',
        tags: ['React 19', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Recharts'],
        type: 'Web App',
        href: 'https://github.com/DevVee',
    },
    {
        name: 'AND Travel',
        label: 'Travel Agency Website',
        desc: 'Marketing website for A N D Travel and Tours — destination showcase, service listings, package highlights, contact form, and smooth scroll animations.',
        tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
        type: 'Website',
        href: 'https://github.com/DevVee',
    },
];


function ProjectCard({ project, index }) {
    return (
        <a
            className="proj-card"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `${index * 60}ms`, textDecoration: 'none' }}
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
        </a>
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
