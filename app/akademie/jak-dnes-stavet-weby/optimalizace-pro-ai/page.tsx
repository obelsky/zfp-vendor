import type { Metadata } from 'next';
import { ChapterLayout } from '@/components/features/ChapterLayout';

export const metadata: Metadata = {
  title: 'Optimalizace pro AI | Akademie',
  description: 'AIO a GEO v praxi - co skutečně děláme pro optimalizaci webů pro AI.',
};

export default function Chapter8() {
  return (
    <ChapterLayout
      chapterNumber={8}
      totalChapters={10}
      title="Optimalizace pro AI"
      subtitle="AIO a GEO v praxi"
      duration="7 min"
      prevChapter={{ slug: 'jak-ai-cte-weby', title: 'Jak AI čte weby' }}
      nextChapter={{ slug: 'moderni-web', title: 'Moderní web' }}
    >
      <h2>Co znamená AIO a GEO</h2>
      
      <p>
        <strong>AIO</strong> (AI Optimization) a <strong>GEO</strong> (Generative Engine Optimization) 
        jsou nové pojmy pro optimalizaci webů tak, aby je AI modely správně 
        pochopily a používaly.
      </p>

      <p>
        V praxi to ale není nic složitého. Je to o dodržování principů, 
        které jsme si už prošli.
      </p>

      <h2>Co skutečně děláme</h2>

      <h3>Stránky podle problémů, ne služeb</h3>
      <p>
        Místo obecné stránky „Hypotéky" vytváříme konkrétní stránky:
      </p>
      <ul>
        <li>„Hypotéka pro mladé do 35 let"</li>
        <li>„Refinancování hypotéky – kdy se vyplatí"</li>
        <li>„První hypotéka – průvodce krok za krokem"</li>
      </ul>
      <p>
        Každá stránka odpovídá na konkrétní problém nebo situaci.
      </p>

      <h3>Lokální ukotvení</h3>
      <p>
        Propojujeme obsah s konkrétním místem – městem, regionem. 
        AI modely pak vědí, že jste relevantní pro danou lokalitu.
      </p>
      <ul>
        <li>„Hypoteční poradce Brno"</li>
        <li>„Finanční poradenství Jihomoravský kraj"</li>
      </ul>

      <h3>Propojení webů v rámci skupiny</h3>
      <p>
        Weby v ZFP ekosystému na sebe navzájem odkazují. To vytváří síť 
        důvěryhodných zdrojů, kterou AI vnímá pozitivně.
      </p>

      <h3>Strukturovaná data</h3>
      <p>
        Technický detail, který řešíme za vás. Jde o speciální značky v kódu, 
        které říkají AI přesně, o čem stránka je – že jde o finanční službu, 
        kdo je autor, kde sídlíte atd.
      </p>

      <div className="key-point">
        <p>
          <strong>Co poradce pochopí:</strong> Když AI odpovídá na dotaz, vybírá 
          nejlépe vysvětlený názor, ne nejhezčí web. Jde o kvalitu obsahu, 
          ne o design.
        </p>
      </div>

      <h2>Proč na tom záleží</h2>
      
      <p>
        Stále více lidí používá AI asistenty místo klasického vyhledávání. 
        Ptají se ChatGPT, Gemini nebo Perplexity na doporučení, vysvětlení, 
        rady.
      </p>

      <p>
        Pokud váš web není optimalizovaný pro AI, v těchto odpovědích 
        prostě nebudete. A to je problém, který se bude v čase prohlubovat.
      </p>

      <h2>Dobrá zpráva</h2>
      
      <p>
        Pokud dodržujete principy, které jsme si prošli v předchozích kapitolách, 
        už děláte většinu práce. AIO/GEO není žádná magie – je to logické 
        pokračování dobrých praktik.
      </p>

      <ul>
        <li>Jasná struktura ✓</li>
        <li>Srozumitelný obsah ✓</li>
        <li>Odpovědi na konkrétní otázky ✓</li>
        <li>Důvěryhodnost (E-E-A-T) ✓</li>
      </ul>

      <p>Tohle všechno už umíte.</p>
    </ChapterLayout>
  );
}
