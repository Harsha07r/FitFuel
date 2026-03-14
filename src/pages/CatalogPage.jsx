import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../services/productsAPI";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CatalogPage() {
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    // Pre-fill search from ?q= URL param if provided
    const [search, setSearch] = useState(searchParams.get("q") || "");
    const [activeCategory, setActiveCategory] = useState("All");


    useEffect(() => {
        fetchProducts()
            .then((data) => setProducts(data))
            .finally(() => setLoading(false));
    }, []);

    // Derive unique category list from products
    const categories = ["All", ...Array.from(new Set(products.map((p) => p.category).filter(Boolean)))];

    const filtered = products.filter((p) => {
        const matchesCategory = activeCategory === "All" || p.category === activeCategory;
        const matchesSearch =
            p.name?.toLowerCase().includes(search.toLowerCase()) ||
            p.brand?.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col">
            <Navbar />

            {/* Header */}
            <div className="bg-gradient-to-r from-[#0F172A] to-[#1E3A5F] py-10 px-8">
                <h1 className="text-3xl font-bold text-white text-center tracking-wide">
                    Full Product Catalog
                </h1>
                <p className="text-slate-400 text-center mt-2 text-sm">
                    Browse all {products.length} products across every category
                </p>
            </div>

            <div className="flex-1 px-6 md:px-10 py-8 max-w-7xl mx-auto w-full">

                {/* Search + Filter Row */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search by name or brand..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-xs font-semibold px-4 py-2 rounded-full border transition ${activeCategory === cat
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-600 border-gray-300 hover:border-blue-400 hover:text-blue-600"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                </div>

                {/* Skeleton Loader */}
                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm animate-pulse">
                                <div className="bg-gray-200 h-52 w-full" />
                                <div className="p-5 space-y-3">
                                    <div className="h-3 bg-gray-200 rounded w-1/3" />
                                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                                    <div className="h-9 bg-gray-200 rounded-xl mt-4" />
                                    <div className="h-9 bg-gray-200 rounded-xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty */}
                {!loading && filtered.length === 0 && (
                    <p className="text-center text-gray-400 py-20">
                        No products match your search.
                    </p>
                )}

                {/* Product Grid */}
                {!loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
                        {filtered.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}

            </div>
            <Footer />
        </div>
    );
}

export default CatalogPage;
