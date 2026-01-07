import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CheckCircle, XCircle, Shield, Award, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Proč mít web',
  description: 'Proč je profesionální web klíčový pro finanční poradce a realitní makléře.',
};

const eeatPillars = [
  { icon: Star, letter: 'E', title: 'Experience', description: 'Reálné zkušenosti s prodejem nemovitostí nebo poradenstvím' },
  { icon: Award, letter: 'E', title: 'Expertise', description: 'Odbornost prokázaná certifikáty a vzděláním' },
  { icon: Users, letter: 'A', title: 'Authoritativeness', description: 'Autorita v oboru – reference a recenze' },
  { icon: Shield, letter: 'T', title: 'Trustworthiness', description: 'Důvěryhodnost – HTTPS, jasné kontakty' },
];

const singlePageCons = [
  'Špatné SEO – jedna URL = jedna šance na ranking',
  'Pomalé načítání – celý obsah najednou',
  'Slabá struktura – Google nerozumí hierarchii',
  'Špatná analytics – nelze měřit jednotlivé sekce',
  'Nulová geo-lokalizace – nefunguje pro local SEO',
];

const multiPagePros = [
  'Každá stránka = samostatné téma a šance na ranking',
  'Jasná struktura – Google přesně ví, co nabízíte',
  'Rychlé načítání – jednotlivé stránky jsou menší',
  'Lepší měření – vidíte přesně, co funguje',
  'Local SEO – můžete cílit na konkrétní lokality',
  'Škálovatelnost – snadno přidáváte nové služby',
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
            <h2 className="text-center mb-12">YMYL & E-E-A-T</h2>
            
            {/* YMYL Card */}
            <Card className="mb-8 p-8">
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
            <Card className="mb-12 p-8">
              <h3 className="font-heading text-xl text-white mb-6">E-E-A-T: 4 pilíře důvěryhodnosti</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {eeatPillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={index} className="p-4 bg-brand-darker rounded-lg border-l-2 border-brand-gold">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon size={18} className="text-brand-gold" strokeWidth={1.5} />
                        <h4 className="text-brand-gold font-heading">{pillar.title}</h4>
                      </div>
                      <p className="text-white/60 text-sm">{pillar.description}</p>
                    </div>
                  );
                })}
              </div>
            </Card>
            
            {/* Single Page vs Multi Page */}
            <h2 className="text-center mb-8">Strukturovaný web vs. Single Page</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Single Page Cons */}
              <Card className="border-red-500/20 p-6">
                <h3 className="font-heading text-lg text-red-400 mb-4 flex items-center gap-2">
                  <XCircle size={20} strokeWidth={1.5} />
                  Proč single page není vhodné
                </h3>
                <ul className="space-y-3">
                  {singlePageCons.map((item, index) => (
                    <li key={index} className="text-white/60 text-sm flex items-start gap-2">
                      <XCircle size={14} className="text-red-400/60 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
              
              {/* Multi Page Pros */}
              <Card className="border-brand-gold/30 p-6">
                <h3 className="font-heading text-lg text-brand-gold mb-4 flex items-center gap-2">
                  <CheckCircle size={20} strokeWidth={1.5} />
                  Proč strukturovaný web
                </h3>
                <ul className="space-y-3">
                  {multiPagePros.map((item, index) => (
                    <li key={index} className="text-white/60 text-sm flex items-start gap-2">
                      <CheckCircle size={14} className="text-brand-gold/60 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
            
            {/* CTA */}
            <div className="mt-12 text-center">
              <Card className="inline-block p-8 bg-gradient-to-br from-brand-gold/10 to-brand-orange/10 border-brand-gold/30">
                <h3 className="font-heading text-xl text-white mb-3">Weby postavené na standardech</h3>
                <p className="text-white/70 mb-6 max-w-lg">
                  Naše weby stavíme s ohledem na YMYL, E-E-A-T, SEO i optimalizaci pro AI.
                </p>
                <Button href="/sluzby">Zobrazit služby</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
