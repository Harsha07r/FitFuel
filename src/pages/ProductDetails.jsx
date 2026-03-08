import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetails = () => {

  const { productId } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {

    fetch("https://sheetdb.io/api/v1/zn8pcz91rmxdc")
      .then(res => res.json())
      .then(data => {
        const selectedProduct = data.find(p => p.id === productId)
        setProduct(selectedProduct)
      })

  }, [id])

  if (!product) return <p>Loading...</p>

  return (
    <div className="p-6">

      <img
        src={product.image}
        alt={product.name}
        className="w-60"
      />

      <h1 className="text-2xl font-bold mt-4">
        {product.name}
      </h1>

      <p className="text-gray-600">{product.brand}</p>

      <p className="mt-2">{product.description}</p>

      <p className="mt-2 font-semibold">
        {product["price range"]}
      </p>

      {product.stock > 0 ? (
        <p className="text-green-600">Stock: {product.stock}</p>
      ) : (
        <p className="text-red-500">Out of Stock</p>
      )}

      <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded">
        Add to Cart
      </button>

    </div>
  )
}

export default ProductDetails