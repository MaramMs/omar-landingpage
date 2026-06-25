import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { FeaturesSection } from '@/components/features-section'
import { WorkflowSection } from '@/components/workflow-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { SiteFooter } from '@/components/site-footer'
import { FaqSection } from '@/components/FQA'
import { StatsSection } from '@/components/stats-section'
import { UseCasesSection } from '@/components/use-cases-section'
import { StickyWhatsapp } from '@/components/sticky-whatsapp'
import { LicensesSection } from '@/components/licenses-section'
import { FadeIn, FadeUp } from '@/components/Animations'

export default function Page() {
  return (
    <div className="min-h-screen">
        <SiteHeader />
        <Hero />
      <main className=" flex flex-col gap-10 pb-10">
        <LicensesSection />
        <ServicesSection />
        <StatsSection />
        <UseCasesSection />
        <FadeUp><WorkflowSection /></FadeUp>
        <TestimonialsSection />
        <FadeUp><FeaturesSection /></FadeUp>
        <FadeUp><FaqSection /></FadeUp>
      </main>
        <SiteFooter />
        <StickyWhatsapp />
    </div>
  )
}
