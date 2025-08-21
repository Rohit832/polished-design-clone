import React from 'react';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { toast } from 'sonner';
const Index = () => {
  const handleCTAClick = () => {
    toast.info("Redirecting to application form...", {
      description: "You'll be taken to our secure application portal."
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <main className="w-full max-w-6xl mx-auto">
        
        
        <CallToActionBanner onButtonClick={handleCTAClick} />
        
        
      </main>
    </div>;
};
export default Index;