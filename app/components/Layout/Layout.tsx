import { FC, ReactNode } from 'react';
import { Layouts } from './index';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
    title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
    const seo = {
        title: 'The Rick And Morty',
        description: 'Do you The Rick And Morty ?'
    };

    return (
        <>
            <Head>
                <title>{title || seo.title}</title>
                <meta name='description' content={seo.description} />
                <meta
                    name='viewport'
                    content='width=device-width,initial-scale=1'
                />
            </Head>

            <Layouts.Header />
            {children}
            <Layouts.Footer />
        </>
    );
};
