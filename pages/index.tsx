import { NextPage } from 'next';
import { HomePage } from '@/pages';
import { charactersApi, getRandomPage } from '@/app/utils';

const Home: NextPage<Result<Character[]>> = (characters)  => {

    return <HomePage characters={characters.results}/>;
}

export default Home

export async function getStaticProps() {
    const counts = await charactersApi.getCharacters({})
    const page = getRandomPage(1, counts.data.info.pages)

    const {data: characters} = await charactersApi.getCharacters({page: page})

    return {
        props: characters
    }
}