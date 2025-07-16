"use client"
import React, { useState } from 'react'

export default function GameDescription({ description }: { description: string }) {
    const [expanded, setExpanded] = useState(false);
    const cleaned = description.replace(/\r/g, '');

    const paragraphs = cleaned
        .split(/\n{2,}|(?<=\.)\s*\n+/) 
        .map(p => p.trim())
        .filter(Boolean);
    const MAX_VISIBLE_PARAGRAPHS = 4;
    return (
        <div className="relative">
            {paragraphs.slice(0, expanded ? paragraphs.length : MAX_VISIBLE_PARAGRAPHS).map((p, i) => (
                <p key={i} className="text-sm mb-2">{p}</p>
            ))}
            {paragraphs.length > MAX_VISIBLE_PARAGRAPHS && (
                <button
                    onClick={() => setExpanded(prev => !prev)}
                    className="text-light-purple hover:underline text-sm font-semibold mt-2 cursor-pointer"
                >
                    {expanded ? 'Read less' : 'Read more'}
                </button>
            )}
        </div>
    )
}
