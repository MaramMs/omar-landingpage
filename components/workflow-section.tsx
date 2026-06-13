import { Fragment } from 'react'
import { Award, CalendarCheck, Phone, ArrowLeft } from 'lucide-react'
import { SectionHeading } from './section-heading'

const steps = [
  {
    icon: Phone,
    title: 'تواصل معنا',
    description: 'عبر الواتساب أو بطلب اتصال.',
  },
  {
    icon: CalendarCheck,
    title: 'حدد طلبك ووقتك',
    description:
      'يتم الاتفاق على نوع الخدمة وتحديد الموعد والمكان المناسب لك.',
  },
  {
    icon: Award,
    title: 'إنجاز فوري',
    description:
      'إتمام الخدمة وتوثيقها رسمياً عبر أنظمة وزارة العدل.',
  },
]

export function WorkflowSection() {
  return (
    <section id="workflow" className="px-2 py-14 sm:py-20">
      <SectionHeading>آلية العمل: خطوات بسيطة لخدمة فورية</SectionHeading>

      <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-center gap-6 md:flex-row">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <Fragment key={step.title}>
              <div className="flex flex-col items-center text-center md:max-w-48">
                <span className="border-gold-gradient flex size-16 items-center justify-center rounded-full bg-card text-gold shadow-md">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-gold-soft">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <ArrowLeft
                  className="size-7 shrink-0 rotate-90 text-gold/60 md:rotate-0"
                  aria-hidden="true"
                />
              )}
            </Fragment>
          )
        })}
      </div>
    </section>
  )
}
