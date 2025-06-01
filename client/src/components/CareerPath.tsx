import React, { useState } from 'react';
import { careerPaths, CareerPathStep } from '@shared/careerPaths';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
// import { SomeIcon } from 'lucide-react'; // Example icon import

interface CareerPathProps {
  career: string;
}

export const CareerPath: React.FC<CareerPathProps> = ({ career }) => {
  const path: CareerPathStep[] | undefined = careerPaths[career];
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  if (!path) {
    return <div className="text-center text-red-400">No career path found for this career.</div>;
  }

  return (
    <div className="relative flex flex-col items-center w-full py-4 min-h-[600px]">
      {/* Central vertical line - thicker, more opaque, full height */}
      <div className="absolute left-1/2 top-0 h-full w-2 bg-golden-400 z-0 opacity-90" style={{ transform: 'translateX(-50%)' }} />
      {path.map((step, idx) => {
        const isLeft = idx % 2 === 0;
        const isHovered = hoveredStep === idx;
        return (
          <div 
            key={step.title} 
            className="relative w-full max-w-6xl flex items-center mb-20 z-10 min-h-[180px]"
            style={{ 
              opacity: 0,
              animation: `fadeInDown 0.5s ease-out ${1.5 + (idx * 0.5)}s forwards`
            }}
          >
            {/* Spacer for left/right alignment */}
            {isLeft ? null : <div className="w-1/2" />}
            {/* Step Card and connector */}
            <div className={`relative w-1/2 flex ${isLeft ? 'justify-end pr-12' : 'justify-start pl-12'}`}>
              <div 
                className={cn(
                  "relative max-w-xl min-w-[340px] w-full transition-all duration-300",
                  isHovered && "transform scale-105"
                )}
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <Card className={cn(
                  "w-full bg-gradient-to-b from-mystical-700 to-mystical-900 rounded-xl border-2 border-golden-400 p-8 flex flex-col items-center text-center transition-all duration-300",
                  isHovered && "shadow-[0_0_30px_rgba(234,179,8,0.3)] border-golden-300"
                )}>
                  {/* Decorative corner elements */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-golden-300/50 transition-all duration-300"
                       style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }} />
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-golden-300/50 transition-all duration-300"
                       style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }} />
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-golden-300/50 transition-all duration-300"
                       style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }} />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-golden-300/50 transition-all duration-300"
                       style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }} />

                  {/* Mystical symbol overlay that appears on hover */}
                  <div className={cn(
                    "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 pointer-events-none",
                    isHovered && "opacity-10"
                  )}>
                    <div className="text-6xl text-golden-300">✧</div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10">
                    <h3 className="font-playfair text-2xl text-golden-300 font-bold mb-1">{step.title}</h3>
                    <div className="text-mystical-100 text-base mb-2">{step.description}</div>
                    <ul className="list-disc list-inside text-golden-200 text-sm mb-2 text-left w-full mx-auto" style={{ maxWidth: 400 }}>
                      {step.keyResponsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                    {step.typicalAdvancement && (
                      <div className="text-xs text-mystical-300 italic mt-2">
                        Typical advancement: {step.typicalAdvancement}
                      </div>
                    )}
                  </div>
                </Card>
              </div>
              {/* Connector node */}
              <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-20" style={{ left: isLeft ? '100%' : undefined, right: isLeft ? undefined : '100%' }}>
                <div className={cn(
                  "w-12 h-12 flex items-center justify-center bg-mystical-900 border-2 border-golden-400 text-golden-300 font-bold rounded-full shadow-lg text-xl transition-all duration-300",
                  isHovered && "scale-110 border-golden-300 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                )}>
                  {idx + 1}
                </div>
              </div>
            </div>
            {isLeft ? <div className="w-1/2" /> : null}
          </div>
        );
      })}
    </div>
  );
}; 