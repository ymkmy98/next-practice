import React from 'react'
import Container from '@/components/layouts/Container'
import Logo from '@/components/elements/Logo'
import styles from '@/styles/layouts/footer.module.css'

export default function Footer() {
  return (
  <footer className={styles.wrapper}>
    <Container>
      <div className={styles.flexContainer}>
      <Logo />
      [ソーシャル]
      </div>
    </Container>
  </footer>
  )
}