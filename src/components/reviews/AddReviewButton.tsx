"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { GameDetail } from '@/types'
import Image from 'next/image'
import StarRating from '../games/StarRating'
import { Textarea } from '../ui/textarea'
import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import PlayedButton from '../games/PlayedButton'
import LikedButton from '../games/LikedButton'

type Props = {
  gameDetail: GameDetail;
};

export default function AddReviewButton({ gameDetail }: Props) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [comment, setComment] = useState('');

  const { data: gameStatus } = useQuery({
    queryKey: ['gameStatus', gameDetail.id],
    queryFn: async () => {
      const { data } = await axios.get(`/api/user-game-status/${gameDetail.id}`);
      return data;
    }
  });

  const { data: review, isLoading: isReviewLoading } = useQuery({
    queryKey: ['review', gameDetail.id],
    queryFn: async () => {
      const { data } = await axios.get(`/api/reviews/${gameDetail.id}/my-review`);
      return data;
    }
  });

  useEffect(() => {
    if (review) {
      setComment(review.comment ?? '');
    }
  }, [review]);

  const reviewMutation = useMutation({
    mutationFn: async (comment: string) => {
      await axios.post(`/api/reviews/${gameDetail.id}`, {
        rating: review?.rating,
        comment
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["review", gameDetail.id] });
    }
  });

  const handleSubmitReview = () => {
    if (!review) {
      alert('You have to add a rating first');
      return;
    }

    if (comment.trim() === '') {
      setErrorMessage('Please add a valid review before submitting');
      return;
    }

    reviewMutation.mutate(comment);
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outline"
        className="w-full border-2 border-light-purple text-white font-title text-lg px-4 py-3 rounded-lg transition hover:bg-light-purple/20 hover:text-white bg-transparent cursor-pointer"
        onClick={() => !isReviewLoading && setOpen(true)}
        disabled={isReviewLoading}
      >
        + Add Review
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-gradient-to-b from-[#100120] via-[#0C001A] to-[#170233] border border-neutral-700 w-full !max-w-4xl max-h-[90vh] overflow-y-auto p-6 rounded-xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-white font-title text-3xl">Write a Review</DialogTitle>
          </DialogHeader>

          <form className="flex flex-col gap-6 mt-2" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-6 text-white">
              <div className="hidden sm:block relative w-full max-w-[140px] aspect-[2/3] overflow-hidden rounded-lg border border-neutral-700 shadow-md">
                <Image
                  src={gameDetail.background_image}
                  alt="Game cover"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-4 flex-1 font-body">
                <h3 className="font-title text-2xl text-center sm:text-left text-light-purple">
                  {gameDetail.name}
                </h3>

                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                  {!gameStatus ? (
                    <div className="flex items-center gap-4 animate-pulse">
                      <div className="h-10 w-28 bg-white/10 rounded-full" />
                      <div className="h-10 w-28 bg-white/10 rounded-full" />
                    </div>
                  ) : (
                    <>
                      <PlayedButton gameId={gameDetail.id} initialStatus={gameStatus.played} />
                      <LikedButton gameId={gameDetail.id} initialStatus={gameStatus.liked} />
                    </>
                  )}
                  {review && (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 text-gray-200 border border-white/10 hover:bg-black/70 text-sm shadow-sm">
                      Your rating:
                      <StarRating review={review} gameId={gameDetail.id} />
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <Textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full h-32 p-3 rounded-lg bg-black/50 text-gray-200 border border-white/10 hover:bg-black/70 resize-none focus:outline-none focus:ring-2 focus:ring-light-purple/60"
                    placeholder="Write your review..."
                  />
                  {errorMessage && (
                    <p className="text-red-500 font-title text-base font-semibold">{errorMessage}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="text-right">
              <Button
                onClick={handleSubmitReview}
                type="button"
                disabled={reviewMutation.isPending}
                className="border-2 border-light-purple text-white font-title text-lg px-4 py-3 rounded-lg transition hover:bg-light-purple/20 hover:text-white bg-transparent cursor-pointer"
              >
                {reviewMutation.isPending ? 'Submitting...' : 'Submit Review'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
