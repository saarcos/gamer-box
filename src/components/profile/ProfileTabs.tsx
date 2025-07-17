import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ReviewStars from '@/components/reviews/ReviewStars';
import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Game, RecentActivity } from '@/types';
import ProfileReviews from './ProfileReviews';


type Props = {
    activities: RecentActivity[];
    likedGames: Game[];
}

export default function ProfileTabs({ activities, likedGames }: Props) {
    return (
        <Tabs defaultValue="activity" className="w-full">
            <div className="border-b border-muted-foreground">
                <TabsList className="bg-transparent gap-2 px-0">
                    {["activity", "reviews", "likes"].map((tab) => (
                        <TabsTrigger
                            key={tab}
                            value={tab}
                            className="cursor-pointer font-title text-lg px-4 py-2 text-neutral-300 hover:text-white transition-colors data-[state=active]:bg-light-purple data-[state=active]:text-white"
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </div>
            <TabsContent value="activity" className="mt-4 text-white">
                <h3 className="font-title text-xl mb-3">Recent Activity</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {activities.map((activity, i) => (
                        <div
                            key={i}
                            className="relative aspect-[2/3] w-full bg-neutral-900 border border-white/10 shadow-md hover:shadow-xl transition-shadow overflow-hidden rounded-xl"
                        >
                            <Link href={`/games/${activity.game.id}`} className="block h-full w-full relative">
                                <Image
                                    src={activity.game.background_image}
                                    alt={activity.game.name}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </Link>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4">
                                <Link
                                    href={`/games/${activity.game.id}`}
                                    className="text-white font-title text-xl font-semibold hover:underline transition"
                                >
                                    {activity.game.name}
                                </Link>
                                <p className="text-xs text-neutral-400 mt-0.5">
                                    {dayjs(activity.createdAt).format('MMM D, YYYY')}
                                </p>

                                <hr className="border-white/10 my-2" />

                                <p className="text-sm text-neutral-200 line-clamp-3">{activity.content}</p>

                                <div className="flex items-center gap-1 mt-2">
                                    <span className="text-sm text-neutral-400">Your Rating:</span>
                                    <ReviewStars rating={activity.rating} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4 text-white">
                <ProfileReviews />
            </TabsContent>
            <TabsContent value="likes" className="mt-4 text-white">
                <h3 className="font-title text-xl mb-3">Games you liked</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {likedGames.map((game) => (
                        <div key={game.id} className="relative aspect-[2/3] w-full rounded-xl overflow-hidden border border-white/10 bg-neutral-900 hover:shadow-lg hover:border-light-purple transition-all">
                            <Link href={`/games/${game.id}`} className="block h-full w-full relative">
                                <Image
                                    src={game.background_image}
                                    alt={game.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                                />
                            </Link>
                            <div className="absolute top-2 right-2 ">
                                <button className='cursor-pointer bg-black/80 p-1 rounded-full '>
                                    <Heart className="w-7 h-7 text-light-purple hover:text-muted-foreground transition-colors" />
                                </button>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4">
                                <h3 className='font-title text-xl'>{game.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    )
}
