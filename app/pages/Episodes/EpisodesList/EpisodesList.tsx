import { FC } from 'react';
import { Typography } from '@/components/Typography';
import Link from 'next/link';
import { Skeletons } from '@/app/components/Skeletons';
import cl from './EpisodesList.module.scss';


interface EpisodesListInterface {
    episodes: Episode[]
    isLoading: boolean
}

export const EpisodesList: FC<EpisodesListInterface> = ({episodes, isLoading}) => {

    if (!episodes || isLoading) return <Skeletons.Episodes/>


    return (
        <ul className={cl.list}>
            {episodes?.map((episode) => (
                <li key={episode.id} className={cl.item}>
                    <Link href={`/episode/${episode.id}`}>
                        <Typography tag={'h2'} variant={'title-1'} className={cl.link}>
                            {episode.name}
                        </Typography>
                    </Link>

                    <Typography tag={'h2'} variant={'body-1'}>
                        Code - {episode.episode}
                    </Typography>
                </li>
            ))}
        </ul>
    )
}