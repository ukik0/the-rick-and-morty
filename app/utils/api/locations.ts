import { api } from '@/app/utils';

interface getFilteredLocationsInterface {
    name?: Location['name']
    type?: Location['type']
    dimension?: Location['dimension']
    page?: number
}

export const locationsApi = {
    async getLocation({id}: {id: number}) {
        return api.get<Result<Location[]>>(`location/${id}`);
    },
    async getLocations() {
        return api.get<Result<Location[]>>('location');
    },
    async getFilteredLocations({name, type, dimension, page}: getFilteredLocationsInterface) {
        return api.get<Result<Location>[]>(`location`, {
            params: {
                name: name,
                type: type,
                dimension: dimension,
                page: page
            }
        });
    }
}