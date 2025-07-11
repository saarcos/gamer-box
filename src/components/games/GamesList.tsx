import { Game } from '@/types'
import React from 'react'
import GameCard from './GameCard'
type Props = {
    games: Game[],
}
export default function GamesList({ games }: Props) {
    return (
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {games.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    )
}
