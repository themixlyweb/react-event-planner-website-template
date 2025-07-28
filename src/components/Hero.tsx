import { Button } from "@/components/ui/button";
import LogoLight from "/logo-light.webp";
import HeroBG from "../assets/image/crafting-unforgettable-moments.webp";

const Hero = () => {
  /**
   * Smoothly scrolls to a section by its ID
   * @param sectionId - id of the target element
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
                 bg-gradient-to-br from-cream-50 via-blush-50 to-golden-50 pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroBG})` }}
        aria-hidden="true"
      />

      {/* Overlay to darken background for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true" />

      {/* Decorative animated circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blush-100 rounded-full opacity-40 animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-golden-100 rounded-full opacity-40 animate-pulse" aria-hidden="true" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-cream-200 rounded-full opacity-30 animate-pulse" aria-hidden="true" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src={LogoLight}
            alt="Eventory Logo"
            className="h-[60px] w-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-serif text-gray-200 mb-6 leading-tight">
          Crafting
          <span className="block text-blush-500 italic">Unforgettable</span>
          Moments
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          Where dreams meet reality through exquisite design, flawless execution, and timeless elegance
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-blush-500 hover:bg-blush-600 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Book Your Consultation"
          >
            Book Your Consultation
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("gallery")}
            className="border-2 border-golden-400 hover:text-golden-700 hover:bg-golden-50 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
            aria-label="View Our Portfolio"
          >
            View Our Portfolio
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-hidden="true"
        >
          <div className="w-6 h-10 border-2 border-blush-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blush-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
