import clsx from 'clsx';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

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

HeaderMenu.propTypes = {
    title: PropTypes.string,
    handleBackMenu: PropTypes.func,
};

export default HeaderMenu;
