import React from 'react'
import GenreItem from './genre/GenreItem'
import { Genre } from '@/types'
import { Gamepad2 } from 'lucide-react'

type Props = {
  genres: Genre[]
}

export default function Sidebar({ genres }: Props) {
  return (
    <aside className="h-full max-h-[calc(100vh-78px)] overflow-y-auto p-4 bg-gradient-to-br from-dark-gray to-black/80 rounded-3xl shadow-2xl backdrop-blur-md border border-indigo-500/10 no-scrollbar">
      <div className="mb-6 flex items-center gap-2 px-1 text-white uppercase font-bold tracking-wide text-sm">
        <Gamepad2 className="w-5 h-5 text-discord-blue" />
        Genres
      </div>
      <ul className="flex flex-col gap-3">
        {genres.map((genre) => (
          <GenreItem key={genre.id} genre={genre} />
        ))}
      </ul>
    </aside>
  )
}
