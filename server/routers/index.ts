import {initTRPC} from '@trpc/server';
import {charactersRouter} from '@/server/routers/characters/router';
import {episodesRouter} from '@/server/routers/episodes/router';
import {locationsRouter} from '@/server/routers/locations/router';
import {gameRouter} from "@/server/routers/game/router";

const trpc = initTRPC.create();

export const appRouter = trpc.mergeRouters(charactersRouter, episodesRouter, locationsRouter, gameRouter);
export type AppRouter = typeof appRouter;
