import React from 'react';
import Logo from 'components/logo';
import styles from 'styles/footer.module.css';
import Container from 'components/container';
import Social from 'components/social';

export default function Hero() {
    return (
        <footer className={styles.wrapper}>
            <Container>
            <div className={styles.flexContainer}>
            <Logo />
            <Social />
            </div>
            </Container>
        </footer>
        )
}