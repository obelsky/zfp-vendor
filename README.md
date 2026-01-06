# ZFP Vendor - Next.js

Moderní webová platforma pro ZFP Vendor postavená na Next.js 14.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Animations:** Framer Motion

## 📁 Struktura projektu

```
zfp-vendor-nextjs/
├── app/                    # Next.js App Router
│   ├── globals.css         # Globální styly + fonty
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── sluzby/             # Katalog služeb
│   ├── kontakt/            # Kontaktní stránka
│   ├── automatizace/       # Automatizace
│   ├── jak-to-funguje/     # Proces spolupráce
│   └── proc-mit-web/       # Argumenty pro web
├── components/
│   ├── ui/                 # Základní UI komponenty
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   └── layout/             # Layout komponenty
│       ├── Header.tsx
│       └── Footer.tsx
├── config/
│   └── site.ts             # Konfigurace webu
├── lib/
│   └── utils.ts            # Utility funkce
├── types/
│   └── index.ts            # TypeScript typy
├── public/
│   ├── fonts/              # Bree + Fedra Sans Pro
│   └── images/             # Obrázky a logo
├── tailwind.config.ts      # Tailwind konfigurace
├── next.config.js          # Next.js konfigurace
└── package.json
```

## 🎨 Design System

### Barvy

| Barva | HEX | Použití |
|-------|-----|---------|
| Orange | `#CF5400` | Primární CTA |
| Gold | `#C9A961` | Nadpisy, akcenty |
| Bronze | `#A67C52` | Sekundární akcenty |
| Dark | `#1A1A1A` | Pozadí sekcí |
| Darker | `#0A0A0A` | Hlavní pozadí |

### Fonty

- **Nadpisy:** Bree (Light, Regular, Bold)
- **Body:** Fedra Sans Pro (Light, Normal, Medium, Bold)

## 🛠️ Instalace

```bash
# 1. Naklonuj repozitář
git clone https://github.com/obelsky/zfp-vendor.git
cd zfp-vendor

# 2. Nainstaluj závislosti
npm install

# 3. Vytvoř .env.local
cp .env.example .env.local
# Uprav hodnoty v .env.local

# 4. Spusť dev server
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

```bash
# Build
npm run build

# Start production server
npm start

# Type check
npm run type-check

# Lint
npm run lint
```

### Vercel Deployment

1. Push na GitHub
2. Importuj projekt na Vercel
3. Nastav environment variables
4. Deploy!

## 🔐 Environment Variables

```env
# App
NEXT_PUBLIC_APP_URL=https://zfpvendor.cz

# Supabase (budoucí CRM/CMS)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=

# Analytics
NEXT_PUBLIC_GA_ID=
```

## 📧 Kontakt

- **E-mail:** o.belsky@zfpakademie.cz
- **Telefon:** +420 739 677 452
- **Lokalita:** Břeclav

## 📝 Budoucí rozšíření

- [ ] Supabase CRM pro správu leadů
- [ ] CMS pro blog/články
- [ ] PWA + Push notifikace
- [ ] Kalkulačky (hypotéky, investice)
- [ ] Admin dashboard

---

**ZFP GROUP © 2024**
