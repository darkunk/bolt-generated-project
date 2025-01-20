import React from 'react'
    import { Link } from 'react-router-dom'
    import { 
      searchOutline, notificationsOutline, cartOutline, personAddOutline, 
      logInOutline, ellipsisHorizontalOutline, womanOutline, manOutline, 
      bodyOutline, phonePortraitOutline, gameControllerOutline, homeOutline,
      timeOutline, footballOutline, brushOutline, briefcaseOutline, 
      walkOutline, hammerOutline, bookOutline 
    } from 'ionicons/icons'
    import { IonIcon } from '@ionic/react'

    export default function Navbar() {
      return (
        <>
          <nav className="w-full" style={{ backgroundColor: '#252b60', height: '80px' }}>
            <div className="w-full px-[40px] h-full">
              <div className="flex items-center h-full space-x-8">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-white">
                  Ekomarkt
                </Link>

                {/* Search Bar */}
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search items..."
                    className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary w-full"
                  />
                  <IonIcon icon={searchOutline} className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-6">
                  {/* Sign Up and Login */}
                  <div className="flex items-center space-x-4">
                    <Link to="/signup" className="text-white hover:text-primary font-medium flex items-center">
                      
                      Sign Up
                    </Link>
                    <span className="text-white">|</span>
                    <Link to="/login" className="text-white hover:text-primary font-medium flex items-center">
                      
                      Login
                    </Link>
                  </div>

                  {/* Icons */}
                  <div className="flex items-center space-x-6">
                    <Link to="/notifications" className="text-white hover:text-primary">
                      <IonIcon icon={notificationsOutline} className="w-5 h-5" />
                    </Link>
                    <Link to="/cart" className="text-white hover:text-primary">
                      <IonIcon icon={cartOutline} className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Sell Button */}
                  <Link 
                    to="/sell" 
                    className="bg-white text-[#252b60] px-4 py-2 rounded-[0.25rem] font-medium hover:bg-gray-100 transition-colors"
                  >
                    Sell
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Categories Section */}
          <div className="w-full bg-white shadow-sm" style={{ height: '80px' }}>
            <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center text-[12px]">
              <div className="flex justify-between w-full items-center h-full">
                <Link to="/category/women" className="text-gray-700 hover:text-primary flex flex-col items-center justify-center h-full">
                  <IonIcon icon={womanOutline} className="w-10 h-10 mb-1" />
                  Women
                </Link>
                <Link to="/category/men" className="text-gray-700 hover:text-primary flex flex-col items-center justify-center h-full">
                  <IonIcon icon={manOutline} className="w-10 h-10 mb-1" />
                  Men
                </Link>
                <Link to="/category/kids" className="text-gray-700 hover:text-primary flex flex-col items-center justify-center h-full">
                  <IonIcon icon={bodyOutline} className="w-10 h-10 mb-1" />
                  Kids
                </Link>
                <Link to="/category/electronics" className="text-gray-700 hover:text-primary flex flex-col items-center justify-center h-full">
                  <IonIcon icon={phonePortraitOutline} className="w-10 h-10 mb-1" />
                  Electronics
                </Link>
                <Link to="/category/gaming" className="text-gray-700 hover:text-primary flex flex-col items-center justify-center h-full">
                  <IonIcon icon={gameControllerOutline} className="w-10 h-10 mb-1" />
                  Gaming
                </Link>
                <Link to="/category/home" className="text-gray-700 hover:text-primary flex flex-col items-center justify-center h-full">
                  <IonIcon icon={homeOutline} className="w-10 h-10 mb-1" />
                  Home
                </Link>
                <Link to="/category/vintage" className="text-gray-700 hover:text-primary flex flex-col items-center justify-center h-full">
                  <IonIcon icon={timeOutline} className="w-10 h-10 mb-1" />
                  Vintage
                </Link>
                <Link to="/category/sports" className="text-gray-700 hover:text-primary flex flex-col items-center justify-center h-full">
                  <IonIcon icon={footballOutline} className="w-10 h-10 mb-1" />
                  Sports
                </Link>
                <Link to="/category/handmade" className="text-gray-700 hover:text-primary flex flex-col items-center justify-center h-full">
                  <IonIcon icon={brushOutline} className="w-10 h-10 mb-1" />
                  Handmade
                </Link>
                <Link to="/category/office" className="text-gray-700 hover:text-primary flex flex-col items-center justify-center h-full">
                  <IonIcon icon={briefcaseOutline} className="w-10 h-10 mb-1" />
                  Office
                </Link>
                <Link to="/category/outdoor" className="text-gray-700 hover:text-primary flex flex-col items-center justify-center h-full">
                  <IonIcon icon={walkOutline} className="w-10 h-10 mb-1" />
                  Outdoor
                </Link>
                <Link to="/category/tools" className="text-gray-700 hover:text-primary flex flex-col items-center justify-center h-full">
                  <IonIcon icon={hammerOutline} className="w-10 h-10 mb-1" />
                  Tools
                </Link>
                <Link to="/category/books" className="text-gray-700 hover:text-primary flex flex-col items-center justify-center h-full">
                  <IonIcon icon={bookOutline} className="w-10 h-10 mb-1" />
                  Books
                </Link>
                <Link to="/categories" className="text-gray-700 hover:text-primary flex flex-col items-center justify-center h-full">
                  <IonIcon icon={ellipsisHorizontalOutline} className="w-10 h-10 mb-1" />
                  View All
                </Link>
              </div>
            </div>
          </div>
        </>
      )
    }
