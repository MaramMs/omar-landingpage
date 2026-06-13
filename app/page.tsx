import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { FeaturesSection } from '@/components/features-section'
import { WorkflowSection } from '@/components/workflow-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen">
        <SiteHeader />
        <Hero />
      <main className=" flex flex-col gap-10 ">
        <ServicesSection />
        <FeaturesSection />
        <WorkflowSection />
      </main>
        <SiteFooter />
    </div>
  )
}
