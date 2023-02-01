import { NextPage } from 'next';
import { Layout } from '@/components/Layout/Layout';
import { GamePage } from '@/pages';

const Game: NextPage = () => {
    return (
        <Layout title={'Страница Игры (Жив персонаж или мёртв)'}>
            <GamePage />
        </Layout>
    );
};

export default Game;
