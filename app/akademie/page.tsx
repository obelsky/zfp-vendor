import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { BookOpen, Brain, Target, Zap, Users, TrendingUp, ArrowRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Akademie',
  description: 'Online vzdělávací centrum ZFP - naučte se způsob přemýšlení, který funguje dlouhodobě.',
};

const features = [
  {
    icon: Brain,
    title: 'Způsob myšlení',
    description: 'Neučíme nástroje. Učíme způsob uvažování, který funguje dlouhodobě.',
  },
  {
    icon: Target,
    title: 'Praktické know-how',
    description: 'Vše vychází z reálných projektů a zkušeností z praxe.',
  },
  {
    icon: Users,
    title: 'Pro poradce',
    description: 'Obsah navržený pro finanční poradce bez technického backgroundu.',
  },
  {
    icon: TrendingUp,
    title: 'Dlouhodobý růst',
    description: 'Principy, které fungují dnes i za 5 let.',
  },
];

const workshops = [
  {
    slug: 'jak-dnes-stavet-weby',
    title: 'Jak dnes stavět weby, které fungují pro lidi, Google i AI',
    description: 'Komplexní průvodce moderním přístupem k webovým projektům. Od změny paradigmatu přes práci s daty až po optimalizaci pro AI.',
    chapters: 10,
    duration: '~60 min',
    topics: ['E-E-A-T & YMYL', 'Optimalizace pro AI', 'Struktura webu', 'Práce s obsahem'],
  },
];

export default function AkademiePage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-brand-dark relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm mb-6">
            <BookOpen size={16} />
            <span>Vzdělávací centrum</span>
          </div>
          <h1>Akademie</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            Kurátorované know-how z reálných projektů. Naučte se způsob přemýšlení, 
            který funguje pro lidi, vyhledávače i AI.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-gold/10 border border-white/10 flex items-center justify-center">
                    <Icon size={22} className="text-brand-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="section bg-brand-dark">
        <div className="container-custom">
          <div className="section-header">
            <h2>Dostupné workshopy</h2>
            <p>Vyberte si téma a začněte se vzdělávat vlastním tempem.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {workshops.map((workshop) => (
              <Link key={workshop.slug} href={`/akademie/${workshop.slug}`} className="block group">
                <Card variant="glow" className="p-8 hover:border-brand-gold transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl text-white mb-3 group-hover:text-brand-gold transition-colors">
                        {workshop.title}
                      </h3>
                      <p className="text-white/70 mb-4">
                        {workshop.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {workshop.topics.map((topic, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-sm"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/40">
                        <span className="flex items-center gap-1">
                          <BookOpen size={14} />
                          {workshop.chapters} kapitol
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {workshop.duration}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-brand-gold group-hover:gap-3 transition-all">
                      <span className="text-sm font-medium">Začít</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom">
          <Card className="max-w-2xl mx-auto text-center p-12 bg-gradient-to-br from-brand-gold/5 to-brand-orange/5 border-brand-gold/20">
            <Zap size={32} className="mx-auto mb-4 text-brand-gold" strokeWidth={1.5} />
            <h2 className="text-2xl mb-4">Připravujeme další obsah</h2>
            <p className="text-white/70 mb-6">
              Akademie se průběžně rozšiřuje. Chcete být informováni o nových workshopech?
            </p>
            <Button href="/kontakt">Kontaktujte nás</Button>
          </Card>
        </div>
      </section>
    </>
  );
}
