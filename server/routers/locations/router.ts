import { procedure, router, wrapSuccess } from '@/server/utils';
import { api } from '@/app/utils';
import { wrapFailure } from '@/server/utils/wrapFailure';
import { LOCATIONS_INPUT } from '@/server/routers/locations/schemas';
import { locationsApi } from '@/utils/api/locations';

export const locationsRouter = router({
    getLocations: procedure
        .input(LOCATIONS_INPUT.getLocations)
        .query(async ({ input }) => {
            const locations = await locationsApi.getLocations();

            return wrapSuccess(locations.data);
        }),
    getFilteredLocations: procedure
        .input(LOCATIONS_INPUT.getFilteredLocations)
        .query(async ({ input }) => {
            const locations = await locationsApi.getFilteredLocations({
                name: input?.name,
                page: input?.page,
                type: input?.type,
                dimension: input?.dimension
            });

            if (!locations) return wrapFailure(locations);

            return wrapSuccess(locations.data);
        })
});
