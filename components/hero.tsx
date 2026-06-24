import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ShieldCheck, Scale, FileText } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className='p-[16px] md:p-[52px]'
      style={{ backgroundImage: "url('/images/bg-hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
     <div       className="relative overflow-hidden rounded-3xl border border-white/5 shadow-2xl  min-h-[560px] lg:min-h-[620px]"
     >

     <Image
        src="/images/fullHero2.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center opacity-90 scale-105"
        sizes="100vw"
      />

      {/* ── RIGHT-SIDE TEXT OVERLAY (desktop) ── */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#081425]/90 via-[#081425]/70 to-[#081425]/70 hidden lg:block" />
      {/* <div className="absolute inset-0 bg-gradient-to-l from-[#081425] via-[#081425]/60 to-transparent hidden lg:block" /> */}

      {/* ── Full overlay on mobile so text stays readable ── */}
      <div className="absolute inset-0 bg-[#08111f]/80 lg:hidden" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex items-center justify-start min-h-[560px] lg:min-h-[620px]">
        <div className="flex flex-col text-center w-full px-6 sm:px-10 lg:w-[55%] xl:w-[50%] lg:px-0 lg:pr-14 xl:pr-20 py-12 lg:py-16">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold w-fit  mx-auto shadow-[0_0_15px_rgba(var(--gold-rgb),0.1)]">
            <ShieldCheck className="h-4 w-4" />
            <span >   موثق  ومعتمد من وزارة العدل</span>
          </div>

          {/* Heading */}

          <Image src="/images/logoSite.png" alt='عمر المشعلي' width={800} height={300} className='w-auto h-[100px] sm:h-[140px] lg:h-[200px] max-w-full object-cover drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)] mb-6'/>
          <h1 className="font-heading text-[25px] font-black leading-[1.9] sm:text-5xl lg:text-[3.2rem] lg:leading-[1.5]">
          
            <span className="text-foreground block"> موثق معتمد ومسجل عقاري  ومأذون شرعي </span>
          </h1>

          {/* Body */}
          <p className="mt-8 md:mx-auto w-full md:w-[66%] text-center md:text-right leading-relaxed text-foreground/80 sm:text-lg ">
            توثيق حقوقك وإتمام عقودك الشرعية بموثوقية، سرعة، وسرية تامة.
            خدمات عدلية متكاملة معتمدة من وزارة العدل تصلك حيثما كنت.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl gold-btn px-8 py-3.5 text-base font-bold shadow-lg transition-all hover:scale-[1.02] hover:shadow-gold/20"
            >
              <span>احجز موعدك الفوري</span>
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-start rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-bold text-foreground backdrop-blur-md transition-colors hover:bg-white/10 hover:border-white/20"
            >
              وثّق أوراقك بضغطة زر
            </Link>
          </div>

          {/* Feature strip */}
          <div className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-8 justify-center">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                <Scale className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-right">
                <span className="text-sm font-bold text-foreground"> موثق معتمد</span>
                <span className="text-xs text-foreground/60">  من وزارة العدل</span>
              </div>
            </div>
             <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                <Scale className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-right">
                <span className="text-sm font-bold text-foreground"> مسجل عقاري</span>
                <span className="text-xs text-foreground/60">  معتمد </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-right">
                <span className="text-sm font-bold text-foreground">عقود أنكحة</span>
                <span className="text-xs text-foreground/60">إجراءات ميسرة</span>
              </div>
            </div>
          </div>

        </div>
      </div>
     </div>
    </section>


  )
}


