import Link from 'next/link';
import { Typography } from '@/components/Typography';
import { FC } from 'react';
import cl from './CharacterStatus.module.scss';
import cn from 'classnames';

interface CharacterStatusProps {
    character: Character;
}

export const CharacterStatus: FC<CharacterStatusProps> = ({ character }) => {
    return (
        <div className={cl.status}>
            <Link href={`/character/${character.id}`}>
                <Typography tag={'h2'} variant={'title-1'} className={cl.name}>
                    {character.name}
                </Typography>
            </Link>

            <span className={cl[`status__info`]}>
                <span className={cn(cl.icon, cl[character.status.toLowerCase()])}></span>
                {character.status} - {character.species}
            </span>
        </div>
    );
};
