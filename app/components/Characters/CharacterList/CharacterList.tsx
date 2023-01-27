import { Characters } from '@/components/Characters';
import { FC } from 'react';
import { Skeletons } from '../../Skeletons';
import cl from './CharacterList.module.scss';

interface CharacterListProps {
    characters: Character[];
    isLoading: boolean
}

export const CharacterList: FC<CharacterListProps> = ({ characters, isLoading }) => {

    if (!characters || isLoading) return <Skeletons.Characters/>

    return (
        <ul className={cl.list}>
            {characters?.map((character) => (
                <Characters.Card key={character.id} character={character} />
            ))}
        </ul>
    );
};
