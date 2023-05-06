import clsx from 'clsx';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Image from '~/components/Image';

function AccountItem({ item, handleHidden = () => {} }) {
    return (
        <Link
            to={`/profile/${item.nickname}`}
            className={clsx(styles.infoUser)}
            onClick={handleHidden}
        >
            <div className={clsx(styles.wrapImgUser)}>
                <Image src={item.avatar} alt="imguser" />
            </div>
            <div className={clsx(styles.wrapInfo)}>
                <p className={clsx(styles.nameMain)}>
                    {item.full_name}
                    {item.tick && (
                        <FontAwesomeIcon className={styles.iconCheck} icon={faCircleCheck} />
                    )}
                </p>
                <span className={clsx(styles.nameDetail)}>{item.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    item: PropTypes.object.isRequired,
    handleHidden: PropTypes.func,
};

export default AccountItem;
