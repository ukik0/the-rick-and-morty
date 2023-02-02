import {Typography} from '@/components';
import {trpc} from '@/utils/trpc';
import cl from './Liderboard.module.scss';

export const Liderboard = () => {
    const { data: gamePlayersRequest, isLoading } = trpc.getGamePlayers.useQuery({});

    //TODO: Скелетон лидерборда
    if (!gamePlayersRequest || isLoading) return <span>Загрузка...</span>

    const players = gamePlayersRequest.response as Player[];

    return (
        <div className={cl.wrapper}>
            <Typography tag={'h1'} variant={'sub-title-1'} className={cl.title}>
                Таблица лидеров
            </Typography>

            <ul className={cl.list}>
                {players.map((player) => (
                    <li className={cl.item} key={player.id}>
                        <Typography tag={'span'} variant={'sub-title-1'} className={cl.name}>
                            {player.name} -{' '}
                            <Typography tag={'span'} variant={'body-2'} className={cl.score}>
                                {player.score}
                            </Typography>
                        </Typography>
                    </li>
                ))}
            </ul>
        </div>
    );
};
