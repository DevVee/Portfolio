import React from 'react';
import { useReveal } from '../hooks/useReveal';

export function About() {
    const ref = useReveal();

    return (
        <div className="section reveal" ref={ref}>
            <div className="sec-title" style={{ marginBottom: '16px' }}>About</div>
            <div className="about-body">
                <p>
                    Full-stack developer building production web and mobile applications end to end. React
                    and Next.js on the front, Node and PHP services over PostgreSQL on the back, deployed to
                    AWS on containerized infrastructure. Comfortable owning a feature from schema design
                    through CI/CD to a live deployment.
                </p>
                <p>
                    Recent work spans typed pnpm monorepos shared across web and React Native, ECS/Fargate
                    deployments driven by OIDC-authenticated GitHub Actions, and LLM-backed retrieval over
                    pgvector. Computer Science graduate, Magna Cum Laude, with a bias toward shipping
                    maintainable systems and learning whatever the problem needs.
                </p>
            </div>
        </div>
    );
}
