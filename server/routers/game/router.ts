import {procedure, router, wrapFailure, wrapSuccess} from '@/server/utils';
import {charactersApi} from "@/app/utils";
import {GAME_INPUT} from "@/server/routers/game/schemas";

export const gameRouter = router({
    checkCharacterStatus: procedure
        .input(GAME_INPUT.checkCharacterStatus)
        .mutation(async ({ input }) => {
            const characterResponse = await charactersApi.getCharacter({id: input.id});

            const isStatusCorrect = input.status === characterResponse.data.status.toLowerCase();

            if (isStatusCorrect) return wrapSuccess(true);

            return wrapFailure(false);
        })
});
