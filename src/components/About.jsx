import React from 'react';
import { useReveal } from '../hooks/useReveal';

export function About() {
    const ref = useReveal();

    return (
        <div className="section reveal" ref={ref}>
            <div className="sec-title" style={{ marginBottom: '16px' }}>About</div>
            <div className="about-body">
                <p>
                    I build web and mobile apps end to end. That usually means React or Next.js on the
                    front, an API and database behind it, and getting the whole thing deployed and running
                    on AWS. I like owning a feature from the first sketch of the database to the day it
                    goes live.
                </p>
                <p>
                    At ServiceCo I work on a platform where the website and the mobile app share one
                    codebase, so a fix lands in both at once. Day to day that means dashboards the
                    operations team runs the business from, in-app chat, the onboarding flow new customers
                    go through, and the database and APIs underneath it all. I also added an AI assistant
                    that answers questions from the company's own data, and I handle the deployments.
                </p>
                <p>
                    Before that I spent a year building systems for small businesses and schools around
                    Batangas, working straight with the owners: a point-of-sale with a matching mobile app,
                    a payroll platform that handles SSS, PhilHealth, Pag-IBIG and BIR correctly, and
                    clinic record systems.
                </p>
                <p>
                    Computer Science graduate, Magna Cum Laude. Happy to pick up whatever a project needs.
                </p>
            </div>
        </div>
    );
}
