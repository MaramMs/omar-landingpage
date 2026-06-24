import Link from 'next/link'
import { Phone, Mail, MessageCircle } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-gold-gradient overflow-hidden rounded-3xl bg-navy-deep shadow-xl"
    >
      <div className="grid gap-8 p-8 text-right md:grid-cols-1 lg:grid-cols-1">
        <div>
          <h3 className="font-heading text-lg font-bold text-gold-soft text-right md:text-center">
            معلومات التواصل
          </h3>
          <ul className="flex flex-col md:flex-row justify-center gap-10 align-middle mt-4  text-sm text-foreground/75">
            <li className="flex items-center  gap-2">
              <Phone className="size-4 text-gold" aria-hidden="true" />
              <span>جوال: 0556080822  </span>
            </li>
            <li className="flex items-center  gap-2">
              <Mail className="size-4 text-gold" aria-hidden="true" />
              <span>بريد إلكتروني: almeshali.law@gmail.com </span>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 text-gold" aria-hidden="true" />
              <span>واتساب:
                <Link
                  href="https://wa.me/966556080822"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  966556080822+
                </Link>
              </span>
            </li>

          </ul>
        </div>


      </div>

      <div className="border-t border-gold/15 px-8 py-4 text-center">
        <p className="text-xs text-foreground/55">
          © 2026  . جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  )
}
