import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Site Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero" aria-label="Hero Section">
        <Hero />
      </section>

      {/* About Us Section */}
      <section id="about" aria-label="About Section">
        <About />
      </section>

      {/* Portfolio Gallery Section */}
      <section id="gallery" aria-label="Gallery Section">
        <Gallery />
      </section>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default Index;
