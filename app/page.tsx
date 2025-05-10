import Header from '../components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Mission />
      <Footer />

    </main>
  );
}
