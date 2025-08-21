import React from 'react';
import { CTAButton } from './CTAButton';

interface CTAContentProps {
  title: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const CTAContent: React.FC<CTAContentProps> = ({ 
  title, 
  buttonText, 
  onButtonClick 
}) => {
  return (
    <div className="flex w-[368px] flex-col items-start gap-[17px] relative max-md:w-full">
      <header className="h-20 self-stretch text-black text-[35px] font-normal relative">
        <h1 className="font-normal text-[35px] text-black max-md:text-[28px] max-sm:text-2xl max-sm:leading-[1.2] leading-tight">
          {title}
        </h1>
      </header>
      
      <CTAButton 
        onClick={onButtonClick}
        className="w-full"
      >
        {buttonText}
      </CTAButton>
    </div>
  );
};
