'use client';

import React from 'react';
import { Target, Mail, ChartBar, Search, Database, Users, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MarqueeDemo } from "@/components/ui/marquee.demo";

function StylizedGraph() {
  return (
    <div className="relative w-full h-[100px] mt-4">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent" style={{ clipPath: 'path("M0,100 L0,40 Q25,35 50,60 Q75,85 100,20 L100,100")' }} />
      <div className="absolute inset-0" style={{ clipPath: 'path("M0,40 Q25,35 50,60 Q75,85 100,20")' }}>
        <div className="w-full h-full border-t border-emerald-500/50" />
      </div>
      <div className="absolute bottom-0 w-full border-b border-white/10" />
      <div className="absolute left-0 h-full border-l border-white/10" />
    </div>
  );
}

function AINetworkIllustration() {
  return (
    <div className="relative w-full h-[140px] mt-4">
      {/* Central AI Bot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
        <Bot className="w-8 h-8 text-emerald-500" />
      </div>
      
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* LinkedIn Connection */}
        <path d="M50,50 L20,20" className="stroke-emerald-500/50" strokeWidth="0.5" fill="none">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
        </path>
        {/* Email Connection */}
        <path d="M50,50 L80,20" className="stroke-emerald-500/50" strokeWidth="0.5" fill="none">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
        </path>
        {/* Calendar Connection */}
        <path d="M50,50 L80,80" className="stroke-emerald-500/50" strokeWidth="0.5" fill="none">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
        </path>
        {/* CRM Connection */}
        <path d="M50,50 L20,80" className="stroke-emerald-500/50" strokeWidth="0.5" fill="none">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
        </path>
      </svg>

      {/* Tool Icons */}
      <div className="absolute left-[20%] top-[20%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
        <svg className="w-5 h-5 text-neutral-200" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      </div>
      <div className="absolute left-[80%] top-[20%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
        <Mail className="w-5 h-5 text-neutral-200" />
      </div>
      <div className="absolute left-[80%] top-[80%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
        <svg className="w-5 h-5 text-neutral-200" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
        </svg>
      </div>
      <div className="absolute left-[20%] top-[80%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
        <svg className="w-5 h-5 text-neutral-200" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20 6H4V4h16v2m-4.31 8H8.31L6.8 9h10.4l-1.51 5M4 7h16v2H4V7m0 3h16v6H4v-6m0 7h16v2H4v-2Z" />
        </svg>
      </div>
    </div>
  );
}

