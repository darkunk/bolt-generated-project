export default function Listings() {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Listings</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Listing items will go here */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-square bg-gray-200 mb-4"></div>
              <h2 className="text-xl font-semibold">Item Title</h2>
              <p className="text-gray-600">$100</p>
              <div className="mt-4 space-x-2">
                <button className="bg-primary text-white px-4 py-2 rounded-full">
                  Bargain
                </button>
                <button className="bg-secondary text-white px-4 py-2 rounded-full">
                  Message Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
