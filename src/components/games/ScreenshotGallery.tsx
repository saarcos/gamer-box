"use client"
import { Screenshot } from '@/types'
import React, { useState } from 'react'
import ImageCard from './ImageCard'
import Image from 'next/image';

export default function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    return (
        <>
            <div className="flex gap-3 overflow-x-auto sm:hidden px-4 -mx-4 snap-x snap-mandatory">
                {screenshots.map((screenshot) => (
                    <div
                        key={screenshot.id}
                        className="relative min-w-[200px] h-[120px] rounded-md overflow-hidden shadow-md flex-shrink-0 snap-start"
                    >
                        <ImageCard screenshot={screenshot} setSelectedImage={setSelectedImage} />
                    </div>
                ))}
            </div>
            <div className="hidden sm:grid grid-cols-3 gap-4">
                {screenshots.map((screenshot) => (
                    <div
                        key={screenshot.id}
                        className="relative w-full aspect-video rounded-md overflow-hidden shadow-md"
                    >
                        <ImageCard screenshot={screenshot} setSelectedImage={setSelectedImage} />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className='fixed inset-0 bg-dark-purple/70 z-50 flex items-center justify-center' onClick={() => setSelectedImage(null)}>
                    <div className="relative w-[90vw] max-w-5xl aspect-video">
                        <Image
                            src={selectedImage}
                            alt="Expanded screenshot"
                            fill
                            className="object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </>

    )
}
