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
    <header className="border-gold-gradient overflow-hidden  bg-navy-deep shadow-lg mb-10">
      {/* Top strip */}
  <div className="border-b border-gold/20 px-6 py-2 text-center  bg-[#a5957d]">
        <p className="text-xs font-medium tracking-wide text-black">
          خدمات معتمدة من وزارة العدل السعودية
        </p>
      </div>

  <div className='mx-auto max-w-4xl'>
      {/* Main nav */}
      <nav className="flex items-center justify-between gap-4 px-5 py-4">
        {/* Brand */}
        <Link href="#home" className="shrink-0 leading-none">
          {/* <span className="font-heading text-2xl font-bold text-gold-gradient">
            عمر المشعلي
          </span> */}
          <Image src='/images/logo.png' alt='عمر المشعلي' width={150} height={150}/>
        </Link>

        {/* Links */}
        <ul className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-sm font-medium text-foreground/85 transition-colors hover:text-gold"
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
