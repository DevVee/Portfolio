import React from 'react';
import { useReveal } from '../hooks/useReveal';

const HIGHLIGHTS = [
    {
        name: 'Academic Records Management',
        desc: 'Processed and organized 500+ student academic records with 100% data accuracy and strict confidentiality protocols.',
        tag: 'registrar',
    },
    {
        name: 'Enrollment System Support',
        desc: 'Assisted in enrollment system updates and document verification during peak registration periods.',
        tag: 'iccbi',
    },
    {
        name: 'Records Digitization',
        desc: 'Digitized physical records to improve retrieval efficiency and significantly reduce manual paperwork.',
        tag: 'digitization',
    },
    {
        name: 'IT Support Assistance',
        desc: 'Provided technical assistance for basic system and file management concerns across the department.',
        tag: 'it support',
    },
];

export function OJTHighlights() {
    const ref = useReveal();

    return (
        <div className="section reveal" ref={ref}>
            <div className="sec-head">
                <div className="sec-title">OJT Highlights</div>
                <span className="sec-badge">2025 – 2026</span>
            </div>
            <div className="projects-grid">
                {HIGHLIGHTS.map((h, i) => (
                    <div
                        className="proj-card"
                        key={h.name}
                        style={{
                            animationDelay: `${i * 80}ms`,
                        }}
                    >
                        <div className="proj-name">{h.name}</div>
                        <div className="proj-desc">{h.desc}</div>
                        <span className="proj-tag">{h.tag}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
