import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, ChevronUp, ChevronDown } from 'lucide-react';

interface ROICalculatorProps {
  className?: string;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({ className = '' }) => {
  const [adminHours, setAdminHours] = useState(10);
  const [sessionRate, setSessionRate] = useState(75);

  const calculations = useMemo(() => {
    const subscriptionCost = 60; // $60/month
    const timeSavedPercentage = 0.70; // 70% time savings
    const weeksPerMonth = 4.33;

    const hoursSavedPerWeek = adminHours * timeSavedPercentage;
    const potentialWeeklyRevenue = hoursSavedPerWeek * sessionRate;
    const weeklySubscriptionCost = subscriptionCost / weeksPerMonth;
    const netWeeklyGain = potentialWeeklyRevenue - weeklySubscriptionCost;
    const netMonthlyGain = netWeeklyGain * weeksPerMonth;
    const netYearlyGain = netMonthlyGain * 12;

    return {
      hoursSavedPerWeek: Math.round(hoursSavedPerWeek * 10) / 10,
      potentialWeeklyRevenue: Math.round(potentialWeeklyRevenue),
      netWeeklyGain: Math.round(netWeeklyGain),
      netMonthlyGain: Math.round(netMonthlyGain),
      netYearlyGain: Math.round(netYearlyGain),
    };
  }, [adminHours, sessionRate]);

  const handleAdminHoursChange = (value: number) => {
    setAdminHours(Math.max(1, Math.min(40, value)));
  };

  const handleSessionRateChange = (value: number) => {
    setSessionRate(Math.max(25, Math.min(300, value)));
  };

  return (
    <section className={`bg-[#111] py-14 sm:py-16 ${className}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Calculate Your Potential Weekly Savings
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how much time and money you could save by automating your admin tasks
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Your Current Situation
              </h3>
              
              <div className="space-y-6">
                {/* Admin Hours Input */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Hours on Admin Per Week
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={adminHours}
                      onChange={(e) => handleAdminHoursChange(Number(e.target.value))}
                      className="w-full h-16 px-6 text-2xl font-semibold text-gray-800 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-center"
                      min="1"
                      max="40"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col">
                      <button
                        type="button"
                        onClick={() => handleAdminHoursChange(adminHours + 1)}
                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                      >
                        <ChevronUp className="w-4 h-4 text-gray-600" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAdminHoursChange(adminHours - 1)}
                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                      >
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Session Rate Input */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Your Hourly Session Rate
                  </label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-semibold text-gray-800">
                      $
                    </span>
                    <input
                      type="number"
                      value={sessionRate}
                      onChange={(e) => handleSessionRateChange(Number(e.target.value))}
                      className="w-full h-16 pl-12 pr-16 text-2xl font-semibold text-gray-800 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-center"
                      min="25"
                      max="300"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col">
                      <button
                        type="button"
                        onClick={() => handleSessionRateChange(sessionRate + 5)}
                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                      >
                        <ChevronUp className="w-4 h-4 text-gray-600" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSessionRateChange(sessionRate - 5)}
                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                      >
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8">
              <div className="text-center mb-6">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-800 mb-2">
                  Your Weekly Savings
                </h3>
              </div>

              {/* Main Result */}
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-blue-600 mb-2">
                  ${calculations.netWeeklyGain > 0 ? calculations.netWeeklyGain : 0}
                </div>
                <div className="text-xl text-blue-700 font-medium">
                  Net weekly earnings gain
                </div>
                <div className="text-lg text-blue-600 mt-2">
                  That's ${calculations.netMonthlyGain > 0 ? calculations.netMonthlyGain : 0} more per month!
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-4 border-t border-blue-200 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-blue-700 font-medium">Hours saved per week:</span>
                  <span className="text-2xl font-bold text-blue-600">{calculations.hoursSavedPerWeek}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-700 font-medium">Potential weekly revenue:</span>
                  <span className="text-2xl font-bold text-blue-600">${calculations.potentialWeeklyRevenue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-700 font-medium">Extra yearly revenue:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ${calculations.netYearlyGain > 0 ? calculations.netYearlyGain.toLocaleString() : 0}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              *Based on time saved through automated scheduling, payment tracking, and client management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};