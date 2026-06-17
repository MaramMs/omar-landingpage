import { FileCheck, ShieldCheck, HeartHandshake, ScrollText } from 'lucide-react'

const stats = [
  { icon: ScrollText, value: '+1000', label: 'عقد نكاح تم إتمامه' },
  { icon: FileCheck, value: '+5000', label: 'وثيقة ووكالة شرعية' },
  { icon: ShieldCheck, value: '100%', label: 'سرية وموثوقية' },
  { icon: HeartHandshake, value: '10+', label: 'سنوات من الخبرة' },
]

export function StatsSection() {
  return (
    <section className="py-10 px-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gold-gradient p-[2px] shadow-2xl shadow-gold/10">
        <div className="rounded-[calc(1.5rem-2px)] bg-navy-deep px-6 py-12 sm:px-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-gold shadow-inner border border-gold/20">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h4 className="font-heading text-4xl font-black text-white mb-2">{stat.value}</h4>
                  <p className="text-sm font-bold text-white/70">{stat.label}</p>
                </div>
              )
            })}
          </div>
          
          <div className="mt-12 border-t border-white/10 pt-8 text-center">
            <div className="inline-flex items-center flex-wrap justify-center gap-3 rounded-full bg-white/5 px-6 py-3 text-sm text-gold/90 font-bold border border-white/5 backdrop-blur-sm">
              <ShieldCheck className="h-5 w-5" />
              <span>اعتماد رسمي: رقم ترخيص الموثق (12345) | رقم رخصة المأذون (67890)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
