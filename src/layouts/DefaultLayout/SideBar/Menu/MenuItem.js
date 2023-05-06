import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Menu.module.scss';

function MenuItem({ to, title, icon }) {
    return (
        <NavLink className={clsx(styles.navLink)} to={to}>
            {icon}
            <span className={clsx(styles.title)}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
