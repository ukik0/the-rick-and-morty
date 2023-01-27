import { trpc } from '@/utils/trpc';
import { Characters, SearchInput, Select, Typography } from '@/components';
import { useCharactersFilter } from '@/app/pages/Characters/useCharactersFilter';
import { PaginationBlock } from '@/app/pages/Characters/PaginationBlock/PaginationBlock';
import cl from './Characters.module.scss';

export const CharactersPage = () => {
    const {values, functions, filters} = useCharactersFilter()

    const { data: charactersResponse, isLoading } = trpc.getFilteredCharacters.useQuery(filters);

    const pages = charactersResponse?.response.info.pages
    const characters = charactersResponse?.response.results as Character[];


    return (
        <div className='container'>
            <div className={cl.wrapper}>
                <PaginationBlock page={values.page} pages={pages} setPage={functions.setPage}/>
            </div>

            <Typography tag={'h1'} variant={'title-1'} className={cl.title}>
                Filters
            </Typography>

            <SearchInput placeholder='Поиск персонажа' searchValue={values.searchValue} setSearchValue={functions.setSearchValue} label={'name'} />

            <Select title={'status'} dependencies={['all', 'alive', 'dead', 'unknown']} currentElement={values.status} setCurrentElement={functions.setStatus} />
            <Select title={'gender'} dependencies={['all', 'female', 'male', 'genderless', 'unknown']} currentElement={values.gender} setCurrentElement={functions.setGender} />

            <Characters.List characters={characters} isLoading={isLoading}/>
        </div>
    );
};
