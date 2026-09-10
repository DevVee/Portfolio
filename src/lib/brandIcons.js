/**
 * Tag -> simple-icons mapping.
 *
 * Only icons named here are bundled; simple-icons is tree-shaken, so the cost
 * is the marks actually used, not the full 3400+ set.
 *
 * Some brands (AWS, OpenAI, Microsoft, Adobe, VS Code, Canva, Groq) are absent
 * from simple-icons following trademark requests. Those tags fall back to their
 * category glyph, so every lookup must tolerate a miss.
 */
import {
    siReact, siNextdotjs, siTypescript, siJavascript, siHtml5, siCss,
    siTailwindcss, siBootstrap, siSass, siVite, siShadcnui, siRadixui,
    siFramer, siReactrouter, siThreedotjs, siReacthookform, siZod,
    siReactquery, siLeaflet, siEslint,
    siNodedotjs, siExpress, siPhp, siLaravel, siPostgresql, siMysql,
    siSqlite, siSupabase, siJsonwebtokens, siAuth0, siSocketdotio, siAxios,
    siTerraform, siDocker, siGithubactions, siNginx, siVercel,
    siClaude, siAnthropic, siGooglegemini, siGithubcopilot, siCursor, siV0,
    siModelcontextprotocol,
    siExpo, siCapacitor, siAppstore, siGoogleplay,
    siFigma, siGit, siGithub, siGoogle, siJest, siPnpm,
} from 'simple-icons';

/** Tag label -> icon object. Keys must match TechStack tag strings exactly. */
export const BRAND = {
    // Frontend
    'React 19': siReact,
    'Next.js (App Router)': siNextdotjs,
    'TypeScript': siTypescript,
    'JavaScript': siJavascript,
    'HTML': siHtml5,
    'CSS': siCss,
    'Tailwind CSS': siTailwindcss,
    'Bootstrap': siBootstrap,
    'SCSS': siSass,
    'Vite': siVite,
    'shadcn/ui': siShadcnui,
    'Radix UI': siRadixui,
    'Framer Motion': siFramer,
    'React Router DOM': siReactrouter,
    'Three.js': siThreedotjs,
    'React Hook Form': siReacthookform,
    'Zod': siZod,
    'TanStack React Query': siReactquery,
    'Leaflet': siLeaflet,
    'ESLint': siEslint,

    // Backend & databases
    'Node.js': siNodedotjs,
    'Express.js': siExpress,
    'Next.js API Routes': siNextdotjs,
    'PHP': siPhp,
    'Laravel': siLaravel,
    'PostgreSQL': siPostgresql,
    'pgvector': siPostgresql,
    'MySQL': siMysql,
    'SQLite': siSqlite,
    'Supabase': siSupabase,
    'JWT': siJsonwebtokens,
    'OAuth': siAuth0,
    'Socket.io': siSocketdotio,
    'Axios': siAxios,

    // Cloud & DevOps
    'Terraform': siTerraform,
    'Docker (multi-stage)': siDocker,
    'Docker Compose': siDocker,
    'GitHub Actions': siGithubactions,
    'Nginx': siNginx,
    'Vercel': siVercel,

    // AI
    'Anthropic API': siAnthropic,
    'MCP (Model Context Protocol)': siModelcontextprotocol,
    'Claude Code': siClaude,
    'Claude': siClaude,
    'Gemini': siGooglegemini,
    'GitHub Copilot': siGithubcopilot,
    'Cursor': siCursor,
    'v0': siV0,

    // Mobile
    'React Native': siReact,
    'Expo': siExpo,
    'Expo EAS Build': siExpo,
    'EAS Update': siExpo,
    'Capacitor (Android)': siCapacitor,

    // Architecture, design, tools
    'Jest': siJest,
    'pnpm Monorepos': siPnpm,
    'Figma': siFigma,
    'Git': siGit,
    'GitHub': siGithub,
    'Google Workspace': siGoogle,
    'App Store / Play Store Releases': siAppstore,
};

