import { ReactNode } from "react"
import { useIntlayer } from "next-intlayer/server"

// ─── Types ───────────────────────────────────────────────────────────────────

interface LocaleContent {
  tag: string
  title: string
  description: ReactNode
  link: string
  mascot: string
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ComingSoon({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const intlayer = useIntlayer("coming-soon", locale)

  const t: LocaleContent = {
    tag: intlayer.tag as string,
    title: intlayer.title as string,
    description: (
      <>
        {locale === "fr" ? (
          <>Nous sommes encore en version bêta,{" "}
            <strong className="text-white font-semibold">Stolos</strong>{" "}
            n'est pas encore complet, notre équipe travaille d'arrache pied pour vous apporter cette page au plus vite !
          </>
        ) : (
          <>We're still in beta,{" "}
            <strong className="text-white font-semibold">Stolos</strong>{" "}
            isn't complete yet, our team is working hard to bring you this page as soon as possible!
          </>
        )}
      </>
    ),
    link: intlayer.link as string,
    mascot: locale === "en" ? "/mascot-en.png" : "/mascot-fr.png",
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#272149] p-4 md:p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1050px] w-full mx-auto gap-10 lg:gap-16">

        {/* Text content */}
        <div className="flex flex-col flex-1 max-w-[500px]">
          <span className="text-[9px] font-medium uppercase tracking-normal px-[13px] py-[6px] mb-5 rounded-full w-fit bg-[#352F5A] text-[#BFB9DF]">
            {t.tag}
          </span>

          <h1 className="text-[35px] leading-[1.2] font-semibold text-[#B1A7DC] mb-5">
            {t.title}
          </h1>

          <p className="text-[#877EBC] text-[19px] leading-[1.38] max-w-[460px] mb-10">
            {t.description}
          </p>

          <a
            href="#"
            className="text-[#E1C3FF] text-[16px] font-semibold hover:opacity-80 transition-opacity w-fit"
          >
            {t.link}
          </a>
        </div>

        {/* Mascot */}
        <div className="flex-shrink-0 w-full max-w-[280px]">
          <img
            src={t.mascot}
            alt={t.title}
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </div>
  )
}
