import z from 'zod';

export const GAME_INPUT = {
    checkCharacterStatus: z.object({
        id: z.number(),
        status: z.union([
            z.literal('alive'),
            z.literal('dead'),
            z.literal('unknown')
        ])
    }),
    createPlayer: z.object({
        name: z.string(),
        score: z.number(),
    }),
    getGamePlayers: z.object({}),
    isUniqueName: z.object({name: z.string()})
};
