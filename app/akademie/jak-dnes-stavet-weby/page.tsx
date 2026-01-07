import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowLeft, ArrowRight, BookOpen, Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Jak dnes stavět weby, které fungují pro lidi, Google i AI',
  description: 'Komplexní workshop o moderním přístupu k webovým projektům pro finanční poradce.',
};

const chapters = [
  {
    number: 1,
    slug: 'zmena-paradigmatu',
    title: 'Změna paradigmatu',
    subtitle: 'Proč to celé děláme',
    description: 'Web už není vizitka, ale datový uzel. Neoptimalizujeme jen pro Google, ale i pro AI modely.',
    duration: '5 min',
  },
  {
    number: 2,
    slug: 'framework-mysleni',
    title: 'Framework myšlení',
    subtitle: 'Jak přemýšlíme nad webovým projektem',
    description: 'Stejný mentální model pro každý projekt: Kontext → Data → Struktura → Obsah → Distribuce.',
    duration: '7 min',
  },
  {
    number: 3,
    slug: 'analyzy-a-data',
    title: 'Analýzy a sběr dat',
    subtitle: 'Bez složité techniky',
    description: 'Co skutečně používáme a co nepotřebujeme. Praktický výstup pro poradce.',
    duration: '6 min',
  },
  {
    number: 4,
    slug: 'klicova-slova-intent',
    title: 'Klíčová slova a intent',
    subtitle: 'Klíčové slovo = formulace problému',
    description: 'Neřešíme objem, ale záměr. Typy intentů a praktické cvičení.',
    duration: '6 min',
  },
  {
    number: 5,
    slug: 'obsah-ktery-funguje',
    title: 'Obsah, který funguje',
    subtitle: 'Ne marketing, ale hodnota',
    description: 'Jak píšeme obsah a struktura každé stránky, kterou milují AI i lidé.',
    duration: '7 min',
  },
  {
    number: 6,
    slug: 'eeat-ymyl',
    title: 'E-E-A-T a YMYL',
    subtitle: 'Laicky a prakticky',
    description: 'Co to znamená pro finanční poradce a jak na to.',
    duration: '8 min',
  },
  {
    number: 7,
    slug: 'jak-ai-cte-weby',
    title: 'Jak AI čte weby',
    subtitle: 'Jak se data dostávají do AI modelů',
    description: 'AI nevnímá weby jako lidé. Co je důležité a proč.',
    duration: '6 min',
  },
  {
    number: 8,
    slug: 'optimalizace-pro-ai',
    title: 'Optimalizace pro AI',
    subtitle: 'AIO a GEO v praxi',
    description: 'Co skutečně děláme a co poradce pochopí.',
    duration: '7 min',
  },
  {
    number: 9,
    slug: 'moderni-web',
    title: 'Moderní web',
    subtitle: 'Lead generative website',
    description: 'Web jako aktivní poradce, ne leták. Nová generace webů.',
    duration: '6 min',
  },
  {
    number: 10,
    slug: 'model-pro-kancelare',
    title: 'Model pro kanceláře',
    subtitle: 'Replikovatelný systém',
    description: 'Co si každá kancelář odnese a jak s tím pracovat dál.',
    duration: '5 min',
  },
];

export default function WorkshopPage() {
  const totalDuration = chapters.reduce((acc, ch) => {
    const mins = parseInt(ch.duration);
    return acc + mins;
  }, 0);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-brand-dark relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-custom">
          <Link
            href="/akademie"
            className="inline-flex items-center gap-2 text-white/50 hover:text-brand-gold transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            <span>Zpět na Akademii</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm mb-6">
              <BookOpen size={16} />
              <span>Workshop</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Jak dnes stavět weby, které fungují pro lidi, Google i AI
            </h1>
            <p className="text-lg text-white/70 mb-6">
              Neučíme nástroje. Učíme způsob uvažování, který funguje dlouhodobě.
              Vše je přenositelné do praxe kanceláře.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <BookOpen size={16} />
                {chapters.length} kapitol
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                ~{totalDuration} min čtení
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters list */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl mb-8">Obsah workshopu</h2>

            <div className="space-y-4">
              {chapters.map((chapter, index) => (
                <Link
                  key={chapter.slug}
                  href={`/akademie/jak-dnes-stavet-weby/${chapter.slug}`}
                  className="block group"
                >
                  <Card className="p-6 hover:border-brand-gold transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-gold/10 border border-white/10 flex items-center justify-center font-heading text-brand-gold text-lg flex-shrink-0 group-hover:bg-brand-gold group-hover:text-brand-darker transition-colors">
                        {chapter.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-heading text-lg text-white group-hover:text-brand-gold transition-colors">
                              {chapter.title}
                            </h3>
                            <p className="text-brand-gold/70 text-sm mb-1">
                              {chapter.subtitle}
                            </p>
                            <p className="text-white/50 text-sm">
                              {chapter.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-white/30 group-hover:text-brand-gold transition-colors flex-shrink-0">
                            <span className="text-sm">{chapter.duration}</span>
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Start button */}
            <div className="mt-12 text-center">
              <Button href={`/akademie/jak-dnes-stavet-weby/${chapters[0].slug}`} size="lg">
                Začít první kapitolu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="section bg-brand-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl mb-8 text-center">Co se naučíte</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Jak přemýšlet nad webovým projektem',
                'Práce s kontextem, daty a strukturou',
                'Sběr dat bez složité techniky',
                'Klíčová slova jako intent, ne SEO',
                'E-E-A-T a YMYL v praxi',
                'Jak AI modely čtou weby',
                'Optimalizace pro AI (AIO/GEO)',
                'Moderní web jako aktivní nástroj',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-brand-gold flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
