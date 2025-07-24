import GamesClient from "@/components/games/GamesClient";
import MobileGenreToggle from "@/components/genre/MobileGenreToggle"
import HomeBanner from "@/components/home/HomeBanner";
import ScrollToGames from "@/components/ScrollToGames";
import Sidebar from "@/components/Sidebar"
import { RawgGamesResponse } from "@/types";

const Homepage = async () => {
  const today = new Date().toISOString().split('T')[0];
  const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}
  &page_size=12
  &dates=2000-01-01,${today}
  &metacritic=1,100`.replace(/\s+/g, ''), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) throw new Error('Games fetch failed');

  const data: RawgGamesResponse = await res.json();
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
      <ScrollToGames />
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
            <GamesClient initialGames={data.results} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Homepage