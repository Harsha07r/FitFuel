import { useNavigate } from "react-router-dom";

function CategoryCard({ category }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${category.name}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#F8F9FB] rounded-2xl p-4 shadow-sm hover:shadow-lg transition duration-300 cursor-pointer"
    >

      <div className="bg-white rounded-xl p-4">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-48 object-contain"
        />
      </div>

      <div className="mt-4">

        <h2 className="text-lg font-semibold">
          {category.name}
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          {category.description}
        </p>

        <button className="mt-4 w-full border border-blue-600 text-blue-600 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition">
          View Products →
        </button>

      </div>

    </div>
  );
}

export default CategoryCard;