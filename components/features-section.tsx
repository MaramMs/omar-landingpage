// 'use client'
// import { Car, FileCheck, Lock, Rocket } from 'lucide-react'
// import { SectionHeading } from './section-heading'
// import { DotLottieReact } from '@lottiefiles/dotlottie-react'
// import { useRef } from 'react'
// import type { DotLottie } from '@lottiefiles/dotlottie-react'

// export function FeatureIcon({ src }: { src: string }) {
//   const ref = useRef<DotLottie>(null)

//   return (
//     <div
//       onMouseEnter={() => ref.current?.play()}
//       onMouseLeave={() => ref.current?.stop()}
//     >
//       <DotLottieReact
//         dotLottieRefCallback={(instance) => { ref.current = instance }}
//         src={src}
//         autoplay={false}
//         loop={false}
//         style={{ width: 56, height: 56 }}
//       />
//     </div>
//   )
// }


// const features = [
//   {
//     icon: Rocket,
//     title: 'دقة وسرعة والإنجاز',
//     description: 'إتمام المعاملات العدلية في وقت قياسي وباحترافية عالية.',
//   },
//   {
//     icon: Lock,
//     title: 'سرية وخصوصية',
//     description: 'التزام تام بحفظ أسرار العملاء وبياناتهم في كافة التعاملات.',
//   },
//   {
//     icon: Car,
//     title: 'المرونة والوصول',
//     description: 'تقدم خدماتنا في موقعك (المنزل، المكتب، أو مقر الشركة) تقديراً لوقتك.',
//   },
//   {
//     icon: FileCheck,
//     title: 'موثوقية واعتماد',
//     description: 'مرخصون رسمياً من وزارة العدل السعودية.',
//   },
// ]

// export function FeaturesSection() {
//   return (
//     <section id="about" className="bg-card">
//       <style>{`
//         @property --angle {
//           syntax: '<angle>';
//           initial-value: 0deg;
//           inherits: false;
//         }

//         @keyframes spin-border {
//           0%   { --angle: 0deg; }
//           100% { --angle: 360deg; }
//         }

//         .rotating-border {
//           position: relative;
//           border-radius: 1rem;
//           padding: 2px;
//           background: conic-gradient(
//             from var(--angle),
//             transparent 70%,
//             #c9a84c,
//             #f0d080,
//             #c9a84c,
//             transparent 100%
//           );
//           animation: spin-border 3s linear infinite;
//         }

//         .rotating-border-inner {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 60px;
//           height: 60px;
//           border-radius: calc(1rem - 2px);
//           background: var(--card, #0a1628);
//         }

//       @keyframes spin-icon {
//   0%   { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }

// .rotating-border-icon {
//   animation: spin-icon 3s linear infinite;
// }
//       `}</style>

//       <div className="mx-auto  p-4  sm:px-8 lg:px-12 py-14 sm:py-20 ">
//         <SectionHeading>لماذا تختارنا للخدمات العدلية؟</SectionHeading>

//         <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {features.map((feature) => {
//             const Icon = feature.icon
//             return (
//               <div
//                 key={feature.title}
//                 className="feature-card flex flex-col items-center text-center"
//               >
//                 <div className="rotating-border">
//                   <div className="rotating-border-inner text-gold">
//                     <Icon
//                       className="rotating-border-icon size-7 transition-transform duration-500 ease-in-out"
//                       aria-hidden="true"
//                     />
//                   </div>
//                 </div>

//                 <h3 className="mt-5 font-heading text-base font-bold text-gold-soft">
//                   {feature.title}
//                 </h3>
//                 <p className="mt-2 max-w-56 text-sm leading-relaxed text-foreground/65">
//                   {feature.description}
//                 </p>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'
import { Zap, ShieldCheck, MapPin, BadgeCheck } from 'lucide-react'
import { SectionHeading } from './section-heading'

const features = [
  {
    icon: Zap,
    title: 'دقة وسرعة في الإنجاز',
    description: 'إتمام المعاملات العدلية في وقت قياسي وباحترافية عالية.',
  },
  {
    icon: ShieldCheck,
    title: 'سرية وخصوصية',
    description: 'التزام تام بحفظ أسرار العملاء وبياناتهم في كافة التعاملات.',
  },
  {
    icon: MapPin,
    title: 'المرونة والوصول',
    description: 'نصلك في موقعك — المنزل أو المكتب أو مقر الشركة — تقديراً لوقتك.',
  },
  {
    icon: BadgeCheck,
    title: 'موثوقية واعتماد',
    description: 'مرخصون رسمياً من وزارة العدل السعودية.',
  },
]

export function FeaturesSection() {
  return (
    <section id="about" className="bg-card">
      <style>{`
        .feature-card {
          transition: transform 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-6px);
        }

        .feature-icon-wrap {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 1.5px solid rgba(201,168,76,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .feature-card:hover .feature-icon-wrap {
          border-color: rgba(201,168,76,0.8);
          background: rgba(201,168,76,0.08);
        }

        .feature-icon {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          color: #c9a84c;
        }
        .feature-card:hover .feature-icon {
          transform: scale(1.2);
        }

        .feature-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.3);
          opacity: 0;
          transition: opacity 0.3s ease;
          animation: none;
        }
        .feature-card:hover .feature-pulse {
          opacity: 1;
          animation: pulse-ring 1.5s ease-out infinite;
        }

        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.5; }
          100% { transform: scale(1.4); opacity: 0; }
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
                className="feature-card flex flex-col items-center text-center"
              >
                <div className="feature-icon-wrap">
                  <span className="feature-pulse" aria-hidden="true" />
                  <Icon className="feature-icon size-7" aria-hidden="true" />
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