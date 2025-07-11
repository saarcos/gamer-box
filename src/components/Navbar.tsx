import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'

export default function Navbar() {
    return (
        <nav
            className="fixed top-0 left-0 z-50 w-full h-[78px] flex items-center justify-between px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-dark-gray to-black/80 text-white"
            aria-label="Main navigation"
        >
            <Link
                href="/"
                className="font-title text-[32px] uppercase whitespace-nowrap text-white"
            >
                Gamer<span className="text-light-blue">Box</span>
            </Link>
            <ul className="hidden sm:flex items-center gap-6 font-body text-base">
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
        </nav>
    );
}

