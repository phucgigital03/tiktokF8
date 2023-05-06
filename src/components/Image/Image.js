import clsx from 'clsx';
import styles from './Image.module.scss';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import images from '~/assets/images';

function Image({ src, alt, className, fallBack: fallBackFrOut = images.noImage, ...props }) {
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

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
};

export default Image;
