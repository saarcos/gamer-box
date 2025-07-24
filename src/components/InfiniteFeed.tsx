"use client";
import { RawgGamesResponse } from "@/types";
import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import React from "react";
import GameCard from "./games/GameCard";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchGames = async ({ pageParam }: { pageParam?: string }) => {
    const url = pageParam ? `/api/games?next=${encodeURIComponent(pageParam)}` : `/api/games`;
    const res = await fetch(url);
    const data: RawgGamesResponse = await res.json();
    return data;
};

export default function InfiniteFeed() {
    const {
        data: games,
        fetchNextPage,
        hasNextPage,
        error,
        status,
    } = useInfiniteQuery<
        RawgGamesResponse,
        Error,
        InfiniteData<RawgGamesResponse>,
        string[],
        string | undefined
    >({
        queryKey: ["games"],
        queryFn: fetchGames,
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => lastPage.next ?? undefined,
    });
    if (status === "pending") return <p>Loading...</p>;
    if (error) return <p>Something went wrong!</p>;
    const allGames = games?.pages?.flatMap((page) => page.results) || []
    return (
        <InfiniteScroll
            dataLength={allGames.length}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={
                <div className="flex flex-col items-center justify-center py-6 text-muted-foreground">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500 mb-2"></div>
                    <p>Loading more games...</p>
                </div>
            }
            endMessage={
                <div className="text-center py-6 text-muted-foreground">
                    <p>🚀 You’ve reached the end! No more games to load.</p>
                </div>
            }>
            <div className="p-2 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
                {allGames.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </InfiniteScroll>
    );
}
