import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

function AccountItem() {
    return (
        <div className={clsx(styles.infoUser)}>
            <div className={clsx(styles.wrapImgUser)}>
                <Image
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1682388000&x-signature=SdSB8DseQwNNNt3OBuSf%2BpSLf%2Bk%3D"
                    alt="imguser"
                />
            </div>
            <div className={clsx(styles.wrapInfo)}>
                <p className={clsx(styles.nameMain)}>
                    Nguyen Van Anh
                    <FontAwesomeIcon
                        className={styles.iconCheck}
                        icon={faCircleCheck}
                    />
                </p>
                <span className={clsx(styles.nameDetail)}>Nguyen van</span>
            </div>
        </div>
    );
}

export default AccountItem;
