import { FC } from 'react';
import { Layout } from '@/components/Layout/Layout';
import { Banner, Characters } from '@/components';
import cl from '@/components/Characters/Characters.module.scss';

interface HomePageProps {
    characters: Character[];
}

export const HomePage: FC<HomePageProps> = ({ characters }) => {

    return (
        <Layout title='Главная страница Рика и Морти'>
            <main>
                <Banner />
                <section className={'page'}>
                    <div className='container page-container'>
                        <ul className={cl.list}>
                            {characters.slice(0, 9).map((character) => (
                                <Characters.Card
                                    key={character.id}
                                    character={character}
                                />
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </Layout>
    );
};
