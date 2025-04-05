"use client"

import Image from "next/image"
import { Check, Clock, BarChart2, Globe } from "lucide-react"

export default function PricingPlans() {
  return (
    <section className=" py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-emerald-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-emerald-200/50">
              <span className="inline-flex bg-linear-to-r from-emerald-500 to-emerald-200 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-emerald-200),var(--color-gray-50),var(--color-emerald-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Single Plan to all of your Workflow
            </h2>
            
          </div>

          {/* Pricing content */}
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Pricing card */}
            <div className="group/card relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600/70 p-px transition-all hover:shadow-lg max-w-sm">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gradient-to-br from-emerald-400/90 to-emerald-600/70 p-8">
                <div className="absolute -top-10 -right-10">
                  <div className="relative h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="User avatar"
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">Basic</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$100</span>
                  <span className="text-white/80 ml-1">/mo</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 rounded-full bg-white/20 p-1">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white font-medium">AR</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 rounded-full bg-white/20 p-1">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white font-medium">Writing Resources</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 rounded-full bg-white/20 p-1">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white font-medium">Coaching Program</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="group/card relative overflow-hidden rounded-2xl bg-gray-900/50 p-px transition-all hover:shadow-lg flex-1">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-8 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-full bg-emerald-500/20 p-2">
                      <Clock className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-lg font-medium text-white">Up to 25 hours saved weekly</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-full bg-emerald-500/20 p-2">
                      <BarChart2 className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-lg font-medium text-white">45% reduction in Days Sales Outstanding</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-full bg-emerald-500/20 p-2">
                      <Globe className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-lg font-medium text-white">Minimize cash flow disruptions</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-[inherit] border border-emerald-500/30"></div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
              <span className="text-white font-medium">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
              <span className="text-white font-medium">Scalable Pricing Model</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
              <span className="text-white font-medium">ROI Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

