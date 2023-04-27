import clsx from 'clsx';

import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function HeaderMenu({ title, handleBackMenu = () => {} }) {
    return (
        <div className={clsx(styles.headerMenu)}>
            <span onClick={handleBackMenu}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </span>
            <p>{title}</p>
        </div>
    );
}

export default HeaderMenu;
