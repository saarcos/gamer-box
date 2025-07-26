"use client";
import { GameStatus } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Gamepad2 } from "lucide-react";
import React from "react";

type Props = {
    initialStatus: boolean;
    gameId: number;
};

export default function PlayedButton({ initialStatus, gameId }: Props) {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: async () => {
            await axios.post(
                "/api/game-status",
                { gameId, status: "played"},
                { withCredentials: true }
            );
        },
        onMutate: async (nextStatus: boolean) => {
            await queryClient.cancelQueries({ queryKey: ["gameStatus", gameId] });

            const previous = queryClient.getQueryData(["gameStatus", gameId]);

            queryClient.setQueryData(["gameStatus", gameId], {
                ...(previous || {}),
                played: nextStatus,
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
    });
    const played =
        (queryClient.getQueryData<GameStatus>(["gameStatus", gameId])?.played) ??
        initialStatus;
    const handleClick = () => {
        mutation.mutate(!played)
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={mutation.isPending}
            className={`
        cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full shadow-lg
        text-sm font-semibold transition-all duration-200 backdrop-blur
        ${played
                    ? "bg-indigo-500/70 text-white hover:bg-indigo-500/50"
                    : "bg-black/50 text-gray-200 border border-white/10 hover:bg-black/70"}
        ${mutation.isPending ? "opacity-50 cursor-not-allowed" : ""}
      `}
        >
            <Gamepad2
                className={`w-5 h-5 transition-colors ${played ? "text-white" : "text-gray-400 hover:text-indigo-200"
                    }`}
            />
            {played ? "Played" : "Played?"}
        </button>
    );
}
