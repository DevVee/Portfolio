import React, { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';

const PROJECTS = [
    { name: 'BS Computer Science', issuer: 'ICCBI, Balayan Batangas' },
    { name: 'Front-End Web Development', issuer: 'Self-trained' },
    { name: 'Adobe Photoshop', issuer: 'Digital Design' },
    { name: 'Google Workspace', issuer: 'Google' },
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
                        <div className="cert-row" key={i}>
                            <div>
                                <div className="cert-name">{p.name}</div>
                                <div className="cert-issuer">{p.issuer}</div>
                            </div>
                            <span className="cert-chev"><Chevron /></span>
                        </div>
                    ))}
                </div>
            </div>
            <Recommendations />
        </div>
    );
}
