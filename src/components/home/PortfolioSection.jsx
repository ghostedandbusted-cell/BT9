import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

// 🔹 Video data (same as your Projects page)
const teasers = [
  { videoId: 'dQw4w9WgXcQ' },
  { videoId: 'jNQXAC9IVRw' },
  { videoId: 'M7lc1UVf-VE' },
  { videoId: 'ZZ5LpwO-An4' },
  { videoId: 'kJQP7kiw5Fk' },
  { videoId: 'tgbNymZ7vqY' },
  { videoId: 'L_jWHffIx5E' },
  { videoId: 'fJ9rUzIMcZQ' },
  { videoId: 'QH2-TGUlwu4' },
  { videoId: 'nfWlot6h_JM' },
  { videoId: 'hFZFjoX2cGg' }
]

const highlights = [
  { videoId: 'ScMzIvxBSi4' },
  { videoId: 'CevxZvSJLk8' },
  { videoId: 'kffacxfA7G4' },
  { videoId: 'qeMFqkcPYcg' },
  { videoId: 'SQoA_wjmE9w' },
  { videoId: 'ZbZSe6N_BXs' },
  { videoId: 'HEXWRTEbj1I' },
  { videoId: 'U9t-slLl69E' },
  { videoId: 'iik25wqIuFo' },
  { videoId: 'C0DPdy98e4c' },
  { videoId: 'YQHsXMglC9A' },
  { videoId: 'AdUw5RdyZxI' },
  { videoId: 'hTWKbfoikeg' },
  { videoId: 'NUYvbT6vTPs' },
  { videoId: 'RgKAFK5djSk' },
  { videoId: 'uelHwf8o7_U' },
  { videoId: 'EhxJLojIE_o' },
  { videoId: 'KQ6zr6kCPj8' },
  { videoId: 'MtN1YnoL46Q' },
  { videoId: 'sOnqjkJTMaA' }
]

const PortfolioSection = () => {
  const trackRef = useRef(null)
  const allVideos = [...teasers, ...highlights]

  useEffect(() => {
    // 🔹 Initial scaling so GSAP controls transform instead of Tailwind
    gsap.set('.video-card', { scale: 0.4 })

    // 🔹 Infinite marquee scroll effect
    gsap.to(trackRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 15,
      ease: "linear"
    })
  }, [])

  return (
    <section
      id="portfolio"
      className="section-dark-alt text-white relative depth-3 overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      <div className="cinematic-overlay"></div>
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4 lg:space-y-6">
          <h2 className="font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow">
            Our Portfolio
          </h2>
          <div className='floating-panel-dark max-width-content mx-4 sm:mx-6'>
            <p className="font-[font1] text-responsive leading-relaxed text-layer-2">
              Découvrez notre collection de films de mariage cinématographiques
            </p>
          </div>
        </div>

        <div className="portfolio-showcase space-y-8 sm:space-y-10 lg:space-y-12">
          
          {/* Moving Video Track */}
          <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-pattern-dots mx-4 sm:mx-6">
            <div
              ref={trackRef}
              className="flex gap-3 sm:gap-4 lg:gap-6 xl:gap-8 w-[200%] py-3 sm:py-4 lg:py-6"
            >
              {[...allVideos, ...allVideos].map((video, index) => (
                <div 
                  key={index}
                  className="video-card flex-shrink-0 w-48 sm:w-56 lg:w-64 xl:w-72 video-glass gpu-accelerated"
                >
                  <div className="relative aspect-video bg-black rounded-md sm:rounded-lg overflow-hidden">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0`}
                      title={`Portfolio video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Button */}
          <div className="text-center px-4 sm:px-6">
            <Link 
              to="/projects"
              className="btn-pill btn-primary h-10 sm:h-12 lg:h-14 px-6 sm:px-8 lg:px-12 inline-flex items-center justify-center group"
            >
              <span className="font-[font2] text-sm sm:text-base lg:text-lg">
                View Our Portfolio
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
