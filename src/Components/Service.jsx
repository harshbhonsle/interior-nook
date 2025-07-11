const services = [
  {
    number: "01",
    title: "FULL-SERVICE INTERIOR DESIGN",
    description:
      "Comprehensive design from concept to completion. Includes space planning, material selection, custom furniture design, and project management for residential or commercial spaces.",
  },
  {
    number: "02",
    title: "CONSULTATION AND SPACE PLANNING",
    description:
      "A one-time service offering expert advice on layout, furniture placement, and decor. Ideal for those who need professional guidance to enhance their space's functionality and aesthetics.",
  },
  {
    number: "03",
    title: "FURNITURE AND DECOR SELECTION",
    description:
      "Assistance in choosing the perfect furniture, textiles, and accessories to complement your space. This service helps in creating a cohesive and personalized look.",
  },
  {
    number: "04",
    title: "RENOVATION AND REMODELING",
    description:
      "Overseeing construction or renovation projects, from design to implementation. This includes structural changes, material choices, and coordination with contractors.",
  },
];

// ServiceItem component inside Service.jsx
const ServiceItem = ({ number, title, description }) => {
  return (
    <div className="">
      <h3 className="text-2xl font-bold font-roboto  text-purple-900 mb-2">
        {number}. {title}
      </h3>
      <p className="text-gray-700 text-lg gap-x-1">{description}</p>
    </div>
  );
};

const Service = () => {
  return (
    <section
      id="service"
      className="min-h-screen bg-[#F5F5F5] "
    >
      <div className="text-lg font-semibold text-start w-fit mx-auto p-24  pt-10  text-purple-500 mb-2">
        <h1>Our Services</h1>
        <h2 className="text-5xl md:text-6xl font-semibold font-playfair text-gray-800 max-w-3xl mx-auto">
          Crafting the home you’ve always imagined—with purpose and flair.
        </h2>
      </div>

      {/* service grid section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6 py-10 ">
        {services.map(({ number, title, description }) => (
          <ServiceItem
            key={number}
            number={number}
            title={title}
            description={description}
          />
        ))}
      </div>
      <div className="w-2/3 sm:w-1/2 border-t border-gray-400 mx-auto mt-30"></div>
    </section>
  );
};

export default Service;
