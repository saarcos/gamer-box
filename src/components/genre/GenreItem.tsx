import { Genre } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  genre: Genre
  href?: string
}

export default function GenreItem({ genre, href = "#" }: Props) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 cursor-pointer p-2.5 pr-4 rounded-2xl hover:bg-discord-blue/80 transition duration-200 ease-in-out text-white hover:shadow-lg"
      title={genre.name}
      aria-label={`View games in ${genre.name} genre`}
    >
      <div className="relative size-12 md:size-14 rounded-xl overflow-hidden group-hover:ring-2 group-hover:ring-indigo-400 transition-all duration-200">
        <Image
          src={genre.image_background}
          alt={genre.name}
          width={56}
          height={56}
          className="object-cover size-12 md:size-14 rounded-xl group-hover:scale-105 transition-transform"
          loading="lazy"
        />
      </div>
      <p className="text-sm md:text-base font-medium">{genre.name}</p>
    </Link>
  )
}
