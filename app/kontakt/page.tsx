import type { Metadata } from 'next';
import Image from 'next/image';
import { ContactForm } from './ContactForm';
import { Card } from '@/components/ui/Card';
import { siteConfig } from '@/config/site';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktujte ZFP Vendor - máme odpovědi na vaše otázky.',
};

export default function KontaktPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-brand-dark relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-custom text-center">
          <h1>Kontaktujte nás</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            Máte otázky nebo chcete konzultaci? Napište nám a my se vám ozveme do 24 hodin.
          </p>
        </div>
      </section>
      
      {/* Banner Image */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=400&fit=crop&q=80"
              alt="Kontaktujte nás"
              width={1200}
              height={400}
              className="w-full rounded-xl border border-white/10"
            />
          </div>
        </div>
      </section>
      
      {/* Contact Grid */}
      <section className="section pt-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card>
                <h3 className="font-heading text-xl text-white mb-6">Napište nám</h3>
                <ContactForm />
              </Card>
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <Card>
                <h3 className="font-heading text-xl text-white mb-6">Kontaktní informace</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-brand-gold">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm text-white mb-1">E-mail</h4>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-white/70 hover:text-brand-gold transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="text-brand-gold">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm text-white mb-1">Telefon</h4>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-white/70 hover:text-brand-gold transition-colors"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </a>
                      <p className="text-xs text-white/40 mt-1">Po–Pá: 9:00 – 17:00</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="text-brand-gold">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm text-white mb-1">Doba odezvy</h4>
                      <p className="text-white/70">Odpovídáme do 24 hodin</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-brand-darker rounded-lg border border-white/10">
                    <div className="flex gap-4">
                      <div className="text-brand-gold">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="font-heading text-sm text-brand-gold mb-1">Kde nás najdete</h4>
                        <p className="text-white/60 text-sm">
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
      
      {/* Team Image */}
      <section className="section bg-brand-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4">Jsme tu pro vás</h2>
            <p className="text-lg text-white/70 mb-8">
              Náš tým je připraven vám pomoci s jakýmkoliv dotazem nebo projektem.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&h=500&fit=crop&q=80"
              alt="Náš tým"
              width={1000}
              height={500}
              className="w-full rounded-xl border border-white/10"
            />
          </div>
        </div>
      </section>
    </>
  );
}
