"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

import BlurredShape from "@/public/images/blurred-shape.svg"

export default function Faq() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      ></div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image className="max-w-none" src={BlurredShape || "/placeholder.svg"} width={760} height={668} alt="" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        

        {/* FAQ Section */}
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* FAQ header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-emerald-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-emerald-200/50">
              <span className="inline-flex bg-linear-to-r from-emerald-500 to-emerald-200 bg-clip-text text-transparent">
                Common Questions
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-emerald-200),var(--color-gray-50),var(--color-emerald-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-emerald-200/65">Everything you need to know about our platform and services</p>
          </div>

          {/* FAQ items */}
          <div className="mx-auto max-w-3xl">
            <FaqItem
              question="How does your platform integrate with existing tools?"
              answer="Our platform seamlessly integrates with a wide range of tools including Google Cloud, Google Docs, Notion, Zoom, WhatsApp, and Messenger. We provide APIs and webhooks for custom integrations, allowing your team to continue using the tools they love while enhancing their capabilities."
            />

            <FaqItem
              question="What security measures do you have in place?"
              answer="We implement enterprise-grade security with SOC 2 compliance, end-to-end encryption, and regular security audits. All data is stored in secure, redundant data centers, and we offer customizable data retention policies to meet your organization's compliance requirements."
            />

            <FaqItem
              question="Can I customize workflows for my team?"
              answer="Our platform offers fully customizable workflows that can be tailored to your team's specific needs. You can create custom approval processes, notification systems, and automation rules to streamline your operations and improve productivity."
            />

            <FaqItem
              question="How do you handle data privacy and compliance?"
              answer="We take data privacy seriously and are compliant with GDPR, CCPA, and other regional regulations. You maintain ownership of your data, and we provide tools for data export, deletion, and compliance reporting to help you meet your regulatory obligations."
            />

            <FaqItem
              question="What kind of support do you offer?"
              answer="We provide 24/7 technical support through multiple channels including live chat, email, and phone. Enterprise customers receive dedicated account managers and priority support. Our comprehensive documentation, video tutorials, and regular webinars help your team get the most out of our platform."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ Item component with expand/collapse functionality
// FAQ Item component with expand/collapse functionality
interface FaqItemProps {
    question: string;
    answer: string;
  }
  
  function FaqItem({ question, answer }: FaqItemProps) {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <div className="border-b border-emerald-900/30 py-6">
        <button
          className="flex w-full items-center justify-between text-left"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <h3 className="font-nacelle text-lg font-semibold text-gray-200">{question}</h3>
          <ChevronDown
            className={`h-5 w-5 text-emerald-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-emerald-200/65">{answer}</p>
        </div>
      </div>
    )
  } 

