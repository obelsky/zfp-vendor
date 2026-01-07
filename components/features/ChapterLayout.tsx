import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowLeft, ArrowRight, BookOpen, Clock } from 'lucide-react';

interface ChapterLayoutProps {
  chapterNumber: number;
  totalChapters: number;
  title: string;
  subtitle: string;
  duration: string;
  prevChapter?: { slug: string; title: string } | null;
  nextChapter?: { slug: string; title: string } | null;
  children: React.ReactNode;
}

export function ChapterLayout({
  chapterNumber,
  totalChapters,
  title,
  subtitle,
  duration,
  prevChapter,
  nextChapter,
  children,
}: ChapterLayoutProps) {
  const basePath = '/akademie/jak-dnes-stavet-weby';

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 bg-brand-dark relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-custom">
          <Link
            href={basePath}
            className="inline-flex items-center gap-2 text-white/50 hover:text-brand-gold transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            <span>Zpět na přehled</span>
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm">
                Kapitola {chapterNumber} z {totalChapters}
              </span>
              <span className="flex items-center gap-1 text-white/40 text-sm">
                <Clock size={14} />
                {duration}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl mb-2">{title}</h1>
            <p className="text-lg text-white/60">{subtitle}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section pt-12">
        <div className="container-custom">
          <article className="max-w-3xl mx-auto prose-custom">
            {children}
          </article>
        </div>
      </section>

      {/* Navigation */}
      <section className="section pt-8 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="h-px bg-white/10 mb-8" />
            
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {prevChapter ? (
                <Link
                  href={`${basePath}/${prevChapter.slug}`}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-brand-gold/50 transition-colors"
                >
                  <ArrowLeft size={20} className="text-white/40 group-hover:text-brand-gold transition-colors" />
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">Předchozí</p>
                    <p className="text-white group-hover:text-brand-gold transition-colors">{prevChapter.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextChapter ? (
                <Link
                  href={`${basePath}/${nextChapter.slug}`}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-brand-gold/50 transition-colors text-right sm:ml-auto"
                >
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">Další</p>
                    <p className="text-white group-hover:text-brand-gold transition-colors">{nextChapter.title}</p>
                  </div>
                  <ArrowRight size={20} className="text-white/40 group-hover:text-brand-gold transition-colors" />
                </Link>
              ) : (
                <Link
                  href={basePath}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-brand-gold/10 border border-brand-gold/30 hover:bg-brand-gold/20 transition-colors text-right sm:ml-auto"
                >
                  <div>
                    <p className="text-xs text-brand-gold/70 uppercase tracking-wider">Dokončeno!</p>
                    <p className="text-brand-gold">Zpět na přehled workshopu</p>
                  </div>
                  <BookOpen size={20} className="text-brand-gold" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
