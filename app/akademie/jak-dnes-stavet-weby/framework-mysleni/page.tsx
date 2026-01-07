import type { Metadata } from 'next';
import { ChapterLayout } from '@/components/features/ChapterLayout';

export const metadata: Metadata = {
  title: 'Framework myšlení | Akademie',
  description: 'Jak přemýšlíme nad webovým projektem - stejný mentální model pro každý projekt.',
};

export default function Chapter2() {
  return (
    <ChapterLayout
      chapterNumber={2}
      totalChapters={10}
      title="Framework myšlení"
      subtitle="Jak přemýšlíme nad webovým projektem"
      duration="7 min"
      prevChapter={{ slug: 'zmena-paradigmatu', title: 'Změna paradigmatu' }}
      nextChapter={{ slug: 'analyzy-a-data', title: 'Analýzy a sběr dat' }}
    >
      <h2>Jeden model pro všechny projekty</h2>
      
      <p>
        Pro každý webový projekt používáme stejný mentální model. Není složitý, 
        ale je důsledný. Díky němu víme, na co se zaměřit a v jakém pořadí.
      </p>

      <div className="highlight-box gold">
        <h3>5 kroků frameworku</h3>
        <p>Kontext → Data → Struktura → Obsah → Distribuce</p>
      </div>

      <h2>1. Kontext</h2>
      
      <p>Než začneme cokoliv dělat, musíme si odpovědět na základní otázky:</p>
      
      <ul>
        <li><strong>Kdo jsem?</strong> – Jaká je moje specializace, zkušenosti, silné stránky</li>
        <li><strong>Pro koho jsem?</strong> – Kdo je můj ideální klient, co řeší</li>
        <li><strong>V jaké fázi rozhodování mě klient hledá?</strong> – Teprve zjišťuje, porovnává, nebo už je připraven jednat</li>
      </ul>

      <h2>2. Data</h2>
      
      <p>Nehádat, ale vědět. Data nám řeknou:</p>
      
      <ul>
        <li>Co lidé skutečně hledají</li>
        <li>Jakými slovy to hledají</li>
        <li>Co jim nikdo pořádně nevysvětlil</li>
      </ul>

      <h2>3. Struktura</h2>
      
      <p>
        Web dělíme podle <strong>intentů</strong>, ne podle interních oddělení nebo služeb. 
        Každá stránka odpovídá na konkrétní typ dotazu nebo problému.
      </p>

      <div className="key-point">
        <p>
          Člověk nehledá „služby", hledá řešení svého problému. Struktura webu musí 
          odpovídat tomu, jak lidé přemýšlejí.
        </p>
      </div>

      <h2>4. Obsah</h2>
      
      <p>
        Nepíšeme „texty". Píšeme <strong>odpovědi na otázky</strong>. Každá stránka 
        by měla zodpovědět konkrétní dotaz, který klient má.
      </p>

      <h2>5. Distribuce</h2>
      
      <p>Obsah musí být viditelný tam, kde jsou naši klienti:</p>
      
      <ul>
        <li><strong>Google</strong> – tradiční vyhledávání</li>
        <li><strong>AI</strong> – ChatGPT, Gemini, Perplexity a další</li>
        <li><strong>Interní sítě</strong> – ZFP ekosystém a propojené weby</li>
      </ul>

      <h2>Proč tento model funguje</h2>
      
      <p>
        Tento framework není revoluční. Je logický. Kopíruje způsob, jakým lidé 
        skutečně hledají informace a jak se rozhodují. A proto funguje – pro lidi, 
        pro vyhledávače i pro AI.
      </p>
    </ChapterLayout>
  );
}
