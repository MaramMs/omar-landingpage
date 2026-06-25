import { PenLine, ScrollText } from 'lucide-react'
import { SectionHeading } from './section-heading'
import ser1 from '@/public/images/ser1.png'
import ser2 from '@/public/images/ser2.png'
import ser3 from '@/public/images/ser3.png'
import Image from 'next/image'
import { FadeUp, StaggerContainer, StaggerItem } from './Animations'

const services = [
  {
    icon: ser1,
    title: 'التوثيق العدلي الرسمي',
    description:"نوثّق معاملاتك القانونية والتجارية وفق أنظمة وزارة العدل — إقرارات مالية، عقود، صكوك، ووكالات. نُنجز لك المعاملة في موقعك دون مراجعة الجهات.",
    tags: ['#إفراغ_عقاري', '#وكالات_شرعية', '#توثيق_عقود_شركات'],
  },
  {
    icon:    ser3,
    title: 'الخدمات العقارية',
    description:"نُتيح إجراءات نقل ملكية العقار وتسجيل الصكوك عبر منظومة ناجز والسجل العقاري، في موقعك وبسرعة قياسية. للأفراد والمستثمرين والشركات.",
    tags: ['#إفراغ_عقاري', '#توثيق_عقاري', '#تسجيل_الصكوك'],
  },
    {
    icon: ser1,
    title: "مأذون شرعي معتمد  ",
    description:"أُجري عقود النكاح الشرعية وفق الأنظمة، مع استشارات قانونية للطرفين وخدمة شاملة لكل الإجراءات الورقية. أُنجز عقدك بسرعة، ووثّق حقوقك بثقة.",
    tags: ['#مأذون_شرعي', '#عقد_نكاح_إلكتروني', '#تصديق_عقود'],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className=" py-14 sm:py-20 p-4  sm:px-8 lg:px-12">
      <FadeUp delay={0.1}>
      <SectionHeading>خدماتنا العدلية المتكاملة</SectionHeading>

      </FadeUp>

      <StaggerContainer className="mx-auto mt-10 grid  gap-6 md:grid-cols-3 ">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <StaggerItem
              key={service.title}
              className="border-gold-gradient flex flex-col rounded-2xl bg-card p-6 text-right shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center flex-col justify-center gap-3">
              <span className="flex items-center justify-center overflow-hidden rounded-2xl  border-2 border-gold/40 shadow-[0_4px_20px_rgba(200,160,100,0.2)] w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] relative group-hover:shadow-[0_8px_30px_rgba(200,160,100,0.4)] group-hover:-translate-y-1 transition-all duration-300 mb-2">
                  <Image src={service.icon} alt={service.title} fill className='object-contain p-2' aria-hidden="true" />
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
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </section>
  )
}
