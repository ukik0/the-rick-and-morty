import z from 'zod';

export const CHARACTERS_FILTER_INPUT = z
    .object({
        name: z.string().optional(),
        status: z
            .union([
                z.literal('alive'),
                z.literal('dead'),
                z.literal('unknown')
            ])
            .optional(),
        gender: z
            .union([
                z.literal('female'),
                z.literal('genderless'),
                z.literal('male'),
                z.literal('unknown')
            ])
            .optional(),
        page: z.number().optional()
    })
    .optional()

export const CHARACTERS_INPUT = {
    getCharacter: z.object({ id: z.number() }),
    getCharacters: z.object({ page: z.number() }),
    getMultipleCharacters: z.object({ id: z.string() })
}