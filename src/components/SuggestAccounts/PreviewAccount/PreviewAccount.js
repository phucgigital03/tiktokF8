import styles from './PreviewAccount.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button/Button';
import Image from '~/components/Image/Image';

function PreviewAccount() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.header)}>
                <Image className={clsx(styles.image)} src={'error'} alt="" />
                <Button outline className={clsx(styles.follow)}>
                    Follow
                </Button>
            </div>
            <div className={clsx(styles.info)}>
                <h4 className={clsx(styles.nickName)}>
                    <strong>Phuc digital</strong>
                    <FontAwesomeIcon className={clsx(styles.checkIcon)} icon={faCheckCircle} />
                </h4>
                <p className={clsx(styles.name)}>Nguyen Quoc Phuc</p>
            </div>
            <div className={clsx(styles.analytics)}>
                <strong className={clsx(styles.value)}>2M</strong>
                <span className={clsx(styles.label)}>Follower</span>
                <strong className={clsx(styles.value)}>57.5M</strong>
                <span className={clsx(styles.label)}>Like</span>
            </div>
        </div>
    );
}

export default PreviewAccount;
