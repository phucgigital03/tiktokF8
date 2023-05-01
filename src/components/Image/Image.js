import clsx from 'clsx';
import { useRef, useState } from 'react';

import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({
    src,
    alt,
    className,
    fallBack: fallBackFrOut = images.noImage,
    ...props
}) {
    const imgRef = useRef();
    const [fallBack, setFallBack] = useState('');
    const handleFallBack = () => {
        if (src) {
            imgRef.current.src = fallBackFrOut;
        } else {
            setFallBack(fallBackFrOut);
        }
    };
    return (
        <img
            ref={imgRef}
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
