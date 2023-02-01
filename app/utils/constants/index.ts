import { ROUTES } from '@/utils/constants/routes';

interface Navigation {
    href: string
    title: string
}

export const NAVIGATION: Navigation[] = [
    {
        href: ROUTES.CHARACTERS,
        title: 'Characters'
    },
    {
        href: ROUTES.EPISODES,
        title: 'Episodes'
    },
    {
        href: ROUTES.LOCATIONS,
        title: 'Locations'
    },
    {
        href: ROUTES.GAMES,
        title: 'Game'
    },
]