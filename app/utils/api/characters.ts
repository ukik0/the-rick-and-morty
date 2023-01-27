import { api } from '@/app/utils';

interface getFilteredCharactersInterface {
    name?: Character['name']
    status?: Character['status']
    gender?: Character['gender']
    page?: number
}

export const charactersApi = {
    async getCharacter({id}: {id: Character['id']}) {
        return api.get<Character>(`character/${id}`);
    },
    async getCharacters({page}: {page?: number}) {
        return api.get<Result<Character[]>>('character', {
            params: { page: page }
        });
    },
    async getMultipleCharacters({id}: {id: string}) {
        return api.get<Result<Character>[]>(`character/${id}`);
    },
    async getFilteredCharacters({name, status, gender, page} : getFilteredCharactersInterface ) {
        return api.get<Result<Character>[]>(`character`, {
            params: { name, status, gender, page }
        });
    }
};
