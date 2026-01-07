import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Automatizace',
  description: 'Ušetřete čas s inteligentními nástroji navázanými na váš core byznys.',
};

const modules = [
  {
    icon: '🏡',
    title: 'Náběr nemovitosti',
    description: 'Online formulář pro kompletní sběr dat o nemovitosti. Automatické vytvoření podkladů do Realmana, generování inzerátu a export dat.',
    features: [],
    href: '/sluzby',
  },
  {
    icon: '📋',
    title: 'Poptávky nemovitostí',
    description: 'Automatizovaný sběr poptávek na koupi, prodej nebo pronájem nemovitosti. Strukturovaná data z formuláře se okamžitě propisují do CRM.',
    features: [
      'Online formulář pro poptávku',
      'Validace vstupních dat',
      'Automatické předání do CRM',
      'Okamžité upozornění makléře',
    ],
    href: '/kontakt',
  },
  {
    icon: '🧮',
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
    icon: '⚙️',
    title: 'Automatizace na míru',
    description: 'Navrhujeme a realizujeme automatizace přesně podle vašich procesů.',
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
          <h1>Automatizace procesů</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            Ušetřete čas s inteligentními nástroji navázanými na váš core byznys.
          </p>
        </div>
      </section>
      
      {/* Banner */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1488229297570-58520851e868?w=1200&h=500&fit=crop&q=80"
              alt="Automatizace a technologie"
              width={1200}
              height={500}
              className="w-full rounded-xl border border-white/10"
            />
          </div>
        </div>
      </section>
      
      {/* Modules */}
      <section className="section pt-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <Card key={index} variant="glow">
                <div className="text-4xl mb-4">{module.icon}</div>
                <h3 className="font-heading text-xl text-white mb-2">{module.title}</h3>
                <p className="text-white/60 mb-4">{module.description}</p>
                
                {module.features.length > 0 && (
                  <ul className="space-y-1 mb-4">
                    {module.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-white/60 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-brand-gold before:font-bold"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                
                <Button variant="secondary" href={module.href}>Zjistit více</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Integration Image */}
      <section className="section bg-brand-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4">Propojené systémy</h2>
            <p className="text-lg text-white/70 mb-8">
              Naše automatizace propojují vaše nástroje do jednoho fungujícího ekosystému.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1000&h=600&fit=crop&q=80"
              alt="Systémová integrace"
              width={1000}
              height={600}
              className="w-full rounded-xl border border-white/10"
            />
          </div>
        </div>
      </section>
    </>
  );
}
