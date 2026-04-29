import { ReactNode } from "react"

// ─── Types ───────────────────────────────────────────────────────────────────

interface LocaleContent {
  tag: string
  title: string
  description: ReactNode
  link: string
  mascot: string
}

// ─── i18n content ────────────────────────────────────────────────────────────

const content: Record<string, LocaleContent> = {
  fr: {
    tag: "PAGE EN CONSTRUCTION",
    title: "Cette page arrive bientôt",
    description: (
      <>
        Nous sommes encore en version bêta,{" "}
        <strong className="text-white font-semibold">Stolos</strong>{" "}
        n'est pas encore complet, notre équipe travaille d'arrache pied
        pour vous apporter cette page au plus vite !
      </>
    ),
    link: "→ Nos nouveautés ici",
    mascot: "/mascot-fr.png",
  },
  en: {
    tag: "PAGE UNDER CONSTRUCTION",
    title: "This page is coming soon",
    description: (
      <>
        We're still in beta,{" "}
        <strong className="text-white font-semibold">Stolos</strong>{" "}
        isn't complete yet, our team is working hard to bring you this
        page as soon as possible!
      </>
    ),
    link: "→ Our latest updates here",
    mascot: "/mascot-en.png",
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ComingSoon({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = content[locale] ?? content.fr

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#272149] p-4 md:p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1050px] w-full mx-auto gap-10 lg:gap-16">

        {/* Text content */}
        <div className="flex flex-col flex-1 max-w-[500px]">
          <span className="text-xs font-medium uppercase tracking-normal px-[14px] py-[6px] mb-5 rounded-full w-fit bg-[#352F5A] text-[#BFB9DF]">
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