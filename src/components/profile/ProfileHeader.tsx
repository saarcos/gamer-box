"use client";

import { useClerk } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
interface SerializedUser {
    imageUrl: string ;
    username: string ;
}
interface ProfileHeaderProps {
    user: SerializedUser;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
    const { openUserProfile } = useClerk();
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-4">
                <Image
                    src={user.imageUrl}
                    alt="User Avatar"
                    width={72}
                    height={72}
                    className="rounded-full border border-light-purple"
                />
                <div>
                    <p className="font-title text-2xl text-white">{user.username}</p>
                    <button
                        onClick={() => openUserProfile()}
                        className="cursor-pointer mt-1 bg-light-pink hover:bg-pink-400 transition-colors font-title text-sm text-white px-3 py-1 rounded-md"
                    >
                        Edit Profile
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-6 font-body text-center">
                <ProfileStat number="120" label="Games" />
                <ProfileStat number="10" label="Following" />
                <ProfileStat number="20" label="Followers" borderRight={false} />
            </div>
        </div>
    );
}

function ProfileStat({
    number,
    label,
    borderRight = true,
}: {
    number: string;
    label: string;
    borderRight?: boolean;
}) {
    return (
        <Link
            href="/"
            className={`flex flex-col gap-1 items-center px-3 ${borderRight ? "border-r border-light-purple" : ""
                }`}
        >
            <span className="text-light-purple font-title text-2xl">{number}</span>
            <span className="text-white">{label}</span>
        </Link>
    );
}