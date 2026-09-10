import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { BRAND, brandColor } from '../lib/brandIcons';

/* Lucide-style icons, 1.75 stroke, sized by the parent. */
const ICONS = {
    frontend: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></>,
    backend: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" /><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" /></>,
    cloud: <><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.98 6 6 0 0 0-11.66-1.4A4 4 0 0 0 6.5 19z" /></>,
    ai: <><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" /><circle cx="12" cy="12" r="4" /></>,
    aidev: <><path d="m8 6-6 6 6 6M16 6l6 6-6 6" /><path d="m14 4-4 16" /></>,
    arch: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    mobile: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></>,
    design: <><circle cx="13.5" cy="6.5" r="1.5" /><circle cx="17.5" cy="10.5" r="1.5" /><circle cx="8.5" cy="7.5" r="1.5" /><circle cx="6.5" cy="12.5" r="1.5" /><path d="M12 2a10 10 0 1 0 0 20c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1-.3-.3-.4-.7-.4-1 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5c0-4.4-4-8-9-8z" /></>,
    tools: <><path d="M14.7 6.3a4 4 0 0 1-5 5L4 17v3h3l5.7-5.7a4 4 0 0 0 5-5z" /></>,
    admin: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h4" /></>,
};

const STACK = [
    {
        cat: 'Frontend Development',
        icon: 'frontend',
        tags: [
            'React 19', 'Next.js (App Router)', 'TypeScript', 'JavaScript', 'HTML', 'CSS',
            'Tailwind CSS', 'Bootstrap', 'SCSS', 'Vite', 'shadcn/ui', 'Radix UI',
            'Framer Motion', 'React Router DOM', 'Three.js', 'React Hook Form',
            'Zod', 'TanStack React Query', 'Zustand', 'Recharts', 'Leaflet', 'ESLint',
        ],
    },
    {
        cat: 'Backend & Databases',
        icon: 'backend',
        tags: [
            'Node.js', 'Express.js', 'Next.js API Routes', 'PHP', 'Laravel',
            'PostgreSQL', 'pgvector', 'MySQL', 'SQLite', 'SQL', 'Supabase',
            'Database Migrations', 'REST APIs', 'JWT', 'OAuth', 'Socket.io', 'Axios',
        ],
    },
    {
        cat: 'Cloud & DevOps',
        icon: 'cloud',
        tags: [
            'AWS', 'ECS / Fargate', 'RDS / Aurora', 'Amazon S3', 'ECR',
            'AWS Secrets Manager', 'CloudWatch', 'Amazon SES', 'AWS CDK', 'Terraform',
            'Docker (multi-stage)', 'Docker Compose', 'GitHub Actions', 'CI/CD',
            'OIDC Deployments', 'Nginx', 'Vercel',
        ],
    },
    {
        cat: 'AI Engineering',
        icon: 'ai',
        tags: [
            'AWS Bedrock', 'LLM Integration', 'RAG Pipelines',
            'Vector Embeddings', 'Prompt Engineering', 'MCP (Model Context Protocol)',
            'Groq API', 'OpenAI API', 'Anthropic API', 'Resend API',
        ],
    },
    {
        cat: 'AI-Assisted Development',
        icon: 'aidev',
        tags: [
            'Claude Code', 'Cursor', 'OpenAI Codex', 'GitHub Copilot',
            'Claude', 'ChatGPT', 'Gemini', 'v0', 'Agentic Workflows',
            'AI Code Review', 'AI Pair Programming',
        ],
    },
    {
        cat: 'Architecture & Practices',
        icon: 'arch',
        tags: [
            'pnpm Monorepos', 'Shared Type Packages', 'Typed API Contracts',
            'CI Quality Gates', 'Automated Testing', 'Jest', 'Code Review',
            'Audit Logging', 'Role-Based Access Control', 'Git Workflow',
        ],
    },
    {
        cat: 'Mobile Development',
        icon: 'mobile',
        tags: [
            'React Native', 'Expo', 'Expo EAS Build', 'EAS Update',
            'App Store / Play Store Releases', 'Capacitor (Android)',
        ],
    },
    {
        cat: 'Design & Creative',
        icon: 'design',
        tags: ['Figma', 'Adobe Photoshop', 'Canva', 'UI/UX Principles', 'Graphic Design', 'Layout Design'],
    },
    {
        cat: 'Developer Tools',
        icon: 'tools',
        tags: ['Git', 'GitHub', 'VS Code'],
    },
    {
        cat: 'Productivity & Admin',
        icon: 'admin',
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
    const icon = BRAND[children];
    const color = brandColor(icon);

    return (
        <span
            className={`tag${icon ? ' tag-branded' : ''}`}
            style={{
                animationDelay: `${delay}ms`,
                animationFillMode: 'both',
                ...(color ? { '--brand': color } : null),
            }}
        >
            {icon && (
                <svg
                    className="tag-mark"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d={icon.path} />
                </svg>
            )}
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
                    <div className="stack-group" key={group.cat} style={{ '--cat': `var(--c-${group.icon})` }}>
                        <div className="stack-cat">
                            <span className="stack-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                    {ICONS[group.icon]}
                                </svg>
                            </span>
                            {group.cat}
                        </div>
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