function ICPAnalysisIllustration() {
  return (
    <div className="relative w-full h-[140px] mt-4">
      {/* Central Target Hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
        <Target className="w-8 h-8 text-emerald-500" />
      </div>

      {/* Concentric Circles */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <circle cx="50" cy="50" r="30" className="fill-none stroke-emerald-500/10" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="20" className="fill-none stroke-emerald-500/20" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="10" className="fill-none stroke-emerald-500/30" strokeWidth="0.5" />
        
        {/* Rotating Scan Line */}
        <line x1="50" y1="50" x2="80" y2="50" className="stroke-emerald-500/30" strokeWidth="0.5">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="4s"
            repeatCount="indefinite"
          />
        </line>
      </svg>

      {/* Data Points with Pulse Animation */}
      <div className="absolute left-[20%] top-[30%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 w-10 h-10 rounded-full bg-emerald-500/20 animate-ping" />
          <div className="relative w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-neutral-200" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute left-[80%] top-[30%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 w-10 h-10 rounded-full bg-emerald-500/20 animate-ping [animation-delay:0.5s]" />
          <div className="relative w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
            <Search className="w-5 h-5 text-neutral-200" />
          </div>
        </div>
      </div>

      <div className="absolute left-[80%] top-[70%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 w-10 h-10 rounded-full bg-emerald-500/20 animate-ping [animation-delay:1s]" />
          <div className="relative w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-neutral-200" />
          </div>
        </div>
      </div>

      <div className="absolute left-[20%] top-[70%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 w-10 h-10 rounded-full bg-emerald-500/20 animate-ping [animation-delay:1.5s]" />
          <div className="relative w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
            <Database className="w-5 h-5 text-neutral-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailDeliverabilityIllustration() {
  return (
    <div className="relative w-full h-[140px] mt-4">
      {/* Central Email Hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
        <Mail className="w-8 h-8 text-emerald-500" />
      </div>

      {/* Animated Success Paths */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Gmail Path */}
        <path d="M50,50 L20,50" className="stroke-emerald-500" strokeWidth="0.5" fill="none">
          <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="2s" repeatCount="indefinite" />
        </path>
        {/* Outlook Path */}
        <path d="M50,50 L80,50" className="stroke-emerald-500" strokeWidth="0.5" fill="none">
          <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="2s" repeatCount="indefinite" />
        </path>
      </svg>

      {/* Gmail */}
      <div className="absolute left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 w-10 h-10 rounded-full bg-emerald-500/20 animate-pulse" />
          <div className="relative w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-neutral-200" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/>
            </svg>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-emerald-500 whitespace-nowrap font-medium">100% Delivered</div>
        </div>
      </div>

      {/* Outlook */}
      <div className="absolute left-[80%] top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 w-10 h-10 rounded-full bg-emerald-500/20 animate-pulse [animation-delay:0.5s]" />
          <div className="relative w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-neutral-200" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.85 9.995L4.5 7.5v8.7l4.35-2.48v-3.725ZM19.5 6.205l-6.66 3.795l6.66 3.795v-7.59ZM9.75 10.555L19.5 15.5v-1.935l-5.325-3.01l5.325-3.045V5.575L9.75 10.555Z"/>
            </svg>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-emerald-500 whitespace-nowrap font-medium">Industry Leading Reply Rate</div>
        </div>
      </div>

      {/* Success Indicators */}
      <div className="absolute left-[35%] top-[35%] w-2 h-2 rounded-full bg-emerald-500 animate-ping [animation-delay:0.2s]" />
      <div className="absolute left-[65%] top-[65%] w-2 h-2 rounded-full bg-emerald-500 animate-ping [animation-delay:0.7s]" />
    </div>
  );
}

function Feature() {
  return (
    <div className="w-full bg-black">
      <div className="w-full py-12 lg:py-24 bg-black">
        <div className="container mx-auto">
          <div className="flex gap-3 flex-col items-start">
            <div>
              <Badge className="bg-black border border-white/10 text-neutral-200">Features</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-left">
                Why Leading B2B Companies Choose Us
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-neutral-400 text-left">
                Our AI-powered platform delivers consistent results with high-quality meetings and exceptional response rates.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-12 lg:py-24 bg-neutral-900/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-black/50 border border-white/10 rounded-md h-full lg:col-span-2 p-5 aspect-square lg:aspect-auto flex justify-between flex-col">
              <Target className="w-8 h-8 stroke-1 text-neutral-200" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-neutral-200">AI-Powered ICP Targeting</h3>
                <p className="text-neutral-400 max-w-xs text-base mt-2">
                  Our AI analyzes your best customers to build targeted lists of decision-makers that match your ideal customer profile with precision accuracy.
                </p>
                <ICPAnalysisIllustration />
              </div>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-md aspect-square p-5 flex justify-between flex-col">
              <Mail className="w-8 h-8 stroke-1 text-neutral-200" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-neutral-200">High-Deliverability Email</h3>
                <p className="text-neutral-400 max-w-xs text-base mt-2">
                  Industry-leading email deliverability with advanced warming and authentication for maximum inbox placement.
                </p>
                <EmailDeliverabilityIllustration />
              </div>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-md aspect-square p-5 flex justify-between flex-col">
              <Bot className="w-8 h-8 stroke-1 text-neutral-200" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-neutral-200">AI SDR Team</h3>
                <p className="text-neutral-400 max-w-xs text-base mt-2">
                  Automated personalization and follow-ups that sound human and consistently get high response rates.
                </p>
                <AINetworkIllustration />
              </div>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-md h-full lg:col-span-2 p-5 aspect-square lg:aspect-auto flex justify-between flex-col">
              <ChartBar className="w-8 h-8 stroke-1 text-neutral-200" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-neutral-200">Measurable Results</h3>
                <p className="text-neutral-400 max-w-xs text-base mt-2">
                  Track your campaign performance in real-time with detailed analytics on engagement, responses, and booked meetings.
                </p>
                <StylizedGraph />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-12 lg:py-24 bg-black">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-3">
              <Badge className="bg-black border border-white/10 text-neutral-200">Trusted By Industry Leaders</Badge>
              <p className="text-lg text-neutral-400 max-w-xl text-center">
                Join the growing list of companies using our AI SDRs to accelerate their sales pipeline
              </p>
            </div>
            <MarqueeDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature }; 