import {Characters} from '@/components/Characters';
import {ShowMoreButton} from '@/components/UI/buttons/ShowMoreButton/ShowMoreButton';
import {FC, useState} from 'react';
import cl from './CharactersShowMore.module.scss';

type Response = {
    response: Character[]
}
interface CharactersShowMoreProps {
    response: Response
    characters: Character[]
}

export const CharactersShowMore: FC<CharactersShowMoreProps> = ({response, characters}) => {

    const [limit, setLimit] = useState<number>(10);

    return (
        <>
            <ul className={cl.list}>
                {characters?.slice(0, limit).map((character) => (
                    <Characters.Card key={character.id} character={character} />
                ))}
            </ul>

            {response.response.length > limit && (
                <ShowMoreButton setLimit={setLimit}>
                    Показать еще
                </ShowMoreButton>
            )}
        </>
    );
};
