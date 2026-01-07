import type { Metadata } from 'next';
import { ChapterLayout } from '@/components/features/ChapterLayout';

export const metadata: Metadata = {
  title: 'Model pro kanceláře | Akademie',
  description: 'Replikovatelný systém - co si každá kancelář odnese a jak s tím pracovat.',
};

export default function Chapter10() {
  return (
    <ChapterLayout
      chapterNumber={10}
      totalChapters={10}
      title="Model pro kanceláře"
      subtitle="Replikovatelný systém"
      duration="5 min"
      prevChapter={{ slug: 'moderni-web', title: 'Moderní web' }}
      nextChapter={null}
    >
      <h2>Co si odnesete</h2>
      
      <p>
        Cílem tohoto workshopu nebylo naučit vás konkrétní nástroje nebo techniky. 
        Bylo to předat vám způsob myšlení, který můžete aplikovat opakovaně.
      </p>

      <div className="highlight-box gold">
        <h3>Každá kancelář si odnáší</h3>
        <ul>
          <li><strong>Mentální model</strong> – jak přemýšlet nad webem a obsahem</li>
          <li><strong>Strukturu webu</strong> – jak organizovat stránky podle intentů</li>
          <li><strong>Šablony stránek</strong> – jak strukturovat jednotlivé stránky</li>
          <li><strong>Logiku obsahu</strong> – jak psát tak, aby to fungovalo</li>
          <li><strong>Pochopení AI a SEO</strong> – co je důležité a proč</li>
        </ul>
      </div>

      <h2>Co NE</h2>
      
      <p>Záměrně jsme vynechali:</p>

      <h3>Žádný vendor lock-in</h3>
      <p>
        Principy, které jsme si prošli, fungují nezávisle na tom, jaký nástroj 
        nebo platformu používáte. Nejste závislí na konkrétním dodavateli.
      </p>

      <h3>Žádné složité nástroje</h3>
      <p>
        Nepotřebujete drahý software nebo speciální technické znalosti. 
        Vše, co jsme probrali, zvládnete s běžnými nástroji.
      </p>

      <h3>Žádné „magické sliby"</h3>
      <p>
        Neexistuje zkratka nebo trik, který by vám zajistil úspěch přes noc. 
        Existuje ale systematický přístup, který funguje dlouhodobě.
      </p>

      <h2>Jak pokračovat</h2>
      
      <p>Doporučený postup po tomto workshopu:</p>

      <h3>1. Audit současného webu</h3>
      <p>
        Projděte si svůj web optikou toho, co jsme probrali. Má jasnou strukturu? 
        Odpovídá na konkrétní otázky? Je tam E-E-A-T?
      </p>

      <h3>2. Seznam 10 otázek</h3>
      <p>
        Sepište 10 nejčastějších otázek vašich klientů. Máte na ně na webu 
        odpovědi? Pokud ne, máte plán, co doplnit.
      </p>

      <h3>3. Jedna stránka týdně</h3>
      <p>
        Nemusíte předělat celý web najednou. Přidejte každý týden jednu kvalitní 
        stránku podle principů, které jsme probrali.
      </p>

      <h3>4. Měřte a učte se</h3>
      <p>
        Sledujte, co funguje. Jaké stránky přivádějí návštěvníky? Které dotazy 
        se objevují? Upravujte podle toho.
      </p>

      <div className="key-point">
        <p>
          <strong>Klíčové je začít.</strong> Nemusí to být dokonalé. Důležité je 
          aplikovat principy a postupně zlepšovat.
        </p>
      </div>

      <h2>Závěrem</h2>
      
      <p>
        Způsob, jakým lidé hledají informace a jak se rozhodují, se mění. 
        AI modely se stávají součástí tohoto procesu.
      </p>

      <p>
        Ale základní principy zůstávají stejné: <strong>jasná komunikace, 
        hodnota pro klienta, důvěryhodnost</strong>. To jsou věci, které jako 
        poradci děláte každý den.
      </p>

      <p>
        Teď víte, jak je přenést na web tak, aby fungovaly pro lidi, 
        vyhledávače i AI.
      </p>

      <div className="highlight-box">
        <h3>Děkujeme za váš čas</h3>
        <p>
          Pokud máte otázky nebo potřebujete pomoct s implementací, 
          jsme tu pro vás. Ozvěte se přes kontaktní formulář.
        </p>
      </div>
    </ChapterLayout>
  );
}
