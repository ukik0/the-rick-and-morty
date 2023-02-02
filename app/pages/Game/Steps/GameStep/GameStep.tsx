import {FC} from 'react';
import {Typography} from '@/components';
import {useGameStep} from './useGameStep';
import Image from 'next/image';
import cn from 'classnames';
import cl from './GameStep.module.scss';

interface GameStepProps {
    gameStatus: Game;
    next: () => void;
}

export const GameStep: FC<GameStepProps> = ({ gameStatus, next }) => {
    const {variables, character, functions} = useGameStep({gameStatus, next})

    return (
        <div className={cl.wrapper}>
            <Typography tag={'h1'} variant={'title-1'} className={cl.title}>
                Died or Alive or Unknown
            </Typography>

            <div className={cl.data}>
                <Typography tag={'h2'} variant={'sub-title-1'}>
                    Жизней: {variables.lives}
                </Typography>

                <Typography tag={'h2'} variant={'sub-title-1'}>
                    Очков: {variables.score}
                </Typography>
            </div>

            <div
                className={cn(cl.img__wrapper, {
                    [cl.img__loading]: variables.isLoading
                })}
            >
                {character && (
                    <Image src={character.image} alt={character.name} width={300} height={500} className={cl.image} priority/>
                )}
            </div>

            <Typography tag={'span'} variant={'body-2'}>
                Выберите состояние персонажа
            </Typography>

            <div
                className={cn(cl.options, cl[variables.answerStatus])}
                onAnimationEnd={() => functions.setAnswerStatus('null')}
            >
                <button disabled={variables.isLoading} onClick={() => functions.handleOptionClick('dead')}>
                    🙈 dead
                </button>
                <button disabled={variables.isLoading} onClick={() => functions.handleOptionClick('alive')}>
                    🙉 alive
                </button>
                <button disabled={variables.isLoading} onClick={() => functions.handleOptionClick('unknown')}>
                    🙊 unknown
                </button>
            </div>
        </div>
    );
};
