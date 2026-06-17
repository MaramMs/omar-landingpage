import Image from 'next/image'
import { CheckCircle2, Shield } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about-us" className="py-14 sm:py-20 p-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 text-right">
            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl mb-6">
              من هو الموثق ومأذون الأنكحة <span className="text-gold-gradient block mt-2">عمر المشعلي؟</span>
            </h2>
            <p className="text-base leading-relaxed text-foreground/80 mb-8 text-justify">
              خبرة قانونية وعدلية ممتدة، مرخص ومعتمد رسمياً من وزارة العدل السعودية لتقديم خدمات التوثيق التجاري والشخصي وإبرام عقود الأنكحة. نلتزم بتقديم خدمة ترتقي لتطلعاتكم وتضمن حقوقكم وفق أعلى المعايير الشرعية والقانونية، مع التركيز على الدقة، السرعة، والخصوصية التامة.
            </p>
            <ul className="space-y-4">
              {[
                'اعتماد رسمي من وزارة العدل.',
                'خبرة طويلة في صياغة العقود والوكالات.',
                'تنفيذ فوري وموثوق أينما كنت.',
                'أعلى درجات الخصوصية والسرية.'
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-start gap-3 text-sm font-medium text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-3xl border-2 border-gold/20 shadow-[0_0_30px_rgba(200,160,100,0.15)] ring-1 ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/40 to-transparent z-10" />
              <Image 
                src="/images/hero.jpeg" 
                alt="الشيخ عمر المشعلي" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Trust badge floating */}
            <div className="absolute -bottom-6 -right-6 lg:-right-6 lg:left-auto z-20 rounded-2xl bg-card border border-white/10 p-5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                   <Shield className="h-6 w-6" />
                </div>
                <div>
                  <span className="block font-bold text-white text-sm">مرخص ومعتمد</span>
                  <span className="block text-xs text-gold">من وزارة العدل</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
