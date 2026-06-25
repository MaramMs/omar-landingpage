import { Star, Quote, CheckCircle } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { FadeUp, StaggerContainer, StaggerItem } from './Animations'

const testimonials = [
  {
    name: 'عبدالله السالم',
    role: 'رجل أعمال',
    content: 'سرعة في الإنجاز واحترافية عالية في توثيق العقود التجارية. خدمة استثنائية وصلتني حتى مقر شركتي وأنهيت المعاملة في دقائق معدودة.',
    rating: 5,
  },
  {
    name: 'محمد العتيبي',
    role: 'عريس',
    content: 'تجربة رائعة وميسرة في عقد النكاح. الشيخ عمر كان قمة في الرقي والتعامل الحسن، أتم لنا العقد بكل يسر وسهولة وشاركنا فرحتنا.',
    rating: 5,
  },
  {
    name: 'سعد القحطاني',
    role: 'مستثمر عقاري',
    content: 'تعاملت مع الشيخ عمر في إفراغ عدة عقارات. دقة في المواعيد وإلمام تام بكافة الأنظمة العدلية، أنصح بالتعامل معه بشدة وبكل ثقة.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-14 sm:py-20 p-4 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[120px]" />
      <FadeUp delay={0.1}> 
              <SectionHeading>ثقة عملائنا، وسام نعتز به</SectionHeading>
              </FadeUp>

      <StaggerContainer className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <StaggerItem
            key={index}
            className="group relative flex flex-col rounded-3xl bg-card/30 backdrop-blur-md border border-white/5 p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(200,160,100,0.1)] hover:border-gold/30 hover:bg-card/50"
          >
            {/* Quote Icon */}
            <div className="absolute -top-5 -right-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-gradient text-navy-deep shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
              <Quote className="h-6 w-6 fill-current" />
            </div>

            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>

            <p className="flex-1 text-base leading-relaxed text-foreground/80 mb-8 relative z-10 font-medium">
              "{testimonial.content}"
            </p>

            <div className="flex items-center gap-4 border-t border-white/10 pt-5 mt-auto">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-deep text-gold font-bold font-heading text-xl border border-gold/20 shadow-inner">
                {testimonial.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground flex items-center gap-1.5">
                  {testimonial.name}
                  <CheckCircle className="h-3.5 w-3.5 text-gold" />
                </span>
                <span className="text-xs text-foreground/60 mt-0.5">{testimonial.role}</span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
