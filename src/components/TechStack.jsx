import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { BRAND, brandColor } from '../lib/brandIcons';

const STACK = [
    {
        cat: 'Frontend Development',
        tags: [
            'React 19', 'Next.js (App Router)', 'TypeScript', 'JavaScript', 'HTML', 'CSS',
            'Tailwind CSS', 'Bootstrap', 'SCSS', 'Vite', 'shadcn/ui', 'Radix UI',
            'Framer Motion', 'React Router DOM', 'Three.js', 'React Hook Form',
            'Zod', 'TanStack React Query', 'Zustand', 'Recharts', 'Leaflet', 'ESLint',
        ],
    },
    {
        cat: 'Backend & Databases',
        tags: [
            'Node.js', 'Express.js', 'Next.js API Routes', 'PHP', 'Laravel',
            'PostgreSQL', 'pgvector', 'MySQL', 'SQLite', 'SQL', 'Supabase',
            'Database Migrations', 'REST APIs', 'JWT', 'OAuth', 'Socket.io', 'Axios',
        ],
    },
    {
        cat: 'Cloud & DevOps',
        tags: [
            'AWS', 'ECS / Fargate', 'RDS / Aurora', 'Amazon S3', 'ECR',
            'AWS Secrets Manager', 'CloudWatch', 'Amazon SES', 'AWS CDK', 'Terraform',
            'Docker (multi-stage)', 'Docker Compose', 'GitHub Actions', 'CI/CD',
            'OIDC Deployments', 'Nginx', 'Vercel',
        ],
    },
    {
        cat: 'AI Engineering',
        tags: [
            'AWS Bedrock', 'LLM Integration', 'RAG Pipelines',
            'Vector Embeddings', 'Prompt Engineering', 'MCP (Model Context Protocol)',
            'Groq API', 'OpenAI API', 'Anthropic API', 'Resend API',
        ],
    },
    {
        cat: 'AI-Assisted Development',
        tags: [
            'Claude Code', 'Cursor', 'OpenAI Codex', 'GitHub Copilot',
            'Claude', 'ChatGPT', 'Gemini', 'v0', 'Agentic Workflows',
            'AI Code Review', 'AI Pair Programming',
        ],
    },
    {
        cat: 'Architecture & Practices',
        tags: [
            'pnpm Monorepos', 'Shared Type Packages', 'Typed API Contracts',
            'CI Quality Gates', 'Automated Testing', 'Jest', 'Code Review',
            'Audit Logging', 'Role-Based Access Control', 'Git Workflow',
        ],
    },
    {
        cat: 'Mobile Development',
        tags: [
            'React Native', 'Expo', 'Expo EAS Build', 'EAS Update',
            'App Store / Play Store Releases', 'Capacitor (Android)',
        ],
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
