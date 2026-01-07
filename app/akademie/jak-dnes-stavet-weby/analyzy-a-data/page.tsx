import type { Metadata } from 'next';
import { ChapterLayout } from '@/components/features/ChapterLayout';

export const metadata: Metadata = {
  title: 'Analýzy a sběr dat | Akademie',
  description: 'Co skutečně používáme pro analýzu a co nepotřebujeme. Praktický přístup bez složité techniky.',
};

export default function Chapter3() {
  return (
    <ChapterLayout
      chapterNumber={3}
      totalChapters={10}
      title="Analýzy a sběr dat"
      subtitle="Bez složité techniky"
      duration="6 min"
      prevChapter={{ slug: 'framework-mysleni', title: 'Framework myšlení' }}
      nextChapter={{ slug: 'klicova-slova-intent', title: 'Klíčová slova a intent' }}
    >
      <h2>Co skutečně používáme</h2>
      
      <p>
        Pro kvalitní analýzu nepotřebujete drahé nástroje ani složité reporty. 
        Stačí vědět, kde hledat a jak informace vyhodnotit.
      </p>

      <div className="highlight-box">
        <h3>Naše hlavní zdroje dat</h3>
        <ul>
          <li><strong>Google vyhledávání</strong> – suggest (našeptávač), related searches (související vyhledávání)</li>
          <li><strong>Reálné dotazy klientů</strong> – co se vás ptají při schůzkách</li>
          <li><strong>Data z formulářů</strong> – jaké informace klienti vyplňují</li>
          <li><strong>Interní know-how</strong> – zkušenosti poradců z praxe</li>
        </ul>
      </div>

      <h2>Co nepotřebujeme</h2>
      
      <p>Záměrně nepoužíváme:</p>
      
      <ul>
        <li>Drahé analytické nástroje</li>
        <li>Složité SEO reporty plné čísel</li>
        <li>Technické triky a „tajné metody"</li>
      </ul>

      <div className="key-point">
        <p>
          Nejcennější data máte ve své praxi. Stačí je umět vytěžit a správně použít.
        </p>
      </div>

      <h2>Praktický výstup pro poradce</h2>
      
      <p>
        Po této kapitole byste měli umět odpovědět na dvě klíčové otázky:
      </p>

      <h3>„Na co se mě lidé ptají pořád dokola?"</h3>
      
      <p>
        Zamyslete se nad posledními 20 schůzkami. Jaké otázky se opakovaly? 
        Co klienty zajímá nejvíc? Kde mají největší nejistotu?
      </p>

      <h3>„Co jim nikdo pořádně nevysvětlil?"</h3>
      
      <p>
        Toto je zlatý důl pro váš obsah. Témata, která jsou důležitá, ale nikde 
        nejsou dobře vysvětlena. Právě tady můžete být autoritou.
      </p>

      <h2>Jak na to prakticky</h2>
      
      <p>Jednoduchý postup:</p>
      
      <ul>
        <li>Vezměte si papír a zapište 10 nejčastějších dotazů klientů</li>
        <li>Ke každému dotazu napište, jak obvykle odpovídáte</li>
        <li>Zkontrolujte, jestli máte tyto odpovědi na webu</li>
        <li>Pokud ne – máte jasný plán, co doplnit</li>
      </ul>

      <p>
        Tohle není složitá analýza. Je to zdravý rozum podpořený vaší zkušeností.
      </p>
    </ChapterLayout>
  );
}
