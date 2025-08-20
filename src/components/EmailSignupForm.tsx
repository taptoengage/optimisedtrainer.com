import React, { useState } from 'react';

interface EmailSignupFormProps {
  variant?: 'light' | 'dark';
  buttonText?: string;
  placeholder?: string;
  className?: string;
}

export const EmailSignupForm: React.FC<EmailSignupFormProps> = ({
  variant = 'light',
  buttonText = 'Join Beta',
  placeholder = 'Enter your email',
  className = ''
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Email submitted:', email);
    setEmail('');
    setIsSubmitting(false);
  };

  const isDark = variant === 'dark';

  return (
    <form 
      onSubmit={handleSubmit}
      className={`flex items-start gap-[10.5px] max-sm:flex-col max-sm:gap-3 ${className}`}
    >
      <div className={`h-[31.5px] flex-[1_0_0] border relative rounded-md border-solid max-sm:w-full ${
        isDark 
          ? 'bg-[rgba(255,255,255,0.10)] border-[rgba(255,255,255,0.20)]' 
          : 'bg-white border-slate-200'
      }`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={`w-full h-full px-3 py-2 text-xs rounded-md bg-transparent border-none outline-none ${
            isDark 
              ? 'text-white placeholder-[rgba(255,255,255,0.60)]' 
              : 'text-gray-900 placeholder-gray-500'
          }`}
          required
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex h-[31.5px] justify-center items-center relative cursor-pointer bg-blue-600 hover:bg-blue-700 disabled:opacity-50 pt-1.5 pb-[7.5px] px-3.5 rounded-md border-none max-sm:w-full transition-colors"
      >
        <span className="text-white text-center text-xs font-normal leading-[17.5px]">
          {isSubmitting ? 'Joining...' : buttonText}
        </span>
      </button>
    </form>
  );
};
