import { NextPage } from 'next';
import { Layout } from '@/components/Layout/Layout';
import { CharactersPage } from '@/pages';

const Characters: NextPage = () => {
    return (
        <Layout title={'Страница персонажей'}>
            <CharactersPage/>
        </Layout>
    )
}

export default Characters