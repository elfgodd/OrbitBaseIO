import React from 'react'

// components
import Button from './Button'

// styles
import styles from '../style'

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2}>Lean into our Partner Network!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We have many alliances with other tech communities to reach more than 1
        million impressions
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)

export default CTA
