'use strict';

import React from 'react'
import classNames from 'classnames'
import styles from '../../css/components/header.css'


export default class Header extends React.Component {
    render() {

        const header = classNames(
            styles.lHeader,
            styles.header
        );

        return (
            <header ref="header" className={header}>
                <h1 className={styles.headerTitle}><a className="header-link" href="/">Line Height Checker</a></h1>
            </header>
        );
    }
}
