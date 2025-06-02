import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { CareerInsight } from "@shared/schema";
import { CardDeck } from "@/components/CardDeck";
import { CareerCard } from "@/components/CareerCard";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Share2, RefreshCw } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { CareerPath } from '@/components/CareerPath';
import { getArcanaName } from "../utils/arcana";

export default function Home() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState<CareerInsight | null>(null);
  const [viewMode, setViewMode] = useState<'card' | 'path'>('card');
  const [generatedInsight, setGeneratedInsight] = useState<{ personalInsight: string | null, careerInsight: string | null }>({ personalInsight: null, careerInsight: null });
  const [showInsights, setShowInsights] = useState(false);
  const [insightLoading, setInsightLoading] = useState(false);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: careerInsights, isLoading } = useQuery({
    queryKey: ['/api/insights'],
    staleTime: Infinity,
  });

  const drawCard = async () => {
    if (isDrawing) return;
    
    try {
      setIsDrawing(true);
      setIsFlipped(false);
      setGeneratedInsight({ personalInsight: null, careerInsight: null });
      setShowInsights(false);
      
      // Reset current card if one exists
      if (currentCard) {
        setCurrentCard(null);
        // Wait for animation to complete
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      
      // Fetch random card
      const response = await fetch('/api/insights/random');
      if (!response.ok) {
        throw new Error('Failed to draw a card');
      }
      
      const randomCard = await response.json();
      setCurrentCard(randomCard);
      
      // Pre-fetch Gemini insight but don't show it yet
      try {
        const arcanaName = randomCard.career && getArcanaName(randomCard);
        const insightRes = await fetch('http://localhost:3001/api/generate-insight', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': 'http://localhost:3000'
          },
          credentials: 'include',
          body: JSON.stringify({ career: randomCard.career, arcana: arcanaName }),
        });
        if (!insightRes.ok) {
          throw new Error(`HTTP error! status: ${insightRes.status}`);
        }
        const insightData = await insightRes.json();
        setGeneratedInsight({
          personalInsight: insightData.personalInsight,
          careerInsight: insightData.careerInsight
        });
      } catch (e) {
        setGeneratedInsight({ personalInsight: null, careerInsight: null });
      }
      
      // Animate flipping after a short delay
      setTimeout(() => {
        setIsFlipped(true);
      }, 500);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to draw a card. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDrawing(false);
    }
  };

  const resetCard = () => {
    setIsFlipped(false);
    setViewMode('card');
    setTimeout(() => {
      setCurrentCard(null);
    }, 800);
  };

  const shareCard = () => {
    if (!currentCard) return;
    
    // Handle both camelCase and snake_case property names
    const initialCode = currentCard.initial_code;
    const quote = currentCard.quote;
    const intervieweeName = currentCard.interviewee_name;
    
    // Create share text with the quote and attribution
    const shareText = `Career Insight: ${initialCode}\n\n"${quote}"\n\n- ${intervieweeName}, from the What-To-Be podcast`;
    
    // Check if Web Share API is available
    if (navigator.share) {
      navigator.share({
        title: 'Career Tarot Insight',
        text: shareText,
        url: window.location.href
      }).catch((error) => {
        toast({
          title: "Sharing Failed",
          description: "Could not share this card.",
          variant: "destructive",
        });
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText)
        .then(() => {
          toast({
            title: "Copied to Clipboard",
            description: "The card content has been copied to your clipboard!",
          });
        })
        .catch(() => {
          toast({
            title: "Copy Failed",
            description: "Could not copy to clipboard.",
            variant: "destructive",
          });
        });
    }
  };

  const generateInsight = async () => {
    if (!currentCard) return;
    setInsightLoading(true);
    try {
      // If we already have insights, just show them
      if (generatedInsight.personalInsight && generatedInsight.careerInsight) {
        setShowInsights(true);
      } else {
        // Otherwise fetch them
        const arcanaName = currentCard.career && getArcanaName(currentCard);
        console.log('Generate Insight button clicked');
        console.log('Sending payload:', { career: currentCard.career, arcana: arcanaName });
        const insightRes = await fetch('http://localhost:3001/api/generate-insight', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': 'http://localhost:3000'
          },
          credentials: 'include',
          body: JSON.stringify({ career: currentCard.career, arcana: arcanaName }),
        });
        if (!insightRes.ok) {
          throw new Error(`HTTP error! status: ${insightRes.status}`);
        }
        const insightData = await insightRes.json();
        setGeneratedInsight({
          personalInsight: insightData.personalInsight,
          careerInsight: insightData.careerInsight
        });
        setShowInsights(true);
      }
    } catch (e) {
      setGeneratedInsight({ personalInsight: null, careerInsight: null });
      console.error('Error generating insight:', e);
    } finally {
      setInsightLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystical-900 via-mystical-800 to-mystical-700 text-white relative">
      {/* Stars Background Effect */}
      <div className="stars absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-4 py-8 flex flex-col min-h-screen">
        {/* Header */}
        <header className="text-center py-6 md:py-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-1 text-golden-300 animate-fade-in-down">Via Fata</h1>
          <div className="mb-2">
            <span className="block italic text-golden-200 text-lg md:text-xl animate-fade-in-down-delay-1" style={{ fontSize: '1.1rem' }}>The Path of Fate</span>
          </div>
          <div className="mt-8 mb-4">
            <p className="text-mystical-200 text-lg md:text-xl max-w-xl mx-auto animate-fade-in-down-delay-2">
              Draw a card to receive career wisdom from industry professionals
            </p>
          </div>
          <div className="text-sm text-mystical-300 mt-2 animate-fade-in-down-delay-3">
            <span>By <a href="#" className="underline hover:text-golden-300 transition-colors">Your Future Is Our Business</a></span>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center relative">
          <div id="tarot-container" className="flex flex-col items-center justify-center w-full">
            {viewMode === 'card' && (
              <>
                {isLoading ? (
                  <div className="w-full h-[500px] flex items-center justify-center">
                    <div className="w-64 h-96 bg-mystical-800/50 rounded-xl border-2 border-golden-400/50 animate-pulse"></div>
                  </div>
                ) : (
                  <>
                    {!currentCard ? (
                      <div className="text-center mb-8">
                        <p className="text-xl text-mystical-200 mb-6 animate-fade-in-down-delay-4">Your next career insight awaits...</p>
                        <div className="animate-fade-in-down-delay-6">
                          <CardDeck />
                        </div>
                      </div>
                    ) : (
                      <div className="w-full perspective mb-8 relative flex flex-col items-center">
                        <div className="relative flex justify-center items-center w-full" style={{ minHeight: '500px' }}>
                          {/* Desktop insights - absolutely positioned */}
                          {showInsights && generatedInsight.personalInsight && (
                            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[calc(50%-250px)] px-8 animate-fade-in-down text-golden-200 text-base text-right font-playfair" style={{ 
                              pointerEvents: 'none',
                              marginLeft: '2rem',
                              maxWidth: 'calc(50vw - 250px)'
                            }}>
                              <div className="mb-4 text-golden-300 text-xl font-bold tracking-wider flex items-center justify-end gap-2">
                                <span className="text-2xl">✧</span>
                                <span>Mystical Insight</span>
                              </div>
                              <div className="italic whitespace-pre-line text-lg leading-relaxed" style={{
                                background: 'linear-gradient(to right, transparent, rgba(107, 70, 193, 0.12) 80%, transparent)',
                                padding: '1rem',
                                borderRadius: '0.5rem'
                              }}>{generatedInsight.personalInsight.replace(/^Title:|^Insight:/g, '').trim()}</div>
                            </div>
                          )}
                          <div className="flex-shrink-0 w-[350px] md:w-[400px] flex flex-col items-center z-10">
                            <CareerCard
                              careerInsight={currentCard}
                              isFlipped={isFlipped}
                            />
                          </div>
                          {showInsights && generatedInsight.careerInsight && (
                            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[calc(50%-250px)] px-8 animate-fade-in-down text-golden-200 text-base text-left font-playfair" style={{ 
                              pointerEvents: 'none',
                              marginRight: '2rem',
                              maxWidth: 'calc(50vw - 250px)'
                            }}>
                              <div className="mb-4 text-golden-300 text-xl font-bold tracking-wider flex items-center gap-2">
                                <span>Career Insight</span>
                                <span className="text-2xl">✧</span>
                              </div>
                              <div className="italic whitespace-pre-line text-lg leading-relaxed" style={{
                                background: 'linear-gradient(to left, transparent, rgba(107, 70, 193, 0.12) 80%, transparent)',
                                padding: '1rem',
                                borderRadius: '0.5rem'
                              }}>{generatedInsight.careerInsight.replace(/^Title:|^Insight:/g, '').trim()}</div>
                            </div>
                          )}
                        </div>
                        {/* Mobile view - insights below card */}
                        {showInsights && (generatedInsight.personalInsight || generatedInsight.careerInsight) && (
                          <div className="md:hidden flex flex-col gap-4 w-full mt-6">
                            {generatedInsight.personalInsight && (
                              <div className="px-4 py-3 animate-fade-in-down text-golden-200 text-base text-center font-playfair">
                                <div className="mb-2 text-golden-300 text-lg font-bold tracking-wider">Mystical Insight</div>
                                <div className="italic whitespace-pre-line">{generatedInsight.personalInsight}</div>
                              </div>
                            )}
                            {generatedInsight.careerInsight && (
                              <div className="px-4 py-3 animate-fade-in-down text-golden-200 text-base text-center font-playfair">
                                <div className="mb-2 text-golden-300 text-lg font-bold tracking-wider">Career Insight</div>
                                <div className="italic whitespace-pre-line">{generatedInsight.careerInsight}</div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
                {/* Card Drawing Actions */}
                <div className="mt-8 flex flex-col items-center">
                  {!isLoading && !currentCard ? (
                    <Button
                      onClick={drawCard}
                      disabled={isDrawing}
                      variant="ghost"
                      className={cn(
                        "text-golden-300 hover:text-golden-400",
                        "font-medium py-6 px-8 rounded-full",
                        "transition-all duration-300 transform hover:scale-105 h-auto text-base",
                        "animate-fade-in-down-delay-8"
                      )}
                    >
                      <span className="mr-2 text-lg">✨</span>
                      Draw a Card
                    </Button>
                  ) : !isLoading && currentCard ? (
                    <div className="flex flex-col items-center mt-2">
                      <div className="flex flex-row gap-4 items-center mb-4">
                        <Button
                          onClick={generateInsight}
                          disabled={insightLoading}
                          className="border-2 border-golden-400 bg-mystical-800/80 text-golden-300 font-bold px-8 py-3 rounded-lg shadow-sm hover:bg-golden-400 hover:text-mystical-900 transition-all duration-300"
                        >
                          {insightLoading ? 'Generating...' : 'Generate Insight'}
                        </Button>
                        <Button
                          onClick={() => setViewMode('path')}
                          variant="outline"
                          className="border-2 border-golden-400 bg-mystical-800/80 text-golden-300 font-bold px-8 py-3 rounded-lg shadow-sm hover:bg-golden-400 hover:text-mystical-900 transition-all duration-300"
                        >
                          Show Career Path
                        </Button>
                      </div>
                      <Button
                        onClick={resetCard}
                        variant="ghost"
                        className="text-mystical-300 hover:text-golden-300 transition-colors"
                      >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Draw Another Card
                      </Button>
                    </div>
                  ) : null}
                </div>
              </>
            )}
            {/* Career Path Display (in place of card) */}
            {viewMode === 'path' && currentCard && (
              <div className="w-full flex flex-col items-center mt-8">
                <Button
                  onClick={() => setViewMode('card')}
                  className="mb-8 bg-golden-400 text-mystical-900 font-bold px-6 py-2 rounded-lg shadow hover:bg-golden-300 transition animate-fade-in-down-delay-4"
                >
                  ← Back to Card
                </Button>
                <h1 className="text-3xl font-playfair font-bold text-golden-300 mb-6 text-center animate-fade-in-down-delay-5">Career Path: {currentCard.career}</h1>
                <CareerPath career={currentCard.career} />
              </div>
            )}
          </div>
        </main>
        
        {/* Footer */}
        <footer className="py-4 text-center text-mystical-400 text-sm animate-fade-in-down-delay-9">
          <p>A project by <a href="#" className="underline hover:text-golden-300 transition-colors">Your Future Is Our Business</a> | What-To-Be Podcast</p>
        </footer>
      </div>
    </div>
  );
}
