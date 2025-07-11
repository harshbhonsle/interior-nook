import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-purple-700">
      <div className="h-20 items-center flex justify-between mx-auto w-full px-4 ">
        {/* logo */}
        <div className="text-5xl text-white font-roboto font-bold px-2  ">Design Nook</div>

        {/* desktop links */}
        <ul className="hidden sm:flex w-1/2  font-roboto justify-evenly  items-center p-2 px-5 text-xl">
          <li>
            <button
              onClick={() => scrollToId("about")}
              className="text-white  cursor-pointer"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToId("service")}
              className="text-white  cursor-pointer"
            >
              Service
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToId("contact")}
              className="text-white  cursor-pointer"
            >
              Our Work
            </button>
          </li>
        </ul>

        {/* mobile menu button */}
        <button
          className="sm:hidden block text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out sm:hidden ${
          isOpen ? "max-h-40 py-4 px-6" : "max-h-0"
        } bg-[#F5F5DC]`}
      >
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => {
                scrollToId("about");
                handleLinkClick();
              }}
              className="text-black font-bold block px-4 pb-3 text-xl"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToId("service");
                handleLinkClick();
              }}
              className="text-white block px-4 pb-3 text-lg"
            >
              Service
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToId("work");
                handleLinkClick();
              }}
              className="text-white block px-4 pb-3 text-lg"
            >
              Our Work
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
