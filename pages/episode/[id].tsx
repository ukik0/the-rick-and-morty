import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Layout } from '@/components/Layout/Layout';
import { EpisodePage } from '@/pages';
import { episodesApi } from '@/app/utils';

const Episode: NextPage<Episode> = (episode) => {

    return (
        <Layout title={episode.name}>
            <EpisodePage episode={episode} />
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const { data: episodes } = await episodesApi.getEpisodes();

        const paths = episodes.results.map((episode) => ({
            params: {
                id: String(episode.id)
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

    const { data: episode } = await episodesApi.getEpisode({id: Number(params!.id)});

    return {
        props: episode
    };
};

export default Episode