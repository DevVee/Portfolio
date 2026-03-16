import { useEffect, useRef } from 'react';

export function useReveal(options = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.12, ...options }
        );

        // Small delay so initial page elements animate in
        const timer = setTimeout(() => observer.observe(el), 80);
        return () => { clearTimeout(timer); observer.disconnect(); };
    }, []);

    return ref;
}
