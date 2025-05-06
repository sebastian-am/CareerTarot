import React from 'react';
import { careerPaths, CareerPathStep } from '@shared/careerPaths';
// import { SomeIcon } from 'lucide-react'; // Example icon import

interface CareerPathProps {
  career: string;
}

export const CareerPath: React.FC<CareerPathProps> = ({ career }) => {
  const path: CareerPathStep[] | undefined = careerPaths[career];

  if (!path) {
    return <div className="text-center text-red-400">No career path found for this career.</div>;
  }

  return (
    <div className="relative flex flex-col items-center w-full py-4 min-h-[600px]">
      {/* Central vertical line - thicker, more opaque, full height */}
      <div className="absolute left-1/2 top-0 h-full w-2 bg-golden-400 z-0 opacity-90" style={{ transform: 'translateX(-50%)' }} />
      {path.map((step, idx) => {
        const isLeft = idx % 2 === 0;
        return (
          <div key={step.title} className="relative w-full max-w-6xl flex items-center mb-20 z-10 min-h-[180px]">
            {/* Spacer for left/right alignment */}
            {isLeft ? null : <div className="w-1/2" />}
            {/* Step Card and connector */}
            <div className={`relative w-1/2 flex ${isLeft ? 'justify-end pr-12' : 'justify-start pl-12'}`}>
              <div className="relative max-w-xl min-w-[340px] w-full bg-mystical-800/90 border-2 border-golden-400 rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
                {/* Icon placeholder (optional) */}
                {/* <SomeIcon className="mb-2 text-golden-300 w-8 h-8" /> */}
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
              {/* Connector node */}
              <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-20" style={{ left: isLeft ? '100%' : undefined, right: isLeft ? undefined : '100%' }}>
                <div className="w-12 h-12 flex items-center justify-center bg-mystical-900 border-2 border-golden-400 text-golden-300 font-bold rounded-full shadow-lg text-xl">
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