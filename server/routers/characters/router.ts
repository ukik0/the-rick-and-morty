import { procedure, router } from '@/server/utils/trpc';
import { wrapSuccess } from '@/server/utils';
import { CHARACTERS_FILTER_INPUT, CHARACTERS_INPUT } from '@/server/routers/characters/schemas';
import { charactersApi } from '@/utils/api/characters';

export const charactersRouter = router({
    getCharacter: procedure
        .input(CHARACTERS_INPUT.getCharacter)
        .query(async ({ input }) => {
            const character = await charactersApi.getCharacter({
                id: input.id
            });

            return wrapSuccess(character.data);
        }),
    getCharacters: procedure
        .input(CHARACTERS_INPUT.getCharacters)
        .query(async ({ input }) => {
            const characters = await charactersApi.getCharacters({
                page: input.page
            });

            return wrapSuccess(characters.data);
        }),
    getMultipleCharacters: procedure
        .input(CHARACTERS_INPUT.getMultipleCharacters)
        .query(async ({ input }) => {
            const characters = await charactersApi.getMultipleCharacters({
                id: input.id
            });

            return wrapSuccess(characters.data);
        }),
    getFilteredCharacters: procedure
        .input(CHARACTERS_FILTER_INPUT)
        .query(async ({ input }) => {
            const characters = await charactersApi.getFilteredCharacters({
                name: input?.name,
                page: input?.page,
                status: input?.status,
                gender: input?.gender
            });

            return wrapSuccess(characters.data);
        })
});
