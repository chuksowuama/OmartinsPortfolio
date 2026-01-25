import React from 'react'

const Product = () => {
   return (
     <div className="min-h-screen flex items-center justify-center bg-primary px-4">
      <div className="max-w-md w-full bg-secondary shadow-lg rounded-2xl p-8 text-center">
        
        <div className="mb-6">
          <span className="inline-block bg-secondary text-tertiary px-4 py-1 rounded-full text-sm font-semibold">
            Coming Soon
          </span>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Product Page Not Active Yet
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          This section is currently under development and will be available soon.
          Please check back later for updates on our products and services.
        </p>

        <div className="flex justify-center">
          <button
            disabled
            className="bg-gray-300 text-gray-600 px-6 py-2 rounded-lg cursor-not-allowed"
          >
            View Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product
