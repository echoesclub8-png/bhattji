import React, { memo } from 'react';
import '../styles/diwali-overlay.css';

/**
 * Traditional Indian Diya (Earthen lamp) SVG
 * High-fidelity, lightweight vector illustration with metallic brass & terracotta tones
 */
const DiyaSvg: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = '' }) => (
  <svg
    width={size}
    height={Math.round(size * 0.72)}
    viewBox="0 0 50 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ overflow: 'visible' }}
  >
    <defs>
      <linearGradient id="dwl-brass-grad" x1="0" y1="0" x2="50" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="35%" stopColor="#d97706" />
        <stop offset="70%" stopColor="#92400e" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
      <linearGradient id="dwl-brass-rim" x1="0" y1="12" x2="50" y2="12" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="dwl-base-grad" x1="15" y1="28" x2="35" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#b45309" />
        <stop offset="100%" stopColor="#451a03" />
      </linearGradient>
    </defs>


