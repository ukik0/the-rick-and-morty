import { useState } from 'react';
import { useDebounce } from '@/app/utils';

export const useCharactersFilter = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [status, setStatus] = useState<Status | 'all'>('all');
    const [gender, setGender] = useState<Gender | 'all'>('all');
    const [page, setPage] = useState<number>(1);

    const debouncedValue = useDebounce(searchValue, 500);


    const filters = {
        ...(status !== 'all' && { status: status }),
        ...(gender !== 'all' && { gender: gender }),
        ...(searchValue && { name: debouncedValue }),
        ...(page && { page: page })
    };

    return {
        values: { searchValue, status, gender, page },
        functions: { setSearchValue, setStatus, setGender, setPage, },
        filters
    }
}