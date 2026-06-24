"use client"

import { Building2, FileSignature, Landmark } from 'lucide-react'
import { SectionHeading } from './section-heading'
import Image from 'next/image'



const licenses = [
  {
    icon: '/images/ser5.jpg',
    title: 'الموثق المعتمد',
    licenseNumber: 'ترخيص رقم: (41/1946)',
    description: 'موثق معتمد لدى وزارة العدل',
  },
  {
    icon: '/images/ser1.png',
    title: 'وزارة العدل',
    licenseNumber: 'ترخيص رقم: (6598)',
    description: 'توثيق كافة العقود والإقرارات والوكالات بموجب ترخيص التوثيق.',
  },
  {
    icon: '/images/ser4.png',
    title: 'ناجز',
    licenseNumber: 'ترخيص رقم: (2223000151)',
    description: 'تسجيل الملكيات العقارية وإنهاء الإجراءات في السجل العقاري.',
  }
]

export function LicensesSection() {
  return (
    <section id="licenses" className="py-14 sm:py-20 p-4 sm:px-8 lg:px-12 bg-muted/30">
      <SectionHeading>التراخيص والاعتمادات الرسمية</SectionHeading>

      <div className="mx-auto mt-10 grid gap-6 md:grid-cols-3 max-w-5xl">
        {licenses.map((license) => {
          const Icon = license.icon
          return (
            <article
              key={license.title}
              className="border-gold-gradient flex flex-col items-center justify-center rounded-2xl bg-card p-8 text-center shadow-lg transition-transform hover:-translate-y-1 relative overflow-hidden group"
            >
               {/* Decorative background glow */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex items-center justify-center w-24 h-24 rounded-full border border-gold/30 bg-gold/10 text-gold shadow-[0_0_15px_rgba(200,160,100,0.1)] mb-6 group-hover:scale-110 transition-transform duration-300">
                {/* <Icon size={40} strokeWidth={1.5} /> */}
                <Image src={license.icon} alt={license.title} width={200} height={200} className='object-contain rounded-full'/>
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                {license.title}
              </h3>
              
              <div className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-sm font-semibold text-gold-soft mb-4 border border-gold/20">
                {license.licenseNumber}
              </div>
              
              <p className="text-sm leading-relaxed text-foreground/70">
                {license.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
