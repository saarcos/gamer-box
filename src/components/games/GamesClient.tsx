import { Game } from '@/types'
import React from 'react'
import GamesList from './GamesList';
type Props = {
    initialGames: Game[];
}
export default function GamesClient({ initialGames }: Props) {

    return (
        <div>
            <GamesList games={initialGames}/>
        </div>
    )
}
