import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Jak to funguje',
  description: 'Spolupráce s ZFP Vendor je jednoduchá a transparentní.',
};

const steps = [
  {
    number: 1,
    title: 'Výběr služby',
    description: 'Prohlédněte si náš katalog služeb a vyberte si, co potřebujete pro svůj růst.',
  },
  {
    number: 2,
    title: 'Objednávka',
    description: 'Vyplňte jednoduchý formulář s vašimi údaji a požadavky. Ozveme se do 24 hodin.',
  },
  {
    number: 3,
    title: 'Onboarding',
    description: 'Společně probereme vaše potřeby a cíle. Připravíme vše potřebné pro realizaci.',
  },
  {
    number: 4,
    title: 'Dodání',
    description: 'Realizujeme službu podle harmonogramu. Po dodání poskytujeme průběžnou podporu.',
  },
];

const timeline = [
  { day: 'Den 1-2', description: 'Onboarding, analýza požadavků, příprava obsahu.' },
  { day: 'Den 3-4', description: 'Design, vývoj, tvorba obsahu a implementace.' },
  { day: 'Den 5-6', description: 'Testování, optimalizace, SEO a příprava.' },
  { day: 'Den 7', description: 'Spuštění, školení a předání dokumentace.' },
];

const processBenefits = [
  'Pravidelné update schůzky',
  'Přístup k projektovým nástrojům',
  'Transparentní timeline',
  'Flexibilita při změnách',
];

export default function JakToFungujePage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-brand-dark relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-custom text-center">
          <h1>Jak to funguje</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            Spolupráce s ZFP Vendor je jednoduchá a transparentní.
          </p>
        </div>
      </section>
      
      {/* Steps */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-gold to-brand-orange text-brand-darker flex items-center justify-center font-heading text-3xl font-bold shadow-[0_0_20px_rgba(207,84,0,0.3)]">
                  {step.number}
                </div>
                <h3 className="font-heading text-xl text-white mb-2">{step.title}</h3>
                <p className="text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Details */}
      <section className="section bg-brand-dark">
        <div className="container-custom">
          <h2 className="text-center mb-12">Od konzultace k výsledkům</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop&q=80"
                alt="Spolupráce"
                width={600}
                height={600}
                className="w-full rounded-xl border border-white/10"
              />
            </div>
            <div>
              <h3 className="font-heading text-2xl text-white mb-4">Transparentní proces</h3>
              <p className="text-white/70 mb-6">
                Během celého projektu máte přehled o postupu prací. Pravidelně komunikujeme, 
                konzultujeme řešení a přizpůsobujeme se vašim potřebám.
              </p>
              <ul className="space-y-2">
                {processBenefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="text-white/70 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-brand-gold before:font-bold"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center mb-12">Timeline vývoje webu</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index}>
                  <h4 className="text-brand-gold font-heading mb-1">{item.day}</h4>
                  <p className="text-white/60">{item.description}</p>
                </div>
              ))}
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=800&fit=crop&q=80"
                alt="Timeline"
                width={600}
                height={800}
                className="w-full rounded-xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section bg-brand-dark">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Máte otázky?</h2>
            <p className="text-lg text-white/70 mb-8">
              Rádi vám zodpovíme jakékoliv dotazy ohledně procesu nebo služeb.
            </p>
            <Button asChild>
              <Link href="/kontakt">Kontaktujte nás</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
