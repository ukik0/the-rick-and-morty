import {FC} from 'react';
import {Typography} from '@/components';
import {Liderboard} from "../GameOverStep/Liderboard/Liderboard";
import cl from './GameOver.module.scss';

interface GameOverStepProps {
    next: () => void;
    name: string;
}

export const GameOverStep: FC<GameOverStepProps> = ({ next, name }) => {
    return (
        <div className={cl.wrapper}>
            <Typography tag={'h1'} variant={'title-1'}>
                {name.charAt(0).toUpperCase() + name.slice(1)}, вы проиграли
            </Typography>

            <button onClick={next} className={cl.btn}>
                Пройти еще раз
            </button>

            <Liderboard/>
        </div>
    );
};
