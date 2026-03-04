import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { ManagedServices } from './components/ManagedServices';
import { TechStack } from './components/TechStack';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="size-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <ManagedServices />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}