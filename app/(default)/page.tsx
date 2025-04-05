export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import PaymentDelays from "@/components/payment";
import PayEaseHero from "@/components/payese";
import IndustryCoverage from "@/components/industry-coverage";
import PricingPlans from "@/components/pricing";
import Faq from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <PayEaseHero />
      
      <PaymentDelays />
      <Workflows />
      
      <IndustryCoverage />
      <PricingPlans />
      <Faq />
      
      <Cta />
    </>
  );
}
