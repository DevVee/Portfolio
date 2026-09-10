import React from 'react';
import { useReveal } from '../hooks/useReveal';

const EXPERIENCE = [
    {
        role: 'Full-Stack Developer',
        org: 'ServiceCo Pte. Ltd. · Independent Contractor',
        period: 'Jun 2026 – Present',
        desc: 'Develop customer-facing web apps and their React Native mobile counterparts from one shared codebase. Build CRM and operations dashboards, in-app chat, onboarding quiz flows, and reporting views; design the PostgreSQL schemas and API routes behind them; and wire in LLM-powered assistants for search and support. Ship the work myself through Docker and automated deploy pipelines on AWS.',
        tags: ['Next.js', 'React Native', 'TypeScript', 'PostgreSQL', 'AWS', 'CI/CD'],
    },
    {
        role: 'Freelance Web Developer',
        org: 'Self-Employed',
        period: 'Feb 2025 – Jun 2026',
        desc: 'Built business systems for small businesses and schools: a point-of-sale with a companion mobile app, a Philippines-compliant payroll platform with statutory SSS, PhilHealth, Pag-IBIG and BIR computations, clinic record and appointment systems, and marketing sites. Handled requirements, database design, build and deployment directly with each client.',
        tags: ['React', 'TypeScript', 'Laravel', 'PHP', 'Supabase', 'Vercel'],
    },
    {
        role: 'Administrative & IT Support (OJT)',
        org: 'ICCBI Registrar\u2019s Office',
        period: 'Dec 2025 – Apr 2026',
        desc: 'Processed and organized 500+ student academic records with strict confidentiality protocols, supported enrollment system updates and document verification during peak registration, digitized physical records to improve retrieval efficiency, and provided technical assistance for system and file management concerns.',
        tags: ['Records Management', 'Digitization', 'IT Support'],
    },
];

export function Experience() {
    const ref = useReveal();

    return (
        <div className="section reveal" ref={ref}>
            <div className="sec-head">
                <div className="sec-title">Experience</div>
                <span className="sec-badge">{EXPERIENCE.length} roles</span>
            </div>
            <div className="projects-grid projects-grid-full exp-grid">
                {EXPERIENCE.map((e, i) => (
                    <div
                        className="proj-card"
                        key={`${e.role}-${e.org}`}
                        style={{ animationDelay: `${i * 80}ms` }}
                    >
                        <div className="proj-card-top">
                            <div className="proj-type-badge">{e.period}</div>
                        </div>
                        <div className="proj-name">{e.role}</div>
                        <div className="proj-label">{e.org}</div>
                        <div className="proj-desc">{e.desc}</div>
                        <div className="proj-tags">
                            {e.tags.map(t => (
                                <span className="proj-tag" key={t}>{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
