import { Dispatch, FC, SetStateAction } from 'react';
import cl from './ShowMoreButton.module.scss';

interface ShowMoreButtonProps {
    children: string
    setLimit: Dispatch<SetStateAction<number>>
}

export const ShowMoreButton: FC<ShowMoreButtonProps> = ({setLimit, children}) => {
    return (
        <div className={cl.wrapper}>
            <button className={cl.btn} onClick={() => setLimit((prev) => prev + 5)}>
                {children}
            </button>
        </div>
    )
}