'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { UserResource } from '@clerk/types'

type Props = {
  user: UserResource
}

export default function UserMenu({ user }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={dropdownRef} className="relative w-8 h-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-full rounded-full overflow-hidden ring-2 ring-light-purple focus:outline-none cursor-pointer"
      >
        {user.imageUrl ? (
          <Image
            src={user.imageUrl}
            alt="User Avatar"
            fill
            className="object-cover rounded-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-purple-800 text-white font-bold text-sm uppercase">
            {user.username?.charAt(0)}
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-40 rounded-xl bg-dark-purple shadow-xl border border-zinc-700 animate-dropdown z-50">
          <Link
            onClick={() => setIsOpen(false)}
            href="/profile"
            className="block px-4 py-2 text-sm text-white hover:bg-light-purple/10 hover:text-light-purple transition-colors rounded-t-xl"
          >
            Profile
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/sign-out"
            className="block px-4 py-2 text-sm text-white hover:bg-light-purple/10 hover:text-light-purple transition-colors rounded-b-xl"
          >
            Sign out
          </Link>
        </div>
      )}
    </div>
  )
}
