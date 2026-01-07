import type { Metadata } from 'next';
import { ChapterLayout } from '@/components/features/ChapterLayout';

export const metadata: Metadata = {
  title: 'Klíčová slova a intent | Akademie',
  description: 'Klíčové slovo jako formulace problému klienta. Neřešíme objem, ale záměr.',
};

export default function Chapter4() {
  return (
    <ChapterLayout
      chapterNumber={4}
      totalChapters={10}
      title="Klíčová slova a intent"
      subtitle="Klíčové slovo = formulace problému"
      duration="6 min"
      prevChapter={{ slug: 'analyzy-a-data', title: 'Analýzy a sběr dat' }}
      nextChapter={{ slug: 'obsah-ktery-funguje', title: 'Obsah, který funguje' }}
    >
      <h2>Klíčová slova jinak</h2>
      
      <p>
        Zapomeňte na SEO tabulky plné čísel a objemů vyhledávání. Klíčové slovo 
        je jednoduše <strong>způsob, jakým klient formuluje svůj problém</strong>.
      </p>

      <div className="highlight-box gold">
        <h3>Neřešíme objem, ale záměr</h3>
        <p>
          Nezáleží na tom, kolik lidí něco hledá. Záleží na tom, co hledají 
          a v jaké fázi rozhodování jsou.
        </p>
      </div>

      <h2>Typy intentů</h2>
      
      <p>Každý dotaz má za sebou určitý záměr (intent). Rozlišujeme tři základní typy:</p>

      <h3>1. Informační intent</h3>
      <p>Klient se učí, zjišťuje, vzdělává se.</p>
      <ul>
        <li>„Jak funguje hypotéka"</li>
        <li>„Co je to fixace úrokové sazby"</li>
        <li>„Kdy se vyplatí refinancovat"</li>
      </ul>

      <h3>2. Rozhodovací intent</h3>
      <p>Klient porovnává, zvažuje možnosti.</p>
      <ul>
        <li>„Je pro mě lepší fixace 3 nebo 5 let"</li>
        <li>„Hypotéka vs. stavební spoření"</li>
        <li>„Výhody a nevýhody vlastního bydlení"</li>
      </ul>

      <h3>3. Akční intent</h3>
      <p>Klient je připraven jednat, hledá konkrétní řešení.</p>
      <ul>
        <li>„Hypoteční poradce Brno"</li>
        <li>„Nezávazná konzultace hypotéka"</li>
        <li>„Kalkulačka hypotéky online"</li>
      </ul>

      <div className="key-point">
        <p>
          Každý typ intentu vyžaduje jiný typ obsahu. Informační = vysvětlení. 
          Rozhodovací = porovnání. Akční = jasná cesta k řešení.
        </p>
      </div>

      <h2>Praktické cvičení</h2>
      
      <p>Vyberte si jednu službu, kterou nabízíte, a zkuste vymyslet:</p>
      
      <ul>
        <li>3 informační dotazy, které by klient mohl mít</li>
        <li>3 rozhodovací dotazy</li>
        <li>3 akční dotazy</li>
      </ul>

      <p>
        Z těchto 9 dotazů vám vznikne základní struktura obsahu pro danou službu. 
        Každý dotaz = potenciální stránka nebo sekce na webu.
      </p>

      <h2>Proč to funguje</h2>
      
      <p>
        Když strukturujete web podle intentů, automaticky pokrýváte celou 
        zákaznickou cestu. Od prvního zjišťování až po rozhodnutí. 
        A přesně to oceňují jak lidé, tak vyhledávače a AI.
      </p>
    </ChapterLayout>
  );
}
