import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faKeyboard,
    faCircleQuestion,
    faUser,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';

const items = [
    {
        title: 'Languague',
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        children: {
            headerTitle: 'Languague',
            data: [
                {
                    title: 'Viet nam',
                    code: 'vn',
                },
                {
                    title: 'English',
                    code: 'en',
                },
            ],
        },
    },
    {
        title: 'Feedback and help',
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        to: 'feedback',
    },
    {
        title: 'Keyboard ',
        icon: <FontAwesomeIcon icon={faKeyboard} />,
    },
];

const itemsHaveUser = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '@hoa',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...items,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;
    return (
        <header className={clsx(styles.headerWrap)}>
            <div className={clsx(styles.innerHeader)}>
                <div className={clsx(styles.logo)}>
                    <Link to={config.routes.home}>
                        <img src={images.logo} alt="tiktok" />
                    </Link>
                </div>
                <div className={clsx(styles.fixHeadlessTippy)}>
                    <Search />
                </div>
                <div className={clsx(styles.actions)}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <span className={clsx(styles.iconHaveUser)}>
                                    <UploadIcon />
                                </span>
                            </Tippy>
                            <Tippy content="Message" placement="bottom">
                                <span className={clsx(styles.iconHaveUser)}>
                                    <MessageIcon
                                        className={clsx(styles.iconMessage)}
                                    />
                                    <span className={clsx(styles.notifi)}>
                                        24
                                    </span>
                                </span>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                textOutline
                                iconLeft={<FontAwesomeIcon icon={faPlus} />}
                            >
                                Tai len
                            </Button>
                            <Button primary to={'/'}>
                                Dang nhap
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? itemsHaveUser : items}>
                        {currentUser ? (
                            <div className={clsx(styles.imgUser)}>
                                <Image
                                    // fallBack="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1682388000&x-signature=SdSB8DseQwNNNt3OBuSf%2BpSLf%2Bk%3D"
                                    // src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1682388000&x-signature=SdSB8DseQwNNNt3OBuSf%2BpSLf%2Bk%3D"
                                    alt="imgUser"
                                />
                            </div>
                        ) : (
                            <button className={clsx(styles.optionBtn)}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
