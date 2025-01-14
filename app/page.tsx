'use client';

import { SplineSceneBasic } from "@/components/ui/splite.demo";
import { Testimonial } from "@/components/ui/testimonial-card";
import { FeatureDemo } from "@/components/ui/feature-section-with-bento-grid.demo";
import { TimelineDemo } from "@/components/ui/timeline.demo";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "SaaS Company",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=michael",
    testimonial: "The AI personalization is incredible. We're seeing 3x higher response rates compared to our previous outreach."
  },
  {
    name: "Sarah Smith",
    role: "VP Sales",
    company: "Tech Startup",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah",
    testimonial: "Their AI SDRs found exactly the right prospects and handled all the follow-ups. Game changer for our sales team."
  },
  {
    name: "David Wilson",
    role: "CEO",
    company: "B2B Service Provider",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=david",
    testimonial: "The quality of meetings booked has been exceptional. Their AI targeting is spot on."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <header className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <SplineSceneBasic />
      </header>

      {/* Features Section */}
      <FeatureDemo />

      {/* How It Works Timeline */}
      <TimelineDemo />

      {/* Social Proof */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 mb-16">
            <div>
              <Badge className="bg-black border border-white/10 text-neutral-200">Testimonials</Badge>
            </div>
            <h2 className="text-3xl md:text-5xl tracking-tighter font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
              Trusted by B2B Companies
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl text-center">
              See what our customers are saying about their experience with our AI SDR platform
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            Ready to Scale Your Outreach?
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
            Join leading B2B companies using our AI SDRs to book more meetings with qualified prospects.
          </p>
          <a 
            href="#contact" 
            className="inline-flex px-8 py-4 rounded-md bg-black border border-white/10 text-neutral-200 font-medium hover:bg-white/5 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}
