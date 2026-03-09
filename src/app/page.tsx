import React from 'react'
import Hero from '@/src/components/landing/hero'
import About from '@/src/components/landing/about'
import RwandaAdvantages from '@/src/components/landing/rwanda-advantages'
import Process from '@/src/components/landing/process'
import PartnershipEcosystem from '@/src/components/landing/partnership-ecosystem'
import CaseStudy from '@/src/components/landing/case-study'
import Founder from '@/src/components/landing/founder'
import Cta from '@/src/components/cta'

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <RwandaAdvantages />
      <Process />
      <PartnershipEcosystem />
      <CaseStudy />
      <Founder />
      <Cta />
    </>
  )
}

export default page