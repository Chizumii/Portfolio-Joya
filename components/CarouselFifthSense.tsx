'use client';

import React, { useState, useRef, useCallback, useLayoutEffect } from 'react';
import '../src/styles/CarouselFifthSense.css';

interface Character {
  active: string;
  inactive: string;
  name?: string;
  activeHash?: string;
}

type ButtonPosition = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

interface CarouselFifthSenseProps {
  basePath?: string;
  prevButtonSrc?: string;
  nextButtonSrc?: string;
  characters?: Character[];
  initialIndex?: number;
  prevButtonPosition?: ButtonPosition;
  nextButtonPosition?: ButtonPosition;
}

const DEFAULT_CHARACTERS: Character[] = [
  { active: 'Asset 24.svg', inactive: 'Asset 31.svg', name: 'Karakter 1', activeHash: '#Yejin' },
  { active: 'Asset 25.svg', inactive: 'Asset 32.svg', name: 'Karakter 2', activeHash: '#Hwangeunchae' },
  { active: 'Asset 26.svg', inactive: 'Asset 33.svg', name: 'Karakter 3', activeHash: '#Kimherin' },
  { active: 'Asset 28.svg', inactive: 'Asset 30.svg', name: 'Karakter 4', activeHash: '#Leejia' },
  { active: 'Asset 27.svg', inactive: 'Asset 29.svg', name: 'Karakter 5', activeHash: '#Choseoyeon' },
];

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

type SlotRole = 'far-left' | 'left' | 'center' | 'right' | 'far-right';

interface SlotStyle {
  x: number;
  scale: number;
  opacity: number;
  zIndex: number;
}

const SLOT_STYLES: Record<SlotRole, SlotStyle> = {
  'far-left':  { x: -380, scale: 1,  opacity: 0,   zIndex: 0 },
  'left':      { x: -290, scale: 1, opacity: 0.5, zIndex: 1 },
  'center':    { x: 0,    scale: 1.5,  opacity: 1,   zIndex: 50 },
  'right':     { x: 290,  scale: 1, opacity: 0.5, zIndex: 1 },
  'far-right': { x: 380,  scale: 1,  opacity: 0,   zIndex: 0 },
};

const SLOT_ORDER: SlotRole[] = ['far-left', 'left', 'center', 'right', 'far-right'];

const DEFAULT_PREV_POSITION: ButtonPosition = {
  left: '0px',
  top: '50%',
};

const DEFAULT_NEXT_POSITION: ButtonPosition = {
  right: '0px',
  top: '50%',
};

/**
 * Resolve base CSS transform for a button based on its position props.
 * When `top` is set without `bottom`, we add translateY(-50%) to vertically center the button.
 * This base transform is stored in a CSS custom property so hover/active
 * states can COMPOSE scale on top without wiping out the offset.
 */
function resolveBaseTransform(pos: ButtonPosition): string {
  const parts: string[] = [];
  if (pos.top !== undefined && pos.bottom === undefined) {
    parts.push('translateY(-50%)');
  }
  if (pos.bottom !== undefined && pos.top === undefined) {
    parts.push('translateY(50%)');
  }
  return parts.join(' ');
}

