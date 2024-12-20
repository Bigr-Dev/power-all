// components
import ContactSection from "@/components/ContactSection";
import Fabrication from "@/components/Fabrication";
import Hero from "@/components/Hero";
import Services from "@/components/Services";


const Home = async () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Services />
        <Fabrication />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
