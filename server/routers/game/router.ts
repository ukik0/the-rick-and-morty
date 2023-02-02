import {prisma, procedure, router, wrapFailure, wrapSuccess} from '@/server/utils';
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
        }),
    createPlayer: procedure
        .input(GAME_INPUT.createPlayer)
        .mutation(async ({ input }) => {
            const player = await prisma.player.create({
                data: {
                    name: input.name,
                    score: input.score,
                }
            })

            return wrapSuccess(player);
        }),
    getGamePlayers: procedure
        .input(GAME_INPUT.getGamePlayers)
        .query(async ({ input }) => {
            const players = await prisma.player.findMany({orderBy: {score: 'desc'}, take: 5})

            return wrapSuccess(players);
        }),
    isUniqueName: procedure
        .input(GAME_INPUT.isUniqueName)
        .mutation(async ({ input }) => {
            const player = await prisma.player.findFirst({where: {name: input.name}})

            if (player?.name) return wrapFailure(false)

            return wrapSuccess(true);
        }),
});
