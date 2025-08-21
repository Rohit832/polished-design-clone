import React from 'react';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { toast } from 'sonner';

const Index = () => {
  const handleCTAClick = () => {
    toast.info("Redirecting to application form...", {
      description: "You'll be taken to our secure application portal."
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <main className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Limited Time Opportunity
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join successful founders who have transformed their businesses with our expert guidance. 
            Only 2 spots remaining for this month's exclusive founder program.
          </p>
        </div>
        
        <CallToActionBanner 
          onButtonClick={handleCTAClick}
        />
        
        <div className="mt-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-800 mb-2">Growth Strategy</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive business audit and growth roadmap tailored to your company's needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-semibold text-gray-800 mb-2">Expert Guidance</h3>
              <p className="text-gray-600 text-sm">
                One-on-one mentorship from industry veterans who've scaled multiple successful ventures.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold text-gray-800 mb-2">Proven Results</h3>
              <p className="text-gray-600 text-sm">
                Our founders have achieved an average of 300% revenue growth within 12 months.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>
              ⏰ <strong>Deadline:</strong> Applications close this Friday at midnight
            </p>
            <p className="mt-1">
              🔒 <strong>Commitment:</strong> Limited to serious founders ready to scale
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
