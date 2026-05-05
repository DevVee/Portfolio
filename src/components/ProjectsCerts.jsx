import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useReveal } from '../hooks/useReveal';

const PROJECTS = [
    {
        name: 'ICCBI Clinic Information System',
        issuer: 'iccbiclinic.site',
        href: 'https://iccbiclinic.site',
    },
];

const CERTS = [
    { name: 'Bootstrap Basics',                       file: 'bootstrap-basics.png' },
    { name: 'Build Your Own Firewall',                file: 'build-your-own-firewall.png' },
    { name: 'Cisco Networking',                       file: 'cisco-networking.png' },
    { name: 'Cybersecurity & IoT in Digital Platform',file: 'cybersecurity-iot-digital-platform.png' },
    { name: 'Cybersecurity: Turning Data Into Defense',file: 'cybersecurity-data-defense.png' },
    { name: 'Hands-On Encryption',                    file: 'hands-on-encryption.png' },
    { name: 'Hands-On Networking with Cisco Packet Tracer', file: 'hands-on-cisco-packet-tracer.png' },
    { name: 'Learn LAN Setup Step-by-Step',           file: 'learn-lan-setup.png' },
    { name: 'Machine Learning in Artificial Intelligence', file: 'machine-learning-ai.png' },
    { name: 'Networking in Linux',                    file: 'networking-linux.png' },
    { name: 'Object-Oriented Programming',            file: 'object-oriented-programming.png' },
    { name: 'Secure Coding: Preventing Cyberattacks', file: 'secure-coding-cyberattacks.png' },
    { name: 'The Role of Programming in Software Dev',file: 'role-of-programming-software-dev.png' },
    { name: 'Website Troubleshooting Basics',         file: 'website-troubleshooting-basics.png' },
    { name: 'Certificate of Participation',           file: 'certificate-of-participation-1.png' },
    { name: 'Certificate of Participation',           file: 'certificate-of-participation-2.png' },
    { name: 'Certificate of Participation',           file: 'certificate-of-participation-3.png' },
    { name: 'Certificate of Participation',           file: 'certificate-of-participation-4.png' },
    { name: 'Certificate of Participation',           file: 'certificate-of-participation-5.png' },
    { name: 'Certificate of Participation',           file: 'certificate-of-participation-6.png' },
    { name: 'Certificate of Participation',           file: 'certificate-of-participation-7.png' },
    { name: 'Certificate of Participation',           file: 'certificate-of-participation-8.png' },
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
        <>
            {/* Projects + Recommendations */}
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
                                target="_blank"
                                rel="noopener noreferrer"
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

            {/* Certifications */}
            <CertificationsSection />
        </>
    );
}

function CertificationsSection() {
    const ref = useReveal();
    const [preview, setPreview] = useState(null);

    return (
        <>
            <div className="section reveal" ref={ref}>
                <div className="sec-head">
                    <div className="sec-title">Certifications</div>
                    <div className="sec-badge">{CERTS.length} certificates</div>
                </div>
                <div className="cert-list">
                    {CERTS.map((c, i) => (
                        <button
                            key={i}
                            className="cert-row"
                            onClick={() => setPreview(c)}
                            style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'inherit' }}
                        >
                            <div>
                                <div className="cert-name">{c.name}</div>
                                <div className="cert-issuer">/certificates/{c.file}</div>
                            </div>
                            <span className="cert-chev"><Chevron /></span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Certificate preview modal */}
            {preview && <CertPreview cert={preview} onClose={() => setPreview(null)} />}
        </>
    );
}

function CertPreview({ cert, onClose }) {
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prev;
        };
    }, [onClose]);

    return createPortal(
        <div className="cm-overlay" onClick={onClose}>
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: 'var(--card)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '12px',
                    maxWidth: '860px',
                    width: '100%',
                    maxHeight: '90vh',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-glow)',
                    animation: 'cmIn 0.28s cubic-bezier(.22,1,.36,1) both',
                }}
            >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>{cert.name}</div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <a
                            href={`/certificates/${cert.file}`}
                            download={cert.file}
                            className="btn"
                            style={{ fontSize: '12px', padding: '6px 12px' }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download
                        </a>
                        <button className="cm-close" onClick={onClose} aria-label="Close">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Image */}
                <div style={{ overflow: 'auto', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', background: 'var(--bg2)' }}>
                    <img
                        src={`/certificates/${cert.file}`}
                        alt={cert.name}
                        style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px', boxShadow: 'var(--shadow-md)', objectFit: 'contain' }}
                    />
                </div>
            </div>
        </div>,
        document.body
    );
}
