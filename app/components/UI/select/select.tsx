import { Typography } from '@/components/Typography';
import { Dispatch, FC, SetStateAction } from 'react';
import cn from 'classnames';
import cl from './select.module.scss';

interface SelectProps {
    title: string;
    dependencies: string[];
    currentElement: string;
    setCurrentElement: Dispatch<SetStateAction<string>>;
}

export const Select: FC<SelectProps> = ({ title, dependencies, currentElement, setCurrentElement }) => {
    return (
        <div className={cl.wrapper}>
            <Typography tag={'span'} variant={'body-1'} className={cl.title}>
                {title}
            </Typography>

            <ul className={cl.list}>
                {dependencies.map((deps, ) => (
                    <li key={deps}>
                        <button
                            className={cn(cl.btn, {
                                [cl.active]: currentElement === deps
                            })}
                            onClick={() => setCurrentElement(deps)}
                        >
                            {deps}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
