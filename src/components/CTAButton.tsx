import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface AuditFormData {
  email: string;
  companyName: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  className = "",
  onClick 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<AuditFormData>();

  const onSubmit = async (data: AuditFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success(`Application submitted successfully for ${data.companyName}!`, {
        description: "We'll contact you within 24 hours to schedule your free audit."
      });
      
      reset();
      
      if (onClick) {
        onClick();
      }
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClick = () => {
    // Create a simple modal-like experience using browser prompt for demo
    const email = prompt("Enter your email address:");
    if (!email) return;
    
    const companyName = prompt("Enter your company name:");
    if (!companyName) return;
    
    onSubmit({ email, companyName });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isSubmitting}
      className={`
        flex h-11 justify-center items-center gap-[5.934px] self-stretch 
        shadow-[2.967px_-3.56px_0_0_#000] cursor-pointer bg-[#F85A1F] 
        p-[5.934px] rounded-[5.934px] border-[1.187px] border-solid border-black
        hover:bg-[#E54A0F] hover:shadow-[1.5px_-2px_0_0_#000] 
        active:shadow-[1px_-1px_0_0_#000] active:translate-x-[1px] active:translate-y-[1px]
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-150 ease-in-out
        ${className}
      `}
      aria-label="Apply for free audit before Friday"
      type="button"
    >
      <span className="text-[#282828] text-xl font-normal max-md:text-lg max-sm:text-base">
        {isSubmitting ? "Submitting..." : children}
      </span>
    </button>
  );
};
