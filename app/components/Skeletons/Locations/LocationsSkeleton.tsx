import cl from './LocationsSkeleton.module.scss';

export const LocationsSkeleton = () => {
    return (
        <ul className={cl.list}>
            {[...new Array(30).fill(0).map((item, idx) => (
                    <li key={idx} className={cl.item}>

                    </li>
                )
            )
            ]}
        </ul>
    )
}