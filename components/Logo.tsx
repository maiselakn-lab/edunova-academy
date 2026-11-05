import React from 'react';

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Navy Background Shield */}
      <path d="M50 5L10 20V50C10 75 50 95 50 95C50 95 90 75 90 50V20L50 5Z" fill="#142D4E"/>
      
      {/* Gold Inner Border */}
      <path d="M50 12L17 25V50C17 70 50 88 50 88C50 88 83 70 83 50V25L50 12Z" fill="none" stroke="#E5B45B" strokeWidth="2"/>
      
      {/* Stylized 'E' / Book Symbol */}
      <path d="M35 35H65V42H42V48H60V55H42V62H65V69H35V35Z" fill="#E5B45B"/>
      
      {/* Accent Circle (Knowledge/Globe) */}
      <circle cx="50" cy="50" r="28" stroke="#2463A6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5"/>
    </svg>
  );
}