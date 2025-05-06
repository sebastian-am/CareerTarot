import { useRoute, useLocation } from 'wouter';
import { CareerPath } from '@/components/CareerPath';
import { Button } from '@/components/ui/button';

export default function CareerPathPage() {
  const [match] = useRoute('/career-path/:career');
  const [, navigate] = useLocation();
  const career = match?.params.career;

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystical-900 via-mystical-800 to-mystical-700 text-white flex flex-col items-center justify-center py-12">
      <Button
        onClick={() => navigate('/')}
        className="mb-8 bg-golden-400 text-mystical-900 font-bold px-6 py-2 rounded-lg shadow hover:bg-golden-300 transition"
      >
        ← Back to Card
      </Button>
      <h1 className="text-3xl font-playfair font-bold text-golden-300 mb-6 text-center">Career Path: {career}</h1>
      {career && <CareerPath career={decodeURIComponent(career)} />}
    </div>
  );
} 