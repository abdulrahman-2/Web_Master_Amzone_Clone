import { useState } from "react";
import {
  LuStar,
  LuShoppingCart,
  LuHeart,
  LuTruck,
  LuRotateCcw,
  LuShield,
  LuCircleAlert,
} from "react-icons/lu";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  const { products } = useSelector((state) => state.products);

  const product = products.find((product) => product.id === id);

  const discountedPrice =
    product.price - product.price * (product.discountPercentage / 100);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <LuStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <LuStar className="w-4 h-4 text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <LuStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        );
      } else {
        stars.push(<LuStar key={i} className="w-4 h-4 text-gray-300" />);
      }
    }

    return stars;
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-md">
              <img
                src={
                  product.images[0] || "/placeholder.svg?height=600&width=600"
                }
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="mt-4 flex space-x-2">
              <div className="border-2 border-primary rounded-md p-1">
                <img
                  src={
                    product.thumbnail || "/placeholder.svg?height=80&width=80"
                  }
                  alt={`${product.title} thumbnail`}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <div className="flex justify-between">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {product.title}
              </h1>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <LuHeart className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            <div className="mt-3">
              <p className="text-sm text-gray-500">
                Brand:{" "}
                <span className="font-medium text-gray-900">
                  {product.brand}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                SKU:{" "}
                <span className="font-medium text-gray-900">{product.sku}</span>
              </p>
            </div>

            {/* Rating */}
            <div className="mt-3 flex items-center">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <p className="ml-2 text-sm text-gray-700">
                {product.rating} out of 5 stars
              </p>
            </div>

            {/* Price */}
            <div className="mt-4 flex items-end">
              <p className="text-3xl font-bold text-gray-900">
                ${discountedPrice.toFixed(2)}
              </p>
              {product.discountPercentage > 0 && (
                <p className="ml-2 text-lg font-medium text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </p>
              )}
              {product.discountPercentage > 0 && (
                <p className="ml-2 text-sm font-medium text-red-600">
                  Save {product.discountPercentage}%
                </p>
              )}
            </div>

            {/* Availability */}
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Availability:
                <span
                  className={`font-medium ml-1 ${
                    product.stock > 10 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.availabilityStatus} ({product.stock} left)
                </span>
              </p>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700 space-y-6">
                <p>{product.description}</p>
              </div>
            </div>

            {/* Quantity selector */}
            <div className="mt-6">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-medium text-gray-700">
                  Quantity:
                </span>
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={decrementQuantity}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-gray-700">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
                <p className="ml-4 text-xs text-gray-500">
                  Minimum order: {product.minimumOrderQuantity} units
                </p>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                className="w-full bg-primary text-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-semibold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
              >
                <LuShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </button>
              <button
                type="button"
                className="w-full bg-gray-100 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Buy Now
              </button>
            </div>

            {/* Product details */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div className="flex items-center">
                  <LuTruck className="h-5 w-5 text-gray-400" />
                  <p className="ml-2 text-sm text-gray-500">
                    {product.shippingInformation}
                  </p>
                </div>
                <div className="flex items-center">
                  <LuRotateCcw className="h-5 w-5 text-gray-400" />
                  <p className="ml-2 text-sm text-gray-500">
                    {product.returnPolicy}
                  </p>
                </div>
                <div className="flex items-center">
                  <LuShield className="h-5 w-5 text-gray-400" />
                  <p className="ml-2 text-sm text-gray-500">
                    {product.warrantyInformation}
                  </p>
                </div>
                <div className="flex items-center">
                  <LuCircleAlert className="h-5 w-5 text-gray-400" />
                  <p className="ml-2 text-sm text-gray-500">
                    Weight: {product.weight}g
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews section */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
          <div className="mt-6 space-y-10">
            {product.reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <LuStar
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
                <h3 className="text-sm font-medium text-gray-900">
                  {review.reviewerName}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product specifications */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Product Specifications
          </h2>
          <div className="mt-6 border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 w-1/3">
                    Dimensions
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.dimensions.width} × {product.dimensions.height} ×{" "}
                    {product.dimensions.depth} cm
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                    Weight
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.weight}g
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                    Barcode
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.meta.barcode}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                    Last Updated
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(product.meta.updatedAt).toLocaleDateString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
