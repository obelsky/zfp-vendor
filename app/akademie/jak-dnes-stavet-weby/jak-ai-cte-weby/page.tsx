import type { Metadata } from 'next';
import { ChapterLayout } from '@/components/features/ChapterLayout';

export const metadata: Metadata = {
  title: 'Jak AI čte weby | Akademie',
  description: 'Jak se data dostávají do AI modelů a co to znamená pro váš web.',
};

export default function Chapter7() {
  return (
    <ChapterLayout
      chapterNumber={7}
      totalChapters={10}
      title="Jak AI čte weby"
      subtitle="Jak se data dostávají do AI modelů"
      duration="6 min"
      prevChapter={{ slug: 'eeat-ymyl', title: 'E-E-A-T a YMYL' }}
      nextChapter={{ slug: 'optimalizace-pro-ai', title: 'Optimalizace pro AI' }}
    >
      <h2>AI nečte weby jako lidé</h2>
      
      <p>
        Člověk přijde na web, prohlédne si design, přečte nadpisy, prolétne text. 
        AI model funguje úplně jinak.
      </p>

      <div className="highlight-box gold">
        <h3>Co AI vnímá</h3>
        <ul>
          <li><strong>Strukturu</strong> – jak je obsah organizovaný</li>
          <li><strong>Srozumitelnost</strong> – jak jasně je téma vysvětlené</li>
          <li><strong>Konzistenci</strong> – jestli si informace neodporují</li>
          <li><strong>Opakování pravdivých vzorců</strong> – co se potvrzuje z více zdrojů</li>
        </ul>
      </div>

      <h2>Proto je důležité</h2>
      
      <h3>Jasné nadpisy</h3>
      <p>
        Nadpisy musí přesně říkat, co je v sekci pod nimi. Žádné hádanky, 
        chytré slovní hříčky nebo vágní formulace.
      </p>
      <ul>
        <li>❌ „Cesta k vašim snům"</li>
        <li>✓ „Jak funguje hypotéka na bydlení"</li>
      </ul>

      <h3>Logické členění</h3>
      <p>
        Obsah by měl mít jasnou hierarchii: hlavní téma → podtémata → detaily. 
        AI model tak snáze pochopí, o čem stránka je.
      </p>

      <h3>Odpovědi na konkrétní otázky</h3>
      <p>
        Každá sekce by měla odpovídat na konkrétní otázku, kterou by si mohl 
        položit klient. AI modely často hledají přesně takové odpovědi.
      </p>

      <h3>Konzistentní jazyk</h3>
      <p>
        Používejte stejné termíny pro stejné věci. Pokud jednou napíšete 
        „hypoteční úvěr" a podruhé „hypotéka", AI si musí domyslet, 
        že je to totéž.
      </p>

      <div className="key-point">
        <p>
          <strong>Výsledek:</strong> Když dodržíte tyto principy, AI vás může 
          citovat, doporučovat a používat jako zdroj při odpovídání na dotazy uživatelů.
        </p>
      </div>

      <h2>Co to znamená prakticky</h2>
      
      <p>
        Když se někdo zeptá ChatGPT „Jak funguje hypotéka?", model prohledá 
        své znalosti a vybere nejlépe strukturované a nejsrozumitelnější 
        vysvětlení.
      </p>

      <p>
        Pokud je váš web takto napsaný, máte šanci, že se vaše vysvětlení 
        stane součástí odpovědi. A to je úplně nový způsob, jak získávat 
        viditelnost a důvěryhodnost.
      </p>

      <h2>Není to složité</h2>
      
      <p>
        Všimněte si, že tyto principy nejsou technické. Jsou o tom, jak 
        <strong> jasně a logicky komunikovat</strong>. To je něco, co jako 
        poradci děláte každý den při práci s klienty.
      </p>

      <p>
        Stačí to přenést na web.
      </p>
    </ChapterLayout>
  );
}
