"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Target, Mail, CalendarCheck } from "lucide-react";

export function TimelineDemo() {
  const data = [
    {
      title: "Define & Target",
      content: (
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-full bg-neutral-800/50 border border-white/10 flex items-center justify-center mb-6">
            <Target className="w-6 h-6 text-emerald-500" />
          </div>
          <div className="space-y-2">
            <h4 className="text-neutral-200 text-lg font-medium">AI-Powered ICP Analysis</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Our AI analyzes your best customers and builds a targeted list of decision-makers that match your ICP. We&apos;ll find the right prospects at scale.
            </p>
          </div>
          <div className="pt-4">
            <ul className="space-y-2">
              <li className="flex items-center text-neutral-300 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                Customer data analysis
              </li>
              <li className="flex items-center text-neutral-300 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                Multi-source data enrichment
              </li>
              <li className="flex items-center text-neutral-300 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                Precision targeting filters
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Engage & Warm",
      content: (
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-full bg-neutral-800/50 border border-white/10 flex items-center justify-center mb-6">
            <Mail className="w-6 h-6 text-emerald-500" />
          </div>
          <div className="space-y-2">
            <h4 className="text-neutral-200 text-lg font-medium">High-Deliverability Outreach</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Using advanced email warming and authentication techniques, we ensure maximum deliverability. Our AI crafts personalized messages that resonate with each prospect's specific needs and pain points.
            </p>
          </div>
          <div className="pt-4">
            <ul className="space-y-2">
              <li className="flex items-center text-neutral-300 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                Advanced email authentication
              </li>
              <li className="flex items-center text-neutral-300 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                AI-powered personalization
              </li>
              <li className="flex items-center text-neutral-300 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                Smart follow-up sequences
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Convert & Book",
      content: (
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-full bg-neutral-800/50 border border-white/10 flex items-center justify-center mb-6">
            <CalendarCheck className="w-6 h-6 text-emerald-500" />
          </div>
          <div className="space-y-2">
            <h4 className="text-neutral-200 text-lg font-medium">Automated Meeting Booking</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Our AI SDR team handles all follow-ups and responses, engaging prospects in natural conversations. We manage the entire process until qualified meetings are booked directly on your calendar.
            </p>
          </div>
          <div className="pt-4">
            <ul className="space-y-2">
              <li className="flex items-center text-neutral-300 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                Natural language responses
              </li>
              <li className="flex items-center text-neutral-300 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                Calendar integration
              </li>
              <li className="flex items-center text-neutral-300 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                Real-time performance tracking
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full bg-black">
      <Timeline data={data} />
    </div>
  );
} 