import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles); // bind object styles tra ve 1 function cx

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                {/* search */}
            </div>
        </header>
    );
};

export default Header;
