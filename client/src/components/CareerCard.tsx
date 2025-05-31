import { useState, useEffect } from 'react';
import { CareerInsight } from '@shared/schema';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';
import { getArcanaName } from '@shared/arcana';
// import { CareerPath } from './CareerPath';
// Placeholder import for CareerPath (to be created)

interface CareerCardProps {
  careerInsight: CareerInsight;
  isFlipped: boolean;
}

export function CareerCard({ careerInsight, isFlipped }: CareerCardProps) {
  // Handle both camelCase and snake_case property names
  const quote = careerInsight.quote;
  const intervieweeName = careerInsight.intervieweeName || careerInsight.interviewee_name;
  const podcastLink = careerInsight.podcastLink || careerInsight.podcast_link;
  const podcastTitle = careerInsight.podcastTitle || careerInsight.podcast_title;
  const career = careerInsight.career;
  const arcanaName = getArcanaName(careerInsight);

  return (
    <div 
      className={cn(
        "relative w-full h-[500px] transition-transform duration-800 transform-style-preserve-3d",
        isFlipped && "rotate-y-180"
      )}
    >
      {/* Card Back */}
      <div className="absolute w-full h-full backface-hidden">
        <Card className="w-full h-full rounded-xl border-2 border-golden-400 shadow-[0_10px_25px_-5px_rgba(107,70,193,0.5),0_8px_10px_-6px_rgba(107,70,193,0.3)] overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1572097662444-3bcfd7ae1004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')" }}>
          <div className="absolute inset-0 bg-mystical-800 opacity-70"></div>
        </Card>
      </div>
      
      {/* Card Front */}
      <div className="absolute w-full h-full backface-hidden rotate-y-180">
        <Card className="w-full h-full bg-gradient-to-b from-mystical-700 to-mystical-900 rounded-xl border-2 border-golden-400 shadow-[0_10px_25px_-5px_rgba(107,70,193,0.5),0_8px_10px_-6px_rgba(107,70,193,0.3)] p-6 flex flex-col">
          {/* Card Content */}
          <div className="flex-grow overflow-y-auto">
            <div className="flex flex-col h-full">
              {/* Card Title/Career */}
              <h2 className="font-playfair text-3xl font-bold text-golden-300 mb-2 text-center">
                {career}
              </h2>
              
              {/* Card Arcana Name */}
              <h3 className="font-playfair text-xl text-golden-200 mb-4 text-center">
                {arcanaName}
              </h3>
              
              {/* Decorative Divider - simplified to avoid blocking content */}
              <div className="flex items-center justify-center my-2">
                <div className="h-px bg-golden-400 w-28"></div>
              </div>
              
              {/* Quote Content */}
              <div className="my-4 flex-grow">
                <p className="italic text-mystical-100 text-lg leading-relaxed">
                  "{quote}"
                </p>
              </div>
              
              {/* Star Decoration */}
              <div className="flex justify-center my-4">
                <div className="w-16 h-16 border-2 border-golden-300 rounded-full flex items-center justify-center">
                  <StarIcon className="h-8 w-8 text-golden-300 animate-[float_6s_ease-in-out_infinite]" />
                </div>
              </div>
              
              {/* Interviewee Info */}
              <div className="mt-auto pt-4">
                <div className="flex flex-col gap-2 text-sm text-mystical-300 italic">
                  <div className="flex items-center justify-between">
                    <span>{intervieweeName}</span>
                  </div>
                  <a 
                    href={podcastLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-golden-400 hover:underline"
                  >
                    <span className="mr-1">🎙️</span> Listen to episode
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
