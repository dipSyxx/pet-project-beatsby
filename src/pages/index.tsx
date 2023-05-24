import { BackToTop } from '@/elements/BackToTop'
import { Case } from '@/elements/Case'
import { Company } from '@/elements/Company'
import { Footer } from '@/elements/Footer'
import { Header } from '@/elements/Header'
import { Immerse } from '@/elements/Immerse'
import { Intro } from '@/elements/Intro'
import { Products } from '@/elements/Products'
import { Specs } from '@/elements/Specs'
import React from 'react'

export const Home = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Intro />
        <Company />
        <Specs />
        <Case />
        <Immerse />
        <Products />
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}

export default Home
