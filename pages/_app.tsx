import { trpc } from '@/app/utils/trpc';
import type { AppType } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import '@/styles/globals.scss';

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <>
            <NextNProgress color="#55cc44" startPosition={0.5} stopDelayMs={200} height={6} showOnShallow={true} />
            <Component {...pageProps} />
        </>
    );
};

export default trpc.withTRPC(MyApp);
