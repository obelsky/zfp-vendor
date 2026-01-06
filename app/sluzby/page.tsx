import type { Metadata } from 'next';
import { ServicesContent } from './ServicesContent';

export const metadata: Metadata = {
  title: 'Katalog služeb',
  description: 'Kompletní katalog služeb ZFP Vendor - weby, marketing, automatizace pro makléře a poradce.',
};

export default function SluzbyPage() {
  return <ServicesContent />;
}
