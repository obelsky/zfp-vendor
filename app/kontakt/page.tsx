import type { Metadata } from 'next';
import { ContactForm } from './ContactForm';
import { Card } from '@/components/ui/Card';
import { siteConfig } from '@/config/site';
import { Mail, Phone, Clock, MapPin, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktujte ZFP Vendor - konzultace zdarma.',
};

export default function KontaktPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-brand-dark relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm mb-6">
            <MessageSquare size={16} />
            <span>Spojte se s námi</span>
          </div>
          <h1>Kontakt</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            Máte otázky nebo chcete konzultaci? Napište nám a ozveme se do 24 hodin.
          </p>
        </div>
      </section>
      
      {/* Contact Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="p-8">
                <h3 className="font-heading text-xl text-white mb-6">Napište nám</h3>
                <ContactForm />
              </Card>
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h3 className="font-heading text-xl text-white mb-6">Kontaktní údaje</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-brand-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm text-white mb-1">E-mail</h4>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-white/60 hover:text-brand-gold transition-colors text-sm"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-brand-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm text-white mb-1">Telefon</h4>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-white/60 hover:text-brand-gold transition-colors text-sm"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-brand-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm text-white mb-1">Doba odezvy</h4>
                      <p className="text-white/60 text-sm">Do 24 hodin</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 mt-4 border-t border-white/10">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={18} className="text-brand-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-heading text-sm text-brand-gold mb-1">Lokace</h4>
                        <p className="text-white/50 text-sm">
                          {siteConfig.company.name}<br />
                          {siteConfig.contact.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
