import { useState } from "react";

const Recent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why choose us for your interior design?",
      answer:
        "Because we blend creativity, quality, and functionality to create spaces that reflect your style and comfort.",
    },
    {
      question: "Do you customize designs to fit my budget?",
      answer:
        "Absolutely! We tailor every project to your vision and budget, ensuring no compromises on style.",
    },
    {
      question: "What is your design process?",
      answer:
        "We start with understanding your needs, then provide personalized concepts, followed by precise execution.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Most projects complete within 4-8 weeks, but timelines depend on scope and client preferences.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
  <section className="min-h-full bg-[#F5F5F5]  flex flex-col lg:flex-row gap-8 items-start justify-center p-2 pt-16">

        
      {/* Box 1 */}
      <div className="w-full lg:w-1/3  flex flex-col items-center justify-center p-6 mb-10 lg:mb-0 ">
        <div className="text-black px-4 py-6 w-full max-w-xl">

          {/* <h1 className="text-black font-bold font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4">
            Elegant Living Space Designs
          </h1> */}

          

          <img
            src="recent1.jpg"
            alt="Recent Work"
         className="w-full max-h-[500px] sm:max-h-[600px] md:max-h-[700px] object-cover rounded-md "


          />


          <p className="text-gray-500 font-roboto text-lg sm:text-base md:text-lg leading-relaxed mt-2">
            "Where luxury meets lifestyle — elevate your living room with
            premium interior design."
          </p>
        </div>
      </div>

      {/* Box 2 (FAQ) */}
      <div className="w-full lg:w-1/3  flex items-start justify-center text-black p-6 overflow-auto max-h-[60vh] sm:max-h-[80vh]  ">
        <div className=" flex flex-col items-start p-6 space-y-4 w-full max-w-xl">
          <h1 className="text-black font-bold font-playfair text-3xl sm:text-4xl md:text-5xl mb-10">
            “Where love meets craft — a showcase of our cherished work.”
          </h1>

          <div className="w-full">
            {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-300 py-3">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center font-semibold text-xl font-roboto focus:outline-none"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  {faq.question}
                  <span className="text-3xl select-none">{openIndex === index ? "−" : "+"}</span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden font-roboto transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 mt-2" : "max-h-0"
                }`}
                >
                  <p className="text-gray-700 ">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
   
    </>
    
  );
};

export default Recent;
