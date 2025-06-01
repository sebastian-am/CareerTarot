import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

function FourSidedStar() {
  return (
    <div className="relative w-24 h-24">
      {/* Outer diamond */}
      <div className="absolute inset-1 border-2 border-golden-300 transform rotate-45"></div>
      {/* Inner diamond */}
      <div className="absolute inset-5 border-2 border-golden-300 transform rotate-45"></div>
      {/* Center point */}
      <div className="absolute inset-1/2 w-2 h-2 bg-golden-300 transform -translate-x-1/2 -translate-y-1/2"></div>
      {/* Connecting lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-golden-300 transform -translate-x-1/2"></div>
        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-golden-300 transform -translate-y-1/2"></div>
      </div>
    </div>
  );
}

interface CardDeckProps {
  career?: string;
  isDrawn?: boolean;
}

export function CardDeck({ career, isDrawn = false }: CardDeckProps) {
  return (
    <div className="relative w-full h-[500px]">
      {/* Main Card */}
      <Card className="absolute w-full h-full rounded-xl border-2 border-golden-400 shadow-[0_10px_25px_-5px_rgba(107,70,193,0.5),0_8px_10px_-6px_rgba(107,70,193,0.3)] overflow-hidden bg-cover bg-center animate-fade-in-down" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1572097662444-3bcfd7ae1004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')"
      }}>
        <div className="absolute inset-0 bg-mystical-800 opacity-70 animate-fade-in-down-delay-1"></div>
        {/* Decorative bounding box */}
        <div className="absolute inset-7 border-2 border-golden-300/50 rounded-lg animate-fade-in-down-delay-2"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="animate-fade-in-down-delay-3">
            <FourSidedStar />
          </div>
        </div>
      </Card>
    </div>
  );
}

// Add these styles to your global CSS file or create a new style tag
const styles = `
@keyframes cardAppear {
  0% {
    transform: translateY(-100%) scale(0.8);
    opacity: 0;
  }
  60% {
    transform: translateY(10%) scale(1.02);
    opacity: 1;
  }
  100% {
    transform: translateY(0) scale(1);
  }
}

@keyframes starAppear {
  0% {
    transform: scale(0) rotate(-180deg);
    opacity: 0;
  }
  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
}
`;
