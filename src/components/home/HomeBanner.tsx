import dayjs from 'dayjs';
import { Gamepad2, Heart, SquarePen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ReviewStars from '../reviews/ReviewStars';
const popularGames = [
    {
        id: 3498,
        slug: "grand-theft-auto-v",
        name: "Grand Theft Auto V",
        background_image: "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    },
    {
        id: 4200,
        slug: "portal-2",
        name: "Portal 2",
        background_image: "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
    },
    {
        id: 3328,
        slug: "the-witcher-3-wild-hunt",
        name: "The Witcher 3: Wild Hunt",
        background_image: "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
    },
    {
        id: 5679,
        slug: "the-elder-scrolls-v-skyrim",
        name: "The Elder Scrolls V: Skyrim",
        background_image: "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
    },
    {
        id: 290856,
        slug: "cyberpunk-2077",
        name: "Cyberpunk 2077",
        background_image: "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    },
];
const mockReviews = [{
    id: 'r101',
    createdAt: '2025-07-15T14:23:00Z',
    content: 'Una experiencia increíble con una historia envolvente y un mundo muy vivo.',
    rating: 4.5,
    likesCount: 123,
    userLiked: true,
    game: {
        id: 3498,
        name: "Grand Theft Auto V",
        slug: "grand-theft-auto-v",
        background_image: "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        released: "2013-09-17"
    },
    user: {
        id: 1,
        username: 'Folagor'
    }

},
{
    id: 'r102',
    createdAt: '2025-07-12T10:00:00Z',
    content: 'Uno de los mejores shooters que he jugado este año.',
    rating: 5,
    likesCount: 89,
    userLiked: false,
    game: {
        id: 5679,
        name: "DOOM Eternal",
        slug: "doom-eternal",
        background_image: "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        released: "2020-03-20"
    },
    user: {
        id: 2,
        username: 'Orslok'
    }
}
]

export default function HomeBanner() {
    return (
        <div className="bg-gray-950/30">
            <div className="relative h-[60vh] w-full overflow-hidden font-body">
                <Image
                    src="https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent" />
                <div className="relative z-20 px-4 sm:px-8 lg:px-16 pt-[120px] max-w-7xl mx-auto text-center">
                    <h1 className="font-title text-5xl sm:text-6xl drop-shadow-xl mb-4 text-white">
                        Welcome to <span className="text-light-pink">GamerBox</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                        Dive into a world of top-rated games and community favorites. Let’s find your next obsession.
                    </p>
                    <Link
                        href="#popularGames"
                        className="inline-block bg-light-pink text-white font-semibold px-6 py-3 rounded-md hover:bg-light-pink/90 transition"
                    >
                        Discover Games
                    </Link>
                </div>
            </div>
            <div className="-mt-40 relative z-20 px-4 sm:px-8 max-w-7xl mx-auto">
                <div className="bg-gradient-to-b from-[#1A102B]/90 to-[#0A0015]/95 rounded-2xl p-8 shadow-lg text-white space-y-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-title uppercase tracking-wide">
                            Recent <span className="text-light-purple">Games</span>
                        </h2>
                        <div className="h-1 w-24 bg-light-pink mx-auto mt-2 rounded-full" />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {popularGames.map((game) => (
                            <div key={game.id} className="relative aspect-[2/3] rounded-lg overflow-hidden border border-white/10 bg-neutral-900 shadow-md group transition-all">
                                <Link href={`/games/${game.id}`} className="block h-full w-full relative">
                                    <Image
                                        src={game.background_image}
                                        alt={game.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-dark-purple/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 border hover:border-light-purple rounded-lg">
                                        <div className="absolute top-0 left-0 right-0 bg-gradient-to-t from-dark-purple/80 via-black/60 to-transparent p-4">
                                            <h3 className="text-xl font-semibold text-white font-title">{game.name}</h3>
                                        </div>
                                        <div className="flex items-center justify-center gap-3 w-full bg-[#1A102B]/80 backdrop-blur-md rounded-lg py-1 shadow-inner shadow-black/20">
                                            <div className="p-2 bg-white/10 rounded-full text-light-purple hover:bg-light-purple hover:text-black transition-colors">
                                                <Gamepad2 className="w-5 h-5" />
                                            </div>
                                            <div className="p-2 bg-white/10 rounded-full text-light-pink hover:bg-light-pink hover:text-black transition-colors">
                                                <Heart className="w-5 h-5" />
                                            </div>
                                            <div className="p-2 bg-white/10 rounded-full text-yellow-300 hover:bg-yellow-300 hover:text-black  transition-colors">
                                                <SquarePen className="w-5 h-5 " />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <div className="text-center">
                            <h2 className="text-4xl font-title uppercase tracking-wide">
                                Recent <span className="text-light-purple">Reviews</span>
                            </h2>
                            <div className="h-1 w-24 bg-light-pink mx-auto mt-2 rounded-full" />
                        </div>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                            {mockReviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="relative flex gap-4 bg-[#130A1F]/80 hover:bg-[#1C102D]/90 transition-colors border border-white/10 rounded-xl p-4 shadow-md"
                                >
                                    <div className="hidden sm:block relative w-[100px] md:w-[120px] aspect-[2/3] rounded-lg overflow-hidden border border-white/10 shadow-inner shadow-black/30">
                                        <Image
                                            src={review.game.background_image}
                                            alt={review.game.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2 text-sm sm:text-base text-neutral-300 font-body">
                                        <div className="space-y-1">
                                            <Link href={`/profile/${review.user.id}`} className="text-light-purple text-sm font-medium hover:underline">
                                                @{review.user.username}
                                            </Link>
                                            <Link href={`/games/${review.game.slug}`}>
                                                <h3 className="font-title text-white text-lg sm:text-xl hover:underline transition">
                                                    {review.game.name}{' '}
                                                    <span className="text-light-purple font-normal">
                                                        ({dayjs(review.game.released).format('YYYY')})
                                                    </span>
                                                </h3>
                                            </Link>
                                            <p className="text-slate-400 text-xs italic">
                                                Reviewed on {dayjs(review.createdAt).format('MMMM D, YYYY')}
                                            </p>

                                            <div className="flex items-center gap-3">
                                                <ReviewStars rating={review.rating} />
                                                <div className="flex items-center gap-1 text-light-purple">
                                                    <Heart className="w-4 h-4 opacity-80 hover:opacity-100" />
                                                    <span className="text-sm font-medium">{review.likesCount}</span>
                                                    <span className="text-sm">Likes</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                                            {review.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
