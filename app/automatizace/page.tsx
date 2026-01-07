import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { 
  Home, 
  FileSearch, 
  Calculator, 
  Settings,
  Workflow,
  Database,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Automatizace',
  description: 'Ušetřete čas s inteligentními nástroji navázanými na váš core byznys.',
};

const modules = [
  {
    icon: Home,
    title: 'Náběr nemovitosti',
    description: 'Online formulář pro kompletní sběr dat o nemovitosti. Automatické vytvoření podkladů, generování inzerátu a export dat.',
    features: [
      'Strukturovaný sběr dat',
      'Automatické podklady pro Realman',
      'Generování inzerátu',
      'Export a integrace',
    ],
    href: '/kontakt',
  },
  {
    icon: FileSearch,
    title: 'Poptávky nemovitostí',
    description: 'Automatizovaný sběr poptávek na koupi, prodej nebo pronájem. Strukturovaná data se okamžitě propisují do CRM.',
    features: [
      'Online formulář pro poptávku',
      'Validace vstupních dat',
      'Automatické předání do CRM',
      'Okamžité upozornění makléře',
    ],
    href: '/kontakt',
  },
  {
    icon: Calculator,
    title: 'Hypoteční analyzátor',
    description: 'Nástroj pro rychlou analýzu hypoteční situace klienta. Strukturovaný výstup pro poradce.',
    features: [
      'Online hypoteční formulář',
      'Strukturovaný výstup',
      'Podklad pro kalkulace',
      'Navázání na další procesy',
    ],
    href: '/kontakt',
  },
  {
    icon: Settings,
    title: 'Automatizace na míru',
    description: 'Navrhujeme a realizujeme automatizace přesně podle vašich procesů a potřeb.',
    features: [
      'Propojení formulářů → CRM → e-mail',
      'Automatické generování dokumentů',
      'Workflow pro reality i finance',
      'Integrace nástrojů a AI',
    ],
    href: '/kontakt',
  },
];

export default function AutomatizacePage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-brand-dark relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm mb-6">
            <Workflow size={16} />
            <span>Automatizace procesů</span>
          </div>
          <h1>Automatizace</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            Ušetřete čas s inteligentními nástroji navázanými na váš core byznys.
          </p>
        </div>
      </section>
      
      {/* Modules */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Card key={index} variant="glow" className="flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-gold/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-brand-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-white mb-1">{module.title}</h3>
                      <p className="text-white/60 text-sm">{module.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6 flex-grow">
                    {module.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-white/50 pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-brand-gold"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="secondary" href={module.href} size="sm">
                    Zjistit více
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Integration Section */}
      <section className="section bg-brand-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Database size={48} className="mx-auto mb-6 text-brand-gold" strokeWidth={1.5} />
            <h2 className="mb-4">Propojené systémy</h2>
            <p className="text-white/70 mb-8">
              Naše automatizace propojují vaše nástroje do jednoho fungujícího ekosystému. 
              Formuláře, CRM, e-maily, dokumenty – vše komunikuje automaticky.
            </p>
            <Button href="/kontakt">
              Nezávazná konzultace
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
