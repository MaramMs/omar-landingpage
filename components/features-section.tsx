import { Rocket, Lock, Car, FileCheck } from 'lucide-react'
import { SectionHeading } from './section-heading'

const features = [
  {
    icon: Rocket,
    title: 'دقة وسرعة والإنجاز',
    description:
      'إتمام المعاملات العدلية في وقت قياسي وباحترافية عالية.',
  },
  {
    icon: Lock,
    title: 'سرية وخصوصية',
    description:
      'التزام تام بحفظ أسرار العملاء وبياناتهم في كافة التعاملات.',
  },
  {
    icon: Car,
    title: 'المرونة والوصول',
    description:
      'تقدم خدماتنا في موقعك (المنزل، المكتب، أو مقر الشركة) تقديراً لوقتك.',
  },
  {
    icon: FileCheck,
    title: 'موثوقية واعتماد',
    description:
      'مرخصون رسمياً من وزارة العدل السعودية.',
  },
]

export function FeaturesSection() {
  return (
    // bg-[#020c1c]
    <section id="about" className="  bg-card">
   <div className='mx-auto max-w-6xl px-2 py-14 sm:py-20  sm:px-6'>
   <SectionHeading>لماذا تختارنا للخدمات العدلية؟</SectionHeading>

<div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
  {features.map((feature) => {
    const Icon = feature.icon
    return (
      <div
        key={feature.title}
        className="flex flex-col items-center text-center"
      >
        <span className="border-gold-gradient flex size-16 items-center justify-center rounded-2xl bg-card text-gold shadow-md">
          <Icon className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-heading text-base font-bold text-gold-soft">
          {feature.title}
        </h3>
        <p className="mt-2 max-w-56 text-sm leading-relaxed text-foreground/65">
          {feature.description}
        </p>
      </div>
    )
  })}
</div>
   </div>
    </section>
  )
}
