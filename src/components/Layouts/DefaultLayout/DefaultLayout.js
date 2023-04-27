import clsx from 'clsx';

import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layouts/components/Header';
import SideBar from './SideBar/SideBar';

function DefaultLayout({ children }) {
    return (
        <div className={clsx(styles.defaultLayout)}>
            <Header />
            <div className={clsx(styles.container)}>
                <SideBar />
                <div className={clsx(styles.content)}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
