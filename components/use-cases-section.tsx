import { Building2, Home, Heart } from 'lucide-react'
import { SectionHeading } from './section-heading'

const cases = [
  {
    icon: Building2,
    title: 'خدمة توثيق الشركات',
    question: 'هل تحتاج لتوثيق عقد شركتك خارج أوقات العمل الرسمية؟',
    description: 'نوفر خدمة التوثيق لمقرات الشركات والأعمال التجارية لتسهيل أعمالكم دون انقطاع.'
  },
  {
    icon: Home,
    title: 'الإفراغ العقاري',
    question: 'هل تبحث عن إفراغ عقاري فوري في مجلسك دون انتظار؟',
    description: 'نصلك أينما كنت لإنهاء إجراءات الإفراغ العقاري بشكل فوري ورسمي وموثق.'
  },
  {
    icon: Heart,
    title: 'عقود الأنكحة',
    question: 'هل تستعد لليلة العمر وتبحث عن مأذون يكمل فرحتك بسلاسة؟',
    description: 'نرافقك في ليلتك الاستثنائية لإتمام عقد النكاح باحترافية، رقي، ويسر.'
  }
]

export function UseCasesSection() {
  return (
    <section className="py-14 sm:py-20 p-4 sm:px-8 lg:px-12 bg-navy-deep/50 border-y border-white/5 relative overflow-hidden">
      <SectionHeading>حلول مصممة لتلبية احتياجاتك</SectionHeading>
      
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
        {cases.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index} className="group flex flex-col rounded-3xl bg-card border border-white/5 p-8 shadow-lg hover:border-gold/40 transition-colors">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold group-hover:bg-gold-gradient group-hover:text-navy-deep transition-all">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gold-soft font-bold text-sm mb-3">"{item.question}"</p>
              <p className="text-sm leading-relaxed text-foreground/70">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
