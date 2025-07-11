const Service = () => {
  return (
    <section
      id="service"
      className="min-h-screen bg-[#F5F5F5] border-2 border-green-700"
    >
      <div className="max-w-3xl text-lg font-semibold border-2 text-start mx-auto pt-10 px-6 border-red-600 text-purple-500 mb-2">
        <h1>Our Services</h1>
        <h2 className="text-3xl md:text-4xl font-semibold font-playfair text-gray-800 max-w-3xl mx-auto">
          Crafting the home you’ve always imagined—with purpose and flair.
        </h2>
      </div>

      {/* service grid section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6 py-10 ">
        {Service.map(({ number, title, description }) => (
          <ServiceItem
            key={number}
            number={number}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};
