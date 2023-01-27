import { CharacterPage } from '@/app/pages/Character/[id]';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Layout } from '@/components/Layout/Layout';
import { charactersApi } from '@/app/utils';


const Character: NextPage<Character> = (character ) => {

    return (
        <Layout title={character.name}>
            <CharacterPage character={character}/>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const { data: characters } = await charactersApi.getCharacters({});

        const paths = characters.results.map((character) => ({
            params: {
                id: String(character.id)
            }
        }));

        return {
            paths,
            fallback: 'blocking'
        };
    } catch (e) {
        return {
            paths: [],
            fallback: false
        };
    }
};


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { data: character } = await charactersApi.getCharacter({id: Number(params!.id)});

    return {
        props: character
    };
};

export default Character;
