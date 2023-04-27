import clsx from 'clsx';
import { useState } from 'react';

import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({
    src,
    alt,
    className,
    fallBack: fallBackFrOut = images.noImage,
    ...props
}) {
    const [fallBack, setFallBack] = useState('');
    const handleFallBack = () => {
        setFallBack(fallBackFrOut);
    };
    return (
        <img
            className={clsx(styles.img, {
                [className]: className,
            })}
            src={src || fallBack}
            alt={alt}
            {...props}
            onError={handleFallBack}
        />
    );
}

export default Image;
