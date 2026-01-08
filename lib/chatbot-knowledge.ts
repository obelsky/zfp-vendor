// Knowledge base pro chatbota - obsah webu a navigace

export interface KnowledgeItem {
  keywords: string[];
  answer: string;
  link?: string;
  linkText?: string;
}

export const knowledgeBase: KnowledgeItem[] = [
  // Weby
  {
    keywords: ['web', 'stránky', 'stránka', 'website', 'prezentace', 'online'],
    answer: 'Vytváříme profesionální weby pro finanční poradce a realitní makléře. Každý web je optimalizovaný pro vyhledávače i AI, s důrazem na E-E-A-T a moderní design.',
    link: '/sluzby',
    linkText: 'Zobrazit služby',
  },
  {
    keywords: ['web poradce', 'web pro poradce', 'finanční poradce web', 'poradce'],
    answer: 'Web pro finančního poradce zahrnuje profesionální prezentaci vašich služeb, E-E-A-T optimalizaci, sekce pro pojištění, hypotéky a investice. Vše s responzivním designem a průběžnou podporou.',
    link: '/sluzby',
    linkText: 'Více o webech pro poradce',
  },
  {
    keywords: ['web makléř', 'realitní makléř', 'makléř web', 'reality web'],
    answer: 'Web pro realitního makléře je optimalizovaný pro realitní byznys a SEO. Obsahuje sekce pro nemovitosti, náběr a hypotéky. Samozřejmostí je responzivní design a podpora.',
    link: '/sluzby',
    linkText: 'Více o webech pro makléře',
  },
  
  // Služby obecně
  {
    keywords: ['služby', 'nabídka', 'ceník', 'cena', 'co nabízíte', 'co děláte'],
    answer: 'Nabízíme komplexní služby: weby pro poradce a makléře, lead generation nástroje, automatizace procesů a marketing. Všechny ceny jsou individuální podle rozsahu projektu.',
    link: '/sluzby',
    linkText: 'Katalog služeb',
  },
  {
    keywords: ['cena', 'kolik stojí', 'ceník', 'kolik', 'ceny'],
    answer: 'Ceny všech našich služeb jsou individuální a závisí na rozsahu projektu. Rádi vám připravíme nezávaznou nabídku na míru.',
    link: '/kontakt',
    linkText: 'Nezávazná konzultace',
  },
  
  // Property Matching
  {
    keywords: ['property matching', 'párování', 'matching', 'nemovitosti párování'],
    answer: 'Property Matching je náš nástroj pro automatické párování nemovitostí s poptávkami klientů. Systém vás upozorní při shodě a zjednodušuje správu poptávek.',
    link: '/sluzby',
    linkText: 'Více o Property Matching',
  },
  
  // Automatizace
  {
    keywords: ['automatizace', 'automat', 'proces', 'workflow', 'zjednodušit'],
    answer: 'Automatizujeme vaše procesy - od náběru nemovitostí přes poptávkové formuláře až po hypoteční analyzátory. Ušetříme vám čas a zefektivníme práci.',
    link: '/automatizace',
    linkText: 'Více o automatizaci',
  },
  {
    keywords: ['náběr', 'náběr nemovitosti', 'sběr dat'],
    answer: 'Náběr nemovitosti je online formulář pro kompletní sběr dat. Automaticky vytvoří podklady, vygeneruje inzerát a exportuje data do vašeho systému.',
    link: '/automatizace',
    linkText: 'Více o automatizaci',
  },
  {
    keywords: ['hypoteční', 'hypotéka', 'analyzátor', 'kalkulačka'],
    answer: 'Hypoteční analyzátor je online nástroj pro rychlou analýzu hypoteční situace klienta. Poskytuje strukturovaný výstup jako podklad pro vaše kalkulace.',
    link: '/automatizace',
    linkText: 'Více o automatizaci',
  },
  
  // Marketing
  {
    keywords: ['marketing', 'reklama', 'google ads', 'facebook', 'kampaň'],
    answer: 'Spravujeme Google Ads a Facebook kampaně pro finanční poradce a makléře. Zajišťujeme nastavení, optimalizaci a měsíční reporty.',
    link: '/sluzby',
    linkText: 'Marketing služby',
  },
  {
    keywords: ['ebook', 'e-book', 'lead magnet', 'magnety'],
    answer: 'E-book jako lead magnet vám pomůže získávat nové kontakty automaticky. Vytvoříme e-book, landing page a napojíme ho na váš e-mailový nástroj.',
    link: '/sluzby',
    linkText: 'Více o lead magnetech',
  },
  
  // Akademie
  {
    keywords: ['akademie', 'vzdělávání', 'školení', 'kurz', 'workshop', 'učit'],
    answer: 'V Akademii najdete kurátorované know-how z reálných projektů. Naučíte se způsob přemýšlení o webech, který funguje pro lidi, vyhledávače i AI.',
    link: '/akademie',
    linkText: 'Přejít do Akademie',
  },
  {
    keywords: ['seo', 'optimalizace', 'vyhledávač', 'google'],
    answer: 'Všechny naše weby jsou optimalizované pro vyhledávače. V Akademii se dozvíte více o moderním přístupu k SEO a optimalizaci pro AI.',
    link: '/akademie',
    linkText: 'Akademie - SEO a AI',
  },
  {
    keywords: ['ai', 'umělá inteligence', 'chatgpt', 'aio'],
    answer: 'Optimalizujeme weby nejen pro Google, ale i pro AI modely. V Akademii vysvětlujeme, jak AI čte weby a jak toho využít.',
    link: '/akademie',
    linkText: 'Akademie - Optimalizace pro AI',
  },
  {
    keywords: ['eeat', 'e-e-a-t', 'ymyl', 'důvěryhodnost'],
    answer: 'E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) je klíčový pro finanční a realitní weby. Pomáháme vám budovat důvěryhodnost online.',
    link: '/proc-mit-web',
    linkText: 'Více o E-E-A-T',
  },
  
  // Proč mít web
  {
    keywords: ['proč web', 'potřebuji web', 'výhody webu', 'proč mít'],
    answer: 'Moderní web je víc než vizitka - je to nástroj pro budování důvěry a získávání klientů. Vysvětlujeme, proč je strukturovaný web lepší než single page.',
    link: '/proc-mit-web',
    linkText: 'Proč mít profesionální web',
  },
  
  // Reference / Ukázky
  {
    keywords: ['ukázka', 'reference', 'příklad', 'portfolio', 'realizace'],
    answer: 'Máme realizované projekty jako ZFP Břeclav (web pro poradce) a Property Matching (nástroj pro párování nemovitostí). Rádi vám ukážeme více.',
    link: '/kontakt',
    linkText: 'Chci vidět více',
  },
  {
    keywords: ['zfp břeclav', 'břeclav'],
    answer: 'ZFP Břeclav je ukázka moderního webu pro finanční poradce s E-E-A-T optimalizací. Podívejte se na www.zfpbreclav.cz.',
    link: '/kontakt',
    linkText: 'Chci podobný web',
  },
  
  // Kontakt
  {
    keywords: ['kontakt', 'spojit', 'napsat', 'zavolat', 'telefon', 'email', 'schůzka'],
    answer: 'Můžete mě kontaktovat na o.belsky@zfpakademie.cz nebo 739 677 452. Rád s vámi proberu vaše potřeby a navrhnu řešení.',
    link: '/kontakt',
    linkText: 'Kontaktní formulář',
  },
  {
    keywords: ['ondřej', 'bělský', 'kdo za tím stojí', 'kdo jste'],
    answer: 'Za ZFP Vendor stojí Ondřej Bělský. Specializuji se na weby a digitální nástroje pro finanční poradce a realitní makléře.',
    link: '/kontakt',
    linkText: 'Kontaktovat Ondřeje',
  },
  
  // Obecné
  {
    keywords: ['ahoj', 'dobrý den', 'čau', 'zdravím', 'nazdar'],
    answer: 'Dobrý den! 👋 Jsem váš virtuální asistent. Pomohu vám zorientovat se v našich službách. Na co se chcete zeptat?',
  },
  {
    keywords: ['děkuji', 'díky', 'dík', 'thanks'],
    answer: 'Rádo se stalo! Pokud budete mít další otázky, jsem tu pro vás.',
  },
  {
    keywords: ['ano', 'jasně', 'ok', 'dobře'],
    answer: 'Super! Můžete se zeptat na cokoliv ohledně našich služeb, nebo přejít rovnou na stránku, která vás zajímá.',
  },
];

// Fallback odpověď
export const fallbackResponse: KnowledgeItem = {
  keywords: [],
  answer: 'Na tuto otázku nemám přesnou odpověď. Doporučuji kontaktovat Ondřeje Bělského, který vám rád pomůže osobně.',
  link: '/kontakt',
  linkText: 'Kontaktovat Ondřeje',
};

// Uvítací zpráva
export const welcomeMessage = {
  answer: 'Dobrý den! 👋 Jsem váš virtuální asistent. Pomohu vám najít informace o našich službách. Na co se chcete zeptat?',
  suggestions: [
    'Web pro poradce',
    'Automatizace',
    'Ceník služeb',
    'Akademie',
  ],
};
