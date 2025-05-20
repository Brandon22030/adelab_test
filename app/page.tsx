import Header from '../components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';
import Security from '@/components/sections/Security';
import Advantages from '@/components/sections/Advantages';
import NewsletterForm from '@/components/sections/NewsletterForm';

export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <div className="flex-1 w-full">
        <div className="w-full">
          <Hero />
          <Mission />
          <Security />
          <Advantages />
          <NewsletterForm />
        </div>
      </div>
      <Footer />
    </main>
  );
}
