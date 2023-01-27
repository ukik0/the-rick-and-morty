import z from 'zod';

export const LOCATIONS_INPUT = {
    getLocations: z.object({}),
    getFilteredLocations:  z.object({
        name: z.string().optional(),
        type: z.string().optional(),
        dimension: z.string().optional(),
        page: z.number().optional(),
    }).optional()
}