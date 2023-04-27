import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

function Button({
    children,
    primary = false,
    outline = false,
    rounded = false,
    textOutline = false,
    disabled = false,
    lg = false,
    sm = false,
    className,
    iconLeft,
    iconRight,
    href,
    to,
    onClick,
    ...passProps
}) {
    let Button = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (href) {
        Button = 'a';
        props.href = href;
    } else if (to) {
        Button = Link;
        props.to = to;
    }

    return (
        <Button
            className={clsx(styles.btn, {
                [styles.primary]: primary,
                [styles.outline]: outline,
                [styles.rounded]: rounded,
                [styles.textOutline]: textOutline,
                [styles.disabled]: disabled,
                [styles.lg]: lg,
                [styles.sm]: sm,
                [className]: className,
            })}
            {...props}
        >
            {iconLeft && <span className={clsx(styles.icon)}>{iconLeft}</span>}
            <span className={clsx(styles.title)}>{children}</span>
            {iconRight && (
                <span className={clsx(styles.icon)}>{iconRight}</span>
            )}
        </Button>
    );
}

export default Button;
