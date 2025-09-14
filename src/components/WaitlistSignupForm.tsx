import React, { useState, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import HCaptcha from '@hcaptcha/react-hcaptcha';

interface WaitlistSignupData {
  email: string;
  fullName: string;
  role: string;
  experienceYears: string;
  clientBaseSize: string;
  biggestChallenge: string;
  phoneNumber?: string;
}

interface WaitlistSignupFormProps {
  onSuccess?: () => void;
  className?: string;
}

export const WaitlistSignupForm: React.FC<WaitlistSignupFormProps> = ({
  onSuccess,
  className = ''
}) => {
  const [formData, setFormData] = useState<WaitlistSignupData>({
    email: '',
    fullName: '',
    role: '',
    experienceYears: '',
    clientBaseSize: '',
    biggestChallenge: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string>('');
  const captchaRef = useRef<HCaptcha>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.email || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.fullName || formData.fullName.length < 2) {
      setErrorMessage('Please enter your full name');
      return false;
    }
    if (!formData.role || !formData.experienceYears || !formData.clientBaseSize || !formData.biggestChallenge) {
      setErrorMessage('Please fill in all required fields');
      return false;
    }
    return true;
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  if (!captchaToken) {
    setErrorMessage('Please complete the captcha verification.');
    setSubmitStatus('error');
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus('idle');
  setErrorMessage('');

  try {
    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/waitlist-intake`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          token: captchaToken,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit');
    }

    // ✅ Treat any of these as success, per server contract
    if (['ok', 'created', 'duplicate'].includes(result.status)) {
      setSubmitStatus('success');
      // Optional: if you want a custom success message from server
      if (result.message) {
        // reuse errorMessage area as info area or add a successMessage state if you prefer
        setErrorMessage(result.message);
      }
      onSuccess?.();
    } else {
      // Unexpected shape but 200 OK — still treat as success fallback
      setSubmitStatus('success');
      onSuccess?.();
    }
  } catch (error: any) {
    console.error('Waitlist signup error:', error);
    setErrorMessage(error.message || 'An unexpected error occurred. Please try again.');
    setSubmitStatus('error');
  } finally {
    // Reset captcha after any result so the user can retry if needed
    captchaRef.current?.resetCaptcha();
    setCaptchaToken('');
    setIsSubmitting(false);
  }
};

  if (submitStatus === 'success') {
    return (
      <div className={`text-center ${className}`}>
        <div className="bg-[rgba(34,197,94,0.10)] border border-[rgba(34,197,94,0.20)] rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-400 mb-2">
            Welcome to the Optimised Trainer Waitlist!
          </h3>
          <p className="text-gray-300">
            We'll be in touch soon with early access details and exclusive updates.
          </p>
        </div>
      </div>
    );
  }

  const inputClassName = "w-full h-12 px-4 py-3 text-sm rounded-md bg-[rgba(255,255,255,0.10)] border border-[rgba(255,255,255,0.20)] text-white placeholder-[rgba(255,255,255,0.60)] bg-transparent outline-none transition-all duration-200 hover:bg-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.30)] focus:ring-2 focus:ring-ring focus:ring-offset-1";
  const selectClassName = "w-full h-12 px-4 py-3 text-sm rounded-md bg-[rgba(255,255,255,0.10)] border border-[rgba(255,255,255,0.20)] text-white bg-transparent outline-none transition-all duration-200 hover:bg-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.30)] focus:ring-2 focus:ring-ring focus:ring-offset-1";

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your@email.com"
            className={inputClassName}
            required
          />
        </div>

        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-200 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Your full name"
            className={inputClassName}
            required
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-200 mb-2">
            Current Role *
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className={selectClassName}
            required
          >
            <option value="" disabled>Select your role</option>
            <option value="Personal Trainer">Personal Trainer</option>
            <option value="Gym Owner">Gym Owner</option>
            <option value="Fitness Coach">Fitness Coach</option>
            <option value="Studio Owner">Studio Owner</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="experienceYears" className="block text-sm font-medium text-gray-200 mb-2">
            Years of Experience *
          </label>
          <select
            id="experienceYears"
            name="experienceYears"
            value={formData.experienceYears}
            onChange={handleInputChange}
            className={selectClassName}
            required
          >
            <option value="" disabled>Select experience</option>
            <option value="Less than 1 year">Less than 1 year</option>
            <option value="1-3 years">1-3 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="5-10 years">5-10 years</option>
            <option value="10+ years">10+ years</option>
          </select>
        </div>

        <div>
          <label htmlFor="clientBaseSize" className="block text-sm font-medium text-gray-200 mb-2">
            Current Client Base *
          </label>
          <select
            id="clientBaseSize"
            name="clientBaseSize"
            value={formData.clientBaseSize}
            onChange={handleInputChange}
            className={selectClassName}
            required
          >
            <option value="" disabled>Select client base size</option>
            <option value="1-10 clients">1-10 clients</option>
            <option value="11-25 clients">11-25 clients</option>
            <option value="26-50 clients">26-50 clients</option>
            <option value="50+ clients">50+ clients</option>
          </select>
        </div>

        <div>
          <label htmlFor="biggestChallenge" className="block text-sm font-medium text-gray-200 mb-2">
            Biggest Challenge *
          </label>
          <select
            id="biggestChallenge"
            name="biggestChallenge"
            value={formData.biggestChallenge}
            onChange={handleInputChange}
            className={selectClassName}
            required
          >
            <option value="" disabled>Select your biggest challenge</option>
            <option value="Client Management">Client Management</option>
            <option value="Scheduling">Scheduling</option>
            <option value="Payment Processing">Payment Processing</option>
            <option value="Program Design">Program Design</option>
            <option value="Business Growth">Business Growth</option>
            <option value="Marketing">Marketing</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-200 mb-2">
          Phone Number (Optional)
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Your phone number"
          className={inputClassName}
        />
      </div>

      {/* hCaptcha Widget */}
      <div className="flex justify-center">
        <HCaptcha
          ref={captchaRef}
          sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY} // Replace with your actual hCaptcha site key
          onVerify={setCaptchaToken}
          onError={() => {
            setErrorMessage('Captcha verification failed. Please try again.');
            setSubmitStatus('error');
          }}
          onExpire={() => {
            setCaptchaToken('');
          }}
        />
      </div>

      {errorMessage && (
        <div className="text-red-400 text-sm bg-[rgba(239,68,68,0.10)] border border-[rgba(239,68,68,0.20)] rounded-md p-3">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !captchaToken}
        className="w-full flex h-12 justify-center items-center relative cursor-pointer bg-blue-600 hover:bg-blue-700 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-md border-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 active:transition-transform"
      >
        <span className="text-white text-center text-sm font-medium leading-5">
          {isSubmitting ? 'Joining Waitlist...' : 'Join the Beta Waitlist'}
        </span>
      </button>

      <p className="text-xs text-gray-400 text-center">
        No spam, just updates on our progress and early access notifications.
      </p>
    </form>
  );
};