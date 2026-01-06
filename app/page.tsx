import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const features = [
  {
    icon: '🌐',
    title: 'Webové prezentace',
    description: 'Profesionální weby pro realitní makléře a finanční poradce optimalizované pro vyhledávače.',
  },
  {
    icon: '📈',
    title: 'Marketing & Reklama',
    description: 'Google Ads, Facebook kampaně, lead magnety pro získávání klientů.',
  },
  {
    icon: '⚡',
    title: 'Automatizace',
    description: 'Ušetřete čas s automatizovanými procesy pro náběr a správu dat.',
  },
  {
    icon: '🎯',
    title: 'Obsah & Média',
    description: 'Profesionální fotografie a videa zvyšující důvěru.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[150%] bg-[radial-gradient(circle,rgba(201,169,97,0.08)_0%,transparent_60%)] pointer-events-none" />
        
        {/* Gold line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="animate-fade-in">
              <h1 className="text-brand-gold mb-6">
                Růst začíná zde
              </h1>
              <p className="text-xl text-white/70 mb-8 max-w-xl">
                Interní platforma ZFP Vendor vám poskytuje vše potřebné pro profesionální prezentaci 
                a automatizaci vašeho byznysu. Od webů přes marketing až po pokročilé nástroje.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/sluzby">Prohlédnout služby</Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/proc-mit-web">Proč mít web</Link>
                </Button>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative animate-slide-up">
              <div className="absolute inset-[-2px] bg-gradient-to-br from-brand-gold to-brand-orange rounded-xl opacity-50 blur-sm" />
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=700&fit=crop&q=80"
                alt="Enterprise Dashboard"
                width={900}
                height={700}
                className="relative rounded-xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section bg-brand-dark">
        <div className="container-custom">
          <div className="section-header">
            <h2>Vytvořeno pro váš růst</h2>
            <p>Začni tam, kde jsi. Přidávej další služby, až budeš růst.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} variant="glow" className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-brand-gold/10 border border-white/10 flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-xl text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4">Technologie která funguje</h2>
            <p className="text-lg text-white/70 mb-8">
              Využíváme moderní technologie pro dodání spolehlivých řešení.
            </p>
            <div className="relative rounded-xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=600&fit=crop&q=80"
                alt="Technology"
                width={1000}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-brand-dark">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Připraveni začít?</h2>
            <p className="text-lg text-white/70 mb-8">
              Prohlédněte si katalog služeb a vyberte si, co potřebujete.
            </p>
            <Button asChild size="lg">
              <Link href="/sluzby">Zobrazit katalog služeb</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
