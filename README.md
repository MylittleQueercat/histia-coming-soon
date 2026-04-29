# Histia — Cas pratique

Implémentation de la page "En Construction" en Next.js, avec internationalisation FR/EN gérée via Intlayer et le segment d'URL `[locale]`.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Intlayer (i18n)

## Installation

```bash
npm install
npm run dev
```

## URLs

| URL | Langue |
|-----|--------|
| `/fr/coming-soon` | Français |
| `/en/coming-soon` | Anglais |

## Fonctionnalités

- Internationalisation FR/EN via Intlayer + segment d'URL `[locale]`
- Mascotte et textes adaptés selon la langue
- Responsive (1400×900 et 1920×1080)
- Sidebar non implémentée (optionnelle selon les consignes)

## Structure

```
app/
└── [locale]/
    └── coming-soon/
        ├── page.tsx           # Page principale
        └── page.content.ts    # Déclarations de contenu Intlayer
intlayer.config.ts             # Configuration i18n
```