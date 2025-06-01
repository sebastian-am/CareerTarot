import { useState, useEffect } from 'react';
import { CareerInsight } from '@shared/schema';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { StarIcon, Flame, Code, Palette, Briefcase, Heart, Coffee, BookOpen, Users, Film, Fish, PenTool, ChefHat, Waves, Megaphone, Paintbrush, School, Compass, GraduationCap, Scale, Baby, Gavel } from 'lucide-react';
import { getArcanaName } from '@shared/arcana';
import { CardDeck } from './CardDeck';
// import { CareerPath } from './CareerPath';
// Placeholder import for CareerPath (to be created)

// Map of careers to their unique visual elements
const careerIcons: Record<string, React.ReactNode> = {
  'Firefighter': <Flame className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Tech Startup Founder': <Code className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Ethical Hacker': <Code className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Fashion Designer': <Palette className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Chief Operating Officer': <Briefcase className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Resident Services Manager': <Heart className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Development Director': <Users className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Executive Chef': <ChefHat className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Flight Nurse': <Heart className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Barista': <Coffee className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Adult Education Administrator': <BookOpen className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Nonprofit Director': <Users className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Media Producer': <Film className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Marine Biologist': <Fish className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Journalist': <PenTool className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Chef Instructor': <ChefHat className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Aquarium Interpreter': <Waves className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Marketing Director': <Megaphone className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Artist & Educator': <Paintbrush className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'School Principal': <School className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Career Development Advisor': <Compass className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'College Counselor': <GraduationCap className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'HR Generalist': <Scale className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'Early Childhood Educator': <Baby className="w-20 h-20 text-golden-300" strokeWidth={1} />,
  'State Senator': <Gavel className="w-20 h-20 text-golden-300" strokeWidth={1} />
};

interface CareerCardProps {
  careerInsight: CareerInsight;
  isFlipped: boolean;
}

export function CareerCard({ careerInsight, isFlipped }: CareerCardProps) {
  const quote = careerInsight.quote;
  const career = careerInsight.career;
  const arcanaName = getArcanaName(careerInsight);
  const careerIcon = careerIcons[career];

  return (
    <div 
      className={cn(
        "relative w-full h-[500px] transition-transform duration-800 transform-style-preserve-3d",
        isFlipped && "rotate-y-180",
        "animate-fade-in-down"
      )}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Card Back */}
      <div 
        className="absolute w-full h-full backface-hidden"
        style={{ 
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)'
        }}
      >
        <Card className="w-full h-full rounded-xl border-2 border-golden-400 shadow-[0_10px_25px_-5px_rgba(107,70,193,0.5),0_8px_10px_-6px_rgba(107,70,193,0.3)] overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1572097662444-3bcfd7ae1004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')" }}>
          <div className="absolute inset-0 bg-mystical-800 opacity-70"></div>
          {/* Decorative bounding box */}
          <div className="absolute inset-7 border-2 border-golden-300/50 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            {careerIcon}
          </div>
        </Card>
      </div>
      
      {/* Card Front */}
      <div 
        className="absolute w-full h-full backface-hidden"
        style={{ backfaceVisibility: 'hidden' }}
      >
        <Card className="w-full h-full bg-gradient-to-b from-mystical-700 to-mystical-900 rounded-xl border-2 border-golden-400 shadow-[0_10px_25px_-5px_rgba(107,70,193,0.5),0_8px_10px_-6px_rgba(107,70,193,0.3)] p-6 flex flex-col">
          {/* Card Content */}
          <div className="flex-grow overflow-y-auto">
            <div className="flex flex-col h-full">
              {/* Card Title/Career */}
              <h2 className="font-playfair text-3xl font-bold text-golden-300 mb-2 text-center animate-fade-in-down">
                {career}
              </h2>
              
              {/* Card Arcana Name */}
              <h3 className="font-playfair text-xl text-golden-200 mb-4 text-center animate-fade-in-down">
                {arcanaName}
              </h3>
              
              {/* Decorative Divider */}
              <div className="flex items-center justify-center my-2 animate-fade-in-down">
                <div className="h-px bg-golden-400 w-28"></div>
                <div className="mx-2 text-golden-300">✧</div>
                <div className="h-px bg-golden-400 w-28"></div>
              </div>
              
              {/* Quote Content */}
              <div className="my-4 flex-grow animate-fade-in-down">
                <p className="italic text-mystical-100 text-lg leading-relaxed">
                  "{quote}"
                </p>
              </div>
              
              {/* Career Icon */}
              <div className="flex justify-center my-4 animate-fade-in-down">
                <div className="w-20 h-20">
                  {careerIcon}
                </div>
              </div>
              
              {/* Interviewee Info */}
              <div className="mt-auto pt-4 animate-fade-in-down">
                <div className="flex flex-col gap-2 text-sm text-mystical-300 italic">
                  <div className="flex items-center justify-between">
                    <span>{careerInsight.interviewee_name}</span>
                  </div>
                  <a 
                    href={careerInsight.podcast_link} 
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
