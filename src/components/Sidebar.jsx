import React from 'react';

const EXPERIENCE = [
    {
        role: 'Full-Stack Developer',
        org: 'ServiceCo Pte. Ltd. · Independent Contractor',
        year: 'Jun 2026 – Now',
        active: true,
    },
    {
        role: 'Freelance Web Developer',
        org: 'Self-Employed',
        year: '2025 – Jun 2026',
        active: false,
    },
    {
        role: 'Student Intern (OJT)',
        org: "ICCBI Registrar's Office",
        year: 'Dec 2025 – Apr 2026',
        active: false,
    },
    {
        role: 'BS Computer Science',
        org: 'Immaculate Conception College of Balayan · Magna Cum Laude',
        year: 'Apr 2026',
        active: false,
    },
];

export function Sidebar() {
    return (
        <div>
            <div className="sb-title">Experience</div>
            <div className="exp-list">
                {EXPERIENCE.map((e, i) => (
                    <div className="exp-item" key={i}>
                        <div className={`exp-bullet${e.active ? ' on' : ''}`} />
                        <div>
                            <div className="exp-role">{e.role}</div>
                            <div className="exp-org">{e.org}</div>
                        </div>
                        <div className="exp-year">{e.year}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
