export type Genre = {
    id: number,
    name: string,
    image_background: string,
}
export type Game = {
    id: number;
    slug: string;
    name: string;
    playtime: number;
    released: string;
    background_image: string;
    metacritic: number;
    platforms: {
        platform: {
            id: number;
            name: string;
            slug: string;
        };
    }[];
    stores: {
        store: {
            id: number;
            name: string;
            slug: string;
        };
    }[];
    genres: {
        id: number;
        name: string;
        slug: string;
    }[];
    short_screenshots: {
        id: number;
        image: string;
    }[];
};
export interface RawgGamesResponse {
    count: number;
    description: string;
    next: string | null;
    previous: string | null;
    results: Game[];
}
export type Review = {
    id: string;
    userId: string;
    username: string;
    gameId: number;
    rating: number;
    userLiked: boolean;
    review?: string;
    createdAt: string;
};
export type Screenshot = {
    id: number;
    image: string;
    width: number;
    height: number;
    is_deleted: boolean;
};


export type GameDetail = {
    id: number;
    slug: string;
    name: string;
    playtime: number;
    released: string;
    background_image: string;
    background_image_additional?: string;
    description_raw: string;

    platforms: {
        platform: {
            id: number;
            name: string;
            slug: string;
            image_background?: string | null;
        };
        released_at?: string;
        requirements?: {
            minimum?: string;
            recommended?: string;
        };
    }[];

    genres: {
        id: number;
        name: string;
        slug: string;
    }[];

    developers?: {
        id: number;
        name: string;
        slug: string;
        image_background?: string;
    }[];

    publishers?: {
        id: number;
        name: string;
        slug: string;
        image_background?: string;
    }[];

    esrb_rating?: {
        id: number;
        name: string;
        slug: string;
    };

    stores?: {
        id: number;
        url: string;
        store: {
            id: number;
            name: string;
            slug: string;
            domain: string;
            image_background?: string;
        };
    }[];

    averageUserRating: number | null;
    totalReviews: number;
    screenshots?: Screenshot[];
};

export type RecentActivity = {
    reviewId: string;
    createdAt: string;
    rating: number;
    content: string;
    gameId: number;
    game: Pick<Game, 'id' | 'name' | 'slug' | 'background_image'>;

};
export type ReviewWithGame = {
    id: string;
    createdAt: string;
    content: string;
    rating: number;
    likesCount: number;
    userLiked?: boolean;
    game: {
        id: number;
        name: string;
        slug: string;
        background_image: string;
        released: string;
    };
};

export type Member = {
    id: string;
    username: string;
    imageUrl: string;
    followers: number;
    gamesCount: number;
    reviewsCount: number;
}