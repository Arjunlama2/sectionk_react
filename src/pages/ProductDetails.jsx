import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProductDetails() {
  const {id}=useParams()

  const [product, setProduct] = useState()
  useEffect(() => {
    fetch(`https://abhit-batch-bn.onrender.com/api/v1/product/${id}`)
      .then((response) => {
        return response.json()
      }).then((res) => {
       setProduct(res)
      })


      .catch((err) => {
        console.log(err)
      })
  },[])

  console.log(product)
  return (
    <>
    
       <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={product?.image}
              alt={product?.title}
              className="w-full max-w-md rounded-xl object-cover shadow"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                {product?.title}
              </h1>

              <p className="text-gray-600 mb-4">
                {product?.description}
              </p>

              <p className="text-sm text-gray-500 mb-2">
                Category:{" "}
                <span className="font-medium text-gray-700">
                  {product?.category || "Uncategorized"}
                </span>
              </p>

              <p className="text-2xl font-semibold text-blue-600 mt-4">
                ${product?.price}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-4">
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                Add to Cart
              </button>

              <button className="flex-1 border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
                Buy Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  
    
    </>
  );
}

export default ProductDetails;
