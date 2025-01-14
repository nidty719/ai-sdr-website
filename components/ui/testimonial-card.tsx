"use client"

import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialProps {
  name: string
  role: string
  company: string
  testimonial: string
  rating: number
  image?: string
}

export function Testimonial({
  name,
  role,
  company,
  testimonial,
  rating,
  image,
}: TestimonialProps) {
  return (
    <div className="relative">
      <div className="absolute -inset-1">
        <div className="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-emerald-600 to-emerald-500" />
      </div>
      <div className="relative h-full bg-black/50 border border-white/10 backdrop-blur-3xl rounded-2xl p-6 space-y-4">
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
          ))}
        </div>
        <div className="relative">
          <div className="absolute -top-2 -left-2 w-4 h-4 text-neutral-500">
            &ldquo;
          </div>
          <p className="text-sm text-neutral-300">{testimonial}</p>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 text-neutral-500">
            &rdquo;
          </div>
        </div>
        <div className="flex items-center gap-4 pt-4">
          <Avatar className="h-10 w-10 border border-white/10">
            <AvatarImage src={image} />
            <AvatarFallback className="bg-neutral-900 text-neutral-200">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-neutral-200">{name}</div>
            <div className="text-neutral-400 text-sm">
              {role} @ {company}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 