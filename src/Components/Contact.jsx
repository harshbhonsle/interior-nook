const Contact = ()=>{
    return (
           <section id="contact" className="bg-[#F5F5F5] py-5 pt-10 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto flex flex-col gap-10">
    
    {/* Top Section: Heading + Contact Info */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      
      {/* LEFT: Heading */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-purple-800">
          Kick-start your dream home with us
        </h2>
        <p className="text-lg mt-2">Send us a hi</p>
      </div>

      {/* RIGHT: Contact Info */}
      <div className="md:w-1/2 space-y-2 text-base md:text-lg text-right">
        <p className="font-semibold">Brooklyn, New York</p>
        <p>962 Fifth Avenue Str, 3rd Floor - Trump Building NY 10006, United States</p>
        <p>
          Email:{" "}
          <a href="mailto:hello@landify.design" className="text-purple-700 hover:underline">
            hello@landify.design
          </a>
        </p>
        <p>
          Call us:{" "}
          <a href="tel:+86631250859" className="text-purple-700 hover:underline">
            +8 (663) 125-08-59
          </a>
        </p>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-400 w-full"></div>

    {/* Footer */}
    <div className="text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Design Nook. All rights reserved.</p>
      <p>
        Made with ❤️ by{" "}
        <a href="#" className="hover:underline text-purple-600">
          YourName
        </a>
      </p>
    </div>
  </div>
</section>



    )
}

export default Contact;


