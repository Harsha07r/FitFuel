function HowItWorks() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">

      {/* top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="text-blue-600 font-bold tracking-wider uppercase text-xs bg-blue-50 px-3 py-1 rounded-full">
            Easy Process
          </span>

          <h2 className="text-3xl font-bold mt-4 text-[#0F172A]">
            How to Place an Order
          </h2>

        </div>


        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">

          {/* connector line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-slate-200 z-0"></div>


          {/* Step 1 */}
          <div className="relative group z-10">

            <div className="w-24 h-24 mx-auto bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition duration-300">

              <span className="material-icons text-4xl text-blue-600">
                touch_app
              </span>

            </div>

            <h3 className="mt-8 text-xl font-bold text-[#0F172A]">
              1. Browse & Select
            </h3>

            <p className="mt-3 text-slate-500 px-6">
              Explore our categories and choose the supplements you need.
            </p>

          </div>


          {/* Step 2 */}
          <div className="relative group z-10">

            <div className="w-24 h-24 mx-auto bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition duration-300">

              <span className="material-icons text-4xl text-blue-600">
                chat
              </span>

            </div>

            <h3 className="mt-8 text-xl font-bold text-[#0F172A]">
              2. WhatsApp Us
            </h3>

            <p className="mt-3 text-slate-500 px-6">
              Click the order button. It opens a pre-filled message with your request.
            </p>

          </div>


          {/* Step 3 */}
          <div className="relative group z-10">

            <div className="w-24 h-24 mx-auto bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition duration-300">

              <span className="material-icons text-4xl text-blue-600">
                check_circle
              </span>

            </div>

            <h3 className="mt-8 text-xl font-bold text-[#0F172A]">
              3. Campus Delivery
            </h3>

            <p className="mt-3 text-slate-500 px-6">
              Pay securely and get your order delivered to the campus main gate.
            </p>

          </div>


        </div>

      </div>

    </section>
  );
}

export default HowItWorks;