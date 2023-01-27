import { Dispatch, FC, SetStateAction } from 'react';
import { PaginationButton } from '@/components';
import cl from './PaginationBlock.module.scss';

interface PaginationBlockProps {
    page: number
    pages: number
    setPage: Dispatch<SetStateAction<number>>
}

export const PaginationBlock: FC<PaginationBlockProps> = ({page, pages,setPage}) => {
    return (
        <div className={cl.wrapper}>
            {page > 1 && (
                <PaginationButton
                    className={cl.btn}
                    onClick={() => setPage((prev) => prev - 1)}
                >
                    {'<'} Prev Page
                </PaginationButton>
            )}

            {pages !== page && (
                <PaginationButton
                    className={cl.btn}
                    onClick={() => setPage((prev) => prev + 1)}
                >
                    Next Page {'>'}
                </PaginationButton>
            )}
        </div>
    )
}