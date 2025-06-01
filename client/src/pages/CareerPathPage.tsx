import { useRoute, useLocation } from 'wouter';
import { CareerPath } from '@/components/CareerPath';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function CareerPathPage() {
  const [match, params] = useRoute('/career-path/:career');
  const [, navigate] = useLocation();
  const career = params?.career;
  const [showPath, setShowPath] = useState(false);

  useEffect(() => {
    // Delay showing the career path until after the header animations
    const timer = setTimeout(() => {
      setShowPath(true);
    }, 1500); // Reduced delay to 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystical-900 via-mystical-800 to-mystical-700 text-white flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-6xl flex flex-col items-center">
        <Button
          onClick={() => navigate('/')}
          className="mb-8 bg-golden-400 text-mystical-900 font-bold px-6 py-2 rounded-lg shadow hover:bg-golden-300 transition animate-fade-in-down"
        >
          ← Back to Card
        </Button>
        <h1 className="text-3xl font-playfair font-bold text-golden-300 mb-6 text-center animate-fade-in-down" style={{ animationDelay: '0.3s' }}>
          Career Path: {career}
        </h1>
        {career && showPath && <CareerPath career={decodeURIComponent(career)} />}
      </div>
    </div>
  );
} 