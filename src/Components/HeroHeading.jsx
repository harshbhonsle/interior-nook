const HeroHeading = () => {
  return (
    <div className="min-h-screen w-full bg-[url('/pattern1.png')] bg-[#1c1c1c] bg-cover bg-center pt-5 text-white">
      {/* Heading & Paragraph Section */}
      <div className="flex flex-col items-center text-center gap-6 py-10 px-4 md:px-20 max-w-7xl mx-auto">
        <h1 className="text-[#E9DCC9] text-4xl sm:text-2xl md:text-4xl xl:text-6xl font-playfair font-semibold leading-tight sm:whitespace-normal xl:whitespace-nowrap">
          From concept to comfort—your story, designed.
        </h1>

        <p className="text-[#B2BEB5] font-roboto text-lg md:text-xl xl:text-2xl leading-relaxed tracking-wide max-w-3xl">
          We turn your empty house into a lovely home, maximizing space with compact, elegant furniture solutions. Your unique tastes, made real.
        </p>
      </div>

      {/* Full-Width Image */}
      <div className="relative mt-16 w-full">
        {/* Mobile Image */}
        <img
          src="/hero2.jpg"
          alt="Hero Visual Small"
          fetchpriority="high"
          className="object-contain w-full h-auto block md:hidden"
        />

        {/* Desktop Image */}
        <img
          src="/hero-image.png"
          alt="Hero Visual"
          fetchpriority="high"
          className="object-contain w-full h-auto hidden md:block"
        />

        {/* CTA Element */}
        <img
          src="/cta.svg"
          alt="Get in touch"
          className="absolute -top-10 left-[35%] translate-x-1/2 xl:left-28 lg:left-[44%] md:left-[42%] w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 z-50"
        />
      </div>
    </div>
  );
};

export default HeroHeading;
