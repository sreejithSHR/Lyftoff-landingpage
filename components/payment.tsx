"use client"


import { DollarSign, Clock, PhoneCall, Calendar } from "lucide-react"


export default function PaymentDelays() {
  return (
    <section className=" py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-emerald-400),var(--color-gray-50),var(--color-purple-400),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Painful Reality of Payment Delays
            </h2>
          </div>

          {/* Stats items - Vertical layout */}
          <div className="mx-auto flex max-w-4xl flex-col gap-12">
            {/* Stat 1 */}
            <div className="group/card relative flex flex-col items-center overflow-hidden rounded-2xl bg-gray-900 p-6 md:flex-row md:items-start md:gap-8 md:p-8">
              <div className="mb-6 flex h-48 w-48 items-center justify-center rounded-full bg-gray-800/50 p-4 md:mb-0">
              <div className="mb-6 flex h-48 w-48 items-center justify-center rounded-full bg-gray-800/50 p-4 md:mb-0">
                <DollarSign 
                    className="animate-pulse" // Optional animation
                    size={80}  // Icon size
                    strokeWidth={1.5}  // Adjust line thickness
                    style={{ 
                    color: '#22FF00',  // Neon green color
                    filter: 'drop-shadow(0 0 8px #22FF0055)'  // Optional glow effect
                    }}
                />
                </div>
              </div>
              <div className="flex flex-1 flex-col text-center md:text-left">
                <h3 className="mb-2 text-3xl font-bold text-emerald-400">$1 Trillion Trapped</h3>
                <p className="text-lg text-gray-300">Capital blocked in delayed payments</p>
                <div className="mt-4 flex justify-center md:justify-start">
                  <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-400">
                    <DollarSign className="mr-1 h-4 w-4" />
                    Financial Impact
                  </span>
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group/card relative flex flex-col items-center overflow-hidden rounded-2xl bg-gray-900 p-6 md:flex-row md:items-start md:gap-8 md:p-8">
              <div className="mb-6 flex h-48 w-48 items-center justify-center rounded-full bg-gray-800/50 p-4 md:mb-0">
              <div className="mb-6 flex h-48 w-48 items-center justify-center rounded-full bg-gray-800/50 p-4 md:mb-0">
                <Calendar 
                    className="animate-pulse"
                    size={80}
                    strokeWidth={1.5}
                    style={{ 
                    color: '#22FF00',
                    filter: 'drop-shadow(0 0 8px #22FF0055)'
                    }}
                />
                </div>
              </div>
              <div className="flex flex-1 flex-col text-center md:text-left">
                <h3 className="mb-2 text-3xl font-bold text-purple-400">43 Days</h3>
                <p className="text-lg text-gray-300">Average payment wait time for SMBs</p>
                <div className="mt-4 flex justify-center md:justify-start">
                  <span className="inline-flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-sm text-purple-400">
                    <Clock className="mr-1 h-4 w-4" />
                    Time Delay
                  </span>
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group/card relative flex flex-col items-center overflow-hidden rounded-2xl bg-gray-900 p-6 md:flex-row md:items-start md:gap-8 md:p-8">
              <div className="mb-6 flex h-48 w-48 items-center justify-center rounded-full bg-gray-800/50 p-4 md:mb-0">
              <div className="mb-6 flex h-48 w-48 items-center justify-center rounded-full bg-gray-800/50 p-4 md:mb-0">
  <Clock
    size={90}
    strokeWidth={1.2}
    className="animate-spin-slow"
    style={{
      color: '#39FF14',
      filter: 'drop-shadow(0 0 12px #39FF1488)'
    }}
  />
</div>
              </div>
              <div className="flex flex-1 flex-col text-center md:text-left">
                <h3 className="mb-2 text-3xl font-bold text-emerald-400">14 Hours/Week</h3>
                <p className="text-lg text-gray-300">Wasted on manual follow-ups</p>
                <div className="mt-4 flex justify-center md:justify-start">
                  <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-400">
                    <PhoneCall className="mr-1 h-4 w-4" />
                    Productivity Loss
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

