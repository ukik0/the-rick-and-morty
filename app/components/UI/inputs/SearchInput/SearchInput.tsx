import {ChangeEvent, Dispatch, FC, SetStateAction, useCallback} from 'react';
import {Typography} from '@/components/Typography';
import cn from 'classnames';
import cl from './SearchInput.module.scss';

interface SearchCharactersInputProps {
    label: string;
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
    placeholder: string;
    className?: string;
}

export const SearchInput: FC<SearchCharactersInputProps> = ({
    label,
    placeholder,
    searchValue,
    setSearchValue,
    className
}) => {
    const inputChangeHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setSearchValue(event.target.value);
        },
        []
    );

    return (
        <div className={cn(cl.wrapper, className)}>
            <Typography tag={'label'} variant={'body-1'} className={cl.label}>
                {label}
            </Typography>

            <input
                value={searchValue}
                type='text'
                className={cl.input}
                placeholder={placeholder}
                onChange={inputChangeHandler}
            />
        </div>
    );
};
