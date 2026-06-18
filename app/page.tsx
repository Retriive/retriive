import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { WhatWeDo } from "@/components/what-we-do"
import { CampusQ } from "@/components/campusq"
import { Company } from "@/components/company"
import { ContactCta } from "@/components/contact-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      <SiteHeader />
      <main>
        <Hero />
        <WhatWeDo />
        <CampusQ />
        <Company />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
