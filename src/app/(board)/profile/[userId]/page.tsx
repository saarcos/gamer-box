import React from 'react'
import { currentUser } from '@clerk/nextjs/server';
import ProfileTabs from '@/components/profile/ProfileTabs';
import { Game, RecentActivity } from '@/types';
import ProfileHeader from '@/components/profile/ProfileHeader';
interface SerializedUser {
    imageUrl: string;
    username: string ;
}
export default async function Profile({params}:{params: Promise<{userId: string}>}) {
    const {userId} = await params;
    console.log(userId)
    
    const user = await currentUser();
    const mockActivity: RecentActivity[] = [
        {
            reviewId: 'r1',
            createdAt: '2025-07-15T14:23:00Z',
            rating: 4.5,
            content: 'Una experiencia increíble con una historia envolvente y un mundo muy vivo.',
            gameId: 3498,
            game: {
                id: 3498,
                name: "Grand Theft Auto V",
                slug: "grand-theft-auto-v",
                background_image: "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
            }
        },
        {
            reviewId: 'r2',
            createdAt: '2025-07-12T10:00:00Z',
            rating: 5,
            content: 'Uno de los mejores shooters que he jugado este año.',
            gameId: 5679,
            game: {
                id: 5679,
                name: "DOOM Eternal",
                slug: "doom-eternal",
                background_image: "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
            }
        },
        {
            reviewId: 'r3',
            createdAt: '2025-07-10T19:45:00Z',
            rating: 3.5,
            content: 'Divertido, aunque repetitivo en algunas partes.',
            gameId: 4200,
            game: {
                id: 4200,
                name: "Fall Guys",
                slug: "fall-guys",
                background_image: "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
            }
        },
        {
            reviewId: 'r4',
            createdAt: '2025-07-08T21:12:00Z',
            rating: 4,
            content: 'Un RPG impresionante con mucho contenido y excelentes personajes.',
            gameId: 3328,
            game: {
                id: 3328,
                name: "The Witcher 3: Wild Hunt",
                slug: "the-witcher-3-wild-hunt",
                background_image: "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
            }
        }
    ];

    const mockGames: Game[] = [
        {
            id: 3328,
            slug: "the-witcher-3-wild-hunt",
            name: "The Witcher 3: Wild Hunt",
            playtime: 120,
            released: "2015-05-18",
            background_image: "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
            metacritic: 92,
            platforms: [
                { platform: { id: 1, name: "PC", slug: "pc" } },
                { platform: { id: 2, name: "PlayStation 4", slug: "playstation4" } },
                { platform: { id: 3, name: "Xbox One", slug: "xbox-one" } },
            ],
            stores: [
                { store: { id: 1, name: "Steam", slug: "steam" } },
                { store: { id: 3, name: "PlayStation Store", slug: "playstation-store" } },
            ],
            genres: [
                { id: 4, name: "Action", slug: "action" },
                { id: 5, name: "RPG", slug: "role-playing-games-rpg" },
            ],
            short_screenshots: [
                { id: 101, image: "https://media.rawg.io/media/screenshots/0a1/0a17c6c6b7f0b9c6a87ee1df96f4f8c7.jpg" },
                { id: 102, image: "https://media.rawg.io/media/screenshots/51f/51f7efec249af7c888a370b9b01b91df.jpg" },
                { id: 103, image: "https://media.rawg.io/media/screenshots/3e2/3e270b647e4c7725cc3611ff27b11bfc.jpg" },
            ],
        },
        {
            id: 5679,
            slug: "doom-eternal",
            name: "DOOM Eternal",
            playtime: 25,
            released: "2020-03-20",
            background_image: "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
            metacritic: 90,
            platforms: [
                { platform: { id: 1, name: "PC", slug: "pc" } },
                { platform: { id: 2, name: "PlayStation 4", slug: "playstation4" } },
                { platform: { id: 3, name: "Xbox One", slug: "xbox-one" } },
                { platform: { id: 4, name: "Nintendo Switch", slug: "nintendo-switch" } },
            ],
            stores: [
                { store: { id: 1, name: "Steam", slug: "steam" } },
                { store: { id: 6, name: "Xbox Store", slug: "xbox-store" } },
            ],
            genres: [
                { id: 2, name: "Shooter", slug: "shooter" },
                { id: 1, name: "Action", slug: "action" },
            ],
            short_screenshots: [
                { id: 201, image: "https://media.rawg.io/media/screenshots/602/60284bc68897c4c56e87232590e4e653.jpg" },
                { id: 202, image: "https://media.rawg.io/media/screenshots/07c/07cd8f986a0d8e9b5bdf340eb8b7a25e.jpg" },
                { id: 203, image: "https://media.rawg.io/media/screenshots/b12/b12caa5a6aa4d99a9dc50c297e0ae82d.jpg" },
            ],
        },
    ];
    if (!user) {
        return <div className='text-white'>Loading...</div>
    }
    const serializedUser: SerializedUser = {
        imageUrl: user.imageUrl,
        username: user.username || 'Anonymous User',
    };
    return (
        <div className='min-h-[calc(100vh-78px)] max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-8 flex flex-col gap-6'>
            <span className='text-white'>Welcome user {userId}</span>
            <ProfileHeader user={serializedUser} />
            <ProfileTabs activities={mockActivity} likedGames={mockGames} />
        </div>
    )
}
