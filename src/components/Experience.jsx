import React from 'react';
import { useReveal } from '../hooks/useReveal';

const EXPERIENCE = [
    {
        role: 'Full-Stack Developer',
        org: 'ServiceCo Pte. Ltd. · Independent Contractor',
        period: 'Jun 2026 – Present',
        desc: 'Build and ship production web and mobile applications end to end. Work spans typed pnpm monorepos shared across Next.js web apps and React Native clients, PostgreSQL data layers, and containerized AWS deployments on ECS/Fargate released through OIDC-authenticated GitHub Actions pipelines.',
        tags: ['Next.js', 'React Native', 'PostgreSQL', 'AWS ECS', 'GitHub Actions'],
    },
    {
        role: 'Freelance Web Developer',
        org: 'Independent Clients',
        period: '2025 – Jun 2026',
        desc: 'Delivered marketing sites and business systems for small businesses and organizations, handling requirements, design, implementation and deployment end to end — including point-of-sale, payroll, clinic management and travel booking platforms.',
        tags: ['React', 'TypeScript', 'Laravel', 'Supabase', 'Vercel'],
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
            <div className="projects-grid projects-grid-full">
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
