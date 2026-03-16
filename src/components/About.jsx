import React from 'react';
import { useReveal } from '../hooks/useReveal';

export function About() {
    const ref = useReveal();

    return (
        <div className="section reveal" ref={ref}>
            <div className="sec-title" style={{ marginBottom: '16px' }}>About</div>
            <div className="about-body">
                <p>
                    Detail-oriented Computer Science graduate with hands-on experience in administrative support, records management, and digital design. Seeking an entry-level position where I can apply technical knowledge and organizational abilities to support efficient operations.
                </p>
                <p>
                    During my internship at the Registrar's Office, I processed and organized 500+ student academic records with full data accuracy and confidentiality, assisted in enrollment system updates, and digitized physical records to improve retrieval efficiency.
                </p>
                <p>
                    I enjoy crafting clean, user-friendly interfaces and exploring how modern web technologies can solve real-world problems. Currently deepening skills in front-end development and UI/UX design.
                </p>
            </div>
        </div>
    );
}
