import React from 'react';
import { CTAContent } from './CTAContent';
import { ArrowIcon } from './ArrowIcon';

interface CallToActionBannerProps {
  title?: string;
  buttonText?: string;
  imageUrl?: string;
  imageAlt?: string;
  onButtonClick?: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  title = "2 Founder Slots Left This Month",
  buttonText = "Apply for free audit before Friday",
  imageUrl = "https://api.builder.io/api/v1/image/assets/TEMP/a3804a2e0e6a67ab4ac5e9319bba8e84f5030173?width=300",
  imageAlt = "Smiling emoji representing positive business outcomes",
  onButtonClick
}) => {
  return (
    <section 
      className="flex w-[947px] h-[214px] flex-col items-start gap-2.5 shrink-0 bg-[#FF7E3E] mx-auto my-0 px-52 py-8 rounded-[20px] max-md:w-full max-md:max-w-[947px] max-md:px-8 max-md:py-6 max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:p-4"
      role="banner"
      aria-labelledby="cta-title"
    >
      <div className="flex items-start gap-[11px] relative max-sm:flex-col max-sm:items-center max-sm:gap-4">
        <div className="flex-shrink-0">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-[150px] h-[150px] aspect-[1/1] relative object-cover rounded-lg"
            loading="lazy"
            width={150}
            height={150}
          />
        </div>
        
        <CTAContent 
          title={title}
          buttonText={buttonText}
          onButtonClick={onButtonClick}
        />
        
        <ArrowIcon className="right-12 top-12 max-sm:hidden" />
      </div>
    </section>
  );
};
