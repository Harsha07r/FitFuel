import React from 'react'

const testimonials = [
  {
    quote: "FitFuel saved me so much money compared to buying off Amazon. The delivery to the hostel gate is super convenient.",
    name: "Sashank",
    role: "Jhelum Hostel",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcAkMBaNDyxF4JdOUD96i8paDV8HFoge-2r4FTXfhhNiNaQo6pJAxfO2TyOUkUj8l_cVu2e9PuvRClbsRlqKP5CS5-6tDz9w5FrYYfec1-FkS4hJtOMFcfIJ2nzMl1IzmjDkE3Ktska94X7nNo_Bn9I4zQqHXqer0ChUZTZgpughPmhwqoECMQhtBSDY4iCoTbLnBFi6ZDt5X4fwbuNZqfmrk4oUbiDBhnXWSBNY7HllqrytzelzxpPOhckJHM2u5xSk7NfXfhzb2j",
    hidden: false,
  },
  {
    quote: "Finally, a reliable source for creatine on campus. The WhatsApp ordering process is literally two clicks.",
    name: "AKhil",
    role: "Gym Enthusiastic",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpStlgnQP3nrPoRA4iC9RYwKB52Fke4gGjc7e7qDnJX-0UYF3MInyyISBFsFwJzTAV5obieGZmgwtYNDTSlL5oNSxiTruBn7369Ij8euIWqGVDRS_8smK1Fxoxb_YCFK8Ke1t_Kcku9BBBH5BryD9PjC48FqVyVmnUVkGvuLmWMohTx5dbfrx1egO35wBbHlGKtvez-ZnwdJnJXDoxsByDx26Ol91Uc4QcZz87qNMO-2PunTpUWZHOOPGYqPbZR4Ny9MjoIWRe9P_S",
    hidden: false,
  },
  {
    quote: "The peanut butter is actually amazing. I order a jar every two weeks. Highly recommend for late night snacks.",
    name: "Veerendra",
    role: "Campus Athlete",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmwypDCUlTrPlHOtwiR2mRe-orrg599vD0_WdzOfNm6mTXnBKfPjX59Y6qygcR695eRh_gM5n3xa87v3fLU71lWnBfDID_wB2PZB3Jy21bM3ul-FSDOT1fPYJIa7UwfBrYMOdG0ta3aM6QSm1Yx9qgfdwbV-pZNf_u9S1gxs1ddPde8sCQeb8iX3QiIFW0boYK3bKcJLzWpFM03wCFCaW2aKo3Yj7O5np35GLp6b-LwqbwN-tBQmPzhyr7veUGOe6SlwqrwYSL3NYx",
    hidden: true,
  },
]

const Testimonials = () => {
  return (
    <section
      className="py-20 bg-slate-100"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Heading — bold, dark, left-aligned like screenshot */}
        <h2 className="text-4xl font-extrabold text-slate-900 mb-12 flex justify-center items-center">
          Trusted by Students
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, img, hidden }) => (
            <div
              key={name}
              className={`relative bg-white rounded-2xl p-8 shadow-sm ${hidden ? 'hidden lg:block' : ''}`}
            >
              {/* Faint quote watermark — top right */}
              <span
                className="absolute top-5 right-6 text-7xl font-serif text-blue-100 select-none leading-none"
                aria-hidden="true"
              >
                "
              </span>

              {/* Quote text */}
              <p className="text-slate-700 text-base italic leading-relaxed mb-8 relative z-10">
                "{quote}"
              </p>

              {/* Author row */}
              <div className="flex items-center gap-4">
                {/* Blue ring avatar */}
                <div className="p-[3px] rounded-full bg-blue-500 flex-shrink-0">
                  <img
                    src={img}
                    alt={`${name} portrait`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-base">{name}</h4>
                  <p className="text-xs font-bold uppercase tracking-widest mt-0.5 text-teal-500">
                    {role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials