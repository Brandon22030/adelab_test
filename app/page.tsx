import Header from '../components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';
import Security from '@/components/sections/Security';
import Advantages from '@/components/sections/Advantages';
import NewsletterForm from '@/components/sections/NewsletterForm';

export default function Home() {
  return (
    <main className="bg-white">
        <Header />
      {/* <div className="px-4 md:px-6 lg:px-8 xl:px-12 2xl:mx-auto 2xl:max-w-7xl"> */}
        <Hero />
        <Mission />
        <Security />
        <Advantages />
        <NewsletterForm />
      {/* </div> */}
        <Footer />
    </main>
  );
}
