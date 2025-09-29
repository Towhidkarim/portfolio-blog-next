import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/layout/herosection';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
    </main>
  );
}
