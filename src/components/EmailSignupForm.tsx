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
      className={`flex items-start gap-3 max-sm:flex-col max-sm:gap-3 ${className}`}
    >
      <div className={`h-11 flex-[1_0_0] border relative rounded-md border-solid max-sm:w-full transition-all duration-200 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-1 ${
        isDark 
          ? 'bg-[rgba(255,255,255,0.10)] border-[rgba(255,255,255,0.20)] hover:bg-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.30)]' 
          : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
      }`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={`w-full h-full px-4 py-2 text-sm rounded-md bg-transparent border-none outline-none transition-colors ${
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
        className="flex h-11 min-h-11 justify-center items-center relative cursor-pointer bg-blue-600 hover:bg-blue-700 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed px-6 py-2 rounded-md border-none max-sm:w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 active:transition-transform"
      >
        <span className="text-white text-center text-sm font-medium leading-5">
          {isSubmitting ? 'Joining...' : buttonText}
        </span>
      </button>
    </form>
  );
};
