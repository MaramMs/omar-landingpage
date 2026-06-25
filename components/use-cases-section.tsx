import { Building2, Home, Heart } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { FadeUp, StaggerContainer, StaggerItem } from './Animations'

const cases = [
  {
    icon: Building2,
    title: 'خدمة التوثيق للأعمال',
    question: 'هل تحتاج توثيق معاملاتك القانونية بشكل رسمي ومعتمد؟',
    description: 'نوثّق جميع معاملاتك القانونية والتجارية والشخصية وفق أنظمة وزارة العدل — في موقعك ودون الحاجة لمراجعة الجهات.'
  },
  {
    icon: Home,
    title: 'مسجل عقاري',
    question: 'هل تبحث عن إتمام معاملاتك العقارية بشكل رسمي وسلس؟',
    description: 'نتولى جميع إجراءاتك العقارية من إفراغ وتسجيل ونقل ملكية وصكوك — وفق منظومة السجل العقاري وهيئة العقار.'
  },
  {
    icon: Heart,
    title: 'مأذون شرعي معتمد',
    question: 'هل تستعد لليلة العمر وتبحث عن مأذون يكمل فرحتك بسلاسة؟',
    description: 'نرافقك في ليلتك الاستثنائية لإتمام عقد النكاح باحترافية ورقي وفق أنظمة وزارة العدل — في القاعة أو المنزل أو مقر العائلة.'
  }
]

export function UseCasesSection() {
  return (
    <section className="py-14 sm:py-20 p-4 sm:px-8 lg:px-12 bg-navy-deep/50 border-y border-white/5 relative overflow-hidden">
      <FadeUp delay={0.1}>

      <SectionHeading>حلول مصممة لتلبية احتياجاتك</SectionHeading>
      </FadeUp>
      
      <StaggerContainer className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
        {cases.map((item, index) => {
          const Icon = item.icon
          return (
            <StaggerItem key={index} className="group flex flex-col rounded-3xl bg-card border border-white/5 p-8 shadow-lg hover:border-gold/40 transition-colors">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold group-hover:bg-gold-gradient group-hover:text-navy-deep transition-all">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gold-soft font-bold text-sm mb-3">"{item.question}"</p>
              <p className="text-sm leading-relaxed text-foreground/70">
                {item.description}
              </p>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </section>
  )
}
