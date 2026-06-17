import { MessageCircle } from 'lucide-react'

export function StickyWhatsapp() {
  return (
    <a
      href="https://wa.me/966565593414" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all hover:scale-105 hover:bg-[#1EBE5C] animate-in fade-in slide-in-from-bottom-4 duration-500"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="font-bold text-sm hidden sm:block">استشرنا الآن مجاناً</span>
    </a>
  )
}
