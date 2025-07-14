import { Star, StarHalf } from 'lucide-react';
import React from 'react';

export default function ReviewStars({ rating }: { rating: number }) {
    const isDecimal = rating % 1 !== 0;

    const renderStars = () => {
        let stars = [];

        const fullStars = Math.floor(rating);
        const arr = Array.from({ length: fullStars }, (_, i) => i + 1);
        stars = arr.map((star) => (
            <Star key={`full-${star}`} className="w-3 h-3 text-discord-blue" />
        ));

        if (isDecimal) {
            stars.push(
                <StarHalf key="half" className="w-3 h-3 text-discord-blue" />
            );
        }

        return stars;
    };

    return (
        <div className="flex items-center gap-1">
            {renderStars()}
        </div>
    );
}
