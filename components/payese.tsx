"use client"


import { Check, ChevronRight, ArrowDownCircle, Cpu, LaptopMinimalCheck } from "lucide-react"

export default function PayEaseHero() {
  return (
    <section className="relative  py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Hero header */}
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              <span className="text-emerald-400">AI-Powered</span>{" "}
              <span className="text-white">Accounts Receivable Management for Better Cash Flow</span>
            </h1>
            <p className="mx-auto max-w-2xl text-center text-gray-300">
              PayEase is the ultimate solution for small and medium-sized businesses struggling with payment delays,
              cash flow uncertainties, and time-consuming invoice follow-ups.
            </p>
          </div>

          {/* Content area with checkboxes and image */}
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:gap-12">
            {/* Left side - Checkboxes */}
            <div className="relative rounded-xl border border-emerald-500/30 bg-gray-900/50 p-6">
              <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white">
                
              </div>

              <h3 className="mb-6 text-xl font-semibold text-white">PayEase simplifies</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-white">Budgeting</span>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-white">Saving</span>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-white">Investing</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <ChevronRight className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Right side - Creative image collage */}
            <div className="relative flex items-center justify-center">
              <div className="relative h-[300px] w-full overflow-hidden rounded-xl border border-gray-700/50 bg-gray-900/50 p-4 md:h-[320px]">
                {/* AI Chip icon */}
                <div className="absolute left-1/2 top-6 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-md bg-blue-500/20 text-white">
                  <span className="text-xs font-bold">AI</span>
                </div>

                {/* Dashboard frame */}
                <div className="absolute left-1/2 top-20 h-[180px] w-[220px] -translate-x-1/2 rounded-lg border border-gray-700 bg-gray-800 p-3 shadow-lg">
                  <div className="mb-2 text-center text-xl font-bold text-white">$25,600</div>

                  {/* Chart bars */}
                  <div className="mb-4 flex h-16 items-end justify-center space-x-2">
                    <div className="h-6 w-4 rounded bg-blue-500"></div>
                    <div className="h-8 w-4 rounded bg-blue-500"></div>
                    <div className="h-10 w-4 rounded bg-blue-500"></div>
                    <div className="h-14 w-4 rounded bg-blue-500"></div>
                  </div>

                  {/* Notification */}
                  <div className="ml-auto mr-4 flex h-8 w-32 items-center rounded bg-gray-700 px-2">
                    <ArrowDownCircle className="mr-1 h-4 w-4 text-blue-400" />
                    <div className="h-2 w-full rounded-full bg-gray-600"></div>
                  </div>

                  {/* Success indicator */}
                  <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Check className="h-5 w-5" />
                  </div>
                </div>

                {/* Person illustration */}
                <div className="absolute bottom-4 right-4 h-[160px] w-[120px]">
                
                    <Cpu
                        size={60}
                        strokeWidth={1.5}
                        className="text-emerald-600 group-hover:text-emerald-700 transition-colors"
                    />
 
                </div>

                {/* Plant decoration */}
                <div className="absolute bottom-4 left-4 h-12 w-12">
                <LaptopMinimalCheck
                        size={60}
                        strokeWidth={1.5}
                        className="text-emerald-600 group-hover:text-emerald-700 transition-colors"
                    />
                </div>
              </div>

              {/* Avatar decorations */}
              <div className="absolute -right-2 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

