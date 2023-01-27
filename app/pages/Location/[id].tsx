import { FC } from 'react';
import { Residents } from '@/app/pages/Location/Residents/Residents';
import { Typography } from '@/components';
import cl from './Location.module.scss';

interface LocationPageProps {
    location: Location
}

export const LocationPage: FC<LocationPageProps> = ({location}) => {

    const residentRequest = location.residents

    const residents = residentRequest.map((resident) => resident.replace('https://rickandmortyapi.com/api/character/', '')).join()

    return (
        <div className='container'>
            <Typography tag={'h1'} variant={'banner'} className={cl.title}>
                {location.name}
            </Typography>

            <Typography tag={'h2'} variant={'body-1'} className={cl.title}>
                Dimension - {location.dimension}
            </Typography>

            <Typography tag={'h2'} variant={'body-1'} className={cl.title}>
                Type - {location.type}
            </Typography>

            <Residents residents={residents} />
        </div>
    )
}