import { FC, ReactNode } from 'react';
import cn from 'classnames';
import cl from './PaginationButton.module.scss';

interface NextPageButtonProps {
    children: ReactNode
    className?: string
    onClick?: () => void
}

export const PaginationButton: FC<NextPageButtonProps> = ({children, className, onClick}) => {
    return (
        <button onClick={onClick} className={cn(cl.btn, className)}>{children}</button>
    )
}