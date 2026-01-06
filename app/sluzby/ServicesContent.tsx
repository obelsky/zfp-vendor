'use client';

import { useState, useMemo } from 'react';
import { Card, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { cn, formatPrice } from '@/lib/utils';
import type { Service, ServiceLevel, ServiceType } from '@/types';

// Services data
const services: Service[] = [
  {
    id: '1',
    name: 'Web pro realitního makléře',
    slug: 'web-makler',
    description: 'Optimalizovaný web pro realitní byznys',
    level: 'zaklad',
    type: 'web',
    price: 6950,
    priceType: 'yearly',
    priceNote: 'Doména a hosting nejsou v ceně',
    features: [
      'Web na vlastní doméně',
      'Texty zaměřené na realitní služby',
      'Optimalizace pro vyhledávače',
      'Sekce: nemovitosti, náběr, hypotéky',
      'Průběžná podpora a rozvoj',
    ],
  },
  {
    id: '2',
    name: 'Web pro finančního poradce',
    slug: 'web-poradce',
    description: 'Profesionální prezentace finančních služeb',
    level: 'zaklad',
    type: 'web',
    price: 6950,
    priceType: 'yearly',
    priceNote: 'Doména a hosting nejsou v ceně',
    features: [
      'Web na vlastní doméně',
      'Texty pro finanční poradenství',
      'Optimalizace pro vyhledávače',
      'Sekce: pojištění, hypotéky, investice',
      'Průběžná podpora a rozvoj',
    ],
  },
  {
    id: '3',
    name: 'E-book jako lead magnet',
    slug: 'ebook',
    description: 'Získávej nové kontakty automaticky',
    level: 'rust',
    type: 'marketing',
    price: 695,
    priceType: 'one-time',
    features: [
      'E-book na vybrané téma',
      'Landing page ke stažení',
      'Napojení na e-mailový nástroj',
    ],
  },
  {
    id: '4',
    name: 'Google Ads kampaň',
    slug: 'google-ads',
    description: 'Buď vidět ve chvíli, kdy tě klient hledá',
    level: 'rust',
    type: 'marketing',
    price: 1995,
    priceType: 'monthly',
    priceNote: 'Reklamní kredit: 5–15 000 Kč / měsíc',
    features: [
      'Nastavení a spuštění kampaní',
      'Výběr klíčových slov',
      'Tvorba reklam',
      'Průběžná optimalizace',
      'Měsíční report + konzultace',
    ],
  },
  {
    id: '5',
    name: 'Facebook / Meta Ads',
    slug: 'meta-ads',
    description: 'Zasáhni cílovou skupinu na sociálních sítích',
    level: 'rust',
    type: 'marketing',
    price: 1995,
    priceType: 'monthly',
    priceNote: 'Reklamní kredit: 5–15 000 Kč / měsíc',
    features: [
      'Nastavení a spuštění kampaní',
      'Targeting cílové skupiny',
      'Tvorba kreativ',
      'Optimalizace',
      'Měsíční report + konzultace',
    ],
  },
  {
    id: '6',
    name: 'Profesionální fotografie',
    slug: 'foto',
    description: 'Zvyš důvěru profesionální prezentací',
    level: 'zaklad',
    type: 'obsah',
    price: null,
    priceType: 'custom',
    priceNote: 'Cena dle rozsahu focení',
    features: [
      'Profesionální focení',
      'Úprava a retuš',
      'Více variant použití',
      'Digitální dodání',
    ],
  },
  {
    id: '7',
    name: 'Video prezentace',
    slug: 'video',
    description: 'Video zvyšuje konverzi a důvěru',
    level: 'pro',
    type: 'obsah',
    price: null,
    priceType: 'custom',
    priceNote: 'Cena dle rozsahu videa',
    features: [
      'Profesionální natáčení',
      'Střih a postprodukce',
      'Titulky a grafika',
      'Optimalizace pro web',
    ],
  },
  {
    id: '8',
    name: 'Náběr nemovitosti',
    slug: 'naber',
    description: 'Ušetři 2+ hodiny na každé nemovitosti',
    level: 'pro',
    type: 'automatizace',
    price: null,
    priceType: 'custom',
    priceNote: 'Zahrnuto v balíčku webu pro makléře',
    features: [
      'Online formulář pro sběr dat',
      'Automatické vytvoření podkladů',
      'Generování inzerátu',
      'Export dat',
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
  
  const getPriceDisplay = (service: Service) => {
    if (service.price === null) return 'Individuálně';
    const formatted = formatPrice(service.price);
    switch (service.priceType) {
      case 'yearly': return `${formatted} / rok`;
      case 'monthly': return `${formatted} / měsíc`;
      case 'one-time': return formatted;
      default: return formatted;
    }
  };
  
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-brand-dark relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-custom text-center">
          <h1>Katalog služeb</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            Začni tam, kde jsi. Přidávej další služby, až budeš růst.
          </p>
        </div>
      </section>
      
      {/* Filters & Services */}
      <section className="section">
        <div className="container-custom">
          {/* Filters */}
          <Card className="mb-8">
            <div className="space-y-4">
              {/* Level filter */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-white/50 mb-2">
                  Úroveň
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['vse', 'zaklad', 'rust', 'pro'] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => setActiveLevel(level)}
                      className={cn(
                        'px-4 py-2 rounded-full text-sm font-normal transition-all duration-150',
                        'border',
                        activeLevel === level
                          ? 'bg-gradient-to-r from-brand-gold to-brand-orange text-brand-darker border-transparent'
                          : 'bg-transparent text-white/70 border-white/10 hover:border-brand-gold hover:text-brand-gold'
                      )}
                    >
                      {level === 'vse' ? 'Vše' : levelLabels[level]}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Type filter */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-white/50 mb-2">
                  Typ služby
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['vse', 'web', 'marketing', 'automatizace', 'obsah'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setActiveType(type)}
                      className={cn(
                        'px-4 py-2 rounded-full text-sm font-normal transition-all duration-150',
                        'border',
                        activeType === type
                          ? 'bg-gradient-to-r from-brand-gold to-brand-orange text-brand-darker border-transparent'
                          : 'bg-transparent text-white/70 border-white/10 hover:border-brand-gold hover:text-brand-gold'
                      )}
                    >
                      {type === 'vse' ? 'Vše' : typeLabels[type]}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Search */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-white/50 mb-2">
                  Vyhledávání
                </label>
                <Input
                  type="text"
                  placeholder="Hledat podle názvu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="max-w-md"
                />
              </div>
            </div>
          </Card>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} variant="glow" className="flex flex-col">
                {/* Level badge */}
                <span
                  className={cn(
                    'inline-block w-fit px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-4',
                    service.level === 'zaklad' && 'bg-white/10 text-white/70',
                    service.level === 'rust' && 'bg-brand-gold/20 text-brand-gold',
                    service.level === 'pro' && 'bg-gradient-to-r from-brand-gold to-brand-orange text-brand-darker'
                  )}
                >
                  {levelLabels[service.level]}
                </span>
                
                {/* Title & Description */}
                <h3 className="font-heading text-xl text-white mb-1">
                  {service.name}
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex-grow mb-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-2">
                    Součást balíčku
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-white/60 pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-brand-gold before:font-bold"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Price & CTA */}
                <CardFooter>
                  <div className="mb-4">
                    <p className="font-heading text-2xl text-brand-gold">
                      {getPriceDisplay(service)}
                    </p>
                    {service.priceNote && (
                      <p className="text-xs text-white/40">{service.priceNote}</p>
                    )}
                  </div>
                  <Button className="w-full">Objednat</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Empty state */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/50">Žádné služby neodpovídají vašemu filtru.</p>
              <Button
                variant="secondary"
                className="mt-4"
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
