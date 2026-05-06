import React, { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';

const PROJECTS = [
    {
        name: 'DentCore — Dental Clinic Management System',
        issuer: 'Custom-built dental clinic system',
        href: 'projects/dental_system.html',
    },
    {
        name: 'SmartPOS — Inventory & Point-of-Sale System',
        issuer: 'Custom-built POS for retail & mini-mart',
        href: 'projects/POS_System.html',
    },
    {
        name: 'Appointly — Appointment Management System',
        issuer: 'Custom scheduling platform for businesses',
        href: 'projects/appointment_system.html',
    },
    {
        name: 'ClinicOS — Smart Clinic Management System',
        issuer: 'Custom-built system for Philippine clinics',
        href: 'projects/clinic_system.html',
    },
];

const RECS = [
    {
        text: 'Hardworking and detail-oriented. Prince Arvee consistently delivered accurate outputs and showed strong commitment to learning during his internship.',
        author: 'OJT Supervisor',
        role: "Registrar's Office, ICCBI",
    },
    {
        text: 'A fast learner with great initiative. He took on digitization tasks independently and ensured records were properly organized and maintained throughout the term.',
        author: 'Faculty Adviser',
        role: 'Immaculate Conception College of Balayan',
    },
    {
        text: 'Shows genuine passion for technology and design. His eye for layout and attention to detail sets him apart from other students in the program.',
        author: 'CS Professor',
        role: 'Immaculate Conception College of Balayan',
    },
];

function Chevron() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );
}

function Recommendations() {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setIdx(i => (i + 1) % RECS.length), 5000);
        return () => clearInterval(id);
    }, []);

    return (
        <div>
            <div className="sec-head" style={{ marginBottom: '12px' }}>
                <div className="sec-title">Recommendations</div>
            </div>
            <div className="rec-wrap">
                <div className="rec-track-outer">
                    <div className="rec-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
                        {RECS.map((r, i) => (
                            <div className="rec-slide" key={i}>
                                <div className="rec-card">
                                    <div className="rec-text">{r.text}</div>
                                    <div className="rec-author">{r.author}</div>
                                    <div className="rec-role">{r.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rec-dots">
                    {RECS.map((_, i) => (
                        <button
                            key={i}
                            className={`rdot${i === idx ? ' active' : ''}`}
                            onClick={() => setIdx(i)}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export function ProjectsCerts() {
    const ref = useReveal();

    return (
        <div className="section two-col reveal" ref={ref}>
            <div>
                <div className="sec-head" style={{ marginBottom: '12px' }}>
                    <div className="sec-title">Projects</div>
                </div>
                <div className="cert-list">
                    {PROJECTS.map((p, i) => (
                        <a
                            className="cert-row"
                            key={i}
                            href={p.href}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div>
                                <div className="cert-name">{p.name}</div>
                                <div className="cert-issuer">{p.issuer}</div>
                            </div>
                            <span className="cert-chev"><Chevron /></span>
                        </a>
                    ))}
                </div>
            </div>
            <Recommendations />
        </div>
    );
}
