import AllMembers from '@/components/members/AllMembers';
import { transformCount } from '@/lib/members';
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const popularMembers = [
    {
        id: '1',
        username: 'Mateo Garimberti',
        avatar: '/images/profile_pic.jpeg',
        followers: 10321,
        gamesCount: 3100,
        reviewsCount: 1342,
        topGames: [
            {
                id: 1,
                name: 'The Witcher 3',
                background_image: 'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
            },
            {
                id: 2,
                name: 'Red Dead Redemption 2',
                background_image: 'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
            },
            {
                id: 3,
                name: 'Cyberpunk 2077',
                background_image: 'https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg',
            },
        ],
    },
    {
        id: '2',
        username: 'Lucía Contreras',
        avatar: '/images/profile_pic.jpeg',
        followers: 9423,
        gamesCount: 2890,
        reviewsCount: 1200,
        topGames: [
            {
                id: 4,
                name: 'God of War',
                background_image: 'https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg',
            },
            {
                id: 5,
                name: 'Elden Ring',
                background_image: 'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
            },
            {
                id: 6,
                name: 'GTA V',
                background_image: 'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
            },
        ],
    },
    {
        id: '3',
        username: 'David Lazo',
        avatar: '/images/profile_pic.jpeg',
        followers: 8881,
        gamesCount: 2500,
        reviewsCount: 1102,
        topGames: [
            {
                id: 7,
                name: 'Horizon Zero Dawn',
                background_image: 'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
            },
            {
                id: 8,
                name: 'Death Stranding',
                background_image: 'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
            },
            {
                id: 9,
                name: 'Resident Evil 4',
                background_image: 'https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg',
            },
        ],
    },
    {
        id: '4',
        username: 'Renata Utreras',
        avatar: '/images/profile_pic.jpeg',
        followers: 8622,
        gamesCount: 2210,
        reviewsCount: 998,
        topGames: [
            {
                id: 10,
                name: 'Assassin’s Creed Valhalla',
                background_image: 'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
            },
            {
                id: 11,
                name: 'Ghost of Tsushima',
                background_image: 'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
            },
            {
                id: 12,
                name: 'Sekiro: Shadows Die Twice',
                background_image: 'https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg',
            },
        ],
    },
];
export default function Members() {
    return (
        <div className='max-w-7xl w-full min-h-[calc(100vh-78px)] text-white mx-auto px-4 sm:px-8 lg:px-16 py-12 flex flex-col gap-10 font-body'>
            <div className='text-center max-w-2xl mx-auto'>
                <h3 className='font-title text-2xl mb-2'>Discover Popular Members</h3>
                <p className='text-slate-400 text-sm '>
                    Connect with some of the most active and passionate gamers in the community.
                    Explore their favorite games and reviews.
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {popularMembers.map((member) => (
                    <div key={member.id} className='flex flex-col items-center gap-3'>
                        <div className='relative aspect-square w-[120px] sm:w-[150px] md:w-[180px] rounded-full border border-white/10 shadow-md'>
                            <Link href={`/profile/${member.id}`} className="absolute inset-0 duration-200 hover:scale-[1.03]">
                                <Image
                                    src={member.avatar}
                                    alt={member.username}
                                    fill
                                    sizes='(max-width: 640px) 120px, (max-width: 768px) 150px, 180px'
                                    className="object-cover rounded-full"
                                />
                            </Link>
                            <button className='cursor-pointer absolute -bottom-2 right-3 bg-light-purple text-white p-3 rounded-full shadow-lg hover:bg-purple-600 transition-colors z-10'>
                                <Heart className='w-5 h-5' />
                            </button>
                        </div>
                        <div className='text-center mt-1 flex flex-col items-center gap-1'>
                            <Link href={`/profile/${member.id}`} className='text-white font-semibold hover:underline'>
                                <h3 className='font-title text-lg'>{member.username}</h3>
                            </Link>
                            <div className='flex items-center gap-1 text-xs text-slate-400'>
                                <span>{transformCount(member.gamesCount)} games</span>
                                <span>•</span>
                                <span>{transformCount(member.reviewsCount)} reviews</span>
                            </div>
                            <div className='grid grid-cols-3 gap-1 mt-2'>
                                {member.topGames.map((game, i) => (
                                    <div
                                        key={i}
                                        className='cursor-pointer relative w-[45px] h-[65px] rounded-md overflow-hidden border border-white/10 shadow-md hover:scale-[1.03] transition-transform duration-200'
                                    >
                                        <Link href={`/games/${game.id}`} className="absolute inset-0">
                                            <Image
                                                src={game.background_image}
                                                alt={game.name}
                                                fill
                                                sizes='(max-width: 640px) 120px, (max-width: 768px) 150px, 180px'
                                                className="object-cover"
                                            />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <AllMembers/>
        </div>
    )
}
