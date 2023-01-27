import { trpc } from '@/utils/trpc';
import { SearchInput } from '@/components';
import { PaginationBlock } from '@/app/pages/Characters/PaginationBlock/PaginationBlock';
import { useEpisodesFilter } from '@/app/pages/Episodes/useEpisodesFilter';
import { EpisodesList } from '@/app/pages/Episodes/EpisodesList/EpisodesList';
import cl from './Episodes.module.scss';

export const EpisodesPage = () => {
    const {values, functions, filters} = useEpisodesFilter()

    const { data: episodesResponse, isLoading } = trpc.getFilteredEpisodes.useQuery(filters);

    const episodes = episodesResponse?.response.results as Episode[];
    const pages = episodesResponse?.response.info.pages as number;

    return (
        <div className='container'>
            <div className={cl.wrapper}>
                <PaginationBlock page={values.page} pages={pages} setPage={functions.setPage} />
            </div>

            <SearchInput label={'Название эпизода'} searchValue={values.searchValue} setSearchValue={functions.setSearchValue} placeholder={'Название эпизода'} className={cl.input} />
            <SearchInput label={'Код эпизода'} searchValue={values.episode} setSearchValue={functions.setEpisode} placeholder={'Код эпизода'} className={cl.input} />

            <EpisodesList episodes={episodes} isLoading={isLoading}/>
        </div>
    );
};
