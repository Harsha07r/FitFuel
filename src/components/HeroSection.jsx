function HeroSection() {
  return (
    <section
      className="relative py-24 lg:py-36 overflow-hidden bg-primary-dark"
      id="home"
    >

      {/* Background */}
      <div className="absolute inset-0 z-0">

        <img
          alt="Blurred shelves of supplements in a store"
          className="w-full h-full object-cover blur-[6px]"
          src="/images/banner.png"
        />

        <div className="absolute inset-0 bg-[#0F172A]/80 mix-blend-multiply"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent"></div>

      </div>


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wide uppercase mb-8 backdrop-blur-sm">
          Official Campus Partner
        </span>


        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">

          FitFuel – Your College <br className="hidden md:block" />

          <span className="text-blue-300">
            Supplement Partner
          </span>

        </h1>


        <p className="mt-4 max-w-2xl mx-auto text-[1.5rem] leading-relaxed text-blue-100/90 font-light">

          Premium supplements delivered straight to your dorm. Fast,
          affordable, and student-verified.
        </p>


        {/* Trust line */}
        <div className="mt-8 flex justify-center items-center gap-3 text-white font-medium bg-white/10 backdrop-blur-md py-3 px-6 rounded-full inline-flex mx-auto border border-white/10">

          <span className="text-lg tracking-wide">
            100% Original Brands • Campus Delivery
          </span>

        </div>


        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <a
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-[#0F172A] bg-white hover:bg-blue-50 md:text-lg transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            href="https://wa.me/919493221473?text=Hi%20FitFuel,%20I'm%20interested%20in%20ordering"
          >
            Order via WhatsApp
          </a>


          <a
            className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-base font-medium rounded-lg text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm md:text-lg transition-all"
            href="#categories"
          >
            View Catalog
          </a>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;