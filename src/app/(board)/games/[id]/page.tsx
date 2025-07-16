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
    console.log(id);
    const exampleGameDetail: GameDetail = {
        id: 58617,
        slug: "borderlands-3",
        name: "Borderlands 3",
        playtime: 11,
        released: "2019-09-13",
        background_image: "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
        background_image_additional: "https://media.rawg.io/media/screenshots/7c8/7c88d110a919d91d1568fea367bb58d0_K8Y5VMa.jpg",
        description_raw: `Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. \nSimultaneous storytelling from three unique perspectives: \nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. \nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.\n\nEspañol\nRockstar Games se hizo más grande desde su entrega anterior de la serie. Obtienes la construcción del mundo complicada y realista de Liberty City de GTA4 en el escenario de Los Santos, un viejo favorito de los fans, GTA San Andreas. 561 vehículos diferentes (incluidos todos los transportes que puede operar) y la cantidad aumenta con cada actualización.\nNarración simultánea desde tres perspectivas únicas:\nSigue a Michael, ex-criminal que vive su vida de ocio lejos del pasado, Franklin, un niño que busca un futuro mejor, y Trevor, el pasado exacto del que Michael está tratando de huir.\nGTA Online proporcionará muchos desafíos adicionales incluso para los jugadores experimentados, recién llegados del modo historia. Ahora tendrás otros jugadores cerca que pueden ayudarte con la misma probabilidad que arruinar tu misión. Los jugadores pueden experimentar todas las mecánicas de GTA actualizadas a través del personaje personalizable único, y el contenido de la comunidad combinado con el sistema de nivelación tiende a mantener a todos ocupados y comprometidos.`,
        platforms: [
            {
                platform: {
                    id: 4,
                    name: "PC",
                    slug: "pc",
                    image_background: "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
                },
                requirements: {
                    minimum: "Windows 7/10, i5-3570, 6 GB RAM, GTX 680",
                    recommended: "Windows 10, i7-4770, 16 GB RAM, GTX 1060"
                }
            },
            {
                platform: {
                    id: 18,
                    name: "PlayStation 4",
                    slug: "playstation4"
                }
            },
            {
                platform: {
                    id: 1,
                    name: "Xbox One",
                    slug: "xbox-one"
                }
            }
        ],

        genres: [
            { id: 4, name: "Action", slug: "action" },
            { id: 2, name: "Shooter", slug: "shooter" }
        ],

        developers: [
            {
                id: 4015,
                name: "Gearbox Software",
                slug: "gearbox-software"
            }
        ],

        publishers: [
            {
                id: 358,
                name: "2K Games",
                slug: "2k-games"
            }
        ],

        esrb_rating: {
            id: 4,
            name: "Mature",
            slug: "mature"
        },

        stores: [
            {
                id: 406365,
                url: "https://store.steampowered.com/app/397540/Borderlands_3/",
                store: {
                    id: 1,
                    name: "Steam",
                    slug: "steam",
                    domain: "store.steampowered.com",
                    image_background: "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                }
            },
            {
                id: 307344,
                url: "https://store.epicgames.com/en-US/p/borderlands-3",
                store: {
                    id: 11,
                    name: "Epic Games",
                    slug: "epic-games",
                    domain: "epicgames.com"
                }
            }
        ],

        reviews: [
            {
                id: "1",
                userId: "sebastian",
                username: "SebasDev",
                gameId: 58617,
                rating: 4.5,
                review: "Great gameplay and humor, but repetitive in parts.",
                createdAt: "2024-11-04T12:45:00Z"
            },
            {
                id: "2",
                userId: "alex",
                username: "AlexGamer",
                gameId: 58617,
                rating: 4,
                review: "Best game ever, goty 100%",
                createdAt: "2025-01-10T08:20:00Z"
            },
            {
                id: "3",
                userId: "alex",
                username: "AlexGamer",
                gameId: 58617,
                rating: 4,
                review: "Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100%",
                createdAt: "2025-01-10T08:20:00Z"
            },
            {
                id: "4",
                userId: "alex",
                username: "AlexGamer",
                gameId: 58617,
                rating: 4,
                review: "Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100%",
                createdAt: "2025-01-10T08:20:00Z"
            },
            {
                id: "5",
                userId: "alex",
                username: "AlexGamer",
                gameId: 58617,
                rating: 4,
                review: "Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100%",
                createdAt: "2025-01-10T08:20:00Z"
            },
            {
                id: "6",
                userId: "alex",
                username: "AlexGamer",
                gameId: 58617,
                rating: 4,
                review: "Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100%",
                createdAt: "2025-01-10T08:20:00Z"
            },
            {
                id: "7",
                userId: "alex",
                username: "AlexGamer",
                gameId: 58617,
                rating: 4,
                review: "Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100%",
                createdAt: "2025-01-10T08:20:00Z"
            },
            {
                id: "8",
                userId: "alex",
                username: "AlexGamer",
                gameId: 58617,
                rating: 4,
                review: "Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100%",
                createdAt: "2025-01-10T08:20:00Z"
            },
        ],

        averageUserRating: 4.25,
        totalReviews: 2,

        screenshots: [
            {
                id: 2597139,
                image: "https://media.rawg.io/media/screenshots/85f/85fa0742541492cb4b2562311d455918.jpg",
                width: 1920,
                height: 1080,
                is_deleted: false
            },
            {
                id: 2597140,
                image: "https://media.rawg.io/media/screenshots/1b6/1b6159bbc9e33c29cfd47cac82322b48.jpg",
                width: 1920,
                height: 1080,
                is_deleted: false
            },
            {
                id: 2597141,
                image: "https://media.rawg.io/media/screenshots/825/8255610d24155b27576155b21eda167d.jpg",
                width: 1920,
                height: 1080,
                is_deleted: false
            },
            {
                id: 2597142,
                image: "https://media.rawg.io/media/screenshots/9ab/9aba5fc11168844159e3fe83d7327294.jpg",
                width: 1920,
                height: 1080,
                is_deleted: false
            },
            {
                id: 1884080,
                image: "https://media.rawg.io/media/screenshots/293/293c4401fd411de976aec0df8597580c.jpg",
                width: 1440,
                height: 810,
                is_deleted: false
            },
            {
                id: 1884081,
                image: "https://media.rawg.io/media/screenshots/c3e/c3ef63402fd812717da342ba73444ca0.jpg",
                width: 1440,
                height: 810,
                is_deleted: false
            }
        ]
    };
    const cleaned = exampleGameDetail.description_raw.replace(/\r/g, '');

    const paragraphs = cleaned
        .split(/\n{2,}|(?<=\.)\s*\n+/)
        .map(p => p.trim())
        .filter(Boolean);

    return (
        <div className="bg-black/50 text-white font-body">
            <GameDetailBanner gameDetail={exampleGameDetail} />
            <div className="-mt-24 relative z-20 px-4 sm:px-8 max-w-7xl mx-auto">
                <div className="bg-gradient-to-b from-[#0A0015] via-[#0C001A] to-[#05000C] rounded-xl p-6 shadow-2xl text-white space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative w-full min-h-[320px] rounded-lg overflow-hidden group shadow-lg">
                            <Image
                                src={exampleGameDetail.background_image_additional || exampleGameDetail.background_image}
                                alt={exampleGameDetail.name}
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
                                    Release date: <span className="font-normal">{dayjs(exampleGameDetail.released).format('MMMM D, YYYY')}</span>
                                </p>
                                <div className="capitalize flex items-center gap-2 font-title">
                                    <Gamepad2 className="w-5 h-5 text-light-purple" />
                                    Platforms:
                                    <div className="flex items-center gap-2 ml-2">
                                        {exampleGameDetail.platforms.map(({ platform }) => (
                                            <Image
                                                key={platform.id}
                                                src={`/games/${platform.id}.svg`}
                                                alt={platform.name}
                                                width={24}
                                                height={24}
                                                className="rounded"
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className="capitalize flex items-center gap-2 font-title">
                                    <Settings className="w-5 h-5 text-light-purple" />
                                    Developers:
                                    <span className="font-normal ml-2">
                                        {exampleGameDetail.developers?.map((dev) => dev.name).join(', ')}
                                    </span>
                                </p>
                                <p className="capitalize flex items-center gap-2 font-title">
                                    <TagIcon className="w-5 h-5 text-light-purple" />
                                    Genres:
                                    <span className="ml-2 flex flex-wrap gap-2">
                                        {exampleGameDetail.genres.map((genre) => (
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
                                        {exampleGameDetail.publishers?.map((pub) => pub.name).join(', ')}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id='details' className="mt-2 w-full">
                        <DetailsTabs gameDetail={exampleGameDetail} />
                    </div>
                    <div className="border-t border-neutral-800 pt-8">
                        <ReviewsSection gameDetail={exampleGameDetail} />
                    </div>
                </div>
            </div>
        </div>
    );
}
