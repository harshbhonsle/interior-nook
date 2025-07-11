const HeroHeading = () => {
  return (
    <div className="min-h-screen w-full bg-[#F5F5F5] pt-5 ">
      {/* Heading & Paragraph Section */}
      <div className="flex flex-col items-center text-center gap-6 py-10 px-4 md:px-20 max-w-7xl mx-auto">
        <h1 className="text-black  text-4xl sm:text-2xl md:text-4xl xl:text-6xl font-semibold font-playfair leading-tight sm:whitespace-normal xl:whitespace-nowrap">
          From concept to comfort—your story, designed.
        </h1>

        <p className="text-gray-500  font-roboto text-lg leading-relaxed tracking-wide md:text-2xl wrap-normal max-w-3xl ">
          We turn your empty house to a lovely home, making the compact spaces
          with sapce saving furnitures. Making the unique tastes of yours into
          reality!
        </p>
      </div>

      {/* Full-Width Image Below Text */}

      <div className="relative mt-16 w-full">
  {/* Image for small devices only (sm and below) */}
  <img
    src="/hero2.jpg"
    alt="Hero Visual Small"
    fetchpriority="high"
    className="object-contain w-full h-auto block md:hidden"
  />

  {/* Current image for md and above */}
  <img
    src="/hero-image.png"
    alt="Hero Visual"
    fetchpriority="high"
    className="object-contain w-full h-auto hidden md:block"
  />

  {/* CTA image stays same, visible on all sizes or adjust as needed */}
  <img
    src="./cta.svg"
    alt="Get in touch"
    className="absolute -top-10 left-[35%] translate-x-1/2 xl:left-28 lg:left-[44%] md:left-[42%] w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 z-50"
  />
</div>



      {/* <div className="relative mt-16 w-full ">
        <img
          src="/hero-image.png"
          alt="Hero Visual"
          fetchpriority="high"
          className="object-contain w-full h-auto "
        />
        <img
          src="./cta.svg"
          alt="Get in touch"
          className="absolute -top-10 left-[35%] translate-x-1/2  xl:left-28 lg:left-[44%] md:left-[42%]   w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 z-50"
            

        />
      </div> */}
    </div>
    
  );
};

export default HeroHeading;
