import { PenLine, ScrollText } from 'lucide-react'
import { SectionHeading } from './section-heading'

const services = [
  {
    icon: PenLine,
    title: 'التوثيق العدلي',
    description:
      'نقدم خدمات التوثيق التجاري والشخصي وفق أعلى المعايير القانونية. تشمل إفراغ العقارات، إصدار وفسخ الوكالات، وتوثيق الإقرارات المالية وعقود التأسيس.',
    tags: ['#إفراغ_عقاري', '#وكالات_شرعية', '#توثيق_عقود_شركات'],
  },
  {
    icon: ScrollText,
    title: 'عقود الأنكحة',
    description:
      'إتمام عقود النكاح الإلكترونية بكل يسر وسهولة، مع تقديم الاستشارات اللازمة لضمان توافق العقود مع الأنظمة الشرعية والقانونية.',
    tags: ['#مأذون_شرعي', '#عقد_نكاح_إلكتروني', '#تصديق_عقود'],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className=" py-14 sm:py-20 p-4  sm:px-8 lg:px-12">
      <SectionHeading>خدماتنا العدلية المتكاملة</SectionHeading>

      <div className="mx-auto mt-10 grid  gap-6 md:grid-cols-2 ">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <article
              key={service.title}
              className="border-gold-gradient flex flex-col rounded-2xl bg-card p-6 text-right shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-start gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {service.title}
                </h3>
            
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                {service.description}
              </p>

              <ul className="mt-5 flex flex-wrap justify-end gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-gold/30 px-2.5 py-1 text-xs font-medium text-gold-soft"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
