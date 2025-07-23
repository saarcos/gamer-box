import DetailsTabs from '@/components/games/DetailsTabs';
import GameDetailBanner from '@/components/games/GameDetailBanner';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import { GameDetail } from '@/types';
import dayjs from 'dayjs';
import { Clock, Gamepad2, Settings, TagIcon, UserCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
export default async function GameDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    // URLs para las dos llamadas
    const urlGame = `https://api.rawg.io/api/games/${id}?key=${process.env.RAWG_API_KEY}`;
    const urlScreenshots = `https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.RAWG_API_KEY}`;
    // Fetch paralelo
    const [resGame, resScreenshots] = await Promise.all([
        fetch(urlGame),
        fetch(urlScreenshots)
    ]);

    if (!resGame.ok || !resScreenshots.ok) {
        throw new Error('Failed to fetch game data or screenshots');
    }

    // Datos
    const gameData = await resGame.json();
    const screenshotsData = await resScreenshots.json();

    // Construir un objeto combinado
    const gameDetail: GameDetail = {
        id: gameData.id,
        slug: gameData.slug,
        name: gameData.name,
        playtime: gameData.playtime,
        released: gameData.released,
        background_image: gameData.background_image,
        background_image_additional: gameData.background_image_additional,
        description_raw: gameData.description_raw,
        platforms: gameData.platforms,
        genres: gameData.genres,
        developers: gameData.developers,
        publishers: gameData.publishers,
        esrb_rating: gameData.esrb_rating,
        stores: gameData.stores,
        averageUserRating: 4.25, 
        totalReviews: 2,
        screenshots: screenshotsData.results 
    };
    const cleaned = gameDetail.description_raw.replace(/\r/g, '');

    const paragraphs = cleaned
        .split(/\n{2,}|(?<=\.)\s*\n+/)
        .map(p => p.trim())
        .filter(Boolean);

    return (
        <div className="bg-black/50 text-white font-body">
            <GameDetailBanner gameDetail={gameDetail} />
            <div className="-mt-24 relative z-20 px-4 sm:px-8 max-w-7xl mx-auto">
                <div className="bg-gradient-to-b from-[#0A0015] via-[#0C001A] to-[#05000C] rounded-xl p-6 shadow-2xl text-white space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative w-full min-h-[320px] rounded-lg overflow-hidden group shadow-lg">
                            <Image
                                src={gameDetail.background_image_additional || gameDetail.background_image}
                                alt={gameDetail.name}
                                fill
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent z-10" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="text-3xl font-title font-semibold tracking-tight">
                                Game <span className="text-light-purple">Overview</span>
                            </h2>
                            <div className="text-neutral-300 leading-relaxed max-w-prose">
                                {paragraphs.slice(0, 1).map((paragraph, index) => (
                                    <div key={index} className="text-base">
                                        {paragraph} <br /><Link href="#details" className='text-light-purple underline'>Read more.</Link>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-4 text-base text-neutral-200">
                                <p className="capitalize flex items-center gap-2 font-title">
                                    <Clock className="w-5 h-5 text-light-purple" />
                                    Release date: <span className="font-normal">{dayjs(gameDetail.released).format('MMMM D, YYYY')}</span>
                                </p>
                                <div className="capitalize flex items-center gap-2 font-title">
                                    <Gamepad2 className="w-5 h-5 text-light-purple" />
                                    Platforms:
                                    <div className="flex flex-wrap items-center gap-2 ml-2">
                                        {gameDetail.platforms.map(({ platform }) => (
                                            <span key={platform.id} className='className="text-xs px-2 py-1 rounded bg-indigo-500/20 text-indigo-200 "'>{platform.name}</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="capitalize flex items-center gap-2 font-title">
                                    <Settings className="w-5 h-5 text-light-purple" />
                                    Developers:
                                    <span className="font-normal ml-2">
                                        {gameDetail.developers?.map((dev) => dev.name).join(', ')}
                                    </span>
                                </p>
                                <p className="capitalize flex items-center gap-2 font-title">
                                    <TagIcon className="w-5 h-5 text-light-purple" />
                                    Genres:
                                    <span className="ml-2 flex flex-wrap gap-2">
                                        {gameDetail.genres.map((genre) => (
                                            <span
                                                key={genre.id}
                                                className="bg-light-purple bg-opacity-80 rounded-full px-3 py-0.5 text-sm font-medium"
                                            >
                                                {genre.name}
                                            </span>
                                        ))}
                                    </span>
                                </p>
                                <p className="capitalize flex items-center gap-2 font-title">
                                    <UserCheck className="w-5 h-5 text-light-purple" />
                                    Publishers:
                                    <span className="font-normal ml-2">
                                        {gameDetail.publishers?.map((pub) => pub.name).join(', ')}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id='details' className="mt-2 w-full">
                        <DetailsTabs gameDetail={gameDetail} />
                    </div>
                    <div className="border-t border-neutral-800 pt-5">
                        <ReviewsSection gameDetail={gameDetail} />
                    </div>
                </div>
            </div>
        </div>
    );
}
