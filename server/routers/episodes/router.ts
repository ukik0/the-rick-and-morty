import {procedure, router, wrapSuccess} from '@/server/utils';
import {wrapFailure} from '@/server/utils/wrapFailure';
import {EPISODES_INPUT} from '@/server/routers/episodes/schemas';
import {episodesApi} from '@/utils/api/episodes';

export const episodesRouter = router({
    getEpisodes: procedure
        .input(EPISODES_INPUT.getEpisodes)
        .query(async ({ input }) => {
            const episodes = await episodesApi.getEpisodes();

            return wrapSuccess(episodes.data);
        }),
    getMultipleEpisodes: procedure
        .input(EPISODES_INPUT.getMultipleEpisodes)
        .query(async ({ input }) => {
            const episodes = await episodesApi.getMultipleEpisodes({
                episodes: input.episodes
            });

            return wrapSuccess(episodes.data);
        }),
    getFilteredEpisodes: procedure
        .input(EPISODES_INPUT.getFilteredEpisodes)
        .query(async ({ input }) => {
            const episodes = await episodesApi.getFilteredEpisodes({
                name: input?.name,
                episode: input?.episode,
                page: input?.page
            });

            if (episodes.status !== 200) return wrapFailure(episodes);

            return wrapSuccess(episodes.data);
        })
});
