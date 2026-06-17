import React from 'react';
import { useReveal } from '../hooks/useReveal';

export function About() {
    const ref = useReveal();

    return (
        <div className="section reveal" ref={ref}>
            <div className="sec-title" style={{ marginBottom: '16px' }}>About</div>
            <div className="about-body">
                <p>
                    Computer Science graduate with hands-on experience delivering web and mobile applications,
                    business systems, and technology-driven solutions. Skilled in problem-solving, project
                    execution, and adapting to new challenges in fast-paced environments.
                </p>
                <p>
                    Recognized for strong communication, organization, and attention to detail, with the
                    ability to work independently or collaboratively to achieve goals. Committed to continuous
                    learning, professional growth, and delivering high-quality results.
                </p>
            </div>
        </div>
    );
}
