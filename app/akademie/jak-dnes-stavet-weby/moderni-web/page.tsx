import type { Metadata } from 'next';
import { ChapterLayout } from '@/components/features/ChapterLayout';

export const metadata: Metadata = {
  title: 'Moderní web | Akademie',
  description: 'Lead generative website - web jako aktivní poradce, ne leták.',
};

export default function Chapter9() {
  return (
    <ChapterLayout
      chapterNumber={9}
      totalChapters={10}
      title="Moderní web"
      subtitle="Lead generative website"
      duration="6 min"
      prevChapter={{ slug: 'optimalizace-pro-ai', title: 'Optimalizace pro AI' }}
      nextChapter={{ slug: 'model-pro-kancelare', title: 'Model pro kanceláře' }}
    >
      <h2>Nová generace webů</h2>
      
      <p>
        Tradiční web je jako leták – statický, pasivní, čeká, až si ho někdo přečte. 
        Moderní web je jiný.
      </p>

      <div className="highlight-box gold">
        <h3>Web jako aktivní poradce</h3>
        <p>
          Moderní web není statický katalog služeb. Je to interaktivní nástroj, 
          který s návštěvníkem pracuje, pomáhá mu a vede ho k řešení.
        </p>
      </div>

      <h2>Jak vypadá moderní web</h2>
      
      <p>Místo pasivního obsahu nabízí:</p>

      <h3>Chytré formuláře</h3>
      <p>
        Ne jen kontaktní formulář „napište nám". Ale formulář, který se ptá 
        na situaci klienta a na základě odpovědí nabízí relevantní informace.
      </p>

      <h3>Rozhodovací stromy</h3>
      <p>
        Interaktivní průvodce, který klientovi pomůže zorientovat se v možnostech. 
        „Jaký typ hypotéky je pro vás vhodný?" → série otázek → doporučení.
      </p>

      <h3>Personalizované odpovědi</h3>
      <p>
        Na základě toho, co klient vyplní nebo vybere, mu web ukáže obsah 
        relevantní přesně pro jeho situaci.
      </p>

      <h2>Příklady z praxe</h2>
      
      <p>Co už funguje v našich projektech:</p>

      <h3>Hypoteční analyzátory</h3>
      <p>
        Klient vyplní základní údaje o své situaci a dostane přehlednou analýzu 
        možností. Poradce pak má strukturovaný podklad pro konzultaci.
      </p>

      <h3>Poptávkové formuláře</h3>
      <p>
        Inteligentní formulář, který sbírá přesně ty informace, které potřebujete 
        pro první schůzku. Šetří čas vám i klientovi.
      </p>

      <h3>Náběr nemovitostí</h3>
      <p>
        Online formulář pro kompletní sběr dat o nemovitosti. Automatické vytvoření 
        podkladů, generování inzerátu, export dat.
      </p>

      <div className="key-point">
        <p>
          <strong>Klíčový posun:</strong> Web přestává být jen „o nás" a začíná být 
          „pro vás". Aktivně pomáhá, ne jen informuje.
        </p>
      </div>

      <h2>Proč to funguje</h2>
      
      <p>
        Lidé nechtějí číst stránky textu. Chtějí rychle zjistit, jestli jim 
        můžete pomoct a jak.
      </p>

      <p>
        Interaktivní nástroje jim dávají okamžitou hodnotu. A když dostanou 
        hodnotu, jsou mnohem ochotnější s vámi spolupracovat.
      </p>

      <p>
        Navíc – strukturovaná data z formulářů jsou cenná. Víte přesně, 
        co klient potřebuje, ještě před první schůzkou.
      </p>

      <h2>Co to znamená pro vás</h2>
      
      <p>
        Nemusíte hned předělávat celý web. Začněte jedním chytrým formulářem 
        nebo kalkulačkou. Uvidíte, jak klienti reagují, a můžete postupně přidávat.
      </p>
    </ChapterLayout>
  );
}
