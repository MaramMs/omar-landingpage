import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="home"
      className=" overflow-hidden rounded-3xl bg-card p-4 shadow-xl sm:p-6"
    >
      <div className="grid items-stretch gap-6 lg:grid-cols-2">
        {/* Portrait */}
        <div className="border-gold-gradient relative min-h-72 overflow-hidden rounded-2xl lg:min-h-[28rem]">
          <Image
            src="/images/notary-portrait.png"
            alt="عمر المشعلي، موثق معتمد ومأذون عقود أنكحة"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>

        {/* Copy */}
        <div className="flex flex-col justify-center px-2 py-4 text-right sm:px-6">
          <h1 className="font-heading text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-[2.75rem]">
            <span className="text-gold-gradient">عمر المشعلي</span>
            <span className="text-foreground"> | موثق</span>
            <br />
            <span className="text-foreground">معتمد ومأذون عقود أنكحة</span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/75 sm:text-base">
            توثيق حقوقك وإتمام عقودك الشرعية بموثوقية، وسرعة، وسرية تامة. خدمات
            عدلية متكاملة معتمدة من وزارة العدل السعودية تصلك حيثما كنت.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#services"
              className="gold-btn rounded-xl px-7 py-3 text-sm font-bold shadow-md transition-transform hover:scale-[1.03]"
            >
              تصفح خدماتنا
            </Link>
            <Link
              href="#contact"
              className="rounded-xl border border-gold/50 px-7 py-3 text-sm font-bold text-gold transition-colors hover:bg-gold/10"
            >
              احجز موعدك الآن
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
