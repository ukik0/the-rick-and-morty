import {FC} from 'react';
import {trpc} from '@/utils/trpc';
import {Characters, Skeletons} from '@/app/components';

interface ResidentsProps {
    residents: string;
}

export const Residents: FC<ResidentsProps> = ({ residents }) => {

    const { data: charactersResponse, isLoading } = trpc.getMultipleCharacters.useQuery({ id: residents });

    if (!charactersResponse || isLoading) return <Skeletons.Characters/>

    // @ts-ignore
    const characters = Array.isArray(charactersResponse.response) ? charactersResponse.response as Character[] : [charactersResponse.response]

    // @ts-ignore
    return <Characters.Show response={charactersResponse} characters={characters}/>
};
