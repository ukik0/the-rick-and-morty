import cl from './CharactersSkeleton.module.scss';

export const CharactersSkeleton = () => {
    return (
        <ul className={cl.list}>
            {[...new Array(15).fill(0).map((item, idx) => (
                <li key={idx} className={cl.item}>
                </li>
            ))]}
        </ul>
    )
}