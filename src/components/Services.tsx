import React from "react";

const services = [
  {
    title: "Lawn Care",
    image: "/images/services/lawn.jpg",
    description: "Keep your lawn healthy and lush with our expert care.",
  },
  {
    title: "Garden Design",
    image: "/images/services/garden.jpg",
    description: "Transform your outdoor space with custom garden designs.",
  },
  {
    title: "Hardscaping",
    image: "/images/services/hardscape.jpg",
    description: "Enhance your property with beautifully crafted hardscapes.",
  },
];

const Services: React.FC = () => {
  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10 text-green-700">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover group-hover:opacity-90"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-green-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
