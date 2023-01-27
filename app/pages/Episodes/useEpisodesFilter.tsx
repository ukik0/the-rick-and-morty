import { useState } from 'react';
import { useDebounce } from '@/utils/hooks/useDebounce';

export const useEpisodesFilter = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [episode, setEpisode] = useState<string>('');
    const [page, setPage] = useState<number>(1);

    const debouncedValue = useDebounce(searchValue, 300);

    const filters = {
        ...(episode && { episode: episode }),
        ...(searchValue && { name: debouncedValue }),
        ...(page && { page: page })
    };

    return {
        values: { searchValue, episode, page },
        functions: { setSearchValue, setEpisode, setPage },
        filters
    }
};
