import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'التوثيق العدلي', href: '#services' },
  { label: 'عقود الأنكحة', href: '#services' },
  { label: 'احجز موعداً', href: '#workflow' },
  // { label: 'المدونة', href: '#blog' },
  { label: 'اتصل بنا', href: '#contact' },
]

export function SiteHeader() {
  return (
    <header className="border-gold-gradient overflow-hidden  bg-navy-deep shadow-lg  max-h-[100px]">
      {/* Top strip */}
  <div className="border-b border-gold/20 px-6 py-1 text-center  bg-[#a5957d] hidden">
        <p className="text-xs font-medium tracking-wide text-black">
          خدمات معتمدة وموثقة من وزارة العدل
        </p>
      </div>

  <div className='mx-auto '>
      {/* Main nav */}
      <nav className="flex items-center justify-between gap-4 sm:px-8 lg:px-12 ">
        {/* Brand */}
        <Link href="#home" className="shrink-0 leading-none">
          {/* <span className="font-heading text-2xl font-bold text-gold-gradient">
            عمر المشعلي
          </span> */}
          <Image src='/images/logoSite.png' alt='عمر المشعلي' width={400} height={120} className='w-[320px] h-[100px]  object-cover cursor-pointer'/>
        </Link>

        {/* Links */}
        <ul className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-[20px] font-medium  text-foreground/85 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#contact"
          className="gold-btn shrink-0 rounded-lg px-5 py-2.5 text-sm font-bold shadow-md transition-transform hover:scale-[1.03]"
        >
          احجز الآن
        </Link>
      </nav>
  </div>
    </header>
  )
}
