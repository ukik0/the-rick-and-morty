import {useState} from "react";
import {getRandomCharacterId} from "@/app/utils";
import {trpc} from "@/utils/trpc";
import Game from "@/pages/game";

interface IUseGameStep {
    next: () => void
    gameStatus: Game
}

export const useGameStep = ({next, gameStatus}: IUseGameStep) => {
    const [answerStatus, setAnswerStatus] = useState<'right' | 'wrong' | 'null'>('null');
    const [lives, setLives] = useState<number>(3);
    const [score, setScore] = useState<number>(0);
    const [characterId, setCharacterId] = useState<number>(getRandomCharacterId(500));

    const { data: characterResponse } = trpc.getCharacter.useQuery(
        { id: characterId },
        { enabled: gameStatus.status === 'started' }
    );

    const character = characterResponse?.response;

    const checkCharacterStatusMutation = trpc.checkCharacterStatus.useMutation();
    const createPlayerMutation = trpc.createPlayer.useMutation()

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
            const createPlayerResponse = await createPlayerMutation.mutateAsync({
                name: gameStatus.name,
                score: score,
            })
            return next();
        }

        setCharacterId(getRandomCharacterId(500));
    };

    const isLoading = createPlayerMutation.isLoading || checkCharacterStatusMutation.isLoading

    return {
        character: character,
        variables: {answerStatus, lives, score, characterId, isLoading},
        functions: {
            handleOptionClick,
            setAnswerStatus
        }
    }
}