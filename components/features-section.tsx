'use client'
import { Zap, ShieldCheck, MapPin, BadgeCheck } from 'lucide-react'
import { SectionHeading } from './section-heading'

const features = [
  {
    icon: Zap,
    title: 'دقة وسرعة في الإنجاز',
    description: 'إتمام المعاملات العدلية في وقت قياسي وباحترافية عالية.',
    delay: '0s',
  },
  {
    icon: ShieldCheck,
    title: 'سرية وخصوصية',
    description: 'التزام تام بحفظ أسرار العملاء وبياناتهم في كافة التعاملات.',
    delay: '0.5s',
  },
  {
    icon: MapPin,
    title: 'المرونة والوصول',
    description: 'نصلك في موقعك — المنزل أو المكتب أو مقر الشركة — تقديراً لوقتك.',
    delay: '1s',
  },
  {
    icon: BadgeCheck,
    title: 'موثوقية واعتماد',
    description: 'مرخصون رسمياً من وزارة العدل السعودية.',
    delay: '1.5s',
  },
]

export function FeaturesSection() {
  return (
    <section id="about" className="bg-card">
      <style>{`
        .feature-icon-bounce {
          animation: feature-bounce 2s ease-in-out infinite;
        }
        .feature-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(201,168,76,0.5);
          animation: feature-pulse 2s ease-out infinite;
        }
        .feature-ring-2 {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(201,168,76,0.3);
          animation: feature-pulse 2s ease-out infinite 0.7s;
        }
        @keyframes feature-pulse {
          0%   { transform: scale(0.85); opacity: 0.8; }
          100% { transform: scale(1.5);  opacity: 0; }
        }
        @keyframes feature-bounce {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-4px); }
        }
      `}</style>

      <div className="mx-auto p-4 sm:px-8 lg:px-12 py-14 sm:py-20">
        <SectionHeading>لماذا تختارنا للخدمات العدلية؟</SectionHeading>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center"
              >
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <span
                    className="feature-ring"
                    style={{ animationDelay: feature.delay }}
                    aria-hidden="true"
                  />
                  <span
                    className="feature-ring-2"
                    style={{ animationDelay: `calc(${feature.delay} + 0.7s)` }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex h-13 w-13 items-center justify-center rounded-full border border-gold/40 bg-gold/6">
                    <Icon
                      className="feature-icon-bounce size-6 text-gold"
                      style={{ animationDelay: feature.delay }}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <h3 className="mt-5 font-heading text-base font-bold text-gold-soft">
                  {feature.title}
                </h3>
                <p className="mt-2 max-w-56 text-sm leading-relaxed text-foreground/65">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}