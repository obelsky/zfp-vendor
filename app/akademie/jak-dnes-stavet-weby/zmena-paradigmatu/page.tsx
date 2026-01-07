import type { Metadata } from 'next';
import { ChapterLayout } from '@/components/features/ChapterLayout';

export const metadata: Metadata = {
  title: 'Změna paradigmatu | Akademie',
  description: 'Web už není vizitka, ale datový uzel. Neoptimalizujeme jen pro Google, ale i pro AI modely.',
};

export default function Chapter1() {
  return (
    <ChapterLayout
      chapterNumber={1}
      totalChapters={10}
      title="Změna paradigmatu"
      subtitle="Proč to celé děláme"
      duration="5 min"
      prevChapter={null}
      nextChapter={{ slug: 'framework-mysleni', title: 'Framework myšlení' }}
    >
      <h2>Co se změnilo</h2>
      
      <p>
        Způsob, jakým lidé hledají informace a jak se rozhodují, se zásadně proměnil. 
        A s ním i role webu v celém procesu.
      </p>

      <div className="highlight-box gold">
        <h3>Web už není vizitka, ale datový uzel</h3>
        <p>
          Dříve stačilo mít web jako digitální vizitku – kontakt, pár služeb, hotovo. 
          Dnes je web součástí komplexního ekosystému, kde data proudí mezi vyhledávači, 
          AI modely a uživateli.
        </p>
      </div>

      <h3>Neoptimalizujeme jen pro Google</h3>
      
      <p>
        Tradičně jsme weby stavěli s ohledem na to, jak je čte Google. To už nestačí. 
        Dnes musíme myslet i na to, jak web čtou AI modely jako ChatGPT, Gemini nebo Perplexity.
      </p>

      <h3>Odkud přichází klient</h3>
      
      <p>Klient už nepřichází jen z vyhledávače. Přichází:</p>
      
      <ul>
        <li>Z AI odpovědí – když se zeptá ChatGPT na hypoteční poradce</li>
        <li>Z doporučení – od kolegů, z recenzí, z diskuzí</li>
        <li>Z kontextu – lokalita, důvěryhodnost, autorita v oboru</li>
      </ul>

      <div className="key-point">
        <p>
          <strong>Hlavní myšlenka:</strong> Neučíme nástroje. Učíme způsob uvažování, 
          který funguje dlouhodobě.
        </p>
      </div>

      <h2>Co to znamená pro vás</h2>
      
      <p>
        Pokud chcete, aby váš web fungoval v tomto novém prostředí, musíte změnit 
        způsob, jakým o něm přemýšlíte. Nejde o technické detaily nebo „triky". 
        Jde o pochopení principů, které budou platit i za 5 let.
      </p>

      <p>
        V následujících kapitolách vám ukážeme konkrétní framework, který používáme 
        pro každý projekt. Je jednoduchý, praktický a hlavně – funguje.
      </p>
    </ChapterLayout>
  );
}
