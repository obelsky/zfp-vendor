import type { Metadata } from 'next';
import { ChapterLayout } from '@/components/features/ChapterLayout';

export const metadata: Metadata = {
  title: 'E-E-A-T a YMYL | Akademie',
  description: 'Co znamená E-E-A-T a YMYL pro finanční poradce - laicky a prakticky.',
};

export default function Chapter6() {
  return (
    <ChapterLayout
      chapterNumber={6}
      totalChapters={10}
      title="E-E-A-T a YMYL"
      subtitle="Laicky a prakticky"
      duration="8 min"
      prevChapter={{ slug: 'obsah-ktery-funguje', title: 'Obsah, který funguje' }}
      nextChapter={{ slug: 'jak-ai-cte-weby', title: 'Jak AI čte weby' }}
    >
      <h2>Co je YMYL</h2>
      
      <p>
        YMYL znamená <strong>„Your Money or Your Life"</strong> – tedy témata, 
        která mohou významně ovlivnit finance, zdraví nebo bezpečnost člověka.
      </p>

      <div className="highlight-box gold">
        <h3>Finance = vysoká odpovědnost</h3>
        <p>
          Finanční poradenství patří přesně do této kategorie. Google i AI modely 
          jsou u těchto témat <strong>extrémně opatrní</strong> a kladou vysoké 
          nároky na důvěryhodnost zdrojů.
        </p>
      </div>

      <p>
        Proto nestačí mít hezký web. Musíte aktivně prokazovat, že jste 
        důvěryhodný zdroj informací.
      </p>

      <h2>Co je E-E-A-T</h2>
      
      <p>
        E-E-A-T je framework, podle kterého Google (a podobně i AI modely) 
        hodnotí důvěryhodnost obsahu. Zkratka znamená:
      </p>

      <h3>Experience – Zkušenost</h3>
      <p>
        Máte reálné zkušenosti s tím, o čem píšete? Děláte to v praxi? 
        Pro vás jako poradce – ano, děláte to každý den.
      </p>
      <ul>
        <li>Zmiňujte konkrétní situace z praxe</li>
        <li>Sdílejte, co jste se naučili od klientů</li>
        <li>Ukazujte reálné příklady (anonymizované)</li>
      </ul>

      <h3>Expertise – Odbornost</h3>
      <p>
        Rozumíte tématu do hloubky? Máte potřebné vzdělání a certifikace?
      </p>
      <ul>
        <li>Uveďte své certifikáty a vzdělání</li>
        <li>Vysvětlujte komplexní témata srozumitelně</li>
        <li>Ukažte, že víte víc než průměrný člověk</li>
      </ul>

      <h3>Authoritativeness – Autorita</h3>
      <p>
        Jste v oboru uznávaný? Odkazují na vás ostatní? Jste dohledatelný?
      </p>
      <ul>
        <li>Budujte si profil na profesních sítích</li>
        <li>Sbírejte reference a recenze</li>
        <li>Propojte web s dalšími důvěryhodnými zdroji</li>
      </ul>

      <h3>Trustworthiness – Důvěryhodnost</h3>
      <p>
        Lze vám věřit? Je váš web bezpečný? Jsou informace transparentní?
      </p>
      <ul>
        <li>HTTPS je samozřejmost</li>
        <li>Jasné kontaktní údaje</li>
        <li>Transparentní informace o sobě a firmě</li>
      </ul>

      <div className="key-point">
        <p>
          <strong>Co to znamená pro poradce:</strong> Na webu musí být vaše jméno, 
          fotka, lokální kontext, transparentní informace a reálné příklady z praxe.
        </p>
      </div>

      <h2>Jak na to prakticky</h2>
      
      <p>Konkrétní kroky, které můžete udělat hned:</p>
      
      <ul>
        <li>Přidejte na web svou profesionální fotografii</li>
        <li>Napište o sobě – kdo jste, jak dlouho děláte, proč</li>
        <li>Uveďte certifikáty a vzdělání</li>
        <li>Přidejte reference od spokojených klientů</li>
        <li>Uveďte jasný kontakt a lokalitu</li>
        <li>V obsahu zmiňujte konkrétní příklady z praxe</li>
      </ul>

      <p>
        Tohle není složité. Je to o tom ukázat, že za webem stojí skutečný člověk 
        se skutečnými zkušenostmi.
      </p>
    </ChapterLayout>
  );
}
