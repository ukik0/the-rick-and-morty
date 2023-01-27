import { trpc } from '@/utils/trpc';

interface InfoCount {
    episodesCount: number;
    charactersCount: number;
    locationsCount: number;
}

export default function useCountInfo(): InfoCount {
    const episodes = trpc.getEpisodes.useQuery({});
    const characters = trpc.getCharacters.useQuery({page: 1});
    const locations = trpc.getLocations.useQuery({});

    if (!episodes.data || !characters.data || !locations.data) return {episodesCount: 0, charactersCount: 0, locationsCount: 0}

    const episodesCount = episodes.data.response.info.count;
    const charactersCount = characters.data.response.info.count;
    const locationsCount = locations.data.response.info.count;

    return { episodesCount, charactersCount, locationsCount };
}
