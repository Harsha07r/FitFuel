import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import categories from "../data/categories"
import { fetchProducts } from "../services/productsAPI"
import CategoryCard from "../components/CategoryCard"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import HowItWorks from "../components/HowItWorks"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"

function HomePage() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts().then(data => setProducts(data))
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 800,      // animation duration in ms
      once: true,         // animate only once when scrolled into view
      easing: 'ease-in-out',
      offset: 50
    })
  }, [])

  return (
    <div className="bg-[#EEF1F5] min-h-screen w-full">

      <Navbar />

      <section id="home" data-aos="fade-up">
        <HeroSection />
      </section>

      <section id="categories" className="px-8 py-16" data-aos="fade-up">
        <h3 className="flex justify-center items-center text-2xl font-semibold mb-8 text-black">
          Shop by Category
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}   // each card staggers in one by one
            >
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="px-8 py-16" data-aos="fade-up">
        <h3 className="flex justify-center items-center text-2xl font-semibold mb-8 text-black">
          Our Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow p-4">
              <h3 className="font-semibold text-lg text-black">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.brand}</p>
              <p className="text-green-600 font-medium mt-1">{product["price range"]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" data-aos="fade-up">
        <HowItWorks />
      </section>

      <section id="testimonials" data-aos="fade-up">
        <Testimonials />
      </section>

      <Footer />

    </div>
  )
}

export default HomePage