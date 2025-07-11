const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#F5F5F5] text-black  pb-12 pt-20 flex flex-col items-center "
    >
      {/* Container for Text + Image side-by-side */}
      <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl w-full px-4 gap-15">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 self-center max-w-2xl pt-10">
          <div className="text-lg font-semibold text-gray-500 mb-2">About us</div>
          <h1 className="text-4xl md:text-6xl font-semibold mb-4 font-playfair">
            Sophistication meets soul in every square foot.
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed pt-5 max-w-prose">
            We believe design should be both meaningful and functional. Our
            spaces blend aesthetics with personality—making every square foot
            tell your story. From the texture of materials to the flow of
            natural light, every detail is carefully curated to reflect who you
            are. We don't just furnish rooms; we craft environments that
            inspire, comfort, and resonate. Whether it’s a cozy corner or an
            open-plan layout, our approach transforms space into experience.
            Your vision, our expertise—together, we create interiors that feel
            like home the moment you walk in.
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/about.jpg"
            alt="About section visual"
            className="w-full max-w-lg h-auto rounded-lg shadow-md sm:mx-auto"
          />
        </div>
      </div>

      {/* Bold Quote centered below both */}
      <p className="mt-15 text-center text-xl italic text-gray-600 max-w-3xl px-4 ">
        “Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs
      </p>
      <div className="border-t border-black
                min-w-1/2 sm:w-1/2 md:w-1/3
                my-4 sm:my-6 md:my-8
                mx-auto"></div>
    </section>
  );
};

export default About;
