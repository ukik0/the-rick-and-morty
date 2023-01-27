import z from 'zod';

export const EPISODES_INPUT = {
    getEpisodes: z.object({}),
    getMultipleEpisodes: z.object({episodes: z.string()}),
    getFilteredEpisodes: z.object({
        name: z.string().optional(),
        episode: z.string().optional(),
        page: z.number().optional(),
    }).optional()
}