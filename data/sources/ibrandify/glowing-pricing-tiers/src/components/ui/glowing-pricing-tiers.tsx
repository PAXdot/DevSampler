"use client";

import React, { useState } from "react";

// Raw SVG Icon for Checkmark
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number | string;
  yearlyPrice: number | string;
  features: string[];
  isPopular?: boolean;
}

export interface PricingProps {
  plans?: PricingPlan[];
}

const defaultPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "For individuals and small side projects.",
    monthlyPrice: 15,
    yearlyPrice: 12,
    features: ["1 Project", "Basic analytics", "Community support"],
  },
  {
    id: "pro",
    name: "Pro",
    description: "For professional creators and small teams.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: ["Unlimited projects", "Advanced analytics", "24/7 priority support", "Custom domains"],
    isPopular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations with complex needs.",
    monthlyPrice: 199,
    yearlyPrice: 149,
    features: ["Everything in Pro", "Dedicated account manager", "SSO & Advanced Security", "Custom SLAs"],
  }
];

export default function Component({ plans = defaultPlans }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 font-sans">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes border-spin {
          100% { transform: rotate(360deg); }
        }
      `}} />

      {/* Header & Toggle */}
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-8">
          Simple, transparent pricing
        </h2>
        
        {/* Toggle Background */}
        <div className="relative flex items-center p-1.5 bg-muted rounded-full border border-border">
          <button
            onClick={() => setIsYearly(false)}
            className={`relative w-32 py-2.5 text-sm font-bold rounded-full z-10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${!isYearly ? 'text-background' : 'text-muted-foreground'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`relative w-32 py-2.5 text-sm font-bold rounded-full z-10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${isYearly ? 'text-background' : 'text-muted-foreground'}`}
          >
            Yearly
          </button>
          
          {/* Animated Toggle Slider */}
          <div 
            className="absolute top-1.5 bottom-1.5 w-32 bg-foreground rounded-full transition-transform duration-300 ease-in-out z-0 shadow-sm"
            style={{ transform: isYearly ? 'translateX(100%)' : 'translateX(0)' }}
          />
        </div>

        {/* Savings Badge */}
        <div className="mt-6 text-sm font-bold bg-muted text-muted-foreground px-4 py-1.5 rounded-full border border-border shadow-sm">
          Save 20% with yearly
        </div>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.id} className="relative h-full">
            {plan.isPopular ? (
              // Popular Card with Fast Glowing Hover Animation
              <div className="group relative h-full rounded-[2.5rem] p-[3px] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(204,35,102,0.5)] hover:-translate-y-2">
                
                {/* Solid Pink/Purple Border (Default) */}
                <div className="absolute inset-0 bg-[#bc1888] transition-opacity duration-500 group-hover:opacity-0" />
                
                {/* Fast Instagram Gradient Spinning Layer (Hover) */}
                <div className="absolute inset-[-1000%] animate-[border-spin_1.5s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_90deg_at_50%_50%,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)]" />
                
                {/* Card Content Layer */}
                <div className="relative flex flex-col h-full bg-background rounded-[2.3rem] p-6 lg:p-8">
                  <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                    <span className="bg-foreground text-background text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                      Most Popular
                    </span>
                  </div>
                  <PlanContent plan={plan} isYearly={isYearly} />
                </div>
              </div>
            ) : (
              // Standard Card
              <div className="flex flex-col h-full bg-background rounded-[2.5rem] p-6 lg:p-8 border border-border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <PlanContent plan={plan} isYearly={isYearly} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function PlanContent({ plan, isYearly }: { plan: PricingPlan, isYearly: boolean }) {
  return (
    <>
      <div className="mb-6 mt-2">
        <h3 className="text-2xl font-extrabold text-foreground mb-2">{plan.name}</h3>
        <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
      </div>
      
      <div className="mb-8 flex items-baseline gap-1">
        <span className="text-4xl xl:text-5xl font-black tracking-tighter text-foreground">
          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
        </span>
        <span className="text-muted-foreground font-semibold text-lg">/mo</span>
      </div>

      <button className={`w-full py-4 rounded-2xl font-bold mb-8 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${plan.isPopular ? 'bg-primary text-primary-foreground shadow-lg hover:opacity-90' : 'bg-transparent text-foreground border-2 border-border hover:border-foreground'}`}>
        Get Started
      </button>

      <div className="flex-1">
        <p className="text-xs font-black text-muted-foreground mb-6 uppercase tracking-widest">What's included</p>
        <ul className="space-y-4">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground/90 text-sm font-semibold">
              <div className="mt-0.5 shrink-0 text-foreground">
                <CheckIcon />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
