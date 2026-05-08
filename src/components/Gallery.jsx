import React, { useState, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useReveal } from '../hooks/useReveal';

const CERTS = [
    { name: 'Bootstrap Basics',                             file: 'bootstrap-basics.png' },
    { name: 'Build Your Own Firewall',                      file: 'build-your-own-firewall.png' },
    { name: 'Cisco Networking',                             file: 'cisco-networking.png' },
    { name: 'Cybersecurity & IoT in Digital Platform',      file: 'cybersecurity-iot-digital-platform.png' },
    { name: 'Cybersecurity: Turning Data Into Defense',     file: 'cybersecurity-data-defense.png' },
    { name: 'Hands-On Encryption',                          file: 'hands-on-encryption.png' },
    { name: 'Hands-On Networking with Cisco Packet Tracer', file: 'hands-on-cisco-packet-tracer.png' },
    { name: 'Learn LAN Setup Step-by-Step',                 file: 'learn-lan-setup.png' },
    { name: 'Machine Learning in Artificial Intelligence',  file: 'machine-learning-ai.png' },
    { name: 'Networking in Linux',                          file: 'networking-linux.png' },
    { name: 'Object-Oriented Programming',                  file: 'object-oriented-programming.png' },
    { name: 'Secure Coding: Preventing Cyberattacks',       file: 'secure-coding-cyberattacks.png' },
    { name: 'Role of Programming in Software Development',  file: 'role-of-programming-software-dev.png' },
    { name: 'Website Troubleshooting Basics',               file: 'website-troubleshooting-basics.png' },
    { name: 'Certificate of Participation',                 file: 'certificate-of-participation-1.png' },
    { name: 'Certificate of Participation',                 file: 'certificate-of-participation-2.png' },
    { name: 'Certificate of Participation',                 file: 'certificate-of-participation-3.png' },
    { name: 'Certificate of Participation',                 file: 'certificate-of-participation-4.png' },
    { name: 'Certificate of Participation',                 file: 'certificate-of-participation-5.png' },
    { name: 'Certificate of Participation',                 file: 'certificate-of-participation-6.png' },
    { name: 'Certificate of Participation',                 file: 'certificate-of-participation-7.png' },
    { name: 'Certificate of Participation',                 file: 'certificate-of-participation-8.png' },
];

const GAP = 8;

function getVisible() {
    if (typeof window === 'undefined') return 5;
    if (window.innerWidth <= 480) return 2;
    if (window.innerWidth <= 768) return 3;
    return 5;
}

export function Gallery() {
    const [offset, setOffset] = useState(0);
    const [preview, setPreview] = useState(null);
    const [visible, setVisible] = useState(() => getVisible());
    const ref = useReveal();
    const intervalRef = useRef(null);

    const maxOffset = Math.max(0, CERTS.length - visible);

    // Keep offset in bounds when visible count changes
    useEffect(() => {
        setOffset(o => Math.min(o, Math.max(0, CERTS.length - visible)));
    }, [visible]);

    useEffect(() => {
        const onResize = () => setVisible(getVisible());
        window.addEventListener('resize', onResize, { passive: true });
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const startAutoSlide = useCallback(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setOffset(o => (o >= maxOffset ? 0 : o + 1));
        }, 2800);
    }, [maxOffset]);

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, [startAutoSlide]);

    const prev = useCallback(() => {
        clearInterval(intervalRef.current);
        setOffset(o => Math.max(0, o - 1));
        startAutoSlide();
    }, [startAutoSlide]);

    const next = useCallback(() => {
        clearInterval(intervalRef.current);
        setOffset(o => (o >= maxOffset ? 0 : o + 1));
        startAutoSlide();
    }, [startAutoSlide, maxOffset]);

    // item width = (100% - (visible-1)*gap) / visible
    // step       = item_width + gap = (100% + gap) / visible
    const itemWidthPct  = 100 / visible;
    const itemGapShare  = (GAP * (visible - 1)) / visible;  // gap subtracted per item
    const stepGapShare  = GAP / visible;                     // gap added per step

    const itemStyle = {
        minWidth: `calc(${itemWidthPct}% - ${itemGapShare.toFixed(3)}px)`,
    };

    const trackStyle = {
        transform: `translateX(calc(-${offset} * (${itemWidthPct}% + ${stepGapShare.toFixed(3)}px)))`,
    };

    return (
        <div className="section reveal" ref={ref}>
            <div className="sec-head">
                <div className="sec-title">Certifications</div>
                <div className="sec-badge">{CERTS.length} certificates</div>
            </div>

            <div className="gallery-outer">
                <div className="gallery-track" style={trackStyle}>
                    {CERTS.map((cert, i) => (
                        <button
                            key={i}
                            className="gallery-item"
                            style={itemStyle}
                            onClick={() => setPreview(cert)}
                            title={cert.name}
                            aria-label={`View ${cert.name}`}
                        >
                            <img src={`/certificates/${cert.file}`} alt={cert.name} />
                        </button>
                    ))}
                </div>
            </div>

            <div className="gallery-controls">
                <button className="gcbtn" onClick={prev} aria-label="Previous">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
                <button className="gcbtn" onClick={next} aria-label="Next">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>

            {preview && <CertPreview cert={preview} onClose={() => setPreview(null)} />}
        </div>
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
                className="cert-preview-box"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="cert-preview-header">
                    <span className="cert-preview-title">{cert.name}</span>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
                        <a
                            href={`/certificates/${cert.file}`}
                            download
                            className="btn"
                            style={{ fontSize: '12px', padding: '6px 12px' }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <div className="cert-preview-body">
                    <img
                        src={`/certificates/${cert.file}`}
                        alt={cert.name}
                        className="cert-preview-img"
                    />
                </div>
            </div>
        </div>,
        document.body
    );
}
