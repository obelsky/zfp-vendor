'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigation } from '@/config/site';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-brand-darker/95 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="ZFP GROUP"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <span className="font-heading text-xl text-brand-gold tracking-wide">
              Vendor
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative text-sm font-normal transition-colors duration-150',
                    isActive
                      ? 'text-brand-gold'
                      : 'text-white/70 hover:text-white'
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-gold to-brand-orange" />
                  )}
                </Link>
              );
            })}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-brand-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-20 bottom-0 bg-brand-dark/98 backdrop-blur-lg',
          'transition-all duration-300 transform',
          isMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <nav className="container-custom py-8">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block py-4 px-4 text-lg font-normal rounded-lg transition-all duration-150',
                      isActive
                        ? 'text-brand-gold bg-white/5'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
