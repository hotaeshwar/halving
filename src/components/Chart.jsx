import { useState } from 'react';

export default function BitcoinChartsSlides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleItems, setVisibleItems] = useState(0);
  const [visibleNodes, setVisibleNodes] = useState(0);

  // Slide 1: Halving Chart Data
  const halvingData = [
    { year: 2008, btc: '50 BTC' },
    { year: 2012, btc: '25 BTC' },
    { year: 2016, btc: '12.50 BTC' },
    { year: 2020, btc: '6.25 BTC' },
    { year: 2024, btc: '3.125 BTC' }
  ];

  // Slide 2: Pattern Graph Data - Values from your drawing
  const nodes = [
    { id: 1, year: '2011', price: '$3 to $30', halving: false, x: 4, y: 85 },
    { id: 2, year: '2012', price: '(Halving)', halving: true, x: 18, y: 70 },
    { id: 3, year: '2013', price: '$1000', halving: false, x: 26, y: 50 },
    { id: 4, year: '2015', price: '$220', halving: false, x: 34, y: 85 },
    { id: 5, year: '2016', price: '(Halving)', halving: true, x: 42, y: 63 },
    { id: 6, year: '2017', price: '$19000', halving: false, x: 50, y: 30 },
    { id: 7, year: '2019', price: '$3500', halving: false, x: 58, y: 85 },
    { id: 8, year: '2020', price: '(Halving)', halving: true, x: 66, y: 56 },
    { id: 9, year: '2021', price: '$69000', halving: false, x: 74, y: 18 },
    { id: 10, year: '2023', price: '$17000', halving: false, x: 82, y: 85 },
    { id: 11, year: '2024', price: '(Halving)', halving: true, x: 88, y: 50 },
    { id: 12, year: '2025', price: '$126000', halving: false, x: 94, y: 10 },
    { id: 13, year: '2027', price: '?', halving: false, x: 96, y: 85 }
  ];

  const connections = [
    [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
    [6, 7], [7, 8], [8, 9], [9, 10], [10, 11],
    [11, 12], [12, 13]
  ];

  const handleNext = () => {
    if (currentSlide === 0) {
      if (visibleItems < halvingData.length) {
        setVisibleItems(prev => prev + 1);
      } else {
        setVisibleItems(0);
      }
    } else {
      if (visibleNodes < nodes.length) {
        setVisibleNodes(prev => prev + 1);
      } else {
        setVisibleNodes(0);
      }
    }
  };

  const handleReset = () => {
    if (currentSlide === 0) {
      setVisibleItems(0);
    } else {
      setVisibleNodes(0);
    }
  };

  const handleNextSlide = () => {
    setCurrentSlide(1);
    setVisibleNodes(0);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(0);
    setVisibleItems(0);
  };

  const isConnectionVisible = (conn) => {
    return visibleNodes >= conn[1];
  };

  const getNode = (id) => nodes.find(n => n.id === id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 flex items-center justify-center p-3 sm:p-4 md:p-6">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-5 w-32 h-32 sm:w-48 sm:h-48 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-20 right-5 w-32 h-32 sm:w-48 sm:h-48 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-4xl relative z-10">
        {/* Slide Indicator */}
        <div className="flex justify-center gap-2 mb-4">
          <div className={`h-2 w-16 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'bg-amber-500' : 'bg-amber-500/30'}`}></div>
          <div className={`h-2 w-16 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'bg-amber-500' : 'bg-amber-500/30'}`}></div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 shadow-2xl border-2 border-amber-500/30">
          
          {/* Slide 1: Halving Chart */}
          {currentSlide === 0 && (
            <div className="transition-opacity duration-500">
              {/* Logo */}
              <div className="flex justify-center mb-1 sm:mb-2">
                <img 
                  src="/images/logo.png" 
                  alt="Logo" 
                  className="h-10 sm:h-12 md:h-16 w-auto object-contain rounded-lg shadow-lg"
                />
              </div>

              {/* Header */}
              <div className="text-center mb-2 sm:mb-3 md:mb-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent mb-1">
                  Halving Chart
                </h1>
                <p className="text-xs sm:text-sm text-amber-200">
                  Click to reveal the Bitcoin halving timeline
                </p>
              </div>

              {/* Chart Container */}
              <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                {halvingData.map((item, index) => (
                  <div
                    key={item.year}
                    className={`transform transition-all duration-700 ${
                      index < visibleItems
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-95'
                    }`}
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg blur-sm opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
                      
                      <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur rounded-lg p-1.5 sm:p-2 md:p-2.5 border-2 border-amber-500/50 hover:border-amber-400/70 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30">
                        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
                          {/* Year */}
                          <div className="flex-shrink-0">
                            <div className="bg-gradient-to-r from-amber-600 to-yellow-600 px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-md border-2 border-amber-400/50 shadow-lg">
                              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 whitespace-nowrap">
                                {item.year}
                              </span>
                            </div>
                          </div>

                          {/* Arrow */}
                          <div className="flex-shrink-0">
                            <svg
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-amber-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </div>

                          {/* BTC Value */}
                          <div className="flex-1 min-w-0">
                            <div className="bg-gradient-to-r from-yellow-600/30 to-amber-600/30 backdrop-blur-sm px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-md border-2 border-yellow-400/50 text-center shadow-lg">
                              <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent tracking-wide">
                                {item.btc}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-3 sm:mt-4 mb-3 sm:mb-4">
                <div className="flex justify-center gap-1 sm:gap-1.5">
                  {halvingData.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${
                        index < visibleItems
                          ? 'w-5 sm:w-6 bg-gradient-to-r from-amber-500 to-yellow-500'
                          : 'w-1 sm:w-1.5 bg-amber-500/30'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-center mt-1.5 sm:mt-2 text-xs sm:text-sm text-amber-300 font-semibold">
                  {visibleItems} of {halvingData.length} halvings revealed
                </p>
              </div>
            </div>
          )}

          {/* Slide 2: Pattern Graph */}
          {currentSlide === 1 && (
            <div className="transition-opacity duration-500">
              {/* Logo */}
              <div className="flex justify-center mb-1 sm:mb-2">
                <img 
                  src="/images/logo.png" 
                  alt="Logo" 
                  className="h-10 sm:h-12 md:h-16 w-auto object-contain rounded-lg shadow-lg"
                />
              </div>

              <div className="text-center mb-2">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400 mb-1">
                  Bitcoin Pattern Graph
                </h1>
                <p className="text-xs sm:text-sm text-amber-300/80">
                  Reveal Bitcoin's historical pattern
                </p>
              </div>
              
              <div className="relative w-full bg-slate-900/50 rounded-lg border-2 border-amber-500/30 mb-2" style={{ height: 'calc(100vh - 380px)', minHeight: '500px' }}>
                <svg 
                  className="w-full h-full" 
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Lines */}
                  {connections.map((conn, idx) => {
                    if (!isConnectionVisible(conn)) return null;
                    const from = getNode(conn[0]);
                    const to = getNode(conn[1]);
                    return (
                      <line
                        key={`line-${idx}`}
                        x1={from.x}
                        y1={from.y}
                        x2={to.x}
                        y2={to.y}
                        stroke="#f59e0b"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        style={{
                          strokeDasharray: 150,
                          strokeDashoffset: 150,
                          animation: 'drawLine 0.5s ease-out forwards'
                        }}
                      />
                    );
                  })}

                  {/* Nodes */}
                  {nodes.map((node, idx) => {
                    if (idx >= visibleNodes) return null;
                    
                    const isTop = node.y < 50;
                    const isLongText = node.price.length > 8;
                    const isVeryLongText = node.price.includes('to') || node.price.includes(',');
                    
                    return (
                      <g key={node.id}>
                        {/* Glow circle */}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="3"
                          fill={node.halving ? '#f59e0b' : '#fbbf24'}
                          opacity="0.4"
                        />
                        
                        {/* Main node */}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="2"
                          fill={node.halving ? '#f59e0b' : '#1e293b'}
                          stroke={node.halving ? '#fbbf24' : '#f59e0b'}
                          strokeWidth="0.5"
                          filter="url(#glow)"
                        />
                        
                        {/* Center dot */}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="0.6"
                          fill="#fbbf24"
                        />

                        {/* Year background */}
                        <rect
                          x={node.x - 6.5}
                          y={isTop ? node.y - 10 : node.y + 4}
                          width="13"
                          height="5.5"
                          fill="#0f172a"
                          opacity="0.95"
                          rx="1"
                        />

                        {/* Year text */}
                        <text
                          x={node.x}
                          y={isTop ? node.y - 5.8 : node.y + 8}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="#fbbf24"
                          fontWeight="700"
                          fontSize="4.5"
                          fontFamily="Arial, sans-serif"
                        >
                          {node.year}
                        </text>

                        {/* Price background */}
                        <rect
                          x={node.x - (isVeryLongText ? 11 : isLongText ? 10 : node.price === '?' ? 3 : 8)}
                          y={isTop ? node.y + 4 : node.y - 10}
                          width={isVeryLongText ? 22 : isLongText ? 20 : node.price === '?' ? 6 : 16}
                          height="5.5"
                          fill="#0f172a"
                          opacity="0.95"
                          rx="1"
                        />
                        
                        {/* Price text */}
                        <text
                          x={node.x}
                          y={isTop ? node.y + 8 : node.y - 5.8}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill={node.halving ? '#fbbf24' : '#ffffff'}
                          fontWeight={node.halving ? '700' : '600'}
                          fontSize={isVeryLongText ? '3.0' : isLongText ? '3.5' : node.price === '?' ? '5' : '4.0'}
                          fontFamily="Arial, sans-serif"
                        >
                          {node.price}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div className="space-y-2 mb-2">
                <div className="flex justify-center gap-1.5">
                  {nodes.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        idx < visibleNodes
                          ? 'w-6 bg-gradient-to-r from-amber-500 to-yellow-500'
                          : 'w-1.5 bg-amber-500/30'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-center text-xs text-amber-300/70">
                  {visibleNodes} of {nodes.length} nodes
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-2">
            {/* Slide Navigation */}
            <div className="flex gap-2 justify-center">
              <button
                onClick={handlePrevSlide}
                disabled={currentSlide === 0}
                className={`px-4 py-2 text-sm font-semibold rounded-lg border-2 transition-all duration-300 ${
                  currentSlide === 0
                    ? 'bg-slate-800/30 text-slate-600 border-slate-700/30 cursor-not-allowed'
                    : 'bg-slate-700/50 hover:bg-slate-600/50 text-amber-400 border-amber-500/30 hover:border-amber-400/50 transform hover:scale-105 active:scale-95'
                }`}
              >
                ← Slide 1
              </button>
              <button
                onClick={handleNextSlide}
                disabled={currentSlide === 1}
                className={`px-4 py-2 text-sm font-semibold rounded-lg border-2 transition-all duration-300 ${
                  currentSlide === 1
                    ? 'bg-slate-800/30 text-slate-600 border-slate-700/30 cursor-not-allowed'
                    : 'bg-slate-700/50 hover:bg-slate-600/50 text-amber-400 border-amber-500/30 hover:border-amber-400/50 transform hover:scale-105 active:scale-95'
                }`}
              >
                Slide 2 →
              </button>
            </div>

            {/* Content Navigation */}
            <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 justify-center">
              <button
                onClick={handleNext}
                className="w-full sm:w-auto px-4 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                {(currentSlide === 0 && visibleItems === 0) || (currentSlide === 1 && visibleNodes === 0) 
                  ? 'Start' 
                  : (currentSlide === 0 && visibleItems < halvingData.length) || (currentSlide === 1 && visibleNodes < nodes.length)
                  ? 'Next' 
                  : 'Restart'}
              </button>
              
              {(visibleItems > 0 || visibleNodes > 0) && (
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 sm:px-5 py-1.5 sm:py-2 bg-slate-700/50 hover:bg-slate-600/50 text-amber-400 text-sm sm:text-base font-semibold rounded-lg border-2 border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }

        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}