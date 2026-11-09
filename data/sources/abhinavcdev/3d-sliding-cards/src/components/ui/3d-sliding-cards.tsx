'use client'

import { useEffect, useState } from 'react'
import '../../index.css'

type Card = {
  id: number
  imgSrc: string
}

export default function FloatingCards() {
  const [cards, setCards] = useState<Card[]>([])

  useEffect(() => {
    // Use your custom images
    const images: string[] = [
      'https://cdn.21st.dev/assets/mirror/6e/6ea4e5b0e69969ff6f3a9d8ba1853ea9d2f42f2726d6cccc856e8977712f8a8f.jpg',
      'https://cdn.21st.dev/assets/mirror/8b/8b8342d2727e06d018042e9009c4cb1e313cd03afb622dafe02412cb8b655452.jpg',
      'https://cdn.21st.dev/assets/mirror/32/3228cb51067a340306315e58d3b03b6802c56b2559b182abd1facfa05bee50dd.jpg',
      'https://cdn.21st.dev/assets/mirror/d5/d5d0b163b00548feb4b108fff5dd1878b2a82b1ed3def020d9c5f4f768932e88.jpg',
      'https://cdn.21st.dev/assets/mirror/e3/e3f1d75a706d5405c69c5fdc2af2a25931e6dbc1d16cd2c9a56711f35ce49bfe.jpg',
      'https://cdn.21st.dev/assets/mirror/b4/b4fa70f4aa260f7824f44730524387113411bc08cf160d8aea2bef9a8fbb97fa.jpg',
    ]

    const newCards = images.map((img, index) => ({
      id: index + 1,
      imgSrc: img,
    }))
    
    setCards(newCards)

    // Scroll handler applying vertical movement to the slider
    const handleScroll = () => {
      const scrollPos = window.scrollY
      const slider = document.querySelector('.slider') as HTMLElement | null
      if (!slider) return

      const initialTransform =
        'translate3d(-50%, -50%, 0) rotateX(0deg) rotateY(-25deg) rotateZ(-120deg)'
      const zOffset = scrollPos * 0.5
      slider.style.transform = `${initialTransform} translateY(${zOffset}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Set initial transform once on mount
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Mouse interactions per card
  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.left = '15%'
  }

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.left = '0%'
  }

  return (
    <div className="slider" aria-label="3D image slider">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img 
            src={card.imgSrc || "/placeholder.svg"} 
            alt={`Image ${card.id}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}