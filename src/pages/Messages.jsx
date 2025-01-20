import React from 'react'

    export default function Messages() {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Messages</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Conversations</h2>
              {/* Conversation list will go here */}
            </div>
            <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Chat</h2>
              {/* Chat interface will go here */}
            </div>
          </div>
        </div>
      )
    }
