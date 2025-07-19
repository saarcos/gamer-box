'use client'
import { useEffect } from 'react'

export default function ScrollToGames() {
  useEffect(() => {
    const shouldScroll = sessionStorage.getItem('scrollToPopularGames')
    if (shouldScroll === 'true') {
      sessionStorage.removeItem('scrollToPopularGames')
      const el = document.getElementById('popularGames')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return null 
}
