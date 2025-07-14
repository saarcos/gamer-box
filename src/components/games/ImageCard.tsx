// ImageCard.tsx
import { Screenshot } from '@/types'
import Image from 'next/image'
import React, { SetStateAction } from 'react'

type Props = {
    screenshot: Screenshot,
    setSelectedImage: React.Dispatch<SetStateAction<string | null>>
}
export default function ImageCard({ screenshot, setSelectedImage }: Props) {
    return (
        <div
            className="relative w-full aspect-[16/9] overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(screenshot.image)}
        >
            <Image
                src={screenshot.image}
                fill
                alt="Game screenshot"
                className="object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
            />
        </div>
    )
}
