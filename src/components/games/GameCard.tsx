import { Game } from '@/types';
import Image from 'next/image';
import React from 'react';
import dayjs from 'dayjs';
export default function GameCard({ game }: { game: Game }) {
    return (
        <div className="h-full flex flex-col justify-between shadow-2xl rounded-lg overflow-hidden border backdrop-blur-md border-indigo-500/10 transition-transform hover:scale-[1.015] duration-300">
            <div className="relative">
                <Image
                    src={game.background_image}
                    alt={game.name}
                    width={1920}
                    height={1080}
                    className="h-72 w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent z-10" />
                {game.metacritic && (
                    <div className="absolute bottom-4 left-4 z-20">
                        <div
                            className={`
                                min-w-[40px] px-3 py-1.5 
                                rounded-full 
                                flex items-center justify-center 
                                text-sm font-semibold
                                text-white shadow-md
                                ${
                                    game.metacritic < 40
                                        ? 'bg-red-700/90'
                                        : game.metacritic < 60
                                            ? 'bg-yellow-500/90 text-black'
                                            : 'bg-green-600/90'
                                }
                            `}
                        >
                            {game.metacritic}
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-gradient-to-br from-dark-gray to-black/80 text-white px-4 py-5 flex flex-col gap-3">
                <h3 className="font-title text-xl leading-tight line-clamp-2">{game.name}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                    {game.platforms.map(({ platform }) => (
                        <Image
                            key={platform.id}
                            src={`/images/${platform.id}.svg`}
                            alt={platform.name}
                            width={20}
                            height={20}
                        />
                    ))}
                </div>
                <p className="text-sm text-gray-300">Released: {dayjs(game.released).format('MMMM D, YYYY')}</p>
            </div>
        </div>
    );
}
