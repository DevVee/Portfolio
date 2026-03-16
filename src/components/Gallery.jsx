import React, { useState, useCallback } from 'react';
import { useReveal } from '../hooks/useReveal';

const GALLERY_ITEMS = [
    'photo 1', 'photo 2', 'photo 3', 'photo 4', 'photo 5', 'photo 6', 'photo 7',
];

const VISIBLE = 5;
const MAX_OFFSET = Math.max(0, GALLERY_ITEMS.length - VISIBLE);

export function Gallery() {
    const [offset, setOffset] = useState(0);
    const ref = useReveal();

    const prev = useCallback(() => setOffset(o => Math.max(0, o - 1)), []);
    const next = useCallback(() => setOffset(o => Math.min(MAX_OFFSET, o + 1)), []);

    return (
        <div className="section reveal" ref={ref}>
            <div className="sec-head">
                <div className="sec-title">Certifications</div>
            </div>
            <div className="gallery-outer">
                <div
                    className="gallery-track"
                    style={{ transform: `translateX(calc(-${offset} * (20% - 6.4px + 8px)))` }}
                >
                    {GALLERY_ITEMS.map((label, i) => (
                        <div className="gallery-item" key={i}>{label}</div>
                    ))}
                </div>
            </div>
            <div className="gallery-controls">
                <button className="gcbtn" onClick={prev} aria-label="Previous" disabled={offset === 0}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
                <button className="gcbtn" onClick={next} aria-label="Next" disabled={offset >= MAX_OFFSET}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
