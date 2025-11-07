import React from "react";

interface Service {
  title: string;
  image: string;
  overlayImage: string;
}

interface ServicesProps {
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    title: "Web Development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=512&q=80",
    overlayImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=512&q=80",
  },
  {
    title: "Creative Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=512&q=80",
    overlayImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=512&q=80",
  },
  {
    title: "Branding",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=512&q=80",
    overlayImage: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=512&q=80",
  },
  {
    title: "Product Design",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=512&q=80",
    overlayImage: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=512&q=80",
  },
];

const ServicesSection = ({ services = defaultServices }: ServicesProps) => {
  return (
    <div id="services" className="bg-background w-full flex items-center justify-center">
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 w-full">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
              How Can I Help?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-light">
              Let's turn your vision into something amazing.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-muted/50 rounded-3xl p-6 flex flex-col h-[320px] transition-all duration-300 hover:bg-muted border border-border"
              >
                {/* Image Container */}
                <div className="relative flex-grow flex items-center justify-center mb-4">
                  {/* Back Image */}
                  <img
                    src={service.image}
                    alt={`${service.title} showcase`}
                    className="absolute w-44 h-auto rounded-lg shadow-md transform -rotate-6 transition-all duration-400 ease-in-out group-hover:rotate-[-10deg] group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=512&q=80";
                    }}
                  />
                  {/* Front Image */}
                  <img
                    src={service.overlayImage}
                    alt={`${service.title} example`}
                    className="absolute w-44 h-auto rounded-lg shadow-lg transform rotate-3 transition-all duration-400 ease-in-out group-hover:rotate-[5deg] group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=512&q=80";
                    }}
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-left text-lg font-medium text-card-foreground mt-auto">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
