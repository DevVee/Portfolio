import React from 'react';
import { useReveal } from '../hooks/useReveal';

export function About() {
    const ref = useReveal();

    return (
        <div className="section reveal" ref={ref}>
            <div className="sec-title" style={{ marginBottom: '16px' }}>About</div>
            <div className="about-body">
                <p>
                    Detail-oriented Computer Science graduate with hands-on experience in administrative systems, records management, and digital solutions. I specialize in building and improving efficient data workflows and user-focused interfaces that support real operational needs.
                </p>
                <p>
                    During my internship at the Registrar's Office, I processed and managed 500+ student academic records with strict attention to accuracy, data integrity, and confidentiality. I also contributed to enrollment system updates and helped digitize physical records, improving retrieval speed and overall office efficiency.
                </p>
                <p>
                    Beyond administrative systems, I am actively transitioning into full-stack and front-end development. I enjoy designing clean, functional user interfaces and building web applications using modern technologies such as React and TypeScript. I am currently deepening my skills in frontend engineering and UI/UX design with a focus on creating scalable, real-world systems.
                </p>
            </div>
        </div>
    );
}
