import type { Metadata } from 'next';
import { ChapterLayout } from '@/components/features/ChapterLayout';

export const metadata: Metadata = {
  title: 'Obsah, který funguje | Akademie',
  description: 'Jak píšeme obsah a struktura stránky, kterou milují AI modely i lidé.',
};

export default function Chapter5() {
  return (
    <ChapterLayout
      chapterNumber={5}
      totalChapters={10}
      title="Obsah, který funguje"
      subtitle="Ne marketing, ale hodnota"
      duration="7 min"
      prevChapter={{ slug: 'klicova-slova-intent', title: 'Klíčová slova a intent' }}
      nextChapter={{ slug: 'eeat-ymyl', title: 'E-E-A-T a YMYL' }}
    >
      <h2>Jak píšeme obsah</h2>
      
      <p>Tři základní principy, které dodržujeme:</p>

      <div className="highlight-box">
        <ul>
          <li><strong>Jednoduše</strong> – bez zbytečného žargonu a složitých vět</li>
          <li><strong>Vysvětlujeme</strong> – jako bychom mluvili s klientem na schůzce</li>
          <li><strong>Neprodáváme hned</strong> – nejdřív hodnota, pak nabídka</li>
        </ul>
      </div>

      <h2>Struktura každé stránky</h2>
      
      <p>
        Každá stránka by měla mít jasnou strukturu, která vede čtenáře od problému k řešení:
      </p>

      <h3>1. Co řeším</h3>
      <p>
        Jasně pojmenujte problém nebo situaci, kterou stránka řeší. 
        Klient musí hned vědět, že je na správném místě.
      </p>

      <h3>2. Pro koho to je / není</h3>
      <p>
        Buďte konkrétní. Řekněte, komu služba pomůže a komu ne. 
        Paradoxně – když řeknete, pro koho to není, zvýšíte důvěru.
      </p>

      <h3>3. Jak to funguje</h3>
      <p>
        Vysvětlete proces. Co se bude dít, jaké jsou kroky, co může klient očekávat.
      </p>

      <h3>4. Na co si dát pozor</h3>
      <p>
        Sdílejte tipy, upozornění, časté chyby. Ukažte, že máte zkušenosti 
        a chcete klientovi pomoct vyhnout se problémům.
      </p>

      <h3>5. Co uděláme společně</h3>
      <p>
        Teprve na konci nabídněte konkrétní řešení nebo další krok.
      </p>

      <div className="key-point">
        <p>
          <strong>Tento styl milují AI modely i lidé.</strong> Je logický, srozumitelný 
          a odpovídá na skutečné otázky. Přesně to, co vyhledávače a AI hledají.
        </p>
      </div>

      <h2>Proč neprodáváme hned</h2>
      
      <p>
        Tradiční marketing říká: prodávej všude, pořád, agresivně. My děláme opak.
      </p>

      <p>
        Když nejdřív poskytnete hodnotu – vysvětlíte, pomůžete, ukážete expertízu – 
        klient vám začne důvěřovat. A důvěra je v našem oboru to nejcennější.
      </p>

      <p>
        Navíc – obsah, který skutečně pomáhá, se šíří. Lidé ho sdílejí, 
        odkazují na něj, vracejí se k němu. A to je přesně to, co chceme.
      </p>

      <h2>Praktický tip</h2>
      
      <p>
        Při psaní si představte konkrétního klienta, kterého znáte. Pište tak, 
        jako byste mu vysvětlovali téma při kávě. Přirozeně, bez formálnosti, 
        ale s respektem k jeho času.
      </p>
    </ChapterLayout>
  );
}
