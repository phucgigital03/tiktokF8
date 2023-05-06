import clsx from 'clsx';
import styles from './Popper.module.scss';
import PropTypes from 'prop-types';

function Popper({ children }) {
    return <div className={clsx(styles.wrapper)}>{children}</div>;
}

Popper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Popper;
