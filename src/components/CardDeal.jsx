import React from 'react'

// components
import Button from './Button'

// styles
import styles, { layout } from '../style'

// others
import { relyonus } from '../assets'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Rely on us to have your
        <br className='sm:block hidden' />
        back in hiring anytime.
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We offer direct one-to-one support for any inquiries you have. We offer
        bundle packages with significant discounts and other benefits.
      </p>
      <Button styles='mt-10' />
    </div>
    <div className={layout.sectionImg}>
      <img src={relyonus} alt='card' className='w-[100%] h-[100%]' />
    </div>
  </section>
)

export default CardDeal
