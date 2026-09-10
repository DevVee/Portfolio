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
    siExpo, siCapacitor,
    siFigma, siGit, siGithub, siGoogle, siJest,
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
    'Figma': siFigma,
    'Git': siGit,
    'GitHub': siGithub,
    'Google Workspace': siGoogle,
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
