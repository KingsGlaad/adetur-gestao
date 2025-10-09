// components/svgs/BackgroundPattern.tsx
import React from 'react';

export const StatsBackground: React.FC = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" // Aumentei a opacidade para 80% para mostrar os detalhes. Ajuste conforme sua necessidade.
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        <linearGradient id="blueGradientWave" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="blueMainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="limeMainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#84CC16" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#65A30D" stopOpacity="0.9" /> {/* lime-600 */}
        </linearGradient>
      </defs>

      {/* Onda de fundo sutil em azul (agora mais detalhada e no canto inferior) */}
      <path
        d="M0,224L48,218.7C96,213,192,203,288,208C384,213,480,235,576,240C672,245,768,235,864,229.3C960,224,1056,224,1152,224C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        fill="url(#blueGradientWave)"
      ></path>

      {/* Grid de pontos de fundo sutil para "ruído" de circuito */}
      <pattern id="dot-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.5" fill="#E5E7EB" opacity="0.1" /> {/* light gray */}
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-grid)" />

      {/* Linhas e circuitos azuis mais detalhados e interconectados */}
      <path
        d="M 50 50 C 70 20, 150 20, 170 50 S 250 80, 270 50 M 10 100 L 80 100 S 120 120, 150 100 L 220 100"
        stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6"
      />
      <circle cx="50" cy="50" r="3" fill="#3B82F6" opacity="0.8" />
      <circle cx="170" cy="50" r="3" fill="#3B82F6" opacity="0.8" />
      <circle cx="10" cy="100" r="3" fill="#3B82F6" opacity="0.8" />
      <circle cx="220" cy="100" r="3" fill="#3B82F6" opacity="0.8" />
      <rect x="110" y="95" width="10" height="10" rx="2" fill="#3B82F6" opacity="0.4" />
      <line x1="170" y1="50" x2="170" y2="90" stroke="#3B82F6" strokeWidth="1" opacity="0.5" />

      {/* Linhas e circuitos verdes mais detalhados e interconectados */}
      <path
        d="M 1200 60 C 1220 30, 1300 30, 1320 60 S 1400 90, 1420 60 M 1150 110 L 1220 110 S 1260 130, 1290 110 L 1360 110"
        stroke="#84CC16" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7"
      />
      <circle cx="1200" cy="60" r="3" fill="#84CC16" opacity="0.9" />
      <circle cx="1320" cy="60" r="3" fill="#84CC16" opacity="0.9" />
      <circle cx="1150" cy="110" r="3" fill="#84CC16" opacity="0.9" />
      <circle cx="1360" cy="110" r="3" fill="#84CC16" opacity="0.9" />
      <rect x="1250" y="105" width="10" height="10" rx="2" fill="#84CC16" opacity="0.5" />
      <line x1="1320" y1="60" x2="1320" y2="100" stroke="#84CC16" strokeWidth="1" opacity="0.6" />

      {/* Elementos centrais de conexão */}
      <path
        d="M 400 150 C 450 120, 550 120, 600 150 L 650 150 L 700 180 S 750 200, 800 180 L 850 180 C 900 150, 1000 150, 1050 180"
        stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 8" opacity="0.7"
      />
      <circle cx="400" cy="150" r="4" fill="#3B82F6" opacity="0.9" />
      <circle cx="650" cy="150" r="4" fill="#3B82F6" opacity="0.9" />
      <circle cx="850" cy="180" r="4" fill="#3B82F6" opacity="0.9" />
      <circle cx="1050" cy="180" r="4" fill="#3B82F6" opacity="0.9" />

      {/* Mais detalhes e ruído de fundo (pequenos pontos e formas) */}
      {[...Array(50)].map((_, i) => (
        <circle
          key={`dot-blue-${i}`}
          cx={Math.random() * 1440}
          cy={Math.random() * 320}
          r={Math.random() * 1 + 0.5}
          fill="#3B82F6"
          opacity={Math.random() * 0.2 + 0.05}
        />
      ))}
      {[...Array(50)].map((_, i) => (
        <circle
          key={`dot-lime-${i}`}
          cx={Math.random() * 1440}
          cy={Math.random() * 320}
          r={Math.random() * 1 + 0.5}
          fill="#84CC16"
          opacity={Math.random() * 0.2 + 0.05}
        />
      ))}
      {[...Array(20)].map((_, i) => (
        <rect
          key={`square-blue-${i}`}
          x={Math.random() * 1440}
          y={Math.random() * 320}
          width={Math.random() * 5 + 2}
          height={Math.random() * 5 + 2}
          rx={1}
          fill="#3B82F6"
          opacity={Math.random() * 0.15 + 0.03}
        />
      ))}
      {[...Array(20)].map((_, i) => (
        <rect
          key={`square-lime-${i}`}
          x={Math.random() * 1440}
          y={Math.random() * 320}
          width={Math.random() * 5 + 2}
          height={Math.random() * 5 + 2}
          rx={1}
          fill="#84CC16"
          opacity={Math.random() * 0.15 + 0.03}
        />
      ))}

      {/* Elementos de "chip" ou "nó" mais elaborados */}
      <g transform="translate(250, 200)">
        <rect x="0" y="0" width="40" height="25" rx="5" fill="#E5E7EB" opacity="0.2" />
        <rect x="5" y="5" width="30" height="15" rx="3" fill="#DBEAFE" opacity="0.3" />
        <line x1="20" y1="-5" x2="20" y2="0" stroke="#3B82F6" strokeWidth="1" opacity="0.6" />
        <line x1="20" y1="25" x2="20" y2="30" stroke="#84CC16" strokeWidth="1" opacity="0.6" />
      </g>
      <g transform="translate(900, 50)">
        <rect x="0" y="0" width="40" height="25" rx="5" fill="#E5E7EB" opacity="0.2" />
        <rect x="5" y="5" width="30" height="15" rx="3" fill="#DBEAFE" opacity="0.3" />
        <line x1="20" y1="-5" x2="20" y2="0" stroke="#84CC16" strokeWidth="1" opacity="0.6" />
        <line x1="20" y1="25" x2="20" y2="30" stroke="#3B82F6" strokeWidth="1" opacity="0.6" />
      </g>


    </svg>
  );
};

