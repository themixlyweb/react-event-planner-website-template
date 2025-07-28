import Wedding from "../assets/image/elegant-wedding-setup.png";
import Corporate from "../assets/image/corporate-event.webp";
import Social from "../assets/image/birthday-celebration.webp";
import Destination from "../assets/image/destination-wedding.webp";
import BehindtheScenes from "../assets/image/event-planning-session.webp";
import Reception from "../assets/image/luxury-reception.webp";

const Gallery = () => {
  // Define gallery images with their properties (url, alt text, and category)
  const images = [
    { url: Wedding, alt: "Elegant wedding setup", category: "Wedding" },
    { url: Corporate, alt: "Corporate event", category: "Corporate" },
    { url: Social, alt: "Birthday celebration", category: "Social" },
    { url: Destination, alt: "Destination wedding", category: "Destination" },
    { url: BehindtheScenes, alt: "Event planning session", category: "Behind the Scenes" },
    { url: Reception, alt: "Luxury reception", category: "Reception" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          {/* Portfolio title and description */}
          <span className="text-sm font-medium text-golden-500 tracking-wide uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mt-2 mb-6">
            Our Recent
            <span className="text-blush-500 italic block">Celebrations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore a curated selection of our most beautiful events, each
            uniquely designed to reflect our clients' personalities and dreams.
          </p>
        </div>

        {/* Gallery Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Loop through each image */}
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }} // Stagger animation for each image
            >
              <div className="aspect-square overflow-hidden">
                {/* Image with hover zoom effect */}
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay (Title and Description) */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  {/* Category and Description */}
                  <div className="text-sm font-medium mb-1">
                    {image.category}
                  </div>
                  <div className="text-xs opacity-90">{image.alt}</div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-blush-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
