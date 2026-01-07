export const siteConfig = {
  name: 'ZFP Vendor',
  description: 'Interní platforma ZFP pro profesionální prezentaci a automatizaci byznysu',
  url: 'https://zfpvendor.cz',
  ogImage: '/og-image.jpg',
  
  contact: {
    email: 'o.belsky@zfpakademie.cz',
    phone: '+420 739 677 452',
    phoneDisplay: '739 677 452',
    location: 'Břeclav, Česká republika',
  },
  
  company: {
    name: 'ZFP Group',
    legalName: 'ZFP GROUP a.s.',
  },
  
  social: {
    facebook: 'https://facebook.com/zfpgroup',
    linkedin: 'https://linkedin.com/company/zfpgroup',
    instagram: 'https://instagram.com/zfpgroup',
  },
  
  auth: {
    password: 'vendorpartner',
    sessionKey: 'zfp_vendor_auth',
  },
} as const;

export const navigation = [
  { name: 'Domů', href: '/' },
  { name: 'Proč mít web', href: '/proc-mit-web' },
  { name: 'Služby', href: '/sluzby' },
  { name: 'Automatizace', href: '/automatizace' },
  { name: 'Akademie', href: '/akademie' },
  { name: 'Kontakt', href: '/kontakt' },
] as const;

export type NavigationItem = (typeof navigation)[number];
