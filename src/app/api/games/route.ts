import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const next = searchParams.get('next');

  const baseUrl = `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page_size=12&ordering=-released&dates=2000-01-01,${new Date().toISOString().split('T')[0]}&metacritic=1,100`;

  const url = next || baseUrl;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching games:', error);
    return NextResponse.json({ error: 'Error fetching data from RAWG API' }, { status: 500 });
  }
}

