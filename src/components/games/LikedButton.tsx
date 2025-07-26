"use client"
import { GameStatus } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Heart } from 'lucide-react';
import React from 'react'
type Props = {
    initialStatus: boolean,
    gameId: number
}
export default function LikedButton({ initialStatus, gameId }: Props) {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: async () => {
            await axios.post(
                "/api/game-status",
                { gameId, status: "liked" },
                { withCredentials: true }
            );
        },
        onMutate: async (nextStatus: boolean) => {
            await queryClient.cancelQueries({ queryKey: ["gameStatus", gameId] });

            const previous = queryClient.getQueryData(["gameStatus", gameId]);

            queryClient.setQueryData(["gameStatus", gameId], {
                ...(previous || {}),
                liked: nextStatus,
            });

            return { previous };
        },
        onError: (_err, _nextStatus, context) => {
            if (context?.previous) {
                queryClient.setQueryData(["gameStatus", gameId], context.previous);
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["gameStatus", gameId] });
        },
    })
    const liked =
        (queryClient.getQueryData<GameStatus>(["gameStatus", gameId])?.liked) ??
        initialStatus;
    const handleClick = async () => {
        mutation.mutate(!liked)
    }
    return (
        <button
            type='button'
            onClick={handleClick}
            disabled={mutation.isPending}
            className={`
        cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full shadow-md
        text-sm font-medium transition-all duration-200
        ${liked
                    ? 'bg-light-pink/80 text-white hover:bg-pink-500/30'
                    : 'bg-black/50 text-gray-200 border border-white/10 hover:bg-black/70'}
                            ${mutation.isPending ? "opacity-50 cursor-not-allowed" : ""}

      `}
        >
            <Heart className={`w-5 h-5 transition-colors ${liked ? 'text-white' : 'text-gray-400 hover:text-pink-400'}`} />
            {liked ? 'Liked' : 'Like'}
        </button>
    );
}
