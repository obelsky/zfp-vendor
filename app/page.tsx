import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { 
  Globe, 
  TrendingUp, 
  Zap, 
  Users,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Building2,
  FileText,
  Target
} from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Webové prezentace',
    description: 'Profesionální weby pro realitní makléře a finanční poradce optimalizované pro vyhledávače i AI.',
  },
  {
    icon: Target,
    title: 'Lead generation',
    description: 'Chytré formuláře, analyzátory a nástroje pro automatický sběr a kvalifikaci leadů.',
  },
  {
    icon: Zap,
    title: 'Automatizace',
    description: 'Ušetřete čas s automatizovanými procesy pro náběr, poptávky a správu dat.',
  },
  {
    icon: TrendingUp,
    title: 'Moderní nástroje',
    description: 'Property matching, hypoteční analyzátory a další nástroje na míru.',
  },
];

const showcaseProjects = [
  {
    title: 'ZFP Břeclav',
    description: 'Moderní web pro finanční poradce s E-E-A-T optimalizací',
    url: 'https://www.zfpbreclav.cz/',
    type: 'Web pro poradce',
  },
  {
    title: 'Property Matching',
    description: 'Nástroj pro párování nemovitostí s poptávkami klientů',
    url: 'https://property-matching-omega.vercel.app/',
    type: 'Lead generative tool',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[150%] bg-[radial-gradient(circle,rgba(201,169,97,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm mb-6">
              <Sparkles size={16} />
              <span>Interní platforma ZFP</span>
            </div>
            <h1 className="text-brand-gold mb-6">
              Nástroje pro růst vašeho byznysu
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Profesionální weby, lead generation nástroje a automatizace 
              pro finanční poradce a realitní makléře. Od konceptu po realizaci.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/sluzby">
                Katalog služeb
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="secondary" href="/akademie">
                Akademie
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section bg-brand-dark">
        <div className="container-custom">
          <div className="section-header">
            <h2>Co nabízíme</h2>
            <p>Komplexní řešení pro vaši digitální prezentaci a automatizaci procesů.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} variant="glow" className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-brand-gold/10 border border-white/10 flex items-center justify-center">
                    <Icon size={24} className="text-brand-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Showcase Projects */}
      <section className="section">
        <div className="container-custom">
          <div className="section-header">
            <h2>Realizované projekty</h2>
            <p>Ukázky toho, co umíme. Moderní weby a nástroje v praxi.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {showcaseProjects.map((project, index) => (
              <a 
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="h-full hover:border-brand-gold transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-medium">
                      {project.type}
                    </span>
                    <ExternalLink size={16} className="text-white/30 group-hover:text-brand-gold transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl text-white mb-2 group-hover:text-brand-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {project.description}
                  </p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-brand-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-8">
                <Building2 size={32} className="mx-auto mb-4 text-brand-gold" strokeWidth={1.5} />
                <h3 className="font-heading text-lg text-white mb-2">Pro makléře</h3>
                <p className="text-white/60 text-sm mb-4">
                  Weby, náběrové formuláře, property matching
                </p>
                <Button variant="secondary" href="/sluzby" size="sm">
                  Více
                </Button>
              </Card>
              
              <Card className="text-center p-8">
                <Users size={32} className="mx-auto mb-4 text-brand-gold" strokeWidth={1.5} />
                <h3 className="font-heading text-lg text-white mb-2">Pro poradce</h3>
                <p className="text-white/60 text-sm mb-4">
                  Weby, hypoteční analyzátory, lead magnety
                </p>
                <Button variant="secondary" href="/sluzby" size="sm">
                  Více
                </Button>
              </Card>
              
              <Card className="text-center p-8">
                <FileText size={32} className="mx-auto mb-4 text-brand-gold" strokeWidth={1.5} />
                <h3 className="font-heading text-lg text-white mb-2">Akademie</h3>
                <p className="text-white/60 text-sm mb-4">
                  Know-how pro moderní weby a AI
                </p>
                <Button variant="secondary" href="/akademie" size="sm">
                  Více
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section">
        <div className="container-custom">
          <Card className="max-w-2xl mx-auto text-center p-12 bg-gradient-to-br from-brand-gold/5 to-brand-orange/5 border-brand-gold/20">
            <h2 className="text-2xl mb-4">Chcete posunout svůj byznys?</h2>
            <p className="text-white/70 mb-6">
              Konzultace zdarma. Probereme vaše potřeby a navrhneme řešení.
            </p>
            <Button href="/kontakt" size="lg">
              Kontaktujte nás
            </Button>
          </Card>
        </div>
      </section>
    </>
  );
}
