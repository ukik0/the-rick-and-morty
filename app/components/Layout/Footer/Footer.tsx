import { Typography } from '@/components/Typography';
import useCountInfo from '@/utils/hooks/useCountInfo';
import cl from './Footer.module.scss';

export const Footer = () => {
    const { locationsCount, charactersCount, episodesCount } = useCountInfo();

    return (
        <footer className={cl.footer}>
            <div className='container'>
                <ul className={cl.list}>
                    <li>
                        <Typography tag={'h2'} variant={'sub-title-1'}>
                            CHARACTERS: {charactersCount}
                        </Typography>
                    </li>
                    <li>
                        <Typography tag={'h2'} variant={'sub-title-1'}>
                            LOCATIONS: {locationsCount}
                        </Typography>
                    </li>
                    <li>
                        <Typography tag={'h2'} variant={'sub-title-1'}>
                            EPISODES: {episodesCount}
                        </Typography>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
