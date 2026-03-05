import React from 'react'
import Hero from '@/src/components/services/hero'
import Service from '@/src/components/services/service'
import Discover from '@/src/components/services/discover'
import Faq from '@/src/components/services/faq'

const page = () => {
  return (
    <>
      <Hero />
      <Service />
      <Discover />
      <Faq />
    </>
  )
}

export default page