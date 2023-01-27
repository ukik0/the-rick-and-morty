import { FC } from 'react';
import { trpc } from '@/utils/trpc';
import { Characters, Skeletons } from '@/app/components';

interface EpisodeCharactersProps {
    charactersId: string
}

export const EpisodeCharacters: FC<EpisodeCharactersProps> = ({charactersId}) => {

    const {data: charactersResponse, isLoading} = trpc.getMultipleCharacters.useQuery({id: charactersId})

    if (!charactersResponse || isLoading) return <Skeletons.Characters/>

    const characters = charactersResponse.response as Character[]

    return <Characters.Show response={charactersResponse} characters={characters}/>
}