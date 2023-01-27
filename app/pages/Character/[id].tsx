import { Characters } from '@/app/components';
import { FC } from 'react';

interface CharacterDynamicPageProps {
    character: Character
}

export const CharacterPage: FC<CharacterDynamicPageProps> = ({character}) => {

    const characterEpisodes = character.episode.map((episode) => episode.replace('https://rickandmortyapi.com/api/episode/', '')).join(',')

    return (
        <>
            <main>
                <div className='container'>
                    <Characters.Card character={character} />

                    <Characters.Episodes characterEpisodes={characterEpisodes} />
                </div>
            </main>
        </>
    );
};
