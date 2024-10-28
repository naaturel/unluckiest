const api_url = import.meta.env.VITE_SERVER_API_URL

// @ts-ignore
export const load = async ( {fetch} ) => {

    const res = await fetch(`${api_url}/leaderboard`)
    const leaderboard = await res.json()
    return { leaderboard };
}
