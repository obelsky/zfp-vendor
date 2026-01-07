import Image from 'next/image';
import Link from 'next/link';
import { siteConfig, navigation } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/zfp_group_white.png"
                alt="ZFP GROUP"
                width={120}
                height={40}
                className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <span className="font-heading font-bold text-xl text-brand-gold tracking-wide">
                Vendor
              </span>
            </Link>
            <p className="text-white/50 text-sm max-w-md">
              Interní platforma ZFP pro profesionální prezentaci a automatizaci 
              vašeho byznysu. Od webů přes marketing až po pokročilé nástroje.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-heading text-white text-sm uppercase tracking-wider mb-4">
              Navigace
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-brand-gold text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-heading text-white text-sm uppercase tracking-wider mb-4">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white/50 hover:text-brand-gold transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-white/50 hover:text-brand-gold transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="text-white/50">
                {siteConfig.contact.location}
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} {siteConfig.company.name}. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/ochrana-udaju" className="text-white/40 hover:text-white/70 transition-colors">
              Ochrana údajů
            </Link>
            <Link href="/podminky" className="text-white/40 hover:text-white/70 transition-colors">
              Podmínky
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
