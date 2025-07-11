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
