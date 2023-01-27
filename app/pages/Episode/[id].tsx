import { FC } from 'react';
import { Typography } from '@/components';
import { EpisodeCharacters } from '@/app/pages';
import cl from './Episode.module.scss';

interface EpisodeDynamicPageProps  {
    episode: Episode
}

export const EpisodePage: FC<EpisodeDynamicPageProps> = ({episode}) =>  {

    const charactersId = episode.characters.map((character) => character.replace('https://rickandmortyapi.com/api/character/', '')).join(',')

    return (
        <div className='container'>
            <Typography tag={'h1'} variant={'banner'} className={cl.title}>
                {episode.name}
            </Typography>

           <EpisodeCharacters charactersId={charactersId}/>
        </div>
    )
}