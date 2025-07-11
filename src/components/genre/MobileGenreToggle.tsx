"use client"
import { Genre } from '@/types';
import { X } from 'lucide-react';
import React, { useRef, useState } from 'react'
import GenreItem from './GenreItem';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function MobileGenreToggle({ genres }: { genres: Genre[] }) {
    const drawerRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false)
    }
    useGSAP(() => {
        if (isOpen && drawerRef.current) {
            gsap.fromTo(
                drawerRef.current,
                { x: "100%", },
                { x: "0%", duration: 0.35, ease: "power2.out" }
            );
        }
    }, [isOpen])
    return (
        <div className="sm:hidden fixed bottom-20 left-2 z-50">
            <button
                onClick={() => setIsOpen(true)}
                className="fixed font-title text- bottom-4 right-4 bg-light-blue hover:bg-light-orange/90 text-black px-4 py-2 rounded-full shadow-md transition"
                aria-label="Open genre menu"
            >
                🎮 Genres
            </button>
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        onClick={handleClose}
                    />
                    <div
                        className="fixed right-0 top-0 h-full w-72 bg-dark-gray text-white z-50 shadow-lg px-6 py-8 flex flex-col gap-6"
                        ref={drawerRef}
                    >
                        <button
                            onClick={handleClose}
                            className="self-end text-light-blue"
                            aria-label="Close menu"
                        >
                            <X size={28} />
                        </button>
                        <div className="flex flex-col gap-6 text-lg font-body">
                            {genres.map((genre) =>
                                <GenreItem key={genre.id} genre={genre} />
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
