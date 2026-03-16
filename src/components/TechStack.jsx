import React, { useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

const STACK = [
    {
        cat: 'Frontend',
        tags: ['JavaScript', 'PHP', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
    },
    {
        cat: 'Design',
        tags: ['Adobe Photoshop', 'Canva', 'UI/UX Principles', 'Graphic Design', 'Layout Design'],
    },
    {
        cat: 'Productivity & Admin',
        tags: ['MS Excel', 'MS Word', 'PowerPoint', 'Google Workspace', 'Records Management', 'Data Entry', 'Basic IT Support'],
    },
];

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

    return (
        <div className="section reveal" ref={ref}>
            <div className="sec-head">
                <div className="sec-title">Tech Stack</div>
            </div>
            {STACK.map((group, gi) => {
                let baseDelay = gi * 80;
                return (
                    <div className="stack-group" key={group.cat}>
                        <div className="stack-cat">{group.cat}</div>
                        <div className="tags">
                            {group.tags.map((tag, ti) => (
                                <AnimatedTag key={tag} delay={baseDelay + ti * 50}>
                                    {tag}
                                </AnimatedTag>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
