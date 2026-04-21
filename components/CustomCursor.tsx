// components/CustomCursor.tsx
'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHover, setIsHover] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);

            const target = e.target as HTMLElement;
            if (target) {
                const computedCursor = window.getComputedStyle(target).cursor;
                const isInteractive =
                    computedCursor === 'pointer' ||
                    target.tagName === 'A' ||
                    target.tagName === 'BUTTON' ||
                    target.tagName === 'INPUT' ||
                    target.tagName === 'SELECT' ||
                    target.tagName === 'TEXTAREA' ||
                    target.tagName === 'LABEL' ||
                    !!target.closest('button') ||
                    !!target.closest('a') ||
                    target.getAttribute('role') === 'button' ||
                    target.getAttribute('tabindex') !== null ||
                    target.getAttribute('data-interactive') === 'true' ||
                    !!target.closest('[data-interactive="true"]');

                setIsHover(!!isInteractive);
            }
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible]);

    const getCursorSrc = () => {
        if (isClicked) return '/assets/mouseclick.svg';
        if (isHover) return '/assets/mouseclick.svg';
        return '/assets/mousenormal.svg';
    };

    return (
        <>
            <style>{`* { cursor: none !important; }`}</style>

            <div
                className="fixed pointer-events-none z-[9999] top-0 left-0"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                    marginLeft: '-2px',
                    marginTop: '0px',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.2s ease', // Transisi opacity dipertahankan
                    willChange: 'transform',
                }}
            >
                <div>
                    <img
                        src={getCursorSrc()}
                        alt=""
                        width={24}
                        height={24}
                        style={{ display: 'block' }}
                        draggable={false}
                    />
                </div>
            </div>
        </>
    );
}