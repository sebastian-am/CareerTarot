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

export default function Home() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState<CareerInsight | null>(null);
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
    setTimeout(() => {
      setCurrentCard(null);
    }, 800);
  };

  const shareCard = () => {
    if (!currentCard) return;
    
    // Handle both camelCase and snake_case property names
    const initialCode = currentCard.initialCode || currentCard.initial_code;
    const quote = currentCard.quote;
    const intervieweeName = currentCard.intervieweeName || currentCard.interviewee_name;
    
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystical-900 via-mystical-800 to-mystical-700 text-white relative">
      {/* Stars Background Effect */}
      <div className="stars absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-4 py-8 flex flex-col min-h-screen">
        {/* Header */}
        <header className="text-center py-6 md:py-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-2 text-golden-300">Career Tarot</h1>
          <p className="text-mystical-200 text-lg md:text-xl max-w-xl mx-auto">
            Draw a card to receive career wisdom from industry professionals
          </p>
          <div className="text-sm text-mystical-300 mt-2">
            <span>By <a href="#" className="underline hover:text-golden-300 transition-colors">Your Future Is Our Business</a></span>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center relative">
          <div id="tarot-container" className="flex flex-col items-center justify-center w-full max-w-md">
            {isLoading ? (
              <div className="w-64 h-96 bg-mystical-800/50 rounded-xl border-2 border-golden-400/50 animate-pulse flex items-center justify-center">
                <span className="text-mystical-200">Loading...</span>
              </div>
            ) : (
              <>
                {!currentCard ? (
                  <div className="text-center mb-8 animate-fade-in">
                    <p className="text-xl text-mystical-200 mb-6">Your next career insight awaits...</p>
                    <CardDeck />
                  </div>
                ) : (
                  <div className="w-full perspective mb-8">
                    <CareerCard
                      careerInsight={currentCard}
                      isFlipped={isFlipped}
                    />
                  </div>
                )}
              </>
            )}
            
            {/* Card Drawing Actions */}
            <div className="mt-8 flex flex-col items-center">
              {!currentCard ? (
                <Button
                  onClick={drawCard}
                  disabled={isDrawing || isLoading}
                  className={cn(
                    "bg-gradient-to-r from-golden-500 to-golden-600 hover:from-golden-600 hover:to-golden-700",
                    "text-mystical-900 font-medium py-6 px-8 rounded-full shadow-lg",
                    "transition-all duration-300 transform hover:scale-105 h-auto text-base"
                  )}
                >
                  <span className="mr-2 text-lg">✨</span>
                  Draw a Card
                </Button>
              ) : (
                <div className="flex flex-col items-center">
                  <Button
                    onClick={resetCard}
                    variant="ghost"
                    className="text-mystical-300 hover:text-golden-300 transition-colors"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Draw Another Card
                  </Button>
                  
                  <div className="mt-6">
                    <p className="text-sm text-mystical-300 mb-2">Share this wisdom:</p>
                    <Button 
                      onClick={shareCard}
                      variant="outline" 
                      className="border-mystical-300 text-mystical-300 hover:bg-mystical-700"
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="py-4 text-center text-mystical-400 text-sm">
          <p>A project by <a href="#" className="underline hover:text-golden-300 transition-colors">Your Future Is Our Business</a> | What-To-Be Podcast</p>
        </footer>
      </div>
    </div>
  );
}
