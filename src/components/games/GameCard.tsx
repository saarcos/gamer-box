import { Game } from '@/types';
import Image from 'next/image';
import React from 'react';
import dayjs from 'dayjs';
import { Gamepad2, Heart, SquarePen } from 'lucide-react';
import Link from 'next/link';
export default function GameCard({ game }: { game: Game }) {
    return (
        <div className="group h-full flex flex-col justify-between shadow-2xl rounded-lg overflow-hidden border-2 backdrop-blur-md border-indigo-500/10 transition-transform hover:scale-[1.015] duration-300 hover:border-discord-blue cursor-pointer">
            <Link
                href={`/games/${game.id}`}
                className="absolute inset-0 z-10"
                aria-label={`View details for ${game.name}`}
            />
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
                                ${game.metacritic < 40
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
                <div
                    className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 translate-y-[-6px] group-hover:translate-y-0transition-all duration-300
                        bg-[#16181d]/90 border border-indigo-500/10 
                        rounded-md px-3 py-2 flex justify-center gap-3"
                >
                    <button aria-label="View details" className="cursor-pointer">
                        <Gamepad2 className="w-[17px] h-[17px] text-gray-300 hover:text-discord-blue transition-colors" />
                    </button>
                    <button aria-label="Add to favorites" className="cursor-pointer">
                        <Heart className="w-[17px] h-[17px] text-gray-300 hover:text-pink-400 transition-colors" />
                    </button>
                    <button aria-label="Write a review" className="cursor-pointer">
                        <SquarePen className="w-[17px] h-[17px] text-gray-300 hover:text-yellow-300 transition-colors" />
                    </button>
                </div>
            </div>
            <div className="bg-gradient-to-br from-dark-gray to-black/80 text-white px-4 py-5 flex flex-col gap-3">
                <h3 className="font-title text-xl leading-tight line-clamp-2">{game.name}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                    {game.platforms.map(({ platform }) => (
                        <Image
                            key={platform.id}
                            src={`/games/${platform.id}.svg`}
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
