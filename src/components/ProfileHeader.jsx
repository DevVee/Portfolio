import React from 'react';
import { useReveal } from '../hooks/useReveal';

export function ProfileHeader() {
    const ref = useReveal();

    return (
        <div className="profile-header reveal" ref={ref}>
            <div className="profile-photo">
                <img src="/picture.png" alt="Prince Arvee" onError={e => { e.target.style.display = 'none'; }} />
                <div className="photo-placeholder">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                </div>
            </div>

            <div className="profile-info">
                <div className="profile-name">Prince Arvee F. Avena</div>
                <div className="profile-location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    Balayan, Batangas, Philippines
                </div>
                <div className="profile-tagline">Computer Science Graduate · Web Developer · Digital Designer</div>

                <div className="degree-chip">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 10v6M2 10l10 5 10-5-10-5-10 5z" />
                    </svg>
                    BS Computer Science — April 2026 · Magna Cum Laude · Immaculate Conception College of Balayan, Inc.
                </div>

                <div className="action-row">
                    <a href="mailto:princearveeavena@gmail.com" className="btn btn-primary">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3,5 12,13 21,5" />
                        </svg>
                        Send Email
                    </a>
                    <a href="tel:+639168927345" className="btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.07 6.07l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                        </svg>
                        +63 916 892 7345
                    </a>
                    <a href="/RESUME.pdf" download className="btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
}
