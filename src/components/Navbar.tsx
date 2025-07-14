"use client"
import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname()

    const isTransparent = pathname === '/games' || pathname.startsWith('/games')
    return (
        <nav
            className={clsx(
                'w-full px-4 sm:px-8 lg:px-16 h-[78px] text-white z-50',
                {
                    'absolute top-0 left-0 bg-gradient-to-b from-black/80 to-transparent':
                        isTransparent,
                    'py-4 bg-gradient-to-br from-dark-gray to-black/80 shadow-md':
                        !isTransparent,
                }
            )}
            aria-label="Main navigation"
        >
            <div className="max-w-screen-lg mx-auto flex items-center justify-between">
                <Link
                    href="/"
                    className="font-title text-[32px] uppercase whitespace-nowrap text-white"
                >
                    Gamer<span className="text-light-blue">Box</span>
                </Link>
                <ul className="hidden sm:flex items-center gap-6 mt-2 font-body text-base">
                    <li>
                        <Link href="/" className="hover:text-discord-blue transition-colors duration-150">Home</Link>
                    </li>
                    <li>
                        <a href="#games" className="hover:text-discord-blue transition-colors duration-150">Games</a>
                    </li>
                    <li>
                        <Link href="/activity" className="hover:text-discord-blue transition-colors duration-150">Activity</Link>
                    </li>
                    <li>
                        <Link href="/members" className="hover:text-discord-blue transition-colors duration-150">Members</Link>
                    </li>
                </ul>
                <div className="sm:hidden">
                    <MobileMenu />
                </div>
            </div>
        </nav>
    );
}
