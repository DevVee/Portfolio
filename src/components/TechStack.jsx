import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const STACK = [
    {
        cat: 'Frontend Development',
        tags: [
            'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS',
            'Tailwind CSS', 'Bootstrap', 'SCSS', 'Vite', 'shadcn/ui', 'Radix UI',
            'Framer Motion', 'React Router DOM', 'Three.js', 'React Hook Form',
            'Zod', 'TanStack React Query', 'Zustand', 'Recharts', 'Leaflet', 'ESLint',
        ],
    },
    {
        cat: 'Backend & Cloud',
        tags: [
            'Supabase', 'PostgreSQL', 'SQL', 'PHP', 'Laravel', 'Node.js',
            'Express.js', 'Socket.io', 'Docker', 'Nginx', 'Vercel',
            'Resend API', 'Groq API', 'Axios', 'JWT', 'OAuth', 'REST', 'SQLite',
        ],
    },
    {
        cat: 'Mobile Development',
        tags: ['React Native', 'Expo', 'Capacitor (Android)'],
    },
    {
        cat: 'Design & Creative',
        tags: ['Figma', 'Adobe Photoshop', 'Canva', 'UI/UX Principles', 'Graphic Design', 'Layout Design'],
    },
    {
        cat: 'Developer Tools',
        tags: ['Git', 'GitHub', 'VS Code'],
    },
    {
        cat: 'Productivity & Admin',
        tags: [
            'Microsoft Excel', 'Microsoft Word', 'Google Workspace',
            'Records Management', 'Data Entry', 'File Organization',
            'Document Processing', 'Basic IT Support', 'Team Collaboration',
            'Time Management', 'Customer Assistance',
        ],
    },
];

const PREVIEW_COUNT = 3;

function AnimatedTag({ children, delay }) {
    return (
        <span
            className="tag"
            style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
        >
            {children}
        </span>
    );
}

export function TechStack() {
    const ref = useReveal();
    const [expanded, setExpanded] = useState(false);

    const visible = expanded ? STACK : STACK.slice(0, PREVIEW_COUNT);

    return (
        <div className="section reveal" ref={ref}>
            <div className="sec-head">
                <div className="sec-title">Skills</div>
            </div>

            {visible.map((group, gi) => {
                const baseDelay = gi * 60;
                return (
                    <div className="stack-group" key={group.cat}>
                        <div className="stack-cat">{group.cat}</div>
                        <div className="tags">
                            {group.tags.map((tag, ti) => (
                                <AnimatedTag key={tag} delay={baseDelay + ti * 35}>
                                    {tag}
                                </AnimatedTag>
                            ))}
                        </div>
                    </div>
                );
            })}

            <button
                className="btn view-all-btn"
                onClick={() => setExpanded(v => !v)}
                style={{ marginTop: '14px' }}
            >
                {expanded ? (
                    <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="18 15 12 9 6 15" />
                        </svg>
                        Show Less
                    </>
                ) : (
                    <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                        View All Skills
                        <span className="view-all-count">+{STACK.slice(PREVIEW_COUNT).reduce((a, g) => a + g.tags.length, 0)}</span>
                    </>
                )}
            </button>
        </div>
    );
}
