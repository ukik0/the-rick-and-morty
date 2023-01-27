import Link from 'next/link';
import { Logo } from '@/components/Icons';
import { Nav } from '@/components/Layout';
import cl from './Header.module.scss';

export const Header = () => {

    return (
        <header className={cl.header}>
            <div className='container'>
                <div className={cl.content}>
                    <Link href={'/'} className={cl.logo}>
                        <Logo />
                    </Link>

                    <Nav/>
                </div>
            </div>
        </header>
    );
};
