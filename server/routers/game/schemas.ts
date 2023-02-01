import z from 'zod';

export const GAME_INPUT = {
    checkCharacterStatus: z.object({
        id: z.number(),
        status: z.union([
            z.literal('alive'),
            z.literal('dead'),
            z.literal('unknown')
        ])
    })
};
