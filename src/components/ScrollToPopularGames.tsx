'use client'
import { useRouter } from 'next/navigation'

export default function ScrollToPopularGames() {
  const router = useRouter()

  const handleClick = () => {
    sessionStorage.setItem('scrollToPopularGames', 'true')
    router.push('/')
  }

  return (
    <button
      onClick={handleClick}
      className="hover:text-light-purple transition-colors duration-150 cursor-pointer"
    >
      Games
    </button>
  )
}
