import categories from "../data/categories";
import CategoryCard from "../components/CategoryCard";
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import HowItWorks from "../components/HowItWorks"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
function HomePage() {

  return (

   <div className="min-h-screen w-full">

      <Navbar />
      {/* Hero Section */}
       <HeroSection />

      {/* Categories Section */}
      <section className="px-8 py-16">

        <h3 className="flex justify-center items-center text-2xl font-semibold mb-8 text-black">
          Shop by Category
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {categories.map(category => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}

        </div>

      </section>
  
  <HowItWorks />

  <Testimonials />

    <Footer />

    </div>

  );
}

export default HomePage;