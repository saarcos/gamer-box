"use client"
import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import UserMenu from './UserMenu';
import ScrollToPopularGames from './ScrollToPopularGames';

export default function Navbar() {
    const { user, isSignedIn } = useUser();
    const pathname = usePathname()
    const isTransparent = pathname === '/games' || pathname.startsWith('/games') || pathname === '/'
    return (
        <nav
            className={clsx(
                'w-full px-4 sm:px-8 lg:px-16 h-[78px] text-white z-50',
                {
                    'absolute top-0 left-0 bg-gradient-to-b from-black/80 to-transparent':
                        isTransparent,
                    'py-4 bg-gradient-to-b from-[#1e293a] to-[#0A0015] shadow-md':
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
                    Gamer<span className="text-light-pink">Box</span>
                </Link>
                <ul className="hidden sm:flex items-center gap-6 mt-2 font-body text-base">
                    <li>
                        <Link href="/" className="hover:text-light-purple transition-colors duration-150">Home</Link>
                    </li>
                    <li>
                        <ScrollToPopularGames />
                    </li>
                    <li>
                        <Link href="/members" className="hover:text-light-purple transition-colors duration-150">Members</Link>
                    </li>
                    {isSignedIn ? (
                        <UserMenu user={user} />
                    ) : (
                        <li>
                            <Link
                                href="/sign-in"
                                className="hover:text-light-purple transition-colors duration-150 cursor-pointer"
                            >
                                Log in
                            </Link>
                        </li>
                    )}
                </ul>
                <div className="sm:hidden">
                    <MobileMenu user={user} isSignedIn={isSignedIn} />
                </div>
            </div>
        </nav>
    );
}
