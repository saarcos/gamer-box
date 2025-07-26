"use client"
import { Review } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Star, StarHalf } from 'lucide-react'
import React, { useState } from 'react'

type Props = {
  review: Review | undefined,
  gameId: number,
}
export default function StarRating({ review, gameId }: Props) {
  const queryClient = useQueryClient();
  const ratingMutation = useMutation({
    mutationFn: async (newValue: number) => {
      await axios.post(
        `/api/reviews/${gameId}`, {
        rating: newValue,
      },)
    },
    onMutate: async (newValue: number) => {
      await queryClient.cancelQueries({ queryKey: ['review', gameId] });
      const previous = queryClient.getQueryData(["review", gameId]);
      queryClient.setQueryData(["review", gameId], {
        ...(previous || {}),
        rating: newValue,
      });
      return { previous };
    },
    onError: (_err, _nextValue, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["review", gameId], context.previous);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["review", gameId] });
    },
  });
  const rating = review?.rating ?? 0;
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = async (value: number) => {
    ratingMutation.mutate(value);
  }

  const handleHover = (value: number) => {
    if (!ratingMutation.isPending) setHoverRating(value);
  };

  const handleLeave = () => {
    if (!ratingMutation.isPending) setHoverRating(0);
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const leftValue = star - 0.5
        const rightValue = star

        const isHalfActive = hoverRating
          ? hoverRating === leftValue
          : rating === leftValue

        const isFullActive = hoverRating
          ? hoverRating >= rightValue
          : rating >= rightValue

        return (
          <div key={star} className="relative w-6 h-6 group">
            <div
              className="absolute left-0 top-0 w-1/2 h-full z-10"
              onMouseEnter={() => handleHover(leftValue)}
              onMouseLeave={handleLeave}
              onClick={() => handleClick(leftValue)}
            />
            <div
              className="absolute right-0 top-0 w-1/2 h-full z-10"
              onMouseEnter={() => handleHover(rightValue)}
              onMouseLeave={handleLeave}
              onClick={() => handleClick(rightValue)}
            />
            {isFullActive ? (
              <Star className="w-6 h-6 text-yellow-400 transition-transform group-hover:scale-110" fill="#facc15" />
            ) : isHalfActive ? (
              <StarHalf className="w-6 h-6 text-yellow-400 transition-transform group-hover:scale-110" fill="#facc15" />
            ) : (
              <Star className="w-6 h-6 text-white/40 transition-transform group-hover:scale-110" />
            )}
          </div>
        )
      })}
    </div>
  )
}
