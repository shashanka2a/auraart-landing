import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SpectrumFeatures from '@/components/SpectrumFeatures';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className="noise-overlay"></div>
      <Preloader />
      <Navigation />
      <Hero />
      <SpectrumFeatures />
      <Gallery />
      <Footer />
    </>
  );
}

