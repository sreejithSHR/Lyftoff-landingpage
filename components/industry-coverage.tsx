"use client"

import { Briefcase, Building2, Network, ShieldCheck, UsersRound } from "lucide-react"
import Image from "next/image"

export default function IndustryCoverage() {
  return (
    <section className="relative py-16">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2" aria-hidden="true">
        <Image
          className="max-w-none"
          src="/placeholder.svg?height=668&width=760"
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-left md:pb-12">
          <div className="flex justify-center">
  <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-emerald-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-emerald-200/50">
    <span className="inline-flex bg-gradient-to-r from-emerald-500 to-emerald-200 bg-clip-text text-transparent">
      Industry Solutions
    </span>
  </div>
</div>

            <h2 className="text-center animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-emerald-200),var(--color-gray-50),var(--color-emerald-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Comprehensive Coverage
              <br />
              Across Industries
            </h2>
            <p className="text-lg text-center text-emerald-200/65">
              Tailored solutions designed to meet the unique challenges and requirements of various industries,
              delivering exceptional value and performance.
            </p>
          </div>

          {/* Industry cards */}
          <div className="mx-auto flex flex-wrap justify-center gap-4 md:flex-nowrap md:gap-3 lg:gap-4">
            {/* Card 1 - Services Companies */}
            <div className="group/card relative flex-1 min-w-[250px] overflow-hidden rounded-2xl bg-gray-900/50 p-px transition-all hover:shadow-lg">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-5 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="mb-3 text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                    <path
                      fillOpacity=".48"
                      d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                    />
                  </svg>
                </div>
                <div className="relative flex h-32 w-32 items-center justify-center rounded-xl  mx-auto shadow-sm  transition-colors">
                    <Briefcase 
                        size={60}
                        strokeWidth={1.5}
                        className="text-emerald-600/90 hover:text-emerald-700 transition-colors"
                    />
                    </div>
                <div className="mt-4">
                  <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">Services Companies</h3>
                  <p className="text-emerald-200/65">
                    Streamlined solutions for service-based businesses to enhance client management and delivery.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-[inherit] border border-emerald-500/30"></div>
            </div>

            {/* Card 2 - Office & Facilities Management */}
            <div className="group/card relative flex-1 min-w-[250px] overflow-hidden rounded-2xl bg-gray-900/50 p-px transition-all hover:shadow-lg">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-5 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="mb-3 text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillOpacity=".48"
                      d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z"
                    />
                    <path d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" />
                    <path
                      d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z"
                      opacity=".48"
                    />
                    <path d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" />
                  </svg>
                </div>
                <div className="relative flex h-32 w-32 items-center justify-center rounded-xl  mx-auto shadow-sm   transition-colors">
                    <Building2 
                        size={64}
                        strokeWidth={1.2}
                        className="text-emerald-600/90 hover:text-emerald-700 transition-colors"
                    />
                    </div>
                <div className="mt-4">
                  <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                    Office & Facilities Management
                  </h3>
                  <p className="text-emerald-200/65">
                    Optimize workspace efficiency and resource allocation for modern facility management.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-[inherit] border border-emerald-500/30"></div>
            </div>

            {/* Card 3 - Sales & Customer Success Teams */}
            <div className="group/card relative flex-1 min-w-[250px] overflow-hidden rounded-2xl bg-gray-900/50 p-px transition-all hover:shadow-lg">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-5 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="mb-3 text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillOpacity=".48"
                      d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    />
                    <path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
                  </svg>
                </div>
                <div className="relative flex h-32 w-32 items-center justify-center rounded-xl  mx-auto shadow-sm   transition-colors">
                
                    <UsersRound 
                        size={68}
                        strokeWidth={1.3}
                        className="text-emerald-500  bg-clip-text"
                    />

                    </div>
                
                <div className="mt-4">
                  <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                    Sales & Customer Success Teams
                  </h3>
                  <p className="text-emerald-200/65">
                    Empower your teams with tools designed to enhance customer relationships and drive growth.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-[inherit] border border-emerald-500/30"></div>
            </div>

            {/* Card 4 - Security and Compliance Sectors */}
            <div className="group/card relative flex-1 min-w-[250px] overflow-hidden rounded-2xl bg-gray-900/50 p-px transition-all hover:shadow-lg">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-5 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="mb-3 text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path fillOpacity=".48" d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z" />
                    <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
                  </svg>
                </div>
                <div className="relative flex h-32 w-32 items-center justify-center rounded-xl  mx-auto shadow-md group hover:shadow-lg transition-shadow">
                    <ShieldCheck
                        size={60}
                        strokeWidth={1.5}
                        className="text-emerald-600 group-hover:text-emerald-700 transition-colors"
                    />
                    
                    
</div>
                <div className="mt-4">
                  <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                    Security and Compliance Sectors
                  </h3>
                  <p className="text-emerald-200/65">
                    Robust solutions that ensure regulatory compliance while maintaining operational efficiency.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-[inherit] border border-emerald-500/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

