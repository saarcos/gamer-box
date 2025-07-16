import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GameDescription from './GameDescription';
import { GameDetail } from '@/types';
import ScreenshotGallery from '@/components/games/ScreenshotGallery';
import Image from 'next/image';
import Link from 'next/link';

export default function DetailsTabs({ gameDetail }: { gameDetail: GameDetail }) {
    return (
        <Tabs defaultValue="description" className="w-full">
            <div className="border-b border-neutral-800 mb-1">
                <TabsList className="p-0 bg-transparent justify-start gap-2">
                    <TabsTrigger
                        value="description"
                        className="font-title text-lg cursor-pointer px-4 py-2 rounded-none bg-transparent text-neutral-300 hover:text-white border-b-2 border-transparent data-[state=active]:bg-light-purple data-[state=active]:text-black transition-colors"
                    >
                        Description
                    </TabsTrigger>
                    <TabsTrigger
                        value="stores"
                        className="font-title text-lg cursor-pointer px-4 py-2 rounded-none bg-transparent text-neutral-300 hover:text-white border-b-2 border-transparent data-[state=active]:bg-light-purple data-[state=active]:text-black transition-colors"
                    >
                        Stores
                    </TabsTrigger>
                    <TabsTrigger
                        value="screenshots"
                        className="font-title text-lg cursor-pointer px-4 py-2 rounded-none bg-transparent text-neutral-300 hover:text-white border-b-2 border-transparent data-[state=active]:bg-light-purple data-[state=active]:text-black transition-colors"
                    >
                        Screenshots
                    </TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value="description" className="mt-1">
                <h3 className='font-title text-xl capitalize mb-2'>Game description</h3>
                <GameDescription description={gameDetail.description_raw} />
            </TabsContent>
            {gameDetail.screenshots && (
                <TabsContent value="screenshots" className="mt-1">
                    <ScreenshotGallery screenshots={gameDetail.screenshots.slice(0, 6)} />
                </TabsContent>
            )}
            {gameDetail.stores && (
                <TabsContent value="stores" className="mt-1">
                    <h3 className="font-title text-xl capitalize mb-4">Where to buy?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {gameDetail.stores.map((store) => (
                            <Link
                                key={store.store.id}
                                href={store.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-neutral-900/20 hover:bg-neutral-800 transition-colors rounded-lg shadow-sm border border-neutral-700"
                            >
                                <div className="relative w-12 h-12 shrink-0 rounded overflow-hidden ">
                                    <Image
                                        src={`/stores/${store.store.id}.png`}
                                        alt={store.store.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="text-white font-medium text-base">
                                    {store.store.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                </TabsContent>
            )}
        </Tabs>
    )
}
