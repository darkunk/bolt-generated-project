import React from 'react'

    const products = [
      {
        id: 1,
        image: 'https://source.unsplash.com/400x400/?smartphone',
        title: 'Smartphone X',
        price: '799 MAD',
        location: 'Casablanca'
      },
      {
        id: 2,
        image: 'https://source.unsplash.com/400x400/?laptop',
        title: 'Gaming Laptop',
        price: '12,999 MAD',
        location: 'Rabat'
      },
      {
        id: 3,
        image: 'https://source.unsplash.com/400x400/?watch',
        title: 'Luxury Watch',
        price: '4,500 MAD',
        location: 'Marrakech'
      },
      {
        id: 4,
        image: 'https://source.unsplash.com/400x400/?camera',
        title: 'DSLR Camera',
        price: '6,999 MAD',
        location: 'Tangier'
      }
    ]

    const ProductGrid = () => {
      return (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                  <p className="text-primary font-bold text-xl mb-2">{product.price}</p>
                  <p className="text-gray-600 text-sm">{product.location}</p>
                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors">
                      Buy Now
                    </button>
                    <button className="bg-secondary text-white py-2 px-4 rounded hover:bg-secondary-dark transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    export default ProductGrid
