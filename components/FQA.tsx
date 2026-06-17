'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from './section-heading'

const faqs = [
  {
    question: 'هل يشترط وجود فحص طبي قبل حجز موعد عقد النكاح؟',
    answer: 'نعم، يشترط إجراء الفحص الطبي قبل موعد عقد النكاح كمتطلب أساسي لإتمام العقد عبر الأنظمة الرسمية.'
  },
  {
    question: 'هل يمكن إجراء وكالة لشخص خارج المملكة؟',
    answer: 'نعم، يمكن إجراء وكالة شرعية وتوثيقها رسمياً للأشخاص خارج المملكة وفق الإجراءات والأنظمة المعتمدة.'
  },
  {
    question: 'ما هي أوقات العمل، وهل تقدمون الخدمات في الإجازات الرسمية؟',
    answer: 'نعمل بمرونة تامة لتلبية احتياجاتكم، ويسعدنا تقديم خدماتنا حتى خارج أوقات العمل الرسمية وفي الإجازات لضمان عدم تعطل مصالحكم.'
  },
  {
    question: 'هل الرسوم موحدة أم تختلف حسب الخدمة؟',
    answer: 'تختلف الرسوم بناءً على نوع الخدمة المطلوبة ومكان التنفيذ. يمكنكم التواصل معنا لتحديد الخدمة وسنقوم بتزويدكم بالتسعيرة المناسبة بكل شفافية.'
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-14 sm:py-20 p-4 sm:px-8 lg:px-12 relative">
      <SectionHeading>الأسئلة الشائعة</SectionHeading>
      
      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="rounded-2xl border border-white/5 bg-card/50 overflow-hidden transition-all duration-300 hover:border-gold/30"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between p-6 text-right transition-colors hover:bg-white/5"
            >
              <span className="font-heading text-lg font-bold text-foreground">
                {faq.question}
              </span>
              <ChevronDown 
                className={`h-5 w-5 text-gold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
              />
            </button>
            <div 
              className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-foreground/75">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
