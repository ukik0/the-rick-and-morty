import cl from './EpisodesSkeleton.module.scss';

export const EpisodesSkeleton = () => {
    return (
        <ul className={cl.list}>
            {[...new Array(30).fill(0).map((item, idx) => (
                    <li key={idx} className={cl.item}>

                    </li>
                    )
                )
            ]}
        </ul>
    );
};
