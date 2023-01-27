import { useState } from 'react';
import { useDebounce } from '@/utils/hooks/useDebounce';

export const useLocationsFilter = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [dimension, setDimension] = useState<string>('');
    const [page, setPage] = useState<number>(1);

    const debouncedValue = useDebounce(searchValue, 300);

    const filters = {
        ...(type && { type: type }),
        ...(searchValue && { name: debouncedValue }),
        ...(dimension && { dimension: dimension }),
        ...(page && { page: page })
    };

    return {
        values: { searchValue, type, dimension, page },
        functions: { setSearchValue, setType, setDimension, setPage },
        filters
    }
};
