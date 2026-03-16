import React from 'react';

const EXPERIENCE = [
    {
        role: 'Student Intern (OJT)',
        org: "ICCBI Registrar's Office",
        year: '2025',
        active: true,
    },
    {
        role: 'BS Computer Science',
        org: 'Immaculate Conception College of Balayan',
        year: '2022',
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
