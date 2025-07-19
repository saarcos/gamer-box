import GamesClient from "@/components/games/GamesClient";
import MobileGenreToggle from "@/components/genre/MobileGenreToggle"
import HomeBanner from "@/components/home/HomeBanner";
import ScrollToGames from "@/components/ScrollToGames";
import Sidebar from "@/components/Sidebar"
import { Game } from "@/types";
const mockGames: Game[] = [
  {
    id: 58617,
    slug: "borderlands-3",
    name: "Borderlands 3",
    playtime: 11,
    released: "2019-09-13",
    background_image: "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
    metacritic: 83,
    platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 187, name: "PlayStation 5", slug: "playstation5" } },
      { platform: { id: 3, name: "Xbox One", slug: "xbox-one" } },
    ],
    stores: [
      { store: { id: 1, name: "Steam", slug: "steam" } },
      { store: { id: 3, name: "PlayStation Store", slug: "playstation-store" } },
      { store: { id: 2, name: "Xbox Store", slug: "xbox-store" } },
    ],
    genres: [
      { id: 2, name: "Shooter", slug: "shooter" },
      { id: 3, name: "Adventure", slug: "adventure" },
      { id: 4, name: "Action", slug: "action" },
    ],
    short_screenshots: [
      {
        id: -1,
        image: "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
      },
      {
        id: 2597139,
        image: "https://media.rawg.io/media/screenshots/85f/85fa0742541492cb4b2562311d455918.jpg",
      },
      {
        id: 2597140,
        image: "https://media.rawg.io/media/screenshots/1b6/1b6159bbc9e33c29cfd47cac82322b48.jpg",
      },
    ],
  },
  {
    id: 58619,
    slug: "borderlands-3",
    name: "Borderlands 3",
    playtime: 11,
    released: "2019-09-13",
    background_image: "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
    metacritic: 83,
    platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 187, name: "PlayStation 5", slug: "playstation5" } },
      { platform: { id: 3, name: "Xbox One", slug: "xbox-one" } },
    ],
    stores: [
      { store: { id: 1, name: "Steam", slug: "steam" } },
      { store: { id: 3, name: "PlayStation Store", slug: "playstation-store" } },
      { store: { id: 2, name: "Xbox Store", slug: "xbox-store" } },
    ],
    genres: [
      { id: 2, name: "Shooter", slug: "shooter" },
      { id: 3, name: "Adventure", slug: "adventure" },
      { id: 4, name: "Action", slug: "action" },
    ],
    short_screenshots: [
      {
        id: -1,
        image: "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
      },
      {
        id: 2597139,
        image: "https://media.rawg.io/media/screenshots/85f/85fa0742541492cb4b2562311d455918.jpg",
      },
      {
        id: 2597140,
        image: "https://media.rawg.io/media/screenshots/1b6/1b6159bbc9e33c29cfd47cac82322b48.jpg",
      },
    ],
  },
  {
    id: 58618,
    slug: "borderlands-3-alt",
    name: "Borderlands 3: Redux",
    playtime: 8,
    released: "2020-05-10",
    background_image: "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
    metacritic: 80,
    platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 18, name: "PlayStation 4", slug: "playstation4" } },
    ],
    stores: [
      { store: { id: 11, name: "Epic Games", slug: "epic-games" } },
    ],
    genres: [
      { id: 4, name: "Action", slug: "action" },
      { id: 5, name: "RPG", slug: "role-playing-games-rpg" },
    ],
    short_screenshots: [
      {
        id: 2597141,
        image: "https://media.rawg.io/media/screenshots/825/8255610d24155b27576155b21eda167d.jpg",
      },
      {
        id: 2597142,
        image: "https://media.rawg.io/media/screenshots/9ab/9aba5fc11168844159e3fe83d7327294.jpg",
      },
    ],
  },
  {
    id: 58620,
    slug: "borderlands-3-alt",
    name: "Borderlands 3: Redux",
    playtime: 8,
    released: "2020-05-10",
    background_image: "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
    metacritic: 80,
    platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 18, name: "PlayStation 4", slug: "playstation4" } },
    ],
    stores: [
      { store: { id: 11, name: "Epic Games", slug: "epic-games" } },
    ],
    genres: [
      { id: 4, name: "Action", slug: "action" },
      { id: 5, name: "RPG", slug: "role-playing-games-rpg" },
    ],
    short_screenshots: [
      {
        id: 2597141,
        image: "https://media.rawg.io/media/screenshots/825/8255610d24155b27576155b21eda167d.jpg",
      },
      {
        id: 2597142,
        image: "https://media.rawg.io/media/screenshots/9ab/9aba5fc11168844159e3fe83d7327294.jpg",
      },
    ],
  },
  {
    id: 58623,
    slug: "borderlands-3-alt",
    name: "Borderlands 3: Redux",
    playtime: 8,
    released: "2020-05-10",
    background_image: "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
    metacritic: 80,
    platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 18, name: "PlayStation 4", slug: "playstation4" } },
    ],
    stores: [
      { store: { id: 11, name: "Epic Games", slug: "epic-games" } },
    ],
    genres: [
      { id: 4, name: "Action", slug: "action" },
      { id: 5, name: "RPG", slug: "role-playing-games-rpg" },
    ],
    short_screenshots: [
      {
        id: 2597141,
        image: "https://media.rawg.io/media/screenshots/825/8255610d24155b27576155b21eda167d.jpg",
      },
      {
        id: 2597142,
        image: "https://media.rawg.io/media/screenshots/9ab/9aba5fc11168844159e3fe83d7327294.jpg",
      },
    ],
  },
  {
    id: 58625,
    slug: "borderlands-3-alt",
    name: "Borderlands 3: Redux",
    playtime: 8,
    released: "2020-05-10",
    background_image: "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
    metacritic: 80,
    platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 18, name: "PlayStation 4", slug: "playstation4" } },
    ],
    stores: [
      { store: { id: 11, name: "Epic Games", slug: "epic-games" } },
    ],
    genres: [
      { id: 4, name: "Action", slug: "action" },
      { id: 5, name: "RPG", slug: "role-playing-games-rpg" },
    ],
    short_screenshots: [
      {
        id: 2597141,
        image: "https://media.rawg.io/media/screenshots/825/8255610d24155b27576155b21eda167d.jpg",
      },
      {
        id: 2597142,
        image: "https://media.rawg.io/media/screenshots/9ab/9aba5fc11168844159e3fe83d7327294.jpg",
      },
    ],
  },
  {
    id: 58626,
    slug: "borderlands-3-alt",
    name: "Borderlands 3: Redux",
    playtime: 8,
    released: "2020-05-10",
    background_image: "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
    metacritic: 80,
    platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 18, name: "PlayStation 4", slug: "playstation4" } },
    ],
    stores: [
      { store: { id: 11, name: "Epic Games", slug: "epic-games" } },
    ],
    genres: [
      { id: 4, name: "Action", slug: "action" },
      { id: 5, name: "RPG", slug: "role-playing-games-rpg" },
    ],
    short_screenshots: [
      {
        id: 2597141,
        image: "https://media.rawg.io/media/screenshots/825/8255610d24155b27576155b21eda167d.jpg",
      },
      {
        id: 2597142,
        image: "https://media.rawg.io/media/screenshots/9ab/9aba5fc11168844159e3fe83d7327294.jpg",
      },
    ],
  },
  {
    id: 58627,
    slug: "borderlands-3-alt",
    name: "Borderlands 3: Redux",
    playtime: 8,
    released: "2020-05-10",
    background_image: "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
    metacritic: 80,
    platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 18, name: "PlayStation 4", slug: "playstation4" } },
    ],
    stores: [
      { store: { id: 11, name: "Epic Games", slug: "epic-games" } },
    ],
    genres: [
      { id: 4, name: "Action", slug: "action" },
      { id: 5, name: "RPG", slug: "role-playing-games-rpg" },
    ],
    short_screenshots: [
      {
        id: 2597141,
        image: "https://media.rawg.io/media/screenshots/825/8255610d24155b27576155b21eda167d.jpg",
      },
      {
        id: 2597142,
        image: "https://media.rawg.io/media/screenshots/9ab/9aba5fc11168844159e3fe83d7327294.jpg",
      },
    ],
  },
  {
    id: 58628,
    slug: "borderlands-3-alt",
    name: "Borderlands 3: Redux",
    playtime: 8,
    released: "2020-05-10",
    background_image: "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
    metacritic: 80,
    platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 18, name: "PlayStation 4", slug: "playstation4" } },
    ],
    stores: [
      { store: { id: 11, name: "Epic Games", slug: "epic-games" } },
    ],
    genres: [
      { id: 4, name: "Action", slug: "action" },
      { id: 5, name: "RPG", slug: "role-playing-games-rpg" },
    ],
    short_screenshots: [
      {
        id: 2597141,
        image: "https://media.rawg.io/media/screenshots/825/8255610d24155b27576155b21eda167d.jpg",
      },
      {
        id: 2597142,
        image: "https://media.rawg.io/media/screenshots/9ab/9aba5fc11168844159e3fe83d7327294.jpg",
      },
    ],
  },
];
const Homepage = () => {
  const mockGenres = [
    { id: 1, name: "Action", image_background: "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg" },
    { id: 2, name: "Adventure", image_background: "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg" },
    { id: 3, name: "RPG", image_background: "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg" },
    { id: 4, name: "Shooter", image_background: "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg" },
    { id: 5, name: "Strategy", image_background: "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg" },
    { id: 6, name: "Sports", image_background: "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg" },
    { id: 7, name: "Racing", image_background: "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg" },
  ];

  return (
    <div>
      <ScrollToGames/>
      <HomeBanner />
      <div id="popularGames" className="flex flex-col bg-gray-950/30 mt-3">
        <div className="text-center text-white">
          <h2 className="text-4xl font-title uppercase tracking-wide">
            Discover <span className="text-light-purple">Games</span>
          </h2>
          <div className="h-1 w-24 bg-light-pink mx-auto mt-2 rounded-full" />
        </div>
        <section className="flex min-h-[calc(100vh-74px)] w-full md:space-x-8 px-8 py-8 lg:px-10">
          <MobileGenreToggle genres={mockGenres} />
          <div className="hidden md:block w-[220px] lg:w-[250px] xl:w-[270px] bg-gray min-h-screen">
            <Sidebar genres={mockGenres} />
          </div>
          <div className="flex-1 w-full space-y-8">
            <GamesClient initialGames={mockGames} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Homepage