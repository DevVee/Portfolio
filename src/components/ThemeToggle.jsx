import React from 'react';

export function ThemeToggle({ theme, onToggle }) {
    const isDark = theme === 'dark';

    return (
        <div className="theme-toggle-wrap">
            <span className="theme-label">
                {isDark ? '☽ Dark' : '☀ Light'}
            </span>
            <button
                className="theme-toggle-btn"
                onClick={onToggle}
                aria-label="Toggle theme"
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
                <span className="toggle-thumb">
                    {isDark ? '☽' : '☀'}
                </span>
            </button>
        </div>
    );
}
