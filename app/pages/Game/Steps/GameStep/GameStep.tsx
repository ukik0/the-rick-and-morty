import {FC, useState} from 'react';
import {Typography} from '@/components';
import {getRandomCharacterId} from '@/app/utils';
import {trpc} from '@/utils/trpc';
import Image from 'next/image';
import cl from './GameStep.module.scss';
import cn from 'classnames';

interface GameStepProps {
    gameStatus: Game;
    next: () => void;
}

export const GameStep: FC<GameStepProps> = ({ gameStatus, next }) => {
    const [answerStatus, setAnswerStatus] = useState<'right' | 'wrong' | 'null'>('null');
    const [lives, setLives] = useState<number>(3);
    const [score, setScore] = useState<number>(0);
    const [characterId, setCharacterId] = useState(getRandomCharacterId(500));

    const { data: characterResponse, isLoading } = trpc.getCharacter.useQuery(
        { id: characterId },
        { enabled: gameStatus.status === 'started' }
    );

    const character = characterResponse?.response;

    const checkCharacterStatusMutation = trpc.checkCharacterStatus.useMutation();
    const handleOptionClick = async (answer: Character['status']) => {
        const checkCharacterStatusResponse =
            await checkCharacterStatusMutation.mutateAsync({
                id: characterId,
                status: answer
            });

        const isCorrectAnswer = checkCharacterStatusResponse.success;
        const updatedLives = lives + (isCorrectAnswer ? 0 : -1)
        const isGameOver = !isCorrectAnswer && updatedLives === 0;

        setAnswerStatus(isCorrectAnswer ? 'right' : 'wrong');
        setLives(updatedLives);
        setScore(score + (isCorrectAnswer ? 1 : 0));

        if (isGameOver) {
            return next();
        }

        setCharacterId(getRandomCharacterId(500));
    };

    return (
        <div className={cl.wrapper}>
            <Typography tag={'h1'} variant={'title-1'} className={cl.title}>
                Died or Alive or Unknown
            </Typography>

            <div className={cl.data}>
                <Typography tag={'h2'} variant={'sub-title-1'}>
                    Жизней: {lives}
                </Typography>

                <Typography tag={'h2'} variant={'sub-title-1'}>
                    Очков: {score}
                </Typography>
            </div>

            <div
                className={cn(cl.img__wrapper, {
                    [cl.img__loading]: isLoading
                })}
            >
                {character && (
                    <Image
                        src={character.image}
                        alt={character.name}
                        width={300}
                        height={500}
                        className={cl.image}
                        priority
                    />
                )}
            </div>

            <Typography tag={'span'} variant={'body-2'}>
                Выберите состояние персонажа
            </Typography>

            <div
                className={cn(cl.options, cl[answerStatus])}
                onAnimationEnd={() => setAnswerStatus('null')}
            >
                <button onClick={() => handleOptionClick('dead')}>
                    🙈 dead
                </button>
                <button onClick={() => handleOptionClick('alive')}>
                    🙉 alive
                </button>
                <button onClick={() => handleOptionClick('unknown')}>
                    🙊 unknown
                </button>
            </div>
        </div>
    );
};
