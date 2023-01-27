import { FC, ReactNode } from 'react';
import cn from 'classnames';

type Tag = 'div' | 'span' | 'h1' | 'h2' | 'p' | 'label';
type Variant = 'banner' | 'title-1' | 'title-2' | 'body-1' | 'body-2' | 'sub-title-1' | 'sub-title-2';

interface TypographyProps {
    children: ReactNode
    tag: Tag
    variant: Variant
    className? :string
}

export const Typography: FC<TypographyProps> = ({tag = 'div', variant, children, className}) => {
    const Component = tag

    return (
        <Component className={cn(variant, className)} >
            {children}
        </Component>
    )
}