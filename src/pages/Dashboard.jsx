import React from 'react'

    export default function Dashboard() {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Your Listings</h2>
              {/* Seller's listings will go here */}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Saved Items</h2>
              {/* Buyer's saved items will go here */}
            </div>
          </div>
        </div>
      )
    }
