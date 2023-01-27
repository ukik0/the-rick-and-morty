import Link from 'next/link';
import { NAVIGATION } from '@/utils/constants';
import { useRouter } from 'next/router';
import { Typography } from '@/components/Typography';
import cn from 'classnames';
import cl from '../Header.module.scss';

export const Nav = () => {
    const { asPath } = useRouter();

    return (
        <nav>
            <ul>
                {NAVIGATION.map(({ href, title }) => (
                    <li key={title}>
                        <Link href={href}>
                            <Typography
                                tag={'span'}
                                variant={'sub-title-1'}
                                className={cn(cl.link, {
                                    [cl.current]: asPath === href
                                })}
                            >
                                {title}
                            </Typography>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
