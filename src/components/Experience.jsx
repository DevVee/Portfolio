import React from 'react';
import { useReveal } from '../hooks/useReveal';

const EXPERIENCE = [
    {
        role: 'Full-Stack Developer',
        org: 'ServiceCo Pte. Ltd. · Independent Contractor',
        period: 'Jun 2026 – Present',
        desc: 'Web apps and React Native mobile clients from one shared codebase. CRM and operations dashboards, in-app chat, onboarding flows, PostgreSQL schemas and API routes, plus LLM-powered search. Shipped through Docker and automated AWS pipelines.',
        tags: ['Next.js', 'React Native', 'PostgreSQL', 'AWS'],
    },
    {
        role: 'Freelance Web Developer',
        org: 'Self-Employed',
        period: 'Feb 2025 – Jun 2026',
        desc: 'Business systems for small businesses and schools: point-of-sale with a companion mobile app, Philippines-compliant payroll, clinic records, and marketing sites. Requirements through deployment, direct with each client.',
        tags: ['React', 'TypeScript', 'Laravel', 'Supabase'],
    },
    {
        role: 'Administrative & IT Support (OJT)',
        org: 'ICCBI Registrar\u2019s Office',
        period: 'Dec 2025 – Apr 2026',
        desc: 'Processed 500+ student academic records under strict confidentiality, supported enrollment updates and document verification at peak registration, and digitized physical records for faster retrieval.',
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
