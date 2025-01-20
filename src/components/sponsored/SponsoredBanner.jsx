import React from 'react'

    const SponsoredBanner = () => {
      const topBanners = [
        { 
          url: 'https://u-web-assets.mercdn.net/assets/anonHomeCards/desktop/gaming.png?format=pjpg&auto=webp&height=undefined',
          title: ''
        },
        { 
          url: 'https://u-web-assets.mercdn.net/assets/anonHomeCards/desktop/figurines.png?format=pjpg&auto=webp&height=undefined',
          title: ''
        },
        { 
          url: 'https://u-web-assets.mercdn.net/assets/anonHomeCards/desktop/tradingcards.png?format=pjpg&auto=webp&height=undefined',
          title: ''
        }
      ]

      const bottomBanners = [
        {
          url: 'https://u-web-assets.mercdn.net/assets/anonHomeCards/desktop/electronics.png?format=pjpg&auto=webp&height=undefined',
          title: ''
        },
        {
          url: 'https://u-web-assets.mercdn.net/assets/anonHomeCards/desktop/toys.png?format=pjpg&auto=webp&height=undefined',
          title: ''
        },
        {
          url: 'https://u-web-assets.mercdn.net/assets/anonHomeCards/desktop/beauty.png?format=pjpg&auto=webp&height=undefined',
          title: ''
        },
        {
          url: 'https://u-web-assets.mercdn.net/assets/anonHomeCards/desktop/handbags.png?format=pjpg&auto=webp&height=undefined',
          title: ''
        }
      ]

      return (
        <div className="space-y-8">
          {/* Top Banners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topBanners.map((banner, index) => (
              <div key={index} className="relative aspect-[3/2] rounded-lg overflow-hidden">
                <img
                  src={banner.url}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <h2 className="text-white text-2xl font-bold">{banner.title}</h2>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banners */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {bottomBanners.map((banner, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src={banner.url}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <h2 className="text-white text-xl font-bold">{banner.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    export default SponsoredBanner
