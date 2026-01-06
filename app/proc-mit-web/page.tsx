import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CheckCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Proč mít web',
  description: 'Proč je profesionální web klíčový pro finanční poradce a realitní makléře.',
};

const eeatPillars = [
  { letter: 'E', title: 'Experience', description: 'Reálné zkušenosti s prodejem nemovitostí nebo poradenstvím' },
  { letter: 'E', title: 'Expertise', description: 'Odbornost prokázaná certifikáty a vzděláním' },
  { letter: 'A', title: 'Authoritativeness', description: 'Autorita v oboru – reference a recenze' },
  { letter: 'T', title: 'Trustworthiness', description: 'Důvěryhodnost – HTTPS, jasné kontakty' },
];

const singlePageCons = [
  { text: 'Špatné SEO', desc: 'Jedna URL = jedna šance na ranking' },
  { text: 'Pomalé načítání', desc: 'Celý obsah najednou' },
  { text: 'Slabá struktura', desc: 'Google nerozumí hierarchii' },
  { text: 'Špatná analytics', desc: 'Nelze měřit jednotlivé sekce' },
  { text: 'Nulová geo-lokalizace', desc: 'Nefunguje pro local SEO' },
];

const multiPagePros = [
  { text: 'Každá stránka = samostatné téma', desc: 'Více šancí na ranking' },
  { text: 'Jasná struktura', desc: 'Google přesně ví, co nabízíte' },
  { text: 'Rychlé načítání', desc: 'Jednotlivé stránky jsou menší' },
  { text: 'Lepší měření', desc: 'Vidíte přesně, co funguje' },
  { text: 'Local SEO', desc: 'Můžete cílit na konkrétní lokality' },
  { text: 'Škálovatelnost', desc: 'Snadno přidáváte nové služby' },
];

export default function ProcMitWebPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-brand-dark relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-custom text-center">
          <h1>Proč mít profesionální web</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            Moderní web je víc než vizitka. Je to nástroj pro budování důvěry a růst byznysu.
          </p>
        </div>
      </section>
      
      {/* YMYL & E-E-A-T */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">YMYL & E-E-A-T: Klíčové pro makléře a poradce</h2>
            
            {/* YMYL Card */}
            <Card className="mb-8">
              <h3 className="font-heading text-xl text-white mb-4">Co je YMYL (Your Money or Your Life)?</h3>
              <p className="text-white/70 mb-4">
                Realitní a finanční poradenství patří do kategorie <strong className="text-brand-gold">YMYL</strong> – stránek, 
                které mohou významně ovlivnit finance, zdraví nebo bezpečnost návštěvníků.
              </p>
              <p className="text-white/70">
                Google proto klade na tyto weby <strong className="text-brand-gold">extrémně vysoké nároky</strong> na důvěryhodnost a odbornost.
              </p>
            </Card>
            
            {/* E-E-A-T Pillars */}
            <Card className="mb-8">
              <h3 className="font-heading text-xl text-white mb-6">E-E-A-T: 4 pilíře důvěryhodnosti</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {eeatPillars.map((pillar, index) => (
                  <div key={index} className="p-4 bg-brand-darker rounded-lg border-l-4 border-brand-gold">
                    <h4 className="text-brand-gold font-heading mb-1">{pillar.title}</h4>
                    <p className="text-white/60 text-sm">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Single Page vs Multi Page */}
            <h2 className="mb-8 text-center mt-16">Strukturovaný web vs. Single Page</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Single Page Cons */}
              <Card className="border-red-500/30">
                <h3 className="font-heading text-xl text-red-400 mb-4 flex items-center gap-2">
                  <XCircle size={20} />
                  Proč single page NENÍ vhodné
                </h3>
                <ul className="space-y-3">
                  {singlePageCons.map((item, index) => (
                    <li key={index} className="text-white/70">
                      <strong className="text-white">{item.text}:</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              </Card>
              
              {/* Multi Page Pros */}
              <Card className="border-brand-gold">
                <h3 className="font-heading text-xl text-brand-gold mb-4 flex items-center gap-2">
                  <CheckCircle size={20} />
                  Proč strukturovaný multi-page web
                </h3>
                <ul className="space-y-3">
                  {multiPagePros.map((item, index) => (
                    <li key={index} className="text-white/70">
                      <strong className="text-white">{item.text}:</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
            
            {/* CTA */}
            <div className="mt-16 text-center">
              <Card className="bg-gradient-to-br from-brand-gold/20 to-brand-orange/20 border-brand-gold">
                <h3 className="font-heading text-2xl text-white mb-4">ZFP Vendor: Weby postavené na standardech</h3>
                <p className="text-white/70 mb-6">
                  Naše weby nejsou šablony. Každý web stavíme s ohledem na YMYL, E-E-A-T, SEO, GEO a AIO.
                </p>
                <Button asChild>
                  <Link href="/sluzby">Zobrazit naše služby</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
