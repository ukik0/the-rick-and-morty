import {useState} from 'react';
import {Steps} from '@/app/pages/Game/Steps';

const INITIAL_GAME = {
    status: 'not-started',
    name: '',
    startTime: 0
} as const;

export const GamePage = () => {
    const [gameStatus, setGameStatus] = useState<Game>(INITIAL_GAME);

    return (
        <div className='container'>
            {gameStatus.status === 'not-started' && (
                <Steps.WriteName
                    next={(values) =>
                        setGameStatus({
                            ...gameStatus,
                            status: 'started',
                            name: values.name
                        })
                    }
                />
            )}
            {gameStatus.status === 'started' && (
                <Steps.Game
                    gameStatus={gameStatus}
                    next={() => setGameStatus({ ...gameStatus, status: 'end' })}
                />
            )}
            {gameStatus.status === 'end' && (
                <Steps.Over
                    name={gameStatus.name}
                    next={() =>
                        setGameStatus({
                            ...gameStatus,
                            name: '',
                            status: 'not-started'
                        })
                    }
                />
            )}
        </div>
    );
};
