import clsx from 'clsx';
import styles from './SuggestAccounts.module.scss';

import AccountItem from './AcountItem';

function SuggestAccounts({ labbel }) {
    return (
        <div className={clsx(styles.suggestAccounts)}>
            <p className={clsx(styles.heading)}>{labbel}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={clsx(styles.watchMore)}>see all</p>
        </div>
    );
}

export default SuggestAccounts;
