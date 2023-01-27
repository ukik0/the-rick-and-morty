import { api } from '@/app/utils';

interface getFilteredEpisodesInterface {
    name?: Episode['name']
    episode?: Episode['episode']
    page?: number
}

export const episodesApi = {
    async getEpisode({id}: {id: number}) {
        return api.get<Result<Episode>>(`episode/${id}`);
    },
    async getEpisodes() {
        return api.get<Result<Episode[]>>('episode');
    },
    async getMultipleEpisodes({episodes}: {episodes: Episode['episode']}) {
        return api.get<Result<Episode[]>>(`episode/${episodes}`);
    },
    async getFilteredEpisodes({name, episode, page}: getFilteredEpisodesInterface) {
        return api.get<Result<Episode>[]>(`episode`, {
            params: { name: name, episode: episode, page: page } });
    }
}