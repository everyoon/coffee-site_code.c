import React from 'react';

export default function BeakerFill({ fillPercent = 0 }) {
  const percent = Math.min(100, Math.max(0, fillPercent));

  // 비커 채움 높이 계산 (viewBox 기준)
  const maxHeight = 180;
  const fillHeight = (percent / 100) * maxHeight;
  const fillY = 280 - fillHeight; // 바닥 기준

  return (
    <svg viewBox="0 0 200 300" width="267" height="400">
      <defs>
        <clipPath id="beakerClip">
          <path d="M 60 50 L 60 250 Q 60 280 100 280 Q 140 280 140 250 L 140 50 Q 145 45 145 40 L 55 40 Q 55 45 60 50 Z" />
        </clipPath>
      </defs>

      {/* 비커 외곽선 */}
      <path
        d="M 60 50 L 60 250 Q 60 280 100 280 Q 140 280 140 250 L 140 50 Q 145 45 145 40 L 55 40 Q 55 45 60 50 Z"
        fill="none"
        stroke="#3D1D02"
        strokeWidth="2"
      />

      {/* 커피 채움 */}
      <rect
        x="55"
        y={fillY}
        width="90"
        height={fillHeight}
        fill="#3D1D02"
        opacity="0.8"
        clipPath="url(#beakerClip)"
        style={{
          transition: 'all 0.4s ease',
        }}
      />

      {/* 현재 선택 퍼센티지 */}
      <text x="100" y={fillY - 10} fontSize="14" fill="#3D1D02" fontWeight="bold" textAnchor="middle">
        {percent}%
      </text>
    </svg>
  );
}
