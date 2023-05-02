import clsx from 'clsx';

import styles from './SideBar.module.scss';
function SideBar() {
    return (
        <aside className={clsx(styles.sideBar)}>
            <h3>sidebar</h3>
        </aside>
    );
}

export default SideBar;
