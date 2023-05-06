import clsx from 'clsx';
import styles from './SideBar.module.scss';

import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { HomeIcon, LiveIcon, UserGroupIcon } from '~/components/Icons';

function SideBar() {
    return (
        <aside className={clsx(styles.sideBar)}>
            <Menu>
                <MenuItem to={config.routes.home} title={'Home'} icon={<HomeIcon />} />
                <MenuItem
                    to={config.routes.following}
                    title={'Following'}
                    icon={<UserGroupIcon />}
                />
                <MenuItem to={config.routes.live} title={'Live'} icon={<LiveIcon />} />
            </Menu>
        </aside>
    );
}

export default SideBar;
