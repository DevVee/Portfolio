import React from 'react';
import { useReveal } from '../hooks/useReveal';

export function About() {
    const ref = useReveal();

    return (
        <div className="section reveal" ref={ref}>
            <div className="sec-title" style={{ marginBottom: '16px' }}>About</div>
            <div className="about-body">
                <p>
                    I build web and mobile applications end to end. React and Next.js on the front, an API
                    and database behind it, deployed and running on AWS. I take a feature from the first
                    database sketch to the day it ships.
                </p>
                <p>
                    At ServiceCo I build a platform where the website and the mobile app run on one
                    codebase, so a fix lands in both at once. I build the dashboards the operations team
                    runs the business from, the in-app chat, the onboarding flow every new customer goes
                    through, and the database and APIs underneath all of it. I built the AI assistant that
                    answers questions from the company's own data, and I ship the deployments.
                </p>
                <p>
                    Before that I spent a year building systems for businesses and schools around Batangas,
                    working directly with the owners: a point-of-sale with a matching mobile app, a payroll
                    platform that gets SSS, PhilHealth, Pag-IBIG and BIR right, and clinic record systems.
                </p>
                <p>
                    Computer Science graduate, Magna Cum Laude. I learn what a project needs and ship it.
                </p>
            </div>
        </div>
    );
}
