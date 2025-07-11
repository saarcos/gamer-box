import { Game } from '@/types'
import React from 'react'
import GamesList from './GamesList';
type Props = {
    initialGames: Game[];
}
export default function GamesClient({ initialGames }: Props) {

    return (
        <div className='space-y-8'>
            <GamesList games={initialGames}/>
        </div>
    )
}