/**
 * Concept glyphs for tags with no brand mark.
 *
 * Two sources of miss: brands removed from simple-icons on trademark request
 * (AWS, OpenAI, Microsoft, Adobe, VS Code, Canva), and tags that are practices
 * rather than products ("Code Review", "RAG Pipelines"). Both get a drawn glyph
 * so every tag carries a mark.
 *
 * Stroked paths in the Lucide idiom, rendered at 1.75 stroke on a 24px grid.
 * Keyed by tag label; GLYPH_BY_PREFIX below catches families.
 */
export const GLYPH = {
    // Cloud / AWS family
    'AWS': 'M3 17h18M6 17V9m6 8V6m6 11v-5',
    'ECS / Fargate': 'M3 8h7v7H3zM14 8h7v7h-7zM7 15v3h10v-3',
    'RDS / Aurora': 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3v12c0 1.7-3.6 3-8 3s-8-1.3-8-3z M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
    'Amazon S3': 'M12 3 4 7v10l8 4 8-4V7z M4 7l8 4 8-4M12 11v10',
    'ECR': 'M4 8h16v10H4z M8 8V5h8v3M9 13h6',
    'AWS Secrets Manager': 'M7 11V8a5 5 0 0 1 10 0v3M5 11h14v9H5z M12 15v2',
    'CloudWatch': 'M17 18a4 4 0 0 0 .5-8 6 6 0 0 0-11.6-1.4A4 4 0 0 0 6.5 18z M8 14l2.5 2.5L16 11',
    'Amazon SES': 'M3 6h18v12H3z M3 7l9 6 9-6',
    'AWS CDK': 'M12 3 4 7.5v9L12 21l8-4.5v-9z M12 12 4 7.5M12 12l8-4.5M12 12v9',
    'CI/CD': 'M4 7a8 8 0 0 1 14-3M20 4v4h-4M20 17a8 8 0 0 1-14 3M4 20v-4h4',
    'OIDC Deployments': 'M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z M9.5 12l1.8 1.8L15 10',

    // AI
    'AWS Bedrock': 'M12 3 4 8v8l8 5 8-5V8z M12 9v6M9 10.5v3M15 10.5v3',
    'LLM Integration': 'M9 3a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8A3 3 0 0 0 6 18a3 3 0 0 0 3 3V3z M15 3a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8A3 3 0 0 1 18 18a3 3 0 0 1-3 3V3z',
    'RAG Pipelines': 'M4 5h6v5H4z M14 14h6v5h-6z M10 7.5h3a2 2 0 0 1 2 2v5M7 10v3a2 2 0 0 0 2 2h5',
    'Vector Embeddings': 'M5 19 19 5M5 19h4M5 19v-4M19 5h-4M19 5v4M9 15l6-6',
    'Prompt Engineering': 'M4 6h11M4 12h7M4 18h9M17 15l2 2 3-4',
    'Groq API': 'M12 4a8 8 0 1 0 8 8h-8z M12 4v8',
    'OpenAI API': 'M12 3a4.5 4.5 0 0 0-4.4 3.6A4.5 4.5 0 0 0 5 14.3 4.5 4.5 0 0 0 12 21a4.5 4.5 0 0 0 7-6.7 4.5 4.5 0 0 0-2.6-7.7A4.5 4.5 0 0 0 12 3z',
    'Resend API': 'M4 5h16v14H4z M4 6l8 6 8-6M14 14l6 5',
    'OpenAI Codex': 'm8 7-5 5 5 5M16 7l5 5-5 5M13 5l-2 14',
    'ChatGPT': 'M12 3a4.5 4.5 0 0 0-4.4 3.6A4.5 4.5 0 0 0 5 14.3 4.5 4.5 0 0 0 12 21a4.5 4.5 0 0 0 7-6.7 4.5 4.5 0 0 0-2.6-7.7A4.5 4.5 0 0 0 12 3z',
    'Agentic Workflows': 'M12 3v4M12 17v4M3 12h4M17 12h4M8 8l-2-2M16 8l2-2M8 16l-2 2M16 16l2 2 M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
    'AI Code Review': 'm9 8-4 4 4 4M15 8l4 4-4 4M12 3v2M12 19v2',
    'AI Pair Programming': 'M9 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M17 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 14c2.8 0 5 2.2 5 5',

    // Architecture & practices
    'Shared Type Packages': 'M12 3 4 7v10l8 4 8-4V7z M4 7l8 4 8-4M12 11v10',
    'Typed API Contracts': 'M6 3h9l4 4v14H6z M15 3v4h4M9 12h6M9 16h4',
    'CI Quality Gates': 'M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z M9.5 12l1.8 1.8L15 10',
    'Automated Testing': 'M9 3v6l-5 9a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3l-5-9V3 M9 3h6M7.5 15h9',
    'Code Review': 'm9 9-3 3 3 3M15 9l3 3-3 3 M4 4h16v16H4z',
    'Audit Logging': 'M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z M9 12h6M12 9v6',
    'Role-Based Access Control': 'M15 7a4 4 0 1 1-1.6 7.7L11 17H9v2H7v2H3v-4l6.3-6.3A4 4 0 0 1 15 7z M16 10h.01',
    'Git Workflow': 'M6 3v12M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M18 9v3a4 4 0 0 1-4 4H9',

    // Backend concepts
    'SQL': 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3v12c0 1.7-3.6 3-8 3s-8-1.3-8-3z M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
    'Database Migrations': 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3v5c0 1.7-3.6 3-8 3M4 6v12c0 1.4 2.5 2.6 6 2.9 M16 16l3 3-3 3M19 19h-7',
    'REST APIs': 'M4 12h4M16 12h4 M12 4v4M12 16v4 M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',

    // Frontend without marks
    'Zustand': 'M6 4h12l-6 7 6 9H6l6-9z',
    'Recharts': 'M4 20V4M4 20h16 M8 16v-4M12 16V8M16 16v-7',

    // Design & creative
    'Adobe Photoshop': 'M4 4h16v16H4z M8 16V8h3a2.5 2.5 0 0 1 0 5H8M15 11h2.5',
    'Canva': 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M15 10a3 3 0 1 0 0 4',
    'UI/UX Principles': 'M4 4h16v16H4z M4 9h16M9 9v11',
    'Graphic Design': 'M12 3a9 9 0 1 0 0 18c.9 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.4-1-.3-.3-.4-.6-.4-1 0-.8.6-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.4-4-8-9-8z M8 11h.01M11 8h.01M15 8h.01M17 11h.01',
    'Layout Design': 'M4 4h16v16H4z M4 9h16M10 9v11',

    // Tools & admin
    'VS Code': 'm17 3-9 9 9 9V3z M8 12 3.5 8.5 5 7l4 3M8 12l-3 5 1.5 1.5L9 15',
    'Microsoft Excel': 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z M14 3v6h6 M9 12l5 6M14 12l-5 6',
    'Microsoft Word': 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z M14 3v6h6 M8 12l1.5 6L12 13l2.5 5L16 12',
    'Records Management': 'M4 7h16v13H4z M4 7l2-3h12l2 3M9 12h6',
    'Data Entry': 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z M14 3v6h6 M8 13h5M8 17h3',
    'File Organization': 'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
    'Document Processing': 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z M14 3v6h6 M9 14l2 2 4-4',
    'Basic IT Support': 'M4 5h16v10H4z M2 19h20M9 15l-1 4M15 15l1 4',
    'Team Collaboration': 'M9 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M17 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z M2 20c0-3.3 2.7-6 6-6h2c3.3 0 6 2.7 6 6M17 15c2.8 0 5 2.2 5 5',
    'Time Management': 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M12 7v5l3.5 2',
    'Customer Assistance': 'M4 13a8 8 0 0 1 16 0 M4 13v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2z M20 13v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2z',
};

/**
 * Brand hex, or null when the mark has no usable colour.
 *
 * Near-black and near-white marks (GitHub, Cursor, Vercel, Express...) are
 * dropped so they don't disappear into the page in one of the two themes.
 * Those tags keep their category accent, which is theme-aware.
 */
export function brandColor(icon) {
    if (!icon || !icon.hex) return null;
    const n = parseInt(icon.hex, 16);
    const lum = (0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)) / 255;
    if (lum < 0.16 || lum > 0.94) return null;
    return `#${icon.hex}`;
}
