import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

export function CardDeck() {
  return (
    <div className="relative w-64 h-96 mx-auto">
      {/* Main card */}
      <Card className="absolute top-0 left-0 w-full h-full opacity-90 shadow-[0_10px_25px_-5px_rgba(107,70,193,0.5),0_8px_10px_-6px_rgba(107,70,193,0.3)] rounded-xl border-2 border-golden-400 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1572097662444-3bcfd7ae1004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')" }}>
        <div className="absolute inset-0 bg-mystical-800 opacity-70 rounded-xl"></div>
        <span className="font-playfair text-2xl text-golden-300 rotate-90 opacity-80 relative z-10">Career Tarot</span>
      </Card>
      
      {/* Stacked cards behind for deck effect */}
      <Card className="absolute top-2 left-1 w-full h-full opacity-40 shadow-md rounded-xl border border-golden-400 bg-mystical-800"></Card>
      <Card className="absolute top-4 left-2 w-full h-full opacity-20 shadow-sm rounded-xl border border-golden-400 bg-mystical-800"></Card>
    </div>
  );
}
