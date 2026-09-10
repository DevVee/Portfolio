import React from 'react';
import { useReveal } from '../hooks/useReveal';

const EMAIL = 'princearveeavena@gmail.com';
const PHONE = '+63 916 892 7345';

function MailIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3,5 12,13 21,5" />
        </svg>
    );
}

function DownloadIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    );
}

export function BentoHero() {
    const ref = useReveal();

    const handleEmail = () => {
        const s = encodeURIComponent('Hello Prince Arvee!');
        const b = encodeURIComponent('Hi Prince Arvee,\n\n');
        window.location.href = `mailto:${EMAIL}?subject=${s}&body=${b}`;
    };

    return (
        <div className="bento reveal" ref={ref}>
            {/* Identity — the anchor tile */}
            <div className="tile tile-identity">
                <div className="identity-top">
                    <div className="identity-photo">
                        <img src="/picture.png" alt="Prince Arvee F. Avena" />
                    </div>
                    <div>
                        <h1 className="identity-name">Prince Arvee F. Avena</h1>
                        <p className="identity-role">Full-Stack Developer</p>
                        <p className="identity-meta">Web &middot; DevOps &middot; AI</p>
                    </div>
                </div>

                <div className="identity-contact">
                    <span className="identity-location">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12" aria-hidden="true">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        Balayan, Batangas, Philippines
                    </span>
                </div>

                <div className="identity-actions">
                    <button onClick={handleEmail} className="btn btn-primary">
                        <MailIcon />
                        Send Email
                    </button>
                    <a href="/RESUME.pdf" download="PrinceArveeAvena_Resume.pdf" className="btn">
                        <DownloadIcon />
                        Download CV
                    </a>
                </div>
            </div>

            {/* Availability */}
            <div className="tile tile-1 tile-stat">
                <span className="status-row">
                    <span className="status-dot" />
                    <span className="stat-label stat-accent">Available</span>
                </span>
                <span className="tile-sub">Open to full-stack roles</span>
            </div>

            {/* Current role */}
            <div className="tile tile-1 tile-stat">
                <span className="stat-value">ServiceCo</span>
                <span className="stat-label">Since Jun 2026</span>
            </div>

            {/* Shipped */}
            <div className="tile tile-1 tile-stat">
                <span className="stat-value">7</span>
                <span className="stat-label">Projects shipped</span>
            </div>

            {/* Degree */}
            <div className="tile tile-1 tile-stat">
                <span className="stat-value">BSCS</span>
                <span className="stat-label">Magna Cum Laude</span>
            </div>

            {/* Contact row — phone and email fill the width beneath the tiles above */}
            <a className="tile tile-2" href={`tel:${PHONE.replace(/\s/g, '')}`}>
                <span className="tile-label">Phone</span>
                <span className="tile-title">{PHONE}</span>
                <span className="tile-sub">Mon&ndash;Sat, 9am&ndash;6pm PHT</span>
            </a>

            <a className="tile tile-2" href={`mailto:${EMAIL}`}>
                <span className="tile-label">Email</span>
                <span className="tile-title tile-title-mono">{EMAIL}</span>
                <span className="tile-sub">Usually replies within a day</span>
            </a>
        </div>
    );
}
