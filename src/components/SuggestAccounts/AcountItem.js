import clsx from 'clsx';
import styles from './SuggestAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Image from '../Image/Image';
import { PopperWrap } from '~/components/Popper';
import PreviewAccount from './PreviewAccount/PreviewAccount';

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className={clsx(styles.previewAccount)} tabIndex="-1" {...props}>
                <PopperWrap>
                    <PreviewAccount />
                </PopperWrap>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                delay={[800, 0]}
                // visible={true}
                interactive
                offset={[-20, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={clsx(styles.accountItem)}>
                    <Image className={clsx(styles.image)} src={'error'} alt="" />
                    <div className={clsx(styles.wrapInfo)}>
                        <h4 className={clsx(styles.nickName)}>
                            <strong>Phuc digital</strong>
                            <FontAwesomeIcon
                                className={clsx(styles.checkIcon)}
                                icon={faCheckCircle}
                            />
                        </h4>
                        <p className={clsx(styles.name)}>Nguyen Quoc Phuc</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
