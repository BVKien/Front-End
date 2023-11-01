import React from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'

const Button = ({ primary, disabled }) => {

    const classes = clsx(styles.btn,
        {
            [styles.primary]: primary,
            [styles.disabled]: disabled
        }
    )

    return (
        <div>
            <>
                {/* c1 <button className={`${styles.btn}  ${styles.active}`}> */}
                {/* c2 <button className={[styles.btn, styles.active].join(' ')}> */}

                {/* clsx <button className={clsx(styles.btn, styles.active)}>*/}

                {/* <button className={clsx(styles.btn,
                    {
                        [styles.active]: true
                    }
                )}>
                    Click me
                </button> */}

                <button className={classes}>
                    Click me
                </button>

            </>
        </div>
    )
}

export default Button