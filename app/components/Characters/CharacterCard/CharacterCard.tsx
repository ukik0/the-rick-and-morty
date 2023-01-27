import { FC } from 'react';
import { Characters } from '@/app/components/Characters';
import { Typography } from '@/components/Typography';
import Image from 'next/image';
import Link from 'next/link';
import cl from '../Characters.module.scss';

interface CharacterItemProps {
    character: Character;
}

export const CharacterCard: FC<CharacterItemProps> = ({ character }) => {

    return (
        <li className={cl.card}>
            <div className={cl[`image__wrapper`]}>
                <Image
                    src={character.image}
                    alt={character.name}
                    width={300}
                    height={300}
                    className={cl.image}
                    priority
                />
            </div>

            <div className={cl.info}>
                <Characters.Status character={character} />

                <div className={cl.block}>
                    <Typography
                        tag={'h2'}
                        variant={'title-2'}
                        className={cl.title}
                    >
                        Last known location:
                    </Typography>

                    <Link
                        href={`/location/${character.location.url.replace(
                            'https://rickandmortyapi.com/api/location/',
                            ''
                        )}`}
                    >
                        <Typography
                            tag={'span'}
                            variant={'title-2'}
                            className={cl.subtitle}
                        >
                            {character.location.name}
                        </Typography>
                    </Link>
                </div>

                <div className={cl.block}>
                    <Typography
                        tag={'h2'}
                        variant={'title-2'}
                        className={cl.title}
                    >
                        Gender
                    </Typography>

                    <Typography
                        tag={'span'}
                        variant={'title-2'}
                        className={cl.subtitle}
                    >
                        {character.gender}
                    </Typography>
                </div>
            </div>
        </li>
    );
};
