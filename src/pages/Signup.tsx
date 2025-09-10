import React from 'react';
import { Link } from 'react-router-dom';
import { WaitlistSignupForm } from '@/components/WaitlistSignupForm';
import { ROICalculator } from '@/components/ROICalculator';
import { ArrowLeft, CheckCircle, Users, Zap, TrendingUp, Calendar } from 'lucide-react';

export default function Signup() {
  return (
    <main className="min-h-screen bg-[#111] text-white">
      {/* Header Section */}
      <section className="w-full bg-[#111] py-8 border-b border-white/10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </Link>
            <div className="text-lg font-semibold">Optimised Trainer</div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full bg-[#111] py-14 sm:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Join the Optimised Trainer{' '}
              <span className="text-blue-400">Revolution</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              Be among the first personal trainers to experience the platform that's 
              transforming how fitness professionals manage and scale their business.
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-400">
              <CheckCircle className="w-5 h-5" />
              <span className="text-lg font-medium">Early Access • Beta Program • Free Trial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive Section */}
      <section className="w-full bg-gray-900 py-14 sm:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to Scale Your Training Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From client onboarding to revenue optimization, we've built the complete toolkit 
              for modern personal trainers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <Users className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Client Management</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Streamlined onboarding, progress tracking, communication hub, and automated check-ins 
                that keep your clients engaged and progressing.
              </p>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <Zap className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Workout Programming</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                AI-powered exercise selection, intelligent progression tracking, and customizable 
                templates that adapt to each client's goals and capabilities.
              </p>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <TrendingUp className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Business Analytics</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Real-time revenue tracking, client retention metrics, growth insights, and 
                predictive analytics to optimize your business performance.
              </p>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <Calendar className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart Scheduling</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Automated calendar management, availability optimization, cancellation handling, 
                and seamless booking experience for you and your clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section - Replaces the old Cost Benefits Section */}
      <ROICalculator />

      {/* Origin Story Section */}
      <section className="w-full bg-gray-900 py-14 sm:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Built by Trainers, for Trainers
              </h2>
              <p className="text-xl text-gray-300">
                The story behind why we created Optimised Trainer
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">The Problem We Saw</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    As personal trainers ourselves, we lived the daily struggle of managing clients 
                    across multiple spreadsheets, apps, and paper forms. We watched talented trainers 
                    burn out not from training, but from administrative overwhelm.
                  </p>
                  <p>
                    We saw trainers spending hours each day on tasks that should take minutes. 
                    We witnessed the frustration of losing clients due to poor communication systems 
                    and the inability to scale beyond 1-on-1 sessions.
                  </p>
                  <p>
                    Most importantly, we realized that the fitness industry was stuck in the past 
                    while every other service industry had embraced technology to improve both 
                    business efficiency and customer experience.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Our Vision</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We envisioned a world where personal trainers could focus entirely on what 
                    they do best—transforming lives through fitness—while technology handled 
                    everything else seamlessly in the background.
                  </p>
                  <p>
                    Optimised Trainer isn't just another piece of gym software. It's a complete 
                    ecosystem designed to elevate the entire personal training profession, giving 
                    trainers the tools they need to build sustainable, scalable businesses.
                  </p>
                  <p>
                    Our mission is simple: empower 10,000 personal trainers to double their revenue 
                    while working fewer hours, creating better outcomes for both trainers and their clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Signup Form Section */}
      <section className="w-full bg-[#111] py-14 sm:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Join the Beta Program
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Get early access to Optimised Trainer and help shape the future of personal training technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-400">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  Free during beta
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  Priority support
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  Lifetime discount
                </span>
              </div>
            </div>

            <div className="bg-gray-900 border border-white/10 rounded-2xl p-8">
              <WaitlistSignupForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black py-8 border-t border-white/10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Optimised Trainer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}