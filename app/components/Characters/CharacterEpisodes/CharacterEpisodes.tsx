import { FC } from 'react';
import Link from 'next/link';
import { Typography } from '@/components/Typography';
import { trpc } from '@/utils/trpc';
import { Skeletons } from '../../Skeletons';
import cl from './CharacterEpisodes.module.scss';

interface CharacterEpisodesProps {
    characterEpisodes: string
}

export const CharacterEpisodes: FC<CharacterEpisodesProps> = ({characterEpisodes}) => {
    const { data: episodesRequest, isLoading } = trpc.getMultipleEpisodes.useQuery({episodes: characterEpisodes ? characterEpisodes : '1'});

    if (!episodesRequest || isLoading) return <Skeletons.Episodes/>

    const episodes: Character[] =  Array.isArray(episodesRequest.response) ? episodesRequest.response : [episodesRequest.response]

    return (
        <ul className={cl.list}>
            {episodes.map((episode) => (
               <li className={cl.item} key={episode.id}>
                   <Link href={`/episode/${episode.id}`}>
                       <Typography  tag={'h1'} variant={'title-1'}>
                           {episode.name} ({episode.episode})
                       </Typography>
                   </Link>
               </li>
            ))}
        </ul>
    )
}