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
import { FadeIn } from '@/components/fade-in'

export default function Page() {
  return (
    <div className="min-h-screen">
        <SiteHeader />
        <Hero />
      <main className=" flex flex-col gap-10 pb-10">
        <FadeIn><LicensesSection /></FadeIn>
        <FadeIn><ServicesSection /></FadeIn>
        <FadeIn><StatsSection /></FadeIn>
        <FadeIn><UseCasesSection /></FadeIn>
        <FadeIn><WorkflowSection /></FadeIn>
        <FadeIn><TestimonialsSection /></FadeIn>
        <FadeIn><FeaturesSection /></FadeIn>
        <FadeIn><FaqSection /></FadeIn>
      </main>
        <SiteFooter />
        <StickyWhatsapp />
    </div>
  )
}
