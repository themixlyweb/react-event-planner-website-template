import AboutImage from "../assets/image/creating-magic-in-every-detail.webp";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={AboutImage}
                alt="Creating Magic in Every Detail | Eventory"
                className="w-full object-cover"
                loading="lazy" // Optimize image loading
              />
              {/* Gradient overlay on the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-blush-900/20 to-transparent" />
            </div>

            {/* Decorative Circles behind the image */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-golden-100 rounded-full opacity-60 -z-10" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blush-100 rounded-full opacity-60 -z-10" />
          </div>

          {/* Content Section */}
          <div className="animate-fade-in-up">
            {/* Heading */}
            <header className="mb-6">
              <span className="text-sm font-medium text-blush-500 tracking-wide uppercase">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mt-2 mb-6">
                Creating Magic in
                <span className="text-golden-600 italic block">Every Detail</span>
              </h2>
            </header>

            {/* Description paragraphs */}
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                With over a decade of experience curating extraordinary celebrations,
                we believe that every event tells a unique story. Our passion lies in
                transforming your vision into a breathtaking reality that exceeds expectations.
              </p>
              <p>
                From intimate gatherings to grand celebrations, we approach each event
                with meticulous attention to detail, creative flair, and an unwavering
                commitment to excellence.
              </p>
              <p>
                Whether it's an intimate gathering or a grand celebration, we infuse every
                event with creativity, precision, and a commitment to making your vision
                come to life seamlessly.
              </p>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              {/* Events Planned */}
              <div className="text-center">
                <div className="text-3xl font-serif text-blush-500 mb-2">500+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Events Planned</div>
              </div>

              {/* Years Experience */}
              <div className="text-center">
                <div className="text-3xl font-serif text-golden-500 mb-2">10+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Years Experience</div>
              </div>

              {/* Client Satisfaction */}
              <div className="text-center">
                <div className="text-3xl font-serif text-cream-600 mb-2">98%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
