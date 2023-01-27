import { FC } from 'react';
import Link from 'next/link';
import { Skeletons, Typography } from '@/app/components';
import cl from './LocationsList.module.scss';

interface LocationsListProps {
    locations: Location[];
    isLoading: boolean
}

export const LocationsList: FC<LocationsListProps> = ({ locations, isLoading }) => {

    if (!locations || isLoading) return <Skeletons.Locations/>;

    return (
        <ul className={cl.list}>
            {locations.map((location) => (
                <li key={location.id} className={cl.item}>
                    <Link href={`location/${location.id}`}>
                        <Typography tag={'h2'} variant={'title-1'} className={cl.link}>
                            {location.name}
                        </Typography>
                    </Link>

                    <Typography tag={'h2'} variant={'body-1'}>
                        Тип - {location.type}
                    </Typography>

                    <Typography tag={'h2'} variant={'body-2'}>
                       Dimension - {location.dimension}
                    </Typography>
                </li>
            ))}
        </ul>
    );
};
