'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            AI-Powered Lead Generation That Actually Books Meetings
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Our AI SDRs handle everything: from building your target list to personalized outreach 
            and follow-ups. Get more meetings with decision-makers while you focus on closing deals.
          </p>
          <div className="mt-8">
            <a 
              href="#contact" 
              className="inline-flex px-8 py-4 rounded-md bg-black border border-white/10 text-neutral-200 font-medium hover:bg-white/5 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
} 