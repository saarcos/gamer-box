"use client"
import { transformCount } from '@/lib/members'
import { Member } from '@/types'
import { Gamepad2, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const mockUsersFromBackend: Member[] = [
    {
        id: 'u1',
        username: 'valenplayz',
        imageUrl: '/images/profile_pic.jpeg',
        followers: 7842,
        gamesCount: 2121,
        reviewsCount: 843,
    },
    {
        id: 'u2',
        username: 'leonmaster',
        imageUrl: '/images/profile_pic.jpeg',
        followers: 9500,
        gamesCount: 3050,
        reviewsCount: 1300,
    },
    {
        id: 'u3',
        username: 'daniReyes',
        imageUrl: '/images/profile_pic.jpeg',
        followers: 6211,
        gamesCount: 1980,
        reviewsCount: 700,
    },
    {
        id: 'u4',
        username: 'gabegamer',
        imageUrl: '/images/profile_pic.jpeg',
        followers: 8375,
        gamesCount: 2800,
        reviewsCount: 1105,
    },
];
export default function AllMembers() {
    const [members, setMembers] = useState<Member[]>([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(mockUsersFromBackend.length / itemsPerPage);
    useEffect(() => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setMembers(mockUsersFromBackend.slice(startIndex, endIndex));
    }, [page]);
    return (
        <div className='mt-10 w-full'>
            <h2 className='font-title text-2xl text-center text-white mb-6'>View All Members</h2>
            <div className='max-w-3xl mx-auto flex flex-col gap-4'>
                {members.map((member) => (
                    <div key={member.id} className='flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 shadow-sm hover:bg-white/10 transition-colors'>
                        <div className='flex items-center gap-3'>
                            <Image
                                src={member.imageUrl}
                                alt={member.username}
                                width={48}
                                height={48}
                                className='rounded-full border-2 border-light-purple object-cover'
                            />
                            <div className='flex flex-col'>
                                <Link href={`/profile/1`} className='text-white font-semibold hover:underline'>
                                    <span className='text-sm font-semibold text-white'>{member.username}</span>
                                </Link>
                                <span className='text-xs text-slate-400'>{transformCount(member.reviewsCount)} reviews</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-1 text-xs text-slate-400'>
                                <Gamepad2 className='w-4 h-4' />
                                <span>{transformCount(member.gamesCount)} games played</span>
                            </div>
                            <button className='cursor-pointer p-2 rounded-full bg-light-purple hover:bg-purple-600 transition-colors'>
                                <Plus className='w-4 h-4 text-white' />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination className="mt-6 flex justify-center">
                <PaginationContent className="gap-2">
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setPage((p) => Math.max(p - 1, 1))
                            }}
                            className="bg-dark-purple text-white px-3 py-1.5 rounded-md border border-white/10 hover:bg-light-purple hover:text-white transition-colors disabled:opacity-50"
                        />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPage(index + 1)
                                }}
                                isActive={index + 1 === page}
                                className={`
            px-3 py-1.5 rounded-md border border-white/10 transition-colors
            ${index + 1 === page
                                        ? 'bg-light-purple text-white hover:bg-light-purple hover:text-white'
                                        : 'bg-dark-purple text-white hover:bg-light-purple hover:text-white'}
          `}
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setPage((p) => Math.min(p + 1, totalPages))
                            }}
                            className="bg-dark-purple text-white px-3 py-1.5 rounded-md border border-white/10 hover:bg-light-purple hover:text-white transition-colors disabled:opacity-50"
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}
