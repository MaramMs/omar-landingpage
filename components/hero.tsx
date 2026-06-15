import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ShieldCheck, Scale, FileText } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden rounded-3xl bg-card/40 backdrop-blur-3xl border border-white/5 p-4 shadow-2xl sm:p-8 lg:p-12 mb-10">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-gold/20 opacity-30 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-navy-light/40 opacity-40 blur-[120px]" />

      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Copy */}
        <div className="flex flex-col justify-center text-right z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold w-fit mb-6 shadow-[0_0_15px_rgba(var(--gold-rgb),0.1)]">
            <ShieldCheck className="h-4 w-4" />
            <span>معتمد من وزارة العدل السعودية</span>
          </div>
          
          <h1 className="font-heading text-4xl font-black leading-[1.3]  sm:text-5xl lg:text-[3.5rem] lg:leading-[1.5]">
            <span className="text-gold-gradient block mb-2"> عمر المشعلي | <span  className='text-foreground'> موثق</span></span>
            <span className=" text-foreground block">  معتمد ومأذون  عقود أنكحة</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/80 sm:text-lg">
          توثيق حقوقك وإتمام عقودك الشرعية بموثوقية,سرعة,وسرية تامة.خدمات عدلية متكاملة معتمدة من وزارة العدل تصلك حيثما كنت.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl gold-btn px-8 py-3.5 text-base font-bold shadow-lg transition-all hover:scale-[1.02] hover:shadow-gold/20"
            >
              <span>احجز موعدك الآن</span>
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-bold text-foreground backdrop-blur-md transition-colors hover:bg-white/10 hover:border-white/20"
            >
              تصفح خدماتنا
            </Link>
          </div>

          {/* Features row */}
          <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                <Scale className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground">توثيق شرعي</span>
                <span className="text-xs text-foreground/60">بموجب الأنظمة</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground">عقود أنكحة</span>
                <span className="text-xs text-foreground/60">إجراءات ميسرة</span>
              </div>
            </div>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end z-10">
          <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-3xl border-2 border-gold/20 shadow-[0_0_40px_rgba(200,160,100,0.15)] ring-1 ring-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent z-10"></div>
            <Image
              src="/images/hero.jpeg"
              alt="عمر المشعلي، موثق معتمد ومأذون عقود أنكحة"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Decorative element */}
            <div className="absolute bottom-6 right-6 z-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold border border-gold/30">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">موثوقية تامة</p>
                  <p className="text-xs text-white/80">خدمة معتمدة 100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