const CarouselFifthSense: React.FC<CarouselFifthSenseProps> = ({
  basePath = '/assets/',
  prevButtonSrc = '/assets/prevbutton.svg',
  nextButtonSrc = '/assets/nextbutton.svg',
  characters = DEFAULT_CHARACTERS,
  initialIndex = 1,
  prevButtonPosition = DEFAULT_PREV_POSITION,
  nextButtonPosition = DEFAULT_NEXT_POSITION,
}) => {
  const total = characters.length;

  const [center, setCenter] = useState<number>(initialIndex);
  const navDirRef = useRef<'next' | 'prev' | null>(null);
  const busyRef = useRef(false);

  const [enteringCharIdx, setEnteringCharIdx] = useState<number | null>(null);
  const [enteringFromSlot, setEnteringFromSlot] = useState<SlotStyle | null>(null);

  const handleNav = useCallback(
    (direction: 'next' | 'prev') => {
      if (busyRef.current) return;
      busyRef.current = true;
      navDirRef.current = direction;
      setCenter(prev => mod(prev + (direction === 'next' ? 1 : -1), total));
      setTimeout(() => { busyRef.current = false; }, 600);
    },
    [total]
  );

  const handleActiveClick = useCallback((charIdx: number) => {
    const ch = characters[charIdx];
    if (ch?.activeHash) {
      window.location.hash = ch.activeHash;
    }
  }, [characters]);

  const visibleChars = SLOT_ORDER.map((_, slotIndex) =>
    mod(center + (slotIndex - 2), total)
  );

  useLayoutEffect(() => {
    const direction = navDirRef.current;
    if (!direction) return;

    const newCharSlotIndex = direction === 'next' ? 4 : 0;
    const newCharIdx = visibleChars[newCharSlotIndex];

    const startSlot: SlotStyle =
      direction === 'next'
        ? { ...SLOT_STYLES['far-right'], x: SLOT_STYLES['far-right'].x + 120, scale: 0.7, opacity: 0 }
        : { ...SLOT_STYLES['far-left'],  x: SLOT_STYLES['far-left'].x - 120,  scale: 0.7, opacity: 0 };

    setEnteringCharIdx(newCharIdx);
    setEnteringFromSlot(startSlot);

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setEnteringCharIdx(null);
        setEnteringFromSlot(null);
      });
    });

    return () => cancelAnimationFrame(raf);
  }, [center]);

  const prevBaseTransform = resolveBaseTransform(prevButtonPosition);
  const nextBaseTransform = resolveBaseTransform(nextButtonPosition);

  return (
    <div className="fs-carousel-wrapper">
      <div className="fs-row">

        {/* PREV BUTTON — posisi dikontrol via props */}
        <button
          className="fs-nav-btn fs-nav-btn--prev"
          style={{
            position: 'absolute',
            // CSS var dipakai oleh CSS hover rule untuk compose scale
            ['--fs-btn-base' as string]: prevBaseTransform || 'none',
            transform: prevBaseTransform || undefined,
            ...prevButtonPosition,
          }}
          onClick={() => handleNav('prev')}
          aria-label="Previous character"
        >
          <img src={prevButtonSrc} alt="prev" />
        </button>

        <div className="fs-track-wrapper">
          {visibleChars.map((charIdx, slotIndex) => {
            const role = SLOT_ORDER[slotIndex];
            const isCenter = role === 'center';
            const s = SLOT_STYLES[role];
            const ch = characters[charIdx];

            const isEntering = charIdx === enteringCharIdx && enteringFromSlot !== null;
            const appliedStyle = isEntering ? enteringFromSlot : s;
            const hash = ch?.activeHash;

            return (
              <div
                key={charIdx}
                className={[
                  'fs-card',
                  isEntering ? 'fs-card--no-transition' : '',
                  isCenter && hash ? 'fs-card--clickable' : '',
                ].filter(Boolean).join(' ')}
                data-role={role}
                style={{
                  transform: `
                    translateX(${appliedStyle.x}px)
                    scale(${appliedStyle.scale})
                    rotateY(${appliedStyle.x * 0.05}deg)
                  `,
                  opacity: appliedStyle.opacity,
                  zIndex: appliedStyle.zIndex,
                }}
                onClick={isCenter && hash ? () => handleActiveClick(charIdx) : undefined}
                role={isCenter && hash ? 'link' : undefined}
                tabIndex={isCenter && hash ? 0 : undefined}
                onKeyDown={
                  isCenter && hash
                    ? (e) => { if (e.key === 'Enter' || e.key === ' ') handleActiveClick(charIdx); }
                    : undefined
                }
                title={isCenter && hash ? `Go to ${ch?.name ?? hash}` : undefined}
              >
                <img
                  src={basePath + (isCenter ? ch.active : ch.inactive)}
                  alt={ch?.name ?? ''}
                  draggable={false}
                />
                {isCenter && hash && (
                  <span className="fs-card__click-hint" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>

        {/* NEXT BUTTON — posisi dikontrol via props */}
        <button
          className="fs-nav-btn fs-nav-btn--next"
          style={{
            position: 'absolute',
            ['--fs-btn-base' as string]: nextBaseTransform || 'none',
            transform: nextBaseTransform || undefined,
            ...nextButtonPosition,
          }}
          onClick={() => handleNav('next')}
          aria-label="Next character"
        >
          <img src={nextButtonSrc} alt="next" />
        </button>

      </div>
    </div>
  );
};

export default CarouselFifthSense;