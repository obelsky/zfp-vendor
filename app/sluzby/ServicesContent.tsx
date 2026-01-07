'use client';

import { useState, useMemo } from 'react';
import { Card, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';
import { 
  Globe, 
  Megaphone, 
  Zap, 
  FileText,
  Search,
  Home,
  Users,
  Calculator,
  BookOpen,
  Target
} from 'lucide-react';
import type { ServiceLevel, ServiceType } from '@/types';

interface Service {
  id: string;
  name: string;
  description: string;
  level: ServiceLevel;
  type: ServiceType;
  icon: typeof Globe;
  features: string[];
  isNew?: boolean;
}

const services: Service[] = [
  {
    id: '1',
    name: 'Web pro realitního makléře',
    description: 'Profesionální web optimalizovaný pro realitní byznys a SEO',
    level: 'zaklad',
    type: 'web',
    icon: Home,
    features: [
      'Web na vlastní doméně',
      'Optimalizace pro vyhledávače a AI',
      'Sekce: nemovitosti, náběr, hypotéky',
      'Responzivní design',
      'Průběžná podpora',
    ],
  },
  {
    id: '2',
    name: 'Web pro finančního poradce',
    description: 'Profesionální prezentace finančních služeb s E-E-A-T',
    level: 'zaklad',
    type: 'web',
    icon: Users,
    features: [
      'Web na vlastní doméně',
      'E-E-A-T optimalizace',
      'Sekce: pojištění, hypotéky, investice',
      'Responzivní design',
      'Průběžná podpora',
    ],
  },
  {
    id: '3',
    name: 'Property Matching',
    description: 'Nástroj pro párování nemovitostí s poptávkami klientů',
    level: 'pro',
    type: 'automatizace',
    icon: Target,
    isNew: true,
    features: [
      'Automatické párování nabídka/poptávka',
      'Notifikace při shodě',
      'Správa poptávek klientů',
      'Integrace s webem',
    ],
  },
  {
    id: '4',
    name: 'E-book jako lead magnet',
    description: 'Získávej nové kontakty automaticky',
    level: 'rust',
    type: 'marketing',
    icon: BookOpen,
    features: [
      'E-book na vybrané téma',
      'Landing page ke stažení',
      'Napojení na e-mailový nástroj',
      'Automatická sekvence',
    ],
  },
  {
    id: '5',
    name: 'Google Ads kampaň',
    description: 'Buď vidět ve chvíli, kdy tě klient hledá',
    level: 'rust',
    type: 'marketing',
    icon: Megaphone,
    features: [
      'Nastavení a spuštění kampaní',
      'Výběr klíčových slov',
      'Tvorba reklam',
      'Průběžná optimalizace',
      'Měsíční report',
    ],
  },
  {
    id: '6',
    name: 'Hypoteční analyzátor',
    description: 'Online nástroj pro analýzu hypoteční situace klienta',
    level: 'pro',
    type: 'automatizace',
    icon: Calculator,
    features: [
      'Online formulář pro klienty',
      'Strukturovaný výstup',
      'Podklad pro kalkulace',
      'Integrace s webem',
    ],
  },
  {
    id: '7',
    name: 'Náběr nemovitosti',
    description: 'Automatizovaný sběr dat při náběru nemovitosti',
    level: 'pro',
    type: 'automatizace',
    icon: FileText,
    features: [
      'Online formulář pro sběr dat',
      'Automatické vytvoření podkladů',
      'Generování inzerátu',
      'Export dat',
    ],
  },
  {
    id: '8',
    name: 'Automatizace na míru',
    description: 'Vlastní nástroj podle vašich procesů',
    level: 'pro',
    type: 'automatizace',
    icon: Zap,
    features: [
      'Analýza vašich procesů',
      'Návrh řešení',
      'Vývoj na míru',
      'Integrace a podpora',
    ],
  },
];

const levelLabels: Record<ServiceLevel, string> = {
  zaklad: 'Základ',
  rust: 'Růst',
  pro: 'Pro',
};

const typeLabels: Record<ServiceType, string> = {
  web: 'Web',
  marketing: 'Marketing',
  automatizace: 'Automatizace',
  obsah: 'Obsah',
};

export function ServicesContent() {
  const [activeLevel, setActiveLevel] = useState<ServiceLevel | 'vse'>('vse');
  const [activeType, setActiveType] = useState<ServiceType | 'vse'>('vse');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesLevel = activeLevel === 'vse' || service.level === activeLevel;
      const matchesType = activeType === 'vse' || service.type === activeType;
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesLevel && matchesType && matchesSearch;
    });
  }, [activeLevel, activeType, searchQuery]);
  
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-brand-dark relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-custom text-center">
          <h1>Katalog služeb</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            Komplexní řešení pro vaši digitální prezentaci. Vše na míru.
          </p>
        </div>
      </section>
      
      {/* Filters & Services */}
      <section className="section">
        <div className="container-custom">
          {/* Filters */}
          <Card className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {/* Level filter */}
              <div className="flex-1">
                <label className="block text-xs font-medium uppercase tracking-wider text-white/40 mb-2">
                  Úroveň
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['vse', 'zaklad', 'rust', 'pro'] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => setActiveLevel(level)}
                      className={cn(
                        'px-3 py-1.5 rounded-full text-sm transition-all duration-150 border',
                        activeLevel === level
                          ? 'bg-gradient-to-r from-brand-gold to-brand-orange text-brand-darker border-transparent'
                          : 'bg-transparent text-white/60 border-white/10 hover:border-brand-gold/50 hover:text-white'
                      )}
                    >
                      {level === 'vse' ? 'Vše' : levelLabels[level]}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Type filter */}
              <div className="flex-1">
                <label className="block text-xs font-medium uppercase tracking-wider text-white/40 mb-2">
                  Typ
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['vse', 'web', 'marketing', 'automatizace'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setActiveType(type)}
                      className={cn(
                        'px-3 py-1.5 rounded-full text-sm transition-all duration-150 border',
                        activeType === type
                          ? 'bg-gradient-to-r from-brand-gold to-brand-orange text-brand-darker border-transparent'
                          : 'bg-transparent text-white/60 border-white/10 hover:border-brand-gold/50 hover:text-white'
                      )}
                    >
                      {type === 'vse' ? 'Vše' : typeLabels[type]}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Search */}
              <div className="md:w-64">
                <label className="block text-xs font-medium uppercase tracking-wider text-white/40 mb-2">
                  Hledat
                </label>
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                  <Input
                    type="text"
                    placeholder="Název služby..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
            </div>
          </Card>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} variant="glow" className="flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className={cn(
                        'px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider',
                        service.level === 'zaklad' && 'bg-white/10 text-white/60',
                        service.level === 'rust' && 'bg-brand-gold/20 text-brand-gold',
                        service.level === 'pro' && 'bg-gradient-to-r from-brand-gold to-brand-orange text-brand-darker'
                      )}
                    >
                      {levelLabels[service.level]}
                    </span>
                    {service.isNew && (
                      <span className="px-2 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange text-xs">
                        Nové
                      </span>
                    )}
                  </div>
                  
                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-brand-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-white">
                        {service.name}
                      </h3>
                      <p className="text-white/50 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-1.5 mb-6 flex-grow">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-white/50 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-brand-gold/60 before:text-xs"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Price & CTA */}
                  <CardFooter className="mt-auto">
                    <div className="flex items-center justify-between">
                      <p className="font-heading text-lg text-brand-gold">
                        Individuálně
                      </p>
                      <Button size="sm" href="/kontakt">Zájem</Button>
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          
          {/* Empty state */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/50 mb-4">Žádné služby neodpovídají filtru.</p>
              <Button
                variant="secondary"
                onClick={() => {
                  setActiveLevel('vse');
                  setActiveType('vse');
                  setSearchQuery('');
                }}
              >
                Zrušit filtry
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
