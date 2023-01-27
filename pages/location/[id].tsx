import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Layout } from '@/components/Layout/Layout';
import { LocationPage } from '@/pages';
import { locationsApi } from '@/app/utils';

const Location: NextPage<Location> = (location) => {
    return (
        <Layout title={location.name}>
            <LocationPage location={location}/>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const { data: locations } = await locationsApi.getLocations();

        const paths = locations.results.map((location) => ({
            params: {
                id: String(location.id)
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

    const { data: location } = await locationsApi.getLocation({id: Number(params!.id)});

    return {
        props: location
    };
};


export default Location