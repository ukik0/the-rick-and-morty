import { trpc } from '@/utils/trpc';
import { useLocationsFilter } from '@/app/pages/Locations/useLocationsFilter';
import { PaginationBlock } from '@/app/pages/Characters/PaginationBlock/PaginationBlock';
import { SearchInput } from '@/components';
import { LocationsList } from '@/app/pages/Locations/LocationsList/LocationsList';
import cl from './Locations.module.scss';

export const LocationsPage = () => {
    const {values, functions, filters} = useLocationsFilter()

    const {data: locationsResponse, isLoading} = trpc.getFilteredLocations.useQuery(filters)
    const pages = locationsResponse?.response.info.pages as number

    const locations = locationsResponse?.response.results as Location[]


    return (
        <div className='container'>
            <PaginationBlock page={values.page} pages={pages} setPage={functions.setPage}/>

            <SearchInput label={'Имя локации'} searchValue={values.searchValue} setSearchValue={functions.setSearchValue} placeholder={'Имя локации'} className={cl.input}/>
            <SearchInput label={'Тип локации'} searchValue={values.type} setSearchValue={functions.setType} placeholder={'Тип локации'} className={cl.input}/>
            <SearchInput label={'Dimension'} searchValue={values.dimension} setSearchValue={functions.setDimension} placeholder={'Dimension'} className={cl.input}/>

           <LocationsList locations={locations} isLoading={isLoading}/>
        </div>
    )
}