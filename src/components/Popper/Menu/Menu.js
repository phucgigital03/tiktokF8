import clsx from 'clsx';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import styles from './Menu.module.scss';
import PopperWrap from '../Popper';
import Button from '~/components/Button';
import HeaderMenu from './HeaderMenu';

function Menu({ children, items }) {
    const [dataMenu, setDataMenu] = useState([{ data: items }]);
    const currentMenu = dataMenu[dataMenu.length - 1];
    const onchange = (item) => {
        console.log(item);
    };
    const handleDateMenu = (items) => {
        setDataMenu((prevState) => {
            return [...prevState, items];
        });
    };
    const handleBackMenu = () => {
        setDataMenu((prevState) => {
            prevState.pop();
            return [...prevState];
        });
    };
    return (
        <Tippy
            onHide={() => {
                setDataMenu((prevState) => [prevState[0]]);
            }}
            delay={[0, 700]}
            visible={true}
            offset={[10, 12]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={clsx(styles.menuList)} tabIndex="-1" {...attrs}>
                    <PopperWrap>
                        {dataMenu.length > 1 && (
                            <HeaderMenu
                                handleBackMenu={handleBackMenu}
                                title={currentMenu.headerTitle}
                            />
                        )}
                        {currentMenu.data.map((item, ind) => {
                            const checkChildren = !!item.children;
                            return (
                                <Button
                                    key={ind}
                                    to={item.to}
                                    iconLeft={item.icon}
                                    className={clsx(styles.menuItem, {
                                        [styles.separate]: item.separate,
                                    })}
                                    onClick={() => {
                                        if (checkChildren) {
                                            handleDateMenu(item.children);
                                        } else {
                                            onchange(item);
                                        }
                                    }}
                                >
                                    {item.title}
                                </Button>
                            );
                        })}
                    </PopperWrap>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
